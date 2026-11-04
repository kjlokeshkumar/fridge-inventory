/**
 * Authentic, non-copyrighted culinary food photography lookup.
 *
 * NOTE: We strictly DO NOT hotlink unvetted external video thumbnails (e.g. from YouTube)
 * to prevent non-culinary imagery, clickbait text, or copyright issues from appearing
 * on recipe cards. All recipe photography comes from curated, high-definition,
 * royalty-free culinary food assets matching the exact dish type and presentation.
 */

// Curated high-resolution culinary food photography (Unsplash Royalty-Free)
const CULINARY_IMAGE_REGISTRY: Record<string, string> = {
  // 1. Phalar & Diido (Steamed Idli & Crispy Dosa)
  idli: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=80',
  phalar: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=80',
  dosa: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&auto=format&fit=crop&q=80',
  diido: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&auto=format&fit=crop&q=80',
  uttapam: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&auto=format&fit=crop&q=80',

  // 2. Pongal & Rice Specialties
  mudha_pongal: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=80',
  ven_pongal: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=80',
  ambat_bhaath: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=80',
  tamarind_rice: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=80',
  tomato_rice: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&auto=format&fit=crop&q=80',
  thakkali_pongal: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&auto=format&fit=crop&q=80',
  lemon_rice: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=80',
  curd_rice: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=80',
  serki_bhaath: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=80',

  // 3. Ounty & Kolkar (Tangy & Tamarind Gravies)
  thakkali_ounty: '/images/recipes/thakkali_ounty_curry.jpg',
  losan_kolkar: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&auto=format&fit=crop&q=80',
  garlic_curry: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&auto=format&fit=crop&q=80',
  koduk_ounty: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop&q=80',
  mithi_kolkar: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop&q=80',
  dheim_ounty: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=80',
  more_kulambu: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=80',

  // 4. Budith, Losto & Chutneys
  vangi_budith: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=80',
  brinjal_chutney: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=80',
  pudina_losto: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&auto=format&fit=crop&q=80',
  mint_chutney: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&auto=format&fit=crop&q=80',
  alla_chutni: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop&q=80',
  ginger_chutney: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop&q=80',
  coconut_chutney: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=80',
  polte_bhajji: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=80',
  keerai_masiyal: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=80',
  nellika_rubbin: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop&q=80',

  // 5. Ambat & Pitla (Rich Stews & Curries)
  beans_ambat: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&auto=format&fit=crop&q=80',
  kachchana_ambat: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=80',
  chana_curry: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=80',
  pitla: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop&q=80',
  bela_ounty: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop&q=80',
  kajali_ambat: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&auto=format&fit=crop&q=80',
  meal_maker: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&auto=format&fit=crop&q=80',
  cauliflower: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=80',

  // 6. Pilchar & Charu (Rasam & Broths)
  rasam: '/images/recipes/joman_pilchar_rasam.jpg',
  pilchar: '/images/recipes/joman_pilchar_rasam.jpg',
  charu: '/images/recipes/joman_pilchar_rasam.jpg',
  joman_pilchar: '/images/recipes/joman_pilchar_rasam.jpg',
  limbu_pilchar: '/images/recipes/joman_pilchar_rasam.jpg',

  // 7. Sambar
  sambar: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop&q=80',

  // 8. Bhairi, Appam & Tiffin
  bhairi: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=80',
  vada: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=80',
  appam: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=80',
  karupatti_appam: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=80',
  kenni_paes: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=80',
  kanji: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=80',
  chappathi: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop&q=80',
  parotta: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop&q=80',
  kozhukattai: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=80',
  dhowlo: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=80',

  // 9. Non-Veg Curries & Roasts
  chicken: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&auto=format&fit=crop&q=80',
  koli: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&auto=format&fit=crop&q=80',
  mutton: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80',
  chaino: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80',
  sukka: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80',
  fish: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&auto=format&fit=crop&q=80',
  meen: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&auto=format&fit=crop&q=80',
  egg: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=600&auto=format&fit=crop&q=80',
  anda: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=600&auto=format&fit=crop&q=80',

  // 10. General South Indian Thali Fallback
  thali_default: 'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?w=600&auto=format&fit=crop&q=80'
};

export function getRecipeImageUrl(recipe?: {
  title?: string;
  name?: string;
  category?: string;
  id?: string;
}): string {
  if (!recipe) {
    return CULINARY_IMAGE_REGISTRY.thali_default;
  }

  const raw = `${recipe.title || ''} ${recipe.name || ''} ${recipe.id || ''} ${recipe.category || ''}`.toLowerCase();

  // 1. Specific Non-Veg Matches
  if (raw.includes('anda') || raw.includes('egg')) return CULINARY_IMAGE_REGISTRY.anda;
  if (raw.includes('chaino') || raw.includes('mutton')) return CULINARY_IMAGE_REGISTRY.chaino;
  if (raw.includes('koli') || raw.includes('chicken')) return CULINARY_IMAGE_REGISTRY.koli;
  if (raw.includes('meen') || raw.includes('fish') || raw.includes('karuvadu')) return CULINARY_IMAGE_REGISTRY.meen;

  // 2. Tiffin & Breakfast Specifics
  if (raw.includes('phalar') || raw.includes('idli')) return CULINARY_IMAGE_REGISTRY.phalar;
  if (raw.includes('diido') || raw.includes('dosa') || raw.includes('uttapam')) return CULINARY_IMAGE_REGISTRY.diido;
  if (raw.includes('appam') || raw.includes('karupatti')) return CULINARY_IMAGE_REGISTRY.karupatti_appam;
  if (raw.includes('bhairi') || raw.includes('vada')) return CULINARY_IMAGE_REGISTRY.bhairi;
  if (raw.includes('kenni') || raw.includes('kanji') || raw.includes('paes')) return CULINARY_IMAGE_REGISTRY.kenni_paes;
  if (raw.includes('chappathi') || raw.includes('parotta') || raw.includes('phulka')) return CULINARY_IMAGE_REGISTRY.chappathi;
  if (raw.includes('dhowlo') || raw.includes('kozhukattai') || raw.includes('sevi')) return CULINARY_IMAGE_REGISTRY.dhowlo;

  // 3. Pongal & Rice Dishes
  if (raw.includes('mudha') || raw.includes('ven pongal') || raw.includes('thoov') || raw.includes('thoop')) {
    return CULINARY_IMAGE_REGISTRY.mudha_pongal;
  }
  if (raw.includes('ambat bhaath') || raw.includes('dhowra') || raw.includes('puli') || raw.includes('tamarind rice')) {
    return CULINARY_IMAGE_REGISTRY.ambat_bhaath;
  }
  if (raw.includes('thakkali pongal') || raw.includes('tomato rice')) {
    return CULINARY_IMAGE_REGISTRY.thakkali_pongal;
  }
  if (raw.includes('limbu pongal') || raw.includes('lemon rice')) {
    return CULINARY_IMAGE_REGISTRY.lemon_rice;
  }
  if (raw.includes('curd rice') || raw.includes('dhi bhaath')) {
    return CULINARY_IMAGE_REGISTRY.curd_rice;
  }
  if (raw.includes('serki') || raw.includes('bhaath') || raw.includes('pulao') || raw.includes('biryani')) {
    return CULINARY_IMAGE_REGISTRY.serki_bhaath;
  }

  // 4. Chutneys, Losto, Budith & Greens
  if (raw.includes('vangi') || raw.includes('budith') || raw.includes('brinjal')) {
    return CULINARY_IMAGE_REGISTRY.vangi_budith;
  }
  if (raw.includes('pudina') || raw.includes('losto') || raw.includes('kothmir') || raw.includes('mint')) {
    return CULINARY_IMAGE_REGISTRY.pudina_losto;
  }
  if (raw.includes('alla') || raw.includes('ginger')) {
    return CULINARY_IMAGE_REGISTRY.alla_chutni;
  }
  if (raw.includes('polte') || raw.includes('bhajji') || raw.includes('keerai') || raw.includes('greens')) {
    return CULINARY_IMAGE_REGISTRY.polte_bhajji;
  }
  if (raw.includes('nellika') || raw.includes('rubbin') || raw.includes('gooseberry') || raw.includes('amla')) {
    return CULINARY_IMAGE_REGISTRY.nellika_rubbin;
  }
  if (raw.includes('chutney') || raw.includes('chutni') || raw.includes('thuvaiyal')) {
    return CULINARY_IMAGE_REGISTRY.coconut_chutney;
  }

  // 5. Rasam, Pilchar & Charu
  if (raw.includes('pilchar') || raw.includes('charu') || raw.includes('rasam')) {
    return CULINARY_IMAGE_REGISTRY.joman_pilchar;
  }

  // 6. Sambar
  if (raw.includes('sambar')) {
    return CULINARY_IMAGE_REGISTRY.sambar;
  }

  // 7. Gravies & Curries (Ounty, Kolkar, Ambat, Pitla)
  if (raw.includes('thakkali') || raw.includes('tomato')) {
    return CULINARY_IMAGE_REGISTRY.thakkali_ounty;
  }
  if (raw.includes('losan') || raw.includes('kolkar') || raw.includes('garlic')) {
    return CULINARY_IMAGE_REGISTRY.losan_kolkar;
  }
  if (raw.includes('dheim') || raw.includes('more kulambu') || raw.includes('buttermilk')) {
    return CULINARY_IMAGE_REGISTRY.dheim_ounty;
  }
  if (raw.includes('beans') || raw.includes('batata')) {
    return CULINARY_IMAGE_REGISTRY.beans_ambat;
  }
  if (raw.includes('kachchana') || raw.includes('chana') || raw.includes('chickpea')) {
    return CULINARY_IMAGE_REGISTRY.kachchana_ambat;
  }
  if (raw.includes('pitla') || raw.includes('pavakkai') || raw.includes('bela') || raw.includes('paruppu')) {
    return CULINARY_IMAGE_REGISTRY.pitla;
  }
  if (raw.includes('cauliflower')) {
    return CULINARY_IMAGE_REGISTRY.cauliflower;
  }
  if (raw.includes('ounty') || raw.includes('ambat') || raw.includes('gravy') || raw.includes('curry')) {
    return CULINARY_IMAGE_REGISTRY.thakkali_ounty;
  }

  return CULINARY_IMAGE_REGISTRY.thali_default;
}
