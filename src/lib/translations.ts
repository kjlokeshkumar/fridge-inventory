export const UI_TRANSLATIONS: Record<string, Record<string, string>> = {
  English: {
    navHome: "Home",
    navInventory: "Inventory",
    navRecipes: "Recipes",
    navShopping: "Shopping",
    navScan: "Scan",
    homeTitle: "Sourashtra Chef",
    homeSubtitle: "Fresh ingredients, smarter meals",
    homeScanTitle: "Scan Receipt or Photo",
    homeScanDescription: "Take a picture of your fridge, pantry, or grocery receipt to automatically analyze inventory",
    homeInventoryDescription: "View currently tracked food items and expiration dates",
    homeRecipesDescription: "Generate meals based on what you already have",
    homeShoppingDescription: "Items running low and suggested restocks",
    dishCountLabel: "Dishes",
    itemCountLabel: "Item",
    itemsCountLabel: "Items",
    thCheck: "✓",
    thItem: "Item",
    thCategory: "Category",
    thStatus: "Qty / Status",
    searchPlaceholder: "Search inventory...",
    recipesPageSubtitle: "Explore a weekly meal plan, a smart shopping list, or the Sourashtra recipe collection.",
    publicRecipesPageSubtitle: "Browse the Sourashtra recipe collection.",
    plannerTab: "7-Day Plan",
    shoppingTab: "Shopping List",
    recipesTab: "Recipes",
    plannerTitle: "7-Day Sourashtra Weekly Meal Planner",
    sampleSet: "Sample Set",
    completePairs: "Complete Paired Combinations",
    planPinned: "📌 Week Plan Pinned (Saved)",
    pinAndSavePlan: "📌 Pin & Save This Week",
    resamplePlan: "🎲 Resample Unpinned Combos",
    printPlan: "🖨️ Print 7-Day Menu & List",
    exportCalendar: "📆 Export 7-Day Calendar (.ics)",
    breakfast: "Breakfast Combo",
    lunch: "Full Lunch Meal",
    dinner: "Dinner / Tiffin Combo",
    pinMeal: "Pin this meal combo so it stays when resampling",
    unpinMeal: "Unpin this meal combo",
    pinnedPlanConfirmRegenerate: "This 7-day plan is saved. Regenerating will replace the saved plan. Continue?",
    pinnedPlanConfirmResample: "This 7-day plan is saved. Resampling will replace the saved plan. Continue?",
    pinTag: "Pin",
    pinnedTag: "Pinned",
    swapMeal: "Swap",
    googleCalendar: "+ Google Calendar",
    freshItemsToBuy: "Fresh items to purchase",
    alreadyInFridge: "Already in your fridge",
    searchRecipesPlaceholder: "🔍 Search 320+ Sourashtra recipes (e.g. Ounty, Budith, Pilchar, Ambat, Pongal)...",
    plannedItemsToBuy: "For your 7-day meal plan",
    planShoppingDescription: "Ingredients in your saved weekly plan that are not in your inventory.",
    checkPantryTitle: "Check pantry staples",
    checkPantryDescription: "These recipe staples are listed separately so you can check what you already have before adding them to your shopping list.",
    inventoryAlerts: "Inventory alerts",
    inventoryAlertsDescription: "Items that are depleted or need attention in your inventory.",
    noWeeklyPlan: "No 7-day plan saved yet",
    createWeeklyPlan: "Open Recipes to create your weekly meal plan. Your missing ingredients will appear here.",
    noPlannedItems: "Your inventory covers the ingredients in this week's plan.",
    noInventoryAlerts: "No depleted items need attention.",
    shareShoppingList: "Share shopping list",
    copyShoppingList: "Copy list",
    shoppingListCopied: "Shopping list copied.",
    shoppingListShared: "Shopping list ready to share.",
    shareTitle: "7-Day Meal Plan Shopping List",
    shoppingListEmpty: "There are no unchecked items to share.",
    quantityNeeded: "Quantity needed",
    quantityNotSpecified: "quantity not specified",
    checkedOff: "Purchased",
    loadShoppingError: "Unable to load shopping data. Please try again.",
    shareShoppingError: "Unable to share the shopping list. Try copying it instead.",
    copyShoppingError: "Unable to copy the shopping list.",
    retry: "Try again",
    openFullShoppingList: "Open full shopping list",
    fullShoppingListDescription: "See missing ingredients from your saved 7-day plan, check off purchases, and share the list.",
    chooseRecipePrompt: "Click any Main Dish or Paired Side Dish below to open its full step-by-step recipe, ingredients, and video, then close it to return right back here!",
    mainFridgeIngredients: "Main Fridge Ingredients (Veggies / Meat / Dairy):",
    pantryAdditives: "Pantry & Spice Additives (Dals, Tamarind, Bhurko, Salt & Oil):",
    recipeLink: "Recipe",
    pairedWith: "Paired With:",
    noCalorieData: "No calorie data available.",
    weeklyShoppingList: "Smart Weekly Shopping List",
    shoppingListIntro: "Items needed for your full 7-day plan, compared with your current fridge selection.",
    fridgeNow: "What's in Your Fridge Right Now? (Veggies, Greens, Dairy & Meat)",
    fridgeSelectionIntro: "Select the fresh items you have to rank recipes and update the smart shopping list.",
    noMatchingRecipes: "No matching Sourashtra recipes found",
    noMatchingRecipesHint: "Try clearing your search filter or selecting different category tabs above.",
    removeFromInventory: "Remove from inventory",
    categoryProduce: "Produce",
    categoryDairy: "Dairy",
    categoryMeat: "Meat",
    categoryPantry: "Pantry",
    categoryDrink: "Drink",
    categorySnacks: "Snacks",
    categoryOther: "Other",
    inventoryTitle: "Fridge Inventory",
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
    shoppingSub: "Missing items for your meal plan, alongside inventory alerts",
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
    takePhoto: "Take a photo",
    supports: "Supports JPG, PNG, WEBP, HEIC",
    retakeAll: "✕ Retake All",
    analyzeWithAi: "Analyze with AI ✨",
    compressing: "Compressing images...",
    analyzingBatch: "Analyzing batch",
    of: "of",
    completeRedirecting: "Analysis complete! Redirecting...",

    // Bhurko Spice Guide Modal
    bhurkoSpiceGuide: "🥣 Sourashtra Bhurko Spice Guide",
    hideBhurkoGuide: "✕ Close Bhurko Guide",
    bhurkoModalTitle: "🥣 Authentic Sourashtra Bhurko Spice Guide (Homemade Powders)",
    bhurkoModalSub: "In Sourashtra kitchens, these foundational sun-dried and roasted spice blends are kept in airtight jars and added to gravies (Ounty), broths (Pilchar), and stews (Sambar):",
    bhurkoIngredients: "📋 Ingredients & Exact Proportions:",
    bhurkoMethod: "👩‍🍳 Traditional Roasting & Grinding Method:",
    bhurkoUsedFor: "🍲 Essential for Traditional Dishes:",
    bhurkoWatchVideo: "▶️ Watch Bhurko Preparation Video",
    bhurkoWebRecipe: "🌐 Open Web Recipe Archive",

    // Access Gate & Auth
    gateTitle: "Sign in to your private fridge",
    gateDesc: "Inventory, scanning, and shopping lists are private to your account. Sign in or create an account to use these features.",
    gateSignInBtn: "Sign in or create account",
    gateBrowseRecipes: "Browse Sourashtra recipes without signing in",
    gateChecking: "Checking your sign-in…",
    gateError: "Can’t verify your sign-in",
    gateConnectionCheck: "Please check your connection and try again.",
    gateRetry: "Try again"
  },
  Tamil: {
    navHome: "முகப்பு",
    navInventory: "சரக்கு",
    navRecipes: "சமையல் குறிப்புகள்",
    navShopping: "வாங்க வேண்டியவை",
    navScan: "ஸ்கேன்",
    homeTitle: "குளிர்சாதனப் பெட்டி",
    homeSubtitle: "வீட்டு உணவுப் பொருட்களை நிர்வகிக்கவும்",
    homeScanTitle: "பொருட்களை ஸ்கேன் செய்",
    homeScanDescription: "உணவுப் பொருட்களைப் பட்டியலிட குளிர்சாதனப் பெட்டி அல்லது அலமாரியைப் படம் எடுக்கவும்",
    homeInventoryDescription: "சேமித்த உணவுப் பொருட்களையும் காலாவதி தேதிகளையும் காண்க",
    homeRecipesDescription: "உங்களிடம் உள்ள பொருட்களைக் கொண்டு உணவு வகைகளை உருவாக்கவும்",
    homeShoppingDescription: "குறைந்து வரும் பொருட்களையும் வாங்க வேண்டியவற்றையும் காண்க",
    dishCountLabel: "உணவு வகைகள்",
    itemCountLabel: "பொருள்",
    itemsCountLabel: "பொருட்கள்",
    thCheck: "✓",
    thItem: "பொருள்",
    thCategory: "பிரிவு",
    thStatus: "அளவு / நிலை",
    searchPlaceholder: "சரக்கில் தேடவும்...",
    recipesPageSubtitle: "வார உணவுத் திட்டம், வாங்க வேண்டிய பட்டியல் அல்லது சௌராஷ்டிர சமையல் குறிப்புகளைப் பாருங்கள்.",
    publicRecipesPageSubtitle: "சௌராஷ்டிர சமையல் குறிப்புகளைப் பாருங்கள்.",
    plannerTab: "7 நாள் திட்டம்",
    shoppingTab: "வாங்க வேண்டியவை",
    recipesTab: "சமையல் குறிப்புகள்",
    plannerTitle: "7 நாள் சௌராஷ்டிர வார உணவுத் திட்டம்",
    sampleSet: "மாதிரி",
    completePairs: "முழுமையான இணை உணவுகள்",
    planPinned: "📌 வாரத் திட்டம் சேமிக்கப்பட்டது",
    pinAndSavePlan: "📌 இந்த வாரத் திட்டத்தைச் சேமி",
    resamplePlan: "🎲 சேமிக்காத உணவுகளை மாற்று",
    printPlan: "🖨️ 7 நாள் உணவுத் திட்டத்தை அச்சிடு",
    exportCalendar: "📆 7 நாள் நாட்காட்டியை ஏற்றுமதி செய் (.ics)",
    breakfast: "காலை உணவு",
    lunch: "மதிய உணவு",
    dinner: "இரவு உணவு / சிற்றுண்டி",
    pinMeal: "மறுமுறை மாற்றும்போதும் இந்த உணவை வைத்திருக்கச் சேமிக்கவும்",
    unpinMeal: "இந்த உணவின் சேமிப்பை நீக்கு",
    pinnedPlanConfirmRegenerate: "இந்த 7 நாள் திட்டம் சேமிக்கப்பட்டுள்ளது. மீண்டும் உருவாக்கினால் சேமித்த திட்டம் மாற்றப்படும். தொடரவா?",
    pinnedPlanConfirmResample: "இந்த 7 நாள் திட்டம் சேமிக்கப்பட்டுள்ளது. உணவுகளை மாற்றினால் சேமித்த திட்டம் மாற்றப்படும். தொடரவா?",
    pinTag: "சேமி",
    pinnedTag: "சேமிக்கப்பட்டது",
    swapMeal: "மாற்று",
    googleCalendar: "+ Google நாட்காட்டி",
    freshItemsToBuy: "வாங்க வேண்டிய புதிய பொருட்கள்",
    alreadyInFridge: "குளிர்சாதனப் பெட்டியில் உள்ளவை",
    searchRecipesPlaceholder: "🔍 சௌராஷ்டிர சமையல் குறிப்புகளைத் தேடுங்கள் (எ.கா. அவ்வுண்டி, புடித், பில்ச்சார், அம்பாட்)...",
    plannedItemsToBuy: "7 நாள் உணவுத் திட்டத்திற்கானவை",
    planShoppingDescription: "வாரத் திட்டத்தில் உள்ளதும் உங்கள் சரக்கில் இல்லாததுமான பொருட்கள்.",
    checkPantryTitle: "அலமாரிப் பொருட்களைச் சரிபார்க்கவும்",
    checkPantryDescription: "வாங்க வேண்டிய பட்டியலில் சேர்ப்பதற்கு முன், இந்த சமையல் அடிப்படைப் பொருட்கள் ஏற்கனவே உள்ளனவா எனச் சரிபார்க்கவும்.",
    inventoryAlerts: "சரக்கு அறிவிப்புகள்",
    inventoryAlertsDescription: "தீர்ந்துபோன அல்லது கவனிக்க வேண்டிய சரக்குப் பொருட்கள்.",
    noWeeklyPlan: "7 நாள் திட்டம் இன்னும் சேமிக்கப்படவில்லை",
    createWeeklyPlan: "சமையல் குறிப்புகள் பகுதிக்குச் சென்று வாரத் திட்டத்தை உருவாக்குங்கள். வாங்க வேண்டிய பொருட்கள் இங்கே தோன்றும்.",
    noPlannedItems: "இந்த வாரத் திட்டத்திற்குத் தேவையான பொருட்கள் சரக்கில் உள்ளன.",
    noInventoryAlerts: "கவனிக்க வேண்டிய தீர்ந்துபோன பொருட்கள் இல்லை.",
    shareShoppingList: "வாங்க வேண்டிய பட்டியலைப் பகிர்",
    copyShoppingList: "பட்டியலை நகலெடு",
    shoppingListCopied: "வாங்க வேண்டிய பட்டியல் நகலெடுக்கப்பட்டது.",
    shoppingListShared: "பட்டியல் பகிரத் தயாராக உள்ளது.",
    shareTitle: "7 நாள் உணவுத் திட்டத்திற்கான வாங்க வேண்டிய பட்டியல்",
    shoppingListEmpty: "பகிரப்படாத பொருட்கள் எதுவும் இல்லை.",
    quantityNeeded: "தேவையான அளவு",
    quantityNotSpecified: "அளவு குறிப்பிடப்படவில்லை",
    checkedOff: "வாங்கப்பட்டது",
    loadShoppingError: "வாங்க வேண்டிய விவரங்களை ஏற்ற முடியவில்லை. மீண்டும் முயற்சிக்கவும்.",
    shareShoppingError: "பட்டியலைப் பகிர முடியவில்லை. அதற்குப் பதிலாக நகலெடுக்கவும்.",
    copyShoppingError: "வாங்க வேண்டிய பட்டியலை நகலெடுக்க முடியவில்லை.",
    retry: "மீண்டும் முயற்சி",
    openFullShoppingList: "முழுப் பட்டியலைத் திற",
    fullShoppingListDescription: "சேமித்த 7 நாள் திட்டத்திற்குத் தேவையானவற்றைப் பார்த்து, வாங்கியவற்றைக் குறித்துப் பட்டியலைப் பகிரவும்.",
    chooseRecipePrompt: "முழு செய்முறை, தேவையான பொருட்கள் மற்றும் காணொளியைப் பார்க்க கீழே உள்ள முக்கிய உணவு அல்லது துணை உணவைத் தேர்ந்தெடுக்கவும்.",
    mainFridgeIngredients: "குளிர்சாதனப் பெட்டிப் பொருட்கள் (காய்கறி / இறைச்சி / பால் பொருட்கள்):",
    pantryAdditives: "அலமாரி மற்றும் மசாலாப் பொருட்கள் (பருப்பு, புளி, பொடி, உப்பு, எண்ணெய்):",
    recipeLink: "செய்முறை",
    pairedWith: "துணை உணவு:",
    noCalorieData: "கலோரி விவரம் இல்லை.",
    weeklyShoppingList: "வாரத்திற்கான வாங்க வேண்டிய பட்டியல்",
    shoppingListIntro: "7 நாள் உணவுத் திட்டத்திற்குத் தேவையானவற்றையும் குளிர்சாதனப் பொருட்களையும் ஒப்பிடுகிறது.",
    fridgeNow: "குளிர்சாதனப் பெட்டியில் இப்போது என்ன உள்ளது? (காய்கறி, கீரை, பால் பொருட்கள், இறைச்சி)",
    fridgeSelectionIntro: "சமையல் குறிப்புகளை வரிசைப்படுத்தவும் வாங்க வேண்டிய பட்டியலைப் புதுப்பிக்கவும் உள்ள பொருட்களைத் தேர்ந்தெடுக்கவும்.",
    noMatchingRecipes: "பொருந்தும் சௌராஷ்டிர சமையல் குறிப்புகள் இல்லை",
    noMatchingRecipesHint: "தேடலை நீக்கவும் அல்லது மேலே உள்ள வேறு வகையைத் தேர்ந்தெடுக்கவும்.",
    removeFromInventory: "சரக்கிலிருந்து நீக்கு",
    categoryProduce: "காய்கறி மற்றும் பழங்கள்",
    categoryDairy: "பால் பொருட்கள்",
    categoryMeat: "இறைச்சி",
    categoryPantry: "மளிகைப் பொருட்கள்",
    categoryDrink: "பானங்கள்",
    categorySnacks: "சிற்றுண்டி",
    categoryOther: "மற்றவை",
    inventoryTitle: "தற்போதைய உணவுப் பொருட்கள்",
    inventorySub: "உணவைக் கண்காணித்து வீணாவதைக் குறைக்கவும்",
    loadingInventory: "உங்கள் உணவுப் பொருட்களை ஏற்றுகிறது...",
    emptyInventoryTitle: "உங்கள் குளிர்சாதனப் பெட்டி காலியாக உள்ளது",
    emptyInventorySub: "பொருட்களை ஸ்கேன் செய்யவும் அல்லது மளிகை ரசீதைப் பதிவேற்றவும்.",
    scanItems: "பொருட்களை ஸ்கேன் செய்",
    qty: "அளவு",
    exp: "காலாவதி",
    
    recipesTitle: "சமையல் குறிப்புகள்",
    recipesSub: "உங்களிடம் உள்ள பொருட்களைக் கொண்டு உணவு வகைகள்",
    loadingRecipes: "சமையல் குறிப்புகளை உருவாக்குகிறது...",
    regenerate: "↻ வேறு குறிப்புகளைக் காட்டு",
    noRecipesTitle: "சமைக்க இன்னும் எதுவும் இல்லை",
    noRecipesSub: "சமையல் பரிந்துரைகளைப் பெற சரக்கில் பொருட்களைச் சேர்க்கவும்.",
    scanGroceries: "மளிகைப் பொருட்களை ஸ்கேன் செய்",
    missingIngredients: "தேவையான பொருட்கள்:",
    haveEverything: "தேவையான அனைத்தும் உள்ளன!",
    instructions: "செய்முறை:",
    approx: "தோராயமாக",
    kcal: "கலோரி",
    
    shoppingTitle: "வாங்க வேண்டிய பட்டியல்",
    shoppingSub: "உணவுத் திட்டத்திற்குத் தேவையான பொருட்களும் சரக்கு அறிவிப்புகளும்",
    loadingShopping: "பொருட்களின் நிலையைச் சரிபார்க்கிறது...",
    allStockedTitle: "தேவையான பொருட்கள் அனைத்தும் உள்ளன!",
    allStockedSub: "தீர்ந்துபோன அல்லது காலாவதியான பொருட்கள் எதுவும் இல்லை.",
    item: "பொருள்",
    reason: "காரணம்",
    depleted: "தீர்ந்துவிட்டது",
    expired: "காலாவதியானது",
    
    scanTitle: "உணவுப் பொருட்களை ஸ்கேன் செய்",
    scanSub: "பிரிட்ஜ் அல்லது மளிகை ரசீது புகைப்படத்தை பதிவேற்றவும்",
    clickOrDrag: "புகைப்படங்களை இங்கே தேர்ந்தெடுக்கவும் அல்லது இழுத்து விடவும்",
    takePhoto: "புகைப்படம் எடுக்கவும்",
    supports: "JPG, PNG, WEBP, HEIC படங்கள் ஆதரிக்கப்படும்",
    retakeAll: "✕ அனைத்தையும் மீண்டும் எடு",
    analyzeWithAi: "AI மூலம் பகுப்பாய்வு செய் ✨",
    compressing: "புகைப்படங்களைச் சுருக்குகிறது...",
    analyzingBatch: "பகுப்பாய்வு செய்கிறது",
    of: "இல்",
    completeRedirecting: "பகுப்பாய்வு முடிந்தது! மாற்றப்படுகிறது...",

    // Bhurko Spice Guide Modal
    bhurkoSpiceGuide: "🥣 சௌராஷ்டிர புர்கோ மசாலா வழிகாட்டி",
    hideBhurkoGuide: "✕ வழிகாட்டியை மூடு",
    bhurkoModalTitle: "🥣 பாரம்பரிய சௌராஷ்டிர புர்கோ மசாலா வழிகாட்டி (வீட்டு பொடிகள்)",
    bhurkoModalSub: "சௌராஷ்டிர சமையலறைகளில் அவ்வுண்டி, பில்ச்சார் (ரசம்) மற்றும் சாம்பாருக்கு இந்த பாரம்பரிய மசாலா பொடிகள் கண்ணாடி பாட்டில்களில் வைக்கப்படுகின்றன:",
    bhurkoIngredients: "📋 தேவையான பொருட்கள் மற்றும் அளவுகள்:",
    bhurkoMethod: "👩‍🍳 வறுத்து அரைக்கும் பாரம்பரிய செய்முறை:",
    bhurkoUsedFor: "🍲 பயன்படுத்தப்படும் பாரம்பரிய உணவுகள்:",
    bhurkoWatchVideo: "▶️ புர்கோ செய்முறை காணொளியைக் காண்க",
    bhurkoWebRecipe: "🌐 இணைய சமையல் குறிப்பு",

    // Access Gate & Auth
    gateTitle: "உங்கள் தனிப்பட்ட சரக்கில் உள்நுழையவும்",
    gateDesc: "சரக்கு, ஸ்கேனிங் மற்றும் வாங்க வேண்டிய பட்டியல் உங்கள் கணக்கிற்கு மட்டுமே உரியது. இவற்றைப் பயன்படுத்த உள்நுழையவும்.",
    gateSignInBtn: "உள்நுழையவும் அல்லது புதிய கணக்கு உருவாக்கவும்",
    gateBrowseRecipes: "உள்நுழையாமல் சௌராஷ்டிர சமையல் குறிப்புகளைப் பாருங்கள்",
    gateChecking: "உள்நுழைவு சரிபார்க்கப்படுகிறது…",
    gateError: "உள்நுழைவைச் சரிபார்க்க முடியவில்லை",
    gateConnectionCheck: "உங்கள் இணைய இணைப்பைச் சரிபார்த்து மீண்டும் முயற்சிக்கவும்.",
    gateRetry: "மீண்டும் முயற்சி"
  }
};

const TAMIL_ITEM_TRANSLATION_MAP: Record<string, string> = {
  tomato: "தக்காளி",
  tomatoes: "தக்காளி",
  onion: "வெங்காயம்",
  onions: "வெங்காயம்",
  shallot: "சின்ன வெங்காயம்",
  shallots: "சின்ன வெங்காயம்",
  potato: "உருளைக்கிழங்கு",
  potatoes: "உருளைக்கிழங்கு",
  brinjal: "கத்திரிக்காய்",
  eggplant: "கத்திரிக்காய்",
  aubergine: "கத்திரிக்காய்",
  drumstick: "முருங்கைக்காய்",
  carrot: "கேரட்",
  beans: "பீன்ஸ்",
  peas: "பட்டாணி",
  cabbage: "முட்டைக்கோஸ்",
  cauliflower: "காலிஃப்ளவர்",
  cucumber: "வெள்ளரிக்காய்",
  beetroot: "பீட்ரூட்",
  radish: "முள்ளங்கி",
  pumpkin: "பூசணிக்காய்",
  okra: "வெண்டைக்காய்",
  ladyfinger: "வெண்டைக்காய்",
  garlic: "பூண்டு",
  ginger: "இஞ்சி",
  chilli: "மிளகாய்",
  chili: "மிளகாய்",
  "green chilli": "பச்சை மிளகாய்",
  "green chili": "பச்சை மிளகாய்",
  coriander: "கொத்தமல்லி",
  "curry leaves": "கறிவேப்பிலை",
  mint: "புதினா",
  spinach: "கீரை",
  greens: "கீரை",
  lemon: "எலுமிச்சை",
  lime: "எலுமிச்சை",
  coconut: "தேங்காய்",
  milk: "பால்",
  curd: "தயிர்",
  yogurt: "தயிர்",
  yoghurt: "தயிர்",
  butter: "வெண்ணெய்",
  ghee: "நெய்",
  paneer: "பனீர்",
  cheese: "பாலாடைக்கட்டி",
  egg: "முட்டை",
  eggs: "முட்டை",
  chicken: "கோழி இறைச்சி",
  mutton: "ஆட்டிறைச்சி",
  lamb: "ஆட்டிறைச்சி",
  fish: "மீன்",
  prawn: "இறால்",
  prawns: "இறால்",
  shrimp: "இறால்",
  crab: "நண்டு",
  apple: "ஆப்பிள்",
  banana: "வாழைப்பழம்",
  mango: "மாம்பழம்",
  orange: "ஆரஞ்சு",
  grapes: "திராட்சை",
  papaya: "பப்பாளி",
  rice: "அரிசி",
  flour: "மாவு",
  "wheat flour": "கோதுமை மாவு",
  lentils: "பருப்பு",
  dal: "பருப்பு",
  "toor dal": "துவரம் பருப்பு",
  "urad dal": "உளுந்து",
  "chana dal": "கடலைப் பருப்பு",
  chickpeas: "கொண்டைக்கடலை",
  "black pepper": "கருமிளகு",
  cumin: "சீரகம்",
  turmeric: "மஞ்சள்",
  salt: "உப்பு",
  sugar: "சர்க்கரை",
  oil: "எண்ணெய்",
  "cooking oil": "சமையல் எண்ணெய்",
  bread: "ரொட்டி",
  water: "தண்ணீர்",
  "tortilla chips": "டார்ட்டில்லா சிப்ஸ்"
};

// Reverse map: Tamil -> English
const TAMIL_TO_ENGLISH_ITEM_MAP: Record<string, string> = {
  "தக்காளி": "Tomato",
  "வெங்காயம்": "Onion",
  "சின்ன வெங்காயம்": "Shallots",
  "உருளைக்கிழங்கு": "Potato",
  "கத்திரிக்காய்": "Brinjal",
  "முருங்கைக்காய்": "Drumstick",
  "கேரட்": "Carrot",
  "பீன்ஸ்": "Beans",
  "பட்டாணி": "Peas",
  "முட்டைக்கோஸ்": "Cabbage",
  "காலிஃப்ளவர்": "Cauliflower",
  "வெள்ளரிக்காய்": "Cucumber",
  "பீட்ரூட்": "Beetroot",
  "முள்ளங்கி": "Radish",
  "பூசணிக்காய்": "Pumpkin",
  "வெண்டைக்காய்": "Okra",
  "பூண்டு": "Garlic",
  "இஞ்சி": "Ginger",
  "மிளகாய்": "Chilli",
  "பச்சை மிளகாய்": "Green Chilli",
  "கொத்தமல்லி": "Coriander",
  "கறிவேப்பிலை": "Curry Leaves",
  "புதினா": "Mint Leaves",
  "கீரை": "Spinach",
  "எலுமிச்சை": "Lemon",
  "தேங்காய்": "Coconut",
  "பால்": "Milk",
  "தயிர்": "Curd",
  "வெண்ணெய்": "Butter",
  "நெய்": "Ghee",
  "பனீர்": "Paneer",
  "பாலாடைக்கட்டி": "Cheese",
  "முட்டை": "Eggs",
  "கோழி இறைச்சி": "Chicken",
  "ஆட்டிறைச்சி": "Mutton",
  "மீன்": "Fish",
  "இறால்": "Prawns",
  "நண்டு": "Crab",
  "ஆப்பிள்": "Apple",
  "வாழைப்பழம்": "Banana",
  "மாம்பழம்": "Mango",
  "ஆரஞ்சு": "Orange",
  "திராட்சை": "Grapes",
  "பப்பாளி": "Papaya",
  "அரிசி": "Rice",
  "மாவு": "Flour",
  "கோதுமை மாவு": "Wheat Flour",
  "பருப்பு": "Dal",
  "துவரம் பருப்பு": "Toor Dal",
  "உளுந்து": "Urad Dal",
  "கடலைப் பருப்பு": "Chana Dal",
  "கொண்டைக்கடலை": "Chickpeas",
  "கருமிளகு": "Black Pepper",
  "சீரகம்": "Cumin",
  "மஞ்சள்": "Turmeric",
  "உப்பு": "Salt",
  "சர்க்கரை": "Sugar",
  "எண்ணெய்": "Cooking Oil",
  "ரொட்டி": "Bread",
  "தண்ணீர்": "Water",
  "டார்ட்டில்லா சிப்ஸ்": "Tortilla Chips"
};

export function toTamilItemName(name: string): string {
  const clean = (name || '').trim().split(' (')[0];
  const keys = Object.keys(TAMIL_ITEM_TRANSLATION_MAP)
    .sort((a, b) => b.length - a.length)
    .map((key) => key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const matcher = new RegExp(`(^|[^a-z])(${keys.join('|')})(?=$|[^a-z])`, 'gi');
  return clean.replace(matcher, (_match, prefix: string, key: string) => {
    return `${prefix}${TAMIL_ITEM_TRANSLATION_MAP[key.toLowerCase()]}`;
  });
}

export function toEnglishItemName(name: string): string {
  if (!name) return '';
  let result = name.trim();
  const keys = Object.keys(TAMIL_TO_ENGLISH_ITEM_MAP).sort((a, b) => b.length - a.length);
  for (const tamilWord of keys) {
    if (result.includes(tamilWord)) {
      result = result.replace(new RegExp(tamilWord, 'g'), TAMIL_TO_ENGLISH_ITEM_MAP[tamilWord]);
    }
  }
  // Strip any remaining parenthesized Tamil
  result = result.replace(/\s*\([\u0B80-\u0BFF\s/]+\)/g, '');
  result = result.replace(/\s*\/[\u0B80-\u0BFF\s]+/g, '');
  return result.trim();
}

export function formatItemName(name: string, language: string): string {
  if (language === 'Tamil') {
    return toTamilItemName(name);
  }
  return toEnglishItemName(name) || name;
}

export function toTamilCategory(category: string): string {
  const translationKey = `category${category}` as keyof typeof UI_TRANSLATIONS.Tamil;
  return UI_TRANSLATIONS.Tamil[translationKey] || category;
}

export function toEnglishCategory(category: string): string {
  if (!category) return 'Other';
  for (const [key, val] of Object.entries(UI_TRANSLATIONS.Tamil)) {
    if (key.startsWith('category') && val === category) {
      const engKey = key as keyof typeof UI_TRANSLATIONS.English;
      return UI_TRANSLATIONS.English[engKey] || category;
    }
  }
  return category;
}

export function formatCategory(category: string, language: string): string {
  if (language === 'Tamil') {
    return toTamilCategory(category);
  }
  return toEnglishCategory(category);
}

const TAMIL_DAY_NAMES: Record<string, string> = {
  Sunday: "ஞாயிறு",
  Sun: "ஞாயிறு",
  Monday: "திங்கள்",
  Mon: "திங்கள்",
  Tuesday: "செவ்வாய்",
  Tue: "செவ்வாய்",
  Wednesday: "புதன்",
  Wed: "புதன்",
  Thursday: "வியாழன்",
  Thu: "வியாழன்",
  Friday: "வெள்ளி",
  Fri: "வெள்ளி",
  Saturday: "சனி",
  Sat: "சனி"
};

const ENGLISH_DAY_NAMES: Record<string, string> = {
  "ஞாயிறு": "Sunday",
  "திங்கள்": "Monday",
  "செவ்வாய்": "Tuesday",
  "புதன்": "Wednesday",
  "வியாழன்": "Thursday",
  "வெள்ளி": "Friday",
  "சனி": "Saturday"
};

export function toTamilDayName(dayName: string): string {
  if (dayName === 'Today') return 'இன்று';
  if (dayName.startsWith('Today (') && dayName.endsWith(')')) {
    const weekday = dayName.slice(7, -1);
    return `இன்று (${TAMIL_DAY_NAMES[weekday] || weekday})`;
  }
  return TAMIL_DAY_NAMES[dayName] || dayName;
}

export function toEnglishDayName(dayName: string): string {
  if (dayName === 'இன்று') return 'Today';
  if (dayName.startsWith('இன்று (') && dayName.endsWith(')')) {
    const weekday = dayName.slice(7, -1);
    return `Today (${ENGLISH_DAY_NAMES[weekday] || weekday})`;
  }
  return ENGLISH_DAY_NAMES[dayName] || dayName;
}

export function formatDayName(dayName: string, language: string): string {
  if (language === 'Tamil') return toTamilDayName(dayName);
  return toEnglishDayName(dayName);
}

export function formatDishTitle(title: string, language: string): string {
  if (!title) return '';
  if (language === 'English') {
    // Clean up dual-script titles: "Losto(sourashtra)/புதினா தொவயல்" -> "Losto (Sourashtra Mint Chutney)"
    let clean = title.replace(/\s*\/[\u0B80-\u0BFF\s]+/g, '');
    clean = clean.replace(/Losto\(sourashtra\)/i, 'Losto (Sourashtra Mint Chutney)');
    return clean.trim();
  }
  // Tamil mode
  if (title.includes('புதினா தொவயல்') || title.toLowerCase().includes('losto')) {
    return 'புதினா தொவயல் (லோஸ்டோ)';
  }
  return toTamilItemName(title);
}
