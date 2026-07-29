import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return NextResponse.json({ error: 'GEMINI_API_KEY is missing' }, { status: 500 });
    }

    const { default: db, initDb } = await import('@/lib/db');
    await initDb();

    // Fetch current inventory
    const items = await db`SELECT name, quantity, category FROM inventory WHERE quantity > 0`;
    
    if (items.length === 0) {
      return NextResponse.json({ recipes: [], message: 'Inventory is empty.' });
    }

    const lang = req.nextUrl.searchParams.get('lang') || 'English';
    const profileIdParam = req.nextUrl.searchParams.get('profileId');

    // Fetch user profile for personalized dietary restrictions
    let profileData: { name: string; dietaryPreference: string; allergies: string } | null = null;
    try {
      if (profileIdParam) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const res = await (db as any)`SELECT name, "dietaryPreference", allergies FROM profiles WHERE id = ${parseInt(profileIdParam, 10)}`;
        if (res && res.length > 0) profileData = res[0];
      }
      if (!profileData) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const defaultRes = await (db as any)`SELECT name, "dietaryPreference", allergies FROM profiles ORDER BY id ASC LIMIT 1`;
        if (defaultRes && defaultRes.length > 0) profileData = defaultRes[0];
      }
    } catch {
      // Fallback gracefully if profiles table is missing or DB connection is transient
    }

    const userDiet = profileData?.dietaryPreference || 'Any';
    const userAllergies = profileData?.allergies || '';

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const inventoryList = items.map((i: any) => `${i.quantity}x ${i.name} [Category: ${i.category}]`).join(', ');

    // Dynamic lazy import to prevent global Vercel Node crashes on API boot
    const { GoogleGenerativeAI } = await import('@google/generative-ai');
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `
    You are an expert chef.
    Create 3 recipe ideas based primarily on these available ingredients in my kitchen:
    ${inventoryList}

    CRITICAL DIETARY CONSTRAINTS FOR USER PROFILE (${profileData?.name || 'User'}):
    - Dietary Preference: ${userDiet}
    - Allergies / Exclusions to Avoid: ${userAllergies || 'None'}
    ${userDiet !== 'Any' ? `- You MUST strictly respect the '${userDiet}' dietary preference (e.g. if Vegetarian/Vegan/Jain, do NOT suggest meat, fish, or restricted ingredients).` : ''}
    ${userAllergies ? `- Absolutely do NOT include any ingredients containing ${userAllergies}.` : ''}

    It evaluates to true if the user has basic pantry items like salt, pepper, oil, water, etc.
    
    CRITICAL LANGUAGE INSTRUCTIONS:
    - You MUST write the recipe titles, difficulty level, and step-by-step cooking steps in the ${lang} language.
    - If ${lang} is English, write it in English.
    - If ${lang} is Sourashtra, you MUST write recipe titles, difficulty level, and every cooking step with BOTH native Sourashtra script (ꢱꢵꢫꢵꢯꢵꢵ) AND English/Latin script transliteration in parentheses (e.g. "ꢢꢒꢵꢭꢶ ꢱꢵꢢꢸ (Takkali Saadu) - Tomato Rice"). Every cooking step must include Latin transliteration alongside native script so users can easily read it. Prioritize authentic traditional Sourashtra dishes (e.g. Kadam Saadam, Puliyodarai, Ambat Sambar, Dibba Rotti).
    - If ${lang} is Tamil, Hindi, Telugu, Kannada, Gujarati, Marathi, Bengali, Malayalam, or any other Indian language, write it directly in the correct native script of that language. Do not use transliterated English characters if a native script exists for that language.

    For each recipe, provide:
    1. A catchy title in the ${lang} language (with English translation in parentheses if it's not English)
    2. Missing ingredients I need to buy (in English, e.g. "Tomato", "Mustard")
    3. Difficulty level (Easy, Medium, Hard) in the ${lang} language
    4. A concise list of 3-5 steps to make it, written in the ${lang} language.
    5. An estimated total calories for the recipe.
    6. A mapped list of ALL ingredients used (both inventory and missing) with estimated weight in grams and calories.
    
    Respond STRICTLY with a valid JSON array of objects. Do not use markdown blocks.
    Example format when Tamil (தமிழ்) is selected:
    [
      {
        "title": "தக்காளி சாதം (Tomato Rice)",
        "missingIngredients": ["Tomato"],
        "difficulty": "எளிது (Easy)",
        "steps": [
          "அரிசியை நன்றாக கழுவி 10 நிമിடம் ஊற வைக்கவும்.",
          "கடாயில் எண்ணெய் ஊற்றி கடுகு, கறிவேப்பிலை தாளிக்கவும்.",
          "நறுக்கிய தக்காளி மற்றும் மசாலா சேர்த்து வதக்கவும்.",
          "அரிசியை சேர்த்து பிரஷர் குக்கரில் 2 விசில் விடவும்."
        ],
        "totalCalories": 350,
        "ingredientsBreakdown": [
          { "name": "Rice", "weightGrams": 200, "calories": 260 },
          { "name": "Tomato", "weightGrams": 150, "calories": 30 }
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
    } catch {
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
