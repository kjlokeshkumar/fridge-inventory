export interface SourashtraBhurko {
  name: string;
  sourashtraName: string;
  usedFor: string;
  ingredients: string[];
  preparation: string;
  youtubeUrl?: string;
  webUrl?: string;
}

export interface SourashtraRecipeReference {
  id: string;
  name: string;
  englishSubtitle: string;
  sourceAttribution: string;
  youtubeUrl?: string;
  webUrl?: string;
  category:
    | 'Ounty & Kolkar (Tangy Gravies)'
    | 'Ambat & Pitla (Rich Curries)'
    | 'Budith, Losto & Polte (Chutneys/Masiyal)'
    | 'Pilchar & Charu (Rasam/Broths)'
    | 'Bhaath & Pongal (Rice Specialties)'
    | 'Sambar (Lentil Stews)'
    | 'Bhairi & Appam (Fritters & Tiffin)'
    | 'Non-Veg Ounty, Chaino & Kodhi';
  dietaryType: 'Vegetarian' | 'Eggitarian' | 'Non-Veg';
  fridgeTriggers: string[];
  pantryAdditives: string[];
  bhurkoUsed?: string;
  processSteps: string[];
}

export const MADURAI_SOURASHTRA_BHURKOS: SourashtraBhurko[] = [
  {
    name: 'Ounty Bhurko (Avunti Bhurko / Sourashtra Kulambu Podi)',
    sourashtraName: 'Ounty Bhurko',
    youtubeUrl: 'https://www.youtube.com/watch?v=xbxwE09W8i8',
    webUrl: 'https://www.sailajakitchen.org/search?q=kuzhambu+podi',
    usedFor: 'Thakkali Ounty, Losan Kolkar, Vangi Ounty, Kachchana Ambat, Chaino Kolkar, Meen Kodhi, Anda Ounty',
    ingredients: [
      'Coriander seeds (1.5 cups / ~100g)',
      'Dry red chillies (25–30)',
      'Split black gram / Black Urad dal (1/4 cup / ~50g)',
      'Raw rice (3 tsp / ~15g — acts as natural gravy thickener)',
      'Fenugreek seeds / Methi (1 tsp)',
      'Turmeric powder (1 tbsp)'
    ],
    preparation:
      'Dry roast coriander seeds, red chillies, urad dal, raw rice, and fenugreek separately on low flame until crisp and aromatic. Cool completely, grind to a fine powder, pulse with turmeric powder, and store in an airtight glass jar.'
  },
  {
    name: 'Pilchar Bhurko (Sourashtra Rasam Podi)',
    sourashtraName: 'Pilchar Bhurko',
    youtubeUrl: 'https://www.youtube.com/watch?v=umE7wDIcpfw',
    webUrl: 'https://www.palkar.org/recipes/pilchar-bhurko/',
    usedFor: 'Joman Pilchar, Thakkali Charu, Limbu Pilchar, and Sugi Cooks Pilchar Bhurko Chicken Varuval',
    ingredients: [
      'Black peppercorns (100g / ~1 cup)',
      'Dried red chillies (25–40 pieces)',
      'Cumin seeds / Jeera (50g / ~1/4 cup)',
      'Toor dal (50g / ~3 tbsp)',
      'Dried curry leaves (1 generous handful)',
      'Asafoetida / Hing (2 tsp)'
    ],
    preparation:
      'Dry roast black pepper, red chillies, cumin seeds, and toor dal separately on low heat without scorching. Crisp the curry leaves briefly, cool everything, and pulse with hing into a coarse, fiery-aromatic powder.'
  },
  {
    name: 'Sambar Bhurko (Madurai Sourashtra Sambar Powder)',
    sourashtraName: 'Sambar Bhurko',
    youtubeUrl: 'https://www.youtube.com/watch?v=n79vRnUDSfE',
    webUrl: 'https://www.palkar.org/recipes/',
    usedFor: 'Sengu-Vangi-Batata Sambar, Nilam Bela Sambar, Vegetable Kootu',
    ingredients: [
      'Coriander seeds (1 cup)',
      'Dry red chillies (15–20)',
      'Toor dal (2 tbsp)',
      'Chana dal (2 tbsp)',
      'Urad dal (1 tbsp)',
      'Fenugreek seeds (1 tsp)',
      'Black peppercorns (1 tsp)',
      'Turmeric powder (1 tsp) & Hing (1/2 tsp)'
    ],
    preparation:
      'Dry roast all lentils, seeds, and red chillies separately until golden brown, cool, and mill into a fine powder with turmeric and hing.'
  },
  {
    name: 'Chenna Bhurko / Idli Bhurko (Pottukadalai Chutney Podi)',
    sourashtraName: 'Chenna Bhurko',
    youtubeUrl: 'https://www.youtube.com/watch?v=48-yqurWwzk',
    webUrl: 'https://www.palkar.org/recipes/',
    usedFor: 'Accompaniment for Pangarapaan Bhairi, Nalar Bhairi, Phalar (Idli), and Diido (Dosa)',
    ingredients: [
      'Roasted gram / Pottukadalai (1 cup)',
      'Urad dal (2 tbsp, roasted golden)',
      'Dry red chillies (6–8)',
      'Garlic cloves (4–5, lightly roasted)',
      'Dry curry leaves (1 sprig)',
      'Asafoetida (Hing) & Salt'
    ],
    preparation:
      'Dry roast urad dal, red chillies, garlic, and curry leaves with a drop of oil; cool and pulse with roasted gram (pottukadalai), hing, and salt into a nutty powder.'
  },
  {
    name: 'Baltin Bhurko & Khaaru Bhurko (Traditional Medicinal / Digestive Powders)',
    sourashtraName: 'Baltin & Khaaru Bhurko',
    youtubeUrl: 'https://www.youtube.com/watch?v=7VBS54BabNo',
    webUrl: 'https://sugi-writes.blogspot.com/search/label/Sourashtra%20Recipes',
    usedFor: 'Healing postpartum/winter curries (Baltin Ounty) & digestive hot rice mix with ghee',
    ingredients: [
      'Coriander seeds, Black pepper, Cumin seeds',
      'Dry ginger (Sukku) & Long pepper (Pippali / Thippili)',
      'Carom seeds (Ajwain / Omam), Fenugreek, Mustard seeds',
      'Dry curry leaves, Garlic, Turmeric & Hing'
    ],
    preparation:
      'Slowly dry roast the 11–14 medicinal herbs and spices individually, cool, and grind fine. Used in healing garlic-tamarind gravies or mixed directly into hot steamed rice with melted ghee.'
  }
];

export const PANTRY_ADDITIVES_CATALOG = {
  dalsAndPulses: [
    'Toor Dal (Tuvaram Bela)',
    'Chana Dal (Harbara Bela)',
    'Urad Dal (Udidu Bela)',
    'Moong Dal (Pasi Bela)',
    'Roasted Gram (Pottukadalai / Chenna)',
    'Black Chickpeas (Kachchana / Kala Chana)',
    'Peanuts (Verkadalai)',
    'Poppy Seeds (Kas Kas / Khus Khus)',
    'Besan (Chickpea Flour)'
  ],
  grainsAndFlours: [
    'Raw Rice (Saadu / Pacharisi)',
    'Parboiled / Idli Rice',
    'Boiled Steamed Rice',
    'Fermented Rice Water / Kanji (Koduk)',
    'Rice Flour (Pavit Flour)',
    'Cottonseed Milk Powder / Paruthi (for Serki Bhaath)'
  ],
  souringAndSweetening: [
    'Tamarind (Ambat / Puli)',
    'Palm Jaggery / Karupatti (Gullu)',
    'Jaggery (Gullu)',
    'Sugar'
  ],
  temperingAndSpices: [
    'Gingelly / Sesame Oil (Nallennai / Telu)',
    'Cooking Oil (Telu)',
    'Ghee (Thup)',
    'Mustard Seeds (Mhuri)',
    'Cumin Seeds (Jeera)',
    'Fenugreek Seeds (Methi) & Roasted Methi Powder',
    'Fennel Seeds (Sombu)',
    'Black Pepper (Miri)',
    'Cinnamon, Cloves & Stoneflower (Kalpasi)',
    'Dry Red Chillies (Sukka Mirsang)',
    'Asafoetida (Hing)',
    'Turmeric Powder (Haldi)',
    'Salt (Lenu)',
    'Ounty Bhurko',
    'Pilchar Bhurko',
    'Sambar Bhurko',
    'Chenna Bhurko'
  ]
};

export const MADURAI_SOURASHTRA_RECIPES: SourashtraRecipeReference[] = [
  {
    id: 'thakkali-ounty',
    youtubeUrl: 'https://www.youtube.com/watch?v=ANrgSgIelP4',
    webUrl: 'https://www.palkar.org/recipes/thakkali-ounty/',
    name: 'Thakkali Ounty',
    englishSubtitle: 'Classic Madurai Sourashtra Tangy Tomato Gravy',
    sourceAttribution: 'Palkar.org / Sailaja Kitchen / Sugi Cooks',
    category: 'Ounty & Kolkar (Tangy Gravies)',
    dietaryType: 'Vegetarian',
    fridgeTriggers: ['Tomato', 'Onion', 'Green Chilli', 'Curry Leaves', 'Coriander'],
    pantryAdditives: [
      'Ounty Bhurko (3–4 tsp)',
      'Tamarind (small gooseberry size, optional)',
      'Gingelly / Sesame Oil (2 tbsp)',
      'Mustard Seeds (1/4 tsp) & Urad Dal (1/2 tsp)',
      'Asafoetida (Hing)',
      'Salt (Lenu)'
    ],
    bhurkoUsed: 'Ounty Bhurko (contains roasted raw rice & urad dal that thicken the gravy naturally)',
    processSteps: [
      'Chop or puree 3–4 ripe tomatoes (Takkali) and finely slice 1 medium onion (or 8 shallots) and 1 slit green chilli.',
      'Whisk 3–4 tsp of Ounty Bhurko into 1.5 cups of water (or thin tamarind extract) until lump-free.',
      'Heat 2 tbsp sesame oil in a kadai; splutter mustard seeds, urad dal, hing, and fresh curry leaves.',
      'Sauté sliced onions and green chilli until golden, then add tomatoes and salt; cook until mushy and oil separates.',
      'Pour in the Ounty Bhurko liquid and simmer on low flame for 10–12 minutes until the roasted rice in the Bhurko thickens it into a glossy gravy for Phalar (idli), Diido (dosa), or rice.'
    ]
  },
  {
    id: 'losan-kolkar',
    youtubeUrl: 'https://www.youtube.com/watch?v=1cKPmolVaeA',
    webUrl: 'https://www.sailajakitchen.org/search?q=poondu+kulambu',
    name: 'Losan Kolkar (Lasan Ounty)',
    englishSubtitle: 'Madurai Sourashtra Whole Garlic & Sesame Oil Tamarind Gravy',
    sourceAttribution: 'Sugi Cooks / Sourashtra Samayal YouTube',
    category: 'Ounty & Kolkar (Tangy Gravies)',
    dietaryType: 'Vegetarian',
    fridgeTriggers: ['Garlic', 'Onion', 'Tomato', 'Curry Leaves'],
    pantryAdditives: [
      'Tamarind (lemon-sized ball)',
      'Ounty Bhurko (3 tbsp)',
      'Gingelly / Sesame Oil (4 tbsp — generous)',
      'Mustard Seeds (1/2 tsp) & Fenugreek Seeds / Methi (1/4 tsp)',
      'Urad Dal (1 tsp)',
      'Palm Jaggery / Gullu (1/2 tsp, to balance tang)',
      'Asafoetida (Hing) & Salt (Lenu)'
    ],
    bhurkoUsed: 'Ounty Bhurko',
    processSteps: [
      'Peel 50–60g of whole garlic cloves (Losan) and 10–12 small shallots.',
      'Extract 1.5 cups of tamarind juice and mix in 3 tbsp Ounty Bhurko and salt.',
      'Heat 4 tbsp gingelly oil in a heavy pan; crackle mustard seeds, fenugreek seeds, urad dal, hing, and curry leaves.',
      'Add the whole garlic cloves and shallots; slow-roast in the sesame oil for 4–5 minutes until the garlic turns golden and aromatic, then sauté 1 chopped tomato.',
      'Pour in the tamarind-Ounty Bhurko mixture and simmer on low heat for 12–15 minutes with a pinch of jaggery until dark, thick, and sesame oil floats on top.'
    ]
  },
  {
    id: 'koduk-ounty',
    youtubeUrl: 'https://www.youtube.com/watch?v=wcBpaS93nfM',
    webUrl: 'https://sugi-writes.blogspot.com/search/label/Sourashtra%20Recipes',
    name: 'Koduk Ounty (with Polte Bhajji / Bhunje Kodhi)',
    englishSubtitle: 'Ancient Sourashtra Fermented Rice-Starch Probiotic Tangy Curry',
    sourceAttribution: 'Sugi Cooks / Sourashtra Heritage Archives',
    category: 'Ounty & Kolkar (Tangy Gravies)',
    dietaryType: 'Vegetarian',
    fridgeTriggers: ['Onion', 'Garlic', 'Green Chilli', 'Curry Leaves', 'Spinach'],
    pantryAdditives: [
      'Fermented Rice Starch Water / Kanji (Koduk — 2 cups)',
      'Ounty Bhurko (1.5 tbsp) or Turmeric & Red Chilli Powder',
      'Mustard Seeds (1/2 tsp) & Fenugreek Seeds (1/4 tsp)',
      'Cumin Seeds (1/2 tsp)',
      'Gingelly Oil (2 tbsp)',
      'Salt (Lenu)'
    ],
    bhurkoUsed: 'Ounty Bhurko',
    processSteps: [
      'Use 2 cups of traditional soured/fermented drained rice starch water (Koduk / Pulicha Kanji) and whisk in 1.5 tbsp Ounty Bhurko, turmeric, and salt.',
      'Heat sesame oil in a pot; temper mustard seeds, fenugreek, cumin, crushed garlic, slit green chillies, chopped shallots, and curry leaves.',
      'Pour in the seasoned Koduk (fermented rice water) and simmer gently on medium-low flame for 8–10 minutes until velvety and aromatic.',
      'Traditionally served hot with Polte Bhajji (mashed greens), Polte Kennu (roasted beans), or crispy fried fish (Bhunje Kodhi).'
    ]
  },
  {
    id: 'vangi-budith',
    youtubeUrl: 'https://www.youtube.com/watch?v=GRLitI8ZapU',
    webUrl: 'https://www.abiscookbook.com/vangi-bhudid-eggplant-chutney-sourashtra-style/',
    name: 'Vangi Budith',
    englishSubtitle: 'Iconic Madurai Sourashtra Pressure-Cooked Brinjal Chutney',
    sourceAttribution: "Abi's Cookbook / Palkar.org / Sourashtra Samayal",
    category: 'Budith, Losto & Polte (Chutneys/Masiyal)',
    dietaryType: 'Vegetarian',
    fridgeTriggers: ['Brinjal', 'Eggplant', 'Tomato', 'Onion', 'Curry Leaves'],
    pantryAdditives: [
      'Chana Dal or Toor Dal (1 tbsp)',
      'Dry Red Chillies (4–6)',
      'Tamarind (small pea-sized piece)',
      'Asafoetida (Hing — 1/4 tsp)',
      'Mustard Seeds (1/2 tsp) & Urad Dal (1/2 tsp)',
      'Gingelly Oil (2 tsp)',
      'Salt (Lenu)'
    ],
    processSteps: [
      'Chop 3–4 medium brinjals (Vangi), 2–3 ripe tomatoes (Takkali), and 1 onion (Kando).',
      'Add the brinjals, tomatoes, onion, 1 tbsp chana/toor dal, 4–6 dry red chillies, pea-sized tamarind, hing, and salt into a pressure cooker with just enough water to partially immerse.',
      'Pressure cook for 3 to 4 whistles until completely soft. Let pressure release naturally.',
      'Drain and reserve excess cooking liquid; coarsely mash the cooked vegetables and dal with a wooden masher (mathu) or 2 quick pulses in a blender, adding reserved stock back as needed.',
      'Temper mustard seeds, urad dal, and curry leaves in hot gingelly oil and pour over the Vangi Budith—the classic companion for Mudha Pongal and Idli.'
    ]
  },
  {
    id: 'pudina-kothmir-losto',
    youtubeUrl: 'https://www.youtube.com/watch?v=iydGPZae8wc',
    webUrl: 'https://www.palkar.org/recipes/',
    name: 'Sourashtra Pudina / Kothmir Losto',
    englishSubtitle: 'Zero-Coconut, Zero-Onion Fiery Mint & Coriander Paste',
    sourceAttribution: 'Sourashtra Samayal YouTube / Palkar Recipes',
    category: 'Budith, Losto & Polte (Chutneys/Masiyal)',
    dietaryType: 'Vegetarian',
    fridgeTriggers: ['Mint Leaves', 'Mint', 'Coriander', 'Cilantro'],
    pantryAdditives: [
      'Dry Red Chillies (8–10)',
      'Tamarind (small lemon-sized ball)',
      'Asafoetida (Hing — generous 1/4 tsp)',
      'Raw Gingelly / Sesame Oil (1 tbsp)',
      'Rock Salt (Lenu)'
    ],
    processSteps: [
      'Clean and wash 1 bunch of fresh mint leaves (Pudina) or coriander leaves (Kothmir) and drain completely.',
      'In a mixer jar, first grind 8–10 dry red chillies, seedless tamarind, hing, and salt with just 1–2 tbsp water into a coarse paste.',
      'Add the fresh mint/coriander leaves in steps and grind into a thick, smooth, fiery green Losto (no coconut, onion, or garlic is used).',
      'Finish with a drizzle of raw sesame oil—pairs unbeaten with Dhi Bhaath (curd rice), Ambat Bhaath, or rice kanji.'
    ]
  },
  {
    id: 'polte-bhajji',
    youtubeUrl: 'https://www.youtube.com/watch?v=kaMAd2eVBu4',
    webUrl: 'https://www.palkar.org/recipes/',
    name: 'Polte Bhajji (Sourashtra Keerai Masiyal)',
    englishSubtitle: 'Pressure-Cooked Mashed Greens with Garlic, Cumin & Tamarind',
    sourceAttribution: 'Sourashtra Samayal YouTube',
    category: 'Budith, Losto & Polte (Chutneys/Masiyal)',
    dietaryType: 'Vegetarian',
    fridgeTriggers: ['Spinach', 'Greens', 'Keerai', 'Onion', 'Tomato', 'Garlic'],
    pantryAdditives: [
      'Tamarind (small marble size)',
      'Dry Red Chillies (2–3)',
      'Cumin Seeds (1/2 tsp)',
      'Mustard Seeds & Urad Dal (for tempering)',
      'Asafoetida (Hing)',
      'Cooking Oil & Salt (Lenu)'
    ],
    processSteps: [
      'Place 1 bunch washed chopped greens (Spinach / Arai Keerai), 1 chopped onion, 1 chopped tomato, 4 crushed garlic cloves, a small piece of tamarind, 2–3 dry red chillies, and 1/2 tsp cumin seeds in a pressure cooker with a splash of water.',
      'Pressure cook for 2–3 whistles until tender.',
      'Cool slightly, add salt, and coarsely mash using a wooden mathu (or single pulse in a mixer).',
      'Heat oil in a pan, temper mustard seeds, urad dal, 1 red chilli, and hing; stir in the mashed greens and simmer for 1 minute.'
    ]
  },
  {
    id: 'nellika-rubbin',
    youtubeUrl: 'https://www.youtube.com/watch?v=SOpwMJ1xBSo',
    webUrl: 'https://www.palkar.org/recipes/',
    name: 'Nellika Rubbin (Lubbin)',
    englishSubtitle: 'Zero-Oil Salted & Spiced Gooseberry Relish',
    sourceAttribution: 'Madurai Sourashtra Heritage Recipes',
    category: 'Budith, Losto & Polte (Chutneys/Masiyal)',
    dietaryType: 'Vegetarian',
    fridgeTriggers: ['Gooseberry', 'Amla', 'Nellika', 'Green Chilli'],
    pantryAdditives: [
      'Turmeric Powder (1/2 tsp)',
      'Roasted Fenugreek Powder (1/4 tsp)',
      'Asafoetida (Hing)',
      'Rock Salt (generous)'
    ],
    processSteps: [
      'Wash and steam or boil fresh gooseberries (Nellika) until soft enough to deseed easily.',
      'Remove the seeds and coarsely crush/mash the gooseberry segments with slit green chillies, turmeric, hing, roasted methi powder, and rock salt.',
      'Traditionally cured in a ceramic/glass jar where the salt draws out the natural juices without needing oil, or served fresh alongside curd rice and rasam.'
    ]
  },
  {
    id: 'beans-batata-ambat',
    youtubeUrl: 'https://www.youtube.com/watch?v=diIpBTr5AKU',
    webUrl: 'https://www.palkar.org/recipes/',
    name: 'Beans & Batata Ambat',
    englishSubtitle: 'Madurai Feast Double Beans & Potato Gravy',
    sourceAttribution: 'Madurai Sourashtra Feast Archives',
    category: 'Ambat & Pitla (Rich Curries)',
    dietaryType: 'Vegetarian',
    fridgeTriggers: ['Beans', 'Butter Beans', 'Potato', 'Onion', 'Tomato', 'Garlic', 'Curry Leaves'],
    pantryAdditives: [
      'Ounty Bhurko or Sambar Bhurko (1.5 tbsp)',
      'Mustard Seeds (1 tsp) & Urad Dal (1/2 tsp)',
      'Turmeric & Red Chilli Powder (1/2 tsp)',
      'Asafoetida (Hing)',
      'Cooking Oil & Salt (Lenu)'
    ],
    bhurkoUsed: 'Ounty Bhurko / Sambar Bhurko',
    processSteps: [
      'Boil or pressure cook 1 cup butter beans / French beans and 1 cubed potato (Batata) with turmeric and salt until soft.',
      'Heat oil in a pan; temper mustard seeds, urad dal, curry leaves, and hing.',
      'Sauté 1 chopped onion and 3 crushed garlic cloves until translucent, then add 2 chopped tomatoes.',
      'Stir in 1.5 tbsp Ounty/Sambar Bhurko and salt; cook until tomatoes break down and oil separates.',
      'Add the boiled beans, potatoes, and 1 cup cooking water; simmer 6–8 minutes until the Ambat thickens and coats the vegetables.'
    ]
  },
  {
    id: 'kachchana-ambat',
    youtubeUrl: 'https://www.youtube.com/watch?v=-DLgK2eHzyw',
    webUrl: 'https://www.palkar.org/recipes/',
    name: 'Kachchana Ambat',
    englishSubtitle: 'Sourashtra Black Chickpea (Kala Chana) Spiced Gravy',
    sourceAttribution: 'Sourashtra Samayal YouTube',
    category: 'Ambat & Pitla (Rich Curries)',
    dietaryType: 'Vegetarian',
    fridgeTriggers: ['Onion', 'Tomato', 'Garlic', 'Ginger', 'Curry Leaves', 'Coriander'],
    pantryAdditives: [
      'Black Chickpeas / Kachchana (100g — soaked & pressure cooked)',
      'Ounty Bhurko (1.5 tbsp)',
      'Asafoetida / Hing (2–3 pinches)',
      'Mustard Seeds & Urad Dal',
      'Turmeric Powder & Red Chilli Powder (1/4 tsp)',
      'Oil / Ghee & Salt (Lenu)'
    ],
    bhurkoUsed: 'Ounty Bhurko',
    processSteps: [
      'Pressure cook soaked black chickpeas (Kachchana) with water and salt until tender; reserve the cooking stock.',
      'Heat oil/ghee in a pan; splutter mustard seeds, urad dal, curry leaves, and 2–3 pinches of hing.',
      'Sauté 1 finely chopped onion, 3 crushed garlic cloves, and 1 inch minced ginger until golden.',
      'Add 2 chopped tomatoes, turmeric, and 1.5 tbsp Ounty Bhurko; sauté until mushy.',
      'Add the boiled black chickpeas and reserved stock (lightly mashing a spoonful of chickpeas for body) and simmer for 10 minutes.'
    ]
  },
  {
    id: 'pavakkai-vangi-pitla',
    youtubeUrl: 'https://www.youtube.com/watch?v=TFHCpTK39LY',
    webUrl: 'https://www.palkar.org/recipes/',
    name: 'Sourashtra Vangi / Pavakkai Pitla',
    englishSubtitle: 'Brinjal or Bitter Gourd in Roasted Coconut-Chana Dal-Tamarind Gravy',
    sourceAttribution: 'Madurai Sourashtra Kitchens',
    category: 'Ambat & Pitla (Rich Curries)',
    dietaryType: 'Vegetarian',
    fridgeTriggers: ['Brinjal', 'Bitter Gourd', 'Coconut', 'Curry Leaves'],
    pantryAdditives: [
      'Toor Dal (1/2 cup, pressure cooked) & Boiled Peanuts / Chickpeas (1/4 cup)',
      'Chana Dal (1 tbsp) & Coriander Seeds (1 tbsp)',
      'Dry Red Chillies (3–4)',
      'Tamarind (small lime size)',
      'Mustard Seeds, Cumin & Hing',
      'Cooking Oil & Salt (Lenu)'
    ],
    processSteps: [
      'In 1 tsp oil, roast 1 tbsp chana dal, 1 tbsp coriander seeds, and 3–4 dry red chillies until golden; grind with 4 tbsp grated coconut and tamarind into a smooth Pitla paste.',
      'Sauté sliced bitter gourd (Pavakkai) or quartered brinjals (Vangi) and boil until tender with turmeric, salt, and boiled peanuts/chickpeas.',
      'Stir in cooked mashed Toor Dal and the freshly ground coconut-chana dal Pitla paste; simmer 6–8 minutes until thick and aromatic.',
      'Finish with a tempering of mustard seeds, cumin, hing, and curry leaves in hot oil.'
    ]
  },
  {
    id: 'joman-pilchar',
    youtubeUrl: 'https://www.youtube.com/watch?v=uig8xhgsFSk',
    webUrl: 'https://www.palkar.org/recipes/joman-pilchar/',
    name: 'Joman Pilchar (Thakkali Charu)',
    englishSubtitle: 'Madurai Sourashtra Wedding-Style Pepper-Cumin Tomato Rasam',
    sourceAttribution: 'Palkar.org / Buddy Recipes / Sugi Cooks',
    category: 'Pilchar & Charu (Rasam/Broths)',
    dietaryType: 'Vegetarian',
    fridgeTriggers: ['Tomato', 'Garlic', 'Green Chilli', 'Curry Leaves', 'Coriander'],
    pantryAdditives: [
      'Pilchar Bhurko (2 tbsp — coarse pepper-cumin-toor dal-hing mix)',
      'Tamarind (small lemon-sized ball)',
      'Toor Dal Water (1 cup diluted cooked dal stock)',
      'Jaggery / Gullu (small pinch, optional)',
      'Mustard Seeds, Cumin & Ghee (Thup)',
      'Turmeric, Hing & Salt (Lenu)'
    ],
    bhurkoUsed: 'Pilchar Bhurko',
    processSteps: [
      'Extract 2 cups of thin tamarind water; hand-crush 2 ripe tomatoes, 4 garlic cloves, 2 slit green chillies, and fresh curry leaves directly into the liquid.',
      'Add turmeric, salt, a pinch of hing, a tiny piece of jaggery, and 2 tbsp of coarse Pilchar Bhurko.',
      'Boil on medium flame for 6–8 minutes until the raw tamarind smell vanishes.',
      'Pour in 1 cup of diluted Toor Dal water; watch until a frothy white ring rises to the top and immediately turn off the heat (do not rolling-boil).',
      'Temper mustard seeds and cumin in 1 tsp Ghee (Thup), pour over the Joman Pilchar, and garnish with coriander.'
    ]
  },
  {
    id: 'bhajji-keerai-charu',
    youtubeUrl: 'https://www.youtube.com/watch?v=PO5Pu0r0wkY',
    webUrl: 'https://www.palkar.org/recipes/',
    name: 'Bhajji Charu (Keerai Chaaru)',
    englishSubtitle: 'Sourashtra Greens Broth with Coconut, Cumin, Poppy Seeds & Warm Milk',
    sourceAttribution: 'Palkar.org / Sourashtra Samayal YouTube',
    category: 'Pilchar & Charu (Rasam/Broths)',
    dietaryType: 'Vegetarian',
    fridgeTriggers: ['Spinach', 'Greens', 'Keerai', 'Coconut', 'Milk', 'Curry Leaves'],
    pantryAdditives: [
      'Rice-Washed Water (Arisi Kalvi Thanni — 2.5 cups)',
      'Cumin Seeds (1.5 tsp) & Black Peppercorns (1 tsp)',
      'Poppy Seeds / Kas Kas (1 tsp)',
      'Mustard Seeds, Urad Dal & 1 Dry Red Chilli',
      'Sesame Oil / Ghee, Turmeric & Salt (Lenu)'
    ],
    processSteps: [
      'Boil 1 bunch washed tender greens (Arai Keerai / Mullai Keerai / Spinach) uncovered in 2.5 cups rice-washed water with a pinch of turmeric and salt for 5 minutes until soft.',
      'Grind 3–4 slices of fresh coconut, 1.5 tsp cumin seeds, 1 tsp black pepper, and 1 tsp poppy seeds (kas kas) with a splash of water into a fine paste.',
      'Stir the ground coconut-cumin paste and 1/4 cup warm Milk (Taani) into the simmering greens; cook on low flame for 3 minutes (no tamarind is used).',
      'Temper mustard seeds, urad dal, 1 red chilli, and curry leaves in ghee/sesame oil and pour over the mild, nourishing Bhajji Charu.'
    ]
  },
  {
    id: 'ambat-bhaath',
    youtubeUrl: 'https://www.youtube.com/watch?v=zeSmDlcDjvg',
    webUrl: 'https://www.palkar.org/recipes/ambat-bhaath/',
    name: 'Ambat Bhaath & Mudha Ambat Bhaath',
    englishSubtitle: 'Signature Madurai Sourashtra Tamarind Rice with Roasted Methi & Sesame Oil',
    sourceAttribution: 'Palkar.org / Sugi Cooks / Shalikuta',
    category: 'Bhaath & Pongal (Rice Specialties)',
    dietaryType: 'Vegetarian',
    fridgeTriggers: ['Curry Leaves', 'Ginger', 'Coconut'],
    pantryAdditives: [
      'Raw Rice (3 cups cooked — grainy for Ambat Bhaath, or soft one-pot for Mudha Ambat Bhaath)',
      'Tamarind (large orange-sized ball — thick pulp)',
      'Roasted Fenugreek Seed (Methi) Powder (1 tsp)',
      'Dry Red Chillies (8–10)',
      'Gingelly / Sesame Oil (4 tbsp)',
      'Mustard Seeds, Chana Dal & Urad Dal (1 tsp each)',
      'Turmeric (1/2 tsp), Hing (1/2 tsp) & Salt (Lenu)'
    ],
    processSteps: [
      'Extract 1/2 cup of thick, concentrated tamarind pulp without excess water.',
      'Heat 4 tbsp sesame oil in a heavy pan; splutter mustard seeds, chana dal, urad dal, broken dry red chillies, grated ginger (optional), coconut slivers, curry leaves, and 1/2 tsp hing.',
      'Pour in the thick tamarind pulp with turmeric and salt; simmer on low flame until dark and oil separates from the sides (Pulikachal).',
      'Sprinkle 1 tsp freshly roasted fenugreek (methi) powder, stir well, and turn off the heat.',
      'Fold into cooled grainy steamed rice (for Ambat Bhaath) or soft warm rice (for Mudha Ambat Bhaath) and rest 30 minutes.'
    ]
  },
  {
    id: 'mudha-pongal',
    youtubeUrl: 'https://www.youtube.com/watch?v=5IfOVAZboes',
    webUrl: 'https://www.palkar.org/recipes/',
    name: 'Mudha Pongal (with Milk & Ghee)',
    englishSubtitle: 'Velvety Madurai Sourashtra Ven Pongal Paired with Vangi Budith',
    sourceAttribution: 'Sourashtra Samayal YouTube / Palkar.org',
    category: 'Bhaath & Pongal (Rice Specialties)',
    dietaryType: 'Vegetarian',
    fridgeTriggers: ['Milk', 'Ginger', 'Curry Leaves'],
    pantryAdditives: [
      'Raw Rice (1 cup) & Moong Dal / Pasi Bela (1/3 cup)',
      'Ghee / Thup (3–4 tbsp)',
      'Whole Black Peppercorns (1 tsp) & Cumin Seeds (1 tsp)',
      'Cashews (10–12)',
      'Asafoetida (Hing) & Salt (Lenu)'
    ],
    processSteps: [
      'Wash 1 cup raw rice and 1/3 cup moong dal; pressure cook with 3 cups water, 1/2 cup fresh Milk (the signature Sourashtra touch for creaminess), and salt for 4 whistles.',
      'Lightly mash the hot rice-dal mixture while warm.',
      'Heat generous Ghee (Thup) in a pan; fry cashews until golden, then crackle whole black peppercorns, cumin seeds, minced ginger, hing, and curry leaves.',
      'Pour the sizzling ghee tempering over the mashed Mudha Pongal, mix well, and serve piping hot with Vangi Budith.'
    ]
  },
  {
    id: 'serki-bhaath-gullu-pongal',
    youtubeUrl: 'https://www.youtube.com/watch?v=TiTswoU0X5Y',
    webUrl: 'https://www.shalikuta.org/',
    name: 'Serki Bhaath & Gullu Pongal',
    englishSubtitle: 'Traditional Sourashtra Cottonseed-Milk / Jaggery Sweet Rice',
    sourceAttribution: 'Palkar.org / Shalikuta / Sourashtra Samayal',
    category: 'Bhaath & Pongal (Rice Specialties)',
    dietaryType: 'Vegetarian',
    fridgeTriggers: ['Milk', 'Coconut'],
    pantryAdditives: [
      'Raw Rice (1 cup) & Moong Dal (1/4 cup)',
      'Palm Jaggery / Karupatti or Gullu (1 cup, melted & strained)',
      'Cottonseed Milk / Paruthi Paal (2 cups — for Serki Bhaath) or Milk',
      'Ghee / Thup (3 tbsp)',
      'Cardamom Pods (3, crushed), Cashews & Raisins'
    ],
    processSteps: [
      'Simmer washed raw rice (and moong dal for Gullu Pongal) in milk/water (or Paruthi Paal cottonseed milk for Serki Bhaath) until soft and creamy.',
      'Melt palm jaggery (Karupatti) or regular jaggery (Gullu) with a splash of water, strain out impurities, and pour into the cooked rice.',
      'Simmer on low flame with crushed cardamom until thick and glossy.',
      'Fry finely chopped coconut bits, cashews, and raisins in Ghee (Thup) until golden and fold into the sweet pongal.'
    ]
  },
  {
    id: 'limbu-thoop-mhuri-pongal',
    youtubeUrl: 'https://www.youtube.com/watch?v=7zY526OUAsM',
    webUrl: 'https://sugi-writes.blogspot.com/search/label/Sourashtra%20Recipes',
    name: 'Limbu Pongal, Thoop Pongal & Mhuri Pongal',
    englishSubtitle: 'Madurai Sourashtra Lemon Rice, Pepper-Ghee "Love Birds" Rice & Mustard Rice',
    sourceAttribution: 'Sugi Cooks / Palkar.org',
    category: 'Bhaath & Pongal (Rice Specialties)',
    dietaryType: 'Vegetarian',
    fridgeTriggers: ['Lemon', 'Green Chilli', 'Ginger', 'Coconut', 'Curry Leaves', 'Coriander'],
    pantryAdditives: [
      'Cooked Raw Rice (2 cups)',
      'Mustard Seeds / Mhuri (1 tbsp)',
      'Chana Dal, Urad Dal & Peanuts (1 tbsp each)',
      'Black Pepper & Cumin (for Thoop Pongal)',
      'Turmeric, Hing, Gingelly Oil / Ghee & Salt (Lenu)'
    ],
    processSteps: [
      'For Limbu Pongal: Temper mustard, chana dal, urad dal, peanuts, ginger, green chillies, curry leaves, hing, and turmeric in gingelly oil; toss with cooled rice and fresh lemon juice.',
      'For Thoop Pongal ("Love Birds Rice" paired with Limbu Pongal): Temper crushed black pepper, cumin seeds, cashews, and curry leaves in pure Ghee (Thup) and toss with warm salted rice.',
      'For Mhuri Pongal: Grind 1 tsp raw mustard seeds, 2 green chillies, and 1 tbsp coconut into a paste; sauté briefly in oil with urad/chana dal tempering and fold into rice.'
    ]
  },
  {
    id: 'sengu-vangi-batata-sambar',
    youtubeUrl: 'https://www.youtube.com/watch?v=i1Q3DzBMum4',
    webUrl: 'https://www.palkar.org/recipes/',
    name: 'Sengu-Vangi-Batata Sambar',
    englishSubtitle: 'Madurai Sourashtra Drumstick, Brinjal & Potato Sambar',
    sourceAttribution: 'Madurai Sourashtra Home Kitchens',
    category: 'Sambar (Lentil Stews)',
    dietaryType: 'Vegetarian',
    fridgeTriggers: ['Drumstick', 'Brinjal', 'Potato', 'Tomato', 'Onion', 'Curry Leaves', 'Coriander'],
    pantryAdditives: [
      'Toor Dal / Tuvaram Bela (3/4 cup, pressure cooked)',
      'Sambar Bhurko (2 tbsp)',
      'Tamarind (small lime size)',
      'Mustard Seeds, Cumin, Fenugreek & Hing',
      'Oil / Ghee & Salt (Lenu)'
    ],
    bhurkoUsed: 'Sambar Bhurko',
    processSteps: [
      'Pressure cook Toor Dal with turmeric and a drop of oil until soft and mash well.',
      'Boil drumstick pieces (Sengu), quartered brinjals (Vangi), cubed potatoes (Batata), shallots, and tomatoes in water with turmeric and salt.',
      'Add tamarind extract and 2 tbsp Sourashtra Sambar Bhurko; boil for 6–8 minutes.',
      'Stir in mashed Toor Dal, simmer 5 minutes, and finish with a mustard, cumin, fenugreek, hing, and curry leaf tempering in ghee/oil.'
    ]
  },
  {
    id: 'pangarapaan-nalar-bhairi',
    youtubeUrl: 'https://www.youtube.com/watch?v=48-yqurWwzk',
    webUrl: 'https://www.palkar.org/recipes/pangarapaan-bhairi/',
    name: 'Pangarapaan Bhairi & Nalar Bhairi',
    englishSubtitle: 'Madurai Street-Style Herbal Greens Vadai & Coconut Rice Fritters',
    sourceAttribution: 'Palkar.org / The Hindu Madurai Food Archives / YouTube',
    category: 'Bhairi & Appam (Fritters & Tiffin)',
    dietaryType: 'Vegetarian',
    fridgeTriggers: ['Spinach', 'Greens', 'Moringa', 'Coconut', 'Curry Leaves'],
    pantryAdditives: [
      'Idli Rice / Parboiled Rice (1 cup, soaked 4 hrs)',
      'Urad Dal (1 tbsp, soaked with rice)',
      'Black Peppercorns (1.5 tsp) & Cumin Seeds (1 tsp)',
      'Rice Flour (1–2 tbsp, for binding)',
      'Chenna Bhurko (Roasted Gram Podi, for serving)',
      'Oil (for frying) & Salt (Lenu)'
    ],
    bhurkoUsed: 'Served hot with Chenna Bhurko (Pottukadalai Podi)',
    processSteps: [
      'Soak 1 cup idli rice and 1 tbsp urad dal for 4 hours; drain.',
      'Grind the rice and dal with 1.5 tsp black peppercorns, 1 tsp cumin seeds, and salt using minimal water into a thick dough.',
      'For Pangarapaan Bhairi: Fold in finely chopped Mullu Murungai (coral tree leaves), drumstick leaves, or spinach. (For Nalar Bhairi: grind fresh grated coconut into the rice batter).',
      'Pat small balls on a wet cloth/plastic sheet into thin discs and deep-fry in medium-hot oil until puffed and crisp. Serve hot with Chenna Bhurko!'
    ]
  },
  {
    id: 'loni-karupatti-appam',
    youtubeUrl: 'https://www.youtube.com/watch?v=J8rbxOK7DAs',
    webUrl: 'https://www.palkar.org/recipes/',
    name: 'Loni Appam (Madurai Karupatti Appam)',
    englishSubtitle: 'Soft Fermented Rice & Palm Jaggery Sweet Appam in Ghee',
    sourceAttribution: 'Madurai Sourashtra Street Food / YouTube',
    category: 'Bhairi & Appam (Fritters & Tiffin)',
    dietaryType: 'Vegetarian',
    fridgeTriggers: ['Butter', 'Milk'],
    pantryAdditives: [
      'Raw Rice (1 cup) & Parboiled Idli Rice (1 cup)',
      'Urad Dal (3 tbsp) & Fenugreek Seeds (1/2 tsp)',
      'Palm Jaggery / Karupatti (1 cup, powdered)',
      'Cardamom & Dry Ginger Powder (1/2 tsp)',
      'Ghee or Butter (Loni) & Salt (pinch)'
    ],
    processSteps: [
      'Soak raw rice, parboiled rice, urad dal, and fenugreek seeds for 4–5 hours; grind smooth with a handful of cooked rice and ferment for 6–8 hours.',
      'Melt 1 cup powdered palm jaggery (Karupatti) in 1/4 cup water, strain, cool slightly, and fold into the fermented batter with cardamom and dry ginger powder.',
      'Pour a ladleful into a hot iron appam pan (or tawa) drizzled generously with butter (Loni) or ghee, cover, and cook on low heat until spongy and honeycomb-textured.'
    ]
  },
  {
    id: 'polte-chaino',
    youtubeUrl: 'https://www.youtube.com/watch?v=7434-2h3eKg',
    webUrl: 'https://sugi-writes.blogspot.com/search/label/Sourashtra%20Recipes',
    name: 'Sourashtra Polte Chaino (Mutton Uppu Kari)',
    englishSubtitle: 'Oil-Free / Low-Oil Pepper-Cumin Mutton Roast with Crunchy Coconut Bits',
    sourceAttribution: 'Sugi Cooks (SomethingDifferent, FOR ALL) YouTube',
    category: 'Non-Veg Ounty, Chaino & Kodhi',
    dietaryType: 'Non-Veg',
    fridgeTriggers: ['Mutton', 'Goat', 'Lamb', 'Coconut', 'Onion', 'Curry Leaves'],
    pantryAdditives: [
      'Dry Red Chillies (6–8, broken)',
      'Cumin Seeds / Jeera (1.5 tsp)',
      'Black Pepper Powder (1.25 tsp)',
      'Gingelly / Sesame Oil (1–2 tbsp, optional — cooks in mutton fat)',
      'Salt (Lenu)'
    ],
    processSteps: [
      'Cut 500g Mutton (Chaino / Mansa) into bite-sized pieces; slice 1/2 cup fresh coconut into thin bite-sized bits and slice 10 small shallots.',
      'In a pressure cooker, combine washed mutton, sliced shallots, broken dry red chillies, 1.5 tsp cumin seeds, coconut bits, curry leaves, salt, and 1 cup water.',
      'Pressure cook for 5 whistles until mutton is tender and the coconut bits absorb the savory mutton juices.',
      'Open the cooker and simmer on medium-high flame until all moisture evaporates and the mutton roasts in its own rendered fat.',
      'Toss in 1.25 tsp freshly crushed black pepper powder and fresh curry leaves; roast for 2 minutes and serve with Ambat Bhaath or Joman Pilchar.'
    ]
  },
  {
    id: 'chaino-kolkar',
    youtubeUrl: 'https://www.youtube.com/watch?v=J1FI_2w4Mb0',
    webUrl: 'https://sugi-writes.blogspot.com/search/label/Sourashtra%20Recipes',
    name: 'Chaino Kolkar (Madurai Sourashtra Mutton Ounty)',
    englishSubtitle: 'Traditional Bone-In Mutton Gravy with Ounty Bhurko & Sesame Oil',
    sourceAttribution: 'Sugi Cooks / Madurai Sourashtra Veetu Samayal',
    category: 'Non-Veg Ounty, Chaino & Kodhi',
    dietaryType: 'Non-Veg',
    fridgeTriggers: ['Mutton', 'Goat', 'Onion', 'Tomato', 'Ginger', 'Garlic', 'Coconut', 'Curry Leaves', 'Coriander'],
    pantryAdditives: [
      'Ounty Bhurko (3 tbsp)',
      'Fennel Seeds / Sombu (1 tsp) & Cumin Seeds (1 tsp)',
      'Black Peppercorns (1 tsp)',
      'Cinnamon & Cloves',
      'Gingelly / Sesame Oil (3 tbsp)',
      'Turmeric & Salt (Lenu)'
    ],
    bhurkoUsed: 'Ounty Bhurko',
    processSteps: [
      'Pressure cook 500g bone-in Mutton with turmeric, ginger-garlic paste, salt, and 1.5 cups water for 5–6 whistles.',
      'Heat 3 tbsp gingelly oil in a heavy pot; temper fennel seeds, cinnamon, cloves, and curry leaves.',
      'Sauté 15 chopped shallots, 8 crushed garlic cloves, ginger-garlic paste, and 2 chopped tomatoes until mushy.',
      'Add 3 tbsp Sourashtra Ounty Bhurko (and 2 tbsp ground coconut-fennel-pepper paste if desired) along with the cooked mutton and bone stock.',
      'Simmer on low flame for 12–15 minutes until oil separates into a rich, aromatic Chaino Kolkar.'
    ]
  },
  {
    id: 'sugi-pilchar-bhurko-chicken-varuval',
    youtubeUrl: 'https://www.youtube.com/watch?v=HKsGBBz-Arc',
    webUrl: 'https://sugi-writes.blogspot.com/2015/07/chicken-varuval-with-rasam-powder.html',
    name: 'Pilchar Bhurko Koli Varuval (Rasam Powder Chicken Roast)',
    englishSubtitle: "Sugi Cooks' Grandmother-Style Curd & Pilchar Bhurko Dry Chicken Roast",
    sourceAttribution: 'Sugi Cooks / Cooking Simplified Blog & YouTube',
    category: 'Non-Veg Ounty, Chaino & Kodhi',
    dietaryType: 'Non-Veg',
    fridgeTriggers: ['Chicken', 'Curd', 'Yogurt', 'Onion', 'Ginger', 'Garlic', 'Green Chilli', 'Curry Leaves'],
    pantryAdditives: [
      'Pilchar Bhurko / Sourashtra Rasam Powder (2 tbsp)',
      'Gingelly / Sesame Oil (2 tbsp)',
      'Turmeric Powder (1/4 tsp)',
      'Salt (Lenu)'
    ],
    bhurkoUsed: 'Pilchar Bhurko (used as the primary pepper-cumin-chilli marinade!)',
    processSteps: [
      'Marinate 250g–500g Chicken thigh pieces with 1–2 tbsp thick Curd (Dhi), 2 tbsp Sourashtra Pilchar Bhurko (rasam powder), and salt for 15–20 minutes.',
      'Heat 2 tbsp sesame oil in a kadai; fry 1 large thinly sliced onion until golden brown.',
      'Stir in 1 tsp freshly grated ginger-garlic paste, 3 slit green chillies, and generous curry leaves; sauté for 1 minute.',
      'Add the marinated chicken with 1/4 cup water; toss on high flame for 2 minutes.',
      'Cover and cook on low-medium flame for 18–20 minutes until the chicken is tender, oil separates, and the Pilchar Bhurko forms a dark, peppery roast coating.'
    ]
  },
  {
    id: 'jaleela-koli-ounty',
    youtubeUrl: 'https://www.youtube.com/watch?v=juhH5lr44Tc',
    webUrl: 'https://jaleelacooking.blogspot.com/search?q=saurashtra+chicken',
    name: 'Saurashtra Koli Ounty (Pepper & Poppy Seed Chicken Gravy)',
    englishSubtitle: 'Traditional Madurai Sourashtra Pepper-Cumin-Khus Khus Chicken Curry',
    sourceAttribution: 'Cook Book Jaleela',
    category: 'Non-Veg Ounty, Chaino & Kodhi',
    dietaryType: 'Non-Veg',
    fridgeTriggers: ['Chicken', 'Onion', 'Tomato', 'Garlic', 'Curry Leaves', 'Coriander'],
    pantryAdditives: [
      'Poppy Seeds / Khus Khus (1 tbsp)',
      'Whole Black Peppercorns (1 tsp) & Cumin Seeds (1 tsp)',
      'Cloves (4)',
      'Mustard Seeds (1 tsp)',
      'Turmeric Powder & Cooking Oil',
      'Salt (Lenu)'
    ],
    processSteps: [
      'Grind 1 tbsp poppy seeds (khus khus), 1 tsp whole black pepper, 1 tsp cumin seeds, 4 cloves, and 5 garlic pods with a splash of water into a smooth white-peppery masala paste.',
      'Heat oil in a wide vessel; splutter 1 tsp mustard seeds, then sauté curry leaves, 2 chopped onions, and 1 chopped tomato until soft.',
      'Add cleaned bone-in Chicken pieces, turmeric, and salt; sear on low heat for 5 minutes.',
      'Stir in the ground poppy-pepper-garlic paste with 1.5 cups warm water; cover and simmer on low flame for 15 minutes until cooked. Garnish with coriander—traditionally prized as a soothing cold & throat remedy.'
    ]
  },
  {
    id: 'meen-karuvadu-kodhi',
    youtubeUrl: 'https://www.youtube.com/watch?v=CHC1Vv5cZPQ',
    webUrl: 'https://jaleelacooking.blogspot.com/search?q=saurashtra+fish',
    name: 'Madurai Sourashtra Meen / Karuvadu Kodhi (Fish Ounty)',
    englishSubtitle: 'Tangy Tamarind, Shallot & Whole Garlic Fish / Dry Fish Curry',
    sourceAttribution: 'Sourashtra Samayal YouTube / Cook Book Jaleela',
    category: 'Non-Veg Ounty, Chaino & Kodhi',
    dietaryType: 'Non-Veg',
    fridgeTriggers: ['Fish', 'Onion', 'Tomato', 'Garlic', 'Curry Leaves', 'Coriander'],
    pantryAdditives: [
      'Tamarind (lemon-sized ball — 1.5 cups juice)',
      'Ounty Bhurko (3 tsp) & Coriander Powder (1 tsp)',
      'Gingelly / Sesame Oil (4 tbsp)',
      'Mustard Seeds (1/2 tsp), Cumin (1/2 tsp) & Fenugreek / Methi (1/4 tsp)',
      'Turmeric Powder & Salt (Lenu)'
    ],
    bhurkoUsed: 'Ounty Bhurko',
    processSteps: [
      'Clean 500g fresh Fish steaks (or soak 100g Karuvadu dry fish in warm water). Extract 1.5 cups tamarind juice and mix with 3 tsp Ounty Bhurko and turmeric.',
      'Heat 4 tbsp gingelly oil in a clay pot or pan; temper mustard seeds, cumin, and fenugreek seeds (Methi) with fresh curry leaves.',
      'Sauté 12–15 peeled shallots and 10 whole garlic cloves until golden, then cook 2 chopped tomatoes until pulpy.',
      'Pour in the spiced tamarind mixture and boil for 10 minutes until the raw smell disappears and sesame oil floats.',
      'Gently slide in the fish pieces and simmer on low heat for 5 minutes until flaky. Garnish with coriander.'
    ]
  },
  {
    id: 'anda-ounty',
    youtubeUrl: 'https://www.youtube.com/watch?v=XyS4XovNc0g',
    webUrl: 'https://sugi-writes.blogspot.com/search/label/Sourashtra%20Recipes',
    name: 'Sourashtra Anda Ounty (Muttai Ounty)',
    englishSubtitle: 'Buddy Recipes Style Boiled Egg Curry with Ounty Bhurko & Fennel-Pepper Paste',
    sourceAttribution: 'Buddy Recipes YouTube / Sugi Cooks',
    category: 'Non-Veg Ounty, Chaino & Kodhi',
    dietaryType: 'Eggitarian',
    fridgeTriggers: ['Egg', 'Eggs', 'Onion', 'Tomato', 'Ginger', 'Garlic', 'Green Chilli', 'Coconut', 'Curry Leaves', 'Coriander'],
    pantryAdditives: [
      'Ounty Bhurko (2 tbsp)',
      'Fennel Seeds / Sombu (1 tsp) & Cumin Seeds (1/2 tsp)',
      'Black Peppercorns (1/2 tsp)',
      'Mustard Seeds (1/2 tsp)',
      'Turmeric Powder, Oil & Salt (Lenu)'
    ],
    bhurkoUsed: 'Ounty Bhurko',
    processSteps: [
      'Hard-boil 4–6 eggs (Anda), peel, and make shallow slits on the whites so the Ounty gravy penetrates.',
      'Grind 2 tbsp grated coconut, 1/2 tsp fennel seeds, 1/2 tsp cumin, 1/2 tsp black pepper, and 3 garlic cloves into a smooth paste.',
      'Heat oil in a kadai; splutter mustard seeds, 1/2 tsp fennel seeds, and curry leaves, then sauté 2 finely chopped onions, slit green chillies, and 1 tsp ginger-garlic paste.',
      'Add 2 chopped tomatoes, turmeric, salt, and 2 tbsp Ounty Bhurko; cook until oil separates, then stir in the ground coconut-fennel paste and 1.5 cups water.',
      'Simmer for 6–8 minutes, nestle the slit boiled eggs into the bubbling gravy for 4 minutes, and finish with fresh coriander.'
    ]
  },
  {
    "id": "yt-cH4TboeFnKM",
    "name": "போதும்னு சொல்ல வாய் வராது",
    "englishSubtitle": "போதும்னு சொல்ல வாய் வராது | Madurai Famous Temple Puliyodharai Recipe |Chef Deena's Kitchen",
    "sourceAttribution": "Chef Deena’s Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=cH4TboeFnKM",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Annapoorani Caters- Madurai Mr. Vijay : 8428463331. Puliyodharai Tamarind - 1 kg Raw Rice - 1.5 kg Curry Leaves - As ...",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Curry Leaves) by washing, chopping, and measuring as shown by Chef Deena’s Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Chef Deena’s Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-RF8tlVNb2W0",
    "name": "சௌராஷ்ட்ரிய மக்களின் பாரம்பரிய உணவுகள்",
    "englishSubtitle": "சௌராஷ்ட்ரிய மக்களின் பாரம்பரிய உணவுகள் | Madurai Ven Pongal | CDK 1789 |Chef Deena's Kitchen",
    "sourceAttribution": "Chef Deena’s Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=RF8tlVNb2W0",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: The study of native or traditional recipes often involves examining regional ingredients, cooking techniques, and distinctive flavor ...",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Chef Deena’s Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Chef Deena’s Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-S0BviAwMSHU",
    "name": "MADURAI SPECIAL Veg Eeral Masala \" KAJALI AMBAT \" Sourashtra Dish in Tamil",
    "englishSubtitle": "MADURAI SPECIAL Veg Eeral Masala \" KAJALI AMBAT \" Sourashtra Dish in Tamil | Chef Deena's Kitchen",
    "sourceAttribution": "Chef Deena’s Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=S0BviAwMSHU",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ambat & Pitla (Rich Curries)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Veg Eeral Masala Good day and welcome. We are pleased to present a vegetarian dish that offers the rich, savory texture typically ...",
      "Toor Dal (Tuvaram Bela) or Chana Dal (Harbara Bela — 1/2 cup)",
      "Ounty Bhurko or Sambar Bhurko (1.5–2 tbsp)",
      "Tamarind (small gooseberry size), Turmeric & Hing",
      "Mustard Seeds, Urad Dal & Cooking Oil",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko / Sambar Bhurko",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Chef Deena’s Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Ounty Bhurko or Sambar Bhurko (1.5–2 tbsp); Tamarind (small gooseberry size), Turmeric & Hing; Mustard Seeds, Urad Dal & Cooking Oil; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko / Sambar Bhurko) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Chef Deena’s Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-P0Vmioxij28",
    "name": "தாத்தா பாட்டி காலத்து செய்முறை Saurashtra STYLE CHAINA POLDAYO",
    "englishSubtitle": "தாத்தா பாட்டி காலத்து செய்முறை Saurashtra STYLE CHAINA POLDAYO | Mutton Sukka | Chef Deena's Kitchen",
    "sourceAttribution": "Chef Deena’s Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=P0Vmioxij28",
    "webUrl": "https://jaleelacooking.blogspot.com/search?q=saurashtra",
    "category": "Non-Veg Ounty, Chaino & Kodhi",
    "dietaryType": "Non-Veg",
    "fridgeTriggers": [
      "Mutton",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Saurashtrian style Madurai Mutton Sukka Craving an authentic taste of Madurai? Look no further! This video reveals the secrets to ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Mutton, Curry Leaves) by washing, chopping, and measuring as shown by Chef Deena’s Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Chef Deena’s Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-i6qHdvVFX4s",
    "name": "Madurai’s Famous Sourashtra Street Food! 🇮🇳 11 Varieties of Authentic Homemade Rice Every Day",
    "englishSubtitle": "Madurai’s Famous Sourashtra Street Food! 🇮🇳 11 Varieties of Authentic Homemade Rice Every Day",
    "sourceAttribution": "AK Uncut (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=i6qHdvVFX4s",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by AK Uncut.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by AK Uncut via the YouTube link above!"
    ]
  },
  {
    "id": "yt-MHqhf3yErEY",
    "name": "Madurai sourashtra spl. Marriage brinjal chutney",
    "englishSubtitle": "Madurai sourashtra spl. Marriage brinjal chutney/thokku",
    "sourceAttribution": "3am kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=MHqhf3yErEY",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Budith, Losto & Polte (Chutneys/Masiyal)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Brinjal",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8)",
      "Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp)",
      "Mustard Seeds, Urad Dal & Gingelly Oil (for tempering)",
      "Rock Salt / Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Brinjal, Curry Leaves) by washing, chopping, and measuring as shown by 3am kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8); Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp); Mustard Seeds, Urad Dal & Gingelly Oil (for tempering); Rock Salt / Salt (Lenu).",
      "Cook or roast the main fridge ingredients with dry red chillies, tamarind, hing, and lentil additives until tender, then stone-grind or mash coarsely with a wooden mathu.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by 3am kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-_WKIjM7-knw",
    "name": "Lemon Pickle - Madurai Sourashtra Style 🍋🍋 #nooil #pickle #lemon #madurai #sourashtra #palkar",
    "englishSubtitle": "Lemon Pickle - Madurai Sourashtra Style 🍋🍋 #nooil #pickle #lemon #madurai #sourashtra #palkar",
    "sourceAttribution": "3am kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=_WKIjM7-knw",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Budith, Losto & Polte (Chutneys/Masiyal)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Lemon",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8)",
      "Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp)",
      "Mustard Seeds, Urad Dal & Gingelly Oil (for tempering)",
      "Rock Salt / Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Lemon, Curry Leaves) by washing, chopping, and measuring as shown by 3am kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8); Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp); Mustard Seeds, Urad Dal & Gingelly Oil (for tempering); Rock Salt / Salt (Lenu).",
      "Cook or roast the main fridge ingredients with dry red chillies, tamarind, hing, and lentil additives until tender, then stone-grind or mash coarsely with a wooden mathu.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by 3am kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-7an3SSvAJuE",
    "name": "Madurai Sourashtra Kulambu Podi 😋",
    "englishSubtitle": "Madurai Sourashtra Kulambu Podi 😋",
    "sourceAttribution": "sridevi.lapasi (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=7an3SSvAJuE",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Madurai Sourashtra Kulambu Podi. Ingredients: Half KG Malli Vidhai, 125gm Vatral, Veesam Padi arisi, 300gm Karupu Ullundu, ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by sridevi.lapasi.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by sridevi.lapasi via the YouTube link above!"
    ]
  },
  {
    "id": "yt-gbExWbozBjQ",
    "name": "Karuppatti appam (sourashtra)",
    "englishSubtitle": "Karuppatti appam (sourashtra)",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=gbExWbozBjQ",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Milk",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Karuppatti 1 Boiled rice or raw rice 1 cup Idli rice 1 cup Urad dhal 1 tsp Fenugreek little bit Ghee or butter.",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Milk, Curry Leaves) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-cZ900LbIcjY",
    "name": "More Kulambu",
    "englishSubtitle": "More Kulambu | Hema's sourashtra samayal in Tamil",
    "sourceAttribution": "Hema's Sourashtra Samayal (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=cZ900LbIcjY",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Milk",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Home made Sourashtra samayal in Tamil. A recipe on More Kulambu preparation.",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Milk, Curry Leaves) by washing, chopping, and measuring as shown by Hema's Sourashtra Samayal.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Hema's Sourashtra Samayal via the YouTube link above!"
    ]
  },
  {
    "id": "yt-pZKEsCFDvfQ",
    "name": "Thakkali charu",
    "englishSubtitle": "Thakkali charu | Hema's sourashtra samayal in Tamil",
    "sourceAttribution": "Hema's Sourashtra Samayal (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=pZKEsCFDvfQ",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Pilchar & Charu (Rasam/Broths)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Home made Sourashtra samayal in Tamil. A recipe on Thakkali charu preparation.",
      "Pilchar Bhurko / Sourashtra Rasam Podi (1.5–2 tbsp)",
      "Tamarind Extract (Ambat) & Cooked Toor Dal Water",
      "Black Pepper (Miri), Cumin Seeds (Jeera) & Hing",
      "Mustard Seeds & Ghee (Thup — 1 tsp)",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Curry Leaves) by washing, chopping, and measuring as shown by Hema's Sourashtra Samayal.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind Extract (Ambat) & Cooked Toor Dal Water; Black Pepper (Miri), Cumin Seeds (Jeera) & Hing; Mustard Seeds & Ghee (Thup — 1 tsp); Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Hema's Sourashtra Samayal via the YouTube link above!"
    ]
  },
  {
    "id": "yt-YVcuHPmCrZk",
    "name": "Keera charu",
    "englishSubtitle": "Keera charu | Hema's sourashtra samayal in Tamil",
    "sourceAttribution": "Hema's Sourashtra Samayal (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=YVcuHPmCrZk",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Pilchar & Charu (Rasam/Broths)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Spinach",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Home made Sourashtra samayal in Tamil. A recipe on Keera charu preparation.",
      "Pilchar Bhurko / Sourashtra Rasam Podi (1.5–2 tbsp)",
      "Tamarind Extract (Ambat) & Cooked Toor Dal Water",
      "Black Pepper (Miri), Cumin Seeds (Jeera) & Hing",
      "Mustard Seeds & Ghee (Thup — 1 tsp)",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Spinach, Curry Leaves) by washing, chopping, and measuring as shown by Hema's Sourashtra Samayal.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind Extract (Ambat) & Cooked Toor Dal Water; Black Pepper (Miri), Cumin Seeds (Jeera) & Hing; Mustard Seeds & Ghee (Thup — 1 tsp); Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Hema's Sourashtra Samayal via the YouTube link above!"
    ]
  },
  {
    "id": "yt-KGjMugM6mPg",
    "name": "Rasam",
    "englishSubtitle": "Rasam||Joman pilchaar||How to make joman pilchaar in sourashtra||Sourashtra",
    "sourceAttribution": "Isha kitchen and lifestyle (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=KGjMugM6mPg",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Pilchar & Charu (Rasam/Broths)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Hii guys I think all are doing wells hole do you learn something from our videos . . . Ingredients Tomato 2 Curry leaves corandier ...",
      "Pilchar Bhurko / Sourashtra Rasam Podi (1.5–2 tbsp)",
      "Tamarind Extract (Ambat) & Cooked Toor Dal Water",
      "Black Pepper (Miri), Cumin Seeds (Jeera) & Hing",
      "Mustard Seeds & Ghee (Thup — 1 tsp)",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Curry Leaves) by washing, chopping, and measuring as shown by Isha kitchen and lifestyle.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind Extract (Ambat) & Cooked Toor Dal Water; Black Pepper (Miri), Cumin Seeds (Jeera) & Hing; Mustard Seeds & Ghee (Thup — 1 tsp); Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Isha kitchen and lifestyle via the YouTube link above!"
    ]
  },
  {
    "id": "yt-ii69smoPjq4",
    "name": "Sourashtra Tomato Rice Recipe",
    "englishSubtitle": "Sourashtra Tomato Rice Recipe | Tamaatar Pulao | தக்காளி சாதம் | Thakkali Pongal | Buddy Recipes",
    "sourceAttribution": "Buddy Recipes (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=ii69smoPjq4",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Sourashtra Tomato Rice | Tamaatar Pulao | தக்காளி சாதம் | Madurai Sourashtra Thakkali Pongal in Pressure Cooker ...",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Curry Leaves) by washing, chopping, and measuring as shown by Buddy Recipes.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Buddy Recipes via the YouTube link above!"
    ]
  },
  {
    "id": "yt-dMXkN0ecMmM",
    "name": "Alla chutni",
    "englishSubtitle": "Alla chutni/inji Chutni/ Ginger Chutni recipe 1 in Sourashtra",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=dMXkN0ecMmM",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Budith, Losto & Polte (Chutneys/Masiyal)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Ginger",
      "Curry Leaves",
      "Coriander",
      "Mint Leaves",
      "Gooseberry"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Curry leaves - 1 handful Coriander leaves - 1 handful Mint leaves - 1 handful Tamarind - 1 gooseberry size Ginger - 3 inches size ...",
      "Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8)",
      "Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp)",
      "Mustard Seeds, Urad Dal & Gingelly Oil (for tempering)",
      "Rock Salt / Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Ginger, Curry Leaves, Coriander, Mint Leaves, Gooseberry) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8); Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp); Mustard Seeds, Urad Dal & Gingelly Oil (for tempering); Rock Salt / Salt (Lenu).",
      "Cook or roast the main fridge ingredients with dry red chillies, tamarind, hing, and lentil additives until tender, then stone-grind or mash coarsely with a wooden mathu.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-SmLwNuBWMCw",
    "name": "Cauliflower Kulambu",
    "englishSubtitle": "Cauliflower Kulambu | Hema's sourashtra samayal in Tamil",
    "sourceAttribution": "Hema's Sourashtra Samayal (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=SmLwNuBWMCw",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Home made Sourashtra samayal in Tamil. A recipe on Cauliflower Kulambu preparation.",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Onion, Curry Leaves) by washing, chopping, and measuring as shown by Hema's Sourashtra Samayal.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Hema's Sourashtra Samayal via the YouTube link above!"
    ]
  },
  {
    "id": "yt-d0VeTZTPISo",
    "name": "Sourashtra Thovaiyal",
    "englishSubtitle": "Sourashtra Thovaiyal/Loshto | Hema's sourashtra samayal in Tamil",
    "sourceAttribution": "Hema's Sourashtra Samayal (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=d0VeTZTPISo",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Budith, Losto & Polte (Chutneys/Masiyal)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Mint Leaves",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: hematr3171 This is a quick and easy recipe of thovaiyal. In Sourashtra, this recipe is called \"Loshto\". The main ingredients are ...",
      "Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8)",
      "Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp)",
      "Mustard Seeds, Urad Dal & Gingelly Oil (for tempering)",
      "Rock Salt / Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Mint Leaves, Curry Leaves) by washing, chopping, and measuring as shown by Hema's Sourashtra Samayal.",
      "Gather the dry Madurai Sourashtra pantry additives: Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8); Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp); Mustard Seeds, Urad Dal & Gingelly Oil (for tempering); Rock Salt / Salt (Lenu).",
      "Cook or roast the main fridge ingredients with dry red chillies, tamarind, hing, and lentil additives until tender, then stone-grind or mash coarsely with a wooden mathu.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Hema's Sourashtra Samayal via the YouTube link above!"
    ]
  },
  {
    "id": "yt-VB7dtNtyRYw",
    "name": "Ambatbath ambat in sourashtra",
    "englishSubtitle": "Ambatbath ambat in sourashtra",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=VB7dtNtyRYw",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Tamarind- 100gm Red chili - 20 Oil - 150 ml Fenugreek powder - 1 tsp Asafoetida - 1 tsp Turmeric powder - 1/2 tsp Salt - 2 tsp ...",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-tMi2WMmEMH0",
    "name": "poulda Chaieno (Avittha Mutton)",
    "englishSubtitle": "poulda Chaieno (Avittha Mutton)",
    "sourceAttribution": "Yummy Sourashtra (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=tMi2WMmEMH0",
    "webUrl": "http://www.yummysourashtra.com/",
    "category": "Non-Veg Ounty, Chaino & Kodhi",
    "dietaryType": "Non-Veg",
    "fridgeTriggers": [
      "Milk",
      "Mutton",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: For more videos visit us at http://www.yummysourashtra.com.",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Milk, Mutton, Curry Leaves) by washing, chopping, and measuring as shown by Yummy Sourashtra.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Yummy Sourashtra via the YouTube link above!"
    ]
  },
  {
    "id": "yt-wTsmmpDNNeM",
    "name": "கென்னி பேஸ்",
    "englishSubtitle": "கென்னி பேஸ் | தேங்காய் பால் கஞ்சி | Coconut Milk Kanji | Recipe - 126",
    "sourceAttribution": "Traditional Sourashtra Kitchen (பாரம்பரிய முறை) (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=wTsmmpDNNeM",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Coconut",
      "Milk",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Coconut, Milk, Curry Leaves) by washing, chopping, and measuring as shown by Traditional Sourashtra Kitchen (பாரம்பரிய முறை).",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Traditional Sourashtra Kitchen (பாரம்பரிய முறை) via the YouTube link above!"
    ]
  },
  {
    "id": "yt-vz3ZD4nTsOc",
    "name": "Rasam Powder",
    "englishSubtitle": "Rasam Powder / Sourashtra Special Pilchaar Burko / With Measurements / Rasam Podi",
    "sourceAttribution": "Pooja Idols (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=vz3ZD4nTsOc",
    "webUrl": "https://www.sailajakitchen.org/search?q=sourashtra",
    "category": "Pilchar & Charu (Rasam/Broths)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Pilchar Bhurko / Sourashtra Rasam Podi (1.5–2 tbsp)",
      "Tamarind Extract (Ambat) & Cooked Toor Dal Water",
      "Black Pepper (Miri), Cumin Seeds (Jeera) & Hing",
      "Mustard Seeds & Ghee (Thup — 1 tsp)",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Pooja Idols.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind Extract (Ambat) & Cooked Toor Dal Water; Black Pepper (Miri), Cumin Seeds (Jeera) & Hing; Mustard Seeds & Ghee (Thup — 1 tsp); Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Pooja Idols via the YouTube link above!"
    ]
  },
  {
    "id": "yt-wlk8AtoZa7Y",
    "name": "Thakkali ounty in Sourashtra",
    "englishSubtitle": "Thakkali ounty in Sourashtra",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=wlk8AtoZa7Y",
    "webUrl": "https://www.sailajakitchen.org/search?q=sourashtra",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Green Chilli",
      "Curry Leaves",
      "Coriander"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Onion - 1 small Tomato - 4 Ounty Burko - 3 tsp Curry and coriander leaves - small amount Green chili - 2 small size Turmeric ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Green Chilli, Curry Leaves, Coriander) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-xbxwE09W8i8",
    "name": "Sourashtra Kulambu Podi",
    "englishSubtitle": "Sourashtra Kulambu Podi / Sourashtra Ounty Bhurko / Ounty Bhurko / Sourashtra Recipes",
    "sourceAttribution": "Sugi cooks - SomethingDifferent, FOR ALL (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=xbxwE09W8i8",
    "webUrl": "https://sugi-writes.blogspot.com/search/label/Sourashtra%20Recipes",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Sourashtra Kulambu Podi — the ubiquitous curry powder and the holy grail of Sourashtra cuisine! ❤️ This humble spice blend ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Curry Leaves) by washing, chopping, and measuring as shown by Sugi cooks - SomethingDifferent, FOR ALL.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Sugi cooks - SomethingDifferent, FOR ALL via the YouTube link above!"
    ]
  },
  {
    "id": "yt-Ze7sq_9WZuY",
    "name": "🌟 Paal Kolukattai Recipe 😍 Sevi",
    "englishSubtitle": "🌟 Paal Kolukattai Recipe 😍 Sevi/Doodhum Dhowlo/Paal Kolukattai without Coconut Milk/Sourashtra",
    "sourceAttribution": "Sugi cooks - SomethingDifferent, FOR ALL (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=Ze7sq_9WZuY",
    "webUrl": "https://sugi-writes.blogspot.com/search/label/Sourashtra%20Recipes",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Coconut",
      "Milk",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Coconut, Milk, Curry Leaves) by washing, chopping, and measuring as shown by Sugi cooks - SomethingDifferent, FOR ALL.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Sugi cooks - SomethingDifferent, FOR ALL via the YouTube link above!"
    ]
  },
  {
    "id": "yt-pM3CsN9W5Gw",
    "name": "🌟 Thengai Paal Kulambu",
    "englishSubtitle": "🌟 Thengai Paal Kulambu / Nalar Doodh Ounty 😍 / Recipe with Coconut Milk / Sourashtra Recipes",
    "sourceAttribution": "Sugi cooks - SomethingDifferent, FOR ALL (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=pM3CsN9W5Gw",
    "webUrl": "https://sugi-writes.blogspot.com/search/label/Sourashtra%20Recipes",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Curry Leaves",
      "Coconut",
      "Milk"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Healthy and tasty Coconut Milk Curry/Thengai Paal Kulambu for rice. Also goes well with idli/dosa/chapathi/idiyappam/appam.",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Curry Leaves, Coconut, Milk) by washing, chopping, and measuring as shown by Sugi cooks - SomethingDifferent, FOR ALL.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Sugi cooks - SomethingDifferent, FOR ALL via the YouTube link above!"
    ]
  },
  {
    "id": "yt-i9x_zuxB4xQ",
    "name": "🌟 Paruppu Thuvaiyal",
    "englishSubtitle": "🌟 Paruppu Thuvaiyal/Sourashtra Chenna Dal/Paruppu Chutney for Rice/Paruppu Thogayal/Thogayal Recipe",
    "sourceAttribution": "Sugi cooks - SomethingDifferent, FOR ALL (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=i9x_zuxB4xQ",
    "webUrl": "https://sugi-writes.blogspot.com/search/label/Sourashtra%20Recipes",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Coconut",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Instant paruppu thogayal recipe, ready in just 1 minute, which can be prepared with/without coconut. This style of paruppu ...",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Coconut, Curry Leaves) by washing, chopping, and measuring as shown by Sugi cooks - SomethingDifferent, FOR ALL.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Sugi cooks - SomethingDifferent, FOR ALL via the YouTube link above!"
    ]
  },
  {
    "id": "yt-bA7lU6MmX6M",
    "name": "🌟 Vendhaya Kuzhambu",
    "englishSubtitle": "🌟 Vendhaya Kuzhambu /Mithi Kolkar /Vendhaya Kulambu Recipe / Kulambu Recipes / Kulambu Varieties",
    "sourceAttribution": "Sugi cooks - SomethingDifferent, FOR ALL (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=bA7lU6MmX6M",
    "webUrl": "https://sugi-writes.blogspot.com/search/label/Sourashtra%20Recipes",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Traditional Vendhaya Kulambu! Healthy fenugreek seeds gravy! Sourashtra Mithi Kolgar!",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Sugi cooks - SomethingDifferent, FOR ALL.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Sugi cooks - SomethingDifferent, FOR ALL via the YouTube link above!"
    ]
  },
  {
    "id": "yt-7VBS54BabNo",
    "name": "Sourashtra Baltin Bhurko",
    "englishSubtitle": "Sourashtra Baltin Bhurko / Post Delivery Kulambu Podi / Sourashtra Kulambu Podi / Sourashtra Samayal",
    "sourceAttribution": "Sugi cooks - SomethingDifferent, FOR ALL (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=7VBS54BabNo",
    "webUrl": "https://sugi-writes.blogspot.com/search/label/Sourashtra%20Recipes",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Sourashtra Baltin Bhurko, a special post delivery curry powder prepared with 14 medicinal ingredients!",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Curry Leaves) by washing, chopping, and measuring as shown by Sugi cooks - SomethingDifferent, FOR ALL.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Sugi cooks - SomethingDifferent, FOR ALL via the YouTube link above!"
    ]
  },
  {
    "id": "yt-_1p-fNJoJNw",
    "name": "Neer Kolukattai Recipe",
    "englishSubtitle": "Neer Kolukattai Recipe/Sourashtra Panim Dhowlo/Thanni Kozhukattai Recipe/Sourashtra Recipes",
    "sourceAttribution": "Sugi cooks - SomethingDifferent, FOR ALL (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=_1p-fNJoJNw",
    "webUrl": "https://sugi-writes.blogspot.com/search/label/Sourashtra%20Recipes",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Sugi cooks - SomethingDifferent, FOR ALL.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Sugi cooks - SomethingDifferent, FOR ALL via the YouTube link above!"
    ]
  },
  {
    "id": "yt-tZkSHiaqteg",
    "name": "✨Tamarind Rice Recipe",
    "englishSubtitle": "✨Tamarind Rice Recipe /Ambad Bhath /Puli Sadam /Sourashtra Puliyodharai Recipe /Sourashtra Recipes",
    "sourceAttribution": "Sugi cooks - SomethingDifferent, FOR ALL (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=tZkSHiaqteg",
    "webUrl": "https://sugi-writes.blogspot.com/search/label/Sourashtra%20Recipes",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Sugi cooks - SomethingDifferent, FOR ALL.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Sugi cooks - SomethingDifferent, FOR ALL via the YouTube link above!"
    ]
  },
  {
    "id": "yt-hLTNczIjoPY",
    "name": "🌟 Kozhukattai Recipe",
    "englishSubtitle": "🌟 Kozhukattai Recipe/Sourashtra Dhowlo/Thengai Pooranam Kozhukattai Recipe/Soft Kozhukattai Recipe",
    "sourceAttribution": "Sugi cooks - SomethingDifferent, FOR ALL (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=hLTNczIjoPY",
    "webUrl": "https://sugi-writes.blogspot.com/search/label/Sourashtra%20Recipes",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Coconut",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Soft kozhukattai recipe, prepared traditional style, by grinding idli rice, also shaped without moulds. I always prefer to prepare ...",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Coconut, Curry Leaves) by washing, chopping, and measuring as shown by Sugi cooks - SomethingDifferent, FOR ALL.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Sugi cooks - SomethingDifferent, FOR ALL via the YouTube link above!"
    ]
  },
  {
    "id": "yt-akz_wjC36VI",
    "name": "Sourashtra Kharu Bhurko",
    "englishSubtitle": "Sourashtra Kharu Bhurko / Digestion Problem Solution / After Delivery Food for Mother / Sourashtra",
    "sourceAttribution": "Sugi cooks - SomethingDifferent, FOR ALL (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=akz_wjC36VI",
    "webUrl": "https://sugi-writes.blogspot.com/search/label/Sourashtra%20Recipes",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Sourashtra Khaaru Bhurko, a special post delivery digestion powder prepared with 11 medicinal ingredients!",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Sugi cooks - SomethingDifferent, FOR ALL.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Sugi cooks - SomethingDifferent, FOR ALL via the YouTube link above!"
    ]
  },
  {
    "id": "yt-xUKP3PmIcH0",
    "name": "Sourashtra Kachana Bela Kutkiri",
    "englishSubtitle": "Sourashtra Kachana Bela Kutkiri / Sourashtra Chana Dal / Simple Chana Dal Recipe / Paruppu Kadaiyal",
    "sourceAttribution": "Sugi cooks - SomethingDifferent, FOR ALL (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=xUKP3PmIcH0",
    "webUrl": "https://sugi-writes.blogspot.com/search/label/Sourashtra%20Recipes",
    "category": "Ambat & Pitla (Rich Curries)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: This is a simple to make chana dal recipe, a must in lunch menu of all Sourashtra feasts. It tastes best with any spicy kuzhambu ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Sugi cooks - SomethingDifferent, FOR ALL.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Sugi cooks - SomethingDifferent, FOR ALL via the YouTube link above!"
    ]
  },
  {
    "id": "yt-O_K96W8ciQ4",
    "name": "✨Thakkali Chutney",
    "englishSubtitle": "✨Thakkali Chutney/Sourashtra Kandha Chutney/Madurai Thanni Chutney/Tomato Chutney/Sourashtra Recipes",
    "sourceAttribution": "Sugi cooks - SomethingDifferent, FOR ALL (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=O_K96W8ciQ4",
    "webUrl": "https://sugi-writes.blogspot.com/search/label/Sourashtra%20Recipes",
    "category": "Budith, Losto & Polte (Chutneys/Masiyal)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8)",
      "Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp)",
      "Mustard Seeds, Urad Dal & Gingelly Oil (for tempering)",
      "Rock Salt / Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Sugi cooks - SomethingDifferent, FOR ALL.",
      "Gather the dry Madurai Sourashtra pantry additives: Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8); Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp); Mustard Seeds, Urad Dal & Gingelly Oil (for tempering); Rock Salt / Salt (Lenu).",
      "Cook or roast the main fridge ingredients with dry red chillies, tamarind, hing, and lentil additives until tender, then stone-grind or mash coarsely with a wooden mathu.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Sugi cooks - SomethingDifferent, FOR ALL via the YouTube link above!"
    ]
  },
  {
    "id": "yt-n79vRnUDSfE",
    "name": "Sourashtra Kuzhambu Podi",
    "englishSubtitle": "Sourashtra Kuzhambu Podi | Palkar Recipe |Avunti Bhurko | செளராஷ்டிரா குழம்பு பொடி | Buddy Recipes",
    "sourceAttribution": "Buddy Recipes (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=n79vRnUDSfE",
    "webUrl": "https://www.sailajakitchen.org/search?q=sourashtra",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Sourashtra's Kuzhambu Podi | Palkar Recipe |Avunti Bhurko | செளராஷ்டிரா குழம்பு பொடி | Buddy Recipes ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Buddy Recipes.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Buddy Recipes via the YouTube link above!"
    ]
  },
  {
    "id": "yt-qvkjSYe-jlk",
    "name": "Sourashtra Black Gram Coconut Curry",
    "englishSubtitle": "Sourashtra Black Gram Coconut Curry |Udith Nalar Ounty |சௌராஷ்டிரா கருப்பு உளுந்து தேங்காய் குழம்பு",
    "sourceAttribution": "Buddy Recipes (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=qvkjSYe-jlk",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Curry Leaves",
      "Coconut"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Sourashtra Black Urad dal Coconut Curry | Udith Nalar Ounty | சௌராஷ்டிரா கருப்பு உளுந்து ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Curry Leaves, Coconut) by washing, chopping, and measuring as shown by Buddy Recipes.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Buddy Recipes via the YouTube link above!"
    ]
  },
  {
    "id": "yt-zHsTohgWsqU",
    "name": "Sourashtra Traditional Rasam powder & Rasam Recipe",
    "englishSubtitle": "Sourashtra Traditional Rasam powder & Rasam Recipe | Pilchaar Bhurko & Pilchaar | Buddy Recipes",
    "sourceAttribution": "Buddy Recipes (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=zHsTohgWsqU",
    "webUrl": "https://www.sailajakitchen.org/search?q=sourashtra",
    "category": "Pilchar & Charu (Rasam/Broths)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Sourashtra Traditional Rasam powder & Rasam Recipe| Pilchaar Bhurko & Pilchaar | சௌராஷ்ட்ரா ரசம் பொடி ...",
      "Pilchar Bhurko / Sourashtra Rasam Podi (1.5–2 tbsp)",
      "Tamarind Extract (Ambat) & Cooked Toor Dal Water",
      "Black Pepper (Miri), Cumin Seeds (Jeera) & Hing",
      "Mustard Seeds & Ghee (Thup — 1 tsp)",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Buddy Recipes.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind Extract (Ambat) & Cooked Toor Dal Water; Black Pepper (Miri), Cumin Seeds (Jeera) & Hing; Mustard Seeds & Ghee (Thup — 1 tsp); Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Buddy Recipes via the YouTube link above!"
    ]
  },
  {
    "id": "yt--ClCTqnsyvA",
    "name": "Tomato Saar",
    "englishSubtitle": "Tomato Saar | Thakkali Chaaru | Sourashtra Thakkali Chaar | Palkar Recipe | Buddy Recipes",
    "sourceAttribution": "Buddy Recipes (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=-ClCTqnsyvA",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Pilchar & Charu (Rasam/Broths)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Thakkali Chaaru | Tomato Saar | Sourashtra Thakkali Chaar | Palkar Recipe | Buddy Recipes #ThakkaliChaaru #TomatoSaar ...",
      "Pilchar Bhurko / Sourashtra Rasam Podi (1.5–2 tbsp)",
      "Tamarind Extract (Ambat) & Cooked Toor Dal Water",
      "Black Pepper (Miri), Cumin Seeds (Jeera) & Hing",
      "Mustard Seeds & Ghee (Thup — 1 tsp)",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Curry Leaves) by washing, chopping, and measuring as shown by Buddy Recipes.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind Extract (Ambat) & Cooked Toor Dal Water; Black Pepper (Miri), Cumin Seeds (Jeera) & Hing; Mustard Seeds & Ghee (Thup — 1 tsp); Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Buddy Recipes via the YouTube link above!"
    ]
  },
  {
    "id": "yt-G8F-Zs00noY",
    "name": "Sourashtra Tomato Curry",
    "englishSubtitle": "Sourashtra Tomato Curry |Traditional Tomato Kulambu |தக்காளி குழம்பு |Thakkali Ounty | Buddy Recipes",
    "sourceAttribution": "Buddy Recipes (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=G8F-Zs00noY",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Sourashtra Tomato Curry Recipe | Traditional Tomato Kulambu | தக்காளி குழம்பு | Thakkali Ounty | Buddy ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Curry Leaves) by washing, chopping, and measuring as shown by Buddy Recipes.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Buddy Recipes via the YouTube link above!"
    ]
  },
  {
    "id": "yt-EYo82uAxg00",
    "name": "Puliyodharai",
    "englishSubtitle": "Puliyodharai/Sourashtra Ambad Bhath/Tamarind rice",
    "sourceAttribution": "Chitra Cooks (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=EYo82uAxg00",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Puliyodharai/Sourashtra Ambad Bhath || how to make tamarind rice Check out my blog page: ...",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Chitra Cooks.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Chitra Cooks via the YouTube link above!"
    ]
  },
  {
    "id": "yt-hFQUUgqxmUM",
    "name": "Paruppu Kulambu",
    "englishSubtitle": "Paruppu Kulambu / Sourashtra Bela Ounty / Kulambu Varieties / Kulambu Recipes / Sourashtra Recipes",
    "sourceAttribution": "Sugi cooks - SomethingDifferent, FOR ALL (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=hFQUUgqxmUM",
    "webUrl": "https://sugi-writes.blogspot.com/search/label/Sourashtra%20Recipes",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Paruppu Kulambu in Sourashtra style! A forgotten traditional recipe! Super tasty and wholesome with goodness of dal, vegetables ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Sugi cooks - SomethingDifferent, FOR ALL.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Sugi cooks - SomethingDifferent, FOR ALL via the YouTube link above!"
    ]
  },
  {
    "id": "yt-jl9I-4ts0Ws",
    "name": "Losan Kolkar",
    "englishSubtitle": "Losan Kolkar | No Onion No Tomato Poondu Kuzhambu | Sourashtra kuzhambu Recipe | Kolkar Recipe",
    "sourceAttribution": "Seasoned With Love (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=jl9I-4ts0Ws",
    "webUrl": "https://www.sailajakitchen.org/search?q=sourashtra",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Garlic",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Ingredients for Losan Kolkar/Poondu Kuzhmabu: For Tamarind Spice Mix: - Kuzhambu(Ounty) Podi(Burko) - 4 Tbsp - Salt to taste ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Garlic, Curry Leaves) by washing, chopping, and measuring as shown by Seasoned With Love.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Seasoned With Love via the YouTube link above!"
    ]
  },
  {
    "id": "yt-6i58yv7rGkc",
    "name": "Ounty Burko",
    "englishSubtitle": "Ounty Burko | Kuzhambu Podi | Sourashtra Kuzhambu Podi | Sourashtra Ounty Burko Recipe in mixer",
    "sourceAttribution": "Seasoned With Love (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=6i58yv7rGkc",
    "webUrl": "https://www.sailajakitchen.org/search?q=sourashtra",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Coriander",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Ingredients for Kuzhambu Podi/Ounty Burko: - Coriander Seeds - 100g ~ 1.5 Cups - Black Urad Dal - 50g ~ 1/4 Cup - Dry Red ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Coriander, Curry Leaves) by washing, chopping, and measuring as shown by Seasoned With Love.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Seasoned With Love via the YouTube link above!"
    ]
  },
  {
    "id": "yt-WjxsXee-yy8",
    "name": "Ounty Burko",
    "englishSubtitle": "Ounty Burko",
    "sourceAttribution": "Yummy Sourashtra (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=WjxsXee-yy8",
    "webUrl": "http://www.yummysourashtra.com/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Yummy Sourashtra.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Yummy Sourashtra via the YouTube link above!"
    ]
  },
  {
    "id": "yt-MYXGn8OiaJ0",
    "name": "Mutton ounty",
    "englishSubtitle": "Mutton ounty/Chainaa ounty simple method",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=MYXGn8OiaJ0",
    "webUrl": "https://jaleelacooking.blogspot.com/search?q=saurashtra",
    "category": "Non-Veg Ounty, Chaino & Kodhi",
    "dietaryType": "Non-Veg",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Mutton",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Mutton 1/4 kg Onion 1 small Tomato 2 numbers Ounty powder 2 tsp Salt to taste.",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Mutton, Curry Leaves) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-zjHyB00HSSA",
    "name": "Dheim Ounty (sourashtra)",
    "englishSubtitle": "Dheim Ounty (sourashtra)",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=zjHyB00HSSA",
    "webUrl": "https://www.sailajakitchen.org/search?q=sourashtra",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Milk",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Onion 1/4 Tomato 1/2(small) Red chili 2 Curd 75ml Whole milk 50 ml Dhein ounty burko 1 tsp.",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Milk, Curry Leaves) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-Rg9pydIdDkQ",
    "name": "Sourashtra Ambat Bhath",
    "englishSubtitle": "Sourashtra Ambat Bhath | Sourashtra Puliyodharai | சௌராஷ்டிரா முறை புளியோதரை",
    "sourceAttribution": "VJ's Dream Samayal (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=Rg9pydIdDkQ",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Sourashtra Ambat Bhath | Sourashtra Puliyodharai | சௌராஷ்டிரா முறை புளியோதரை.",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by VJ's Dream Samayal.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by VJ's Dream Samayal via the YouTube link above!"
    ]
  },
  {
    "id": "yt-FeDLZuhwxyY",
    "name": "Muddha Ambatbath",
    "englishSubtitle": "Muddha Ambatbath",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=FeDLZuhwxyY",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Rice 1 cup Water 4 cup Ambatbath paste 1.25 small houko Red chili 4 Peanut and channa dhal.",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-La_2eNPD7EY",
    "name": "Ambad Bhaath",
    "englishSubtitle": "Ambad Bhaath",
    "sourceAttribution": "Yummy Sourashtra (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=La_2eNPD7EY",
    "webUrl": "http://www.yummysourashtra.com/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Yummy Sourashtra.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Yummy Sourashtra via the YouTube link above!"
    ]
  },
  {
    "id": "yt-bRvIznNUG_o",
    "name": "Puliyodarai",
    "englishSubtitle": "Puliyodarai / Puliyogare/ Ambat bhath",
    "sourceAttribution": "Vaish's Kitchenette (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=bRvIznNUG_o",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Sourashtra special/Ambat bhath/Puliyodarai/#Puliyogare Ingredients Serves 4-5 Oil Mustard seeds Chana dal Peanut Hing Curry ...",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Curry Leaves) by washing, chopping, and measuring as shown by Vaish's Kitchenette.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Vaish's Kitchenette via the YouTube link above!"
    ]
  },
  {
    "id": "yt-JElkYjAJY_U",
    "name": "Kachchana ambat (sourashtra)",
    "englishSubtitle": "Kachchana ambat (sourashtra)",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=JElkYjAJY_U",
    "webUrl": "https://www.sailajakitchen.org/search?q=sourashtra",
    "category": "Ambat & Pitla (Rich Curries)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Garlic",
      "Ginger",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Kachchana- 100gm Onion -1 small Tomato - 2 small Garlic -3 piece Ginger - 1 inch Asafoetida - 3 pinch Ounty burko - 1 tsp Red ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Garlic, Ginger, Curry Leaves) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-nnMUfqXJiRA",
    "name": "Tamarind Rice Recipe",
    "englishSubtitle": "Tamarind Rice Recipe | Puliyotharai Recipe | Indian Food Recipes| Sourashtra Ambat Bhaath 😋",
    "sourceAttribution": "Buvana's kitchen and lifestyle (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=nnMUfqXJiRA",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Buvana's kitchen and lifestyle.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Buvana's kitchen and lifestyle via the YouTube link above!"
    ]
  },
  {
    "id": "yt-p7OEi_n96u4",
    "name": "Muddha ambad bhath",
    "englishSubtitle": "Muddha ambad bhath",
    "sourceAttribution": "Yummy Sourashtra (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=p7OEi_n96u4",
    "webUrl": "http://www.yummysourashtra.com/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Yummy Sourashtra.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Yummy Sourashtra via the YouTube link above!"
    ]
  },
  {
    "id": "yt-toNfiquYj7w",
    "name": "Meal Maker Ambat",
    "englishSubtitle": "Meal Maker Ambat",
    "sourceAttribution": "Yummy Sourashtra (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=toNfiquYj7w",
    "webUrl": "http://www.yummysourashtra.com/",
    "category": "Ambat & Pitla (Rich Curries)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Meal Maker Ambat.",
      "Toor Dal (Tuvaram Bela) or Chana Dal (Harbara Bela — 1/2 cup)",
      "Ounty Bhurko or Sambar Bhurko (1.5–2 tbsp)",
      "Tamarind (small gooseberry size), Turmeric & Hing",
      "Mustard Seeds, Urad Dal & Cooking Oil",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko / Sambar Bhurko",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Yummy Sourashtra.",
      "Gather the dry Madurai Sourashtra pantry additives: Ounty Bhurko or Sambar Bhurko (1.5–2 tbsp); Tamarind (small gooseberry size), Turmeric & Hing; Mustard Seeds, Urad Dal & Cooking Oil; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko / Sambar Bhurko) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Yummy Sourashtra via the YouTube link above!"
    ]
  },
  {
    "id": "yt-yZmMd5v8DS0",
    "name": "Easy Puliodharai",
    "englishSubtitle": "Easy Puliodharai/ Ambat bhath/ Sourashtra traditional",
    "sourceAttribution": "Vani's Palkar Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=yZmMd5v8DS0",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Coconut",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Easy to prepare. Only few items required, Ready in 15 minutes. Can be served with coconut chutney. Tasty and healthy.",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Coconut, Curry Leaves) by washing, chopping, and measuring as shown by Vani's Palkar Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Vani's Palkar Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-4Ajxr2c_cU0",
    "name": "🌟 Veg Eral Kulambu! Sourashtra Veg Kajali Ambat",
    "englishSubtitle": "🌟 Veg Eral Kulambu! Sourashtra Veg Kajali Ambat/Saiva Eral Kulambu/Kajali Ambat/Sourashtra Samayal",
    "sourceAttribution": "Sugi cooks - SomethingDifferent, FOR ALL (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=4Ajxr2c_cU0",
    "webUrl": "https://sugi-writes.blogspot.com/search/label/Sourashtra%20Recipes",
    "category": "Ambat & Pitla (Rich Curries)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Curry Leaves) by washing, chopping, and measuring as shown by Sugi cooks - SomethingDifferent, FOR ALL.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Sugi cooks - SomethingDifferent, FOR ALL via the YouTube link above!"
    ]
  },
  {
    "id": "yt-khghUDTs8Uw",
    "name": "Rasam",
    "englishSubtitle": "Rasam | kalyana veetu Rasam | Jhoman pilchaar | Sourashtra Rasam recipe| Basic South Indian rasam",
    "sourceAttribution": "Mekan Recipes (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=khghUDTs8Uw",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Pilchar & Charu (Rasam/Broths)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Rasam | kalyana veetu Rasam | Jhoman pilchaar | Sourashtra Rasam recipe| Basic South Indian rasam Tomato Rasam,Basic ...",
      "Pilchar Bhurko / Sourashtra Rasam Podi (1.5–2 tbsp)",
      "Tamarind Extract (Ambat) & Cooked Toor Dal Water",
      "Black Pepper (Miri), Cumin Seeds (Jeera) & Hing",
      "Mustard Seeds & Ghee (Thup — 1 tsp)",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Curry Leaves) by washing, chopping, and measuring as shown by Mekan Recipes.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind Extract (Ambat) & Cooked Toor Dal Water; Black Pepper (Miri), Cumin Seeds (Jeera) & Hing; Mustard Seeds & Ghee (Thup — 1 tsp); Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Mekan Recipes via the YouTube link above!"
    ]
  },
  {
    "id": "yt-Y-8vqhgnTqU",
    "name": "Rasam II (Joman Pilchaar)",
    "englishSubtitle": "Rasam II (Joman Pilchaar)",
    "sourceAttribution": "Yummy Sourashtra (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=Y-8vqhgnTqU",
    "webUrl": "http://www.yummysourashtra.com/",
    "category": "Pilchar & Charu (Rasam/Broths)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Rasam II (Joman Pilchaar)",
      "Pilchar Bhurko / Sourashtra Rasam Podi (1.5–2 tbsp)",
      "Tamarind Extract (Ambat) & Cooked Toor Dal Water",
      "Black Pepper (Miri), Cumin Seeds (Jeera) & Hing",
      "Mustard Seeds & Ghee (Thup — 1 tsp)",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Yummy Sourashtra.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind Extract (Ambat) & Cooked Toor Dal Water; Black Pepper (Miri), Cumin Seeds (Jeera) & Hing; Mustard Seeds & Ghee (Thup — 1 tsp); Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Yummy Sourashtra via the YouTube link above!"
    ]
  },
  {
    "id": "yt-umE7wDIcpfw",
    "name": "Rasam Powder Recipe",
    "englishSubtitle": "Rasam Powder Recipe / Sourashtra Rasam Podi / Pilchar Bhurko / Homemade Rasam Powder",
    "sourceAttribution": "Sugi cooks - SomethingDifferent, FOR ALL (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=umE7wDIcpfw",
    "webUrl": "https://sugi-writes.blogspot.com/search/label/Sourashtra%20Recipes",
    "category": "Pilchar & Charu (Rasam/Broths)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Sourashtra Style Rasam Powder Recipe The secret behind every soulful rasam Because every meal deserves a warm bowl ...",
      "Pilchar Bhurko / Sourashtra Rasam Podi (1.5–2 tbsp)",
      "Tamarind Extract (Ambat) & Cooked Toor Dal Water",
      "Black Pepper (Miri), Cumin Seeds (Jeera) & Hing",
      "Mustard Seeds & Ghee (Thup — 1 tsp)",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Sugi cooks - SomethingDifferent, FOR ALL.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind Extract (Ambat) & Cooked Toor Dal Water; Black Pepper (Miri), Cumin Seeds (Jeera) & Hing; Mustard Seeds & Ghee (Thup — 1 tsp); Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Sugi cooks - SomethingDifferent, FOR ALL via the YouTube link above!"
    ]
  },
  {
    "id": "yt-9Sk9diR-dUo",
    "name": "Pilchaar Burko",
    "englishSubtitle": "Pilchaar Burko",
    "sourceAttribution": "Yummy Sourashtra (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=9Sk9diR-dUo",
    "webUrl": "http://www.yummysourashtra.com/",
    "category": "Pilchar & Charu (Rasam/Broths)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Pilchar Bhurko / Sourashtra Rasam Podi (1.5–2 tbsp)",
      "Tamarind Extract (Ambat) & Cooked Toor Dal Water",
      "Black Pepper (Miri), Cumin Seeds (Jeera) & Hing",
      "Mustard Seeds & Ghee (Thup — 1 tsp)",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Yummy Sourashtra.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind Extract (Ambat) & Cooked Toor Dal Water; Black Pepper (Miri), Cumin Seeds (Jeera) & Hing; Mustard Seeds & Ghee (Thup — 1 tsp); Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Yummy Sourashtra via the YouTube link above!"
    ]
  },
  {
    "id": "yt-zqRGMK2KC6k",
    "name": "Sourashtra Instant pepper rasam",
    "englishSubtitle": "Sourashtra Instant pepper rasam | Hema's sourashtra samayal in Tamil",
    "sourceAttribution": "Hema's Sourashtra Samayal (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=zqRGMK2KC6k",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Pilchar & Charu (Rasam/Broths)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: hematr3171 This Sourashtra Instant rasam recipe is a very easy and quick preparation which can be prepared within 10 minutes.",
      "Pilchar Bhurko / Sourashtra Rasam Podi (1.5–2 tbsp)",
      "Tamarind Extract (Ambat) & Cooked Toor Dal Water",
      "Black Pepper (Miri), Cumin Seeds (Jeera) & Hing",
      "Mustard Seeds & Ghee (Thup — 1 tsp)",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Hema's Sourashtra Samayal.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind Extract (Ambat) & Cooked Toor Dal Water; Black Pepper (Miri), Cumin Seeds (Jeera) & Hing; Mustard Seeds & Ghee (Thup — 1 tsp); Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Hema's Sourashtra Samayal via the YouTube link above!"
    ]
  },
  {
    "id": "yt-0-oQGVFczxc",
    "name": "Hema's sourashtra samayal in Tamil",
    "englishSubtitle": "Hema's sourashtra samayal in Tamil | Sourashtra Quick Rasam",
    "sourceAttribution": "Hema's Sourashtra Samayal (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=0-oQGVFczxc",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Pilchar & Charu (Rasam/Broths)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Hema's sourashtra samayal in Tamil | Sourashtra Quick Rasam.",
      "Pilchar Bhurko / Sourashtra Rasam Podi (1.5–2 tbsp)",
      "Tamarind Extract (Ambat) & Cooked Toor Dal Water",
      "Black Pepper (Miri), Cumin Seeds (Jeera) & Hing",
      "Mustard Seeds & Ghee (Thup — 1 tsp)",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Hema's Sourashtra Samayal.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind Extract (Ambat) & Cooked Toor Dal Water; Black Pepper (Miri), Cumin Seeds (Jeera) & Hing; Mustard Seeds & Ghee (Thup — 1 tsp); Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Hema's Sourashtra Samayal via the YouTube link above!"
    ]
  },
  {
    "id": "yt-2LHcxbI6SCA",
    "name": "Parupu Rasam",
    "englishSubtitle": "Parupu Rasam | Hema's sourashtra samayal in Tamil",
    "sourceAttribution": "Hema's Sourashtra Samayal (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=2LHcxbI6SCA",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Pilchar & Charu (Rasam/Broths)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Hema's sourashtra samayal in Tamil | Parupu Rasam.",
      "Pilchar Bhurko / Sourashtra Rasam Podi (1.5–2 tbsp)",
      "Tamarind Extract (Ambat) & Cooked Toor Dal Water",
      "Black Pepper (Miri), Cumin Seeds (Jeera) & Hing",
      "Mustard Seeds & Ghee (Thup — 1 tsp)",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Hema's Sourashtra Samayal.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind Extract (Ambat) & Cooked Toor Dal Water; Black Pepper (Miri), Cumin Seeds (Jeera) & Hing; Mustard Seeds & Ghee (Thup — 1 tsp); Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Hema's Sourashtra Samayal via the YouTube link above!"
    ]
  },
  {
    "id": "yt-KsS_-LqhCmA",
    "name": "Garlic Pepper Rasam",
    "englishSubtitle": "Garlic Pepper Rasam / Sourashtra Rasam / Pilchar with instant Rasam Powder",
    "sourceAttribution": "Vaish's Kitchenette (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=KsS_-LqhCmA",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Pilchar & Charu (Rasam/Broths)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Garlic",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Instant homemade Rasam #Immunityboosting ingredients Pepper Garlic Hing Red chilli Curry leaves Tomato Tamarind water ...",
      "Pilchar Bhurko / Sourashtra Rasam Podi (1.5–2 tbsp)",
      "Tamarind Extract (Ambat) & Cooked Toor Dal Water",
      "Black Pepper (Miri), Cumin Seeds (Jeera) & Hing",
      "Mustard Seeds & Ghee (Thup — 1 tsp)",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Garlic, Curry Leaves) by washing, chopping, and measuring as shown by Vaish's Kitchenette.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind Extract (Ambat) & Cooked Toor Dal Water; Black Pepper (Miri), Cumin Seeds (Jeera) & Hing; Mustard Seeds & Ghee (Thup — 1 tsp); Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Vaish's Kitchenette via the YouTube link above!"
    ]
  },
  {
    "id": "yt-_9L-bMSXTAs",
    "name": "Rasa Podi",
    "englishSubtitle": "Rasa Podi | Hema's sourashtra samayal in Tamil",
    "sourceAttribution": "Hema's Sourashtra Samayal (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=_9L-bMSXTAs",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Pilchar & Charu (Rasam/Broths)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Hema's sourashtra samayal in Tamil | Rasa Podi.",
      "Pilchar Bhurko / Sourashtra Rasam Podi (1.5–2 tbsp)",
      "Tamarind Extract (Ambat) & Cooked Toor Dal Water",
      "Black Pepper (Miri), Cumin Seeds (Jeera) & Hing",
      "Mustard Seeds & Ghee (Thup — 1 tsp)",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Hema's Sourashtra Samayal.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind Extract (Ambat) & Cooked Toor Dal Water; Black Pepper (Miri), Cumin Seeds (Jeera) & Hing; Mustard Seeds & Ghee (Thup — 1 tsp); Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Hema's Sourashtra Samayal via the YouTube link above!"
    ]
  },
  {
    "id": "yt-JNY8Q8sjIc0",
    "name": "Pilchar Burko (Sourashtra)",
    "englishSubtitle": "Pilchar Burko (Sourashtra)",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=JNY8Q8sjIc0",
    "webUrl": "https://www.sailajakitchen.org/search?q=sourashtra",
    "category": "Pilchar & Charu (Rasam/Broths)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Pepper- 100 gram(rice cooker cup full) Red chili- 50 pieces Dry curry leaves- one handful Cumin seeds- 3 spoon Asafoetida- 2 ...",
      "Pilchar Bhurko / Sourashtra Rasam Podi (1.5–2 tbsp)",
      "Tamarind Extract (Ambat) & Cooked Toor Dal Water",
      "Black Pepper (Miri), Cumin Seeds (Jeera) & Hing",
      "Mustard Seeds & Ghee (Thup — 1 tsp)",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Curry Leaves) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind Extract (Ambat) & Cooked Toor Dal Water; Black Pepper (Miri), Cumin Seeds (Jeera) & Hing; Mustard Seeds & Ghee (Thup — 1 tsp); Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-qCka-7vlWKw",
    "name": "Rasam powder (Pilchaar Bhurko) #rasam #powder #pilchar #bhurko #homemade",
    "englishSubtitle": "Rasam powder (Pilchaar Bhurko) #rasam #powder #pilchar #bhurko #homemade",
    "sourceAttribution": "Cheese Flower (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=qCka-7vlWKw",
    "webUrl": "https://www.sailajakitchen.org/search?q=sourashtra",
    "category": "Pilchar & Charu (Rasam/Broths)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Pilchar Bhurko / Sourashtra Rasam Podi (1.5–2 tbsp)",
      "Tamarind Extract (Ambat) & Cooked Toor Dal Water",
      "Black Pepper (Miri), Cumin Seeds (Jeera) & Hing",
      "Mustard Seeds & Ghee (Thup — 1 tsp)",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Cheese Flower.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind Extract (Ambat) & Cooked Toor Dal Water; Black Pepper (Miri), Cumin Seeds (Jeera) & Hing; Mustard Seeds & Ghee (Thup — 1 tsp); Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Cheese Flower via the YouTube link above!"
    ]
  },
  {
    "id": "yt-07EaF4KcJRg",
    "name": "Rasam Powder (Pepper)",
    "englishSubtitle": "Rasam Powder (Pepper) | சௌராஷ்ட்ரா முறை மிளகு ரசப் பொடி | பில்சார் புர்கோ | Recipe - 49",
    "sourceAttribution": "Traditional Sourashtra Kitchen (பாரம்பரிய முறை) (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=07EaF4KcJRg",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Pilchar & Charu (Rasam/Broths)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: சௌராஷ்ட்ரா மக்களின் பாரம்பரிய முறைப்படி செய்த ரசப் பொடி.",
      "Pilchar Bhurko / Sourashtra Rasam Podi (1.5–2 tbsp)",
      "Tamarind Extract (Ambat) & Cooked Toor Dal Water",
      "Black Pepper (Miri), Cumin Seeds (Jeera) & Hing",
      "Mustard Seeds & Ghee (Thup — 1 tsp)",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Traditional Sourashtra Kitchen (பாரம்பரிய முறை).",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind Extract (Ambat) & Cooked Toor Dal Water; Black Pepper (Miri), Cumin Seeds (Jeera) & Hing; Mustard Seeds & Ghee (Thup — 1 tsp); Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Traditional Sourashtra Kitchen (பாரம்பரிய முறை) via the YouTube link above!"
    ]
  },
  {
    "id": "yt-oT5wRszalTc",
    "name": "Lemon Rasam",
    "englishSubtitle": "Lemon Rasam | எலுமிச்சை ரசம் | லிம்பு பில்சார் | Recipe - 68",
    "sourceAttribution": "Traditional Sourashtra Kitchen (பாரம்பரிய முறை) (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=oT5wRszalTc",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Pilchar & Charu (Rasam/Broths)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Lemon",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: புளி உபயோகிக்காமல், எலுமிச்சையை வைத்து ரசம் எப்படி செய்வது என்று ...",
      "Pilchar Bhurko / Sourashtra Rasam Podi (1.5–2 tbsp)",
      "Tamarind Extract (Ambat) & Cooked Toor Dal Water",
      "Black Pepper (Miri), Cumin Seeds (Jeera) & Hing",
      "Mustard Seeds & Ghee (Thup — 1 tsp)",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Lemon, Curry Leaves) by washing, chopping, and measuring as shown by Traditional Sourashtra Kitchen (பாரம்பரிய முறை).",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind Extract (Ambat) & Cooked Toor Dal Water; Black Pepper (Miri), Cumin Seeds (Jeera) & Hing; Mustard Seeds & Ghee (Thup — 1 tsp); Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Traditional Sourashtra Kitchen (பாரம்பரிய முறை) via the YouTube link above!"
    ]
  },
  {
    "id": "yt-tGtKUvNbfdY",
    "name": "sourashtra Rasam powder",
    "englishSubtitle": "sourashtra Rasam powder| Rasam powder intamil| sourashtra traditional rasam powder|Jhoman pilchaar",
    "sourceAttribution": "Mekan Recipes (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=tGtKUvNbfdY",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Pilchar & Charu (Rasam/Broths)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: sourashtra Rasam powder| Rasam powder intamil| sourashtra traditional rasam powder|Jhoman pilchaar RASAM Benefits of ...",
      "Pilchar Bhurko / Sourashtra Rasam Podi (1.5–2 tbsp)",
      "Tamarind Extract (Ambat) & Cooked Toor Dal Water",
      "Black Pepper (Miri), Cumin Seeds (Jeera) & Hing",
      "Mustard Seeds & Ghee (Thup — 1 tsp)",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Mekan Recipes.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind Extract (Ambat) & Cooked Toor Dal Water; Black Pepper (Miri), Cumin Seeds (Jeera) & Hing; Mustard Seeds & Ghee (Thup — 1 tsp); Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Mekan Recipes via the YouTube link above!"
    ]
  },
  {
    "id": "yt-5mqcOijdAI8",
    "name": "Paati veetu rasam",
    "englishSubtitle": "Paati veetu rasam | sourashtra | tamil video | simple method | easy recipe | சௌராஷ்டிரா ரசம்",
    "sourceAttribution": "You_Too_Channel 🤞🏻 (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=5mqcOijdAI8",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Pilchar & Charu (Rasam/Broths)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Heyyyyy guysssss This is my grandma rasam recipe..... it is very simple and quick method of rasam who dont know to cook rasam ...",
      "Pilchar Bhurko / Sourashtra Rasam Podi (1.5–2 tbsp)",
      "Tamarind Extract (Ambat) & Cooked Toor Dal Water",
      "Black Pepper (Miri), Cumin Seeds (Jeera) & Hing",
      "Mustard Seeds & Ghee (Thup — 1 tsp)",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by You_Too_Channel 🤞🏻.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind Extract (Ambat) & Cooked Toor Dal Water; Black Pepper (Miri), Cumin Seeds (Jeera) & Hing; Mustard Seeds & Ghee (Thup — 1 tsp); Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by You_Too_Channel 🤞🏻 via the YouTube link above!"
    ]
  },
  {
    "id": "yt-2fzJPe6X-iQ",
    "name": "Sekkar pongal",
    "englishSubtitle": "Sekkar pongal/Gullu pongal(sourashtra)",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=2fzJPe6X-iQ",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Rice - 1 cup Water - 3 cup Jaggery pongal - 1.5 cup Ghee - 1/2 cup Cardamom - 2 Cashew and raisin - 20 number.",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Palm Jaggery / Karupatti or Gullu (1 cup)",
      "Ghee (Thup — 3 tbsp), Cardamom, Cashews & Raisins"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Channel Ingredient Note: Rice - 1 cup Water - 3 cup Jaggery pongal - 1.5 cup Ghee - 1/2 cup Cardamom - 2 Cashew and raisin - 20 number.; Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Palm Jaggery / Karupatti or Gullu (1 cup); Ghee (Thup — 3 tbsp), Cardamom, Cashews & Raisins.",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-cn5vEAeZoaY",
    "name": "Dhowra Pongal",
    "englishSubtitle": "Dhowra Pongal/Puli sadham",
    "sourceAttribution": "Chitra Cooks (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=cn5vEAeZoaY",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Ingredients Rice-1/2 cup Tamarind extract-1/2 cup Water -1.5 to 2 cups+ as needed Turmeric powder-1/4 tsp Roasted fenugreek ...",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Chitra Cooks.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Chitra Cooks via the YouTube link above!"
    ]
  },
  {
    "id": "yt-Z0XlZqwUWRM",
    "name": "Muddha pongal(Ven pongal)",
    "englishSubtitle": "Muddha pongal(Ven pongal)|How to make muddha pongal|sourashtra",
    "sourceAttribution": "Isha kitchen and lifestyle (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=Z0XlZqwUWRM",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Today we are going to see,how to make Muddha pongal in sourashtra This channel is about cooking,shopping haul,vlogs.",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Isha kitchen and lifestyle.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Isha kitchen and lifestyle via the YouTube link above!"
    ]
  },
  {
    "id": "yt-3ZBFf2jfhvk",
    "name": "Ven pongal",
    "englishSubtitle": "Ven pongal | Hema's sourashtra samayal in Tamil",
    "sourceAttribution": "Hema's Sourashtra Samayal (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=3ZBFf2jfhvk",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Hema's sourashtra samayal in Tamil |Ven pongal.",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Hema's Sourashtra Samayal.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Hema's Sourashtra Samayal via the YouTube link above!"
    ]
  },
  {
    "id": "yt-ffPSE2tCNik",
    "name": "Ven Pongal - World Famous Recipes By Sangeetha! #Mudha Pongal #Sourashtra recipes",
    "englishSubtitle": "Ven Pongal - World Famous Recipes By Sangeetha! #Mudha Pongal #Sourashtra recipes",
    "sourceAttribution": "Puliady’s Kitchen! (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=ffPSE2tCNik",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Puliady's Kitchen!",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Puliady’s Kitchen!.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Puliady’s Kitchen! via the YouTube link above!"
    ]
  },
  {
    "id": "yt-yF7AcSBAzF4",
    "name": "Sourashtra style puli sadam(dhaura pongal)...",
    "englishSubtitle": "Sourashtra style puli sadam(dhaura pongal)...",
    "sourceAttribution": "SEKAR MANJULA (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=yF7AcSBAzF4",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Easy to prepare... Thanks for watching and for your support..",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by SEKAR MANJULA.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by SEKAR MANJULA via the YouTube link above!"
    ]
  },
  {
    "id": "yt-ZeUtprWBDN8",
    "name": "Pongal",
    "englishSubtitle": "Pongal | வெண் பொங்கல் | சௌராஷ்ட்ரா முத்தா பொங்கல் | Recipe - 40",
    "sourceAttribution": "Traditional Sourashtra Kitchen (பாரம்பரிய முறை) (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=ZeUtprWBDN8",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: முத்தா பொங்கல் என்று சௌராஷ்ட்ரியர்கள் அழைக்க கூடிய வெண் பொங்கல் ...",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Traditional Sourashtra Kitchen (பாரம்பரிய முறை).",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Traditional Sourashtra Kitchen (பாரம்பரிய முறை) via the YouTube link above!"
    ]
  },
  {
    "id": "yt-8fRVR1EZ7oc",
    "name": "✨Puli Pongal",
    "englishSubtitle": "✨Puli Pongal/Sourashtra Dhowra Pongal/Instant Puli Sadam/Cooker Puli Sadam Recipe/Pongal in Cooker",
    "sourceAttribution": "Sugi cooks - SomethingDifferent, FOR ALL (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=8fRVR1EZ7oc",
    "webUrl": "https://sugi-writes.blogspot.com/search/label/Sourashtra%20Recipes",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Puli pongal is a version of tamarind rice prepared in pressure cooker. A recipe unique to Sourashtra cuisine, called in Sourashtra ...",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Sugi cooks - SomethingDifferent, FOR ALL.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Sugi cooks - SomethingDifferent, FOR ALL via the YouTube link above!"
    ]
  },
  {
    "id": "yt-k-o0WyCreto",
    "name": "Sourashtra Tomato Rice",
    "englishSubtitle": "Sourashtra Tomato Rice | தக்காளி பொங்கல் | Recipe - 27",
    "sourceAttribution": "Traditional Sourashtra Kitchen (பாரம்பரிய முறை) (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=k-o0WyCreto",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: தக்காளி பொங்கல் செய்முறை. அது என்ன தக்காளி பொங்கல். இதை தக்காளி ...",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Curry Leaves) by washing, chopping, and measuring as shown by Traditional Sourashtra Kitchen (பாரம்பரிய முறை).",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Traditional Sourashtra Kitchen (பாரம்பரிய முறை) via the YouTube link above!"
    ]
  },
  {
    "id": "yt-mxBERUlUnqA",
    "name": "Muri pongal",
    "englishSubtitle": "Muri pongal",
    "sourceAttribution": "Yummy Sourashtra (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=mxBERUlUnqA",
    "webUrl": "http://www.yummysourashtra.com/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Yummy Sourashtra.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Yummy Sourashtra via the YouTube link above!"
    ]
  },
  {
    "id": "yt-7qCkhu9ZE1E",
    "name": "Muddha (Ven) Pongal",
    "englishSubtitle": "Muddha (Ven) Pongal",
    "sourceAttribution": "Yummy Sourashtra (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=7qCkhu9ZE1E",
    "webUrl": "http://www.yummysourashtra.com/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Yummy Sourashtra.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Yummy Sourashtra via the YouTube link above!"
    ]
  },
  {
    "id": "yt-xS-joD42xMg",
    "name": "Puliyodharai",
    "englishSubtitle": "Puliyodharai | கோவில் புளியோதரை | தவ்ரா பொங்கல் | Recipe - 44",
    "sourceAttribution": "Traditional Sourashtra Kitchen (பாரம்பரிய முறை) (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=xS-joD42xMg",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: சௌராஷ்ட்ரா மக்கள் விரும்பி செய்யக்கூடிய தவ்ரா பொங்கல். அதாவது ...",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Traditional Sourashtra Kitchen (பாரம்பரிய முறை).",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Traditional Sourashtra Kitchen (பாரம்பரிய முறை) via the YouTube link above!"
    ]
  },
  {
    "id": "yt-80xq4gI1J6E",
    "name": "Puli Pongal recipe",
    "englishSubtitle": "Puli Pongal recipe | Liquid Puliyodharai | Traditional Tamarind Pongal recipe | Muddha Ambat Bhaath",
    "sourceAttribution": "Lakshmi's Best Recipes (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=80xq4gI1J6E",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Hello viewer welcome to Lakshmi's Best Recipes In this video we will see how to make Puli Pongal or Liquid Puliyodharai recipe ...",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Lakshmi's Best Recipes.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Lakshmi's Best Recipes via the YouTube link above!"
    ]
  },
  {
    "id": "yt-nhfU4zgR1oc",
    "name": "Thoov Pongal (Ven Pongal II)",
    "englishSubtitle": "Thoov Pongal (Ven Pongal II)",
    "sourceAttribution": "Yummy Sourashtra (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=nhfU4zgR1oc",
    "webUrl": "http://www.yummysourashtra.com/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Yummy Sourashtra.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Yummy Sourashtra via the YouTube link above!"
    ]
  },
  {
    "id": "yt-D5tzJqfDSq4",
    "name": "சௌராஷ்டிரா தவுரா பொங்கல் (கோவில் பொங்கல்) ஒடச்சக்கடலை துவையல்",
    "englishSubtitle": "சௌராஷ்டிரா தவுரா பொங்கல் (கோவில் பொங்கல்) ஒடச்சக்கடலை துவையல்",
    "sourceAttribution": "Kalatthai Vellalam (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=D5tzJqfDSq4",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: சௌராஷ்டிரா தவுரா பொங்கல் (கோவில் பொங்கல்) ஒடச்சக்கடலை துவையல்.",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Kalatthai Vellalam.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Kalatthai Vellalam via the YouTube link above!"
    ]
  },
  {
    "id": "yt-Uf06wJZXNAk",
    "name": "Healthy Kathirikai 🍆 Chutney",
    "englishSubtitle": "Healthy Kathirikai 🍆 Chutney | Sourashtra Recipe Vangi Budith |Oil Free Chutney",
    "sourceAttribution": "Kalpz விருந்து (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=Uf06wJZXNAk",
    "webUrl": "https://www.abiscookbook.com/vangi-bhudid-eggplant-chutney-sourashtra-style/",
    "category": "Budith, Losto & Polte (Chutneys/Masiyal)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Brinjal",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8)",
      "Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp)",
      "Mustard Seeds, Urad Dal & Gingelly Oil (for tempering)",
      "Rock Salt / Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Brinjal, Curry Leaves) by washing, chopping, and measuring as shown by Kalpz விருந்து.",
      "Gather the dry Madurai Sourashtra pantry additives: Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8); Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp); Mustard Seeds, Urad Dal & Gingelly Oil (for tempering); Rock Salt / Salt (Lenu).",
      "Cook or roast the main fridge ingredients with dry red chillies, tamarind, hing, and lentil additives until tender, then stone-grind or mash coarsely with a wooden mathu.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Kalpz விருந்து via the YouTube link above!"
    ]
  },
  {
    "id": "yt-x8nq0gyxHso",
    "name": "Vangi Budith",
    "englishSubtitle": "Vangi Budith | கத்திரிக்காய் சட்னி | வங்கி புடித் | An Instant Chutney Recipe | Recipe - 5",
    "sourceAttribution": "Traditional Sourashtra Kitchen (பாரம்பரிய முறை) (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=x8nq0gyxHso",
    "webUrl": "https://www.abiscookbook.com/vangi-bhudid-eggplant-chutney-sourashtra-style/",
    "category": "Budith, Losto & Polte (Chutneys/Masiyal)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Brinjal",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: சௌராஷ்ட்ரா சமூகத்தினரின் உடனடி preparation ஆன வங்கி புடித் ...",
      "Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8)",
      "Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp)",
      "Mustard Seeds, Urad Dal & Gingelly Oil (for tempering)",
      "Rock Salt / Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Brinjal, Curry Leaves) by washing, chopping, and measuring as shown by Traditional Sourashtra Kitchen (பாரம்பரிய முறை).",
      "Gather the dry Madurai Sourashtra pantry additives: Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8); Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp); Mustard Seeds, Urad Dal & Gingelly Oil (for tempering); Rock Salt / Salt (Lenu).",
      "Cook or roast the main fridge ingredients with dry red chillies, tamarind, hing, and lentil additives until tender, then stone-grind or mash coarsely with a wooden mathu.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Traditional Sourashtra Kitchen (பாரம்பரிய முறை) via the YouTube link above!"
    ]
  },
  {
    "id": "yt-3ALQUnKxkP8",
    "name": "Sourashtra Vangi Budith or Brinjal Chutney 🤩🤗👩‍🍳",
    "englishSubtitle": "Sourashtra Vangi Budith or Brinjal Chutney 🤩🤗👩‍🍳",
    "sourceAttribution": "TaHa RK (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=3ALQUnKxkP8",
    "webUrl": "https://www.abiscookbook.com/vangi-bhudid-eggplant-chutney-sourashtra-style/",
    "category": "Budith, Losto & Polte (Chutneys/Masiyal)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Brinjal",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Kathirikai Chutney #Sourashtra vangi budith # vangi chutney # brinjal chutney recipe # Best side dish chutney for dosa, idli and ...",
      "Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8)",
      "Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp)",
      "Mustard Seeds, Urad Dal & Gingelly Oil (for tempering)",
      "Rock Salt / Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Brinjal, Curry Leaves) by washing, chopping, and measuring as shown by TaHa RK.",
      "Gather the dry Madurai Sourashtra pantry additives: Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8); Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp); Mustard Seeds, Urad Dal & Gingelly Oil (for tempering); Rock Salt / Salt (Lenu).",
      "Cook or roast the main fridge ingredients with dry red chillies, tamarind, hing, and lentil additives until tender, then stone-grind or mash coarsely with a wooden mathu.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by TaHa RK via the YouTube link above!"
    ]
  },
  {
    "id": "yt-OdkXF7VR3FM",
    "name": "Vangi chutni",
    "englishSubtitle": "Vangi chutni/brinjal chutni (sourashtra)",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=OdkXF7VR3FM",
    "webUrl": "https://www.abiscookbook.com/vangi-bhudid-eggplant-chutney-sourashtra-style/",
    "category": "Budith, Losto & Polte (Chutneys/Masiyal)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Brinjal",
      "Onion",
      "Green Chilli",
      "Curry Leaves",
      "Coriander"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Brinjal 3 Onion 1 small Tomato 3 Red chili 5 Green chili 1 Toor dhal 1 tsp Curry and coriander leaves little bit Asafoetida small ...",
      "Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8)",
      "Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp)",
      "Mustard Seeds, Urad Dal & Gingelly Oil (for tempering)",
      "Rock Salt / Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Brinjal, Onion, Green Chilli, Curry Leaves, Coriander) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8); Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp); Mustard Seeds, Urad Dal & Gingelly Oil (for tempering); Rock Salt / Salt (Lenu).",
      "Cook or roast the main fridge ingredients with dry red chillies, tamarind, hing, and lentil additives until tender, then stone-grind or mash coarsely with a wooden mathu.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-M9eOJyvpTB4",
    "name": "Sourashtra Special Chutney",
    "englishSubtitle": "Sourashtra Special Chutney|ஒரு வாரம் ஆனாலும் கெடாத சட்னி |Best for dosa,idly and variety rices|Allam",
    "sourceAttribution": "It's Cooking Time  (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=M9eOJyvpTB4",
    "webUrl": "https://www.abiscookbook.com/vangi-bhudid-eggplant-chutney-sourashtra-style/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Ginger",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Sourastra Special Chutney | ஒரு வரம் அனாலும் கெடாத சட்னி | Best for dosa,idly and variety rices Other ...",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Ginger, Curry Leaves) by washing, chopping, and measuring as shown by It's Cooking Time .",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by It's Cooking Time  via the YouTube link above!"
    ]
  },
  {
    "id": "yt-Sbv0XEy1kpU",
    "name": "Ginger Chutney V - 2.0",
    "englishSubtitle": "Ginger Chutney V - 2.0 | இஞ்சி சுட்னி | அல்லா சுட்னி | Recipe - 116",
    "sourceAttribution": "Traditional Sourashtra Kitchen (பாரம்பரிய முறை) (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=Sbv0XEy1kpU",
    "webUrl": "https://www.abiscookbook.com/vangi-bhudid-eggplant-chutney-sourashtra-style/",
    "category": "Budith, Losto & Polte (Chutneys/Masiyal)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Ginger",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: DESCRIPTION* :- With this video you could know how to make the version 2.0 of the Ginger Chutney we made in this channel ...",
      "Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8)",
      "Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp)",
      "Mustard Seeds, Urad Dal & Gingelly Oil (for tempering)",
      "Rock Salt / Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Ginger, Curry Leaves) by washing, chopping, and measuring as shown by Traditional Sourashtra Kitchen (பாரம்பரிய முறை).",
      "Gather the dry Madurai Sourashtra pantry additives: Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8); Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp); Mustard Seeds, Urad Dal & Gingelly Oil (for tempering); Rock Salt / Salt (Lenu).",
      "Cook or roast the main fridge ingredients with dry red chillies, tamarind, hing, and lentil additives until tender, then stone-grind or mash coarsely with a wooden mathu.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Traditional Sourashtra Kitchen (பாரம்பரிய முறை) via the YouTube link above!"
    ]
  },
  {
    "id": "yt-sZy_KixQ8ds",
    "name": "Brinjal chutney,Baingan chutney,kathirikai chutney,#vangibudit,#Sourashtra,vazhuthananga chutney",
    "englishSubtitle": "Brinjal chutney,Baingan chutney,kathirikai chutney,#vangibudit,#Sourashtra,vazhuthananga chutney",
    "sourceAttribution": "Mekan Recipes (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=sZy_KixQ8ds",
    "webUrl": "https://www.abiscookbook.com/vangi-bhudid-eggplant-chutney-sourashtra-style/",
    "category": "Budith, Losto & Polte (Chutneys/Masiyal)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Brinjal",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Brinjal chutney,Baingan chutney,kathirikai chutney,#vangibudit,#Sourashtra,vazhuthananga chutney Brinjal Chutney,Baingan ...",
      "Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8)",
      "Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp)",
      "Mustard Seeds, Urad Dal & Gingelly Oil (for tempering)",
      "Rock Salt / Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Brinjal, Curry Leaves) by washing, chopping, and measuring as shown by Mekan Recipes.",
      "Gather the dry Madurai Sourashtra pantry additives: Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8); Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp); Mustard Seeds, Urad Dal & Gingelly Oil (for tempering); Rock Salt / Salt (Lenu).",
      "Cook or roast the main fridge ingredients with dry red chillies, tamarind, hing, and lentil additives until tender, then stone-grind or mash coarsely with a wooden mathu.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Mekan Recipes via the YouTube link above!"
    ]
  },
  {
    "id": "yt-hYeyOSYQUKc",
    "name": "ஒரே சட்னி.. 3 வேளைக்கும் பக்காவா பொருந்தும்! Wedding Style Brinjal Chutney",
    "englishSubtitle": "ஒரே சட்னி.. 3 வேளைக்கும் பக்காவா பொருந்தும்! Wedding Style Brinjal Chutney | Chef Deena's Kitchen",
    "sourceAttribution": "Chef Deena’s Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=hYeyOSYQUKc",
    "webUrl": "https://www.abiscookbook.com/vangi-bhudid-eggplant-chutney-sourashtra-style/",
    "category": "Budith, Losto & Polte (Chutneys/Masiyal)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Brinjal",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: The Ultimate 3-in-1 Brinjal Chutney! ✨ Tired of cooking separate side dishes for breakfast, lunch, and dinner? This \"All-rounder\" ...",
      "Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8)",
      "Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp)",
      "Mustard Seeds, Urad Dal & Gingelly Oil (for tempering)",
      "Rock Salt / Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Brinjal, Curry Leaves) by washing, chopping, and measuring as shown by Chef Deena’s Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8); Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp); Mustard Seeds, Urad Dal & Gingelly Oil (for tempering); Rock Salt / Salt (Lenu).",
      "Cook or roast the main fridge ingredients with dry red chillies, tamarind, hing, and lentil additives until tender, then stone-grind or mash coarsely with a wooden mathu.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Chef Deena’s Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-EdL0Yx1OxYI",
    "name": "Brinjal Chutney Recipe",
    "englishSubtitle": "Brinjal Chutney Recipe | Palkar Recipe | Vangi Budith | கத்தரிக்காய் சட்னி | Buddy Recipes",
    "sourceAttribution": "Buddy Recipes (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=EdL0Yx1OxYI",
    "webUrl": "https://www.abiscookbook.com/vangi-bhudid-eggplant-chutney-sourashtra-style/",
    "category": "Budith, Losto & Polte (Chutneys/Masiyal)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Brinjal",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Brinjal Chutney Recipe | Palkar Recipe | Vangi Budith | Chutney Recipe | கத்தரிக்காய் சட்னி | Buddy Recipes ...",
      "Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8)",
      "Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp)",
      "Mustard Seeds, Urad Dal & Gingelly Oil (for tempering)",
      "Rock Salt / Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Brinjal, Curry Leaves) by washing, chopping, and measuring as shown by Buddy Recipes.",
      "Gather the dry Madurai Sourashtra pantry additives: Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8); Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp); Mustard Seeds, Urad Dal & Gingelly Oil (for tempering); Rock Salt / Salt (Lenu).",
      "Cook or roast the main fridge ingredients with dry red chillies, tamarind, hing, and lentil additives until tender, then stone-grind or mash coarsely with a wooden mathu.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Buddy Recipes via the YouTube link above!"
    ]
  },
  {
    "id": "yt-tBkOKyJERiA",
    "name": "Vangi (Brinjal) chutney",
    "englishSubtitle": "Vangi (Brinjal) chutney",
    "sourceAttribution": "Yummy Sourashtra (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=tBkOKyJERiA",
    "webUrl": "http://www.yummysourashtra.com/",
    "category": "Budith, Losto & Polte (Chutneys/Masiyal)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Brinjal",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8)",
      "Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp)",
      "Mustard Seeds, Urad Dal & Gingelly Oil (for tempering)",
      "Rock Salt / Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Brinjal, Curry Leaves) by washing, chopping, and measuring as shown by Yummy Sourashtra.",
      "Gather the dry Madurai Sourashtra pantry additives: Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8); Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp); Mustard Seeds, Urad Dal & Gingelly Oil (for tempering); Rock Salt / Salt (Lenu).",
      "Cook or roast the main fridge ingredients with dry red chillies, tamarind, hing, and lentil additives until tender, then stone-grind or mash coarsely with a wooden mathu.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Yummy Sourashtra via the YouTube link above!"
    ]
  },
  {
    "id": "yt-aCMymcE5i8c",
    "name": "No cook raw mango pachadi",
    "englishSubtitle": "No cook raw mango pachadi/Mangai pachadi/Sourashtra kachamba bhudith",
    "sourceAttribution": "Chitra Cooks (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=aCMymcE5i8c",
    "webUrl": "https://www.abiscookbook.com/vangi-bhudid-eggplant-chutney-sourashtra-style/",
    "category": "Budith, Losto & Polte (Chutneys/Masiyal)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: No cook raw mango pachadi/Mangai pachadi/Sourashtra kachamba bhudith.",
      "Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8)",
      "Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp)",
      "Mustard Seeds, Urad Dal & Gingelly Oil (for tempering)",
      "Rock Salt / Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Curry Leaves) by washing, chopping, and measuring as shown by Chitra Cooks.",
      "Gather the dry Madurai Sourashtra pantry additives: Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8); Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp); Mustard Seeds, Urad Dal & Gingelly Oil (for tempering); Rock Salt / Salt (Lenu).",
      "Cook or roast the main fridge ingredients with dry red chillies, tamarind, hing, and lentil additives until tender, then stone-grind or mash coarsely with a wooden mathu.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Chitra Cooks via the YouTube link above!"
    ]
  },
  {
    "id": "yt-SPc2YS520Lk",
    "name": "Katrika chutney",
    "englishSubtitle": "Katrika chutney | Hema's sourashtra samayal in Tamil",
    "sourceAttribution": "Hema's Sourashtra Samayal (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=SPc2YS520Lk",
    "webUrl": "https://www.abiscookbook.com/vangi-bhudid-eggplant-chutney-sourashtra-style/",
    "category": "Budith, Losto & Polte (Chutneys/Masiyal)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Brinjal",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Hema's sourashtra samayal in Tamil |Katrika chutney.",
      "Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8)",
      "Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp)",
      "Mustard Seeds, Urad Dal & Gingelly Oil (for tempering)",
      "Rock Salt / Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Brinjal, Curry Leaves) by washing, chopping, and measuring as shown by Hema's Sourashtra Samayal.",
      "Gather the dry Madurai Sourashtra pantry additives: Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8); Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp); Mustard Seeds, Urad Dal & Gingelly Oil (for tempering); Rock Salt / Salt (Lenu).",
      "Cook or roast the main fridge ingredients with dry red chillies, tamarind, hing, and lentil additives until tender, then stone-grind or mash coarsely with a wooden mathu.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Hema's Sourashtra Samayal via the YouTube link above!"
    ]
  },
  {
    "id": "yt-8RYye1-rDTo",
    "name": "Bela chutney",
    "englishSubtitle": "Bela chutney",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=8RYye1-rDTo",
    "webUrl": "https://www.abiscookbook.com/vangi-bhudid-eggplant-chutney-sourashtra-style/",
    "category": "Budith, Losto & Polte (Chutneys/Masiyal)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Channa dhal - 3 table spoon Red chili - 6 Curry leaves - 1/2 handful Tomato- 3 Salt to taste Asafoetida - small amount.",
      "Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8)",
      "Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp)",
      "Mustard Seeds, Urad Dal & Gingelly Oil (for tempering)",
      "Rock Salt / Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Curry Leaves) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8); Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp); Mustard Seeds, Urad Dal & Gingelly Oil (for tempering); Rock Salt / Salt (Lenu).",
      "Cook or roast the main fridge ingredients with dry red chillies, tamarind, hing, and lentil additives until tender, then stone-grind or mash coarsely with a wooden mathu.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-nRuB_FfSElw",
    "name": "Vangi Budith",
    "englishSubtitle": "Vangi Budith | கத்திரிக்காய் சட்னி | வங்கி புடித் | An Instant Chutney Recipe #recipe #chutney",
    "sourceAttribution": "Viji Cookss (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=nRuB_FfSElw",
    "webUrl": "https://www.abiscookbook.com/vangi-bhudid-eggplant-chutney-sourashtra-style/",
    "category": "Budith, Losto & Polte (Chutneys/Masiyal)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Brinjal",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Vangi Budith | கத்திரிக்காய் சட்னி | வங்கி புடித் | An Instant Chutney Recipe #recipe #chutney ...",
      "Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8)",
      "Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp)",
      "Mustard Seeds, Urad Dal & Gingelly Oil (for tempering)",
      "Rock Salt / Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Brinjal, Curry Leaves) by washing, chopping, and measuring as shown by Viji Cookss.",
      "Gather the dry Madurai Sourashtra pantry additives: Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8); Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp); Mustard Seeds, Urad Dal & Gingelly Oil (for tempering); Rock Salt / Salt (Lenu).",
      "Cook or roast the main fridge ingredients with dry red chillies, tamarind, hing, and lentil additives until tender, then stone-grind or mash coarsely with a wooden mathu.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Viji Cookss via the YouTube link above!"
    ]
  },
  {
    "id": "yt-SkKXo1-HQCg",
    "name": "Sourashtra Thakkali Chutney #thakkalichutney #sourashtrarecipe #tastyfood #easyfood #kidsfood",
    "englishSubtitle": "Sourashtra Thakkali Chutney #thakkalichutney #sourashtrarecipe #tastyfood #easyfood #kidsfood",
    "sourceAttribution": "LifeBox (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=SkKXo1-HQCg",
    "webUrl": "https://www.abiscookbook.com/vangi-bhudid-eggplant-chutney-sourashtra-style/",
    "category": "Budith, Losto & Polte (Chutneys/Masiyal)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8)",
      "Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp)",
      "Mustard Seeds, Urad Dal & Gingelly Oil (for tempering)",
      "Rock Salt / Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Curry Leaves) by washing, chopping, and measuring as shown by LifeBox.",
      "Gather the dry Madurai Sourashtra pantry additives: Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8); Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp); Mustard Seeds, Urad Dal & Gingelly Oil (for tempering); Rock Salt / Salt (Lenu).",
      "Cook or roast the main fridge ingredients with dry red chillies, tamarind, hing, and lentil additives until tender, then stone-grind or mash coarsely with a wooden mathu.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by LifeBox via the YouTube link above!"
    ]
  },
  {
    "id": "yt-muLRElWQ-d8",
    "name": "Inji Chutney",
    "englishSubtitle": "Inji Chutney | Alla Chutney | Ginger Chutney | Sourashtra Recipes | Sourashtra Samayal",
    "sourceAttribution": "Sugi cooks - SomethingDifferent, FOR ALL (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=muLRElWQ-d8",
    "webUrl": "https://sugi-writes.blogspot.com/search/label/Sourashtra%20Recipes",
    "category": "Budith, Losto & Polte (Chutneys/Masiyal)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Ginger",
      "Coconut",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8)",
      "Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp)",
      "Mustard Seeds, Urad Dal & Gingelly Oil (for tempering)",
      "Rock Salt / Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Ginger, Coconut, Curry Leaves) by washing, chopping, and measuring as shown by Sugi cooks - SomethingDifferent, FOR ALL.",
      "Gather the dry Madurai Sourashtra pantry additives: Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8); Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp); Mustard Seeds, Urad Dal & Gingelly Oil (for tempering); Rock Salt / Salt (Lenu).",
      "Cook or roast the main fridge ingredients with dry red chillies, tamarind, hing, and lentil additives until tender, then stone-grind or mash coarsely with a wooden mathu.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Sugi cooks - SomethingDifferent, FOR ALL via the YouTube link above!"
    ]
  },
  {
    "id": "yt-J9ShlMXam84",
    "name": "Losto (Pudhina Thuvaiyal)",
    "englishSubtitle": "Losto (Pudhina Thuvaiyal)",
    "sourceAttribution": "Yummy Sourashtra (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=J9ShlMXam84",
    "webUrl": "http://www.yummysourashtra.com/",
    "category": "Budith, Losto & Polte (Chutneys/Masiyal)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Mint Leaves",
      "Milk",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Losto (Pudhina Thuvaiyal)",
      "Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8)",
      "Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp)",
      "Mustard Seeds, Urad Dal & Gingelly Oil (for tempering)",
      "Rock Salt / Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Mint Leaves, Milk, Curry Leaves) by washing, chopping, and measuring as shown by Yummy Sourashtra.",
      "Gather the dry Madurai Sourashtra pantry additives: Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8); Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp); Mustard Seeds, Urad Dal & Gingelly Oil (for tempering); Rock Salt / Salt (Lenu).",
      "Cook or roast the main fridge ingredients with dry red chillies, tamarind, hing, and lentil additives until tender, then stone-grind or mash coarsely with a wooden mathu.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Yummy Sourashtra via the YouTube link above!"
    ]
  },
  {
    "id": "yt-4vYtFPZtda0",
    "name": "Losto(sourashtra)",
    "englishSubtitle": "Losto(sourashtra)/புதினா தொவயல்",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=4vYtFPZtda0",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Budith, Losto & Polte (Chutneys/Masiyal)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Garlic",
      "Ginger",
      "Curry Leaves",
      "Coriander",
      "Mint Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Mint 1 handful Coriander leaves 1 handful Curry leaves 1 handful Asafoetida 1/2 tsp Garlic pieces 3 Ginger 1/2 inch Red chili 15 ...",
      "Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8)",
      "Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp)",
      "Mustard Seeds, Urad Dal & Gingelly Oil (for tempering)",
      "Rock Salt / Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Garlic, Ginger, Curry Leaves, Coriander, Mint Leaves) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8); Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp); Mustard Seeds, Urad Dal & Gingelly Oil (for tempering); Rock Salt / Salt (Lenu).",
      "Cook or roast the main fridge ingredients with dry red chillies, tamarind, hing, and lentil additives until tender, then stone-grind or mash coarsely with a wooden mathu.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-Y3cS4xW_pk0",
    "name": "🌟 ULUNDHU KANJI",
    "englishSubtitle": "🌟 ULUNDHU KANJI / Sourashtra Kenni Paes / Side Dish for Kanji / Kanji Recipe / Urad Dal Porridge",
    "sourceAttribution": "Sugi cooks - SomethingDifferent, FOR ALL (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=Y3cS4xW_pk0",
    "webUrl": "https://sugi-writes.blogspot.com/search/label/Sourashtra%20Recipes",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Mint Leaves",
      "Coconut",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Mint Leaves, Coconut, Curry Leaves) by washing, chopping, and measuring as shown by Sugi cooks - SomethingDifferent, FOR ALL.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Sugi cooks - SomethingDifferent, FOR ALL via the YouTube link above!"
    ]
  },
  {
    "id": "yt-Hji_U9xSBv0",
    "name": "Puthina Chutni in Sourashtra",
    "englishSubtitle": "Puthina Chutni in Sourashtra",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=Hji_U9xSBv0",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Budith, Losto & Polte (Chutneys/Masiyal)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Coriander",
      "Mint Leaves",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Urad dhal - 2 tsp Red chili - 4 Tamarind - small amount Mint - 1/2 handful Coriander leaves - 1 handful Tempering - 1 tbsp oil, ...",
      "Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8)",
      "Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp)",
      "Mustard Seeds, Urad Dal & Gingelly Oil (for tempering)",
      "Rock Salt / Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Coriander, Mint Leaves, Curry Leaves) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8); Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp); Mustard Seeds, Urad Dal & Gingelly Oil (for tempering); Rock Salt / Salt (Lenu).",
      "Cook or roast the main fridge ingredients with dry red chillies, tamarind, hing, and lentil additives until tender, then stone-grind or mash coarsely with a wooden mathu.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-t8PspGTv6T0",
    "name": "Mutton sukka simple method",
    "englishSubtitle": "Mutton sukka simple method",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=t8PspGTv6T0",
    "webUrl": "https://jaleelacooking.blogspot.com/search?q=saurashtra",
    "category": "Non-Veg Ounty, Chaino & Kodhi",
    "dietaryType": "Non-Veg",
    "fridgeTriggers": [
      "Onion",
      "Garlic",
      "Ginger",
      "Curry Leaves",
      "Mutton"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Mutton 1/4kg Sombu 1 tsp Curry leaves 1 handful Onion 1 big Red chili 3 numbers Ginger garlic paste 1 tsp Turmeric powder 1/4 ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Onion, Garlic, Ginger, Curry Leaves, Mutton) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-4mDsCX9jty4",
    "name": "Rotti Halwa recipe in Sourashtra",
    "englishSubtitle": "Rotti Halwa recipe in Sourashtra",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=4mDsCX9jty4",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhairi & Appam (Fritters & Tiffin)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Rusk - 1 cup (100ml) Sugar - 1 cup Ghee - 1/2 cup Cardamom - 3 Cashews - 15 numbers.",
      "Idli Rice / Raw Rice (1 cup) & Urad Dal (2 tbsp)",
      "Black Pepper, Cumin Seeds (or Palm Jaggery / Gullu for sweet Appam/Dhowlo)",
      "Chenna Bhurko (Pottukadalai Podi, for serving with Bhairi)",
      "Gingelly Oil / Ghee & Salt (Lenu)"
    ],
    "bhurkoUsed": "Served with Chenna Bhurko (Roasted Gram Chutney Podi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Idli Rice / Raw Rice (1 cup) & Urad Dal (2 tbsp); Black Pepper, Cumin Seeds (or Palm Jaggery / Gullu for sweet Appam/Dhowlo); Chenna Bhurko (Pottukadalai Podi, for serving with Bhairi); Gingelly Oil / Ghee & Salt (Lenu).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Served with Chenna Bhurko (Roasted Gram Chutney Podi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-baHd3mfOowQ",
    "name": "Kovakai kutkiri",
    "englishSubtitle": "Kovakai kutkiri/Kovakai dhal (sourashtra)",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=baHd3mfOowQ",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ambat & Pitla (Rich Curries)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Kovakai 300gm Toor dhal 50gm Red chili 2 Asafoetida 1/4 tsp Salt to taste Turmeric 1/4 tsp.",
      "Toor Dal (Tuvaram Bela) or Chana Dal (Harbara Bela — 1/2 cup)",
      "Ounty Bhurko or Sambar Bhurko (1.5–2 tbsp)",
      "Tamarind (small gooseberry size), Turmeric & Hing",
      "Mustard Seeds, Urad Dal & Cooking Oil",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko / Sambar Bhurko",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Ounty Bhurko or Sambar Bhurko (1.5–2 tbsp); Tamarind (small gooseberry size), Turmeric & Hing; Mustard Seeds, Urad Dal & Cooking Oil; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko / Sambar Bhurko) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-7bFlEdUxcIQ",
    "name": "Shrimp(prawn) thokku in sourashtra",
    "englishSubtitle": "Shrimp(prawn) thokku in sourashtra",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=7bFlEdUxcIQ",
    "webUrl": "https://jaleelacooking.blogspot.com/search?q=saurashtra",
    "category": "Non-Veg Ounty, Chaino & Kodhi",
    "dietaryType": "Non-Veg",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Shrimp - 1/4 kg Turmeric powder - 1/2 tsp Chili powder - 1 1/4 tsp Malli powder - 1 tsp Garam masala - 1 tsp Pepper powder - 1 tsp ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-MYvlktELnP4",
    "name": "Goat liver fry in Sourashtra",
    "englishSubtitle": "Goat liver fry in Sourashtra",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=MYvlktELnP4",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Onion",
      "Garlic",
      "Ginger",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Goat liver - 1/4 kg Pepper- 1 tsp Cumin seeds - 1 tsp Garlic - 4 Ginger -small amount Turmeric -1/4 tsp Onion - 1/4 Chopped Salt ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Onion, Garlic, Ginger, Curry Leaves) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-KnSlYCcaSso",
    "name": "Home made Briyani masala powder",
    "englishSubtitle": "Home made Briyani masala powder",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=KnSlYCcaSso",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Ginger",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Pattai 10 numbers Brinji leaf 10 numbers Star anise (Annachi poo) 1/2 cup Fennel seeds(Sombu) 1/2 cup Cardamom 1/3 cup ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Ginger, Curry Leaves) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-A18f4sDssD0",
    "name": "Limbu pongal",
    "englishSubtitle": "Limbu pongal/Lemon rice in Sourashtra",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=A18f4sDssD0",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Lemon",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Rice 2 cups Salt to taste Mustard seeds 1/2 tsp Channa dhal 2 tbsp Peanut 2 tsp(optional) Red chili 7 Hing 1/8 tsp Turmeric ...",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Lemon, Curry Leaves) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-pdrVOZQkEcc",
    "name": "Chicken curry",
    "englishSubtitle": "Chicken curry/ kozhi curry",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=pdrVOZQkEcc",
    "webUrl": "https://jaleelacooking.blogspot.com/search?q=saurashtra",
    "category": "Non-Veg Ounty, Chaino & Kodhi",
    "dietaryType": "Non-Veg",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Green Chilli",
      "Curry Leaves",
      "Chicken"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Chicken 600-750gm Onion 1 big Green chili 3 Tomato 2 small or 1 big Turmeric powder 1/4 tsp Fennel seeds 1/4 tsp Red chili 1/4 ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Green Chilli, Curry Leaves, Chicken) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-JrG7U1W5G2s",
    "name": "Kuska recipe in Sourashtra",
    "englishSubtitle": "Kuska recipe in Sourashtra",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=JrG7U1W5G2s",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Garlic",
      "Ginger",
      "Green Chilli",
      "Mint Leaves",
      "Coconut",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Rice - 400 gm Onion - 1 small size Tomato - 1 medium size Garlic - 8 Ginger - 1 inch Green chili - 3 small Coconut - 1/2 Mint - 1/2 ...",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Garlic, Ginger, Green Chilli, Mint Leaves, Coconut, Curry Leaves) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-t-x8MTyLowU",
    "name": "Pasta with Marinara sauce",
    "englishSubtitle": "Pasta with Marinara sauce",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=t-x8MTyLowU",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Milk",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Pasta 400gm Marinara sauce 5-6 spoon Pesto sauce 1.5 spoon Butter 1-2 tsp Olive oil 3 tsp Red pepper as you required Salt to ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Milk, Curry Leaves) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-qnhVaYnznx8",
    "name": "Coconut chutney made with Chana dhal",
    "englishSubtitle": "Coconut chutney made with Chana dhal",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=qnhVaYnznx8",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Budith, Losto & Polte (Chutneys/Masiyal)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Garlic",
      "Ginger",
      "Curry Leaves",
      "Coconut"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Coconut 3 big pieces 3 spoon Chana dhal 6 red chili Small amount tamarind 4 garlic piece 1 inch ginger Handful curry and ...",
      "Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8)",
      "Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp)",
      "Mustard Seeds, Urad Dal & Gingelly Oil (for tempering)",
      "Rock Salt / Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Garlic, Ginger, Curry Leaves, Coconut) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8); Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp); Mustard Seeds, Urad Dal & Gingelly Oil (for tempering); Rock Salt / Salt (Lenu).",
      "Cook or roast the main fridge ingredients with dry red chillies, tamarind, hing, and lentil additives until tender, then stone-grind or mash coarsely with a wooden mathu.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-4s80Eb2_gx0",
    "name": "Chicken Ambat",
    "englishSubtitle": "Chicken Ambat/Chicken semi gravy",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=4s80Eb2_gx0",
    "webUrl": "https://jaleelacooking.blogspot.com/search?q=saurashtra",
    "category": "Non-Veg Ounty, Chaino & Kodhi",
    "dietaryType": "Non-Veg",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Garlic",
      "Ginger",
      "Green Chilli",
      "Chicken",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Chicken 600gm Onion 1 big Tomato 2 small or 1 big Green chili 3 Ginger garlic 2 tbsp Chicken masala 1 tsp Red chili 1/4 ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Garlic, Ginger, Green Chilli, Chicken, Curry Leaves) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-QyXeai63voQ",
    "name": "Mula ambat",
    "englishSubtitle": "Mula ambat/ Radish ambat",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=QyXeai63voQ",
    "webUrl": "https://www.sailajakitchen.org/search?q=sourashtra",
    "category": "Ambat & Pitla (Rich Curries)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Coriander",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Mulo 1 big Onion 1/2 Tomato 1 big Ounty burko 1/2 tsp Coriander powder 1/2 tsp Red chili powder 1/4 tsp optional Turmeric ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Coriander, Curry Leaves) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt---CiSlTNVpc",
    "name": "Kalla ambat",
    "englishSubtitle": "Kalla ambat",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=--CiSlTNVpc",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ambat & Pitla (Rich Curries)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Ginger",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Kallo 3 Onion 1/2 Ripe Tomato 2 Red chili 2 Cumin seeds 1/2 tsp Salt to taste Asafoetida little bit Tamarind very little bit Sugar 1/4 ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Ginger, Curry Leaves) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-fAOaHo3thoU",
    "name": "Coconut milk ounty",
    "englishSubtitle": "Coconut milk ounty/Nalardhooth ounty in sourashtra",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=fAOaHo3thoU",
    "webUrl": "https://www.sailajakitchen.org/search?q=sourashtra",
    "category": "Ambat & Pitla (Rich Curries)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Green Chilli",
      "Curry Leaves",
      "Coriander",
      "Coconut",
      "Milk"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Small Onion 20-25 numbers Tomato 8 Red chili 1 Green chili 3 Coconut 1 Coriander and curry leaves little bit Ounty burko 1 tsp ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Green Chilli, Curry Leaves, Coriander, Coconut, Milk) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-NV7-51C-MDU",
    "name": "Chettinad style chicken ounty in sourashtra",
    "englishSubtitle": "Chettinad style chicken ounty in sourashtra",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=NV7-51C-MDU",
    "webUrl": "https://jaleelacooking.blogspot.com/search?q=saurashtra",
    "category": "Non-Veg Ounty, Chaino & Kodhi",
    "dietaryType": "Non-Veg",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves",
      "Chicken"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Chicken - 400gm Onion - 1 small Tomato - 2 small Curry leaves - 1string Malli - 2 tbsp Fennel - 1 tsp Cumin seeds - 1 tsp Pepper ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves, Chicken) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-cLNoytvhPF4",
    "name": "Traditional style Fish Ounty (Sourashtra)",
    "englishSubtitle": "Traditional style Fish Ounty (Sourashtra)",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=cLNoytvhPF4",
    "webUrl": "https://jaleelacooking.blogspot.com/search?q=saurashtra",
    "category": "Non-Veg Ounty, Chaino & Kodhi",
    "dietaryType": "Non-Veg",
    "fridgeTriggers": [
      "Fish",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Pepper- 1 tea spoon Fennel seed - 1/2 tea spoon Cumin seed - 1/2 tea spoon Kozhambu powder -2 tea spoon Mali powder 1 tea ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Fish, Curry Leaves) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-C22oUu3JkkA",
    "name": "Chainaa ounty",
    "englishSubtitle": "Chainaa ounty/Mutton ounty in Sourashtra",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=C22oUu3JkkA",
    "webUrl": "https://jaleelacooking.blogspot.com/search?q=saurashtra",
    "category": "Non-Veg Ounty, Chaino & Kodhi",
    "dietaryType": "Non-Veg",
    "fridgeTriggers": [
      "Curry Leaves",
      "Coconut",
      "Mutton"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Mutton - 1/4 kg Malli - 2 tsp Cumin seeds - 1 tsp Red chili - 6 Curry leaves - 2 string Coconut- 2 chillu Cashews - 10 pieces Fennel ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Curry Leaves, Coconut, Mutton) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-xgpHbiqXRAw",
    "name": "Mutton chukka varuval in sourashtra",
    "englishSubtitle": "Mutton chukka varuval in sourashtra/ chukka varuval",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=xgpHbiqXRAw",
    "webUrl": "https://jaleelacooking.blogspot.com/search?q=saurashtra",
    "category": "Non-Veg Ounty, Chaino & Kodhi",
    "dietaryType": "Non-Veg",
    "fridgeTriggers": [
      "Onion",
      "Garlic",
      "Ginger",
      "Green Chilli",
      "Mutton",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Mutton Onion - 1 Pepper - 1 tsp Malli - 1 tsp Jeera - 1 tsp Green chili - 1 optional Red chili - 3 Ginger- small amount Garlic - 4.",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Onion, Garlic, Ginger, Green Chilli, Mutton, Curry Leaves) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-GWvB6fL2lzo",
    "name": "Urunda kozhambu in sourashtra",
    "englishSubtitle": "Urunda kozhambu in sourashtra",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=GWvB6fL2lzo",
    "webUrl": "https://www.sailajakitchen.org/search?q=sourashtra",
    "category": "Ambat & Pitla (Rich Curries)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Channa dhal 1 cup Fennel seeds 1.5 spoon Small onion 10-12 pieces Tomato 3 Ounty burko 4 tea spoon Tamarind 1 goose berry ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-tLjjax6kRLU",
    "name": "Muttai masala (masal ando)",
    "englishSubtitle": "Muttai masala (masal ando)/ Egg masala/ egg curry in sourashtra",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=tLjjax6kRLU",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Non-Veg Ounty, Chaino & Kodhi",
    "dietaryType": "Eggitarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves",
      "Eggs"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Egg - 3 boiled Onion - 3/4 small size onion Tomato - 1 Garam masala - 1/3 tsp Turmeric powder - 1/4 tsp Chili powder - 1/2 tsp ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves, Eggs) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-6Dt-xmDvgPY",
    "name": "Koththamalli Chutni recipe in Sourashtra",
    "englishSubtitle": "Koththamalli Chutni recipe in Sourashtra",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=6Dt-xmDvgPY",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Ginger",
      "Curry Leaves",
      "Coriander",
      "Mint Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Tomato - 6 Red chilli - 5 Ginger - small finger size Channa dhal - 3 1/2 tsp Mint, coriander and curry leaves together - one handful.",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Ginger, Curry Leaves, Coriander, Mint Leaves) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-OrN9BzhwLOI",
    "name": "Rava Pongal in Tamil",
    "englishSubtitle": "Rava Pongal in Tamil",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=OrN9BzhwLOI",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Ginger",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Ravai - 250 gm Moong dhal - 75 gm Pepper - 1 tsp Cumin seeds - 1 tsp Ginger - 1 inch Curry leaves - 1 string Cashews - 20 Make ...",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Ginger, Curry Leaves) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-hWdKgdxr-Ow",
    "name": "Rava Pongal in Sourashtra",
    "englishSubtitle": "Rava Pongal in Sourashtra",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=hWdKgdxr-Ow",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Ginger",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Ravai - 250 gm Moong dhal - 75 gm Pepper - 1 tsp Cumin seeds - 1 tsp Ginger - 1 inch Curry leaves - 1 string Cashews - 20 Make ...",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Ginger, Curry Leaves) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-1w21dQSeSwA",
    "name": "Hotel Style Losan chutni",
    "englishSubtitle": "Hotel Style Losan chutni",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=1w21dQSeSwA",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Garlic",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Losan(Garlic) 12 pieces Onion- half of (garlic)losan Tomato- 1 big red chilli -6 Kashmiri chilli- 3-4 for color(its optional)",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Garlic, Curry Leaves) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-G7JaJvUPbhM",
    "name": "Kudamilagai Chutni (Sourashtra)",
    "englishSubtitle": "Kudamilagai Chutni (Sourashtra)",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=G7JaJvUPbhM",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-GeGWN69IGQQ",
    "name": "Bombay chutni",
    "englishSubtitle": "Bombay chutni",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=GeGWN69IGQQ",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Garlic",
      "Ginger",
      "Green Chilli",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Onion 1 or 1/2 Tomato 1 Green chili 2 Ginger garlic paste 1/2 tsp Turmeric powder 1/8 tsp Hing 1/4 tsp Salt to taste Besan powder ...",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Garlic, Ginger, Green Chilli, Curry Leaves) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-r9q0D7X-FGk",
    "name": "Mixture chutney",
    "englishSubtitle": "Mixture chutney/onion tomato with mint chutni",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=r9q0D7X-FGk",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Coriander",
      "Mint Leaves",
      "Coconut",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Tomato 3 Onion 1 Channa dhal 2 tbsp Red chili 3 Mint one handful Coriander small amount Coconut 1 chillu Hing little bit Salt to ...",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Coriander, Mint Leaves, Coconut, Curry Leaves) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-Fjbu4eb49IE",
    "name": "Onion Tomato Chutni (Sourashtra)",
    "englishSubtitle": "Onion Tomato Chutni (Sourashtra)",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=Fjbu4eb49IE",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-hyHIF6YBRFI",
    "name": "Bhajji Chaar",
    "englishSubtitle": "Bhajji Chaar",
    "sourceAttribution": "Yummy Sourashtra (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=hyHIF6YBRFI",
    "webUrl": "http://www.yummysourashtra.com/",
    "category": "Pilchar & Charu (Rasam/Broths)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Spinach",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Pilchar Bhurko / Sourashtra Rasam Podi (1.5–2 tbsp)",
      "Tamarind Extract (Ambat) & Cooked Toor Dal Water",
      "Black Pepper (Miri), Cumin Seeds (Jeera) & Hing",
      "Mustard Seeds & Ghee (Thup — 1 tsp)",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Spinach, Curry Leaves) by washing, chopping, and measuring as shown by Yummy Sourashtra.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind Extract (Ambat) & Cooked Toor Dal Water; Black Pepper (Miri), Cumin Seeds (Jeera) & Hing; Mustard Seeds & Ghee (Thup — 1 tsp); Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Yummy Sourashtra via the YouTube link above!"
    ]
  },
  {
    "id": "yt-QfILOySdFOc",
    "name": "Sekki Bath (Parutthi Sadham)",
    "englishSubtitle": "Sekki Bath (Parutthi Sadham)",
    "sourceAttribution": "Yummy Sourashtra (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=QfILOySdFOc",
    "webUrl": "http://www.yummysourashtra.com/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: I created this video with the YouTube Video Editor (http://www.youtube.com/editor)",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Yummy Sourashtra.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Yummy Sourashtra via the YouTube link above!"
    ]
  },
  {
    "id": "yt-SkH3W4iK5jA",
    "name": "Doodun Dhowlo",
    "englishSubtitle": "Doodun Dhowlo",
    "sourceAttribution": "Yummy Sourashtra (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=SkH3W4iK5jA",
    "webUrl": "http://www.yummysourashtra.com/",
    "category": "Bhairi & Appam (Fritters & Tiffin)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Idli Rice / Raw Rice (1 cup) & Urad Dal (2 tbsp)",
      "Black Pepper, Cumin Seeds (or Palm Jaggery / Gullu for sweet Appam/Dhowlo)",
      "Chenna Bhurko (Pottukadalai Podi, for serving with Bhairi)",
      "Gingelly Oil / Ghee & Salt (Lenu)"
    ],
    "bhurkoUsed": "Served with Chenna Bhurko (Roasted Gram Chutney Podi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Yummy Sourashtra.",
      "Gather the dry Madurai Sourashtra pantry additives: Idli Rice / Raw Rice (1 cup) & Urad Dal (2 tbsp); Black Pepper, Cumin Seeds (or Palm Jaggery / Gullu for sweet Appam/Dhowlo); Chenna Bhurko (Pottukadalai Podi, for serving with Bhairi); Gingelly Oil / Ghee & Salt (Lenu).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Served with Chenna Bhurko (Roasted Gram Chutney Podi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Yummy Sourashtra via the YouTube link above!"
    ]
  },
  {
    "id": "yt-jIROGiZxmF0",
    "name": "Sivja Udith",
    "englishSubtitle": "Sivja Udith",
    "sourceAttribution": "Yummy Sourashtra (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=jIROGiZxmF0",
    "webUrl": "http://www.yummysourashtra.com/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: This video is about Sivja Udith.",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Yummy Sourashtra.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Yummy Sourashtra via the YouTube link above!"
    ]
  },
  {
    "id": "yt-IkOO_lwHM4k",
    "name": "Koula raitha in sourashtra",
    "englishSubtitle": "Koula raitha in sourashtra",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=IkOO_lwHM4k",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Milk",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Koula- 1 Curd Salt to taste Asafoetida small amount.",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Milk, Curry Leaves) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-k-H-m7pqC3Q",
    "name": "Polda (Avittha) chicken",
    "englishSubtitle": "Polda (Avittha) chicken",
    "sourceAttribution": "Yummy Sourashtra (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=k-H-m7pqC3Q",
    "webUrl": "http://www.yummysourashtra.com/",
    "category": "Non-Veg Ounty, Chaino & Kodhi",
    "dietaryType": "Non-Veg",
    "fridgeTriggers": [
      "Chicken",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Chicken, Curry Leaves) by washing, chopping, and measuring as shown by Yummy Sourashtra.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Yummy Sourashtra via the YouTube link above!"
    ]
  },
  {
    "id": "yt-l3SHx0yYP_c",
    "name": "Chaiena Ounty",
    "englishSubtitle": "Chaiena Ounty",
    "sourceAttribution": "Yummy Sourashtra (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=l3SHx0yYP_c",
    "webUrl": "http://www.yummysourashtra.com/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Yummy Sourashtra Recipe.",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Yummy Sourashtra.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Yummy Sourashtra via the YouTube link above!"
    ]
  },
  {
    "id": "yt-81cORF7vmBQ",
    "name": "Pepper chicken in sourashtra",
    "englishSubtitle": "Pepper chicken in sourashtra",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=81cORF7vmBQ",
    "webUrl": "https://jaleelacooking.blogspot.com/search?q=saurashtra",
    "category": "Non-Veg Ounty, Chaino & Kodhi",
    "dietaryType": "Non-Veg",
    "fridgeTriggers": [
      "Onion",
      "Garlic",
      "Green Chilli",
      "Curry Leaves",
      "Chicken"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Chicken - 650 gm Onion - 1 big Garlic - 12 Pepper - 1 1/2 tsp Cumin seeds - 1 1/2 tsp Fennel seeds - 3/4 tsp Green chili - 2 Curry ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Onion, Garlic, Green Chilli, Curry Leaves, Chicken) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-Qxt2y5I94yY",
    "name": "Thakkali Chaar",
    "englishSubtitle": "Thakkali Chaar",
    "sourceAttribution": "Yummy Sourashtra (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=Qxt2y5I94yY",
    "webUrl": "http://www.yummysourashtra.com/",
    "category": "Pilchar & Charu (Rasam/Broths)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Yummy Sourashtra Recipe.",
      "Pilchar Bhurko / Sourashtra Rasam Podi (1.5–2 tbsp)",
      "Tamarind Extract (Ambat) & Cooked Toor Dal Water",
      "Black Pepper (Miri), Cumin Seeds (Jeera) & Hing",
      "Mustard Seeds & Ghee (Thup — 1 tsp)",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Curry Leaves) by washing, chopping, and measuring as shown by Yummy Sourashtra.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind Extract (Ambat) & Cooked Toor Dal Water; Black Pepper (Miri), Cumin Seeds (Jeera) & Hing; Mustard Seeds & Ghee (Thup — 1 tsp); Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Yummy Sourashtra via the YouTube link above!"
    ]
  },
  {
    "id": "yt-x6VjwHuJMIo",
    "name": "Chicken Ambat",
    "englishSubtitle": "Chicken Ambat",
    "sourceAttribution": "Yummy Sourashtra (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=x6VjwHuJMIo",
    "webUrl": "http://www.yummysourashtra.com/",
    "category": "Non-Veg Ounty, Chaino & Kodhi",
    "dietaryType": "Non-Veg",
    "fridgeTriggers": [
      "Chicken",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Chicken, Curry Leaves) by washing, chopping, and measuring as shown by Yummy Sourashtra.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Yummy Sourashtra via the YouTube link above!"
    ]
  },
  {
    "id": "yt-2em_H_kE3kk",
    "name": "Sambaar Sadham",
    "englishSubtitle": "Sambaar Sadham",
    "sourceAttribution": "Yummy Sourashtra (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=2em_H_kE3kk",
    "webUrl": "http://www.yummysourashtra.com/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Milk",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: For more recipes, visit us at http://www.yummysourashtra.com.",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Milk, Curry Leaves) by washing, chopping, and measuring as shown by Yummy Sourashtra.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Yummy Sourashtra via the YouTube link above!"
    ]
  },
  {
    "id": "yt-2HYBuy5bsQo",
    "name": "Dhein Pongal",
    "englishSubtitle": "Dhein Pongal",
    "sourceAttribution": "Yummy Sourashtra (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=2HYBuy5bsQo",
    "webUrl": "http://www.yummysourashtra.com/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Yummy Sourashtra.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Yummy Sourashtra via the YouTube link above!"
    ]
  },
  {
    "id": "yt-2Uw_B2Favq0",
    "name": "Chenna Burkho",
    "englishSubtitle": "Chenna Burkho",
    "sourceAttribution": "Yummy Sourashtra (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=2Uw_B2Favq0",
    "webUrl": "http://www.yummysourashtra.com/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Yummy Sourashtra.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Yummy Sourashtra via the YouTube link above!"
    ]
  },
  {
    "id": "yt-R3NM3laiNE0",
    "name": "Dhein Ounty",
    "englishSubtitle": "Dhein Ounty",
    "sourceAttribution": "Yummy Sourashtra (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=R3NM3laiNE0",
    "webUrl": "http://www.yummysourashtra.com/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Yummy Sourashtra.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Yummy Sourashtra via the YouTube link above!"
    ]
  },
  {
    "id": "yt-xX9nusIaqjA",
    "name": "Lovule Puri (Sweet Appam)",
    "englishSubtitle": "Lovule Puri (Sweet Appam)",
    "sourceAttribution": "Yummy Sourashtra (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=xX9nusIaqjA",
    "webUrl": "http://www.yummysourashtra.com/",
    "category": "Bhairi & Appam (Fritters & Tiffin)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Idli Rice / Raw Rice (1 cup) & Urad Dal (2 tbsp)",
      "Black Pepper, Cumin Seeds (or Palm Jaggery / Gullu for sweet Appam/Dhowlo)",
      "Chenna Bhurko (Pottukadalai Podi, for serving with Bhairi)",
      "Gingelly Oil / Ghee & Salt (Lenu)"
    ],
    "bhurkoUsed": "Served with Chenna Bhurko (Roasted Gram Chutney Podi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Yummy Sourashtra.",
      "Gather the dry Madurai Sourashtra pantry additives: Idli Rice / Raw Rice (1 cup) & Urad Dal (2 tbsp); Black Pepper, Cumin Seeds (or Palm Jaggery / Gullu for sweet Appam/Dhowlo); Chenna Bhurko (Pottukadalai Podi, for serving with Bhairi); Gingelly Oil / Ghee & Salt (Lenu).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Served with Chenna Bhurko (Roasted Gram Chutney Podi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Yummy Sourashtra via the YouTube link above!"
    ]
  },
  {
    "id": "yt-GL9c1P9ifDQ",
    "name": "Thakkali Pongal",
    "englishSubtitle": "Thakkali Pongal",
    "sourceAttribution": "Yummy Sourashtra (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=GL9c1P9ifDQ",
    "webUrl": "http://www.yummysourashtra.com/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Curry Leaves) by washing, chopping, and measuring as shown by Yummy Sourashtra.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Yummy Sourashtra via the YouTube link above!"
    ]
  },
  {
    "id": "yt-ju-gSlXVS0Y",
    "name": "Gullu pongal",
    "englishSubtitle": "Gullu pongal",
    "sourceAttribution": "Yummy Sourashtra (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=ju-gSlXVS0Y",
    "webUrl": "http://www.yummysourashtra.com/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Yummy Sourashtra.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Yummy Sourashtra via the YouTube link above!"
    ]
  },
  {
    "id": "yt-ehl6uZiREgg",
    "name": "Doodhu Pongal",
    "englishSubtitle": "Doodhu Pongal",
    "sourceAttribution": "Yummy Sourashtra (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=ehl6uZiREgg",
    "webUrl": "http://www.yummysourashtra.com/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Milk",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Milk, Curry Leaves) by washing, chopping, and measuring as shown by Yummy Sourashtra.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Yummy Sourashtra via the YouTube link above!"
    ]
  },
  {
    "id": "yt-g27sxWL8bfs",
    "name": "Kallo Kachenno Ounty",
    "englishSubtitle": "Kallo Kachenno Ounty",
    "sourceAttribution": "Yummy Sourashtra (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=g27sxWL8bfs",
    "webUrl": "http://www.yummysourashtra.com/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Yummy Sourashtra.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Yummy Sourashtra via the YouTube link above!"
    ]
  },
  {
    "id": "yt-qXpE0V_I7E8",
    "name": "Kalla Ambat (Bitterguard)",
    "englishSubtitle": "Kalla Ambat (Bitterguard)",
    "sourceAttribution": "Yummy Sourashtra (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=qXpE0V_I7E8",
    "webUrl": "http://www.yummysourashtra.com/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Ginger",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Ginger, Curry Leaves) by washing, chopping, and measuring as shown by Yummy Sourashtra.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Yummy Sourashtra via the YouTube link above!"
    ]
  },
  {
    "id": "yt-JO7DDS04R-Q",
    "name": "Khovla Ambat (white Pusanikkai)",
    "englishSubtitle": "Khovla Ambat (white Pusanikkai)",
    "sourceAttribution": "Yummy Sourashtra (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=JO7DDS04R-Q",
    "webUrl": "http://www.yummysourashtra.com/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Yummy Sourashtra.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Yummy Sourashtra via the YouTube link above!"
    ]
  },
  {
    "id": "yt-LRgtVu-UIr0",
    "name": "Kachano Ambat",
    "englishSubtitle": "Kachano Ambat",
    "sourceAttribution": "Yummy Sourashtra (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=LRgtVu-UIr0",
    "webUrl": "http://www.yummysourashtra.com/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Yummy Sourashtra.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Yummy Sourashtra via the YouTube link above!"
    ]
  },
  {
    "id": "yt-cP0EXLmY6RY",
    "name": "Limbu Pongal (Lemon rice)",
    "englishSubtitle": "Limbu Pongal (Lemon rice)",
    "sourceAttribution": "Yummy Sourashtra (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=cP0EXLmY6RY",
    "webUrl": "http://www.yummysourashtra.com/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Lemon",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Lemon, Curry Leaves) by washing, chopping, and measuring as shown by Yummy Sourashtra.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Yummy Sourashtra via the YouTube link above!"
    ]
  },
  {
    "id": "yt-A9Ci0DTmpHU",
    "name": "Kaalaan (Mushroom) Ambat",
    "englishSubtitle": "Kaalaan (Mushroom) Ambat",
    "sourceAttribution": "Yummy Sourashtra (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=A9Ci0DTmpHU",
    "webUrl": "http://www.yummysourashtra.com/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Milk",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: For more videos, visit us at http://www.yummysourashtra.com.",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Milk, Curry Leaves) by washing, chopping, and measuring as shown by Yummy Sourashtra.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Yummy Sourashtra via the YouTube link above!"
    ]
  },
  {
    "id": "yt-Y-l1rJvC50A",
    "name": "Kandhullo (Kolakkattai)",
    "englishSubtitle": "Kandhullo (Kolakkattai)",
    "sourceAttribution": "Yummy Sourashtra (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=Y-l1rJvC50A",
    "webUrl": "http://www.yummysourashtra.com/",
    "category": "Non-Veg Ounty, Chaino & Kodhi",
    "dietaryType": "Non-Veg",
    "fridgeTriggers": [
      "Mutton",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Visit https://yummysourashtra.com/kandhullo-kolakkattai/ for Instructions.",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Mutton, Curry Leaves) by washing, chopping, and measuring as shown by Yummy Sourashtra.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Yummy Sourashtra via the YouTube link above!"
    ]
  },
  {
    "id": "yt-D0yLK-Ee8iE",
    "name": "Trailer...",
    "englishSubtitle": "Trailer... | Traditional Sourashtra Kitchen | All Tasty Recipes",
    "sourceAttribution": "Traditional Sourashtra Kitchen (பாரம்பரிய முறை) (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=D0yLK-Ee8iE",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Traditional Sourashtra Kitchen (பாரம்பரிய முறை).",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Traditional Sourashtra Kitchen (பாரம்பரிய முறை) via the YouTube link above!"
    ]
  },
  {
    "id": "yt-PEOu2BN4zgQ",
    "name": "Sourashtra Special Tomato Kuzhambu",
    "englishSubtitle": "Sourashtra Special Tomato Kuzhambu | தக்காளி (குழம்பு) அவுண்டி | Recipe - 7",
    "sourceAttribution": "Traditional Sourashtra Kitchen (பாரம்பரிய முறை) (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=PEOu2BN4zgQ",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Good day viewers, தக்காளி அவுண்டி (குழம்பு) . சௌராஷ்ட்ரா சமூகத்தினர் ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Curry Leaves) by washing, chopping, and measuring as shown by Traditional Sourashtra Kitchen (பாரம்பரிய முறை).",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Traditional Sourashtra Kitchen (பாரம்பரிய முறை) via the YouTube link above!"
    ]
  },
  {
    "id": "yt-00IYUawxCbs",
    "name": "Sourashtra Rasam",
    "englishSubtitle": "Sourashtra Rasam | மிளகு ரசம் (பருப்பு சேர்த்தது) | சௌராஷ்ட்ரா பில்சார் | Recipe - 55",
    "sourceAttribution": "Traditional Sourashtra Kitchen (பாரம்பரிய முறை) (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=00IYUawxCbs",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Pilchar & Charu (Rasam/Broths)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: சௌராஷ்ட்ரா பாரம்பரிய முறைப்படி ரசம் எப்படி செய்வது என்று ...",
      "Pilchar Bhurko / Sourashtra Rasam Podi (1.5–2 tbsp)",
      "Tamarind Extract (Ambat) & Cooked Toor Dal Water",
      "Black Pepper (Miri), Cumin Seeds (Jeera) & Hing",
      "Mustard Seeds & Ghee (Thup — 1 tsp)",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Traditional Sourashtra Kitchen (பாரம்பரிய முறை).",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind Extract (Ambat) & Cooked Toor Dal Water; Black Pepper (Miri), Cumin Seeds (Jeera) & Hing; Mustard Seeds & Ghee (Thup — 1 tsp); Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Traditional Sourashtra Kitchen (பாரம்பரிய முறை) via the YouTube link above!"
    ]
  },
  {
    "id": "yt-EcwwLF1oIf0",
    "name": "Brinjal, Drum Stick Kuzhambu",
    "englishSubtitle": "Brinjal, Drum Stick Kuzhambu | கத்திரி, முருங்கை குழம்பு | வங்கி, செவாக்கைளோ அவுண்டி | Recipe - 50",
    "sourceAttribution": "Traditional Sourashtra Kitchen (பாரம்பரிய முறை) (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=EcwwLF1oIf0",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Brinjal",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: இது சௌராஷ்ட்ரா மக்களின் பாரம்பரியமான கத்திரிக்காய், ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Brinjal, Curry Leaves) by washing, chopping, and measuring as shown by Traditional Sourashtra Kitchen (பாரம்பரிய முறை).",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Traditional Sourashtra Kitchen (பாரம்பரிய முறை) via the YouTube link above!"
    ]
  },
  {
    "id": "yt-zkCG2SIBKP8",
    "name": "curd rice recipe,sourashtra, thayir sadham,dahi chawal, thayir choru,curd rice south indian style",
    "englishSubtitle": "curd rice recipe,sourashtra, thayir sadham,dahi chawal, thayir choru,curd rice south indian style",
    "sourceAttribution": "Mekan Recipes (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=zkCG2SIBKP8",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Milk",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: curd rice,curd rice recipe,how to make curd rice,rice,curd rice south indian style,best curd rice recipe,spicy curd rice,south indian ...",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Milk, Curry Leaves) by washing, chopping, and measuring as shown by Mekan Recipes.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Mekan Recipes via the YouTube link above!"
    ]
  },
  {
    "id": "yt-NVDp2S-7uXc",
    "name": "Channel Trailer for Puliady’s Kitchen - World Famous Recipes By Sangeetha! #Sourashtra Recipes",
    "englishSubtitle": "Channel Trailer for Puliady’s Kitchen - World Famous Recipes By Sangeetha! #Sourashtra Recipes",
    "sourceAttribution": "Puliady’s Kitchen! (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=NVDp2S-7uXc",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Puliady's Kitchen!",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Puliady’s Kitchen!.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Puliady’s Kitchen! via the YouTube link above!"
    ]
  },
  {
    "id": "yt-YhcTc1a_c70",
    "name": "Sourashtra Special Combo",
    "englishSubtitle": "Sourashtra Special Combo | நெய் பொங்கல் & லெமன் ரைஸ் | தூவ் பொங்கல், லிம்பு பொங்கல் | Recipe - 81",
    "sourceAttribution": "Traditional Sourashtra Kitchen (பாரம்பரிய முறை) (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=YhcTc1a_c70",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Lemon",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Sourashtra Special Combo - Ghee Jeera Rice and Lemon Rice விசேசமான நாட்களில் சௌராஷ்ட்ரா இன ...",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Lemon, Curry Leaves) by washing, chopping, and measuring as shown by Traditional Sourashtra Kitchen (பாரம்பரிய முறை).",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Traditional Sourashtra Kitchen (பாரம்பரிய முறை) via the YouTube link above!"
    ]
  },
  {
    "id": "yt-Pzt2swZ8MVs",
    "name": "Kerpaav (curry leaves) Kozhumbu",
    "englishSubtitle": "Kerpaav (curry leaves) Kozhumbu| traditional recipe in Sourashtra",
    "sourceAttribution": "Ammana’s Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=Pzt2swZ8MVs",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: This is a traditional recipe called Kerpaav Kozhumbu. We add curry leaves to our dishes but never consume it. In order to add it to ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Curry Leaves) by washing, chopping, and measuring as shown by Ammana’s Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Ammana’s Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-Qws68YEaSQY",
    "name": "Puliyotharai mix & puliyotharai",
    "englishSubtitle": "Puliyotharai mix & puliyotharai | Hema's sourashtra samayal in Tamil",
    "sourceAttribution": "Hema's Sourashtra Samayal (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=Qws68YEaSQY",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Hema's sourashtra samayal in Tamil | PULIYOTHARAI MIX AND PULIYOTHARAI.",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Hema's Sourashtra Samayal.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Hema's Sourashtra Samayal via the YouTube link above!"
    ]
  },
  {
    "id": "yt-qUkotyTWm88",
    "name": "Kovil puliogare (Instant puliogare)",
    "englishSubtitle": "Kovil puliogare (Instant puliogare) | Hema's Sourashtra Samayal in Tamil",
    "sourceAttribution": "Hema's Sourashtra Samayal (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=qUkotyTWm88",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: This is a very easy recipe for instant puliogare preparation. Link for Sourashtra Puliyotharai mix ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Hema's Sourashtra Samayal.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Hema's Sourashtra Samayal via the YouTube link above!"
    ]
  },
  {
    "id": "yt-QOjHbBac6Ks",
    "name": "Potato Fry",
    "englishSubtitle": "Potato Fry | Hema's Sourashtra Samayal",
    "sourceAttribution": "Hema's Sourashtra Samayal (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=QOjHbBac6Ks",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Potato",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Easy and simple recipe to make potato fry in tamil.",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Potato, Curry Leaves) by washing, chopping, and measuring as shown by Hema's Sourashtra Samayal.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Hema's Sourashtra Samayal via the YouTube link above!"
    ]
  },
  {
    "id": "yt-Y1l-cqfJw7Y",
    "name": "Paal payasam",
    "englishSubtitle": "Paal payasam | Hema's Sourashtra samayal",
    "sourceAttribution": "Hema's Sourashtra Samayal (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=Y1l-cqfJw7Y",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Milk",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Milk, Curry Leaves) by washing, chopping, and measuring as shown by Hema's Sourashtra Samayal.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Hema's Sourashtra Samayal via the YouTube link above!"
    ]
  },
  {
    "id": "yt-eFvKcGYWpBI",
    "name": "Mullangi Kulambu",
    "englishSubtitle": "Mullangi Kulambu | Hema's sourashtra samayal in Tamil",
    "sourceAttribution": "Hema's Sourashtra Samayal (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=eFvKcGYWpBI",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Home made Sourashtra samayal in Tamil. A recipe on Mullangi Kulambu preparation.",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Hema's Sourashtra Samayal.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Hema's Sourashtra Samayal via the YouTube link above!"
    ]
  },
  {
    "id": "yt-SFvS5eGBr0o",
    "name": "Karunakkelangu Kulambu",
    "englishSubtitle": "Karunakkelangu Kulambu | Hema's sourashtra samayal in Tamil",
    "sourceAttribution": "Hema's Sourashtra Samayal (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=SFvS5eGBr0o",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Home made Sourashtra samayal in Tamil. A recipe on Karunakkelangu Kulambu preparation.",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Hema's Sourashtra Samayal.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Hema's Sourashtra Samayal via the YouTube link above!"
    ]
  },
  {
    "id": "yt-X3RBvxeoQfY",
    "name": "Egg Masala",
    "englishSubtitle": "Egg Masala | Hema's sourashtra samayal in Tamil",
    "sourceAttribution": "Hema's Sourashtra Samayal (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=X3RBvxeoQfY",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Non-Veg Ounty, Chaino & Kodhi",
    "dietaryType": "Eggitarian",
    "fridgeTriggers": [
      "Eggs",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Hema's sourashtra samayal in Tamil | Egg Masala.",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Eggs, Curry Leaves) by washing, chopping, and measuring as shown by Hema's Sourashtra Samayal.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Hema's Sourashtra Samayal via the YouTube link above!"
    ]
  },
  {
    "id": "yt-9pavUxbAO-Y",
    "name": "Rava Laddu",
    "englishSubtitle": "Rava Laddu | Hema's Sourashtra Samayal in Tamil",
    "sourceAttribution": "Hema's Sourashtra Samayal (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=9pavUxbAO-Y",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhairi & Appam (Fritters & Tiffin)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Easy recipe to make delicious Rava Laddu in Tamil.",
      "Idli Rice / Raw Rice (1 cup) & Urad Dal (2 tbsp)",
      "Black Pepper, Cumin Seeds (or Palm Jaggery / Gullu for sweet Appam/Dhowlo)",
      "Chenna Bhurko (Pottukadalai Podi, for serving with Bhairi)",
      "Gingelly Oil / Ghee & Salt (Lenu)"
    ],
    "bhurkoUsed": "Served with Chenna Bhurko (Roasted Gram Chutney Podi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Hema's Sourashtra Samayal.",
      "Gather the dry Madurai Sourashtra pantry additives: Idli Rice / Raw Rice (1 cup) & Urad Dal (2 tbsp); Black Pepper, Cumin Seeds (or Palm Jaggery / Gullu for sweet Appam/Dhowlo); Chenna Bhurko (Pottukadalai Podi, for serving with Bhairi); Gingelly Oil / Ghee & Salt (Lenu).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Served with Chenna Bhurko (Roasted Gram Chutney Podi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Hema's Sourashtra Samayal via the YouTube link above!"
    ]
  },
  {
    "id": "yt-WYFuHts9Y64",
    "name": "Butter beans gravy",
    "englishSubtitle": "Butter beans gravy | Hema's Sourashtra samayal in Tamil",
    "sourceAttribution": "Hema's Sourashtra Samayal (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=WYFuHts9Y64",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Beans",
      "Milk",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: A very easy recipe to prepare Sourashtra butter beans gravy. Link to Sourashtra Kolambu podi ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Beans, Milk, Curry Leaves) by washing, chopping, and measuring as shown by Hema's Sourashtra Samayal.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Hema's Sourashtra Samayal via the YouTube link above!"
    ]
  },
  {
    "id": "yt-gRlscOfkXk8",
    "name": "Paasiparuppu Sambhar",
    "englishSubtitle": "Paasiparuppu Sambhar | Hema's sourashtra samayal in Tamil",
    "sourceAttribution": "Hema's Sourashtra Samayal (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=gRlscOfkXk8",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Sambar (Lentil Stews)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Hema's sourashtra samayal in Tamil| Paasiparuppu Sambhar.",
      "Toor Dal (Tuvaram Bela) or Chana Dal (Harbara Bela — 1/2 cup)",
      "Ounty Bhurko or Sambar Bhurko (1.5–2 tbsp)",
      "Tamarind (small gooseberry size), Turmeric & Hing",
      "Mustard Seeds, Urad Dal & Cooking Oil",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko / Sambar Bhurko",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Hema's Sourashtra Samayal.",
      "Gather the dry Madurai Sourashtra pantry additives: Ounty Bhurko or Sambar Bhurko (1.5–2 tbsp); Tamarind (small gooseberry size), Turmeric & Hing; Mustard Seeds, Urad Dal & Cooking Oil; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko / Sambar Bhurko) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Hema's Sourashtra Samayal via the YouTube link above!"
    ]
  },
  {
    "id": "yt-M4BiUHxuXwQ",
    "name": "SAMBHAR PODI",
    "englishSubtitle": "SAMBHAR PODI | Hema's sourashtra samayal in Tamil",
    "sourceAttribution": "Hema's Sourashtra Samayal (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=M4BiUHxuXwQ",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Sambar (Lentil Stews)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Hema's sourashtra samayal in Tamil | SAMBHAR PODI.",
      "Toor Dal (Tuvaram Bela) or Chana Dal (Harbara Bela — 1/2 cup)",
      "Ounty Bhurko or Sambar Bhurko (1.5–2 tbsp)",
      "Tamarind (small gooseberry size), Turmeric & Hing",
      "Mustard Seeds, Urad Dal & Cooking Oil",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko / Sambar Bhurko",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Hema's Sourashtra Samayal.",
      "Gather the dry Madurai Sourashtra pantry additives: Ounty Bhurko or Sambar Bhurko (1.5–2 tbsp); Tamarind (small gooseberry size), Turmeric & Hing; Mustard Seeds, Urad Dal & Cooking Oil; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko / Sambar Bhurko) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Hema's Sourashtra Samayal via the YouTube link above!"
    ]
  },
  {
    "id": "yt-msOHqqhGOzQ",
    "name": "Paruppurundai Kulambu",
    "englishSubtitle": "Paruppurundai Kulambu | Hema's sourashtra samayal in Tamil",
    "sourceAttribution": "Hema's Sourashtra Samayal (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=msOHqqhGOzQ",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Pilchar & Charu (Rasam/Broths)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Home made Sourashtra samayal in Tamil. A recipe on Paruppurundai Kulambu preparation.",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Hema's Sourashtra Samayal.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Hema's Sourashtra Samayal via the YouTube link above!"
    ]
  },
  {
    "id": "yt-nygspVku_t0",
    "name": "Sourashtra kolambu podi",
    "englishSubtitle": "Sourashtra kolambu podi | Hema's sourashtra samayal in Tamil",
    "sourceAttribution": "Hema's Sourashtra Samayal (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=nygspVku_t0",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Pilchar & Charu (Rasam/Broths)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Sourashtra kolambu podi.",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Hema's Sourashtra Samayal.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Hema's Sourashtra Samayal via the YouTube link above!"
    ]
  },
  {
    "id": "yt-Ap1RF-5-GOs",
    "name": "Vendaikai Kulambu",
    "englishSubtitle": "Vendaikai Kulambu | Hema's sourashtra samayal in Tamil",
    "sourceAttribution": "Hema's Sourashtra Samayal (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=Ap1RF-5-GOs",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Pilchar & Charu (Rasam/Broths)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Home made Sourashtra samayal in Tamil. A recipe on Vendaikai Kulambu preparation.",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Hema's Sourashtra Samayal.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Hema's Sourashtra Samayal via the YouTube link above!"
    ]
  },
  {
    "id": "yt-vG8goyY3CWI",
    "name": "Kuruma Kulambu",
    "englishSubtitle": "Kuruma Kulambu / Thengai paal kulambu | Hema's sourashtra samayal in Tamil",
    "sourceAttribution": "Hema's Sourashtra Samayal (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=vG8goyY3CWI",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Pilchar & Charu (Rasam/Broths)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Coconut",
      "Milk",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Home made Sourashtra samayal in Tamil. A recipe on Kuruma Kulambu preparation.",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Coconut, Milk, Curry Leaves) by washing, chopping, and measuring as shown by Hema's Sourashtra Samayal.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Hema's Sourashtra Samayal via the YouTube link above!"
    ]
  },
  {
    "id": "yt-RApvTpAp9nw",
    "name": "Hema's sourashtra samayal in Tamil",
    "englishSubtitle": "Hema's sourashtra samayal in Tamil | Sourashtra Poondu Kolambu",
    "sourceAttribution": "Hema's Sourashtra Samayal (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=RApvTpAp9nw",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Pilchar & Charu (Rasam/Broths)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Garlic",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Hema's sourashtra samayal in Tamil | Sourashtra Poondu Kolambu.",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Garlic, Curry Leaves) by washing, chopping, and measuring as shown by Hema's Sourashtra Samayal.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Hema's Sourashtra Samayal via the YouTube link above!"
    ]
  },
  {
    "id": "yt-m5xMWBJMzJg",
    "name": "Thakali kolambu",
    "englishSubtitle": "Thakali kolambu | Hema's sourashtra samayal in Tamil",
    "sourceAttribution": "Hema's Sourashtra Samayal (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=m5xMWBJMzJg",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Pilchar & Charu (Rasam/Broths)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Hema's sourashtra samayal in Tamil |Thakali kolambu.",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Hema's Sourashtra Samayal.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Hema's Sourashtra Samayal via the YouTube link above!"
    ]
  },
  {
    "id": "yt-UuFTCfDSUIY",
    "name": "Kathrikai murungakai Kulambu",
    "englishSubtitle": "Kathrikai murungakai Kulambu | Hema's sourashtra samayal in Tamil",
    "sourceAttribution": "Hema's Sourashtra Samayal (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=UuFTCfDSUIY",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Pilchar & Charu (Rasam/Broths)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Hema's sourashtra samayal in Tamil| Kathrikai murungakai Kulambu.",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Hema's Sourashtra Samayal.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Hema's Sourashtra Samayal via the YouTube link above!"
    ]
  },
  {
    "id": "yt-Sz-1pV4MEXQ",
    "name": "Nookal Kulambu",
    "englishSubtitle": "Nookal Kulambu | Hema's sourashtra samayal in Tamil",
    "sourceAttribution": "Hema's Sourashtra Samayal (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=Sz-1pV4MEXQ",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Pilchar & Charu (Rasam/Broths)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Hema's sourashtra samayal in Tamil| Nookal Kulambu.",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Hema's Sourashtra Samayal.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Hema's Sourashtra Samayal via the YouTube link above!"
    ]
  },
  {
    "id": "yt-YxPSMVJ52UU",
    "name": "Peerkangai Kulambu",
    "englishSubtitle": "Peerkangai Kulambu | Hema's sourashtra samayal in Tamil",
    "sourceAttribution": "Hema's Sourashtra Samayal (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=YxPSMVJ52UU",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Pilchar & Charu (Rasam/Broths)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Home made Sourashtra samayal in Tamil. A recipe on Peerkangai Kulambu preparation.",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Hema's Sourashtra Samayal.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Hema's Sourashtra Samayal via the YouTube link above!"
    ]
  },
  {
    "id": "yt-DYjcxI6df1U",
    "name": "Mutton Uppu Kari",
    "englishSubtitle": "Mutton Uppu Kari /Sourashtra Polte Chaino /Uppu Kari Recipe /Easy Mutton Recipe /Sourashtra Recipes",
    "sourceAttribution": "Sugi cooks - SomethingDifferent, FOR ALL (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=DYjcxI6df1U",
    "webUrl": "https://sugi-writes.blogspot.com/search/label/Sourashtra%20Recipes",
    "category": "Non-Veg Ounty, Chaino & Kodhi",
    "dietaryType": "Non-Veg",
    "fridgeTriggers": [
      "Mutton",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Mutton, Curry Leaves) by washing, chopping, and measuring as shown by Sugi cooks - SomethingDifferent, FOR ALL.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Sugi cooks - SomethingDifferent, FOR ALL via the YouTube link above!"
    ]
  },
  {
    "id": "yt-rgMAm-hUlqU",
    "name": "Sourashtra Dasal Lunch Menu",
    "englishSubtitle": "Sourashtra Dasal Lunch Menu | Sourashtra Dasal Recipes | Sourashtra Dasal | Purattasi Thaligai",
    "sourceAttribution": "Sugi cooks - SomethingDifferent, FOR ALL (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=rgMAm-hUlqU",
    "webUrl": "https://sugi-writes.blogspot.com/search/label/Sourashtra%20Recipes",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: ZOOM THE VIDEO FOR BETTER CLARITY -------------------------------------------------- Gullu pongal - https://youtu.be/t13ugVJQ_Z4 ...",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Palm Jaggery / Karupatti or Gullu (1 cup)",
      "Ghee (Thup — 3 tbsp), Cardamom, Cashews & Raisins"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Sugi cooks - SomethingDifferent, FOR ALL.",
      "Gather the dry Madurai Sourashtra pantry additives: Channel Ingredient Note: ZOOM THE VIDEO FOR BETTER CLARITY -------------------------------------------------- Gullu pongal - https://youtu.be/t13ugVJQ_Z4 ...; Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Palm Jaggery / Karupatti or Gullu (1 cup); Ghee (Thup — 3 tbsp), Cardamom, Cashews & Raisins.",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Sugi cooks - SomethingDifferent, FOR ALL via the YouTube link above!"
    ]
  },
  {
    "id": "yt-XpWH_UdCNic",
    "name": "🌟 Sweet Rava Appam Recipe",
    "englishSubtitle": "🌟 Sweet Rava Appam Recipe/Lovule Puri/Rava Appam Recipe/Sweet Appam Recipe/Appam/Sourashtra Recipes",
    "sourceAttribution": "Sugi cooks - SomethingDifferent, FOR ALL (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=XpWH_UdCNic",
    "webUrl": "https://sugi-writes.blogspot.com/search/label/Sourashtra%20Recipes",
    "category": "Bhairi & Appam (Fritters & Tiffin)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Idli Rice / Raw Rice (1 cup) & Urad Dal (2 tbsp)",
      "Black Pepper, Cumin Seeds (or Palm Jaggery / Gullu for sweet Appam/Dhowlo)",
      "Chenna Bhurko (Pottukadalai Podi, for serving with Bhairi)",
      "Gingelly Oil / Ghee & Salt (Lenu)"
    ],
    "bhurkoUsed": "Served with Chenna Bhurko (Roasted Gram Chutney Podi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Sugi cooks - SomethingDifferent, FOR ALL.",
      "Gather the dry Madurai Sourashtra pantry additives: Idli Rice / Raw Rice (1 cup) & Urad Dal (2 tbsp); Black Pepper, Cumin Seeds (or Palm Jaggery / Gullu for sweet Appam/Dhowlo); Chenna Bhurko (Pottukadalai Podi, for serving with Bhairi); Gingelly Oil / Ghee & Salt (Lenu).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Served with Chenna Bhurko (Roasted Gram Chutney Podi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Sugi cooks - SomethingDifferent, FOR ALL via the YouTube link above!"
    ]
  },
  {
    "id": "yt-quQ62R6Vv9c",
    "name": "✨Thakkali Chaar",
    "englishSubtitle": "✨Thakkali Chaar/Thakkali Charu Sourashtra/Thakkali Soup Rasam/Sourashtra Recipes/Sourashtra Samayal",
    "sourceAttribution": "Sugi cooks - SomethingDifferent, FOR ALL (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=quQ62R6Vv9c",
    "webUrl": "https://sugi-writes.blogspot.com/search/label/Sourashtra%20Recipes",
    "category": "Pilchar & Charu (Rasam/Broths)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Thakkali Charu / Thakkali Chaar, a traditional and unique Sourashtra style tomato soup recipe for rice !!! This mild flavourful soup ...",
      "Pilchar Bhurko / Sourashtra Rasam Podi (1.5–2 tbsp)",
      "Tamarind Extract (Ambat) & Cooked Toor Dal Water",
      "Black Pepper (Miri), Cumin Seeds (Jeera) & Hing",
      "Mustard Seeds & Ghee (Thup — 1 tsp)",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Curry Leaves) by washing, chopping, and measuring as shown by Sugi cooks - SomethingDifferent, FOR ALL.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind Extract (Ambat) & Cooked Toor Dal Water; Black Pepper (Miri), Cumin Seeds (Jeera) & Hing; Mustard Seeds & Ghee (Thup — 1 tsp); Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Sugi cooks - SomethingDifferent, FOR ALL via the YouTube link above!"
    ]
  },
  {
    "id": "yt-i5Huk8ZmSVE",
    "name": "🌟 Paruppu Kulambu Recipe",
    "englishSubtitle": "🌟 Paruppu Kulambu Recipe/Sourashtra Daal Pani/ Sourashtra Recipes / Sourashtra Samayal",
    "sourceAttribution": "Sugi cooks - SomethingDifferent, FOR ALL (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=i5Huk8ZmSVE",
    "webUrl": "https://sugi-writes.blogspot.com/search/label/Sourashtra%20Recipes",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Curry Leaves",
      "Coconut"
    ],
    "pantryAdditives": [
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Curry Leaves, Coconut) by washing, chopping, and measuring as shown by Sugi cooks - SomethingDifferent, FOR ALL.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Sugi cooks - SomethingDifferent, FOR ALL via the YouTube link above!"
    ]
  },
  {
    "id": "yt-uSPZJQBaCyE",
    "name": "Office potluck recipes (Madurai Famous Sourashtra puliyodharai) 😋",
    "englishSubtitle": "Office potluck recipes (Madurai Famous Sourashtra puliyodharai) 😋",
    "sourceAttribution": "3am kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=uSPZJQBaCyE",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by 3am kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by 3am kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-lruab7s_to4",
    "name": "Sourashtrian Traditional sweet (SEVI)",
    "englishSubtitle": "Sourashtrian Traditional sweet (SEVI) | Doodun Dhowlo | Pal Kozhakattai",
    "sourceAttribution": "Buddy Recipes (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=lruab7s_to4",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Sourashtrian Traditional sweet (SEVI) | Doodun Dhowlo | Pal Kozhakattai rice flour - 1.5 cups sugar -1 cup caradamon powder ...",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Palm Jaggery / Karupatti or Gullu (1 cup)",
      "Ghee (Thup — 3 tbsp), Cardamom, Cashews & Raisins"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Buddy Recipes.",
      "Gather the dry Madurai Sourashtra pantry additives: Channel Ingredient Note: Sourashtrian Traditional sweet (SEVI) | Doodun Dhowlo | Pal Kozhakattai rice flour - 1.5 cups sugar -1 cup caradamon powder ...; Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Palm Jaggery / Karupatti or Gullu (1 cup); Ghee (Thup — 3 tbsp), Cardamom, Cashews & Raisins.",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Buddy Recipes via the YouTube link above!"
    ]
  },
  {
    "id": "yt-S03us-rPjH4",
    "name": "Rice Dumplings Recipe",
    "englishSubtitle": "Rice Dumplings Recipe | Thanni / Neer Kozhukattai | Palkar Recipe | Meedum Dhowlo | Buddy Recipes",
    "sourceAttribution": "Buddy Recipes (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=S03us-rPjH4",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Rice Dumplings Recipe | Thanni / Neer Kozhukattai | Kanji Kozhukattai | Palkar Recipe | Panim/Meedum Dhowlo | Buddy Recipes ...",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Buddy Recipes.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Buddy Recipes via the YouTube link above!"
    ]
  },
  {
    "id": "yt-Imv9Tq0yN58",
    "name": "Madurai Street food",
    "englishSubtitle": "Madurai Street food | MulluMurungai Keerai vadai |Palkar Recipe| முள்ளு முருங்கை வடை | Buddy Recipes",
    "sourceAttribution": "Buddy Recipes (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=Imv9Tq0yN58",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhairi & Appam (Fritters & Tiffin)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Drumstick",
      "Spinach",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Madurai Street food | Palkar Recipe | முள்ளு முருங்கை வடை| கல்யாணமுருங்கை வடை ...",
      "Idli Rice / Raw Rice (1 cup) & Urad Dal (2 tbsp)",
      "Black Pepper, Cumin Seeds (or Palm Jaggery / Gullu for sweet Appam/Dhowlo)",
      "Chenna Bhurko (Pottukadalai Podi, for serving with Bhairi)",
      "Gingelly Oil / Ghee & Salt (Lenu)"
    ],
    "bhurkoUsed": "Served with Chenna Bhurko (Roasted Gram Chutney Podi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Drumstick, Spinach, Curry Leaves) by washing, chopping, and measuring as shown by Buddy Recipes.",
      "Gather the dry Madurai Sourashtra pantry additives: Idli Rice / Raw Rice (1 cup) & Urad Dal (2 tbsp); Black Pepper, Cumin Seeds (or Palm Jaggery / Gullu for sweet Appam/Dhowlo); Chenna Bhurko (Pottukadalai Podi, for serving with Bhairi); Gingelly Oil / Ghee & Salt (Lenu).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Served with Chenna Bhurko (Roasted Gram Chutney Podi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Buddy Recipes via the YouTube link above!"
    ]
  },
  {
    "id": "yt-IwZz_IiWDgQ",
    "name": "Cotton Seed Milk Rice",
    "englishSubtitle": "Cotton Seed Milk Rice | Paruthi Paal Sadham | பருத்தி பால் சாதம் | Serki Bath | Buddy Recipes",
    "sourceAttribution": "Buddy Recipes (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=IwZz_IiWDgQ",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Milk",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: ... Sadham | மதுரை Special பருத்தி பால் சாதம் | Sekki Bath | Palkar Recipe | Buddy Recipes This traditional ...",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Palm Jaggery / Karupatti or Gullu (1 cup)",
      "Ghee (Thup — 3 tbsp), Cardamom, Cashews & Raisins"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Milk, Curry Leaves) by washing, chopping, and measuring as shown by Buddy Recipes.",
      "Gather the dry Madurai Sourashtra pantry additives: Channel Ingredient Note: ... Sadham | மதுரை Special பருத்தி பால் சாதம் | Sekki Bath | Palkar Recipe | Buddy Recipes This traditional ...; Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Palm Jaggery / Karupatti or Gullu (1 cup); Ghee (Thup — 3 tbsp), Cardamom, Cashews & Raisins.",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Buddy Recipes via the YouTube link above!"
    ]
  },
  {
    "id": "yt-1LoLxkZzLKg",
    "name": "Healthy Broccoli Pulao Recipe",
    "englishSubtitle": "Healthy Broccoli Pulao Recipe | Broccoli Rice Recipe | ப்ரோக்கோலி புலாவ் | Buddy Recipes",
    "sourceAttribution": "Buddy Recipes (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=1LoLxkZzLKg",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Healthy Broccoli Pulao Recipe | Broccoli Rice Recipe | Broccoli stir fry recipe | ப்ரோக்கோலி புலாவ் | Buddy ...",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Buddy Recipes.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Buddy Recipes via the YouTube link above!"
    ]
  },
  {
    "id": "yt-rsaR4sBXpMo",
    "name": "Coconut Appam",
    "englishSubtitle": "Coconut Appam/Vadai | Nalar Bhairi | தேங்காய் அப்பம்/ வடை | Sourashtra Recipes | Buddy Recipes",
    "sourceAttribution": "Buddy Recipes (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=rsaR4sBXpMo",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhairi & Appam (Fritters & Tiffin)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Coconut",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Coconut Appam/Vadai | Nalar Bhairi | தேங்காய் அப்பம் | Sourashtra Recipes | Madurai Street Food Recipes| Buddy ...",
      "Idli Rice / Raw Rice (1 cup) & Urad Dal (2 tbsp)",
      "Black Pepper, Cumin Seeds (or Palm Jaggery / Gullu for sweet Appam/Dhowlo)",
      "Chenna Bhurko (Pottukadalai Podi, for serving with Bhairi)",
      "Gingelly Oil / Ghee & Salt (Lenu)"
    ],
    "bhurkoUsed": "Served with Chenna Bhurko (Roasted Gram Chutney Podi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Coconut, Curry Leaves) by washing, chopping, and measuring as shown by Buddy Recipes.",
      "Gather the dry Madurai Sourashtra pantry additives: Idli Rice / Raw Rice (1 cup) & Urad Dal (2 tbsp); Black Pepper, Cumin Seeds (or Palm Jaggery / Gullu for sweet Appam/Dhowlo); Chenna Bhurko (Pottukadalai Podi, for serving with Bhairi); Gingelly Oil / Ghee & Salt (Lenu).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Served with Chenna Bhurko (Roasted Gram Chutney Podi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Buddy Recipes via the YouTube link above!"
    ]
  },
  {
    "id": "yt-M_7HaoZ2bbI",
    "name": "Keerai chaar",
    "englishSubtitle": "Keerai chaar | Sourashtra Bajji chaar Recipe | Moringa leaves recipe",
    "sourceAttribution": "CookBook Recipes (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=M_7HaoZ2bbI",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Pilchar & Charu (Rasam/Broths)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Spinach",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Pilchar Bhurko / Sourashtra Rasam Podi (1.5–2 tbsp)",
      "Tamarind Extract (Ambat) & Cooked Toor Dal Water",
      "Black Pepper (Miri), Cumin Seeds (Jeera) & Hing",
      "Mustard Seeds & Ghee (Thup — 1 tsp)",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Spinach, Curry Leaves) by washing, chopping, and measuring as shown by CookBook Recipes.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind Extract (Ambat) & Cooked Toor Dal Water; Black Pepper (Miri), Cumin Seeds (Jeera) & Hing; Mustard Seeds & Ghee (Thup — 1 tsp); Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by CookBook Recipes via the YouTube link above!"
    ]
  },
  {
    "id": "yt-uMhdBcWbzWE",
    "name": "Lentil Dumplings Curry Recipe",
    "englishSubtitle": "Lentil Dumplings Curry Recipe | Paruppu Urundai Kulambu | பருப்பு உருண்டை குழம்பு | Buddy Recipes",
    "sourceAttribution": "Buddy Recipes (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=uMhdBcWbzWE",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Lentil Dumplings curry |Paruppu Urundai Kulambu | பருப்பு உருண்டை குழம்பு | South Indian Curry Recipe ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Curry Leaves) by washing, chopping, and measuring as shown by Buddy Recipes.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Buddy Recipes via the YouTube link above!"
    ]
  },
  {
    "id": "yt--2FbSZ3m7AU",
    "name": "Healthy murungai keerai saaru",
    "englishSubtitle": "Healthy murungai keerai saaru/Sourashtra Bhajji char",
    "sourceAttribution": "Chitra Cooks (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=-2FbSZ3m7AU",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Pilchar & Charu (Rasam/Broths)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Drumstick",
      "Spinach",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Healthy murungai keerai saaru/Sourashtra Bhajji char.",
      "Pilchar Bhurko / Sourashtra Rasam Podi (1.5–2 tbsp)",
      "Tamarind Extract (Ambat) & Cooked Toor Dal Water",
      "Black Pepper (Miri), Cumin Seeds (Jeera) & Hing",
      "Mustard Seeds & Ghee (Thup — 1 tsp)",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Drumstick, Spinach, Curry Leaves) by washing, chopping, and measuring as shown by Chitra Cooks.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind Extract (Ambat) & Cooked Toor Dal Water; Black Pepper (Miri), Cumin Seeds (Jeera) & Hing; Mustard Seeds & Ghee (Thup — 1 tsp); Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Chitra Cooks via the YouTube link above!"
    ]
  },
  {
    "id": "yt-BrcncqDe7bI",
    "name": "Chaina avudi",
    "englishSubtitle": "Chaina avudi || How to make chaina avudi||Karri kulambu||In sourashtra",
    "sourceAttribution": "Isha kitchen and lifestyle (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=BrcncqDe7bI",
    "webUrl": "https://jaleelacooking.blogspot.com/search?q=saurashtra",
    "category": "Non-Veg Ounty, Chaino & Kodhi",
    "dietaryType": "Non-Veg",
    "fridgeTriggers": [
      "Ginger",
      "Mutton",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Hey guyss...! elarukum vanakam Elarum nalla irupinga nu naan namburen Iniki namma pakka pora samayal vandhu karri ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Ginger, Mutton, Curry Leaves) by washing, chopping, and measuring as shown by Isha kitchen and lifestyle.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Isha kitchen and lifestyle via the YouTube link above!"
    ]
  },
  {
    "id": "yt-hZDdc1wlyig",
    "name": "Carrot Chaguno (Sourashtra)",
    "englishSubtitle": "Carrot Chaguno (Sourashtra)",
    "sourceAttribution": "Salem Sourashtra (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=hZDdc1wlyig",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Askin like Keroo, Share keroo, Subscribe Keroo Video skip keranako savo.",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Salem Sourashtra.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Salem Sourashtra via the YouTube link above!"
    ]
  },
  {
    "id": "yt-0FmgyWIlXr4",
    "name": "#Chilli Parota",
    "englishSubtitle": "#Chilli Parota | Ready in 20 minutes | Vani's Palkar Kitchen #maida",
    "sourceAttribution": "Vani's Palkar Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=0FmgyWIlXr4",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Very tasty, Very easy to prepare, Ready in 20 minutes, Mouth watering, Hotel taste. #Parota #Chilli Parota #Tasty #Easy ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Vani's Palkar Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Vani's Palkar Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-6IITw_lJY2Y",
    "name": "Palak Paneer",
    "englishSubtitle": "Palak Paneer | Hotel Style | Ready in 30 minutes | Vani's Palkar Kitchen",
    "sourceAttribution": "Vani's Palkar Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=6IITw_lJY2Y",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Yummy, Only few ingredients, Healthy, Easy to prepare, Ready in 30 minutes #yummy #delicious #vani'spalkarkitchen #easy ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Vani's Palkar Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Vani's Palkar Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-6Sq9T8DW0ks",
    "name": "Maavilakku",
    "englishSubtitle": "Maavilakku / Thambittu Ready in half an hour | Vani's Palkar Kitchen",
    "sourceAttribution": "Vani's Palkar Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=6Sq9T8DW0ks",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Very easy to prepare , very tasty and traditional. #soft&tasty #homemade #easy #simple #vani'spalkarkitchen Like, share and ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Vani's Palkar Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Vani's Palkar Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-CafJQB1FyrI",
    "name": "Make Yummy Apple Milkshake in 5 minutes",
    "englishSubtitle": "Make Yummy Apple Milkshake in 5 minutes | Vani's Palkar Kitchen",
    "sourceAttribution": "Vani's Palkar Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=CafJQB1FyrI",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Milk",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Yummy and tasty, very easy to prepare, few ingredients. Ready in 5 minutes. #milkshake #apple #vanispalkarkitchen #yummy ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Milk, Curry Leaves) by washing, chopping, and measuring as shown by Vani's Palkar Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Vani's Palkar Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-SsYN4xw2tAs",
    "name": "Paneer onion roast",
    "englishSubtitle": "Paneer onion roast | Vani's Palkar Kitchen",
    "sourceAttribution": "Vani's Palkar Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=SsYN4xw2tAs",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Very tasty and yummy, Rich in protein,Easy to cook,serves 4. #homemade #vani'spalkarkitchen #youtube #simple #easy ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Onion, Curry Leaves) by washing, chopping, and measuring as shown by Vani's Palkar Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Vani's Palkar Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-6dKww-XPZZQ",
    "name": "Make yummy homemade Chocolate using Biscuit",
    "englishSubtitle": "Make yummy homemade Chocolate using Biscuit | Vani's Palkar Kitchen",
    "sourceAttribution": "Vani's Palkar Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=6dKww-XPZZQ",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Milk",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Yummy, Only few ingredients, Ready in 30 minutes. #tasty #easy #vani'spalkarkitchen #simple Like, share and subscribe for more ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Milk, Curry Leaves) by washing, chopping, and measuring as shown by Vani's Palkar Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Vani's Palkar Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-5YN--zZBAT4",
    "name": "Maida laddu",
    "englishSubtitle": "Maida laddu | Only 5 ingredients | Ready in 5 min | Vani's Palkar Kitchen",
    "sourceAttribution": "Vani's Palkar Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=5YN--zZBAT4",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhairi & Appam (Fritters & Tiffin)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Very tasty, mouth melting, delicious,few ingredients, easy to prepare.",
      "Idli Rice / Raw Rice (1 cup) & Urad Dal (2 tbsp)",
      "Black Pepper, Cumin Seeds (or Palm Jaggery / Gullu for sweet Appam/Dhowlo)",
      "Chenna Bhurko (Pottukadalai Podi, for serving with Bhairi)",
      "Gingelly Oil / Ghee & Salt (Lenu)"
    ],
    "bhurkoUsed": "Served with Chenna Bhurko (Roasted Gram Chutney Podi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Vani's Palkar Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Idli Rice / Raw Rice (1 cup) & Urad Dal (2 tbsp); Black Pepper, Cumin Seeds (or Palm Jaggery / Gullu for sweet Appam/Dhowlo); Chenna Bhurko (Pottukadalai Podi, for serving with Bhairi); Gingelly Oil / Ghee & Salt (Lenu).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Served with Chenna Bhurko (Roasted Gram Chutney Podi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Vani's Palkar Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-L1WEy5YE2fA",
    "name": "With only 4 ingredients make yummy Sweet Bonda",
    "englishSubtitle": "With only 4 ingredients make yummy Sweet Bonda | Vani's Palkar Kitchen",
    "sourceAttribution": "Vani's Palkar Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=L1WEy5YE2fA",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhairi & Appam (Fritters & Tiffin)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: only 4 ingredients , very tasty, very easy to prepare, ready in 1/2 an hour.",
      "Idli Rice / Raw Rice (1 cup) & Urad Dal (2 tbsp)",
      "Black Pepper, Cumin Seeds (or Palm Jaggery / Gullu for sweet Appam/Dhowlo)",
      "Chenna Bhurko (Pottukadalai Podi, for serving with Bhairi)",
      "Gingelly Oil / Ghee & Salt (Lenu)"
    ],
    "bhurkoUsed": "Served with Chenna Bhurko (Roasted Gram Chutney Podi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Vani's Palkar Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Idli Rice / Raw Rice (1 cup) & Urad Dal (2 tbsp); Black Pepper, Cumin Seeds (or Palm Jaggery / Gullu for sweet Appam/Dhowlo); Chenna Bhurko (Pottukadalai Podi, for serving with Bhairi); Gingelly Oil / Ghee & Salt (Lenu).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Served with Chenna Bhurko (Roasted Gram Chutney Podi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Vani's Palkar Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-B-P-v20oaNk",
    "name": "Kichidi Bengaluru style",
    "englishSubtitle": "Kichidi Bengaluru style",
    "sourceAttribution": "Vani's Palkar Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=B-P-v20oaNk",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Milk",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Easy to prepare. Yummy and tasty. You can add Vegetables of your taste. For more simple and easy recipes Subscribe Vani's ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Milk, Curry Leaves) by washing, chopping, and measuring as shown by Vani's Palkar Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Vani's Palkar Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-g2m819dsd-Q",
    "name": "Paneer Butter Masala Hotel style",
    "englishSubtitle": "Paneer Butter Masala Hotel style",
    "sourceAttribution": "Vani's Palkar Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=g2m819dsd-Q",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Milk",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Very tasty and yummy along with chapathi, roti, nan, parota etc. Easy to prepare. High in protein content. Good for health.",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Milk, Curry Leaves) by washing, chopping, and measuring as shown by Vani's Palkar Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Vani's Palkar Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt--KCK4m9lYqk",
    "name": "Maida Ribbon Snacks",
    "englishSubtitle": "Maida Ribbon Snacks | Ready in 10 min | Vani's Palkar Kitchen",
    "sourceAttribution": "Vani's Palkar Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=-KCK4m9lYqk",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhairi & Appam (Fritters & Tiffin)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Maida ribbon snacks. Easy and tasty. Only few ingredients required. Quick and simple. Try it and comment how was it. Like, share ...",
      "Idli Rice / Raw Rice (1 cup) & Urad Dal (2 tbsp)",
      "Black Pepper, Cumin Seeds (or Palm Jaggery / Gullu for sweet Appam/Dhowlo)",
      "Chenna Bhurko (Pottukadalai Podi, for serving with Bhairi)",
      "Gingelly Oil / Ghee & Salt (Lenu)"
    ],
    "bhurkoUsed": "Served with Chenna Bhurko (Roasted Gram Chutney Podi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Vani's Palkar Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Idli Rice / Raw Rice (1 cup) & Urad Dal (2 tbsp); Black Pepper, Cumin Seeds (or Palm Jaggery / Gullu for sweet Appam/Dhowlo); Chenna Bhurko (Pottukadalai Podi, for serving with Bhairi); Gingelly Oil / Ghee & Salt (Lenu).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Served with Chenna Bhurko (Roasted Gram Chutney Podi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Vani's Palkar Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-2sKPRvMeLug",
    "name": "Vaangi bhaath",
    "englishSubtitle": "Vaangi bhaath | Bengaluru style",
    "sourceAttribution": "Vani's Palkar Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=2sKPRvMeLug",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Milk",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Easy to prepare, Very tasty. Like, share and subscribe and also press the bell icon for more simple and easy recipes. Link for ...",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Milk, Curry Leaves) by washing, chopping, and measuring as shown by Vani's Palkar Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Vani's Palkar Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-DZ__jkd1Nfw",
    "name": "Rice Chapatti",
    "englishSubtitle": "Rice Chapatti/ Akki Roti and Onion chutney",
    "sourceAttribution": "Vani's Palkar Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=DZ__jkd1Nfw",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: South Indian, Karnataka's famous Akki Roti , soft and tasty, mouth watering with Onion chutney, Akki Roti and onion chutney great ...",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Onion, Curry Leaves) by washing, chopping, and measuring as shown by Vani's Palkar Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Vani's Palkar Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-mWhOxhdqDd8",
    "name": "Instant Raw Rasam",
    "englishSubtitle": "Instant Raw Rasam",
    "sourceAttribution": "Vani's Palkar Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=mWhOxhdqDd8",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Pilchar & Charu (Rasam/Broths)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Raw Rasam, cook instantly. Good for digestion. Healthy and very tasty. Ready in just 15 minutes. Cook without fire. Simple and ...",
      "Pilchar Bhurko / Sourashtra Rasam Podi (1.5–2 tbsp)",
      "Tamarind Extract (Ambat) & Cooked Toor Dal Water",
      "Black Pepper (Miri), Cumin Seeds (Jeera) & Hing",
      "Mustard Seeds & Ghee (Thup — 1 tsp)",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Vani's Palkar Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind Extract (Ambat) & Cooked Toor Dal Water; Black Pepper (Miri), Cumin Seeds (Jeera) & Hing; Mustard Seeds & Ghee (Thup — 1 tsp); Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Vani's Palkar Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-P83PTFA_V4U",
    "name": "Panchamrutha",
    "englishSubtitle": "Panchamrutha | Palani Prasad taste | Ready in 10 minutes | Vani's Palkar Kitchen",
    "sourceAttribution": "Vani's Palkar Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=P83PTFA_V4U",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Easy to prepare, Very tasty, healthy, Ready in 10 minutes. Ingredients: Banana Jaggery powder Cardamom Ghee Dates Natural ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Vani's Palkar Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Vani's Palkar Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-dMeRx7PYAu8",
    "name": "Capsicum masala curry, Onion capsicum curry, easy and tasty capsicum curry, sourashtra",
    "englishSubtitle": "Capsicum masala curry, Onion capsicum curry, easy and tasty capsicum curry, sourashtra",
    "sourceAttribution": "Mekan Recipes (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=dMeRx7PYAu8",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Capsicum masala curry, Onion capsicum curry, easy and tasty capsicum curry, sourashtra Onion capsicum curry, simple and easy ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Onion, Curry Leaves) by washing, chopping, and measuring as shown by Mekan Recipes.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Mekan Recipes via the YouTube link above!"
    ]
  },
  {
    "id": "yt-kjT0-gnMRNs",
    "name": "Kuzhambu podi,Sourashtra kuzhambu podi,Amti burko,amti recipe,kuzhambu millagai thool,masala podi",
    "englishSubtitle": "Kuzhambu podi,Sourashtra kuzhambu podi,Amti burko,amti recipe,kuzhambu millagai thool,masala podi",
    "sourceAttribution": "Mekan Recipes (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=kjT0-gnMRNs",
    "webUrl": "https://www.sailajakitchen.org/search?q=sourashtra",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Sourashtra kuzhambu podi, Amti bhurko, Kuzhambu podi recipe in Tamil, குழம்பு பொடி, sourastra kuzhambhu podi in ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Mekan Recipes.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Mekan Recipes via the YouTube link above!"
    ]
  },
  {
    "id": "yt-qOWoHXXqAhM",
    "name": "murukku intamil,ulundumurukku,thenkuzhalrecipe,uraddal murukku,sourashtra,chaklirecipe ,arimurukku",
    "englishSubtitle": "murukku intamil,ulundumurukku,thenkuzhalrecipe,uraddal murukku,sourashtra,chaklirecipe ,arimurukku",
    "sourceAttribution": "Mekan Recipes (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=qOWoHXXqAhM",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Ulundu murukku recipe in tamil,, murukku recipe, thenkuzhal, urad dal murukku, pacharisi ulundu murukku, chakli recipe, rice ...",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Mekan Recipes.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Mekan Recipes via the YouTube link above!"
    ]
  },
  {
    "id": "yt-h8shW35h8aY",
    "name": "More kulambu, Dehim amti,kulambu recipe,moru curry, sourashtra,butter milk kulambu",
    "englishSubtitle": "More kulambu, Dehim amti,kulambu recipe,moru curry, sourashtra,butter milk kulambu",
    "sourceAttribution": "Mekan Recipes (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=h8shW35h8aY",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Curry Leaves",
      "Coconut",
      "Milk"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Mor kuzhambu, more kulambu, kulambu recipes, how to make more kuzhambu, more kuzhambu with out coconut, curd curry, ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Curry Leaves, Coconut, Milk) by washing, chopping, and measuring as shown by Mekan Recipes.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Mekan Recipes via the YouTube link above!"
    ]
  },
  {
    "id": "yt-ajbM4lMb8hM",
    "name": "Puliyodharai,Sourashtra puliyodharai in tamil,Tamarindrice,puliyogare recipe,varietyrice,puli sadam",
    "englishSubtitle": "Puliyodharai,Sourashtra puliyodharai in tamil,Tamarindrice,puliyogare recipe,varietyrice,puli sadam",
    "sourceAttribution": "Mekan Recipes (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=ajbM4lMb8hM",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Puliyodharai recipe in tamil,Tamarind rice,puli sadham recipe in tamil,sourashtra ambhat bhath,variety rice recipes, sourashtra ...",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Mekan Recipes.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Mekan Recipes via the YouTube link above!"
    ]
  },
  {
    "id": "yt-a4U48kb4960",
    "name": "chicken kurma, chicken korma recipe in Tamil, kozhi kurma, chicken recipes, Sourashtra",
    "englishSubtitle": "chicken kurma, chicken korma recipe in Tamil, kozhi kurma, chicken recipes, Sourashtra",
    "sourceAttribution": "Mekan Recipes (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=a4U48kb4960",
    "webUrl": "https://jaleelacooking.blogspot.com/search?q=saurashtra",
    "category": "Non-Veg Ounty, Chaino & Kodhi",
    "dietaryType": "Non-Veg",
    "fridgeTriggers": [
      "Chicken",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: chicken kurma, chicken korma recipe in Tamil, kozhi kurma, chicken recipes, Sourashtra recipes, Original chicken kuruma ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Chicken, Curry Leaves) by washing, chopping, and measuring as shown by Mekan Recipes.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Mekan Recipes via the YouTube link above!"
    ]
  },
  {
    "id": "yt-4zlyuYeVzws",
    "name": "Mint chutney,pudina chutney,mint coriander chutney,dhaniya pudina chutney,sourashtra,chutney recipes",
    "englishSubtitle": "Mint chutney,pudina chutney,mint coriander chutney,dhaniya pudina chutney,sourashtra,chutney recipes",
    "sourceAttribution": "Mekan Recipes (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=4zlyuYeVzws",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Budith, Losto & Polte (Chutneys/Masiyal)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Coriander",
      "Mint Leaves",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: pudina chutney,mint chutney,புதினா துவையல், pudina chutney recipe in Tamil,hari chutney, dhaniya pudina chutney, ...",
      "Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8)",
      "Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp)",
      "Mustard Seeds, Urad Dal & Gingelly Oil (for tempering)",
      "Rock Salt / Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Coriander, Mint Leaves, Curry Leaves) by washing, chopping, and measuring as shown by Mekan Recipes.",
      "Gather the dry Madurai Sourashtra pantry additives: Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8); Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp); Mustard Seeds, Urad Dal & Gingelly Oil (for tempering); Rock Salt / Salt (Lenu).",
      "Cook or roast the main fridge ingredients with dry red chillies, tamarind, hing, and lentil additives until tender, then stone-grind or mash coarsely with a wooden mathu.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Mekan Recipes via the YouTube link above!"
    ]
  },
  {
    "id": "yt-177Mz15sBLo",
    "name": "Thakkali kuzhambhu,tomato kuzhambu, sourashtra thakkali amti,tomato gravy,kuzhambu recipe",
    "englishSubtitle": "Thakkali kuzhambhu,tomato kuzhambu, sourashtra thakkali amti,tomato gravy,kuzhambu recipe",
    "sourceAttribution": "Mekan Recipes (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=177Mz15sBLo",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Tomato kuzhambu, தக்காளி குழம்பு,Thakkali kuzhambu for idli, dosa, rice, south indian recipe, how to make ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Curry Leaves) by washing, chopping, and measuring as shown by Mekan Recipes.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Mekan Recipes via the YouTube link above!"
    ]
  },
  {
    "id": "yt-8oms_BoeOPc",
    "name": "Meen Kuzhambu,mahli amti, kerala fish curry, fish recipes, masala fish curry,sourashtra,meen charu",
    "englishSubtitle": "Meen Kuzhambu,mahli amti, kerala fish curry, fish recipes, masala fish curry,sourashtra,meen charu",
    "sourceAttribution": "Mekan Recipes (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=8oms_BoeOPc",
    "webUrl": "https://jaleelacooking.blogspot.com/search?q=saurashtra",
    "category": "Non-Veg Ounty, Chaino & Kodhi",
    "dietaryType": "Non-Veg",
    "fridgeTriggers": [
      "Curry Leaves",
      "Fish"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: meen kuzhambu,meen kulambu,meen kuzhambu in tamil,meen kulambu in tamil,gramathu meen kulambu,fish kuzhambu in tamil ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Curry Leaves, Fish) by washing, chopping, and measuring as shown by Mekan Recipes.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Mekan Recipes via the YouTube link above!"
    ]
  },
  {
    "id": "yt-DUntILCScAc",
    "name": "Rava uttapam,Sooji uttappam,semolina uttapam,Rava recipe, sourashtra,appe recipe",
    "englishSubtitle": "Rava uttapam,Sooji uttappam,semolina uttapam,Rava recipe, sourashtra,appe recipe",
    "sourceAttribution": "Mekan Recipes (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=DUntILCScAc",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhairi & Appam (Fritters & Tiffin)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Rava uttapam,Sooji uttappam,semolina uttapam,Rava uttapam recipe in tamil, Instant uttapam,Rava utappam recipe, instant dosa ...",
      "Idli Rice / Raw Rice (1 cup) & Urad Dal (2 tbsp)",
      "Black Pepper, Cumin Seeds (or Palm Jaggery / Gullu for sweet Appam/Dhowlo)",
      "Chenna Bhurko (Pottukadalai Podi, for serving with Bhairi)",
      "Gingelly Oil / Ghee & Salt (Lenu)"
    ],
    "bhurkoUsed": "Served with Chenna Bhurko (Roasted Gram Chutney Podi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Mekan Recipes.",
      "Gather the dry Madurai Sourashtra pantry additives: Idli Rice / Raw Rice (1 cup) & Urad Dal (2 tbsp); Black Pepper, Cumin Seeds (or Palm Jaggery / Gullu for sweet Appam/Dhowlo); Chenna Bhurko (Pottukadalai Podi, for serving with Bhairi); Gingelly Oil / Ghee & Salt (Lenu).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Served with Chenna Bhurko (Roasted Gram Chutney Podi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Mekan Recipes via the YouTube link above!"
    ]
  },
  {
    "id": "yt-DYSedowYZdc",
    "name": "Rajma recipe,Punjabi Rajma masala,rajma chawal,kidneybeans recipe,sourashtra,rajma curry,rajma gravy",
    "englishSubtitle": "Rajma recipe,Punjabi Rajma masala,rajma chawal,kidneybeans recipe,sourashtra,rajma curry,rajma gravy",
    "sourceAttribution": "Mekan Recipes (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=DYSedowYZdc",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Beans",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Rajma, Recipe, Rajma recipe, Rajma recipe chat, Rajma recipe in hindi, Rajma recipe in urdu, Rajma recipe salad, This is the ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Beans, Curry Leaves) by washing, chopping, and measuring as shown by Mekan Recipes.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Mekan Recipes via the YouTube link above!"
    ]
  },
  {
    "id": "yt-mfaijZ2W8mI",
    "name": "Chicken gravy recipe in tamil,Chicken curry, chicken masala, spicy chicken gravy, sourashtra",
    "englishSubtitle": "Chicken gravy recipe in tamil,Chicken curry, chicken masala, spicy chicken gravy, sourashtra",
    "sourceAttribution": "Mekan Recipes (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=mfaijZ2W8mI",
    "webUrl": "https://jaleelacooking.blogspot.com/search?q=saurashtra",
    "category": "Non-Veg Ounty, Chaino & Kodhi",
    "dietaryType": "Non-Veg",
    "fridgeTriggers": [
      "Curry Leaves",
      "Chicken"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Chicken gravy recipe in tamil,Chicken curry recipe, chicken masala,spicy chicken gravy, simple chicken curry for beginners,simple ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Curry Leaves, Chicken) by washing, chopping, and measuring as shown by Mekan Recipes.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Mekan Recipes via the YouTube link above!"
    ]
  },
  {
    "id": "yt-xk3bjOD98io",
    "name": "Sambar powder recipe,sambar podi in Tamil,sourashtra sambaar burko,Homemade sambar powder,masalapodi",
    "englishSubtitle": "Sambar powder recipe,sambar podi in Tamil,sourashtra sambaar burko,Homemade sambar powder,masalapodi",
    "sourceAttribution": "Mekan Recipes (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=xk3bjOD98io",
    "webUrl": "https://www.sailajakitchen.org/search?q=sourashtra",
    "category": "Sambar (Lentil Stews)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Sambar powder recipe,sambar podi in Tamil,sourashtra sambaar burko,Homemade sambar powder,masala podi, traditional ...",
      "Toor Dal (Tuvaram Bela) or Chana Dal (Harbara Bela — 1/2 cup)",
      "Ounty Bhurko or Sambar Bhurko (1.5–2 tbsp)",
      "Tamarind (small gooseberry size), Turmeric & Hing",
      "Mustard Seeds, Urad Dal & Cooking Oil",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko / Sambar Bhurko",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Mekan Recipes.",
      "Gather the dry Madurai Sourashtra pantry additives: Ounty Bhurko or Sambar Bhurko (1.5–2 tbsp); Tamarind (small gooseberry size), Turmeric & Hing; Mustard Seeds, Urad Dal & Cooking Oil; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko / Sambar Bhurko) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Mekan Recipes via the YouTube link above!"
    ]
  },
  {
    "id": "yt-gVTMHQiFZg0",
    "name": "Tomato soup recipe Thakkalichaar,sourashtra,thakkali charu,tomato recipe,tomato rasam in tamil",
    "englishSubtitle": "Tomato soup recipe Thakkalichaar,sourashtra,thakkali charu,tomato recipe,tomato rasam in tamil",
    "sourceAttribution": "Mekan Recipes (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=gVTMHQiFZg0",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Pilchar & Charu (Rasam/Broths)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: This video explains in detail of preparation of Sourashtra recipe Tomato soup which can be prepared very simply but very tasty.",
      "Pilchar Bhurko / Sourashtra Rasam Podi (1.5–2 tbsp)",
      "Tamarind Extract (Ambat) & Cooked Toor Dal Water",
      "Black Pepper (Miri), Cumin Seeds (Jeera) & Hing",
      "Mustard Seeds & Ghee (Thup — 1 tsp)",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Curry Leaves) by washing, chopping, and measuring as shown by Mekan Recipes.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind Extract (Ambat) & Cooked Toor Dal Water; Black Pepper (Miri), Cumin Seeds (Jeera) & Hing; Mustard Seeds & Ghee (Thup — 1 tsp); Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Pilchar Bhurko (Coarse Black Pepper, Cumin, Red Chilli, Toor Dal, Curry Leaves & Hing)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Mekan Recipes via the YouTube link above!"
    ]
  },
  {
    "id": "yt-4yRD9MKNrFY",
    "name": "Jeera rice recipe,restaurant style jeera rice ,sourashtra,ghee rice, cumin rice,variety rice",
    "englishSubtitle": "Jeera rice recipe,restaurant style jeera rice ,sourashtra,ghee rice, cumin rice,variety rice",
    "sourceAttribution": "Mekan Recipes (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=4yRD9MKNrFY",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Jeera rice is a sourashtra traditional dish which is named as Thoop pongal.which will be made at all festival.it also be servedalong ...",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Mekan Recipes.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Mekan Recipes via the YouTube link above!"
    ]
  },
  {
    "id": "yt-8Dt666JZPxA",
    "name": "Semiya kesari recipe in tamil,vermicelli kesari,seviyaan kesari,,sweet recipes, Sourashtra",
    "englishSubtitle": "Semiya kesari recipe in tamil,vermicelli kesari,seviyaan kesari,,sweet recipes, Sourashtra",
    "sourceAttribution": "Mekan Recipes (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=8Dt666JZPxA",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhairi & Appam (Fritters & Tiffin)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Semiya kesari recipe in tamil, vermicelli kesari, seviyaan kesari,How to make semiya kesari in Tamil, sourashtra recipe, perfect ...",
      "Idli Rice / Raw Rice (1 cup) & Urad Dal (2 tbsp)",
      "Black Pepper, Cumin Seeds (or Palm Jaggery / Gullu for sweet Appam/Dhowlo)",
      "Chenna Bhurko (Pottukadalai Podi, for serving with Bhairi)",
      "Gingelly Oil / Ghee & Salt (Lenu)"
    ],
    "bhurkoUsed": "Served with Chenna Bhurko (Roasted Gram Chutney Podi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Mekan Recipes.",
      "Gather the dry Madurai Sourashtra pantry additives: Idli Rice / Raw Rice (1 cup) & Urad Dal (2 tbsp); Black Pepper, Cumin Seeds (or Palm Jaggery / Gullu for sweet Appam/Dhowlo); Chenna Bhurko (Pottukadalai Podi, for serving with Bhairi); Gingelly Oil / Ghee & Salt (Lenu).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Served with Chenna Bhurko (Roasted Gram Chutney Podi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Mekan Recipes via the YouTube link above!"
    ]
  },
  {
    "id": "yt-IbbEoQKs8-M",
    "name": "sou sou samayal",
    "englishSubtitle": "sou sou samayal",
    "sourceAttribution": "Sou Sou Samayal (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=IbbEoQKs8-M",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Hi My name is Rathinakumar PS. My hobby is home making food vegetarian and Non vegetarian. I love foods. I am following old ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Sou Sou Samayal.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Sou Sou Samayal via the YouTube link above!"
    ]
  },
  {
    "id": "yt-pRApBdMtFGc",
    "name": "Four types of vegetable tamarind",
    "englishSubtitle": "Four types of vegetable tamarind",
    "sourceAttribution": "Sou Sou Samayal (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=pRApBdMtFGc",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Hi My name is Rathinakumar PS. My hobby is home making food vegetarian and Non vegetarian. I love foods. I am following old ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Sou Sou Samayal.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Sou Sou Samayal via the YouTube link above!"
    ]
  },
  {
    "id": "yt-BGu20BtzHdk",
    "name": "Sourashtra special coconut milk kulambhu",
    "englishSubtitle": "Sourashtra special coconut milk kulambhu / Nalar Doodh Avunti",
    "sourceAttribution": "Sou cooking (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=BGu20BtzHdk",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Coconut",
      "Milk",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: One of our tasty and traditional Dish.. Kulambhu Podi video available @ https://youtu.be/yEXbqFPu2hA #SouCooking.",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Coconut, Milk, Curry Leaves) by washing, chopping, and measuring as shown by Sou cooking.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Sou cooking via the YouTube link above!"
    ]
  },
  {
    "id": "yt-vx5h8eDoySI",
    "name": "How to Make Tasty Rava Upma ❓",
    "englishSubtitle": "How to Make Tasty Rava Upma ❓",
    "sourceAttribution": "Sou Sou Samayal (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=vx5h8eDoySI",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Hi My name is Rathinakumar PS. My hobby is home making food vegetarian and Non vegetarian. I love foods. I am following old ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Sou Sou Samayal.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Sou Sou Samayal via the YouTube link above!"
    ]
  },
  {
    "id": "yt-jD34HxHINbo",
    "name": "Easy Tomato Rice",
    "englishSubtitle": "Easy Tomato Rice|Sourashtra Style|Tomato Pongal|Veg Biriyani",
    "sourceAttribution": "Sou Sou Samayal (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=jD34HxHINbo",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Easy Tomato Rice|Sourashtra Style|தக்காளி பொங்கல்|Veg Biriyani Hello All, I Make a Video Tomato Rice ...",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Curry Leaves) by washing, chopping, and measuring as shown by Sou Sou Samayal.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Sou Sou Samayal via the YouTube link above!"
    ]
  },
  {
    "id": "yt-XxhG0Qb0wXI",
    "name": "ஈஸியா சிக்கன் கிரேவி ரெடி பன்றது எப்படி சௌராஷ்ட்ரா முறையில்",
    "englishSubtitle": "ஈஸியா சிக்கன் கிரேவி ரெடி பன்றது எப்படி சௌராஷ்ட்ரா முறையில்",
    "sourceAttribution": "Sou Sou Samayal (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=XxhG0Qb0wXI",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: ஈஸியா சிக்கன் கிரேவி ரெடி பன்றது எப்படி சௌராஷ்ட்ரா முறையில் Hi My ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Sou Sou Samayal.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Sou Sou Samayal via the YouTube link above!"
    ]
  },
  {
    "id": "yt-mI2xfhJntAA",
    "name": "Sourashtra Kulambu Podi Recipe😋",
    "englishSubtitle": "Sourashtra Kulambu Podi Recipe😋 | In Tamil",
    "sourceAttribution": "Sou Sou Samayal (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=mI2xfhJntAA",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Hi My name is Rathinakumar PS. My hobby is home making food vegetarian and Non vegetarian. I love foods. I am following old ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Sou Sou Samayal.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Sou Sou Samayal via the YouTube link above!"
    ]
  },
  {
    "id": "yt-UStniXUNxao",
    "name": "Green Rice Tomato Pongal",
    "englishSubtitle": "Green Rice Tomato Pongal",
    "sourceAttribution": "Sou Sou Samayal (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=UStniXUNxao",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Hi My name is Rathinakumar PS. My hobby is home making food vegetarian and Non vegetarian. I love foods. I am following old ...",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Curry Leaves) by washing, chopping, and measuring as shown by Sou Sou Samayal.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Sou Sou Samayal via the YouTube link above!"
    ]
  },
  {
    "id": "yt-CZCtuxr-Hz4",
    "name": "FASTEST Green Mango Masala Recipe (Only 3 Ingredients?!)",
    "englishSubtitle": "FASTEST Green Mango Masala Recipe (Only 3 Ingredients?!) | Easy Raw Mango Dish",
    "sourceAttribution": "Sou Sou Samayal (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=CZCtuxr-Hz4",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Hi My name is Rathinakumar PS. My hobby is home making food vegetarian and Non vegetarian. I love foods. I am following old ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Curry Leaves) by washing, chopping, and measuring as shown by Sou Sou Samayal.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Sou Sou Samayal via the YouTube link above!"
    ]
  },
  {
    "id": "yt-gk7G93-kDB8",
    "name": "Thirukkai Karuvadu gravy",
    "englishSubtitle": "Thirukkai Karuvadu gravy",
    "sourceAttribution": "Sou Sou Samayal (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=gk7G93-kDB8",
    "webUrl": "https://jaleelacooking.blogspot.com/search?q=saurashtra",
    "category": "Non-Veg Ounty, Chaino & Kodhi",
    "dietaryType": "Non-Veg",
    "fridgeTriggers": [
      "Fish",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Hi My name is Rathinakumar PS. My hobby is home making food vegetarian and Non vegetarian. I love foods. I am following old ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Fish, Curry Leaves) by washing, chopping, and measuring as shown by Sou Sou Samayal.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Sou Sou Samayal via the YouTube link above!"
    ]
  },
  {
    "id": "yt-YTP87QaV6XM",
    "name": "Potato Masala Gravy",
    "englishSubtitle": "Potato Masala Gravy",
    "sourceAttribution": "Sou Sou Samayal (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=YTP87QaV6XM",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Potato",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Hi My name is Rathinakumar PS. My hobby is home making food vegetarian and Non vegetarian. I love foods. I am following old ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Potato, Curry Leaves) by washing, chopping, and measuring as shown by Sou Sou Samayal.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Sou Sou Samayal via the YouTube link above!"
    ]
  },
  {
    "id": "yt-pBmzddzLm50",
    "name": "Sambaar",
    "englishSubtitle": "Sambaar",
    "sourceAttribution": "Yummy Sourashtra (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=pBmzddzLm50",
    "webUrl": "http://www.yummysourashtra.com/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Yummy Sourashtra.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Yummy Sourashtra via the YouTube link above!"
    ]
  },
  {
    "id": "yt-EGb09UDoayU",
    "name": "QUICK SIDEDISH - SOURASHTRA SPL -ONE POT RECIPE-இட்லி, தோசை, பொங்கலுக்கு உகந்தது.",
    "englishSubtitle": "QUICK SIDEDISH - SOURASHTRA SPL -ONE POT RECIPE-இட்லி, தோசை, பொங்கலுக்கு உகந்தது.",
    "sourceAttribution": "Veggies Recipe (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=EGb09UDoayU",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: QUICK SIDEDISH - SOURASHTRA SPL -ONE POT RECIPE-இட்லி, தோசை, பொங்கலுக்கு உகந்தது.",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Veggies Recipe.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Veggies Recipe via the YouTube link above!"
    ]
  },
  {
    "id": "yt-YuhbY2GH1cg",
    "name": "ஏலா தேலா",
    "englishSubtitle": "ஏலா தேலா | Yela Thela Song | Hedde Jomai Movie | Sourashtra Videos",
    "sourceAttribution": "Sourashtra Videos (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=YuhbY2GH1cg",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: ஏலா தேலா | Yela Thela Song | Hedde Jomai Movie | Sourashtra Videos Singers : \"Padmasri\" Dr. G. Sivachidhambaram, V. K. ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Sourashtra Videos.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Sourashtra Videos via the YouTube link above!"
    ]
  },
  {
    "id": "yt-M7P2GJt5C7k",
    "name": "Ragi rava Dosa in sourashtra language",
    "englishSubtitle": "Ragi rava Dosa in sourashtra language | Salem Sourashtra Cooking Galatta",
    "sourceAttribution": "SS Cooking Galatta (Gayathri Dhanapal) (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=M7P2GJt5C7k",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhairi & Appam (Fritters & Tiffin)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: sourashtra || #saurashtra || #palkar Ragi Dosa in sourashtra language, Ragi Dosa in saurashtra, Ragi Dosa in palkar language ...",
      "Idli Rice / Raw Rice (1 cup) & Urad Dal (2 tbsp)",
      "Black Pepper, Cumin Seeds (or Palm Jaggery / Gullu for sweet Appam/Dhowlo)",
      "Chenna Bhurko (Pottukadalai Podi, for serving with Bhairi)",
      "Gingelly Oil / Ghee & Salt (Lenu)"
    ],
    "bhurkoUsed": "Served with Chenna Bhurko (Roasted Gram Chutney Podi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by SS Cooking Galatta (Gayathri Dhanapal).",
      "Gather the dry Madurai Sourashtra pantry additives: Idli Rice / Raw Rice (1 cup) & Urad Dal (2 tbsp); Black Pepper, Cumin Seeds (or Palm Jaggery / Gullu for sweet Appam/Dhowlo); Chenna Bhurko (Pottukadalai Podi, for serving with Bhairi); Gingelly Oil / Ghee & Salt (Lenu).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Served with Chenna Bhurko (Roasted Gram Chutney Podi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by SS Cooking Galatta (Gayathri Dhanapal) via the YouTube link above!"
    ]
  },
  {
    "id": "yt-QdvXAhP49VI",
    "name": "Jaris tina Sourashtra song",
    "englishSubtitle": "Jaris tina Sourashtra song",
    "sourceAttribution": "Rajagopal Bhaskara narayanan (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=QdvXAhP49VI",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Love song, sourashtra language, O.Visvesh Collection song.",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Rajagopal Bhaskara narayanan.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rajagopal Bhaskara narayanan via the YouTube link above!"
    ]
  },
  {
    "id": "yt--9TE63eJa0U",
    "name": "Sourashtra Love song",
    "englishSubtitle": "Sourashtra Love song | #sourashtra #album #song | Music @raaju1234 | #love #trend",
    "sourceAttribution": "Sourashtra World (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=-9TE63eJa0U",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Casting : Ambarish Koushik Singer : Rajesh Moorthy D.O.P & Editing : Kissan Lal Music Composed by : @raaju1234 (Rajesh ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Sourashtra World.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Sourashtra World via the YouTube link above!"
    ]
  },
  {
    "id": "yt-mfKOdnwiDh0",
    "name": "Pangarappan Bhairi",
    "englishSubtitle": "Pangarappan Bhairi | பங்கராபான் பைரி | முள்ளு முருங்கை கீரை வடை | Recipe - 107",
    "sourceAttribution": "Traditional Sourashtra Kitchen (பாரம்பரிய முறை) (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=mfKOdnwiDh0",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhairi & Appam (Fritters & Tiffin)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Spinach",
      "Coconut",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: பங்கராபான் பைரி என்று சௌராஷ்ட்ரா மக்களால் சொல்லப்படும் முள்ளு ...",
      "Idli Rice / Raw Rice (1 cup) & Urad Dal (2 tbsp)",
      "Black Pepper, Cumin Seeds (or Palm Jaggery / Gullu for sweet Appam/Dhowlo)",
      "Chenna Bhurko (Pottukadalai Podi, for serving with Bhairi)",
      "Gingelly Oil / Ghee & Salt (Lenu)"
    ],
    "bhurkoUsed": "Served with Chenna Bhurko (Roasted Gram Chutney Podi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Spinach, Coconut, Curry Leaves) by washing, chopping, and measuring as shown by Traditional Sourashtra Kitchen (பாரம்பரிய முறை).",
      "Gather the dry Madurai Sourashtra pantry additives: Idli Rice / Raw Rice (1 cup) & Urad Dal (2 tbsp); Black Pepper, Cumin Seeds (or Palm Jaggery / Gullu for sweet Appam/Dhowlo); Chenna Bhurko (Pottukadalai Podi, for serving with Bhairi); Gingelly Oil / Ghee & Salt (Lenu).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Served with Chenna Bhurko (Roasted Gram Chutney Podi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Traditional Sourashtra Kitchen (பாரம்பரிய முறை) via the YouTube link above!"
    ]
  },
  {
    "id": "yt-sB7A-pIdTVk",
    "name": "நளர் பைரி Nalar Bhairi Sourashtra #GeethaBeiKitchen",
    "englishSubtitle": "நளர் பைரி Nalar Bhairi Sourashtra #GeethaBeiKitchen",
    "sourceAttribution": "sourashtra films (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=sB7A-pIdTVk",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhairi & Appam (Fritters & Tiffin)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Spinach",
      "Coconut",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Nalar Bhairi Sourashtra Geetha Bei Kitchen #GeethaBeiKitchen.",
      "Idli Rice / Raw Rice (1 cup) & Urad Dal (2 tbsp)",
      "Black Pepper, Cumin Seeds (or Palm Jaggery / Gullu for sweet Appam/Dhowlo)",
      "Chenna Bhurko (Pottukadalai Podi, for serving with Bhairi)",
      "Gingelly Oil / Ghee & Salt (Lenu)"
    ],
    "bhurkoUsed": "Served with Chenna Bhurko (Roasted Gram Chutney Podi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Spinach, Coconut, Curry Leaves) by washing, chopping, and measuring as shown by sourashtra films.",
      "Gather the dry Madurai Sourashtra pantry additives: Idli Rice / Raw Rice (1 cup) & Urad Dal (2 tbsp); Black Pepper, Cumin Seeds (or Palm Jaggery / Gullu for sweet Appam/Dhowlo); Chenna Bhurko (Pottukadalai Podi, for serving with Bhairi); Gingelly Oil / Ghee & Salt (Lenu).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Served with Chenna Bhurko (Roasted Gram Chutney Podi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by sourashtra films via the YouTube link above!"
    ]
  },
  {
    "id": "yt-ny7c4oF_nSo",
    "name": "Naler Bhaeri (Coconut Poori)",
    "englishSubtitle": "Naler Bhaeri (Coconut Poori)",
    "sourceAttribution": "Yummy Sourashtra (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=ny7c4oF_nSo",
    "webUrl": "http://www.yummysourashtra.com/",
    "category": "Bhairi & Appam (Fritters & Tiffin)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Spinach",
      "Coconut",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: I created this video with the YouTube Video Editor (http://www.youtube.com/editor)",
      "Idli Rice / Raw Rice (1 cup) & Urad Dal (2 tbsp)",
      "Black Pepper, Cumin Seeds (or Palm Jaggery / Gullu for sweet Appam/Dhowlo)",
      "Chenna Bhurko (Pottukadalai Podi, for serving with Bhairi)",
      "Gingelly Oil / Ghee & Salt (Lenu)"
    ],
    "bhurkoUsed": "Served with Chenna Bhurko (Roasted Gram Chutney Podi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Spinach, Coconut, Curry Leaves) by washing, chopping, and measuring as shown by Yummy Sourashtra.",
      "Gather the dry Madurai Sourashtra pantry additives: Idli Rice / Raw Rice (1 cup) & Urad Dal (2 tbsp); Black Pepper, Cumin Seeds (or Palm Jaggery / Gullu for sweet Appam/Dhowlo); Chenna Bhurko (Pottukadalai Podi, for serving with Bhairi); Gingelly Oil / Ghee & Salt (Lenu).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Served with Chenna Bhurko (Roasted Gram Chutney Podi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Yummy Sourashtra via the YouTube link above!"
    ]
  },
  {
    "id": "yt-jSujXvBEo4k",
    "name": "Nalar Bhairi",
    "englishSubtitle": "Nalar Bhairi | Rice Coconut Poori/Vadai #maduraispecial #nalarbhairi",
    "sourceAttribution": "Chitra Cooks (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=jSujXvBEo4k",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Spinach",
      "Coconut",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Ingredients Idli rice-1 cup Grated coconut-3/4 cup Black pepper powder-1/2 tsp Salt-1/2 tsp Oil to deep fry Music: ...",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Spinach, Coconut, Curry Leaves) by washing, chopping, and measuring as shown by Chitra Cooks.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Chitra Cooks via the YouTube link above!"
    ]
  },
  {
    "id": "yt-V3PZPHsblx0",
    "name": "Sourashtra special Coconut Poori",
    "englishSubtitle": "Sourashtra special Coconut Poori / Nalar Bhairi in easy style.",
    "sourceAttribution": "Kalpanasezhiyan cooking (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=V3PZPHsblx0",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhairi & Appam (Fritters & Tiffin)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Spinach",
      "Coconut",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Idli Rice / Raw Rice (1 cup) & Urad Dal (2 tbsp)",
      "Black Pepper, Cumin Seeds (or Palm Jaggery / Gullu for sweet Appam/Dhowlo)",
      "Chenna Bhurko (Pottukadalai Podi, for serving with Bhairi)",
      "Gingelly Oil / Ghee & Salt (Lenu)"
    ],
    "bhurkoUsed": "Served with Chenna Bhurko (Roasted Gram Chutney Podi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Spinach, Coconut, Curry Leaves) by washing, chopping, and measuring as shown by Kalpanasezhiyan cooking.",
      "Gather the dry Madurai Sourashtra pantry additives: Idli Rice / Raw Rice (1 cup) & Urad Dal (2 tbsp); Black Pepper, Cumin Seeds (or Palm Jaggery / Gullu for sweet Appam/Dhowlo); Chenna Bhurko (Pottukadalai Podi, for serving with Bhairi); Gingelly Oil / Ghee & Salt (Lenu).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Served with Chenna Bhurko (Roasted Gram Chutney Podi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Kalpanasezhiyan cooking via the YouTube link above!"
    ]
  },
  {
    "id": "yt-wrxtraCiZmM",
    "name": "Pangarapan Bairi recipe in Sourashtra (Mullumurungai Bairi)",
    "englishSubtitle": "Pangarapan Bairi recipe in Sourashtra (Mullumurungai Bairi)",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=wrxtraCiZmM",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Drumstick",
      "Spinach",
      "Coconut",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Idli rice - 250 gm Pangarapan - 1 handful Drumstick leaves - 1 handful Thuthuvalai leaves - 5 count Chiththaraththai - 1 piece or ...",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Drumstick, Spinach, Coconut, Curry Leaves) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-psCu0ILsBaY",
    "name": "Miri Bhairi",
    "englishSubtitle": "Miri Bhairi | மிரி பைரி | Sourashtra Recipe | Miri Bhairi Recipe",
    "sourceAttribution": "Sahazhya's Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=psCu0ILsBaY",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Spinach",
      "Coconut",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Miri Bhairi (மிரி பைரி) is a traditional Sourashtra (Palkar) recipe made with rice, pepper and coconut. This recipe is quick ...",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Spinach, Coconut, Curry Leaves) by washing, chopping, and measuring as shown by Sahazhya's Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Sahazhya's Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-sXYhp8mlKrQ",
    "name": "முள்ளு முருங்கை வடை Madurai Spl Roadside Snack",
    "englishSubtitle": "முள்ளு முருங்கை வடை Madurai Spl Roadside Snack | Pangarapaan Bhairi |Cold&Cough Remedy|Shree Creatio",
    "sourceAttribution": "Shree Creations World (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=sXYhp8mlKrQ",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhairi & Appam (Fritters & Tiffin)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Drumstick",
      "Spinach",
      "Coconut",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Hi Friends! Let's try this Healthy Snack - Pangarapaan Bhairi (Mullumurungai Vadai). It cures Cold, Cough & Mucus. In Sourashtra ...",
      "Idli Rice / Raw Rice (1 cup) & Urad Dal (2 tbsp)",
      "Black Pepper, Cumin Seeds (or Palm Jaggery / Gullu for sweet Appam/Dhowlo)",
      "Chenna Bhurko (Pottukadalai Podi, for serving with Bhairi)",
      "Gingelly Oil / Ghee & Salt (Lenu)"
    ],
    "bhurkoUsed": "Served with Chenna Bhurko (Roasted Gram Chutney Podi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Drumstick, Spinach, Coconut, Curry Leaves) by washing, chopping, and measuring as shown by Shree Creations World.",
      "Gather the dry Madurai Sourashtra pantry additives: Idli Rice / Raw Rice (1 cup) & Urad Dal (2 tbsp); Black Pepper, Cumin Seeds (or Palm Jaggery / Gullu for sweet Appam/Dhowlo); Chenna Bhurko (Pottukadalai Podi, for serving with Bhairi); Gingelly Oil / Ghee & Salt (Lenu).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Served with Chenna Bhurko (Roasted Gram Chutney Podi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Shree Creations World via the YouTube link above!"
    ]
  },
  {
    "id": "yt-tHFOIwkbSS8",
    "name": "Kenni Pace (Broken Rice Porridge or Congee)",
    "englishSubtitle": "Kenni Pace (Broken Rice Porridge or Congee)",
    "sourceAttribution": "Yummy Sourashtra (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=tHFOIwkbSS8",
    "webUrl": "http://www.yummysourashtra.com/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Coconut",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Coconut, Curry Leaves) by washing, chopping, and measuring as shown by Yummy Sourashtra.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Yummy Sourashtra via the YouTube link above!"
    ]
  },
  {
    "id": "yt-9ienybb9-hc",
    "name": "Sourashtra Kanji",
    "englishSubtitle": "Sourashtra Kanji | Hema's Sourashtra samayal in Tamil",
    "sourceAttribution": "Hema's Sourashtra Samayal (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=9ienybb9-hc",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Coconut",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Kanji #KurunaiKanji #SourashtraKanji This is a very easy and tasty recipe to prepare Sourashtra Kanji. In Sourashtra, we call this ...",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Coconut, Curry Leaves) by washing, chopping, and measuring as shown by Hema's Sourashtra Samayal.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Hema's Sourashtra Samayal via the YouTube link above!"
    ]
  },
  {
    "id": "yt-DxCVQEh3ugc",
    "name": "Madurai Urad dal rice",
    "englishSubtitle": "Madurai Urad dal rice | Madurai Ulundhu Sadam | மதுரை உளுந்து சாதம்| Kenni pes -Sourashtrians Recipe",
    "sourceAttribution": "Buddy Recipes (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=DxCVQEh3ugc",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Coconut",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Madurai Urad dal rice | Madurai Ulundhu Sadam | மதுரை உளுந்து சாதம்| Kenni pes -Sourashtrians Recipe urad ...",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Coconut, Curry Leaves) by washing, chopping, and measuring as shown by Buddy Recipes.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Buddy Recipes via the YouTube link above!"
    ]
  },
  {
    "id": "yt-ZYWFm8JXEWU",
    "name": "தொவ்ளோ கோனக் ஹன்தத்தே Dhovlo sourashtra #GeethaBeiKitchen Geetha Bei Kitchen",
    "englishSubtitle": "தொவ்ளோ கோனக் ஹன்தத்தே Dhovlo sourashtra #GeethaBeiKitchen Geetha Bei Kitchen",
    "sourceAttribution": "sourashtra films (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=ZYWFm8JXEWU",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Bhaath & Pongal (Rice Specialties)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Coconut",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: தொவ்ளோ கோனக் ஹன்தத்தே Dhovlo sourashtra #GeethaBeiKitchen Geetha Bei Kitchen.",
      "Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal",
      "Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal)",
      "Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing",
      "Gingelly Oil or Ghee (Thup) & Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Coconut, Curry Leaves) by washing, chopping, and measuring as shown by sourashtra films.",
      "Gather the dry Madurai Sourashtra pantry additives: Raw Rice (Saadu — 1 to 2 cups) & Moong Dal / Chana Dal; Tamarind Extract (for Ambat/Dhowra Pongal) or Black Pepper & Cumin (for Mudha/Thoov Pongal); Mustard Seeds (Mhuri), Urad Dal, Chana Dal, Peanuts & Hing; Gingelly Oil or Ghee (Thup) & Salt (Lenu).",
      "Cook the raw rice (Saadu) and dal base to the traditional Madurai Sourashtra texture, then prepare the aromatic tempering or tamarind/jaggery reduction.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by sourashtra films via the YouTube link above!"
    ]
  },
  {
    "id": "yt-7TnwoU5YBHk",
    "name": "Mutton Peratal",
    "englishSubtitle": "Mutton Peratal| Sourashtra special polte chaina| How to make mutton peratal in tamil",
    "sourceAttribution": "Thara's Channel (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=7TnwoU5YBHk",
    "webUrl": "https://jaleelacooking.blogspot.com/search?q=saurashtra",
    "category": "Non-Veg Ounty, Chaino & Kodhi",
    "dietaryType": "Non-Veg",
    "fridgeTriggers": [
      "Spinach",
      "Mutton",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Hi friends, In this video, we will see how to make mutton peratal in tamil. This mutton peratal is sourashtra special polte chaina.",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Spinach, Mutton, Curry Leaves) by washing, chopping, and measuring as shown by Thara's Channel.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Thara's Channel via the YouTube link above!"
    ]
  },
  {
    "id": "yt-JgEL-lVfyL0",
    "name": "Pepper Mutton Recipe",
    "englishSubtitle": "Pepper Mutton Recipe | Sourashtra Mutton poltayo Recipe | Mutton Recipes | Easy And Tasty Recipe",
    "sourceAttribution": "CookBook Recipes (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=JgEL-lVfyL0",
    "webUrl": "https://jaleelacooking.blogspot.com/search?q=saurashtra",
    "category": "Non-Veg Ounty, Chaino & Kodhi",
    "dietaryType": "Non-Veg",
    "fridgeTriggers": [
      "Spinach",
      "Mutton",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: MuttonRecipes #PepperMutton #Sourashtrarecipes #CookBookRecipeKitchen.",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Spinach, Mutton, Curry Leaves) by washing, chopping, and measuring as shown by CookBook Recipes.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by CookBook Recipes via the YouTube link above!"
    ]
  },
  {
    "id": "yt-A3xJdRBMG4A",
    "name": "Losan Kolkar in Sourashtra",
    "englishSubtitle": "Losan Kolkar in Sourashtra",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=A3xJdRBMG4A",
    "webUrl": "https://www.sailajakitchen.org/search?q=sourashtra",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Garlic",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Losan(garlic) - 25 numbers or 1 handful Ounty Burko - 3 tbsp Oil - 7 tbsp Asafoetida- to taste Salt- to taste Kaaru Burko - 1/4 soak ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Garlic, Curry Leaves) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-Ncm1trSZsZg",
    "name": "🌟 Poondu Kuzhambu",
    "englishSubtitle": "🌟 Poondu Kuzhambu /Losan Kolkar /Kolgar /Poondu Kulambu /Poondu Milagu Kuzhambu /Sourashtra Recipes",
    "sourceAttribution": "Sugi cooks - SomethingDifferent, FOR ALL (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=Ncm1trSZsZg",
    "webUrl": "https://sugi-writes.blogspot.com/search/label/Sourashtra%20Recipes",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Garlic",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Traditional and Authentic Poondu Kulambu recipe. -------------------------------------------------- SUBSCRIBE to my YouTube channel for ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Garlic, Curry Leaves) by washing, chopping, and measuring as shown by Sugi cooks - SomethingDifferent, FOR ALL.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Sugi cooks - SomethingDifferent, FOR ALL via the YouTube link above!"
    ]
  },
  {
    "id": "yt-APUlphd0B04",
    "name": "Losan Kolgar (Poondu Kuzhambu)",
    "englishSubtitle": "Losan Kolgar (Poondu Kuzhambu)",
    "sourceAttribution": "Yummy Sourashtra (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=APUlphd0B04",
    "webUrl": "http://www.yummysourashtra.com/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Garlic",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Garlic, Curry Leaves) by washing, chopping, and measuring as shown by Yummy Sourashtra.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Yummy Sourashtra via the YouTube link above!"
    ]
  },
  {
    "id": "yt-XyLGjnjuRII",
    "name": "சௌராஷ்டிரா ஸ்டைலில் ருசியான ஸ்பெஷல் லொசன் கொல்க்கர் (ருசியான பூண்டு குழம்பு)",
    "englishSubtitle": "சௌராஷ்டிரா ஸ்டைலில் ருசியான ஸ்பெஷல் லொசன் கொல்க்கர் (ருசியான பூண்டு குழம்பு)",
    "sourceAttribution": "Kalatthai Vellalam (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=XyLGjnjuRII",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Garlic",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: சௌராஷ்டிரா ஸ்பெஷல் ருசியான லொசன் கொல்க்கர் (ருசியான பூண்டு ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Garlic, Curry Leaves) by washing, chopping, and measuring as shown by Kalatthai Vellalam.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Kalatthai Vellalam via the YouTube link above!"
    ]
  },
  {
    "id": "yt-48AYr8gNoBU",
    "name": "Garlic Kuzhambu",
    "englishSubtitle": "Garlic Kuzhambu | பூண்டு காரக் குழம்பு | லொசன் கொல்கர் | Recipe - 54",
    "sourceAttribution": "Traditional Sourashtra Kitchen (பாரம்பரிய முறை) (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=48AYr8gNoBU",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Garlic",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: பூண்டு காரக் குழம்பு எப்படி செய்வது என்று பாரக்கலாம். இதை ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Garlic, Curry Leaves) by washing, chopping, and measuring as shown by Traditional Sourashtra Kitchen (பாரம்பரிய முறை).",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Traditional Sourashtra Kitchen (பாரம்பரிய முறை) via the YouTube link above!"
    ]
  },
  {
    "id": "yt-0H9IZXdCASE",
    "name": "Poondu Kulambu",
    "englishSubtitle": "Poondu Kulambu/Madurai style poondu kulambu/ Losan Kolkar/Sourashtra style poondu kulambu",
    "sourceAttribution": "Sha Home recipes (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=0H9IZXdCASE",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Garlic",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: poondukulambu #losankolkar #maduraistylepoondukulambu #sourashtrastylepoondukulambu.",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Garlic, Curry Leaves) by washing, chopping, and measuring as shown by Sha Home recipes.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Sha Home recipes via the YouTube link above!"
    ]
  },
  {
    "id": "yt-s9z0f9etiVA",
    "name": "Garlic Curry or Poondu Kulambu, Kolkar in Sourashtra - World Famous Recipes By Sangeetha!#sourashtra",
    "englishSubtitle": "Garlic Curry or Poondu Kulambu, Kolkar in Sourashtra - World Famous Recipes By Sangeetha!#sourashtra",
    "sourceAttribution": "Puliady’s Kitchen! (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=s9z0f9etiVA",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Garlic",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Puliady's Kitchen! Link to make curry powder for Garlic Curry! https://youtu.be/mLAkuJqtdSo This curry powder is made by ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Garlic, Curry Leaves) by washing, chopping, and measuring as shown by Puliady’s Kitchen!.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Puliady’s Kitchen! via the YouTube link above!"
    ]
  },
  {
    "id": "yt-cZK8xbmW1_w",
    "name": "Garlic Kulambu",
    "englishSubtitle": "Garlic Kulambu | Poondu Kulambu(Losan Kolkar)",
    "sourceAttribution": "Digi Views (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=cZK8xbmW1_w",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Garlic",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Garlic, Curry Leaves) by washing, chopping, and measuring as shown by Digi Views.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Digi Views via the YouTube link above!"
    ]
  },
  {
    "id": "yt-ys_JG9_ptT8",
    "name": "Viskaila kolkar(sourashtra)",
    "englishSubtitle": "Viskaila kolkar(sourashtra)",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=ys_JG9_ptT8",
    "webUrl": "https://www.sailajakitchen.org/search?q=sourashtra",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Garlic",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Ounty burko 2 tsp Tamarind water Garlic 4 pieces Cumin seeds 1 tsp Viskailo small amount Asafoetida small amount Sesame oil.",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Garlic, Curry Leaves) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-8Y1LvneBccc",
    "name": "Siththaraththai kolkar",
    "englishSubtitle": "Siththaraththai kolkar/ dhumbrastu kolkar",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=8Y1LvneBccc",
    "webUrl": "https://www.sailajakitchen.org/search?q=sourashtra",
    "category": "Ounty & Kolkar (Tangy Gravies)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Garlic",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Siththaraththai small piece Ounty burko 5 spoon Tamarind juice Sesame oil.",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Garlic, Curry Leaves) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-pgHcPdGDnis",
    "name": "Rava Laddu",
    "englishSubtitle": "Rava Laddu",
    "sourceAttribution": "Yummy Sourashtra (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=pgHcPdGDnis",
    "webUrl": "http://www.yummysourashtra.com/",
    "category": "Bhairi & Appam (Fritters & Tiffin)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Idli Rice / Raw Rice (1 cup) & Urad Dal (2 tbsp)",
      "Black Pepper, Cumin Seeds (or Palm Jaggery / Gullu for sweet Appam/Dhowlo)",
      "Chenna Bhurko (Pottukadalai Podi, for serving with Bhairi)",
      "Gingelly Oil / Ghee & Salt (Lenu)"
    ],
    "bhurkoUsed": "Served with Chenna Bhurko (Roasted Gram Chutney Podi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Yummy Sourashtra.",
      "Gather the dry Madurai Sourashtra pantry additives: Idli Rice / Raw Rice (1 cup) & Urad Dal (2 tbsp); Black Pepper, Cumin Seeds (or Palm Jaggery / Gullu for sweet Appam/Dhowlo); Chenna Bhurko (Pottukadalai Podi, for serving with Bhairi); Gingelly Oil / Ghee & Salt (Lenu).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Served with Chenna Bhurko (Roasted Gram Chutney Podi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Yummy Sourashtra via the YouTube link above!"
    ]
  },
  {
    "id": "yt-nOwg8CJZe8A",
    "name": "🌟 Chicken Kulambu",
    "englishSubtitle": "🌟 Chicken Kulambu /Kudi Ounty /Chicken Kurma Recipe /Chicken Kurma Kulambu /Chicken Recipe",
    "sourceAttribution": "Sugi cooks - SomethingDifferent, FOR ALL (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=nOwg8CJZe8A",
    "webUrl": "https://sugi-writes.blogspot.com/search/label/Sourashtra%20Recipes",
    "category": "Non-Veg Ounty, Chaino & Kodhi",
    "dietaryType": "Non-Veg",
    "fridgeTriggers": [
      "Curry Leaves",
      "Chicken",
      "Mutton"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Simple and tasty chicken kulambu / chicken curry recipe. Tastes delicious with rice, idli, dosa, poori, chapati, appam.",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Curry Leaves, Chicken, Mutton) by washing, chopping, and measuring as shown by Sugi cooks - SomethingDifferent, FOR ALL.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Sugi cooks - SomethingDifferent, FOR ALL via the YouTube link above!"
    ]
  },
  {
    "id": "yt-B2a5uorY4Z4",
    "name": "chicken aumti",
    "englishSubtitle": "chicken aumti | Sourashtra chicken kulambu recipe",
    "sourceAttribution": "Mommy Days (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=B2a5uorY4Z4",
    "webUrl": "https://jaleelacooking.blogspot.com/search?q=saurashtra",
    "category": "Non-Veg Ounty, Chaino & Kodhi",
    "dietaryType": "Non-Veg",
    "fridgeTriggers": [
      "Chicken",
      "Mutton",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Chicken, Mutton, Curry Leaves) by washing, chopping, and measuring as shown by Mommy Days.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Mommy Days via the YouTube link above!"
    ]
  },
  {
    "id": "yt-UQ5BFNBOfBA",
    "name": "Mutton kuzhambu in sourashtra",
    "englishSubtitle": "Mutton kuzhambu in sourashtra|Chaina Amty |Sourashtra special Recipes|Ounty|Bachelor's recipe@mutton",
    "sourceAttribution": "Vevan Media (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=UQ5BFNBOfBA",
    "webUrl": "https://jaleelacooking.blogspot.com/search?q=saurashtra",
    "category": "Non-Veg Ounty, Chaino & Kodhi",
    "dietaryType": "Non-Veg",
    "fridgeTriggers": [
      "Chicken",
      "Mutton",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Mutton kuzhambu in sourashtra |Chaina Amty |Sourashtra special Recipes |Ounty|Bachelor's recipe @vevanmedia9891.",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Chicken, Mutton, Curry Leaves) by washing, chopping, and measuring as shown by Vevan Media.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Vevan Media via the YouTube link above!"
    ]
  },
  {
    "id": "yt-aNhbFCzw-uQ",
    "name": "Madurai Sourashtra Mutton curry !",
    "englishSubtitle": "Madurai Sourashtra Mutton curry !",
    "sourceAttribution": "3am kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=aNhbFCzw-uQ",
    "webUrl": "https://jaleelacooking.blogspot.com/search?q=saurashtra",
    "category": "Non-Veg Ounty, Chaino & Kodhi",
    "dietaryType": "Non-Veg",
    "fridgeTriggers": [
      "Curry Leaves",
      "Chicken",
      "Mutton"
    ],
    "pantryAdditives": [
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Curry Leaves, Chicken, Mutton) by washing, chopping, and measuring as shown by 3am kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by 3am kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-RDSaa9aWAPM",
    "name": "Chicken kurma in sourashtra",
    "englishSubtitle": "Chicken kurma in sourashtra",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=RDSaa9aWAPM",
    "webUrl": "https://jaleelacooking.blogspot.com/search?q=saurashtra",
    "category": "Non-Veg Ounty, Chaino & Kodhi",
    "dietaryType": "Non-Veg",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Coconut",
      "Chicken",
      "Mutton",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Chicken - 250 gm Onion - 1 Tomato - 2 Cumin seeds - 1 tsp Fennel seeds - 1 tsp Masa kasha - 1 tsp Coconut - 1 or 2 chillu Malli ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Coconut, Chicken, Mutton, Curry Leaves) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-1qbY7IQ97w8",
    "name": "sourashtra chicken curry #cooking #minaturecooking #pot #tamil #yummy #chicken #village",
    "englishSubtitle": "sourashtra chicken curry #cooking #minaturecooking #pot #tamil #yummy #chicken #village",
    "sourceAttribution": "Little Vessels Cooking (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=1qbY7IQ97w8",
    "webUrl": "https://jaleelacooking.blogspot.com/search?q=saurashtra",
    "category": "Non-Veg Ounty, Chaino & Kodhi",
    "dietaryType": "Non-Veg",
    "fridgeTriggers": [
      "Curry Leaves",
      "Chicken",
      "Mutton"
    ],
    "pantryAdditives": [
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Curry Leaves, Chicken, Mutton) by washing, chopping, and measuring as shown by Little Vessels Cooking.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Little Vessels Cooking via the YouTube link above!"
    ]
  },
  {
    "id": "yt-1Gni8_Yxh9E",
    "name": "Sourashtra receipes",
    "englishSubtitle": "Sourashtra receipes/koddi fry/Thirukkallil koddi fry 2 min non veg ready",
    "sourceAttribution": "VIP Kids favourite (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=1Gni8_Yxh9E",
    "webUrl": "https://jaleelacooking.blogspot.com/search?q=saurashtra",
    "category": "Non-Veg Ounty, Chaino & Kodhi",
    "dietaryType": "Non-Veg",
    "fridgeTriggers": [
      "Fish",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Sourastra receipes/koddi fry/thirukkai koddi bhunjini/2 min non veg ready.",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Fish, Curry Leaves) by washing, chopping, and measuring as shown by VIP Kids favourite.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by VIP Kids favourite via the YouTube link above!"
    ]
  },
  {
    "id": "yt-RgulA5xVTjU",
    "name": "Sourashtrastyle karuvattu kuzhambu& karuvattu kothu varuval",
    "englishSubtitle": "Sourashtrastyle karuvattu kuzhambu& karuvattu kothu varuval/கருவாட்டு குழம்பு&கருவாட்டு கொத்துவறுவல்",
    "sourceAttribution": "Shawes log (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=RgulA5xVTjU",
    "webUrl": "https://jaleelacooking.blogspot.com/search?q=saurashtra",
    "category": "Non-Veg Ounty, Chaino & Kodhi",
    "dietaryType": "Non-Veg",
    "fridgeTriggers": [
      "Fish",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Sourashtra style கருவாட்டு குழம்பு & கருவாட்டு கொத்து வறுவல்...try and share your ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Fish, Curry Leaves) by washing, chopping, and measuring as shown by Shawes log.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Shawes log via the YouTube link above!"
    ]
  },
  {
    "id": "yt-r5XQg2XktJw",
    "name": "Sourashtra Mali",
    "englishSubtitle": "Sourashtra Mali/mahli neei meen Ounti/Sourashtra meen KULAMBU/15 minutes meen kulambu",
    "sourceAttribution": "VIP Kids favourite (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=r5XQg2XktJw",
    "webUrl": "https://jaleelacooking.blogspot.com/search?q=saurashtra",
    "category": "Non-Veg Ounty, Chaino & Kodhi",
    "dietaryType": "Non-Veg",
    "fridgeTriggers": [
      "Fish",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Sourashtra Mali /mahli neei meen Ounti Sourashtra meen KULAMBU.",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Fish, Curry Leaves) by washing, chopping, and measuring as shown by VIP Kids favourite.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by VIP Kids favourite via the YouTube link above!"
    ]
  },
  {
    "id": "yt-Q8jgwgTREPA",
    "name": "Quick and Easy Sambar - World Famous Recipes By Sangeetha! #Sourashtra Sambar #Sourashtra Recipes",
    "englishSubtitle": "Quick and Easy Sambar - World Famous Recipes By Sangeetha! #Sourashtra Sambar #Sourashtra Recipes",
    "sourceAttribution": "Puliady’s Kitchen! (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=Q8jgwgTREPA",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ambat & Pitla (Rich Curries)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Puliady's Kitchen!",
      "Toor Dal (Tuvaram Bela) or Chana Dal (Harbara Bela — 1/2 cup)",
      "Ounty Bhurko or Sambar Bhurko (1.5–2 tbsp)",
      "Tamarind (small gooseberry size), Turmeric & Hing",
      "Mustard Seeds, Urad Dal & Cooking Oil",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko / Sambar Bhurko",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Puliady’s Kitchen!.",
      "Gather the dry Madurai Sourashtra pantry additives: Ounty Bhurko or Sambar Bhurko (1.5–2 tbsp); Tamarind (small gooseberry size), Turmeric & Hing; Mustard Seeds, Urad Dal & Cooking Oil; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko / Sambar Bhurko) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Puliady’s Kitchen! via the YouTube link above!"
    ]
  },
  {
    "id": "yt-gvL7Ok-YzkU",
    "name": "Pudalangkai kootu in Sourashtra",
    "englishSubtitle": "Pudalangkai kootu in Sourashtra",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=gvL7Ok-YzkU",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ambat & Pitla (Rich Curries)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Garlic",
      "Green Chilli",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Snake guard - 1 big Tomato - 1 small Onion - 1 small Green chili - 2 Cumin seeds - 1 tea spoon Garlic - 4 pieces Toor and moong ...",
      "Toor Dal (Tuvaram Bela) or Chana Dal (Harbara Bela — 1/2 cup)",
      "Ounty Bhurko or Sambar Bhurko (1.5–2 tbsp)",
      "Tamarind (small gooseberry size), Turmeric & Hing",
      "Mustard Seeds, Urad Dal & Cooking Oil",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko / Sambar Bhurko",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Garlic, Green Chilli, Curry Leaves) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Ounty Bhurko or Sambar Bhurko (1.5–2 tbsp); Tamarind (small gooseberry size), Turmeric & Hing; Mustard Seeds, Urad Dal & Cooking Oil; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko / Sambar Bhurko) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-yS8c4mbx8sw",
    "name": "Mixed veg sambar (sourashtra)",
    "englishSubtitle": "Mixed veg sambar (sourashtra)",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=yS8c4mbx8sw",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ambat & Pitla (Rich Curries)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Drumstick",
      "Green Chilli",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Toor dhal 100gm Onion 1 Tomato 2 Tamarind water 1 small howko Green chili 1 Mixed veg(drumsticks, carrots, chaw chaw) one ...",
      "Toor Dal (Tuvaram Bela) or Chana Dal (Harbara Bela — 1/2 cup)",
      "Ounty Bhurko or Sambar Bhurko (1.5–2 tbsp)",
      "Tamarind (small gooseberry size), Turmeric & Hing",
      "Mustard Seeds, Urad Dal & Cooking Oil",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko / Sambar Bhurko",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Drumstick, Green Chilli, Curry Leaves) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Ounty Bhurko or Sambar Bhurko (1.5–2 tbsp); Tamarind (small gooseberry size), Turmeric & Hing; Mustard Seeds, Urad Dal & Cooking Oil; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko / Sambar Bhurko) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-54yiKkSjHJo",
    "name": "Nilambela sambar",
    "englishSubtitle": "Nilambela sambar",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=54yiKkSjHJo",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ambat & Pitla (Rich Curries)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Green Chilli",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Moong dhal 3/4 cup Onion 1 small Tomato 1 big or 2 small Green chili 1 Sambar powder 3/4 tsp Hing 1/4 tsp Turmeric powder 1/4 ...",
      "Toor Dal (Tuvaram Bela) or Chana Dal (Harbara Bela — 1/2 cup)",
      "Ounty Bhurko or Sambar Bhurko (1.5–2 tbsp)",
      "Tamarind (small gooseberry size), Turmeric & Hing",
      "Mustard Seeds, Urad Dal & Cooking Oil",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko / Sambar Bhurko",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Green Chilli, Curry Leaves) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Ounty Bhurko or Sambar Bhurko (1.5–2 tbsp); Tamarind (small gooseberry size), Turmeric & Hing; Mustard Seeds, Urad Dal & Cooking Oil; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko / Sambar Bhurko) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-MEOwll9Can0",
    "name": "Sambar - World famous recipes by Sangeetha! #sourashtrarecipes #sourashtra #sambar",
    "englishSubtitle": "Sambar - World famous recipes by Sangeetha! #sourashtrarecipes #sourashtra #sambar",
    "sourceAttribution": "Puliady’s Kitchen! (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=MEOwll9Can0",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ambat & Pitla (Rich Curries)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Tomato",
      "Onion",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Puliady's Kitchen!",
      "Toor Dal (Tuvaram Bela) or Chana Dal (Harbara Bela — 1/2 cup)",
      "Ounty Bhurko or Sambar Bhurko (1.5–2 tbsp)",
      "Tamarind (small gooseberry size), Turmeric & Hing",
      "Mustard Seeds, Urad Dal & Cooking Oil",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko / Sambar Bhurko",
    "processSteps": [
      "Prep the fresh fridge ingredients (Tomato, Onion, Curry Leaves) by washing, chopping, and measuring as shown by Puliady’s Kitchen!.",
      "Gather the dry Madurai Sourashtra pantry additives: Ounty Bhurko or Sambar Bhurko (1.5–2 tbsp); Tamarind (small gooseberry size), Turmeric & Hing; Mustard Seeds, Urad Dal & Cooking Oil; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko / Sambar Bhurko) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Puliady’s Kitchen! via the YouTube link above!"
    ]
  },
  {
    "id": "yt-irgNMP1VXO8",
    "name": "Sourashtra Keera Kootu",
    "englishSubtitle": "Sourashtra Keera Kootu | Hema's Sourashtra samayal in Tamil",
    "sourceAttribution": "Hema's Sourashtra Samayal (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=irgNMP1VXO8",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Ambat & Pitla (Rich Curries)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Spinach",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: An easy recipe for Keera kootu.",
      "Toor Dal (Tuvaram Bela) or Chana Dal (Harbara Bela — 1/2 cup)",
      "Ounty Bhurko or Sambar Bhurko (1.5–2 tbsp)",
      "Tamarind (small gooseberry size), Turmeric & Hing",
      "Mustard Seeds, Urad Dal & Cooking Oil",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko / Sambar Bhurko",
    "processSteps": [
      "Prep the fresh fridge ingredients (Spinach, Curry Leaves) by washing, chopping, and measuring as shown by Hema's Sourashtra Samayal.",
      "Gather the dry Madurai Sourashtra pantry additives: Ounty Bhurko or Sambar Bhurko (1.5–2 tbsp); Tamarind (small gooseberry size), Turmeric & Hing; Mustard Seeds, Urad Dal & Cooking Oil; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko / Sambar Bhurko) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Hema's Sourashtra Samayal via the YouTube link above!"
    ]
  },
  {
    "id": "yt-iNrUaaphAbQ",
    "name": "Lubbin (Nellikkai Thuvaiyal)",
    "englishSubtitle": "Lubbin (Nellikkai Thuvaiyal)",
    "sourceAttribution": "Yummy Sourashtra (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=iNrUaaphAbQ",
    "webUrl": "http://www.yummysourashtra.com/",
    "category": "Budith, Losto & Polte (Chutneys/Masiyal)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Mint Leaves",
      "Gooseberry",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8)",
      "Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp)",
      "Mustard Seeds, Urad Dal & Gingelly Oil (for tempering)",
      "Rock Salt / Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Mint Leaves, Gooseberry, Curry Leaves) by washing, chopping, and measuring as shown by Yummy Sourashtra.",
      "Gather the dry Madurai Sourashtra pantry additives: Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8); Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp); Mustard Seeds, Urad Dal & Gingelly Oil (for tempering); Rock Salt / Salt (Lenu).",
      "Cook or roast the main fridge ingredients with dry red chillies, tamarind, hing, and lentil additives until tender, then stone-grind or mash coarsely with a wooden mathu.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Yummy Sourashtra via the YouTube link above!"
    ]
  },
  {
    "id": "yt-wNOVAurynHQ",
    "name": "Pudina Chutney or Mint Chutney or Losto- World Famous Recipes By Sangeetha! #sourashtra",
    "englishSubtitle": "Pudina Chutney or Mint Chutney or Losto- World Famous Recipes By Sangeetha! #sourashtra",
    "sourceAttribution": "Puliady’s Kitchen! (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=wNOVAurynHQ",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Budith, Losto & Polte (Chutneys/Masiyal)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Mint Leaves",
      "Gooseberry",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Puliady's Kitchen!",
      "Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8)",
      "Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp)",
      "Mustard Seeds, Urad Dal & Gingelly Oil (for tempering)",
      "Rock Salt / Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Mint Leaves, Gooseberry, Curry Leaves) by washing, chopping, and measuring as shown by Puliady’s Kitchen!.",
      "Gather the dry Madurai Sourashtra pantry additives: Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8); Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp); Mustard Seeds, Urad Dal & Gingelly Oil (for tempering); Rock Salt / Salt (Lenu).",
      "Cook or roast the main fridge ingredients with dry red chillies, tamarind, hing, and lentil additives until tender, then stone-grind or mash coarsely with a wooden mathu.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Puliady’s Kitchen! via the YouTube link above!"
    ]
  },
  {
    "id": "yt-cEb6qaJOlMs",
    "name": "Alla Chutney typeII",
    "englishSubtitle": "Alla Chutney typeII",
    "sourceAttribution": "Yummy Sourashtra (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=cEb6qaJOlMs",
    "webUrl": "http://www.yummysourashtra.com/",
    "category": "Budith, Losto & Polte (Chutneys/Masiyal)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Ginger",
      "Mint Leaves",
      "Gooseberry",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Yummy Sourashtra Recipe.",
      "Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8)",
      "Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp)",
      "Mustard Seeds, Urad Dal & Gingelly Oil (for tempering)",
      "Rock Salt / Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Ginger, Mint Leaves, Gooseberry, Curry Leaves) by washing, chopping, and measuring as shown by Yummy Sourashtra.",
      "Gather the dry Madurai Sourashtra pantry additives: Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8); Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp); Mustard Seeds, Urad Dal & Gingelly Oil (for tempering); Rock Salt / Salt (Lenu).",
      "Cook or roast the main fridge ingredients with dry red chillies, tamarind, hing, and lentil additives until tender, then stone-grind or mash coarsely with a wooden mathu.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Yummy Sourashtra via the YouTube link above!"
    ]
  },
  {
    "id": "yt-A0uKTXq9WMQ",
    "name": "Home Made Limbu(Lime pickle) in Sourashtra",
    "englishSubtitle": "Home Made Limbu(Lime pickle) in Sourashtra",
    "sourceAttribution": "Rani's Sourastra Kitchen (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=A0uKTXq9WMQ",
    "webUrl": "https://www.palkar.org/recipes/",
    "category": "Budith, Losto & Polte (Chutneys/Masiyal)",
    "dietaryType": "Vegetarian",
    "fridgeTriggers": [
      "Mint Leaves",
      "Lemon",
      "Gooseberry",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: 5 lime 1/2 cup salt (1/2 cup in 100gm cup) Fenugreek 3/4 baby spoon Asafoetida 3/4 baby spoon Kashmiri red chilli powder 2 ...",
      "Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8)",
      "Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp)",
      "Mustard Seeds, Urad Dal & Gingelly Oil (for tempering)",
      "Rock Salt / Salt (Lenu)"
    ],
    "processSteps": [
      "Prep the fresh fridge ingredients (Mint Leaves, Lemon, Gooseberry, Curry Leaves) by washing, chopping, and measuring as shown by Rani's Sourastra Kitchen.",
      "Gather the dry Madurai Sourashtra pantry additives: Chana Dal or Toor Dal (1 tbsp) & Dry Red Chillies (5–8); Tamarind (small piece) & Asafoetida (Hing — 1/4 tsp); Mustard Seeds, Urad Dal & Gingelly Oil (for tempering); Rock Salt / Salt (Lenu).",
      "Cook or roast the main fridge ingredients with dry red chillies, tamarind, hing, and lentil additives until tender, then stone-grind or mash coarsely with a wooden mathu.",
      "Incorporate the signature Sourashtra spice blend (traditional roasted spices & tamarind/dal stock) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Rani's Sourastra Kitchen via the YouTube link above!"
    ]
  },
  {
    "id": "yt-5266f-AurCw",
    "name": "Brinjal Chutney or Eggplant (Vangi Chutney in Sourashtra) - World Famous Recipes By Sangeetha!",
    "englishSubtitle": "Brinjal Chutney or Eggplant (Vangi Chutney in Sourashtra) - World Famous Recipes By Sangeetha!",
    "sourceAttribution": "Puliady’s Kitchen! (YouTube)",
    "youtubeUrl": "https://www.youtube.com/watch?v=5266f-AurCw",
    "webUrl": "https://www.abiscookbook.com/vangi-bhudid-eggplant-chutney-sourashtra-style/",
    "category": "Non-Veg Ounty, Chaino & Kodhi",
    "dietaryType": "Eggitarian",
    "fridgeTriggers": [
      "Brinjal",
      "Mint Leaves",
      "Gooseberry",
      "Eggs",
      "Curry Leaves"
    ],
    "pantryAdditives": [
      "Channel Ingredient Note: Puliady's Kitchen! #worldfamousrecipes #vangichutney #kathirikaikodsu #brinjalchutney #sourashtrachutney #sourashtrarecipes ...",
      "Ounty Bhurko / Sourashtra Kulambu Podi (2–3 tbsp)",
      "Tamarind (Ambat — small lemon size)",
      "Gingelly / Sesame Oil (2–3 tbsp)",
      "Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing",
      "Salt (Lenu — to taste)"
    ],
    "bhurkoUsed": "Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)",
    "processSteps": [
      "Prep the fresh fridge ingredients (Brinjal, Mint Leaves, Gooseberry, Eggs, Curry Leaves) by washing, chopping, and measuring as shown by Puliady’s Kitchen!.",
      "Gather the dry Madurai Sourashtra pantry additives: Tamarind (Ambat — small lemon size); Gingelly / Sesame Oil (2–3 tbsp); Mustard Seeds (Mhuri), Urad Dal, Fenugreek (Methi) & Hing; Salt (Lenu — to taste).",
      "Heat gingelly oil or ghee in a heavy pan; splutter mustard seeds, urad dal, cumin/fennel, hing, and curry leaves, then sauté the aromatics and primary fridge ingredients.",
      "Incorporate the signature Sourashtra spice blend (Ounty Bhurko (Roasted Coriander, Red Chilli, Black Urad Dal, Raw Rice & Methi)) and simmer until the flavors meld and oil separates.",
      "Finish with fresh coriander or a drizzle of sesame oil/ghee. Watch the full step-by-step video tutorial by Puliady’s Kitchen! via the YouTube link above!"
    ]
  }
];
