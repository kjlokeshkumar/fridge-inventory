import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import db from '@/lib/db';

export const maxDuration = 60;

export async function GET(req: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return NextResponse.json({ error: 'GEMINI_API_KEY is missing' }, { status: 500 });
    }

    // Fetch current inventory
    const items = await db`SELECT name, quantity, category FROM inventory WHERE quantity > 0`;
    
    if (items.length === 0) {
      return NextResponse.json({ recipes: [], message: 'Inventory is empty.' });
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const inventoryList = items.map((i: any) => `${i.quantity}x ${i.name} (${i.category})`).join(', ');

    // Initialize Gemini API
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `
    You are an expert chef. Create 3 recipe ideas based primarily on these available ingredients in my kitchen:
    ${inventoryList}

    It evaluates to true if the user has basic pantry items like salt, pepper, oil, water.
    For each recipe, provide:
    1. A catchy title
    2. Missing ingredients I need to buy
    3. Difficulty level (Easy, Medium, Hard)
    4. A concise list of 3-5 steps to make it.
    5. An estimated total calories for the recipe.
    6. A mapped list of ALL ingredients used (both inventory and missing) with an estimated weight in grams and the calories for that specific weight.
    
    Respond STRICTLY with a valid JSON array of objects. Do not use markdown blocks.
    Example:
    [
      {
        "title": "Apple Cinnamon Oatmeal",
        "missingIngredients": ["Cinnamon", "Oats"],
        "difficulty": "Easy",
        "steps": ["Chop apples", "Boil oats", "Mix everything"],
        "totalCalories": 350,
        "ingredientsBreakdown": [
          { "name": "Apple", "weightGrams": 150, "calories": 78 },
          { "name": "Oats", "weightGrams": 40, "calories": 150 },
          { "name": "Cinnamon", "weightGrams": 5, "calories": 12 },
          { "name": "Milk", "weightGrams": 180, "calories": 110 }
        ]
      }
    ]
    `;

    const result = await model.generateContent(prompt);
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
