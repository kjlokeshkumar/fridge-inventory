import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return NextResponse.json({ error: 'GEMINI_API_KEY is missing' }, { status: 500 });
    }

    const { default: db, initDb } = await import('@/lib/db');
    await initDb();

    // Fetch current inventory (including Sourashtra names)
    const items = await db`SELECT name, "sourashtraName", quantity, category FROM inventory WHERE quantity > 0`;
    
    if (items.length === 0) {
      return NextResponse.json({ recipes: [], message: 'Inventory is empty.' });
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const inventoryList = items.map((i: any) => `${i.quantity}x ${i.name}${i.sourashtraName ? ` (${i.sourashtraName})` : ''} [Category: ${i.category}]`).join(', ');

    // Dynamic lazy import to prevent global Vercel Node crashes on API boot
    const { GoogleGenerativeAI } = await import('@google/generative-ai');
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `
    You are an expert chef specializing in traditional Sourashtra cuisine.
    Create 3 recipe ideas based primarily on these available ingredients in my kitchen:
    ${inventoryList}

    It evaluates to true if the user has basic pantry items like salt, pepper, oil, water, mustard, etc.
    
    CRITICAL INSTRUCTION:
    - You must write the recipe titles, difficulty level, and step-by-step cooking steps in transliterated Sourashtra (Latin script) so it is easy to read. E.g. title: "Vangi Budith (Brinjal Chutney)", steps: ["Cooker-ma brinjal, tomato, onions boil kero", "Pulses oil-ma splutter thaya pachhi mix kero"].
    - Prioritize proposing traditional Sourashtra recipes if ingredients match:
      1. "Mhuri Pongal (Mustard Pongal)": Rice (Rice), Mustard (Mhuri), Curry leaves, Asafoetida, Salt.
      2. "Vangi Budith (Brinjal Chutney)": Brinjal (Vangi), Tomato (Tomato), Onions (Kanno), Chili, Tamarind.
      3. "Gullu Pongal (Jaggery Pongal)": Raw Rice, Milk (Dudh), Jaggery, Ghee, Cashews.
      4. "Limbu Pongal (Lemon Rice)": Rice, Lemon (Limbu), Mustard, bengal gram.
      5. "Rubbin (Gooseberry Mash)": Gooseberry (Nellika), Ginger, Garlic, Chili.
      6. "Chilli Chapatti": Chapatti, Onion (Kanno), Tomato, Curry leaves, Masala.
    - If none of the ingredients match traditional dishes, suggest standard recipes but written in transliterated Sourashtra instructions!

    For each recipe, provide:
    1. A catchy title in transliterated Sourashtra (with English translation in parentheses)
    2. Missing ingredients I need to buy (in English, e.g. "Mustard", "Jaggery")
    3. Difficulty level (Easy, Medium, Hard) transliterated into Sourashtra
    4. A concise list of 3-5 steps to make it, written in transliterated Sourashtra (Latin script).
    5. An estimated total calories for the recipe.
    6. A mapped list of ALL ingredients used (both inventory and missing) with estimated weight in grams and calories.
    
    Respond STRICTLY with a valid JSON array of objects. Do not use markdown blocks.
    Example format:
    [
      {
        "title": "Mhuri Pongal (Mustard Pongal)",
        "missingIngredients": ["Mustard seeds"],
        "difficulty": "Suluva (Easy)",
        "steps": [
          "Soaked raw rice-go cooker-ma 2.5 cups pani add kero.",
          "Oil-ma mustard splutter kero, curry leaves anim asafoetida add kero.",
          "Mhuri tadka rice-ma add keri cooker automatic whistle avu dyo.",
          "Ready thaya pachhi vangi budith sanga sarvo kero."
        ],
        "totalCalories": 380,
        "ingredientsBreakdown": [
          { "name": "Raw Rice", "weightGrams": 200, "calories": 260 },
          { "name": "Mustard seeds", "weightGrams": 10, "calories": 50 }
        ]
      }
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

    const result = await generateContentWithRetry(model, [prompt]);
    const responseText = result.response.text();
    let recipes = [];
    
    try {
      const cleanJson = responseText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      recipes = JSON.parse(cleanJson);
    } catch (parseError) {
      console.error('Failed to parse Gemini recipes:', responseText);
      throw new Error('Failed to parse recipe data from AI');
    }

    return NextResponse.json({ recipes });

  } catch (error) {
    console.error('Error generating recipes:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown server error' },
      { status: 500 }
    );
  }
}
