import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import db from '@/lib/db';

export const maxDuration = 60; // Allow more time for Gemini API

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '4mb',
    },
  },
};


// Generate a random ID or user could provide via headers, but this is a local DB MVP
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const files = formData.getAll('images') as File[];
    
    if (!files || files.length === 0) {
      return NextResponse.json({ error: 'No images provided' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return NextResponse.json({ error: 'GEMINI_API_KEY is missing' }, { status: 500 });
    }

    const imageParts = await Promise.all(
      files.map(async (file) => {
        const buffer = await file.arrayBuffer();
        const base64Image = Buffer.from(buffer).toString('base64');
        
        let mimeType = file.type;
        if (!mimeType || mimeType === 'application/octet-stream') {
          const ext = file.name.split('.').pop()?.toLowerCase();
          if (ext === 'png') mimeType = 'image/png';
          else if (ext === 'webp') mimeType = 'image/webp';
          else if (ext === 'heic') mimeType = 'image/heic';
          else mimeType = 'image/jpeg';
        }

        return {
          inlineData: {
            data: base64Image,
            mimeType: mimeType
          }
        };
      })
    );
    
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
    
    Respond STRICTLY with a valid JSON array of objects. Do not include markdown formatting like \`\`\`json. Just the array.
    Example:
    [
      { "name": "Milk", "quantity": 1, "category": "Dairy", "expirationDate": "2024-06-15" },
      { "name": "Apples", "quantity": 4, "category": "Produce", "expirationDate": "2024-06-20" }
    ]
    `;

    const result = await model.generateContent([
      prompt,
      ...imageParts
    ]);

    const responseText = result.response.text();
    let inventoryItems = [];
    
    try {
      // Clean up the text in case Gemini wraps it in markdown blocks
      const cleanJson = responseText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      inventoryItems = JSON.parse(cleanJson);
    } catch (parseError) {
      console.error('Failed to parse Gemini response:', responseText);
      return NextResponse.json({ error: 'Failed to parse inventory data from AI' }, { status: 500 });
    }

    // Insert into Postgres database
    let insertedCount = 0;
    
    // In a real app we'd save the image to S3 or similar, here we'll just save a placeholder
    const mockImageUrl = `/api/placeholder?name=food`;
    
    for (const item of inventoryItems) {
      await db`
        INSERT INTO inventory (name, quantity, category, "expirationDate", "imageUrl")
        VALUES (
          ${item.name || 'Unknown Item'}, 
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
      { error: error instanceof Error ? error.message : 'Unknown server error' },
      { status: 500 }
    );
  }
}
