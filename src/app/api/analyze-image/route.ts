import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const rawText = await req.text();
    let jsonBody;
    try {
      jsonBody = JSON.parse(rawText);
    } catch (e) {
      return NextResponse.json({ error: 'Failed to parse JSON body natively' }, { status: 400 });
    }
    
    const base64Images = jsonBody.images as string[];
    
    if (!base64Images || base64Images.length === 0) {
      return NextResponse.json({ error: 'No images provided' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return NextResponse.json({ error: 'GEMINI_API_KEY is missing' }, { status: 400 });
    }

    const imageParts = base64Images.map((dataUrl) => {
      // Decode the data URL: data:image/jpeg;base64,...
      const parts = dataUrl.split(',');
      const header = parts[0];
      const base64Data = parts[1];
      
      let mimeType = 'image/jpeg';
      if (header.includes('image/png')) mimeType = 'image/png';
      else if (header.includes('image/webp')) mimeType = 'image/webp';
      else if (header.includes('image/heic')) mimeType = 'image/heic';
      
      return {
        inlineData: {
          data: base64Data,
          mimeType: mimeType
        }
      };
    });
    
    // Dynamic imports to strictly trap any Module-Level Panics thrown by Vercel Node runtime
    const { GoogleGenerativeAI } = await import('@google/generative-ai');
    const { default: db, initDb } = await import('@/lib/db');

    // Ensure database columns are migrated
    await initDb();

    // Initialize Gemini API
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // The system prompt to analyze the fridge image
    const prompt = `
    You are an expert domestic AI inventory manager.
    Analyze the following images (which are photos of a fridge, pantry, or grocery receipts).
    Identify all the food items you can clearly see across all images. 
    For each item, guess a reasonable category (Dairy, Produce, Meat, Pantry, Drink, etc).
    Also guess a rough expiration date in YYYY-MM-DD format based purely on standard expiry times (e.g. fresh milk = 7 days from today, canned goods = 1 year from today). Assume today is ${new Date().toISOString().split('T')[0]}.
    Estimate the quantity of each.
    
    CRITICAL: For each food item, you must also translate its name to the Sourashtra language, transliterated into Latin/English script (e.g., "Milk" -> "Dudh", "Onions" -> "Kanno", "Apples" -> "Safarchand", "Eggs" -> "Thando", "Brinjal" -> "Vangi", "Potato" -> "Alu", "Tomato" -> "Tomato", "Lemon" -> "Limbu", "Rice" -> "Rice"). Save this under the key "sourashtraName".
    
    Respond STRICTLY with a valid JSON array of objects. Do not include markdown formatting like \`\`\`json. Just the array.
    Example:
    [
      { "name": "Milk", "sourashtraName": "Dudh", "quantity": 1, "category": "Dairy", "expirationDate": "2024-06-15" },
      { "name": "Apples", "sourashtraName": "Safarchand", "quantity": 4, "category": "Produce", "expirationDate": "2024-06-20" }
    ]
    `;

    // Helper to request content with exponential backoff retries for transient 503/429 errors
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const generateContentWithRetry = async (geminiModel: any, contentParts: any[], retries = 3, retryDelay = 1500): Promise<any> => {
      for (let i = 0; i < retries; i++) {
        try {
          return await geminiModel.generateContent(contentParts);
        } catch (err: unknown) {
          const errorObj = err as { status?: number; message?: string };
          const isRetryable = errorObj?.status === 429 || errorObj?.status === 503 || 
                             errorObj?.message?.includes('503') || errorObj?.message?.includes('429') || 
                             errorObj?.message?.includes('high demand');
          if (isRetryable && i < retries - 1) {
            console.warn(`Gemini API 503/429 encountered, retrying in ${retryDelay}ms... (Attempt ${i + 1} of ${retries})`);
            await new Promise(resolve => setTimeout(resolve, retryDelay));
            retryDelay *= 2;
          } else {
            throw err;
          }
        }
      }
    };

    const result = await generateContentWithRetry(model, [
      prompt,
      ...imageParts
    ]);

    const responseText = result.response.text();
    let inventoryItems = [];
    
    try {
      // Clean up the text in case Gemini wraps it in markdown blocks
      const cleanJson = responseText.replace(/\`\`\`json\n?/g, '').replace(/\`\`\`\n?/g, '').trim();
      inventoryItems = JSON.parse(cleanJson);
    } catch (parseError) {
      console.error('Failed to parse Gemini response:', responseText);
      return NextResponse.json({ error: 'Failed to parse inventory data from AI' }, { status: 400 });
    }

    // Insert into Postgres database
    let insertedCount = 0;
    
    const mockImageUrl = `/api/placeholder?name=food`;
    
    for (const item of inventoryItems) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const anyDb = db as any;
      await anyDb`
        INSERT INTO inventory (name, "sourashtraName", quantity, category, "expirationDate", "imageUrl")
        VALUES (
          ${item.name || 'Unknown Item'}, 
          ${item.sourashtraName || null}, 
          ${item.quantity || 1}, 
          ${item.category || 'Other'}, 
          ${item.expirationDate || null}, 
          ${mockImageUrl}
        )
      `;
      insertedCount++;
    }

    return NextResponse.json({ 
      success: true, 
      message: `Successfully analyzed and added ${insertedCount} items to inventory.`,
      items: inventoryItems 
    });

  } catch (error) {
    console.error('Error analyzing image:', error);
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'Unknown server error',
        stack: error instanceof Error ? error.stack : undefined 
      },
      { status: 400 }
    );
  }
}
