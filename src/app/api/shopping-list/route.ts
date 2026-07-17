import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const { default: db, initDb, purgeOldItems } = await import('@/lib/db');
    await initDb();
    await purgeOldItems();
    
    // A real app would track depleted items over time.
    // For MVP, anything that is expired or quantity = 0 is considered depleted.
    const items = await db`
        SELECT * FROM inventory 
        WHERE quantity <= 0 
        OR ("expirationDate" IS NOT NULL AND "expirationDate" < CURRENT_DATE::text)
        ORDER BY name ASC
    `;

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
        console.error('Failed to dynamically translate shopping list:', err);
      }
    }

    return NextResponse.json({ items });
  } catch (error) {
    console.error('Failed to fetch shopping list:', error);
    return NextResponse.json({ error: 'Failed to fetch shopping list' }, { status: 500 });
  }
}
