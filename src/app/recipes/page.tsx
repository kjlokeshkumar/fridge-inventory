"use client";

import { useEffect, useState, useMemo } from 'react';
import './recipes.css';
import { UI_TRANSLATIONS } from '@/lib/translations';

interface IngredientCalories {
  name: string;
  weightGrams: number;
  calories: number;
}

interface BhurkoGuideItem {
  name: string;
  sourashtraName: string;
  usedFor: string;
  ingredients: string[];
  preparation: string;
  youtubeUrl?: string;
  webUrl?: string;
}

interface Recipe {
  id?: string;
  title: string;
  category?: string;
  sourceAttribution?: string;
  youtubeUrl?: string;
  webUrl?: string;
  fridgeIngredientsUsed?: string[];
  pantryAdditives?: string[];
  bhurkoNote?: string;
  missingIngredients: string[];
  difficulty: string;
  steps: string[];
  totalCalories: number;
  ingredientsBreakdown: IngredientCalories[];
}

interface MealCombo {
  comboId: string;
  mainDishTitle: string;
  pairedWithTitle: string;
  pairingTraditionNote: string;
  primaryRecipe: Recipe;
  secondaryRecipe?: Recipe;
}

interface DayMealPlan {
  dayIndex: number;
  dayName: string;
  dateLabel: string;
  isoDate: string;
  breakfast: MealCombo;
  lunch: MealCombo;
  dinner: MealCombo;
  pinnedSlots: {
    breakfast: boolean;
    lunch: boolean;
    dinner: boolean;
  };
}

interface ActivePlannerModalState {
  dayName: string;
  slotLabel: string;
  combo: MealCombo;
  activeTab: 'main' | 'paired';
}

const FRIDGE_QUICK_ITEMS = [
  'Tomato (Takkali)',
  'Brinjal (Vangi)',
  'Potato (Batata)',
  'Onion (Kando)',
  'Drumstick (Sengu)',
  'Beans / Butter Beans',
  'Garlic (Lasan)',
  'Ginger & Green Chilli',
  'Curry Leaves & Coriander',
  'Mint Leaves (Pudina)',
  'Spinach / Greens (Bhajji)',
  'Lemon (Limbu)',
  'Gooseberry (Nellika)',
  'Coconut (Nalar)',
  'Milk / Curd (Doodh / Dheim)',
  'Eggs (Anda)',
  'Chicken (Koli / Kudi)',
  'Mutton (Chaino / Mansa)',
  'Fish (Meen / Koddi)'
];

// Built-in traditional Madurai Sourashtra Tiffin Base recipes (for Phalar/Diido & Phulka/Idiyappam when clicked as the Main Dish)
const PHALAR_DIIDO_BASE_RECIPE: Recipe = {
  id: 'madurai-phalar-diido-base',
  title: 'Soft Phalar (Madurai Sourashtra Idli) & Crispy Diido (Dosa)',
  category: 'Bhairi & Appam (Fritters & Tiffin)',
  sourceAttribution: 'Madurai Sourashtra Traditional Home Kitchens / Palkar.org',
  youtubeUrl: 'https://www.youtube.com/watch?v=ANrgSgIelP4',
  webUrl: 'https://www.palkar.org/recipes/',
  fridgeIngredientsUsed: ['Curry Leaves & Coriander (for garnish)'],
  pantryAdditives: [
    'Idli Parboiled Rice (4 cups)',
    'Whole White Urad Dal / Udidu Bela (1 cup)',
    'Fenugreek Seeds / Methi (1 tsp)',
    'Thick Poha / Aval (1/4 cup — for pillow-soft Phalar)',
    'Gingelly / Sesame Oil (for roasting Diido)',
    'Rock Salt (Lenu)'
  ],
  bhurkoNote: 'Traditionally served hot with Thakkali Ounty (made with Ounty Bhurko), Alla Chutni, or Chenna Bhurko drizzled with sesame oil.',
  missingIngredients: [],
  difficulty: 'Easy',
  steps: [
    'Wash and soak 4 cups idli parboiled rice (with 1/4 cup poha) and 1 cup whole urad dal (with 1 tsp fenugreek seeds) separately for 4–5 hours.',
    'Grind the urad dal first in a wet grinder adding ice-cold water gradually until fluffy and airy like butter, then grind the rice to a slightly silky-coarse texture.',
    'Mix both batters together with rock salt (Lenu) using clean hands and ferment overnight (8–10 hours) in a warm spot.',
    'For Phalar (Idli): Spoon the risen batter without deflating into greased idli plates and steam for 10–12 minutes until pillowy soft.',
    'For Diido (Dosa): Thin a portion of batter slightly with water, spread in concentric circles on a hot cast-iron tawa, drizzle sesame oil or ghee around the edges, and roast golden.'
  ],
  totalCalories: 310,
  ingredientsBreakdown: [
    { name: 'Idli Rice & Poha', weightGrams: 180, calories: 210 },
    { name: 'Urad Dal (Udidu Bela)', weightGrams: 50, calories: 70 },
    { name: 'Gingelly Oil (Telu)', weightGrams: 5, calories: 30 }
  ]
};

const PHULKA_IDIYAPPAM_BASE_RECIPE: Recipe = {
  id: 'madurai-phulka-idiyappam-base',
  title: 'Soft Phulka / Chappathi & Steamed Idiyappam (String Hoppers)',
  category: 'Bhairi & Appam (Fritters & Tiffin)',
  sourceAttribution: 'Sugi Cooks / Madurai Sourashtra Home Kitchens',
  youtubeUrl: 'https://www.youtube.com/watch?v=pM3CsN9W5Gw',
  webUrl: 'https://sugi-writes.blogspot.com/search/label/Sourashtra%20Recipes',
  fridgeIngredientsUsed: ['Fresh Grated Coconut (Nalar) - 50g'],
  pantryAdditives: [
    'Whole Wheat Flour (Atta) or Roasted Rice Flour (Pavit Flour - 2 cups)',
    'Gingelly Oil or Ghee (Thup - 2 tbsp)',
    'Salt (Lenu) & Warm Water'
  ],
  bhurkoNote: 'Paired with Nalar Doodh Ounty (Thengai Paal Kulambu) or Meal Maker Ambat (made with Sourashtra Ounty Bhurko).',
  missingIngredients: [],
  difficulty: 'Easy',
  steps: [
    'For Soft Chappathi: Knead 2 cups whole wheat flour with salt, 1 tsp oil, and warm water into a pliable dough; rest covered for 20 minutes.',
    'Roll into thin discs, cook on a hot tawa until bubbles appear, flip, and puff directly over the flame; brush lightly with ghee (Thup).',
    'For Idiyappam: Stir boiling salted water with 1 tsp sesame oil into 2 cups roasted rice flour until a soft dough forms.',
    'Press through an idiyappam sevai press onto greased steamer plates topped with grated coconut (Nalar) and steam for 8 minutes.',
    'Serve piping hot with Nalar Doodh Ounty (Coconut Milk Gravy) or Meal Maker Ambat.'
  ],
  totalCalories: 330,
  ingredientsBreakdown: [
    { name: 'Wheat / Rice Flour', weightGrams: 160, calories: 240 },
    { name: 'Grated Coconut & Ghee', weightGrams: 40, calories: 90 }
  ]
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function safeString(val: any): string {
  if (typeof val === 'string') return val;
  if (typeof val === 'number') return String(val);
  if (val && typeof val === 'object') {
    return val.name || val.item || val.instruction || val.step || val.text || JSON.stringify(val);
  }
  return '';
}

function findRecipeByKeywords(catalog: Recipe[], keywords: string[], fallbackIndex = 0): Recipe {
  for (const kw of keywords) {
    if (kw === '__PHALAR_DIIDO__') return PHALAR_DIIDO_BASE_RECIPE;
    if (kw === '__PHULKA_IDIYAPPAM__') return PHULKA_IDIYAPPAM_BASE_RECIPE;
    const low = kw.toLowerCase();
    const match = catalog.find(
      (r) =>
        (r.id && r.id.toLowerCase() === low) ||
        r.title.toLowerCase().includes(low)
    );
    if (match) return match;
  }
  return catalog[fallbackIndex % catalog.length];
}

// Curated Authentic Madurai Sourashtra Breakfast, Lunch, and Dinner Combinations
// primaryKeys -> Main Dish Recipe; secondaryKeys -> Paired Side / Accompaniment Recipe
function buildAuthenticSourashtraCombos(catalog: Recipe[]) {
  if (!catalog || catalog.length === 0) {
    return { breakfastCombos: [], lunchCombos: [], dinnerCombos: [] };
  }

  const hasNonVeg = catalog.some(
    (r) =>
      r.category?.toLowerCase().includes('non-veg') ||
      r.title.toLowerCase().includes('mutton') ||
      r.title.toLowerCase().includes('chicken')
  );

  // 1. AUTHENTIC BREAKFAST (PHALAR / TIFFIN) COMBINATIONS
  const breakfastBlueprints = [
    {
      comboId: 'bf-phalar-thakkali-ounty',
      mainDishTitle: 'Soft Phalar (Steamed Idli) & Crispy Diido (Dosa)',
      pairedWithTitle: 'Thakkali Ounty (Tangy Tomato Gravy) & Nalar Chutni (Coconut Chutney)',
      pairingTraditionNote: 'Classic Madurai Sourashtra morning tiffin—Ounty Bhurko thickened tomato gravy poured generously over hot Phalar (idli).',
      primaryKeys: ['__PHALAR_DIIDO__'],
      secondaryKeys: ['thakkali-ounty', 'Thakkali Ounty']
    },
    {
      comboId: 'bf-mudha-pongal-vangi-budith',
      mainDishTitle: 'Mudha Pongal (Velvety Milk & Ghee Ven Pongal)',
      pairedWithTitle: 'Vangi Budith (Pressure-Cooked Brinjal Chutney) & Tiffin Sambar',
      pairingTraditionNote: 'The #1 iconic Madurai Sourashtra breakfast marriage—creamy pepper-cumin Mudha Pongal is always eaten with smoky Vangi Budith.',
      primaryKeys: ['mudha-pongal', 'Mudha Pongal', 'Muddha pongal'],
      secondaryKeys: ['vangi-budith', 'Vangi Budith']
    },
    {
      comboId: 'bf-diido-alla-chutni',
      mainDishTitle: 'Crispy Roast Diido (Sourashtra Dosa) & Uttapam',
      pairedWithTitle: 'Alla Chutni (Fiery Ginger-Tamarind Chutney) & White Coconut Chutney',
      pairingTraditionNote: "Sugi Cooks' famous Madurai 'Killer Combo'—fiery sweet-tangy ginger chutney balanced with cool coconut chutney.",
      primaryKeys: ['__PHALAR_DIIDO__'],
      secondaryKeys: ['Alla chutni', 'Inji Chutney', 'Ginger Chutney']
    },
    {
      comboId: 'bf-dhowra-pongal-chenna-thuvaiyal',
      mainDishTitle: 'Dhowra Pongal / Muddha Ambat Bhaath (Pressure-Cooker Tamarind Pongal)',
      pairedWithTitle: 'Odachakadalai Thuvaiyal (Roasted Gram / Chenna Chutney) & Crispy Appalam',
      pairingTraditionNote: 'Traditional Madurai temple & household breakfast—soft tangy Dhowra Pongal paired with nutty roasted gram thuvaiyal.',
      primaryKeys: ['Dhowra Pongal', 'Muddha Ambatbath', 'Puli Pongal'],
      secondaryKeys: ['Paruppu Thuvaiyal', 'Chenna Dal', 'Bela chutney']
    },
    {
      comboId: 'bf-loni-karupatti-appam-kandha',
      mainDishTitle: 'Loni Appam / Madurai Karupatti Appam (Palm Jaggery & Butter Appam)',
      pairedWithTitle: 'Savory Kara Appam & Kandha Chutney (Madurai Thanni Onion-Tomato Chutney)',
      pairingTraditionNote: 'Famous Madurai Sourashtra morning street-style sweet & savory breakfast platter.',
      primaryKeys: ['loni-karupatti-appam', 'Karuppatti appam', 'Sourashtra Appam'],
      secondaryKeys: ['Kandha Chutney', 'Thakkali Chutney']
    },
    {
      comboId: 'bf-kenni-paes-pudina-losto',
      mainDishTitle: 'Kenni Paes / Ulundhu Kanji (Nourishing Urad Dal & Coconut Milk Porridge)',
      pairedWithTitle: 'Sourashtra Pudina Losto (Zero-Oil Fiery Mint-Tamarind Thogayal)',
      pairingTraditionNote: 'Traditional cooling morning kanji—creamy coconut-urad porridge contrasted with a fiery dab of Pudina Losto.',
      primaryKeys: ['Kenni Paes', 'Coconut Milk Kanji', 'ULUNDHU KANJI'],
      secondaryKeys: ['pudina-kothmir-losto', 'Pudina Pickle', 'Losto']
    },
    {
      comboId: 'bf-mhuri-pongal-bela-chutney',
      mainDishTitle: 'Mhuri Pongal (Sourashtra Mustard-Coconut Seasoned Rice)',
      pairedWithTitle: 'Bela Chutney (Roasted Chana Dal Chutney) & Curd',
      pairingTraditionNote: 'Unique Madurai Sourashtra tiffin rice flavored with freshly ground raw mustard and green chilli paste.',
      primaryKeys: ['mhuri pongal', 'Muri pongal', 'limbu-thoop-mhuri-pongal'],
      secondaryKeys: ['Bela chutney', 'Paruppu Thuvaiyal']
    },
    {
      comboId: 'bf-limbu-thoop-lovebirds',
      mainDishTitle: 'Limbu Pongal (Lemon Rice) & Thoop Pongal (Ghee-Pepper "Love Birds" Rice)',
      pairedWithTitle: 'Vangi Chutni & Chenna Bhurko (Pottukadalai Podi)',
      pairingTraditionNote: 'In Madurai Sourashtra homes, tangy Limbu Pongal and mild ghee-pepper Thoop Pongal are served side-by-side as "Love Birds Rice".',
      primaryKeys: ['limbu-thoop-mhuri-pongal', 'Thoov Pongal'],
      secondaryKeys: ['Vangi chutni', 'vangi-budith']
    },
    {
      comboId: 'bf-phalar-pongal-sambar',
      mainDishTitle: 'Hot Steamed Phalar (Mini Idlis) & Medhu Vadai',
      pairedWithTitle: 'Sourashtra Tiffin Sambar & Idli Chenna Bhurko with Gingelly Oil',
      pairingTraditionNote: 'Classic Madurai tiffin—fluffy idlis dunked in aromatic Sourashtra Sambar with sesame oil and Bhurko.',
      primaryKeys: ['__PHALAR_DIIDO__'],
      secondaryKeys: ['Pongal Sambhar', 'sengu-vangi-batata-sambar']
    }
  ];

  // 2. AUTHENTIC LUNCH (FULL MEAL) COMBINATIONS
  const lunchBlueprints = [
    {
      comboId: 'ln-losan-kolkar-joman-pilchar',
      mainDishTitle: 'Steamed Rice (Saadu) + Losan Kolkar (Whole Garlic & Sesame Oil Tamarind Gravy)',
      pairedWithTitle: 'Joman Pilchar (Wedding-Style Tomato Rasam) + Kachana Bela Kutkiri (Chana Dal Masiyal)',
      pairingTraditionNote: 'Rich sesame-oil garlic Kolkar balanced with soothing chana dal kutkiri and pepper-cumin Joman Pilchar.',
      primaryKeys: ['losan-kolkar', 'Losan Kolgar'],
      secondaryKeys: ['joman-pilchar', 'Kachana Bela Kutkiri']
    },
    {
      comboId: 'ln-sambar-thakkali-charu-polte-bhajji',
      mainDishTitle: 'Steamed Rice + Sengu-Vangi-Batata Sambar (Drumstick, Brinjal & Potato Sambar)',
      pairedWithTitle: 'Thakkali Charu (Sourashtra Tomato Broth) + Polte Bhajji (Mashed Greens / Keerai Kadayal)',
      pairingTraditionNote: 'Everyday Madurai Sourashtra family lunch thali with freshly ground Sambar Bhurko and iron-rich mashed greens.',
      primaryKeys: ['sengu-vangi-batata-sambar', 'Sambhar'],
      secondaryKeys: ['polte-bhajji', 'Thakkali charu', 'Ambad Bhajji']
    },
    {
      comboId: 'ln-ambat-bhaath-losto-curd',
      mainDishTitle: 'Madurai Sourashtra Ambat Bhaath (Roast Methi & Sesame Tamarind Rice) + Dhi Bhaath (Curd Rice)',
      pairedWithTitle: 'Pudina / Kothmir Losto + Nellika Rubbin (Zero-Oil Gooseberry Pickle) & Potato Fry',
      pairingTraditionNote: 'Festival & travel favorite—tangy Ambat Bhaath followed by cool curd rice and fiery green Losto.',
      primaryKeys: ['ambat-bhaath', 'Ambat Bhath', 'Ambad Bhaath'],
      secondaryKeys: ['nellika-rubbin', 'Lubbin', 'pudina-kothmir-losto']
    },
    {
      comboId: 'ln-koduk-ounty-polte-bhajji',
      mainDishTitle: 'Steamed Rice + Ancient Sourashtra Koduk Ounty (Fermented Rice-Starch Probiotic Gravy)',
      pairedWithTitle: 'Polte Bhajji (Arai Keerai Masiyal) + Crispy Roasted Beans / Curd',
      pairingTraditionNote: 'Centuries-old Madurai Sourashtra heritage lunch—tangy fermented kanji gravy is traditionally paired with mashed greens.',
      primaryKeys: ['koduk-ounty', 'Koduk Ounty'],
      secondaryKeys: ['polte-bhajji', 'Ambad Bhajji']
    },
    {
      comboId: 'ln-bhajji-charu-vangi-pitla',
      mainDishTitle: 'Steamed Rice + Bhajji Charu (Keerai Chaaru — Greens, Coconut, Poppy Seed & Milk Broth)',
      pairedWithTitle: 'Sourashtra Vangi / Pavakkai Pitla (Roasted Coconut-Chana Dal Curry) & Appalam',
      pairingTraditionNote: 'Mild, nourishing greens-and-milk broth paired with a hearty, spiced brinjal/bitter gourd Pitla.',
      primaryKeys: ['bhajji-keerai-charu', 'Bhajji Char', 'Keera charu'],
      secondaryKeys: ['pavakkai-vangi-pitla', 'Jinnavara Ambat']
    },
    {
      comboId: 'ln-kachchana-ambat-kachana-pani',
      mainDishTitle: 'Steamed Rice + Kachchana Ambat (Sourashtra Black Chickpea Gravy)',
      pairedWithTitle: 'Kachana Pani (Spiced Black Chickpea Broth Rasam) + Kachamba Bhudith (Raw Mango Pachadi)',
      pairingTraditionNote: 'Protein-rich Madurai meal where the boiled black chickpea stock is turned into aromatic Kachana Pani rasam.',
      primaryKeys: ['kachchana-ambat', 'Kachana Ambat'],
      secondaryKeys: ['kachamba bhudith', 'Limbu Pilchar', 'Lemon Rasam']
    },
    {
      comboId: 'ln-mithi-kolkar-paruppu-rasam',
      mainDishTitle: 'Steamed Rice + Mithi Kolkar (Vendhaya Kuzhambu) or Udith Nalar Ounty (Black Urad Coconut Curry)',
      pairedWithTitle: 'Paruppu Rasam + Jinnavara Ambat (Cluster Beans Gravy)',
      pairingTraditionNote: 'Cooling fenugreek & black urad dal gravies that strengthen joints and digestion.',
      primaryKeys: ['Mithi Kolkar', 'Udith Nalar Ounty'],
      secondaryKeys: ['Jinnavara Ambat', 'Parupu Rasam']
    },
    hasNonVeg
      ? {
          comboId: 'ln-sunday-chaino-kolkar-polte-chaino',
          mainDishTitle: 'Sunday Feast: Steamed Rice + Chaino Kolkar (Madurai Sourashtra Mutton Ounty)',
          pairedWithTitle: 'Polte Chaino (Mutton Uppu Kari with Crunchy Coconut Bits) + Joman Pilchar',
          pairingTraditionNote: 'The ultimate Madurai Sourashtra Sunday feast—bone-in Mutton Ounty paired with oil-free coconut-studded Polte Chaino and rasam.',
          primaryKeys: ['chaino-kolkar', 'Chaiena Ounty', 'Mutton ounty'],
          secondaryKeys: ['polte-chaino', 'Poulda Chaieno', 'CHAINA POLDAYO']
        }
      : {
          comboId: 'ln-sunday-kajali-ambat-gullu-pongal',
          mainDishTitle: 'Sunday Feast: Steamed Rice + Kajali Ambat (Madurai Special Veg Eral / Saiva Liver Gravy)',
          pairedWithTitle: 'Gullu Pongal (Sweet Jaggery Pongal) + Joman Pilchar (Wedding Rasam)',
          pairingTraditionNote: 'Famous Madurai Sourashtra vegetarian feast curry (Kajali Ambat) served with sweet Gullu Pongal and wedding-style Pilchar.',
          primaryKeys: ['Kajali Ambat', 'Veg Kajali Ambat'],
          secondaryKeys: ['serki-bhaath-gullu-pongal', 'Gullu pongal']
        },
    hasNonVeg
      ? {
          comboId: 'ln-koli-ounty-pilchar-chicken',
          mainDishTitle: 'Steamed Rice + Saurashtra Koli Ounty (Pepper & Poppy Seed Chicken Curry)',
          pairedWithTitle: 'Pilchar Bhurko Koli Varuval (Rasam Powder Dry Chicken Roast) + Garlic Rasam',
          pairingTraditionNote: "Aromatic white poppy-pepper chicken gravy paired with Sugi Cooks' grandmother-style Pilchar Bhurko chicken roast.",
          primaryKeys: ['jaleela-koli-ounty', 'Kudi Avunti', 'Chicken Ounty'],
          secondaryKeys: ['sugi-pilchar-bhurko-chicken-varuval', 'Garlic Pepper Rasam']
        }
      : {
          comboId: 'ln-beans-batata-ambat-more-kulambu',
          mainDishTitle: 'Steamed Rice + Beans & Batata Ambat (Double Beans & Potato Gravy)',
          pairedWithTitle: 'Dheim Ounty / More Kulambu (Spiced Buttermilk Curry) & Potato Roast',
          pairingTraditionNote: 'Hearty Madurai feast double-beans curry paired with soothing spiced buttermilk Ounty.',
          primaryKeys: ['beans-batata-ambat', 'Beans ambat'],
          secondaryKeys: ['Dheim Ounty', 'More Kulambu']
        },
    hasNonVeg
      ? {
          comboId: 'ln-meen-kodhi-anda-ounty',
          mainDishTitle: 'Steamed Rice + Madurai Sourashtra Meen / Koddi Ounty (Tamarind & Whole Garlic Fish Curry)',
          pairedWithTitle: 'Sourashtra Anda Ounty (Boiled Egg Masala) + Lemon Rasam (Limbu Pilchar)',
          pairingTraditionNote: 'No-coconut tangy Madurai fish/dry-fish curry simmered in gingelly oil with whole garlic pods.',
          primaryKeys: ['meen-karuvadu-kodhi', 'Koddi Ounty'],
          secondaryKeys: ['anda-ounty', 'Anda Ounty']
        }
      : {
          comboId: 'ln-bela-ounty-cauliflower',
          mainDishTitle: 'Steamed Rice + Sourashtra Bela Ounty (Wholesome Lentil-Vegetable Gravy)',
          pairedWithTitle: 'Cauliflower Kulambu + Sourashtra Instant Pepper Rasam',
          pairingTraditionNote: 'Comforting forgotten heritage lentil gravy paired with hot pepper rasam.',
          primaryKeys: ['Bela Ounty', 'Paruppu Kulambu'],
          secondaryKeys: ['Cauliflower Kulambu', 'Instant pepper rasam']
        }
  ];

  // 3. AUTHENTIC DINNER / EVENING TIFFIN COMBINATIONS
  const dinnerBlueprints = [
    {
      comboId: 'dn-pangarapaan-nalar-bhairi-chenna',
      mainDishTitle: 'Pangarapaan Bhairi (Herbal Greens Fritters) & Nalar Bhairi (Crispy Coconut Rice Fritters)',
      pairedWithTitle: 'Chenna Bhurko (Spicy Roasted Gram Podi) & Thakkali Chutni',
      pairingTraditionNote: 'Iconic Madurai Sourashtra evening street-food tiffin—puffed crispy rice-and-greens Bhairi dipped in nutty Chenna Bhurko.',
      primaryKeys: ['pangarapaan-nalar-bhairi', 'Pangarappan Bhairi'],
      secondaryKeys: ['Thakkali Chutney', 'Kandha Chutney']
    },
    {
      comboId: 'dn-chappathi-nalar-doodh-ounty',
      mainDishTitle: 'Soft Phulka / Chappathi & Idiyappam (String Hoppers)',
      pairedWithTitle: 'Nalar Doodh Ounty (Thengai Paal Kulambu — Creamy Coconut Milk Gravy)',
      pairingTraditionNote: 'Mild, aromatic coconut-milk curry that pairs effortlessly with evening chappathi, appam, or idiyappam.',
      primaryKeys: ['__PHULKA_IDIYAPPAM__'],
      secondaryKeys: ['Nalar Doodh Ounty', 'Thengai Paal Kulambu']
    },
    {
      comboId: 'dn-sevi-doodhum-panim-dhowlo',
      mainDishTitle: 'Sevi / Doodhum Dhowlo (Creamy Milk Rice Dumplings)',
      pairedWithTitle: 'Savory Panim Dhowlo (Steamed Salted Dumplings) & Kothmir Chutni',
      pairingTraditionNote: 'Traditional Sourashtra steamed rice-flour dumpling duo—one simmered in cardamom milk and one tempered with mustard and sesame.',
      primaryKeys: ['Doodhum Dhowlo', 'Paal Kolukattai'],
      secondaryKeys: ['Panim Dhowlo', 'Neer Kolukattai']
    },
    {
      comboId: 'dn-thakkali-pongal-raita',
      mainDishTitle: 'Madurai Sourashtra Thakkali Pongal (Cinnamon-Clove Spiced Tomato Pulao)',
      pairedWithTitle: 'Bela Chutney (Roasted Chana Dal Chutney) & Onion-Curd Pachadi',
      pairingTraditionNote: 'One-pot pressure-cooker Madurai tomato pongal fragrant with cinnamon, mint, and coconut.',
      primaryKeys: ['Thakkali Pongal', 'Sourashtra Tomato Rice'],
      secondaryKeys: ['Bela chutney', 'Puthina Chutni']
    },
    {
      comboId: 'dn-kal-dosa-bela-ounty',
      mainDishTitle: 'Soft Sponge Kal Diido (Dosa) & Steamed Phalar (Idli)',
      pairedWithTitle: 'Sourashtra Bela Ounty (Paruppu Kulambu) & Alla Chutni (Ginger Chutney)',
      pairingTraditionNote: 'Light, digestible evening tiffin pairing fluffy kal dosas with lentil-based Bela Ounty.',
      primaryKeys: ['__PHALAR_DIIDO__'],
      secondaryKeys: ['Bela Ounty', 'Paruppu Kulambu']
    },
    {
      comboId: 'dn-serki-bhaath-thengai-dhowlo',
      mainDishTitle: 'Serki Bhaath (Traditional Cottonseed-Milk & Palm Jaggery Rice)',
      pairedWithTitle: 'Thengai Pooranam Dhowlo (Sweet Coconut-Jaggery Kozhukattai)',
      pairingTraditionNote: 'Nourishing evening heritage meal featuring Paruthi Paal (cottonseed milk) & palm jaggery.',
      primaryKeys: ['serki-bhaath-gullu-pongal', 'Serki Bath'],
      secondaryKeys: ['Sourashtra Dhowlo', 'Kozhukattai']
    },
    {
      comboId: 'dn-chappathi-meal-maker-ambat',
      mainDishTitle: 'Hot Layered Chappathi / Coin Parotta',
      pairedWithTitle: 'Sourashtra Meal Maker Ambat (Spiced Soya Chunks Gravy) & Onion Salad',
      pairingTraditionNote: 'High-protein Madurai Sourashtra dinner curry made with Ounty Bhurko and soya chunks.',
      primaryKeys: ['__PHULKA_IDIYAPPAM__'],
      secondaryKeys: ['Meal Maker Ambat', 'beans-batata-ambat']
    },
    {
      comboId: 'dn-idli-dheim-ounty-podi',
      mainDishTitle: 'Hot Mini Phalar (Idlis) & Crispy Onion Uttapam',
      pairedWithTitle: 'Dheim Ounty (Seasoned Curd & Besan Gravy) & Sesame Oil Idli Bhurko',
      pairingTraditionNote: 'Comforting, light evening curd-based Ounty that settles the stomach at night.',
      primaryKeys: ['__PHALAR_DIIDO__'],
      secondaryKeys: ['Dheim Ounty', 'More Kulambu']
    }
  ];

  const mapBlueprint = (bp: typeof breakfastBlueprints[0], idx: number): MealCombo => {
    const primary = findRecipeByKeywords(catalog, bp.primaryKeys, idx);
    const secondary = findRecipeByKeywords(catalog, bp.secondaryKeys, idx + 7);
    return {
      comboId: bp.comboId,
      mainDishTitle: bp.mainDishTitle,
      pairedWithTitle: bp.pairedWithTitle,
      pairingTraditionNote: bp.pairingTraditionNote,
      primaryRecipe: primary,
      secondaryRecipe: secondary
    };
  };

  const breakfastCombos: MealCombo[] = breakfastBlueprints.map(mapBlueprint);
  const lunchCombos: MealCombo[] = lunchBlueprints.map(mapBlueprint);
  const dinnerCombos: MealCombo[] = dinnerBlueprints.map(mapBlueprint);

  // Dynamically expand Breakfast, Lunch, and Dinner Paired Combinations from all 323 catalog recipes
  const chutneysAndSides = catalog.filter((r) => {
    const t = `${r.title} ${r.category || ''}`.toLowerCase();
    return (
      t.includes('chutni') ||
      t.includes('chutney') ||
      t.includes('budith') ||
      t.includes('bhudith') ||
      t.includes('losto') ||
      t.includes('rubbin') ||
      t.includes('lubbin') ||
      t.includes('thuvaiyal') ||
      t.includes('polte') ||
      t.includes('kutkiri') ||
      t.includes('podimas') ||
      t.includes('fry') ||
      t.includes('varuval')
    );
  });

  const pilcharsAndBroths = catalog.filter((r) => {
    const t = `${r.title} ${r.category || ''}`.toLowerCase();
    return (
      t.includes('pilchar') ||
      t.includes('rasam') ||
      t.includes('charu') ||
      t.includes('chaaru') ||
      t.includes('pani') ||
      t.includes('soup')
    );
  });

  const ountiesAndGravies = catalog.filter((r) => {
    const t = `${r.title} ${r.category || ''}`.toLowerCase();
    return (
      t.includes('ounty') ||
      t.includes('avunty') ||
      t.includes('avunti') ||
      t.includes('ambat') ||
      t.includes('ambad') ||
      t.includes('kolkar') ||
      t.includes('kolgar') ||
      t.includes('pitla') ||
      t.includes('sambar') ||
      t.includes('sambhar') ||
      t.includes('kulambu') ||
      t.includes('kurma') ||
      t.includes('kuzhambu')
    );
  });

  const seenComboIds = new Set<string>([
    ...breakfastCombos.map((c) => c.comboId),
    ...lunchCombos.map((c) => c.comboId),
    ...dinnerCombos.map((c) => c.comboId)
  ]);

  catalog.forEach((r, idx) => {
    const titleLow = r.title.toLowerCase();
    const catLow = (r.category || '').toLowerCase();
    const side1 = chutneysAndSides[idx % Math.max(1, chutneysAndSides.length)] || catalog[(idx + 5) % catalog.length];
    const rasam1 = pilcharsAndBroths[idx % Math.max(1, pilcharsAndBroths.length)] || catalog[(idx + 11) % catalog.length];
    const gravy1 = ountiesAndGravies[idx % Math.max(1, ountiesAndGravies.length)] || catalog[(idx + 17) % catalog.length];

    // 1. Dynamic Breakfast Combinations (Phalar / Diido / Pongal / Appam / Kanji + Paired Chutney or Ounty)
    if (
      catLow.includes('bhairi') ||
      catLow.includes('appam') ||
      titleLow.includes('pongal') ||
      titleLow.includes('upma') ||
      titleLow.includes('kichadi') ||
      titleLow.includes('kanji') ||
      titleLow.includes('paes') ||
      titleLow.includes('dosai') ||
      titleLow.includes('dosa') ||
      titleLow.includes('idli') ||
      titleLow.includes('phalar') ||
      titleLow.includes('poori') ||
      titleLow.includes('paniyaram') ||
      titleLow.includes('appam')
    ) {
      const cid = `bf-dyn-${r.id || idx}`;
      if (!seenComboIds.has(cid)) {
        seenComboIds.add(cid);
        breakfastCombos.push({
          comboId: cid,
          mainDishTitle: r.title,
          pairedWithTitle: `${side1.title} & Hot Filter Coffee`,
          pairingTraditionNote: 'Authentic Madurai Sourashtra morning tiffin paired with freshly ground chutney/budith.',
          primaryRecipe: r,
          secondaryRecipe: side1
        });
      }
    }

    // Also pair Morning Chutneys / Tiffin Ounties with Soft Phalar & Crispy Diido
    if (
      titleLow.includes('chutni') ||
      titleLow.includes('chutney') ||
      titleLow.includes('budith') ||
      titleLow.includes('thakkali ounty') ||
      titleLow.includes('tiffin sambar') ||
      titleLow.includes('kurma') ||
      titleLow.includes('vadacurry')
    ) {
      const cid = `bf-phalar-pair-${r.id || idx}`;
      if (!seenComboIds.has(cid)) {
        seenComboIds.add(cid);
        breakfastCombos.push({
          comboId: cid,
          mainDishTitle: idx % 2 === 0
            ? 'Soft Phalar (Steamed Madurai Idli) & Crispy Diido (Dosa)'
            : 'Hot Kal Diido (Sponge Dosa) & Onion Uttapam',
          pairedWithTitle: r.title,
          pairingTraditionNote: 'Traditional Madurai Sourashtra Phalar & Diido served with a flavorful homemade accompaniment.',
          primaryRecipe: PHALAR_DIIDO_BASE_RECIPE,
          secondaryRecipe: r
        });
      }
    }

    // 2. Dynamic Full Lunch Combinations (Steamed Rice + Ounty/Ambat/Kolkar/Curry + Pilchar/Polte)
    if (
      catLow.includes('ounty') ||
      catLow.includes('ambat') ||
      catLow.includes('non-veg') ||
      titleLow.includes('ounty') ||
      titleLow.includes('ambat') ||
      titleLow.includes('kolkar') ||
      titleLow.includes('sambar') ||
      titleLow.includes('kulambu') ||
      titleLow.includes('pitla') ||
      titleLow.includes('bhaath') ||
      titleLow.includes('bhath') ||
      titleLow.includes('biryani') ||
      titleLow.includes('pulav')
    ) {
      const cid = `ln-dyn-${r.id || idx}`;
      if (!seenComboIds.has(cid)) {
        seenComboIds.add(cid);
        const isRiceDish =
          titleLow.includes('bhaath') ||
          titleLow.includes('bhath') ||
          titleLow.includes('biryani') ||
          titleLow.includes('pulav') ||
          titleLow.includes('rice');
        lunchCombos.push({
          comboId: cid,
          mainDishTitle: isRiceDish ? `${r.title} + Dhi Bhaath (Curd Rice)` : `Steamed Rice (Saadu) + ${r.title}`,
          pairedWithTitle: isRiceDish
            ? `${side1.title} & Crispy Appalam`
            : `${rasam1.title} + ${side1.title}`,
          pairingTraditionNote: isRiceDish
            ? 'Traditional Madurai Sourashtra variety rice meal balanced with a tangy/spicy side dish and cool curd rice.'
            : 'Complete Madurai Sourashtra afternoon meal pairing a signature gravy over hot rice with soothing rasam and stir-fry/budith.',
          primaryRecipe: r,
          secondaryRecipe: isRiceDish ? side1 : rasam1
        });
      }
    }

    // 3. Dynamic Dinner / Evening Tiffin Combinations
    if (
      titleLow.includes('bhairi') ||
      titleLow.includes('dhowlo') ||
      titleLow.includes('kolukattai') ||
      titleLow.includes('kozhukattai') ||
      titleLow.includes('chappathi') ||
      titleLow.includes('chapati') ||
      titleLow.includes('parotta') ||
      titleLow.includes('kurma') ||
      titleLow.includes('idiyappam') ||
      titleLow.includes('sevai') ||
      titleLow.includes('adai') ||
      titleLow.includes('oothappam') ||
      titleLow.includes('uttapam') ||
      titleLow.includes('pongal')
    ) {
      const cid = `dn-dyn-${r.id || idx}`;
      if (!seenComboIds.has(cid)) {
        seenComboIds.add(cid);
        const isGravy = titleLow.includes('kurma') || titleLow.includes('ounty') || titleLow.includes('ambat') || titleLow.includes('masala');
        dinnerCombos.push({
          comboId: cid,
          mainDishTitle: isGravy ? 'Soft Phulka / Chappathi & Steamed Idiyappam' : r.title,
          pairedWithTitle: isGravy ? r.title : `${gravy1.title} / ${side1.title}`,
          pairingTraditionNote: 'Wholesome Madurai Sourashtra evening tiffin combination.',
          primaryRecipe: isGravy ? PHULKA_IDIYAPPAM_BASE_RECIPE : r,
          secondaryRecipe: isGravy ? r : side1
        });
      }
    }
  });

  return {
    breakfastCombos,
    lunchCombos,
    dinnerCombos
  };
}

// Deterministic seeded Fisher-Yates shuffle so every click on Regenerate / Resample
// selects a completely fresh set of combinations from across the full pool
function seededShufflePool<T>(items: T[], seed: number): T[] {
  const arr = [...items];
  if (seed <= 0) return arr;
  let s = (seed * 2654435761) >>> 0;
  for (let i = arr.length - 1; i > 0; i--) {
    s = (s * 1664525 + 1013904223) >>> 0;
    const j = s % (i + 1);
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

function getUpcoming7Days(): { dayName: string; dateLabel: string; isoDate: string }[] {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const result = [];
  const base = new Date();

  for (let i = 0; i < 7; i++) {
    const d = new Date(base);
    d.setDate(base.getDate() + i);
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    result.push({
      dayName: i === 0 ? `Today (${days[d.getDay()]})` : days[d.getDay()],
      dateLabel: `${months[d.getMonth()]} ${d.getDate()}, ${yyyy}`,
      isoDate: `${yyyy}${mm}${dd}`
    });
  }
  return result;
}

export default function RecipesPage() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [bhurkoGuide, setBhurkoGuide] = useState<BhurkoGuideItem[]>([]);
  const [currentFridgeInventory, setCurrentFridgeInventory] = useState<string[]>([]);
  const [selectedFridgeItems, setSelectedFridgeItems] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(60);
  const [isUsingSampleBasket, setIsUsingSampleBasket] = useState(false);
  const [showBhurkoModal, setShowBhurkoModal] = useState(false);
  const [showWeeklyPlanner, setShowWeeklyPlanner] = useState(true);
  const [weeklyPlan, setWeeklyPlan] = useState<DayMealPlan[]>([]);
  const [activePlannerModal, setActivePlannerModal] = useState<ActivePlannerModalState | null>(null);
  const [isWeekPinned, setIsWeekPinned] = useState(false);
  const [plannerSeed, setPlannerSeed] = useState(0);
  const [shuffleSeed, setShuffleSeed] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [language, setLanguage] = useState('English');

  useEffect(() => {
    const stored = localStorage.getItem('appLanguage') || 'English';
    setLanguage(stored);

    // Restore pinned weekly combo plan if saved (v3 schema with distinct Main & Paired recipes)
    const savedPlan = localStorage.getItem('pinnedSourashtraWeeklyCombosV3');
    if (savedPlan) {
      try {
        const parsed = JSON.parse(savedPlan);
        if (Array.isArray(parsed) && parsed.length === 7 && parsed[0]?.breakfast?.mainDishTitle) {
          setWeeklyPlan(parsed);
          setIsWeekPinned(true);
        }
      } catch {
        // Ignore corrupt localStorage
      }
    }

    const handleLang = (e: Event) => {
      const newLang = (e as CustomEvent).detail;
      setLanguage(newLang);
    };
    const handleProfile = () => {
      fetchRecipes(selectedFridgeItems, shuffleSeed);
    };
    window.addEventListener('languageChange', handleLang);
    window.addEventListener('profileChange', handleProfile);
    return () => {
      window.removeEventListener('languageChange', handleLang);
      window.removeEventListener('profileChange', handleProfile);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchRecipes(selectedFridgeItems, shuffleSeed);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  const generateOrUpdateWeeklyPlan = (
    catalog: Recipe[],
    seedVal: number,
    existingPlan: DayMealPlan[] = []
  ) => {
    if (!catalog || catalog.length === 0) return;
    const { breakfastCombos, lunchCombos, dinnerCombos } = buildAuthenticSourashtraCombos(catalog);
    if (breakfastCombos.length === 0) return;

    const upcomingDays = getUpcoming7Days();
    const usedComboIds = new Set<string>();
    const prevUnpinnedIds = new Set<string>();

    for (const day of existingPlan) {
      if (day?.pinnedSlots?.breakfast && day.breakfast?.comboId) {
        usedComboIds.add(day.breakfast.comboId);
      } else if (day?.breakfast?.comboId) {
        prevUnpinnedIds.add(day.breakfast.comboId);
      }

      if (day?.pinnedSlots?.lunch && day.lunch?.comboId) {
        usedComboIds.add(day.lunch.comboId);
      } else if (day?.lunch?.comboId) {
        prevUnpinnedIds.add(day.lunch.comboId);
      }

      if (day?.pinnedSlots?.dinner && day.dinner?.comboId) {
        usedComboIds.add(day.dinner.comboId);
      } else if (day?.dinner?.comboId) {
        prevUnpinnedIds.add(day.dinner.comboId);
      }
    }

    // Shuffle each pool with the current seed so every click picks a completely fresh set
    const shuffledBreakfast = seededShufflePool(breakfastCombos, seedVal * 13 + 1);
    const shuffledLunch = seededShufflePool(lunchCombos, seedVal * 29 + 7);
    const shuffledDinner = seededShufflePool(dinnerCombos, seedVal * 47 + 19);

    const pickUniqueCombo = (pool: MealCombo[], fallbackIdx: number): MealCombo => {
      // First pass: pick a combo not used this week AND not in the previous unpinned week
      if (seedVal > 0 && pool.length > 7) {
        for (const candidate of pool) {
          if (!usedComboIds.has(candidate.comboId) && !prevUnpinnedIds.has(candidate.comboId)) {
            usedComboIds.add(candidate.comboId);
            return candidate;
          }
        }
      }
      // Second pass: pick any combo not yet used this week
      for (const candidate of pool) {
        if (!usedComboIds.has(candidate.comboId)) {
          usedComboIds.add(candidate.comboId);
          return candidate;
        }
      }
      return pool[fallbackIdx % pool.length];
    };

    const newPlan: DayMealPlan[] = upcomingDays.map((dayMeta, idx) => {
      const prevDay = existingPlan[idx];

      const bf =
        prevDay?.pinnedSlots?.breakfast && prevDay.breakfast?.mainDishTitle
          ? prevDay.breakfast
          : pickUniqueCombo(shuffledBreakfast, idx);

      const ln =
        prevDay?.pinnedSlots?.lunch && prevDay.lunch?.mainDishTitle
          ? prevDay.lunch
          : pickUniqueCombo(shuffledLunch, idx);

      const dn =
        prevDay?.pinnedSlots?.dinner && prevDay.dinner?.mainDishTitle
          ? prevDay.dinner
          : pickUniqueCombo(shuffledDinner, idx);

      return {
        dayIndex: idx,
        dayName: dayMeta.dayName,
        dateLabel: dayMeta.dateLabel,
        isoDate: dayMeta.isoDate,
        breakfast: bf,
        lunch: ln,
        dinner: dn,
        pinnedSlots: {
          breakfast: Boolean(prevDay?.pinnedSlots?.breakfast),
          lunch: Boolean(prevDay?.pinnedSlots?.lunch),
          dinner: Boolean(prevDay?.pinnedSlots?.dinner)
        }
      };
    });

    setWeeklyPlan(newPlan);
    if (isWeekPinned) {
      localStorage.setItem('pinnedSourashtraWeeklyCombosV3', JSON.stringify(newPlan));
    }
  };

  const fetchRecipes = async (
    customItems: string[] = selectedFridgeItems,
    seed = shuffleSeed,
    forceResamplePlanner = false
  ) => {
    if (recipes.length === 0) {
      setLoading(true);
    }
    setError(null);
    try {
      const storedProfileId = localStorage.getItem('activeProfileId') || '';
      const storedUserId = localStorage.getItem('appUserId') || '1';
      const fridgeParam = customItems.length > 0 ? `&fridgeItems=${encodeURIComponent(customItems.join(','))}` : '';
      const seedParam = seed > 0 ? `&seed=${seed}` : '';
      const res = await fetch(
        `/api/recipes?lang=${encodeURIComponent(language)}&profileId=${encodeURIComponent(storedProfileId)}&userId=${encodeURIComponent(storedUserId)}${fridgeParam}${seedParam}`
      );
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Failed to fetch');

      const loadedRecipes: Recipe[] = Array.isArray(data.recipes) ? data.recipes : [];
      setRecipes(loadedRecipes);

      if (Array.isArray(data.bhurkoGuide)) {
        setBhurkoGuide(data.bhurkoGuide);
      }
      if (Array.isArray(data.fridgeItemsUsed)) {
        setCurrentFridgeInventory(data.fridgeItemsUsed);
      }
      const usingSample = Boolean(data.isUsingSampleBasket) && customItems.length === 0;
      setIsUsingSampleBasket(usingSample);

      const savedPlan = localStorage.getItem('pinnedSourashtraWeeklyCombosV3');
      if (loadedRecipes.length > 0 && (forceResamplePlanner || !savedPlan)) {
        const activeSeed = forceResamplePlanner ? seed : plannerSeed;
        generateOrUpdateWeeklyPlan(loadedRecipes, activeSeed, weeklyPlan);
      }
    } catch (e: unknown) {
      const err = e as Error;
      setError(err.message || 'Failed to craft Sourashtra recipes');
    } finally {
      setLoading(false);
    }
  };

  const toggleFridgeItem = (item: string) => {
    const updated = selectedFridgeItems.includes(item)
      ? selectedFridgeItems.filter((i) => i !== item)
      : [...selectedFridgeItems, item];
    setSelectedFridgeItems(updated);
    fetchRecipes(updated, shuffleSeed, false);
  };

  const handleRegenerate = () => {
    const nextSeed = Math.max(shuffleSeed, plannerSeed) + 1;
    setShuffleSeed(nextSeed);
    setPlannerSeed(nextSeed);
    if (recipes.length > 0) {
      generateOrUpdateWeeklyPlan(recipes, nextSeed, weeklyPlan);
    }
    fetchRecipes(selectedFridgeItems, nextSeed, true);
  };

  // Weekly Planner Controls
  const handleResampleWeek = () => {
    const nextSeed = Math.max(plannerSeed, shuffleSeed) + 1;
    setPlannerSeed(nextSeed);
    setShuffleSeed(nextSeed);
    generateOrUpdateWeeklyPlan(recipes, nextSeed, weeklyPlan);
  };

  const toggleSlotPin = (dayIdx: number, slot: 'breakfast' | 'lunch' | 'dinner') => {
    const updated = weeklyPlan.map((d, i) => {
      if (i !== dayIdx) return d;
      return {
        ...d,
        pinnedSlots: {
          ...d.pinnedSlots,
          [slot]: !d.pinnedSlots[slot]
        }
      };
    });
    setWeeklyPlan(updated);
    if (isWeekPinned) {
      localStorage.setItem('pinnedSourashtraWeeklyCombosV3', JSON.stringify(updated));
    }
  };

  const swapSingleSlot = (dayIdx: number, slot: 'breakfast' | 'lunch' | 'dinner') => {
    if (recipes.length === 0) return;
    const { breakfastCombos, lunchCombos, dinnerCombos } = buildAuthenticSourashtraCombos(recipes);
    const pool = slot === 'breakfast' ? breakfastCombos : slot === 'lunch' ? lunchCombos : dinnerCombos;

    const currentlyUsedIds = new Set(weeklyPlan.map((d) => d[slot]?.comboId));
    const available = pool.filter((c) => !currentlyUsedIds.has(c.comboId));
    const nextCombo =
      available.length > 0
        ? available[Math.floor(Math.random() * available.length)]
        : pool[(dayIdx + plannerSeed + 1) % pool.length];

    const updated = weeklyPlan.map((d, i) => {
      if (i !== dayIdx) return d;
      return {
        ...d,
        [slot]: nextCombo
      };
    });
    setWeeklyPlan(updated);
    if (isWeekPinned) {
      localStorage.setItem('pinnedSourashtraWeeklyCombosV3', JSON.stringify(updated));
    }
  };

  const togglePinEntireWeek = () => {
    if (isWeekPinned) {
      localStorage.removeItem('pinnedSourashtraWeeklyCombosV3');
      setIsWeekPinned(false);
    } else {
      localStorage.setItem('pinnedSourashtraWeeklyCombosV3', JSON.stringify(weeklyPlan));
      setIsWeekPinned(true);
    }
  };

  // Compute Weekly Shopping List based on 7-Day Plan vs Current Fridge Inventory
  const weeklyShoppingAnalysis = useMemo(() => {
    const activeFridge =
      selectedFridgeItems.length > 0
        ? selectedFridgeItems
        : isUsingSampleBasket
        ? []
        : currentFridgeInventory;

    const normalizedAvailable = activeFridge.map((s) => s.toLowerCase());
    const neededMap = new Map<string, Set<string>>();
    const availableUsedSet = new Set<string>();
    const pantryNeededSet = new Set<string>();

    for (const day of weeklyPlan) {
      const dayShort = day.dayName.replace('Today (', '').replace(')', '').slice(0, 3);
      const combos = [day.breakfast, day.lunch, day.dinner].filter(Boolean);

      for (const combo of combos) {
        const recipesInCombo = [combo.primaryRecipe, combo.secondaryRecipe].filter(Boolean) as Recipe[];

        for (const meal of recipesInCombo) {
          const allFreshForMeal = [
            ...(meal.fridgeIngredientsUsed || []),
            ...(meal.missingIngredients || [])
          ];

          for (const rawIng of allFreshForMeal) {
            const cleanName = safeString(rawIng).split(' - ')[0].replace('(Fresh from Fridge)', '').trim();
            if (!cleanName) continue;
            const cleanLow = cleanName.toLowerCase();

            const inFridge = normalizedAvailable.some(
              (avail) =>
                avail.includes(cleanLow) ||
                cleanLow.includes(avail.split(' (')[0].toLowerCase())
            );

            if (inFridge) {
              availableUsedSet.add(cleanName);
            } else {
              if (!neededMap.has(cleanName)) {
                neededMap.set(cleanName, new Set());
              }
              neededMap.get(cleanName)!.add(dayShort);
            }
          }

          for (const pAdd of meal.pantryAdditives || []) {
            const s = safeString(pAdd);
            if (!s.startsWith('Channel Ingredient Note:')) {
              pantryNeededSet.add(s.split(' (')[0].trim());
            }
          }
        }
      }
    }

    const toPurchase = Array.from(neededMap.entries()).map(([item, daysSet]) => ({
      item,
      days: Array.from(daysSet).join(', ')
    }));

    return {
      toPurchase,
      alreadyInFridge: Array.from(availableUsedSet),
      pantryChecklist: Array.from(pantryNeededSet).slice(0, 14)
    };
  }, [weeklyPlan, selectedFridgeItems, isUsingSampleBasket, currentFridgeInventory]);

  const buildGoogleCalendarDayUrl = (day: DayMealPlan) => {
    const title = `🍲 Madurai Sourashtra Menu (${day.dayName})`;
    const details = [
      `🌅 BREAKFAST: ${day.breakfast?.mainDishTitle} + ${day.breakfast?.pairedWithTitle}`,
      day.breakfast?.primaryRecipe?.youtubeUrl ? `   YouTube: ${day.breakfast.primaryRecipe.youtubeUrl}` : '',
      '',
      `☀️ LUNCH: ${day.lunch?.mainDishTitle} + ${day.lunch?.pairedWithTitle}`,
      day.lunch?.primaryRecipe?.youtubeUrl ? `   YouTube: ${day.lunch.primaryRecipe.youtubeUrl}` : '',
      '',
      `🌙 DINNER: ${day.dinner?.mainDishTitle} + ${day.dinner?.pairedWithTitle}`,
      day.dinner?.primaryRecipe?.youtubeUrl ? `   YouTube: ${day.dinner.primaryRecipe.youtubeUrl}` : '',
      '',
      `🛒 Weekly To-Buy Reminder: ${weeklyShoppingAnalysis.toPurchase.map((p) => p.item).join(', ') || 'All stocked!'}`
    ]
      .filter(Boolean)
      .join('\n');

    const dates = `${day.isoDate}/${day.isoDate}`;
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      title
    )}&dates=${dates}&details=${encodeURIComponent(details)}`;
  };

  const handleDownloadIcsCalendar = () => {
    const lines = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Fridge AI//Madurai Sourashtra 7-Day Meal Planner//EN',
      'CALSCALE:GREGORIAN'
    ];

    for (const day of weeklyPlan) {
      const slots: { label: string; timeStart: string; timeEnd: string; combo: MealCombo }[] = [
        { label: '🌅 Sourashtra Breakfast', timeStart: '080000', timeEnd: '090000', combo: day.breakfast },
        { label: '☀️ Sourashtra Lunch', timeStart: '130000', timeEnd: '140000', combo: day.lunch },
        { label: '🌙 Sourashtra Dinner', timeStart: '193000', timeEnd: '203000', combo: day.dinner }
      ];

      for (const s of slots) {
        if (!s.combo) continue;
        const summary = `${s.label}: ${s.combo.mainDishTitle} + ${s.combo.pairedWithTitle}`;
        const desc = `Main: ${s.combo.mainDishTitle}\\nPaired With: ${s.combo.pairedWithTitle}\\nWhy: ${s.combo.pairingTraditionNote}\\nYouTube: ${s.combo.primaryRecipe?.youtubeUrl || 'N/A'}`;
        lines.push(
          'BEGIN:VEVENT',
          `DTSTART:${day.isoDate}T${s.timeStart}`,
          `DTEND:${day.isoDate}T${s.timeEnd}`,
          `SUMMARY:${summary.replace(/[,;]/g, ' ')}`,
          `DESCRIPTION:${desc}`,
          'END:VEVENT'
        );
      }
    }

    lines.push('END:VCALENDAR');
    const blob = new Blob([lines.join('\r\n')], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Madurai_Sourashtra_7Day_Meal_Plan.ics';
    a.click();
    URL.revokeObjectURL(url);
  };

  const categoryList = useMemo(() => {
    const counts: Record<string, number> = { All: recipes.length };
    for (const r of recipes) {
      const cat = r.category || 'Other';
      counts[cat] = (counts[cat] || 0) + 1;
    }
    return Object.entries(counts);
  }, [recipes]);

  const filteredRecipes = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return recipes.filter((r) => {
      if (selectedCategory !== 'All' && r.category !== selectedCategory) {
        return false;
      }
      if (!q) return true;
      const haystack = `${r.title} ${r.category || ''} ${r.sourceAttribution || ''} ${(r.fridgeIngredientsUsed || []).join(' ')} ${(r.pantryAdditives || []).join(' ')}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [recipes, selectedCategory, searchQuery]);

  const displayedRecipes = useMemo(
    () => filteredRecipes.slice(0, visibleCount),
    [filteredRecipes, visibleCount]
  );

  const getDifficultyClass = (diff?: string) => {
    const d = safeString(diff).toLowerCase();
    if (d.includes('easy') || d.includes('suluva') || d.includes('எளிது')) return 'easy';
    if (d.includes('hard') || d.includes('kastam') || d.includes('கடினம்')) return 'hard';
    return 'medium';
  };

  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.English;

  // Currently displayed recipe inside the 7-Day Planner Popup Modal
  const modalRecipe: Recipe | undefined = useMemo(() => {
    if (!activePlannerModal) return undefined;
    if (activePlannerModal.activeTab === 'paired' && activePlannerModal.combo.secondaryRecipe) {
      return activePlannerModal.combo.secondaryRecipe;
    }
    return activePlannerModal.combo.primaryRecipe;
  }, [activePlannerModal]);

  return (
    <div className="recipes-container">
      <header className="dashboard-header flex-header">
        <div>
          <h1 className="page-title">
            🍲 Madurai Sourashtra Recipes ({recipes.length > 0 ? `${recipes.length} Dishes` : t.recipesTitle})
          </h1>
          <p className="page-subtitle">
            Formulated from your fridge veggies &amp; meats + traditional Sourashtra pantry additives (Bela, Tamarind &amp; Bhurko) with direct YouTube &amp; Web links
          </p>
        </div>
        <div className="header-actions">
          <button
            className="btn-gold"
            onClick={() => setShowWeeklyPlanner(!showWeeklyPlanner)}
          >
            📅 {showWeeklyPlanner ? 'Hide 7-Day Meal Planner' : '7-Day Weekly Meal Planner'}
          </button>
          <button
            className="btn-secondary"
            onClick={() => setShowBhurkoModal(!showBhurkoModal)}
          >
            🥣 {showBhurkoModal ? 'Hide Bhurko Guide' : 'Sourashtra Bhurko Spice Guide'}
          </button>
          <button className="btn-primary" onClick={handleRegenerate}>
            {t.regenerate} {plannerSeed > 0 ? `(Set #${plannerSeed + 1})` : ''}
          </button>
        </div>
      </header>

      {/* =====================================================================
          RECIPE VIEWER MODAL (OPENS WHEN ANY DISH IN THE 7-DAY PLANNER IS CLICKED,
          AND RETURNS DIRECTLY BACK TO THE 7-DAY PLANNER WHEN CLOSED)
          ===================================================================== */}
      {activePlannerModal && modalRecipe && (
        <div
          className="planner-recipe-modal-backdrop"
          onClick={() => setActivePlannerModal(null)}
        >
          <div
            className="planner-recipe-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-top-bar">
              <div>
                <span className="recipe-category-badge">
                  📅 {activePlannerModal.dayName} • {activePlannerModal.slotLabel}
                </span>
              </div>
              <button
                type="button"
                className="btn-back-planner"
                onClick={() => setActivePlannerModal(null)}
              >
                ← Close &amp; Back to 7-Day Planner
              </button>
            </div>

            {/* Switcher Tabs between Main Dish Recipe & Paired Side Dish Recipe */}
            <div className="modal-combo-tabs">
              <button
                type="button"
                className={`modal-combo-tab ${activePlannerModal.activeTab === 'main' ? 'active' : ''}`}
                onClick={() =>
                  setActivePlannerModal({ ...activePlannerModal, activeTab: 'main' })
                }
              >
                🍽️ Main Dish: {activePlannerModal.combo.mainDishTitle}
              </button>
              {activePlannerModal.combo.secondaryRecipe && (
                <button
                  type="button"
                  className={`modal-combo-tab ${activePlannerModal.activeTab === 'paired' ? 'active' : ''}`}
                  onClick={() =>
                    setActivePlannerModal({ ...activePlannerModal, activeTab: 'paired' })
                  }
                >
                  🥣 Paired With: {activePlannerModal.combo.pairedWithTitle}
                </button>
              )}
            </div>

            <div className="recipe-header">
              <div>
                {modalRecipe.category && (
                  <span className="recipe-category-badge">{safeString(modalRecipe.category)}</span>
                )}
                <h3>{safeString(modalRecipe.title)}</h3>
              </div>
              <span className={`difficulty ${getDifficultyClass(modalRecipe.difficulty)}`}>
                {safeString(modalRecipe.difficulty || 'Easy')}
              </span>
            </div>

            {/* Direct YouTube & Web Recipe Links */}
            {(modalRecipe.youtubeUrl || modalRecipe.webUrl) && (
              <div className="recipe-source-links">
                {modalRecipe.youtubeUrl && (
                  <a
                    href={modalRecipe.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="source-link-btn source-link-yt"
                  >
                    ▶️ Watch on YouTube ({safeString(modalRecipe.sourceAttribution || 'Video')})
                  </a>
                )}
                {modalRecipe.webUrl && (
                  <a
                    href={modalRecipe.webUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="source-link-btn source-link-web"
                  >
                    🌐 Web Recipe Reference
                  </a>
                )}
              </div>
            )}

            {/* 1. Main Fridge Ingredients */}
            {Array.isArray(modalRecipe.fridgeIngredientsUsed) &&
              modalRecipe.fridgeIngredientsUsed.length > 0 && (
                <div className="recipe-section">
                  <h4>🧊 Main Fridge Ingredients (Veggies / Meat / Dairy):</h4>
                  <div className="ingredient-badges">
                    {modalRecipe.fridgeIngredientsUsed.map((ing, i) => (
                      <span key={i} className="badge-fridge">{safeString(ing)}</span>
                    ))}
                  </div>
                </div>
              )}

            {/* 2. Pantry Additives */}
            {Array.isArray(modalRecipe.pantryAdditives) &&
              modalRecipe.pantryAdditives.length > 0 && (
                <div className="recipe-section">
                  <h4>🫙 Pantry &amp; Spice Additives (Dals, Tamarind, Bhurko, Salt &amp; Oil):</h4>
                  <div className="ingredient-badges">
                    {modalRecipe.pantryAdditives.map((add, i) => (
                      <span key={i} className="badge-pantry">{safeString(add)}</span>
                    ))}
                  </div>
                </div>
              )}

            {/* 3. Madurai Sourashtra Secret */}
            {modalRecipe.bhurkoNote && (
              <div className="bhurko-note-box">
                <strong>🥣 Madurai Sourashtra Secret:</strong> {safeString(modalRecipe.bhurkoNote)}
              </div>
            )}

            {/* 4. Step-by-Step Cooking Process */}
            <div className="recipe-section">
              <h4>👩‍🍳 Traditional Cooking Process ({t.instructions})</h4>
              <ol className="steps-list">
                {Array.isArray(modalRecipe.steps) &&
                  modalRecipe.steps.map((step, i) => (
                    <li key={i}>{safeString(step)}</li>
                  ))}
              </ol>
            </div>

            {/* 5. Calorie Breakdown */}
            <div className="recipe-section">
              <h4>
                ⚖️ Ingredients &amp; Calories ({t.approx} {modalRecipe.totalCalories || 0} {t.kcal}):
              </h4>
              <div className="calorie-breakdown">
                {Array.isArray(modalRecipe.ingredientsBreakdown) &&
                modalRecipe.ingredientsBreakdown.length > 0 ? (
                  <ul className="calorie-list" style={{ listStyleType: 'none', paddingLeft: 0 }}>
                    {modalRecipe.ingredientsBreakdown.map((item, i) => (
                      <li
                        key={i}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          padding: '4px 0',
                          borderBottom: '1px solid rgba(255,255,255,0.05)'
                        }}
                      >
                        <span>
                          {safeString(item?.name)}{' '}
                          <span style={{ opacity: 0.6, fontSize: '0.9em' }}>
                            ({Number(item?.weightGrams) || 100}g)
                          </span>
                        </span>
                        <span style={{ fontWeight: 'bold' }}>
                          {Number(item?.calories) || 50} {t.kcal}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No calorie data available.</p>
                )}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '8px' }}>
              <button
                type="button"
                className="btn-back-planner"
                onClick={() => setActivePlannerModal(null)}
              >
                ← Close &amp; Return to 7-Day Meal Planner
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          7-DAY MADURAI SOURASHTRA WEEKLY MEAL PLANNER (COMPLETE PAIRED MEALS)
          ===================================================================== */}
      {showWeeklyPlanner && weeklyPlan.length > 0 && (
        <section className="weekly-planner-panel glass-pane mb-24">
          <div className="planner-top-bar">
            <div>
              <h2>
                📅 7-Day Madurai Sourashtra Weekly Meal Planner{' '}
                <span style={{ color: '#10b981', fontSize: '0.88em' }}>
                  (Sample Set #{plannerSeed + 1} • Complete Paired Combinations)
                </span>
              </h2>
              <p className="selector-sub">
                Click <strong>any Main Dish or Paired Side Dish</strong> below to open its full step-by-step recipe, ingredients, and video, then close it to return right back here!
              </p>
            </div>
            <div className="planner-actions">
              <button
                type="button"
                className={`btn-pin-plan ${isWeekPinned ? 'pinned' : ''}`}
                onClick={togglePinEntireWeek}
              >
                {isWeekPinned ? '📌 Week Plan Pinned (Saved)' : '📌 Pin & Save This Week'}
              </button>
              <button
                type="button"
                className="btn-gold"
                onClick={handleResampleWeek}
              >
                🎲 Resample Unpinned Combos (Set #{plannerSeed + 1})
              </button>
              <button
                type="button"
                className="btn-secondary btn-sm"
                onClick={() => window.print()}
              >
                🖨️ Print 7-Day Menu &amp; List
              </button>
              <button
                type="button"
                className="btn-secondary btn-sm"
                onClick={handleDownloadIcsCalendar}
              >
                📆 Export 7-Day Calendar (.ics)
              </button>
            </div>
          </div>

          {/* 7-Day Cards Grid */}
          <div className="weekly-days-grid">
            {weeklyPlan.map((day, dIdx) => (
              <div key={day.isoDate} className="day-plan-card">
                <div className="day-card-header">
                  <div className="day-title-group">
                    <h4>{day.dayName}</h4>
                    <span className="day-date-sub">{day.dateLabel}</span>
                  </div>
                  <a
                    href={buildGoogleCalendarDayUrl(day)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gcal-day-link"
                    title={`Add ${day.dayName} menu to Google Calendar`}
                  >
                    📆 + Google Cal
                  </a>
                </div>

                {/* Breakfast, Lunch, Dinner Paired Combination Slots */}
                {(['breakfast', 'lunch', 'dinner'] as const).map((slotKey) => {
                  const combo = day[slotKey];
                  const isSlotPinned = day.pinnedSlots[slotKey];
                  const slotIcon =
                    slotKey === 'breakfast'
                      ? '🌅 Breakfast Combo'
                      : slotKey === 'lunch'
                      ? '☀️ Full Lunch Meal'
                      : '🌙 Dinner / Tiffin Combo';

                  return (
                    <div
                      key={slotKey}
                      className={`meal-slot-box ${isSlotPinned ? 'slot-pinned' : ''}`}
                    >
                      <div className="meal-slot-top">
                        <span className="meal-type-label">{slotIcon}</span>
                        <div className="meal-slot-controls">
                          <button
                            type="button"
                            className={`slot-mini-btn ${isSlotPinned ? 'active' : ''}`}
                            onClick={() => toggleSlotPin(dIdx, slotKey)}
                            title={isSlotPinned ? 'Unpin this meal combo' : 'Pin this meal combo so it stays when resampling'}
                          >
                            {isSlotPinned ? '📌 Pinned' : '📌 Pin'}
                          </button>
                          <button
                            type="button"
                            className="slot-mini-btn"
                            onClick={() => swapSingleSlot(dIdx, slotKey)}
                            title="Swap with another authentic Sourashtra combination"
                          >
                            🔄 Swap
                          </button>
                        </div>
                      </div>

                      {/* Clickable Main Dish Hyperlink -> Opens Full Recipe Modal on 'main' tab */}
                      <button
                        type="button"
                        className="combo-dish-link"
                        onClick={() =>
                          setActivePlannerModal({
                            dayName: day.dayName,
                            slotLabel: slotIcon,
                            combo,
                            activeTab: 'main'
                          })
                        }
                        title="Click to view full recipe & returns to 7-Day Planner on close"
                      >
                        <span>🍽️ {safeString(combo?.mainDishTitle)}</span>
                        <span className="view-recipe-pill">📖 Recipe →</span>
                      </button>

                      {/* Clickable Paired Side Dish Hyperlink -> Opens Full Recipe Modal on 'paired' tab */}
                      <button
                        type="button"
                        className="combo-paired-link"
                        onClick={() =>
                          setActivePlannerModal({
                            dayName: day.dayName,
                            slotLabel: slotIcon,
                            combo,
                            activeTab: 'paired'
                          })
                        }
                        title="Click to view paired side/curry recipe & returns to 7-Day Planner on close"
                      >
                        <span>
                          <strong className="combo-side-label">+ Paired With:</strong>
                          {safeString(combo?.pairedWithTitle)}
                        </span>
                        <span className="view-recipe-pill">📖 Recipe →</span>
                      </button>

                      {/* Traditional Pairing Note */}
                      {combo?.pairingTraditionNote && (
                        <div className="combo-why-note">
                          ✨ {safeString(combo.pairingTraditionNote)}
                        </div>
                      )}

                      {/* Direct YouTube & Web Recipe Links for Both Dishes in the Combo */}
                      <div className="meal-slot-links">
                        {combo?.primaryRecipe?.youtubeUrl && (
                          <a
                            href={combo.primaryRecipe.youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            ▶️ Main Video
                          </a>
                        )}
                        {combo?.secondaryRecipe?.youtubeUrl &&
                          combo.secondaryRecipe.youtubeUrl !== combo?.primaryRecipe?.youtubeUrl && (
                            <a
                              href={combo.secondaryRecipe.youtubeUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              ▶️ Paired Side Video
                            </a>
                          )}
                        {combo?.primaryRecipe?.webUrl && (
                          <a
                            href={combo.primaryRecipe.webUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="web-ref"
                          >
                            🌐 Web Recipe
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Smart Weekly Shopping Suggestions Based on Current Fridge Inventory */}
          <div className="weekly-shopping-box">
            <h3>🛒 Smart Weekly Shopping List (Based on Your Current Fridge Inventory)</h3>
            <div className="shopping-columns">
              {/* Column 1: Fresh Items Needed to Purchase */}
              <div className="shopping-col-card">
                <h4 style={{ color: '#fca5a5' }}>
                  🛍️ Fresh Veggies, Dairy &amp; Meat to Purchase ({weeklyShoppingAnalysis.toPurchase.length})
                </h4>
                {weeklyShoppingAnalysis.toPurchase.length === 0 ? (
                  <p className="text-success">
                    🎉 Your fridge already has all the fresh items needed for this 7-day plan!
                  </p>
                ) : (
                  <ul className="purchase-needed-list">
                    {weeklyShoppingAnalysis.toPurchase.map((p, i) => (
                      <li key={i} className="purchase-needed-item">
                        <span>{p.item}</span>
                        <span className="purchase-days-tag">For: {p.days}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Column 2: Already Available in Fridge */}
              <div className="shopping-col-card">
                <h4 style={{ color: '#6ee7b7' }}>
                  ✅ Already in Your Fridge ({weeklyShoppingAnalysis.alreadyInFridge.length})
                </h4>
                {weeklyShoppingAnalysis.alreadyInFridge.length === 0 ? (
                  <p className="selector-sub">
                    Tap the items you currently have in the <strong>&ldquo;What&apos;s in Your Fridge Right Now?&rdquo;</strong> panel below (or scan your fridge) to automatically cross them off this shopping list!
                  </p>
                ) : (
                  <div className="ingredient-badges">
                    {weeklyShoppingAnalysis.alreadyInFridge.map((ing, i) => (
                      <span key={i} className="badge-fridge">✓ {ing}</span>
                    ))}
                  </div>
                )}

                <h4 style={{ color: '#fde68a', marginTop: '16px' }}>
                  🫙 Pantry &amp; Bhurko Staples Used This Week
                </h4>
                <div className="ingredient-badges">
                  {weeklyShoppingAnalysis.pantryChecklist.map((add, i) => (
                    <span key={i} className="badge-pantry">{add}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Interactive Fridge Veggies & Meat Selector */}
      <section className="fridge-selector-panel glass-pane mb-24">
        <div className="selector-header">
          <div>
            <h3>🧊 What&apos;s in Your Fridge Right Now? (Veggies, Greens, Dairy &amp; Meat)</h3>
            <p className="selector-sub">
              Tap the fresh items in your fridge to rank all <strong>{recipes.length || 320}+ Madurai Sourashtra recipes</strong> AND automatically update the <strong>Weekly Shopping List</strong> above!
            </p>
          </div>
          {selectedFridgeItems.length > 0 && (
            <div className="selector-actions">
              <button
                className="btn-secondary btn-sm"
                onClick={() => {
                  setSelectedFridgeItems([]);
                  setShuffleSeed(0);
                  fetchRecipes([], 0);
                }}
                disabled={loading}
              >
                Reset to Saved Inventory ({selectedFridgeItems.length} selected)
              </button>
            </div>
          )}
        </div>

        <div className="fridge-pills-grid">
          {FRIDGE_QUICK_ITEMS.map((item) => {
            const active = selectedFridgeItems.includes(item);
            return (
              <button
                key={item}
                type="button"
                className={`fridge-pill ${active ? 'active' : ''}`}
                onClick={() => toggleFridgeItem(item)}
              >
                {active ? '✓ ' : '+ '}
                {item}
              </button>
            );
          })}
        </div>

        {isUsingSampleBasket && (
          <div className="sample-basket-banner">
            💡 Ranking all <strong>{recipes.length} Madurai Sourashtra recipes</strong> for a classic Madurai fridge basket (<strong>Tomato, Brinjal, Potato, Onion, Mint &amp; Coriander</strong>). Tap any fridge items above to re-rank and update your 7-day shopping list!
          </div>
        )}
      </section>

      {/* Search & Category Filter Bar across all 320+ Madurai Sourashtra Recipes */}
      <section className="catalog-filter-panel glass-pane mb-24">
        <div className="search-stats-row">
          <input
            type="text"
            className="recipe-search-input"
            placeholder="🔍 Search 320+ Sourashtra recipes (e.g. Ounty, Budith, Pilchar, Ambat, Pongal, Bhairi, Chaino, Rani's, Sugi)..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setVisibleCount(60);
            }}
          />
          <span className="catalog-count-badge">
            Showing {displayedRecipes.length} of {filteredRecipes.length} Recipes
          </span>
          {visibleCount < filteredRecipes.length && (
            <button
              type="button"
              className="btn-secondary btn-sm"
              onClick={() => setVisibleCount(filteredRecipes.length)}
            >
              Show All {filteredRecipes.length} Recipes
            </button>
          )}
        </div>

        <div className="category-tabs-row">
          {categoryList.map(([cat, count]) => (
            <button
              key={cat}
              type="button"
              className={`category-tab-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => {
                setSelectedCategory(cat);
                setVisibleCount(60);
              }}
            >
              {cat} ({count})
            </button>
          ))}
        </div>
      </section>

      {/* Collapsible Madurai Sourashtra Bhurko (Spice Blend) Reference */}
      {showBhurkoModal && bhurkoGuide.length > 0 && (
        <section className="bhurko-guide-panel glass-pane mb-24">
          <h3>🥣 Authentic Madurai Sourashtra Bhurko (Homemade Spice Powders)</h3>
          <p className="selector-sub mb-16">
            In Madurai Sourashtra kitchens, these foundational sun-dried/roasted spice blends are kept in the pantry and added to gravies (<em>Ounty</em>), stews (<em>Sambar</em>), and broths (<em>Pilchar</em>):
          </p>
          <div className="bhurko-grid">
            {bhurkoGuide.map((b, idx) => (
              <div key={idx} className="bhurko-card">
                <h4>{safeString(b.name)}</h4>
                <p className="bhurko-used-for"><strong>Used for:</strong> {safeString(b.usedFor)}</p>
                <ul className="bhurko-ing-list">
                  {Array.isArray(b.ingredients) && b.ingredients.map((ing, i) => (
                    <li key={i}>{safeString(ing)}</li>
                  ))}
                </ul>
                <p className="bhurko-prep"><strong>Method:</strong> {safeString(b.preparation)}</p>
                <div className="recipe-source-links">
                  {b.youtubeUrl && (
                    <a
                      href={b.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="source-link-btn source-link-yt"
                    >
                      ▶️ Watch Bhurko Video
                    </a>
                  )}
                  {b.webUrl && (
                    <a
                      href={b.webUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="source-link-btn source-link-web"
                    >
                      🌐 Web Recipe
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {error && <div className="error-message mb-24">{error}</div>}

      {loading ? (
        <div className="recipes-loading glass-pane">
          <div className="spinner" style={{ width: '40px', height: '40px' }}></div>
          <p>{t.loadingRecipes}</p>
        </div>
      ) : displayedRecipes.length === 0 && !error ? (
        <div className="empty-state glass-pane">
          <div className="card-icon">🍳</div>
          <h2>No matching Sourashtra recipes found</h2>
          <p>Try clearing your search filter or selecting different category tabs above.</p>
        </div>
      ) : (
        <>
          <div className="recipes-grid">
            {displayedRecipes.map((recipe, idx) => (
              <div key={recipe.id || idx} className="recipe-card glass-pane">
                <div className="recipe-header">
                  <div>
                    {recipe.category && (
                      <span className="recipe-category-badge">{safeString(recipe.category)}</span>
                    )}
                    <h3>{safeString(recipe.title)}</h3>
                  </div>
                  <span className={`difficulty ${getDifficultyClass(recipe.difficulty)}`}>
                    {safeString(recipe.difficulty || 'Easy')}
                  </span>
                </div>

                {/* Direct YouTube Video & Web Archive Hyperlinks */}
                {(recipe.youtubeUrl || recipe.webUrl) && (
                  <div className="recipe-source-links">
                    {recipe.youtubeUrl && (
                      <a
                        href={recipe.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="source-link-btn source-link-yt"
                        title={`Watch ${safeString(recipe.title)} on YouTube`}
                      >
                        ▶️ Watch on YouTube ({safeString(recipe.sourceAttribution || 'Video')})
                      </a>
                    )}
                    {recipe.webUrl && (
                      <a
                        href={recipe.webUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="source-link-btn source-link-web"
                        title="Open Web Recipe Archive"
                      >
                        🌐 Web Recipe Reference
                      </a>
                    )}
                  </div>
                )}

                {/* 1. Main Fridge Ingredients Used */}
                {Array.isArray(recipe.fridgeIngredientsUsed) && recipe.fridgeIngredientsUsed.length > 0 && (
                  <div className="recipe-section">
                    <h4>🧊 Main Fridge Ingredients (Veggies / Meat / Dairy):</h4>
                    <div className="ingredient-badges">
                      {recipe.fridgeIngredientsUsed.map((ing, i) => (
                        <span key={i} className="badge-fridge">{safeString(ing)}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* 2. Pantry Additives (Non-Fridge Items like Toor Dal, Tamarind, Bhurko, Salt, Oil) */}
                {Array.isArray(recipe.pantryAdditives) && recipe.pantryAdditives.length > 0 && (
                  <div className="recipe-section">
                    <h4>🫙 Pantry &amp; Spice Additives (Dals, Tamarind, Bhurko, Salt &amp; Oil):</h4>
                    <div className="ingredient-badges">
                      {recipe.pantryAdditives.map((add, i) => (
                        <span key={i} className="badge-pantry">{safeString(add)}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* 3. Signature Sourashtra Bhurko / Culinary Note */}
                {recipe.bhurkoNote && (
                  <div className="bhurko-note-box">
                    <strong>🥣 Madurai Sourashtra Secret:</strong> {safeString(recipe.bhurkoNote)}
                  </div>
                )}

                {/* 4. Optional Missing Fresh Items */}
                {Array.isArray(recipe.missingIngredients) && recipe.missingIngredients.length > 0 && (
                  <div className="recipe-section">
                    <h4>🛒 Optional Fresh Add-ons:</h4>
                    <ul className="missing-list">
                      {recipe.missingIngredients.map((ing, i) => (
                        <li key={i}>{safeString(ing)}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 5. Step-by-Step Cooking Instructions */}
                <div className="recipe-section">
                  <h4>👩‍🍳 Traditional Cooking Process ({t.instructions})</h4>
                  <ol className="steps-list">
                    {Array.isArray(recipe.steps) && recipe.steps.map((step, i) => (
                      <li key={i}>{safeString(step)}</li>
                    ))}
                  </ol>
                </div>

                {/* 6. Calorie & Weight Breakdown */}
                <div className="recipe-section">
                  <h4>⚖️ Ingredients &amp; Calories ({t.approx} {recipe.totalCalories || 0} {t.kcal}):</h4>
                  <div className="calorie-breakdown">
                    {Array.isArray(recipe.ingredientsBreakdown) && recipe.ingredientsBreakdown.length > 0 ? (
                      <ul className="calorie-list" style={{ listStyleType: 'none', paddingLeft: 0 }}>
                        {recipe.ingredientsBreakdown.map((item, i) => (
                          <li
                            key={i}
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              padding: '4px 0',
                              borderBottom: '1px solid rgba(255,255,255,0.05)'
                            }}
                          >
                            <span>
                              {safeString(item?.name)}{' '}
                              <span style={{ opacity: 0.6, fontSize: '0.9em' }}>
                                ({Number(item?.weightGrams) || 100}g)
                              </span>
                            </span>
                            <span style={{ fontWeight: 'bold' }}>
                              {Number(item?.calories) || 50} {t.kcal}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>No calorie data available.</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {visibleCount < filteredRecipes.length && (
            <div className="load-more-bar">
              <button
                type="button"
                className="btn-primary"
                onClick={() => setVisibleCount((prev) => prev + 60)}
              >
                Load 60 More Recipes ({filteredRecipes.length - visibleCount} remaining)
              </button>
              <button
                type="button"
                className="btn-secondary"
                onClick={() => setVisibleCount(filteredRecipes.length)}
              >
                Show All {filteredRecipes.length} Recipes
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
