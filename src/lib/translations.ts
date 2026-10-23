export const UI_TRANSLATIONS: Record<string, Record<string, string>> = {
  English: {
    inventoryTitle: "Current Inventory",
    inventorySub: "Track your food and reduce waste",
    loadingInventory: "Loading your pantry...",
    emptyInventoryTitle: "Your fridge is empty",
    emptyInventorySub: "Scan some items or upload a grocery receipt to get started.",
    scanItems: "Scan Items",
    qty: "Qty",
    exp: "Exp",
    
    recipesTitle: "AI Recipes",
    recipesSub: "Meals based on what you already have",
    loadingRecipes: "Chef AI is crafting recipes from your inventory...",
    regenerate: "↻ Regenerate Ideas",
    noRecipesTitle: "Nothing to cook yet",
    noRecipesSub: "Add more items to your inventory to get recipe suggestions.",
    scanGroceries: "Scan groceries",
    missingIngredients: "Missing Ingredients:",
    haveEverything: "You have everything needed!",
    instructions: "Instructions:",
    approx: "approx.",
    kcal: "kcal",
    
    shoppingTitle: "Shopping List",
    shoppingSub: "Automatically generated from depleted or expired items",
    loadingShopping: "Checking your pantry status...",
    allStockedTitle: "You're all stocked up!",
    allStockedSub: "No depleted or expired items found in your inventory.",
    item: "Item",
    reason: "Reason",
    depleted: "Depleted (0 left)",
    expired: "Expired",
    
    // Scan Page
    scanTitle: "Scan Inventory",
    scanSub: "Upload a photo of your fridge, pantry, or grocery receipt",
    clickOrDrag: "Click or drag images here",
    supports: "Supports JPG, PNG, WEBP, HEIC",
    retakeAll: "✕ Retake All",
    analyzeWithAi: "Analyze with AI ✨",
    compressing: "Compressing images...",
    analyzingBatch: "Analyzing batch",
    of: "of",
    completeRedirecting: "Analysis complete! Redirecting..."
  },
  Tamil: {
    inventoryTitle: "தற்போதைய பொருட்கள் (Current Porutkal)",
    inventorySub: "உணவைக் கண்காணித்து கழிவைக் குறைக்கவும் (Track food & reduce waste)",
    loadingInventory: "பொருட்களை ஏற்றுகிறது... (Loading Porutkal...)",
    emptyInventoryTitle: "உங்கள் பிரிட்ஜ் காலியாக உள்ளது (Fridge Kaaliyaaga Ulladhu)",
    emptyInventorySub: "பொருட்களை ஸ்கேன் செய்யவும் அல்லது ரசீதை பதிவேற்றவும்.",
    scanItems: "பொருட்களை ஸ்கேன் செய் (Scan Porutkal)",
    qty: "அளவு (Alavu)",
    exp: "காலாவதி (Exp)",
    
    recipesTitle: "சமையல் குறிப்புகள் (Samayal Kurippugal)",
    recipesSub: "உங்களிடம் உள்ள பொருட்களை வைத்தே சமையல் (Meals from your fridge)",
    loadingRecipes: "சமையல் குறிப்புகளை உருவாக்குகிறது...",
    regenerate: "↻ வேறு சமையல் காட்டு (Regenerate Ideas)",
    noRecipesTitle: "சமைக்க இன்னும் எதுவும் இல்லை",
    noRecipesSub: "சமையல் பரிந்துரைகளைப் பெற பொருட்களைச் சேர்க்கவும்.",
    scanGroceries: "பொருட்களை ஸ்கேன் செய்",
    missingIngredients: "வாங்க வேண்டிய பொருட்கள் (Missing Items):",
    haveEverything: "தேவையான அனைத்தும் உள்ளன! (All items available!)",
    instructions: "செய்முறை (Seimurai / Steps):",
    approx: "சுமார் (approx.)",
    kcal: "கலோரி (kcal)",
    
    shoppingTitle: "வாங்க வேண்டிய பட்டியல் (Shopping List)",
    shoppingSub: "தீர்ந்துபோன அல்லது காலாவதியான பொருட்கள்",
    loadingShopping: "பொருட்களின் நிலையைச் சரிபார்க்கிறது...",
    allStockedTitle: "பொருட்கள் அனைத்தும் உள்ளன! (All Stocked!)",
    allStockedSub: "தீர்ந்துபோன அல்லது காலாவதியான பொருட்கள் எதுவுமில்லை.",
    item: "பொருள் (Porul)",
    reason: "காரணம் (Kaaranam)",
    depleted: "தீர்ந்துவிட்டது (Theerndhuvittadhu)",
    expired: "காலாவதியானது (Expired)",
    
    scanTitle: "பொருட்களை ஸ்கேன் செய் (Scan Inventory)",
    scanSub: "பிரிட்ஜ் அல்லது மளிகை ரசீது புகைப்படத்தை பதிவேற்றவும்",
    clickOrDrag: "புகைப்படத்தை இங்கே கிளிக் செய்யவும் (Click or drag photos)",
    supports: "Supports JPG, PNG, WEBP, HEIC",
    retakeAll: "✕ மீண்டும் எடு (Retake All)",
    analyzeWithAi: "AI மூலம் கண்டறி ✨ (Analyze with AI)",
    compressing: "புகைப்படங்களைச் சுருக்குகிறது...",
    analyzingBatch: "பகுப்பாய்வு செய்கிறது",
    of: "of",
    completeRedirecting: "முடிந்தது! (Complete! Redirecting...)"
  }
};

const TAMIL_ITEM_TRANSLITERATION_MAP: Record<string, string> = {
  tomato: "தக்காளி (Thakkali / Tomato)",
  tomatoes: "தக்காளி (Thakkali / Tomatoes)",
  onion: "வெங்காயம் (Vengayam / Onion)",
  onions: "வெங்காயம் (Vengayam / Onions)",
  potato: "உருளைக்கிழங்கு (Urulaikizhangu / Potato)",
  potatoes: "உருளைக்கிழங்கு (Urulaikizhangu / Potatoes)",
  brinjal: "கத்திரிக்காய் (Kathirikkai / Brinjal)",
  eggplant: "கத்திரிக்காய் (Kathirikkai / Brinjal)",
  drumstick: "முருங்கைக்காய் (Murungaikkai / Drumstick)",
  carrot: "கேரட் (Carrot)",
  beans: "பீன்ஸ் (Beans)",
  garlic: "பூண்டு (Poondu / Garlic)",
  ginger: "இஞ்சி (Inji / Ginger)",
  chilli: "பச்சை மிளகாய் (Pachai Milagai / Chilli)",
  "green chilli": "பச்சை மிளகாய் (Pachai Milagai)",
  coriander: "கொத்தமல்லி (Kothamalli / Coriander)",
  "curry leaves": "கறிவேப்பிலை (Kariveppilai / Curry Leaves)",
  mint: "புதினா (Pudina / Mint)",
  spinach: "கீரை (Keerai / Greens)",
  greens: "கீரை (Keerai / Greens)",
  lemon: "எலுமிச்சை (Elumichai / Lemon)",
  coconut: "தேங்காய் (Thengai / Coconut)",
  milk: "பால் (Paal / Milk)",
  curd: "தயிர் (Thayir / Curd)",
  yogurt: "தயிர் (Thayir / Curd)",
  butter: "வெண்ணெய் (Vennai / Butter)",
  ghee: "நெய் (Nei / Ghee)",
  paneer: "பன்னீர் (Paneer)",
  cheese: "சீஸ் (Cheese)",
  egg: "முட்டை (Muttai / Egg)",
  eggs: "முட்டை (Muttai / Eggs)",
  chicken: "சிக்கன் / கோழி (Kozhi / Chicken)",
  mutton: "மட்டன் / ஆட்டுக்கறி (Aattukari / Mutton)",
  fish: "மீன் (Meen / Fish)",
  apple: "ஆப்பிள் (Apple)",
  banana: "வாழைப்பழம் (Vazhaipazham / Banana)",
  mango: "மாம்பழம் (Mambazham / Mango)",
  rice: "அரிசி (Arisi / Rice)"
};

export function toTamilTransliteration(name: string): string {
  const clean = (name || "").trim();
  const low = clean.toLowerCase();
  if (TAMIL_ITEM_TRANSLITERATION_MAP[low]) {
    return TAMIL_ITEM_TRANSLITERATION_MAP[low];
  }
  for (const [key, val] of Object.entries(TAMIL_ITEM_TRANSLITERATION_MAP)) {
    if (low.includes(key)) {
      return `${val} — ${clean}`;
    }
  }
  return clean;
}
