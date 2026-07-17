import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const { default: db, initDb } = await import('@/lib/db');
    await initDb();
    const items = await db`SELECT * FROM inventory ORDER BY "expirationDate" ASC, name ASC`;

    const lang = req.nextUrl.searchParams.get('lang') || 'English';
    if (lang && lang !== 'English' && items.length > 0) {
      try {
        const apiKey = process.env.GEMINI_API_KEY;
        if (apiKey) {
          const { GoogleGenerativeAI } = await import('@google/generative-ai');
          const genAI = new GoogleGenerativeAI(apiKey);
          const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
          
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const names = items.map((i: any) => i.name);
          const prompt = `Translate this list of food items into the ${lang} language. Maintain the exact same order.
          Input array: ${JSON.stringify(names)}
          
          Respond ONLY with a valid JSON array of strings containing the translations. Do not include markdown formatting.
          Example: ["ஆப்பிள்", "பால்"]`;
          
          const result = await model.generateContent(prompt);
          const responseText = result.response.text();
          const cleanJson = responseText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
          const translatedNames = JSON.parse(cleanJson);
          
          if (Array.isArray(translatedNames) && translatedNames.length === items.length) {
            for (let idx = 0; idx < items.length; idx++) {
              items[idx].name = translatedNames[idx];
            }
          }
        }
      } catch (err) {
        console.error('Failed to dynamically translate inventory:', err);
      }
    }

    return NextResponse.json({ items });
  } catch (error) {
    console.error('Failed to fetch inventory:', error);
    return NextResponse.json({ error: 'Failed to fetch inventory' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });

    const { default: db, initDb } = await import('@/lib/db');
    await initDb();
    const result = await db`DELETE FROM inventory WHERE id = ${id}`;
    
    if (result.length > 0) {
      // If we used RETURNING we could check rows, otherwise just assume success if no error thrown
      // or we can just return success true
      return NextResponse.json({ success: true, id });
    } else {
      // Actually standard DELETE without RETURNING just returns an empty array in the client, 
      // but if no error is thrown, we assume it is successful for this MVP.
      return NextResponse.json({ success: true, id });
    }
  } catch (error) {
    console.error('Failed to delete item:', error);
    return NextResponse.json({ error: 'Failed to delete item' }, { status: 500 });
  }
}
