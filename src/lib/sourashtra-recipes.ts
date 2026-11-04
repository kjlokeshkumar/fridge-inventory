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
    name: 'Sambar Bhurko (Sourashtra Sambar Powder)',
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
    englishSubtitle: 'Classic Sourashtra Tangy Tomato Gravy',
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
    englishSubtitle: 'Sourashtra Whole Garlic & Sesame Oil Tamarind Gravy',
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
    englishSubtitle: 'Iconic Sourashtra Pressure-Cooked Brinjal Chutney',
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
    sourceAttribution: 'Sourashtra Heritage Recipes',
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
    sourceAttribution: 'Sourashtra Feast Archives',
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
    sourceAttribution: 'Sourashtra Kitchens',
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
    englishSubtitle: 'Sourashtra Wedding-Style Pepper-Cumin Tomato Rasam',
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
    englishSubtitle: 'Signature Sourashtra Tamarind Rice with Roasted Methi & Sesame Oil',
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
    englishSubtitle: 'Velvety Sourashtra Ven Pongal Paired with Vangi Budith',
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
    englishSubtitle: 'Sourashtra Lemon Rice, Pepper-Ghee "Love Birds" Rice & Mustard Rice',
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
    englishSubtitle: 'Sourashtra Drumstick, Brinjal & Potato Sambar',
    sourceAttribution: 'Sourashtra Home Kitchens',
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
    sourceAttribution: 'Sourashtra Street Food / YouTube',
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
    name: 'Chaino Kolkar (Sourashtra Mutton Ounty)',
    englishSubtitle: 'Traditional Bone-In Mutton Gravy with Ounty Bhurko & Sesame Oil',
    sourceAttribution: 'Sugi Cooks / Sourashtra Veetu Samayal',
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
    englishSubtitle: 'Traditional Sourashtra Pepper-Cumin-Khus Khus Chicken Curry',
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
    name: 'Sourashtra Meen / Karuvadu Kodhi (Fish Ounty)',
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
    id: 'kajali-ambat',
    name: 'Kajali Ambat (Saiva Eeral)',
    englishSubtitle: 'Madurai Special Vegetarian Liver Masala (Besan-Spiced Feast Gravy)',
    sourceAttribution: 'Chef Deena’s Kitchen & Madurai Sourashtra Wedding Tradition',
    category: 'Ambat & Pitla (Rich Curries)',
    dietaryType: 'Vegetarian',
    fridgeTriggers: ['Onion', 'Tomato', 'Ginger', 'Garlic', 'Coriander'],
    pantryAdditives: [
      'Besan / Gram Flour (1 cup, steamed and spiced)',
      'Ounty Bhurko (2 tbsp)',
      'Fennel Seeds, Cumin & Black Pepper',
      'Turmeric Powder, Oil & Salt (Lenu)'
    ],
    bhurkoUsed: 'Ounty Bhurko',
    processSteps: [
      'Mix 1 cup gram flour (besan) with turmeric, chili powder, crushed fennel, and water into a thick paste; steam for 12 minutes, cool, and slice into diamond pieces.',
      'Heat sesame oil in a kadai; temper with fennel seeds, cinnamon, curry leaves, and sauté sliced shallots and ginger-garlic paste.',
      'Add chopped tomatoes, turmeric, salt, and 2 tbsp Ounty Bhurko; cook until the masala releases oil.',
      'Add 1.5 cups water, simmer the gravy for 6 minutes, gently slide in the steamed besan diamond cubes, and let simmer for 4 minutes until they soak the spicy flavors.'
    ]
  },
  {
    id: 'dheim-ounty',
    name: 'Dheim Ounty (More Kulambu)',
    englishSubtitle: 'Spiced Sour Curd & Coconut Buttermilk Gravy with Ash Gourd or Potato',
    sourceAttribution: 'Sourashtra Heritage Cooking & Hema’s Sourashtra Samayal',
    category: 'Ounty & Kolkar (Tangy Gravies)',
    dietaryType: 'Vegetarian',
    fridgeTriggers: ['Curd', 'Green Chilli', 'Ginger', 'Curry Leaves', 'Coriander'],
    pantryAdditives: [
      'Grated Fresh Coconut (1/2 cup)',
      'Cumin Seeds (1 tsp) & Chana Dal (1 tbsp, soaked)',
      'Mustard Seeds & Fenugreek Seeds',
      'Turmeric Powder, Coconut Oil / Ghee & Salt (Lenu)'
    ],
    processSteps: [
      'Grind 1/2 cup grated coconut, 1 tbsp soaked chana dal, 2 green chillies, 1 inch ginger, and 1 tsp cumin seeds into a smooth paste.',
      'Whisk 2 cups of sour curd (dheim) with 1/2 cup water, turmeric powder, and salt until smooth.',
      'Combine the ground coconut paste with the whisked curd.',
      'Heat coconut oil in a pan; splutter mustard seeds, fenugreek seeds, dry red chillies, and curry leaves.',
      'Pour the curd mixture on low heat and warm gently until frothy (do not allow it to boil vigorously, or it will curdle); finish with fresh coriander.'
    ]
  },
  {
    id: 'mithi-kolkar',
    name: 'Mithi Kolkar (Vendhaya Kuzhambu)',
    englishSubtitle: 'Cooling Roasted Fenugreek & Sesame Oil Tamarind Gravy',
    sourceAttribution: 'Madurai Palkar Heritage Recipes',
    category: 'Ounty & Kolkar (Tangy Gravies)',
    dietaryType: 'Vegetarian',
    fridgeTriggers: ['Onion', 'Garlic', 'Tomato', 'Curry Leaves'],
    pantryAdditives: [
      'Fenugreek Seeds / Methi (1.5 tsp, roasted and ground)',
      'Ounty Bhurko (2 tbsp)',
      'Tamarind Extract (1/2 cup)',
      'Gingelly / Sesame Oil (3 tbsp)',
      'Mustard Seeds, Hing & Salt (Lenu)'
    ],
    bhurkoUsed: 'Ounty Bhurko',
    processSteps: [
      'Dry roast 1.5 tsp fenugreek seeds until deep reddish-brown and aromatic; grind into a fragrant powder.',
      'Heat 3 tbsp gingelly oil in a clay pot; splutter mustard seeds, hing, whole garlic cloves, shallots, and curry leaves.',
      'Add chopped tomato, turmeric, salt, and 2 tbsp Ounty Bhurko; sauté until oil glistens.',
      'Pour in thick tamarind extract and 1 cup water; simmer for 10 minutes until reduced and thick.',
      'Stir in the roasted fenugreek powder right before turning off the stove for an unforgettable digestive aroma.'
    ]
  },
  {
    id: 'bela-ounty',
    name: 'Sourashtra Bela Ounty (Paruppu Kulambu)',
    englishSubtitle: 'Traditional Soothing Toor Dal & Mixed Vegetable Gravy',
    sourceAttribution: 'Traditional Sourashtra Kitchen',
    category: 'Ounty & Kolkar (Tangy Gravies)',
    dietaryType: 'Vegetarian',
    fridgeTriggers: ['Tomato', 'Onion', 'Curry Leaves', 'Coriander'],
    pantryAdditives: [
      'Toor Dal / Tuvaram Bela (1/2 cup, pressure-cooked)',
      'Ounty Bhurko or Sambar Bhurko (2 tbsp)',
      'Tamarind Extract (small gooseberry size)',
      'Mustard Seeds, Cumin & Ghee',
      'Turmeric Powder & Salt (Lenu)'
    ],
    bhurkoUsed: 'Ounty Bhurko or Sambar Bhurko',
    processSteps: [
      'Pressure-cook 1/2 cup toor dal with turmeric and a drop of castor oil until creamy; mash well.',
      'Boil shallots and tomatoes in tamarind water with 2 tbsp Ounty Bhurko and salt for 8 minutes.',
      'Stir in the mashed toor dal and simmer for 5 minutes until balanced and velvety.',
      'Temper with mustard seeds, cumin, hing, and curry leaves in pure ghee and stir into the bubbling dal gravy.'
    ]
  },
  {
    id: 'alla-chutni',
    name: 'Alla Chutni (Ginger Chutney)',
    englishSubtitle: 'Fiery & Sweet-Tangy Madurai Ginger, Tamarind & Jaggery Relish',
    sourceAttribution: 'Sugi Cooks / Yummy Sourashtra',
    category: 'Budith, Losto & Polte (Chutneys/Masiyal)',
    dietaryType: 'Vegetarian',
    fridgeTriggers: ['Ginger', 'Curry Leaves'],
    pantryAdditives: [
      'Fresh Ginger / Alla (1/2 cup, peeled & chopped)',
      'Tamarind (lemon-sized ball, soaked)',
      'Jaggery / Palm Jaggery (1/4 cup, powdered)',
      'Urad Dal & Chana Dal (1 tbsp each)',
      'Dry Red Chillies (6–8)',
      'Sesame Oil, Mustard Seeds & Salt (Lenu)'
    ],
    processSteps: [
      'Heat 1 tbsp sesame oil in a pan; roast urad dal, chana dal, dry red chillies, and chopped ginger on low flame until aromatic and golden.',
      'Cool slightly and grind with soaked tamarind, jaggery, and salt into a thick, glossy, sweet-and-spicy relish.',
      'Temper with mustard seeds and curry leaves in hot sesame oil; serve alongside hot Diido (dosa) or Phalar (idli).'
    ]
  },
  {
    id: 'kandha-chutney',
    name: 'Kandha Chutney (Madurai Thanni Chutney)',
    englishSubtitle: 'Madurai Night-Street Thanni Onion & Red Chilli Chutney',
    sourceAttribution: 'Madurai Street Food Tradition',
    category: 'Budith, Losto & Polte (Chutneys/Masiyal)',
    dietaryType: 'Vegetarian',
    fridgeTriggers: ['Onion', 'Curry Leaves'],
    pantryAdditives: [
      'Shallots / Small Onions (1 cup, peeled)',
      'Dry Red Chillies (5–6)',
      'Tamarind (small piece)',
      'Sesame Oil, Mustard Seeds & Salt (Lenu)'
    ],
    processSteps: [
      'Sauté shallots and dry red chillies in sesame oil until translucent.',
      'Grind with tamarind and salt into a coarse paste, then dilute with water to a pouring consistency.',
      'Finish with a sizzling mustard seed and curry leaf tempering in gingelly oil.'
    ]
  },
  {
    id: 'kenni-paes',
    name: 'Kenni Paes (Ulundhu Kanji)',
    englishSubtitle: 'Nourishing Urad Dal, Raw Rice & Coconut Milk Morning Porridge',
    sourceAttribution: 'Traditional Sourashtra Morning Kanji',
    category: 'Bhaath & Pongal (Rice Specialties)',
    dietaryType: 'Vegetarian',
    fridgeTriggers: ['Garlic', 'Coconut'],
    pantryAdditives: [
      'Black Whole Urad Dal or Split Urad (1/2 cup)',
      'Raw Rice (1/4 cup)',
      'Coconut Milk (1 cup, freshly extracted)',
      'Fenugreek Seeds (1/2 tsp) & Garlic Cloves (6–8)',
      'Salt (Lenu)'
    ],
    processSteps: [
      'Wash whole urad dal and raw rice; pressure-cook with fenugreek seeds, garlic cloves, and 3.5 cups water for 5 whistles until soft and porridge-like.',
      'Mash smoothly with a wooden ladle, then stir in 1 cup fresh thick coconut milk and salt.',
      'Serve warm in a bowl with a fiery dollop of Sourashtra Pudina Losto or spicy lemon pickle.'
    ]
  },
  {
    id: 'thakkali-pongal',
    name: 'Sourashtra Thakkali Pongal (Tomato Rice)',
    englishSubtitle: 'One-Pot Fragrant Rice Cooked with Cinnamon, Cloves, Mint & Ripe Tomatoes',
    sourceAttribution: 'Buddy Recipes / Rani’s Sourashtra Kitchen',
    category: 'Bhaath & Pongal (Rice Specialties)',
    dietaryType: 'Vegetarian',
    fridgeTriggers: ['Tomato', 'Onion', 'Mint', 'Coriander', 'Green Chilli'],
    pantryAdditives: [
      'Raw Rice / Seeraga Samba Rice (1.5 cups)',
      'Cinnamon stick (1 inch), Cloves (3), Cardamom (2)',
      'Fennel seeds (1 tsp)',
      'Ghee & Cooking Oil (2 tbsp each)',
      'Turmeric Powder & Salt (Lenu)'
    ],
    processSteps: [
      'Heat ghee and oil in a pressure cooker; sauté whole cinnamon, cloves, cardamom, and fennel seeds until fragrant.',
      'Add sliced onions, green chillies, ginger-garlic paste, fresh mint, and coriander leaves; sauté until fragrant.',
      'Add 4 ripe chopped tomatoes, turmeric, and salt; cook until soft and oil glistens.',
      'Add soaked rice and 3 cups boiling water; close lid and cook on medium flame for 2 whistles.',
      'Let steam release naturally, gently fluff with a ladle, and serve hot with cool curd pachadi.'
    ]
  },
  {
    id: 'meal-maker-ambat',
    name: 'Sourashtra Meal Maker Ambat',
    englishSubtitle: 'High-Protein Spiced Soya Chunks Curry in Traditional Ounty Bhurko Gravy',
    sourceAttribution: 'Sourashtra Family Kitchens',
    category: 'Ambat & Pitla (Rich Curries)',
    dietaryType: 'Vegetarian',
    fridgeTriggers: ['Tomato', 'Onion', 'Ginger', 'Garlic', 'Curry Leaves', 'Coriander'],
    pantryAdditives: [
      'Soya Chunks / Meal Maker (1 cup, boiled & squeezed)',
      'Ounty Bhurko (2 tbsp)',
      'Grated Coconut Paste with Fennel (2 tbsp)',
      'Mustard Seeds, Oil & Salt (Lenu)'
    ],
    bhurkoUsed: 'Ounty Bhurko',
    processSteps: [
      'Soak 1 cup soya chunks in hot salted water for 10 minutes; drain and squeeze out all excess water completely.',
      'Heat oil in a kadai; splutter mustard seeds and curry leaves, then sauté finely chopped onions and ginger-garlic paste.',
      'Add tomatoes, salt, and 2 tbsp Ounty Bhurko; sauté until thick, then add the squeezed soya chunks so they absorb the masala.',
      'Add 1.5 cups water and 2 tbsp ground coconut-fennel paste; simmer for 8 minutes until the gravy is rich and fragrant.'
    ]
  },
  {
    id: 'cauliflower-kulambu',
    name: 'Sourashtra Cauliflower Kulambu',
    englishSubtitle: 'Tender Cauliflower Florets in Roasted Spice & Coconut Gravy',
    sourceAttribution: 'Hema’s Sourashtra Samayal',
    category: 'Ambat & Pitla (Rich Curries)',
    dietaryType: 'Vegetarian',
    fridgeTriggers: ['Cauliflower', 'Tomato', 'Onion', 'Curry Leaves', 'Coriander'],
    pantryAdditives: [
      'Fresh Cauliflower Florets (2 cups, blanched)',
      'Ounty Bhurko or Sambar Bhurko (2 tbsp)',
      'Coconut Paste with Cumin & Fennel (2 tbsp)',
      'Mustard Seeds, Oil & Salt (Lenu)'
    ],
    bhurkoUsed: 'Ounty Bhurko',
    processSteps: [
      'Blanch cauliflower florets in warm salted water with turmeric for 5 minutes; drain.',
      'Heat oil in a pan; splutter mustard seeds, curry leaves, and sauté onions and tomatoes with salt until soft.',
      'Add 2 tbsp Ounty Bhurko, 1.5 cups water, and the blanched cauliflower florets; simmer for 6 minutes.',
      'Stir in fresh ground coconut-fennel paste and cook for another 3 minutes until cauliflower is tender and gravy is aromatic.'
    ]
  },
  {
    id: 'thengai-pooranam-dhowlo',
    name: 'Thengai Pooranam Dhowlo (Sweet Kozhukattai)',
    englishSubtitle: 'Steamed Rice Dumplings Stuffed with Fresh Grated Coconut & Jaggery',
    sourceAttribution: 'Sourashtra Festival Heritage Tradition',
    category: 'Bhairi & Appam (Fritters & Tiffin)',
    dietaryType: 'Vegetarian',
    fridgeTriggers: ['Coconut'],
    pantryAdditives: [
      'Rice Flour / Idiyappam Flour (1 cup)',
      'Fresh Grated Coconut (1 cup)',
      'Jaggery (3/4 cup, powdered)',
      'Cardamom Powder (1/2 tsp) & Ghee (1 tsp)',
      'Salt (pinch)'
    ],
    processSteps: [
      'Melt jaggery with 2 tbsp water in a pan, add grated coconut and cardamom powder; stir until thick and shiny to form the sweet pooranam.',
      'Boil 1 cup water with a pinch of salt and ghee; slowly incorporate rice flour, stirring vigorously into a soft dough.',
      'Pinch small dough balls, flatten into cups, place a spoonful of coconut-jaggery pooranam inside, and seal edges neatly.',
      'Steam in an idli pot for 8–10 minutes until glossy; serve warm.'
    ]
  }
];
