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
    sampleSet: "Curated Plan",
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
    addToCalendar: "+ Add to Calendar",
    calendarModalTitle: "Add to Calendar",
    calendarModalSubtitle: "Sync this day's Sourashtra meal plan with your calendar app",
    calendarGoogleBtn: "Google Calendar (App / Web)",
    calendarGoogleSub: "Instant 1-click sync to your Google Calendar app",
    calendarDeviceBtn: "Default Device Calendar (Android / iOS / Standard .ics)",
    calendarDeviceSub: "Universal standard event for any phone calendar app (Android, iPhone, iPad & Desktop)",
    calendarModalFooterNote: "✓ Universally supported on all Android phones, iPhones, tablets and desktop calendars",
    calendarEventSent: "✅ Event Ready for Your Calendar!",
    calendarEventSentSub: "We prepared the event for your device calendar. If it did not open automatically, tap below to download the .ics file or open with Google Calendar.",
    calendarDownloadIcs: "⬇️ Download / Open .ics File",
    calendarOpenGoogle: "🗓️ Open in Google Calendar",
    calendarDoneBtn: "Done / Close",
    copyPlanSuccess: "✓ 7-Day Plan & Grocery List copied to clipboard!",
    printModalTitle: "🖨️ 7-Day Sourashtra Menu & Grocery Checklist",
    printModalPrintBtn: "🖨️ Print / Save as PDF",
    printModalCopyBtn: "📋 Copy Full Plan to Clipboard",
    freshItemsToBuy: "Fresh items to purchase",
    alreadyInFridge: "Already in your fridge",
    searchRecipesPlaceholder: "🔍 Search 320+ Sourashtra recipes (e.g. Ounty, Budith, Pilchar, Ambat, Pongal)...",
    plannedItemsToBuy: "Fresh Groceries (Veggies, Greens & Meat)",
    planShoppingDescription: "Ingredients needed for your 7-day meal plan that are not currently in your fridge.",
    checkPantryTitle: "Kitchen Pantry & Spices (Staples - Usually in Stock)",
    checkPantryDescription: "Staples like cooking oils, salt, mustard seeds, turmeric, tamarind, and lentils are assumed to already be available in your kitchen pantry. Glance through to see if anything is running low!",
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
    quantityNeeded: "Qty",
    quantityNotSpecified: "As needed",
    checkedOff: "Purchased",
    inPantry: "In Pantry",
    checkStock: "Check Stock",
    allInPantry: "All in Stock",
    pantryStockedCount: "in pantry",
    loadShoppingError: "Unable to load shopping data. Please try again.",
    shareShoppingError: "Unable to share the shopping list. Try copying it instead.",
    copyShoppingError: "Unable to copy the shopping list.",
    retry: "Try again",
    openFullShoppingList: "Open full shopping list",
    fullShoppingListDescription: "Missing fresh ingredients and pantry staples for your 7-day plan. Check off items as you buy them, or share your shopping list.",
    chooseRecipePrompt: "Click any Main Dish or Paired Side Dish below to open its full step-by-step recipe, ingredients, and video, then close it to return right back here!",
    mainFridgeIngredients: "Main Fridge Ingredients (Veggies / Meat / Dairy):",
    pantryAdditives: "Pantry & Spice Additives (Dals, Tamarind, Bhurko, Salt & Oil):",
    recipeLink: "Recipe",
    pairedWith: "Paired With:",
    noCalorieData: "No calorie data available.",
    tableIngredient: "Ingredient",
    tableWeight: "Weight",
    tableCalories: "Calories",
    tableTotal: "Total",
    undo: "Undo",
    itemRemoved: "removed from inventory",
    howItWorks: "How It Works",
    walkthroughTitle: "How Sourashtra Chef Works",
    walkthroughIntro: "Your authentic smart culinary companion in 3 simple steps:",
    walkthroughStep1Title: "Fridge Inventory",
    walkthroughStep1Desc: "Mark what fresh vegetables, dairy & groceries you have on hand in your kitchen.",
    walkthroughStep2Title: "7-Day Meal Plan",
    walkthroughStep2Desc: "Enjoy complete authentic main dishes paired with traditional side dishes.",
    walkthroughStep3Title: "Smart Shopping List",
    walkthroughStep3Desc: "Missing ingredients are calculated automatically. Check them off as you shop!",
    gotIt: "Got it, let's cook!",
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
    inventoryPlanNotice: "Your fridge inventory is automatically matched against the 7-day meal plan to calculate what you need to buy on your shopping list. Recipes are drawn from our complete authentic Sourashtra collection.",
    viewMealPlanner: "7-Day Meal Plan & Recipes",
    plannerInventorySyncNotice: "7-day meal plans are curated from our complete authentic Sourashtra recipe collection. Your fridge inventory is used to identify missing ingredients and generate your weekly shopping list.",
    printPlanHeader: "7-Day Sourashtra Meal Plan",
    printDayCol: "Day",
    printGroceryChecklist: "Fresh Groceries to Buy (Veggies, Produce & Meat - Missing from Fridge)",
    loadingInventory: "Loading your pantry...",
    emptyInventoryTitle: "Your fridge is empty",
    emptyInventorySub: "Scan some items or upload a grocery receipt to get started.",
    scanItems: "Scan Items",
    qty: "Qty",
    exp: "Exp",
    
    recipesTitle: "Sourashtra Recipes",
    recipesSub: "Meals based on what you already have",
    loadingRecipes: "Loading authentic Sourashtra recipes...",
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
    sampleSet: "உணவுத் திட்டம்",
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
    addToCalendar: "+ நாட்காட்டியில் சேர்",
    calendarModalTitle: "நாட்காட்டியில் சேர்க்க",
    calendarModalSubtitle: "இந்த நாளுக்கான உணவுத் திட்டத்தை உங்கள் நாட்காட்டி செயலியில் சேர்க்கவும்",
    calendarGoogleBtn: "கூகிள் நாட்காட்டி (Google Calendar)",
    calendarGoogleSub: "கூகிள் நாட்காட்டி செயலிக்கு உடனடி இணைப்பு",
    calendarDeviceBtn: "சாதன நாட்காட்டி (Android / iOS / Standard .ics)",
    calendarDeviceSub: "அனைத்து மொபைல் நாட்காட்டி செயலிகளுக்கும் ஏற்ற பொதுவான கோப்பு",
    calendarModalFooterNote: "✓ அனைத்து ஆண்ட்ராய்டு, ஐபோன் மற்றும் கணினி நாட்காட்டிகளிலும் செயல்படும்",
    calendarEventSent: "✅ உங்கள் நாட்காட்டிக்கான உணவுத் திட்டம் தயார்!",
    calendarEventSentSub: "உங்கள் மொபைல் நாட்காட்டிக்கு நிகழ்வு அனுப்பப்பட்டது. தானாக திறக்கவில்லை என்றால், கீழே உள்ள பொத்தானைத் தட்டவும்.",
    calendarDownloadIcs: "⬇️ .ics கோப்பைப் பதிவிறக்கு",
    calendarOpenGoogle: "🗓️ கூகிள் நாட்காட்டியில் திறக்க",
    calendarDoneBtn: "முடிந்தது / மூடு",
    copyPlanSuccess: "✓ 7 நாள் திட்டமும் மளிகைப் பட்டியலும் நகலெடுக்கப்பட்டது!",
    printModalTitle: "🖨️ 7 நாள் சௌராஷ்டிரா உணவு & மளிகைப் பட்டியல்",
    printModalPrintBtn: "🖨️ அச்சிடு / PDF சேமி",
    printModalCopyBtn: "📋 முழுத் திட்டத்தையும் நகலெடு",
    freshItemsToBuy: "வாங்க வேண்டிய புதிய பொருட்கள்",
    alreadyInFridge: "குளிர்சாதனப் பெட்டியில் உள்ளவை",
    searchRecipesPlaceholder: "🔍 சௌராஷ்டிர சமையல் குறிப்புகளைத் தேடுங்கள் (எ.கா. அவ்வுண்டி, புடித், பில்ச்சார், அம்பாட்)...",
    plannedItemsToBuy: "வாங்க வேண்டிய புதிய காய்கறிகள் & இறைச்சி",
    planShoppingDescription: "7 நாள் உணவுத் திட்டத்திற்குத் தேவைப்படும், தற்போது குளிர்சாதனப் பெட்டியில் இல்லாத பொருட்கள்.",
    checkPantryTitle: "அஞ்சறைப் பெட்டி & சமையலறை மளிகை (பொதுவாக இருப்பில் இருக்கும்)",
    checkPantryDescription: "எண்ணெய், உப்பு, கடுகு, மஞ்சள், புளி, பருப்பு போன்ற அத்தியாவசியப் பொருட்கள் சமையலறையில் இருப்பதாகக் கருதப்படுகிறது. தீர்ந்துபோயிருந்தால் சரிபார்க்கவும்!",
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
    quantityNeeded: "அளவு",
    quantityNotSpecified: "தேவைக்கேற்ப",
    checkedOff: "வாங்கப்பட்டது",
    inPantry: "இருப்பில் உள்ளது",
    checkStock: "சரிபார்க்கவும்",
    allInPantry: "அனைத்தும் இருப்பில் உள்ளன",
    pantryStockedCount: "இருப்பில் உள்ளன",
    loadShoppingError: "வாங்க வேண்டிய விவரங்களை ஏற்ற முடியவில்லை. மீண்டும் முயற்சிக்கவும்.",
    shareShoppingError: "பட்டியலைப் பகிர முடியவில்லை. அதற்குப் பதிலாக நகலெடுக்கவும்.",
    copyShoppingError: "வாங்க வேண்டிய பட்டியலை நகலெடுக்க முடியவில்லை.",
    retry: "மீண்டும் முயற்சி",
    openFullShoppingList: "முழுப் பட்டியலைத் திற",
    fullShoppingListDescription: "உங்கள் 7 நாள் உணவுத் திட்டத்திற்குத் தேவையான பொருட்கள். வாங்கியவற்றைக் குறித்துக் கொள்ளலாம் அல்லது பட்டியலைப் பகிரலாம்.",
    chooseRecipePrompt: "முழு செய்முறை, தேவையான பொருட்கள் மற்றும் காணொளியைப் பார்க்க கீழே உள்ள முக்கிய உணவு அல்லது துணை உணவைத் தேர்ந்தெடுக்கவும்.",
    mainFridgeIngredients: "குளிர்சாதனப் பெட்டிப் பொருட்கள் (காய்கறி / இறைச்சி / பால் பொருட்கள்):",
    pantryAdditives: "அலமாரி மற்றும் மசாலாப் பொருட்கள் (பருப்பு, புளி, பொடி, உப்பு, எண்ணெய்):",
    recipeLink: "செய்முறை",
    pairedWith: "துணை உணவு:",
    noCalorieData: "கலோரி விவரம் இல்லை.",
    tableIngredient: "பொருள்",
    tableWeight: "எடை",
    tableCalories: "கலோரி",
    tableTotal: "மொத்தம்",
    undo: "செயல்தவிர்",
    itemRemoved: "சரக்கிலிருந்து நீக்கப்பட்டது",
    howItWorks: "இது எப்படி வேலை செய்கிறது?",
    walkthroughTitle: "சௌராஷ்டிரா செஃப் எப்படி வேலை செய்கிறது?",
    walkthroughIntro: "3 எளிய படிகளில் உங்கள் பாரம்பரிய சமையல் வழிகாட்டி:",
    walkthroughStep1Title: "குளிர்சாதனப் பொருட்கள்",
    walkthroughStep1Desc: "உங்கள் வீட்டில் உள்ள காய்கறிகள், பால் பொருட்கள் மற்றும் மளிகைப் பொருட்களைக் குறித்துக் கொள்ளுங்கள்.",
    walkthroughStep2Title: "7 நாள் உணவுத் திட்டம்",
    walkthroughStep2Desc: "முக்கிய உணவுடன் பாரம்பரிய துணை உணவு சேர்க்கப்பட்ட முழுமையான சௌராஷ்டிர உணவுகளை சுவையுங்கள்.",
    walkthroughStep3Title: "வாங்க வேண்டிய பட்டியல்",
    walkthroughStep3Desc: "இல்லாத பொருட்கள் தானாகப் பட்டியலிடப்படும். வாங்கியதும் குறித்துக் கொள்ளுங்கள்!",
    gotIt: "புரிந்தது, சமைக்கலாம்!",
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
    inventoryPlanNotice: "உங்கள் சரக்கு 7 நாள் உணவுத் திட்டத்துடன் தானாக ஒப்பிடப்பட்டு, வாங்க வேண்டிய மளிகைப் பட்டியல் கணக்கிடப்படும். சமையல் குறிப்புகள் முழுமையான பாரம்பரிய சௌராஷ்டிர தொகுப்பிலிருந்து பெறப்படுகின்றன.",
    viewMealPlanner: "7 நாள் உணவுத் திட்டம் & சமையல்",
    plannerInventorySyncNotice: "7 நாள் உணவுத் திட்டம் முழுமையான பாரம்பரிய சௌராஷ்டிர தொகுப்பிலிருந்து தேர்ந்தெடுக்கப்படுகிறது. உங்கள் சரக்கில் இல்லாத பொருட்கள் தானாக வாங்க வேண்டிய பட்டியலில் சேர்க்கப்படும்.",
    printPlanHeader: "7 நாள் சௌராஷ்டிர வார உணவுத் திட்டம்",
    printDayCol: "நாள்",
    printGroceryChecklist: "வாங்க வேண்டிய புதிய காய்கறிகள் & இறைச்சி (சரக்கில் இல்லாதவை)",
    loadingInventory: "உங்கள் உணவுப் பொருட்களை ஏற்றுகிறது...",
    emptyInventoryTitle: "உங்கள் குளிர்சாதனப் பெட்டி காலியாக உள்ளது",
    emptyInventorySub: "பொருட்களை ஸ்கேன் செய்யவும் அல்லது மளிகை ரசீதைப் பதிவேற்றவும்.",
    scanItems: "பொருட்களை ஸ்கேன் செய்",
    qty: "அளவு",
    exp: "காலாவதி",
    
    recipesTitle: "சௌராஷ்ட்ரா சமையல் குறிப்புகள்",
    recipesSub: "உங்களிடம் உள்ள பொருட்களைக் கொண்டு உணவு வகைகள்",
    loadingRecipes: "பாரம்பரிய சௌராஷ்ட்ரா சமையல் குறிப்புகளை ஏற்றுகிறது...",
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

const TAMIL_MONTH_NAMES: Record<string, string> = {
  Jan: "ஜன",
  Feb: "பிப்",
  Mar: "மார்ச்",
  Apr: "ஏப்",
  May: "மே",
  Jun: "ஜூன்",
  Jul: "ஜூலை",
  Aug: "ஆக",
  Sep: "செப்",
  Oct: "அக்",
  Nov: "நவ",
  Dec: "டிச"
};

export function formatDateLabel(dateLabel: string, language: string): string {
  if (!dateLabel) return '';
  if (language !== 'Tamil') return dateLabel;
  let result = dateLabel;
  for (const [enMonth, taMonth] of Object.entries(TAMIL_MONTH_NAMES)) {
    if (result.includes(enMonth)) {
      result = result.replace(enMonth, taMonth);
      break;
    }
  }
  return result;
}

const DISH_TITLE_TRANSLATION_MAP: Record<string, string> = {
  // Breakfast Combos
  'Soft Phalar (Steamed Idli) & Crispy Diido (Dosa)': 'மென்மையான பலார் (இட்லி) & மொறுமொறு தீதோ (தோசை)',
  'Thakkali Ounty (Tangy Tomato Gravy) & Nalar Chutni (Coconut Chutney)': 'தக்காளி அவ்வுண்டி & தேங்காய் சட்னி',
  'Mudha Pongal (Velvety Milk & Ghee Ven Pongal)': 'முத்தா பொங்கல் (நெய் வெண் பொங்கல்)',
  'Vangi Budith (Pressure-Cooked Brinjal Chutney) & Tiffin Sambar': 'வாங்கி புடித் (கத்திரிக்காய் சட்னி) & சாம்பார்',
  'Crispy Roast Diido (Sourashtra Dosa) & Uttapam': 'மொறுமொறு ரோஸ்ட் தீதோ (தோசை) & ஊத்தப்பம்',
  'Alla Chutni (Fiery Ginger-Tamarind Chutney) & White Coconut Chutney': 'அல்லா சட்னி (இஞ்சி-புளி சட்னி) & வெள்ளை தேங்காய் சட்னி',
  'Dhowra Pongal / Muddha Ambat Bhaath (Pressure-Cooker Tamarind Pongal)': 'தௌரா பொங்கல் / புளிப் பொங்கல்',
  'Odachakadalai Thuvaiyal (Roasted Gram / Chenna Chutney) & Crispy Appalam': 'பொட்டுக் கடலைத் துவையல் & அப்பளம்',
  'Loni Appam / Madurai Karupatti Appam (Palm Jaggery & Butter Appam)': 'லோனி அப்பம் / கருப்பட்டி அப்பம்',
  'Savory Kara Appam & Kandha Chutney (Madurai Thanni Onion-Tomato Chutney)': 'கார அப்பம் & கந்தா சட்னி (தண்ணி சட்னி)',
  'Kenni Paes / Ulundhu Kanji (Nourishing Urad Dal & Coconut Milk Porridge)': 'கென்னி பேஸ் / உளுந்தங் கஞ்சி',
  'Sourashtra Pudina Losto (Zero-Oil Fiery Mint-Tamarind Thogayal)': 'சௌராஷ்டிர புதினா லோஸ்டோ (புதினா துவையல்)',
  'Mhuri Pongal (Sourashtra Mustard-Coconut Seasoned Rice)': 'முரி பொங்கல் (கடுகு-தேங்காய் சாதம்)',
  'Bela Chutney (Roasted Chana Dal Chutney) & Curd': 'பேலா சட்னி (கடலைப் பருப்பு சட்னி) & தயிர்',
  'Limbu Pongal (Lemon Rice) & Thoop Pongal (Ghee-Pepper "Love Birds" Rice)': 'லிம்பு பொங்கல் (எலுமிச்சை சாதம்) & தூப் பொங்கல் (லவ் பேர்ட்ஸ் சாதம்)',
  'Vangi Chutni & Chenna Bhurko (Pottukadalai Podi)': 'வாங்கி சட்னி (கத்திரிக்காய் சட்னி) & சென்னா புர்கோ',
  'Hot Steamed Phalar (Mini Idlis) & Medhu Vadai': 'சூடான பலார் (மினி இட்லி) & மெது வடை',
  'Sourashtra Tiffin Sambar & Idli Chenna Bhurko with Gingelly Oil': 'டிபன் சாம்பார் & நல்லெண்ணெய் இட்லி பொடி',

  // Lunch Combos
  'Steamed Rice (Saadu) + Losan Kolkar (Whole Garlic & Sesame Oil Tamarind Gravy)': 'சாதம் + லோசன் கொல்கார் (பூண்டு குழம்பு)',
  'Joman Pilchar (Wedding-Style Tomato Rasam) + Kachana Bela Kutkiri (Chana Dal Masiyal)': 'ஜோமன் பில்ச்சார் (கல்யாண ரசம்) + கச்சனா பேலா குத்கிரி (பருப்பு மசியல்)',
  'Steamed Rice + Sengu-Vangi-Batata Sambar (Drumstick, Brinjal & Potato Sambar)': 'சாதம் + செங்கு-வாங்கி-படாடா சாம்பார் (முருங்கை, கத்திரி, உருளை சாம்பார்)',
  'Thakkali Charu (Sourashtra Tomato Broth) + Polte Bhajji (Mashed Greens / Keerai Kadayal)': 'தக்காளி சாறு (ரசம்) + போல்டே பஜ்ஜி (கீரை கடையல்)',
  'Sourashtra Ambat Bhaath (Roast Methi & Sesame Tamarind Rice) + Dhi Bhaath (Curd Rice)': 'அம்பாட் பாத் (புளி சாதம்) + தி பாத் (தயிர் சாதம்)',
  'Pudina / Kothmir Losto + Nellika Rubbin (Zero-Oil Gooseberry Pickle) & Potato Fry': 'புதினா / கொத்தமல்லி லோஸ்டோ + நெல்லிக்காய் ஊறுகாய் & உருளை வறுவல்',
  'Steamed Rice + Ancient Sourashtra Koduk Ounty (Fermented Rice-Starch Probiotic Gravy)': 'சாதம் + கொடுக் அவ்வுண்டி (பழைய சோறு புளிக்குழம்பு)',
  'Polte Bhajji (Arai Keerai Masiyal) + Crispy Roasted Beans / Curd': 'போல்டே பஜ்ஜி (கீரை மசியல்) + பீன்ஸ் வறுவல் / தயிர்',
  'Steamed Rice + Bhajji Charu (Keerai Chaaru — Greens, Coconut, Poppy Seed & Milk Broth)': 'சாதம் + பஜ்ஜி சாறு (கீரை பால் ரசம்)',
  'Sourashtra Vangi / Pavakkai Pitla (Roasted Coconut-Chana Dal Curry) & Appalam': 'சௌராஷ்டிர வாங்கி / பாகற்காய் பிட்லா & அப்பளம்',
  'Steamed Rice + Kachchana Ambat (Sourashtra Black Chickpea Gravy)': 'சாதம் + கச்சனா அம்பாட் (கருப்பு கொண்டைக்கடலை குழம்பு)',
  'Kachana Pani (Spiced Black Chickpea Broth Rasam) + Kachamba Bhudith (Raw Mango Pachadi)': 'கச்சனா பானி (கொண்டைக்கடலை ரசம்) + கச்சாம்பா புடித் (மாங்காய் பச்சடி)',
  'Steamed Rice + Mithi Kolkar (Vendhaya Kuzhambu) or Udith Nalar Ounty (Black Urad Coconut Curry)': 'சாதம் + மிதி கொல்கார் (வெந்தயக் குழம்பு) / உளுந்து தேங்காய் அவ்வுண்டி',
  'Paruppu Rasam + Jinnavara Ambat (Cluster Beans Gravy)': 'பருப்பு ரசம் + ஜின்னவாரா அம்பாட் (கொத்தவரங்காய் குழம்பு)',
  'Sunday Feast: Steamed Rice + Chaino Kolkar (Sourashtra Mutton Ounty)': 'ஞாயிறு விருந்து: சாதம் + சைனோ கொல்கார் (சௌராஷ்டிர மட்டன் குழம்பு)',
  'Polte Chaino (Mutton Uppu Kari with Crunchy Coconut Bits) + Joman Pilchar': 'போல்டே சைனோ (மட்டன் உப்புக்கறி) + ஜோமன் பில்ச்சார்',
  'Sunday Feast: Steamed Rice + Kajali Ambat (Madurai Special Veg Eral / Saiva Liver Gravy)': 'ஞாயிறு விருந்து: சாதம் + கஜலி அம்பாட் (சைவ ஈரல் குழம்பு)',
  'Gullu Pongal (Sweet Jaggery Pongal) + Joman Pilchar (Wedding Rasam)': 'குல்லு பொங்கல் (சர்க்கரைப் பொங்கல்) + ஜோமன் பில்ச்சார்',
  'Steamed Rice + Saurashtra Koli Ounty (Pepper & Poppy Seed Chicken Curry)': 'சாதம் + கோழி அவ்வுண்டி (சிக்கன் குழம்பு)',
  'Pilchar Bhurko Koli Varuval (Rasam Powder Dry Chicken Roast) + Garlic Rasam': 'பில்ச்சார் புர்கோ கோழி வறுவல் + பூண்டு ரசம்',
  'Steamed Rice + Beans & Batata Ambat (Double Beans & Potato Gravy)': 'சாதம் + பீன்ஸ் & படாடா அம்பாட் (டபுள் பீன்ஸ் & உருளை குழம்பு)',
  'Dheim Ounty / More Kulambu (Spiced Buttermilk Curry) & Potato Roast': 'தேயிம் அவ்வுண்டி / மோர் குழம்பு & உருளை வறுவல்',
  'Steamed Rice + Sourashtra Meen / Koddi Ounty (Tamarind & Whole Garlic Fish Curry)': 'சாதம் + மீன் / கொட்டி அவ்வுண்டி (மீன் குழம்பு)',
  'Sourashtra Anda Ounty (Boiled Egg Masala) + Lemon Rasam (Limbu Pilchar)': 'முட்டை அவ்வுண்டி (முட்டை மசாலா) + எலுமிச்சை ரசம்',
  'Steamed Rice + Sourashtra Bela Ounty (Wholesome Lentil-Vegetable Gravy)': 'சாதம் + பேலா அவ்வுண்டி (பருப்புக் குழம்பு)',
  'Cauliflower Kulambu + Sourashtra Instant Pepper Rasam': 'காலிஃபிளவர் குழம்பு + உடனடி மிளகு ரசம்',

  // Dinner Combos
  'Pangarapaan Bhairi (Herbal Greens Fritters) & Nalar Bhairi (Crispy Coconut Rice Fritters)': 'பங்காரபான் பைரி (கீரை வடை) & நாலார் பைரி (தேங்காய் அரிசி வடை)',
  'Chenna Bhurko (Spicy Roasted Gram Podi) & Thakkali Chutni': 'சென்னா புர்கோ (பொட்டுக்கடலை பொடி) & தக்காளி சட்னி',
  'Soft Phulka / Chappathi & Idiyappam (String Hoppers)': 'சப்பாத்தி & இடியாப்பம்',
  'Nalar Doodh Ounty (Thengai Paal Kulambu — Creamy Coconut Milk Gravy)': 'நாலார் தூத் அவ்வுண்டி (தேங்காய்ப்பால் குழம்பு)',
  'Sevi / Doodhum Dhowlo (Creamy Milk Rice Dumplings)': 'சேவி / தூதும் தௌலோ (பால் கொழுக்கட்டை)',
  'Savory Panim Dhowlo (Steamed Salted Dumplings) & Kothmir Chutni': 'பானிம் தௌலோ (கார கொழுக்கட்டை) & கொத்தமல்லி சட்னி',
  'Sourashtra Thakkali Pongal (Cinnamon-Clove Spiced Tomato Pulao)': 'சௌராஷ்டிர தக்காளி பொங்கல் (தக்காளி சாதம்)',
  'Bela Chutney (Roasted Chana Dal Chutney) & Onion-Curd Pachadi': 'பேலா சட்னி (கடலைப் பருப்பு சட்னி) & வெங்காய பச்சடி',
  'Soft Sponge Kal Diido (Dosa) & Steamed Phalar (Idli)': 'கல் தீதோ (கல் தோசை) & சூடான பலார் (இட்லி)',
  'Sourashtra Bela Ounty (Paruppu Kulambu) & Alla Chutni (Ginger Chutney)': 'பேலா அவ்வுண்டி (பருப்பு குழம்பு) & அல்லா சட்னி (இஞ்சி சட்னி)',
  'Serki Bhaath (Traditional Cottonseed-Milk & Palm Jaggery Rice)': 'செர்கி பாத் (பருத்திப்பால் சாதம்)',
  'Thengai Pooranam Dhowlo (Sweet Coconut-Jaggery Kozhukattai)': 'தேங்காய் பூரண தௌலோ (இனிப்பு கொழுக்கட்டை)',
  'Hot Layered Chappathi / Coin Parotta': 'சப்பாத்தி / காயின் பரோட்டா',
  'Sourashtra Meal Maker Ambat (Spiced Soya Chunks Gravy) & Onion Salad': 'மீல் மேக்கர் அம்பாட் (சோயா குழம்பு) & வெங்காய சாலட்',
  'Hot Mini Phalar (Idlis) & Crispy Onion Uttapam': 'மினி பலார் (இட்லி) & வெங்காய ஊத்தப்பம்',
  'Dheim Ounty (Seasoned Curd & Besan Gravy) & Sesame Oil Idli Bhurko': 'தேயிம் அவ்வுண்டி (மோர் குழம்பு) & நல்லெண்ணெய் இட்லி பொடி',

  // Common Individual Dishes
  'Thakkali Ounty': 'தக்காளி அவ்வுண்டி',
  'Losan Kolkar': 'லோசன் கொல்கார் (பூண்டு குழம்பு)',
  'Koduk Ounty': 'கொடுக் அவ்வுண்டி (பழைய சோறு புளிக்குழம்பு)',
  'Vangi Budith': 'வாங்கி புடித் (கத்திரிக்காய் சட்னி)',
  'Pudina Kothmir Losto': 'புதினா கொத்தமல்லி லோஸ்டோ',
  'Polte Bhajji': 'போல்டே பஜ்ஜி (கீரை மசியல்)',
  'Nellika Rubbin': 'நெல்லிக்காய் ருப்பின் (ஊறுகாய்)',
  'Beans Batata Ambat': 'பீன்ஸ் படாடா அம்பாட்',
  'Kachchana Ambat': 'கச்சனா அம்பாட் (கொண்டைக்கடலை குழம்பு)',
  'Joman Pilchar': 'ஜோமன் பில்ச்சார் (கல்யாண ரசம்)',
  'Mithi Kolkar': 'மிதி கொல்கார் (வெந்தயக் குழம்பு)',
  'Chaino Kolkar': 'சைனோ கொல்கார் (மட்டன் குழம்பு)',
  'Polte Chaino': 'போல்டே சைனோ (மட்டன் உப்புக்கறி)',
  'Kajali Ambat': 'கஜலி அம்பாட் (சைவ ஈரல் குழம்பு)',
  'Gullu Pongal': 'குல்லு பொங்கல் (சர்க்கரைப் பொங்கல்)',
  'Koli Ounty': 'கோழி அவ்வுண்டி (சிக்கன் குழம்பு)',
  'Pilchar Bhurko Koli Varuval': 'பில்ச்சார் புர்கோ கோழி வறுவல்',
  'Dheim Ounty': 'தேயிம் அவ்வுண்டி (மோர் குழம்பு)',
  'Meen Kodhi': 'மீன் கொட்டி (மீன் குழம்பு)',
  'Anda Ounty': 'முட்டை அவ்வுண்டி',
  'Bela Ounty': 'பேலா அவ்வுண்டி (பருப்புக் குழம்பு)',
  'Cauliflower Kulambu': 'காலிஃபிளவர் குழம்பு',
  'Pangarapaan Nalar Bhairi': 'பங்காரபான் நாலார் பைரி (வடை)',
  'Nalar Doodh Ounty': 'நாலார் தூத் அவ்வுண்டி (தேங்காய்ப்பால் குழம்பு)',
  'Sevi Doodhum Dhowlo': 'தூதும் தௌலோ (பால் கொழுக்கட்டை)',
  'Panim Dhowlo': 'பானிம் தௌலோ (கார கொழுக்கட்டை)',
  'Thakkali Pongal': 'தக்காளி பொங்கல்',
  'Serki Bhaath': 'செர்கி பாத் (பருத்திப்பால் சாதம்)',
  'Meal Maker Ambat': 'மீல் மேக்கர் அம்பாட்',
  'Mudha Pongal': 'முத்தா பொங்கல் (வெண் பொங்கல்)',
  'Dhowra Pongal': 'தௌரா பொங்கல் (புளிப் பொங்கல்)',
  'Mhuri Pongal': 'முரி பொங்கல் (கடுகு சாதம்)',
  'Ambat Bhaath': 'அம்பாட் பாத் (புளி சாதம்)'
};

const PAIRING_NOTE_TRANSLATION_MAP: Record<string, string> = {
  'Classic Sourashtra morning tiffin—Ounty Bhurko thickened tomato gravy poured generously over hot Phalar (idli).':
    'பாரம்பரிய சௌராஷ்டிர காலை உணவு—சூடான பலார் (இட்லி) மீது அவ்வுண்டி புர்கோ மணக்கும் தக்காளி குழம்பு.',
  'The #1 iconic Sourashtra breakfast marriage—creamy pepper-cumin Mudha Pongal is always eaten with smoky Vangi Budith.':
    'மிகப் புகழ்பெற்ற சௌராஷ்டிர காலை உணவு—மிளகு சீரக முத்தா பொங்கலுடன் சுவையான வாங்கி புடித் (கத்திரிக்காய் சட்னி).',
  "Sugi Cooks' famous Madurai 'Killer Combo'—fiery sweet-tangy ginger chutney balanced with cool coconut chutney.":
    'மதுரையின் புகழ்பெற்ற காம்போ—சுவையான அல்லா சட்னி (இஞ்சி சட்னி) மற்றும் குளிர்ச்சியான தேங்காய் சட்னி.',
  'Traditional Madurai temple & household breakfast—soft tangy Dhowra Pongal paired with nutty roasted gram thuvaiyal.':
    'பாரம்பரிய மதுரை காலை உணவு—சுவையான தௌரா பொங்கலுடன் பொட்டுக்கடலைத் துவையல்.',
  'Famous Sourashtra morning street-style sweet & savory breakfast platter.':
    'பிரபலமான சௌராஷ்டிர இனிப்பு மற்றும் கார அப்பம் காலை உணவு.',
  'Traditional cooling morning kanji—creamy coconut-urad porridge contrasted with a fiery dab of Pudina Losto.':
    'பாரம்பரிய காலை கஞ்சி—தேங்காய்ப்பால் உளுந்தங் கஞ்சியுடன் காரசாரமான புதினா லோஸ்டோ.',
  'Unique Sourashtra tiffin rice flavored with freshly ground raw mustard and green chilli paste.':
    'புதிதாக அரைத்த கடுகு-பச்சை மிளகாய் மசாலா மணக்கும் சௌராஷ்டிர முரி பொங்கல்.',
  'In Sourashtra homes, tangy Limbu Pongal and mild ghee-pepper Thoop Pongal are served side-by-side as "Love Birds Rice".':
    'சௌராஷ்டிர வீடுகளில் எலுமிச்சை சாதமும் நெய் மிளகு சாதமும் "லவ் பேர்ட்ஸ்" சாதமாகப் பரிமாறப்படுகிறது.',
  'Classic Madurai tiffin—fluffy idlis dunked in aromatic Sourashtra Sambar with sesame oil and Bhurko.':
    'மெதுவான இட்லியுடன் நல்லெண்ணெய், புர்கோ மணக்கும் சௌராஷ்டிர சாம்பார்.',
  'Rich sesame-oil garlic Kolkar balanced with soothing chana dal kutkiri and pepper-cumin Joman Pilchar.':
    'நல்லெண்ணெய் பூண்டு கொல்காருடன் பருப்பு மசியல் மற்றும் மிளகு-சீரக ஜோமன் பில்ச்சார் (ரசம்).',
  'Everyday Sourashtra family lunch thali with freshly ground Sambar Bhurko and iron-rich mashed greens.':
    'அரைத்து வைத்த சாம்பார் புர்கோவுடன் கூடிய அன்றாட மதிய உணவு மற்றும் சத்தான கீரை கடையல்.',
  'Festival & travel favorite—tangy Ambat Bhaath followed by cool curd rice and fiery green Losto.':
    'விழா மற்றும் பயண உணவு—சுவையான அம்பாட் பாத் (புளி சாதம்), தயிர் சாதம் மற்றும் புதினா லோஸ்டோ.',
  'Centuries-old Sourashtra heritage lunch—tangy fermented kanji gravy is traditionally paired with mashed greens.':
    'பாரம்பரிய சௌராஷ்டிர மதிய உணவு—பழைய சோறு புளிக்குழம்புடன் சத்தான கீரை மசியல்.',
  'Mild, nourishing greens-and-milk broth paired with a hearty, spiced brinjal/bitter gourd Pitla.':
    'சத்தான கீரை பால் ரசத்துடன் ருசியான கத்தரிக்காய்/பாகற்காய் பிட்லா.',
  'Protein-rich Madurai meal where the boiled black chickpea stock is turned into aromatic Kachana Pani rasam.':
    'புரதம் நிறைந்த மதிய உணவு—கருப்பு கொண்டைக்கடலை குழம்பு மற்றும் கொண்டைக்கடலை ரசம்.',
  'Cooling fenugreek & black urad dal gravies that strengthen joints and digestion.':
    'உடல் குளிர்ச்சி மற்றும் செரிமானத்திற்கு உகந்த வெந்தயக் குழம்பு மற்றும் உளுந்து குழம்பு.',
  'The ultimate Sourashtra Sunday feast—bone-in Mutton Ounty paired with oil-free coconut-studded Polte Chaino and rasam.':
    'சௌராஷ்டிர ஞாயிறு விருந்து—மட்டன் அவ்வுண்டி, தேங்காய் சேர்த்த மட்டன் உப்புக்கறி மற்றும் ரசம்.',
  'Famous Sourashtra vegetarian feast curry (Kajali Ambat) served with sweet Gullu Pongal and wedding-style Pilchar.':
    'பிரபலமான சௌராஷ்டிர சைவ விருந்து—கஜலி அம்பாட் (சைவ ஈரல் குழம்பு), சர்க்கரைப் பொங்கல் மற்றும் ரசம்.',
  "Aromatic white poppy-pepper chicken gravy paired with Sugi Cooks' grandmother-style Pilchar Bhurko chicken roast.":
    'கசகசா-மிளகு மணக்கும் கோழி குழம்புடன் பாரம்பரிய பில்ச்சார் புர்கோ கோழி வறுவல்.',
  'Hearty Madurai feast double-beans curry paired with soothing spiced buttermilk Ounty.':
    'மதுரை ஸ்பெஷல் டபுள் பீன்ஸ் குழம்புடன் இதமான மோர் அவ்வுண்டி.',
  'No-coconut tangy Madurai fish/dry-fish curry simmered in gingelly oil with whole garlic pods.':
    'தேங்காய் சேர்க்காமல் நல்லெண்ணெய் பூண்டுடன் சமைத்த மதுரை மீன் குழம்பு.',
  'Comforting forgotten heritage lentil gravy paired with hot pepper rasam.':
    'பாரம்பரிய பருப்புக் குழம்புடன் சூடான மிளகு ரசம்.',
  'Iconic Sourashtra evening street-food tiffin—puffed crispy rice-and-greens Bhairi dipped in nutty Chenna Bhurko.':
    'மாலையில் மொறுமொறு பங்காரபான் பைரி (கீரை வடை) மற்றும் சென்னா புர்கோ (பொட்டுக்கடலை பொடி).',
  'Mild, aromatic coconut-milk curry that pairs effortlessly with evening chappathi, appam, or idiyappam.':
    'மென்மையான சப்பாத்தி, ஆப்பம் அல்லது இடியாப்பத்துடன் அருமையான தேங்காய்ப்பால் குழம்பு.',
  'Traditional Sourashtra steamed rice-flour dumpling duo—one simmered in cardamom milk and one tempered with mustard and sesame.':
    'ஏலக்காய் மணக்கும் பால் கொழுக்கட்டை மற்றும் தாளித்த காரக் கொழுக்கட்டை.',
  'One-pot pressure-cooker Madurai tomato pongal fragrant with cinnamon, mint, and coconut.':
    'பட்டை கிராம்பு, புதினா மணக்கும் மதுரை தக்காளி பொங்கல்.',
  'Light, digestible evening tiffin pairing fluffy kal dosas with lentil-based Bela Ounty.':
    'எளிதில் செரிக்கும் மாலை டிபன்—மென்மையான கல் தோசையுடன் பருப்பு அவ்வுண்டி.',
  'Nourishing evening heritage meal featuring Paruthi Paal (cottonseed milk) & palm jaggery.':
    'பருத்திப்பால் மற்றும் பனை கருப்பட்டி கலந்த சத்தான பாரம்பரிய செர்கி பாத்.',
  'High-protein Sourashtra dinner curry made with Ounty Bhurko and soya chunks.':
    'அவ்வுண்டி புர்கோ மணக்கும் அதிக புரதம் கொண்ட சோயா சங்க்ஸ் அம்பாட்.',
  'Comforting, light evening curd-based Ounty that settles the stomach at night.':
    'இரவில் எளிதில் செரிக்கும் இதமான தயிர் அவ்வுண்டி மற்றும் இட்லி பொடி.',
  'Authentic Sourashtra morning tiffin paired with freshly ground chutney/budith.':
    'புதிதாக அரைத்த சட்னி/புடித்துடன் கூடிய பாரம்பரிய சௌராஷ்டிர காலை உணவு.',
  'Traditional Sourashtra variety rice meal balanced with a tangy/spicy side dish and cool curd rice.':
    'சுவையான வகை சாதம், காரசாரமான தொடுகறி மற்றும் குளிர்ச்சியான தயிர் சாதம்.',
  'Wholesome Sourashtra evening tiffin combination.':
    'ஆரோக்கியமான சௌராஷ்டிர மாலை உணவு காம்போ.'
};

export function formatPairingNote(note: string, language: string): string {
  if (!note) return '';
  if (language !== 'Tamil') return note;
  if (PAIRING_NOTE_TRANSLATION_MAP[note]) {
    return PAIRING_NOTE_TRANSLATION_MAP[note];
  }
  for (const [key, val] of Object.entries(PAIRING_NOTE_TRANSLATION_MAP)) {
    if (note.includes(key) || key.includes(note)) return val;
  }
  return note;
}

export function formatDishTitle(title: string, language: string): string {
  if (!title) return '';
  if (language === 'English') {
    // Clean up dual-script titles: "Losto(sourashtra)/புதினா தொவயல்" -> "Losto (Sourashtra Mint Chutney)"
    let clean = title.replace(/\s*\/[\u0B80-\u0BFF\s]+/g, '');
    clean = clean.replace(/Losto\(sourashtra\)/i, 'Losto (Sourashtra Mint Chutney)');
    return clean.trim();
  }

  // Tamil mode - enforce authentic Tamil script, never leave trailing English transliterations
  if (DISH_TITLE_TRANSLATION_MAP[title]) {
    return DISH_TITLE_TRANSLATION_MAP[title];
  }
  const trimmed = title.trim();
  for (const [enKey, taVal] of Object.entries(DISH_TITLE_TRANSLATION_MAP)) {
    if (enKey.toLowerCase() === trimmed.toLowerCase()) {
      return taVal;
    }
  }

  // Combos joined by ' & ' or ' + '
  if (title.includes(' & ')) {
    const parts = title.split(' & ');
    return parts.map((p) => formatDishTitle(p.trim(), 'Tamil')).join(' & ');
  }
  if (title.includes(' + ')) {
    const parts = title.split(' + ');
    return parts.map((p) => formatDishTitle(p.trim(), 'Tamil')).join(' + ');
  }

  // Handle "Sourashtra Name — English Subtitle" or "Name - Subtitle"
  if (title.includes(' — ') || title.includes(' - ')) {
    const mainPart = title.split(/\s*[-—]\s*/)[0].trim();
    if (DISH_TITLE_TRANSLATION_MAP[mainPart]) {
      return DISH_TITLE_TRANSLATION_MAP[mainPart];
    }
    for (const [enKey, taVal] of Object.entries(DISH_TITLE_TRANSLATION_MAP)) {
      if (enKey.toLowerCase() === mainPart.toLowerCase()) {
        return taVal;
      }
    }
  }

  // Handle "Dish Name (Transliteration/Note in parens)"
  const parenMatch = title.match(/^([^(]+)\s*\(([^)]+)\)$/);
  if (parenMatch) {
    const head = parenMatch[1].trim();
    if (DISH_TITLE_TRANSLATION_MAP[head]) {
      return DISH_TITLE_TRANSLATION_MAP[head];
    }
    for (const [enKey, taVal] of Object.entries(DISH_TITLE_TRANSLATION_MAP)) {
      if (enKey.toLowerCase() === head.toLowerCase()) {
        return taVal;
      }
    }
  }

  for (const [enKey, taVal] of Object.entries(DISH_TITLE_TRANSLATION_MAP)) {
    if (enKey.length >= 8 && title.includes(enKey)) {
      return taVal;
    }
  }

  if (title.includes('புதினா தொவயல்') || title.toLowerCase().includes('losto')) {
    return 'புதினா தொவயல் (லோஸ்டோ)';
  }
  return toTamilItemName(title);
}
