export interface IngredientVisualInfo {
  name: string;
  tamilName?: string;
  visualCue: string;
  visualDifferenceNote?: string;
  culinaryUse?: string;
}

export const INGREDIENT_VISUAL_GUIDE: Record<string, IngredientVisualInfo> = {
  'toor dal': {
    name: 'Toor Dal (Pigeon Pea)',
    tamilName: 'துவரம் பருப்பு',
    visualCue: 'Flat, disc-like yellow lentils with clean, smooth beveled edges.',
    visualDifferenceNote: 'vs. Chana Dal: Toor dal is flatter, thinner, and lacks the central dividing ridge of chana dal. Cooks soft and creamy.',
    culinaryUse: 'The cornerstone of Sourashtra Sambars, Ountys, and Kolkars.'
  },
  'chana dal': {
    name: 'Chana Dal (Bengal Gram)',
    tamilName: 'கடலைப் பருப்பு',
    visualCue: 'Thick, plump split chickpeas with a rounded shape and a noticeable center ridge.',
    visualDifferenceNote: 'vs. Toor Dal: Noticeably thicker, chunkier, and holds its shape with a crunchy bite rather than melting into gravy.',
    culinaryUse: 'Essential for crisp Vadai (Bhairi), tempering tadka, and Kootu.'
  },
  'moong dal': {
    name: 'Moong Dal (Split Yellow Gram)',
    tamilName: 'பாசிப் பருப்பு',
    visualCue: 'Small, oval, pale yellow split lentils, significantly smaller than toor and chana.',
    visualDifferenceNote: 'vs. Toor Dal: Much smaller, paler yellow, with oval flat grains that cook almost instantly.',
    culinaryUse: 'Classic base for Vennai Pongal, Payatham Paruppu Kootu, and cooling summer broths.'
  },
  'urad dal': {
    name: 'Urad Dal (Split White Gram)',
    tamilName: 'உளுந்து (வெள்ளை உளுந்து)',
    visualCue: 'Small, ivory-white cylindrical split lentils with smooth matte surface.',
    visualDifferenceNote: 'Bright white color and sticky starch content that creates foamy fermentation.',
    culinaryUse: 'Crucial for Phalar (Idli) and Diido (Dosa) fermentation and golden tempering.'
  },
  'whole urad': {
    name: 'Whole White / Black Urad Dal',
    tamilName: 'முழு உளுந்து',
    visualCue: 'Spherical, round bead-like gram (either jet black skin or polished white whole).',
    visualDifferenceNote: 'Completely round, twice the volume of split urad.',
    culinaryUse: 'Traditional Sourashtra Ulundhu Kali and special ceremonial batter.'
  },
  'chickpeas': {
    name: 'Chickpeas / White Chana / Kala Chana',
    tamilName: 'கொண்டைக்கடலை',
    visualCue: 'Large, round wrinkled peas with a distinctive pointed beak.',
    visualDifferenceNote: 'Much larger than any split dal; beige (Kabuli) or dark brown (Kala Chana).',
    culinaryUse: 'Kachchana Ambat, Sundal, and rich festive curries.'
  },
  'mustard': {
    name: 'Mustard Seeds (Rai / Kadugu)',
    tamilName: 'கடுகு',
    visualCue: 'Tiny, spherical, glossy dark brown-to-black micro-seeds.',
    visualDifferenceNote: 'vs. Black Pepper: Mustard seeds are microscopic (1-2mm) compared to large black peppercorns (5-6mm).',
    culinaryUse: 'Spluttered in hot oil at the start of nearly every Sourashtra dish.'
  },
  'cumin': {
    name: 'Cumin Seeds (Jeera)',
    tamilName: 'சீரகம்',
    visualCue: 'Slender, elongated boat-shaped brownish-grey seeds with straight parallel ridges.',
    visualDifferenceNote: 'vs. Fennel: Cumin is darker brown, thinner, and smaller with an earthy aroma (fennel is pale green and sweet).',
    culinaryUse: 'Vital for digestive Pilchars (Rasams), Pilchar Bhurko, and tadka.'
  },
  'fennel': {
    name: 'Fennel Seeds (Saunf / Somph)',
    tamilName: 'சோம்பு',
    visualCue: 'Plumper, curved, pale-greenish seeds with a sweet aniseed/licorice aroma.',
    visualDifferenceNote: 'vs. Cumin: Greener, thicker, and distinctly sweet smelling.',
    culinaryUse: 'Key spice for non-veg Sourashtra curries (Chaino Kolkar) and vegetable kurmas.'
  },
  'fenugreek': {
    name: 'Fenugreek Seeds (Methi / Vendhayam)',
    tamilName: 'வெந்தயம்',
    visualCue: 'Hard, angular, geometric golden-amber pebble-like seeds with deep diagonal groove.',
    visualDifferenceNote: 'Hard like little golden stones with an unmistakable bitter maple aroma.',
    culinaryUse: 'Imparts signature authentic aroma to Ounty Bhurko, Vathal Kuzhambu, and fish curry.'
  },
  'black pepper': {
    name: 'Black Peppercorns (Milagu)',
    tamilName: 'கருமிளகு',
    visualCue: 'Rough, wrinkled spherical black dried berries, around 5-6mm wide.',
    visualDifferenceNote: 'vs. Mustard: 4x larger, wrinkled textured skin, and intensely sharp pungent heat.',
    culinaryUse: 'The fiery soul of Pilchar (Rasam) and Vennai Pongal.'
  },
  'cardamom': {
    name: 'Cardamom Pods (Yelakkai / Elachi)',
    tamilName: 'ஏலக்காய்',
    visualCue: 'Pale green, papery spindle-shaped 3-sided pods filled with sticky aromatic black seeds.',
    visualDifferenceNote: 'Whole green husk that cracks open to reveal intensely fragrant black seeds.',
    culinaryUse: 'Perfumes Sourashtra sweet dishes like Sakkarai Pongal, Halwa, and Kheer.'
  },
  'cashew': {
    name: 'Cashews (Mundhiri / Kaju)',
    tamilName: 'முந்திரி',
    visualCue: 'Crescent-shaped, smooth kidney-like nuts of creamy ivory-white color.',
    visualDifferenceNote: 'Smooth curved bean shape with rich buttery texture when roasted in pure ghee.',
    culinaryUse: 'Fried in ghee for Biryani, Pongal, and festive payasams.'
  },
  'raisin': {
    name: 'Golden Raisins (Kismis / Drakshai)',
    tamilName: 'உலர் திராட்சை',
    visualCue: 'Wrinkled, plump golden-amber or brown dried grapes.',
    visualDifferenceNote: 'Soft and chewy; puffs into round golden spheres when fried in hot ghee.',
    culinaryUse: 'Paired alongside roasted cashews in sweets and festive rices.'
  },
  'poppy seeds': {
    name: 'Poppy Seeds (Kas Kas / Khus Khus)',
    tamilName: 'கசகசா',
    visualCue: 'Microscopic, tiny kidney-shaped ivory-white seeds (smaller than grains of sand).',
    visualDifferenceNote: 'Tiny pale seeds that ground into a thick, luxurious white paste.',
    culinaryUse: 'Adds velvet richness and thickness to Sourashtra Kurmas and gravies.'
  },
  'asafoetida': {
    name: 'Asafoetida (Hing / Perungayam)',
    tamilName: 'பெருங்காயம்',
    visualCue: 'Fine golden-tan powder or hard resin brick with a sharp sulfurous pungency.',
    visualDifferenceNote: 'Transforms when cooked in oil into a mellow, savory garlic-onion aroma.',
    culinaryUse: 'A digestive staple added to every dal, sambar, and savory tiffin.'
  },
  'turmeric': {
    name: 'Turmeric Powder (Manjal)',
    tamilName: 'மஞ்சள் தூள்',
    visualCue: 'Vibrant, intense golden-yellow earthy root powder.',
    visualDifferenceNote: 'Distinctive brilliant yellow color that stains and acts as a natural antiseptic.',
    culinaryUse: 'The foundation of South Indian cooking for color, health, and flavor.'
  },
  'tamarind': {
    name: 'Tamarind (Puli)',
    tamilName: 'புளி',
    visualCue: 'Dark brown, sticky fibrous fruit pulp containing hard black seeds.',
    visualDifferenceNote: 'Sticky and pliable; soaked in warm water to extract sour tang.',
    culinaryUse: 'The base souring agent for Ountys, Kolkars, and Pilchars.'
  },
  'jaggery': {
    name: 'Jaggery / Palm Jaggery (Gullu / Karupatti)',
    tamilName: 'வெல்லம் / கருப்பட்டி',
    visualCue: 'Golden-brown to deep black solid unrefined cane or palm sugar blocks.',
    visualDifferenceNote: 'vs. White Sugar: Rich caramel aroma with minerals, earthiness, and no bleaching.',
    culinaryUse: 'Balances fiery tamarind gravies and sweetens traditional festival sweets.'
  },
  'sesame oil': {
    name: 'Gingelly / Sesame Oil (Nallennai)',
    tamilName: 'நல்லெண்ணெய்',
    visualCue: 'Deep amber, aromatic cold-pressed oil extracted from sesame seeds with jaggery.',
    visualDifferenceNote: 'Dark golden hue with distinct nutty aroma; does not smoke easily.',
    culinaryUse: 'Traditional cooking medium for Sourashtra Garlic Kolkars and spicy gravies.'
  },
  'ghee': {
    name: 'Pure Desi Cow Ghee (Ney / Thup)',
    tamilName: 'நெய்',
    visualCue: 'Golden, clarified melted butterfat with a granular texture when solid.',
    visualDifferenceNote: 'Nutty, buttery aroma that elevates rice dishes, vadai, and sweets.',
    culinaryUse: 'Drizzled hot over Phalar, Pongal, and used to fry cashews.'
  },
  'yellow capsicum': {
    name: 'Yellow Bell Pepper (Yellow Capsicum)',
    tamilName: 'மஞ்சள் குடைமிளகாய்',
    visualCue: 'Bright sunny-yellow glossy diced cubes with thick, succulent sweet walls.',
    visualDifferenceNote: 'vs. Sweet Corn: Chunky thick-walled cubic vegetable cuts, distinctly larger and crisper than corn kernels.',
    culinaryUse: 'Adds vivid golden brightness, sweetness, and crisp texture to vegetable rice and poriyals.'
  },
  'capsicum': {
    name: 'Green Bell Pepper (Capsicum / Shimla Mirch)',
    tamilName: 'பச்சை குடைமிளகாய்',
    visualCue: 'Vibrant jade-green diced squares with glossy skin and tender spongy white inner flesh.',
    visualDifferenceNote: 'vs. Green Chilies: Mild, sweet vegetable pepper with zero heat (chilies are slender, thin, and fiery hot).',
    culinaryUse: 'Aromatic crunch for rice baths, kurmas, and vegetable sautes.'
  },
  'red cabbage': {
    name: 'Red / Purple Cabbage',
    tamilName: 'சிவப்பு முட்டைக்கோஸ்',
    visualCue: 'Finely shredded violet-purple ribbon leaves with crisp white ribs.',
    visualDifferenceNote: 'vs. Red Onions: Waxy crunchy leaf layers that don’t weep moisture or sting eyes; retains purple hue.',
    culinaryUse: 'Fresh crunchy poriyals and vibrant culinary salads.'
  },
  'cabbage': {
    name: 'Green Cabbage (Muttaikose)',
    tamilName: 'முட்டைக்கோஸ்',
    visualCue: 'Pale spring-green and ivory shredded crunchy leaves.',
    visualDifferenceNote: 'Tender layered leaves with sweet earthy cabbage aroma when cooked.',
    culinaryUse: 'Standard for classic Sourashtra vegetable poriyal and kootu.'
  },
  'radish': {
    name: 'White Radish / Mooli (Mullangi)',
    tamilName: 'முள்ளங்கி',
    visualCue: 'Crisp, dense, snow-white solid diced cubes.',
    visualDifferenceNote: 'vs. Diced Onions: Solid dense flesh with no layers or translucent membranes; pungent peppery raw aroma.',
    culinaryUse: 'Infuses deep earthy aroma into iconic Mullangi Sambar and Ounty.'
  },
  'carrot': {
    name: 'Fresh Carrots',
    tamilName: 'கேரட்',
    visualCue: 'Vivid deep orange, dense, firm cubic dice with crisp snap.',
    visualDifferenceNote: 'vs. Pumpkin: Denser, firmer texture with clean sharp geometric edges that hold shape in boiling stew.',
    culinaryUse: 'Core vegetable in sambar, aviyal, poriyal, and sweet halwa.'
  },
  'onion': {
    name: 'Red Onions / Shallots (Kando / Vengayam)',
    tamilName: 'வெங்காயம் / சின்ன வெங்காயம்',
    visualCue: 'Diced translucent layers with magenta-pink outer skin and juicy crisp bite.',
    visualDifferenceNote: 'vs. Cabbage: Multi-layered bulb that caramelizes into rich golden sweetness when sauteed in oil.',
    culinaryUse: 'Aromatic backbone of virtually all gravies, sambars, and curries.'
  },
  'salt': {
    name: 'Salt / Sea Salt (Lunu / Uppu)',
    tamilName: 'உப்பு',
    visualCue: 'Sparkling fine white granular crystals or coarse rock crystals.',
    visualDifferenceNote: 'Essential mineral seasoning; elevates and binds all other spices together.',
    culinaryUse: 'Foundational seasoning measured precisely for taste and balance.'
  }
};

/**
 * Finds visual guide details for an ingredient query
 */
export function getIngredientVisualInfo(name: string): IngredientVisualInfo {
  const lower = name.toLowerCase();

  for (const [key, info] of Object.entries(INGREDIENT_VISUAL_GUIDE)) {
    if (lower.includes(key)) {
      return info;
    }
  }

  // Fallback info
  return {
    name,
    visualCue: 'Authentic culinary staple prepped for traditional Sourashtra recipes.',
    culinaryUse: 'Prepped fresh to balance authentic aroma and taste.'
  };
}
