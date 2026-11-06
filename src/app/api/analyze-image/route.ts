import { NextRequest, NextResponse } from 'next/server';
import { getAuthenticatedUser, isAuthConfigurationError } from '@/lib/session';
import { getIngredientImage } from '@/lib/produce-styles';
import { sanitizeAndFilterFoodItems } from '@/lib/food-guardrails';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const user = await getAuthenticatedUser(req);
    if (!user) {
      return NextResponse.json({ error: 'Authentication required.' }, { status: 401 });
    }

    const rawText = await req.text();
    let jsonBody;
    try {
      jsonBody = JSON.parse(rawText);
    } catch {
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
          mimeType: mimeType,
        },
      };
    });

    const { GoogleGenerativeAI } = await import('@google/generative-ai');
    const { default: db, initDb } = await import('@/lib/db');

    await initDb();

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-3.6-flash' });

    const prompt = `
    You are an expert domestic AI culinary and fridge inventory manager.
    
    CRITICAL POLICY RULES:
    1. STRICT SAFETY & NON-FOOD REJECTION:
       Analyze the following images. If an image contains inappropriate, offensive, abusive, NSFW, or non-food subjects (e.g. selfies, human faces, pets, animals, clothes, shoes, electronics, furniture, room interiors, garbage), REJECT IT IMMEDIATELY.
       Set "rejected": true and return empty arrays for "items" and "suggestions".
    
    2. STRICT PROHIBITION ON UTENSILS & COOKWARE:
       NEVER classify kitchenware, utensils, or containers as food!
       Under NO circumstances should you output: "Bowl", "Steel Bowl", "Plate", "Vessel", "Pot", "Pan", "Cooker", "Tupperware", "Box", "Container", "Plastic Box", "Cup", "Mug", "Glass", "Bottle", "Spoon", "Fork", "Knife", "Ladle", "Spatula", "Tray", "Shelf", "Rack", "Lid", "Cover", "Foil", or "Packaging".

    3. FOOD STORED IN VESSELS OR CONTAINERS:
       If a container or vessel visibly holds food (e.g. white batter in a vessel, cooked rice in a box, curd in a bowl, sambar in a pot), detect ONLY the edible food contents inside! NEVER report the container/vessel itself.
       If an opaque container is closed or empty, IGNORE IT COMPLETELY.

    4. IDENTIFY CONFIRMED FOOD ITEMS ("items"):
       For all clearly identifiable edible produce, dairy, meats, packaged groceries, drinks, or grocery receipt items:
       - "name": Clean culinary English name (e.g. "Tomato", "Milk", "Curd", "Brinjal", "Egg")
       - "sourashtraName": Authentic Sourashtra Latin transliteration (e.g. Tomato -> "Takkali", Milk -> "Taani", Rice -> "Saadu", Brinjal -> "Vangi")
       - "quantity": Estimated count or pack quantity (number, default 1)
       - "category": One of "Produce", "Dairy", "Meat", "Pantry", "Other"
       - "expirationDate": Estimated YYYY-MM-DD from today (${new Date().toISOString().split('T')[0]})

    5. SMART SUGGESTIONS FOR UNLABELED / HOMEMADE PREPS ("suggestions"):
       In Indian/Sourashtra fridges, people frequently keep homemade preparations in plain steel vessels or plastic dabbas with no label:
       - White batter in a vessel or container -> Suggest "Idli / Dosa Batter" (category: "Pantry", hint: "White batter in vessel", sourashtraName: "Maavu")
       - Cooked rice in a box/pot -> Suggest "Cooked Rice (Saadu)" (category: "Pantry", hint: "Cooked rice in container", sourashtraName: "Saadu")
       - Thick white curd/yogurt -> Suggest "Curd / Yogurt (Dheim)" (category: "Dairy", hint: "Curd/yogurt in bowl", sourashtraName: "Dheim")
       - Cooked dal or sambar in a pot -> Suggest "Vegetable Sambar / Ounty" (category: "Produce", hint: "Cooked gravy/sambar in vessel")
       - Green paste in a small jar -> Suggest "Mint / Coriander Chutney" (category: "Produce", hint: "Green chutney paste")
       - Ginger-garlic paste -> Suggest "Ginger Garlic Paste" (category: "Pantry")
       - Boiled potatoes in container -> Suggest "Boiled Potatoes (Batata)" (category: "Produce")
       - Boiled eggs -> Suggest "Boiled Eggs (Anda)" (category: "Meat")
       Provide these candidates under "suggestions" so the user can easily tap to add them with 1 click!

    Respond STRICTLY with a valid JSON object. Do not include markdown formatting like \`\`\`json. Just the JSON object:
    {
      "rejected": false,
      "items": [
        { "name": "Tomato", "sourashtraName": "Takkali", "quantity": 3, "category": "Produce", "expirationDate": "2026-11-12" }
      ],
      "suggestions": [
        { "name": "Idli / Dosa Batter", "sourashtraName": "Maavu", "quantity": 1, "category": "Pantry", "hint": "White batter in vessel" }
      ]
    }
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
    let rawItems: unknown[] = [];
    let rawSuggestions: unknown[] = [];
    let wasRejected = false;

    try {
      const cleanJson = responseText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      const parsed = JSON.parse(cleanJson);
      if (Array.isArray(parsed)) {
        rawItems = parsed;
      } else if (parsed && typeof parsed === 'object') {
        if (parsed.rejected === true) {
          wasRejected = true;
        }
        if (Array.isArray(parsed.items)) rawItems = parsed.items;
        if (Array.isArray(parsed.suggestions)) rawSuggestions = parsed.suggestions;
      }
    } catch {
      console.error('Failed to parse Gemini response:', responseText);
      return NextResponse.json({ error: 'Failed to parse inventory data from AI' }, { status: 400 });
    }

    if (wasRejected) {
      return NextResponse.json(
        {
          success: false,
          error: 'no_food_detected',
          message: 'No edible food items or groceries detected. Cookware, utensils, and non-food photos are not accepted. Please take a clear photo of the food inside your fridge.',
        },
        { status: 422 }
      );
    }

    // Programmatic defensive filtering against utensils, cookware, and non-food items
    const filteredItems = sanitizeAndFilterFoodItems(rawItems);
    const filteredSuggestions = sanitizeAndFilterFoodItems(rawSuggestions);

    if (filteredItems.length === 0 && filteredSuggestions.length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: 'no_food_detected',
          message: 'No edible food items or groceries detected. Cookware, utensils, and non-food photos are not accepted. Please take a clear photo of the food inside your fridge.',
        },
        { status: 422 }
      );
    }

    // Insert confirmed items into Postgres database with multi-tenant userId isolation
    let insertedCount = 0;
    const insertedItems: Record<string, unknown>[] = [];

    for (const item of filteredItems) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const anyDb = db as any;
      const [inserted] = await anyDb`
        INSERT INTO inventory (name, "sourashtraName", quantity, category, "expirationDate", "imageUrl", "userId")
        VALUES (
          ${item.name || 'Unknown Item'}, 
          ${item.sourashtraName || null},
          ${item.quantity || 1}, 
          ${item.category || 'Other'}, 
          ${item.expirationDate || null}, 
          ${getIngredientImage(item.name || '') || null},
          ${user.id}
        )
        RETURNING *
      `;
      insertedCount++;
      if (inserted) insertedItems.push(inserted);
    }

    return NextResponse.json({ 
      success: true, 
      message: `Successfully analyzed and added ${insertedCount} items to inventory.`,
      items: insertedItems.length > 0 ? insertedItems : filteredItems,
      suggestions: filteredSuggestions
    });

  } catch (error) {
    console.error('Error analyzing image:', error);
    if (isAuthConfigurationError(error)) {
      return NextResponse.json({ error: (error as Error).message }, { status: 503 });
    }
    return NextResponse.json(
      { 
        error: 'Image analysis failed.'
      },
      { status: 500 }
    );
  }
}
