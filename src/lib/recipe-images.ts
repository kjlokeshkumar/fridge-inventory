/**
 * Authentic Sourashtra Culinary Food Photography.
 *
 * 100% Local, Verified Culinary Imagery.
 * Strictly ZERO external unvetted scrapers and ZERO generic stock photos.
 * All recipe imagery is stored locally in /images/recipes/{id}.jpg
 * directly representing authentic Sourashtra & Madurai culinary preparation.
 */

// Registry of verified authentic recipe images stored in /public/images/recipes/
const RECIPE_IMAGE_MAP: Record<string, string> = {
  // 1. Ounty & Kolkar (Tangy Gravies)
  'thakkali-ounty': '/images/recipes/thakkali-ounty.jpg',
  'losan-kolkar': '/images/recipes/losan-kolkar.jpg',
  'koduk-ounty': '/images/recipes/koduk-ounty.jpg',
  'dheim-ounty': '/images/recipes/dheim-ounty.jpg',
  'mithi-kolkar': '/images/recipes/mithi-kolkar.jpg',
  'bela-ounty': '/images/recipes/bela-ounty.jpg',

  // 2. Budith, Losto & Chutneys
  'vangi-budith': '/images/recipes/vangi-budith.jpg',
  'pudina-kothmir-losto': '/images/recipes/pudina-kothmir-losto.jpg',
  'polte-bhajji': '/images/recipes/polte-bhajji.jpg',
  'nellika-rubbin': '/images/recipes/nellika-rubbin.jpg',
  'alla-chutni': '/images/recipes/alla-chutni.jpg',
  'kandha-chutney': '/images/recipes/kandha-chutney.jpg',

  // 3. Ambat & Pitla (Rich Stews & Curries)
  'beans-batata-ambat': '/images/recipes/beans-batata-ambat.jpg',
  'kachchana-ambat': '/images/recipes/kachchana-ambat.jpg',
  'pavakkai-vangi-pitla': '/images/recipes/pavakkai-vangi-pitla.jpg',
  'kajali-ambat': '/images/recipes/kajali-ambat.jpg',
  'meal-maker-ambat': '/images/recipes/meal-maker-ambat.jpg',
  'cauliflower-kulambu': '/images/recipes/cauliflower-kulambu.jpg',

  // 4. Pilchar & Charu (Rasam & Broths)
  'joman-pilchar': '/images/recipes/joman-pilchar.jpg',
  'bhajji-keerai-charu': '/images/recipes/bhajji-keerai-charu.jpg',

  // 5. Bhaath & Pongal (Rice Specialties)
  'ambat-bhaath': '/images/recipes/ambat-bhaath.jpg',
  'mudha-pongal': '/images/recipes/mudha-pongal.jpg',
  'serki-bhaath-gullu-pongal': '/images/recipes/serki-bhaath-gullu-pongal.jpg',
  'limbu-thoop-mhuri-pongal': '/images/recipes/limbu-thoop-mhuri-pongal.jpg',
  'thakkali-pongal': '/images/recipes/thakkali-pongal.jpg',

  // 6. Sambar (Lentil Stews)
  'sengu-vangi-batata-sambar': '/images/recipes/sengu-vangi-batata-sambar.jpg',

  // 7. Bhairi & Appam (Fritters & Tiffin)
  'pangarapaan-nalar-bhairi': '/images/recipes/pangarapaan-nalar-bhairi.jpg',
  'loni-karupatti-appam': '/images/recipes/loni-karupatti-appam.jpg',
  'kenni-paes': '/images/recipes/kenni-paes.jpg',
  'thengai-pooranam-dhowlo': '/images/recipes/thengai-pooranam-dhowlo.jpg',

  // 8. Non-Veg Ounty, Chaino & Kodhi
  'polte-chaino': '/images/recipes/polte-chaino.jpg',
  'chaino-kolkar': '/images/recipes/chaino-kolkar.jpg',
  'sugi-pilchar-bhurko-chicken-varuval': '/images/recipes/sugi-pilchar-bhurko-chicken-varuval.jpg',
  'jaleela-koli-ounty': '/images/recipes/jaleela-koli-ounty.jpg',
  'meen-karuvadu-kodhi': '/images/recipes/meen-karuvadu-kodhi.jpg',
  'anda-ounty': '/images/recipes/anda-ounty.jpg'
};

export function getRecipeImageUrl(recipe?: {
  title?: string;
  name?: string;
  category?: string;
  id?: string;
}): string {
  if (!recipe) {
    return '/images/recipes/ambat-bhaath.jpg';
  }

  // 1. Direct match by recipe ID
  if (recipe.id && RECIPE_IMAGE_MAP[recipe.id]) {
    return RECIPE_IMAGE_MAP[recipe.id];
  }

  const raw = `${recipe.title || ''} ${recipe.name || ''} ${recipe.id || ''} ${recipe.category || ''}`.toLowerCase();

  // 2. Specific Non-Veg Matches
  if (raw.includes('anda') || raw.includes('egg') || raw.includes('muttai')) return RECIPE_IMAGE_MAP['anda-ounty'];
  if (raw.includes('chaino') || raw.includes('mutton') || raw.includes('kari') || raw.includes('sukka')) {
    if (raw.includes('kolkar') || raw.includes('curry') || raw.includes('gravy')) {
      return RECIPE_IMAGE_MAP['chaino-kolkar'];
    }
    return RECIPE_IMAGE_MAP['polte-chaino'];
  }
  if (raw.includes('koli') || raw.includes('chicken')) {
    if (raw.includes('varuval') || raw.includes('roast') || raw.includes('fry')) {
      return RECIPE_IMAGE_MAP['sugi-pilchar-bhurko-chicken-varuval'];
    }
    return RECIPE_IMAGE_MAP['jaleela-koli-ounty'];
  }
  if (raw.includes('meen') || raw.includes('fish') || raw.includes('karuvadu')) {
    return RECIPE_IMAGE_MAP['meen-karuvadu-kodhi'];
  }

  // 3. Fritters & Tiffin
  if (raw.includes('bhairi') || raw.includes('vada') || raw.includes('pangarapaan') || raw.includes('nalar')) {
    return RECIPE_IMAGE_MAP['pangarapaan-nalar-bhairi'];
  }
  if (raw.includes('appam') || raw.includes('karupatti') || raw.includes('loni')) {
    return RECIPE_IMAGE_MAP['loni-karupatti-appam'];
  }
  if (raw.includes('dhowlo') || raw.includes('kozhukattai') || raw.includes('modak')) {
    return RECIPE_IMAGE_MAP['thengai-pooranam-dhowlo'];
  }
  if (raw.includes('kenni') || raw.includes('kanji') || raw.includes('paes')) {
    return RECIPE_IMAGE_MAP['kenni-paes'];
  }

  // 4. Rice Dishes & Pongal
  if (raw.includes('mudha') || raw.includes('ven pongal')) {
    return RECIPE_IMAGE_MAP['mudha-pongal'];
  }
  if (raw.includes('ambat bhaath') || raw.includes('tamarind rice') || raw.includes('puliyodarai')) {
    return RECIPE_IMAGE_MAP['ambat-bhaath'];
  }
  if (raw.includes('serki') || raw.includes('gullu') || raw.includes('sweet pongal')) {
    return RECIPE_IMAGE_MAP['serki-bhaath-gullu-pongal'];
  }
  if (raw.includes('limbu') || raw.includes('lemon rice') || raw.includes('mhuri') || raw.includes('thoop')) {
    return RECIPE_IMAGE_MAP['limbu-thoop-mhuri-pongal'];
  }
  if (raw.includes('thakkali pongal') || raw.includes('tomato rice')) {
    return RECIPE_IMAGE_MAP['thakkali-pongal'];
  }

  // 5. Chutneys, Losto & Masiyal
  if (raw.includes('vangi') && (raw.includes('budith') || raw.includes('bhudid') || raw.includes('chutney'))) {
    return RECIPE_IMAGE_MAP['vangi-budith'];
  }
  if (raw.includes('pudina') || raw.includes('kothmir') || raw.includes('losto')) {
    return RECIPE_IMAGE_MAP['pudina-kothmir-losto'];
  }
  if (raw.includes('polte bhajji') || raw.includes('keerai masiyal') || raw.includes('greens masiyal')) {
    return RECIPE_IMAGE_MAP['polte-bhajji'];
  }
  if (raw.includes('nellika') || raw.includes('rubbin') || raw.includes('lubbin') || raw.includes('gooseberry') || raw.includes('amla')) {
    return RECIPE_IMAGE_MAP['nellika-rubbin'];
  }
  if (raw.includes('alla') || raw.includes('inji') || raw.includes('ginger')) {
    return RECIPE_IMAGE_MAP['alla-chutni'];
  }
  if (raw.includes('kandha') || raw.includes('thanni') || (raw.includes('onion') && raw.includes('chutney'))) {
    return RECIPE_IMAGE_MAP['kandha-chutney'];
  }

  // 6. Rasam & Broths
  if (raw.includes('joman') || raw.includes('rasam') || raw.includes('charu') || raw.includes('pilchar')) {
    if (raw.includes('keerai') || raw.includes('bhajji')) {
      return RECIPE_IMAGE_MAP['bhajji-keerai-charu'];
    }
    return RECIPE_IMAGE_MAP['joman-pilchar'];
  }

  // 7. Sambar
  if (raw.includes('sambar') || raw.includes('sengu')) {
    return RECIPE_IMAGE_MAP['sengu-vangi-batata-sambar'];
  }

  // 8. Ounty & Kolkar Gravies
  if (raw.includes('thakkali') && (raw.includes('ounty') || raw.includes('kulambu') || raw.includes('gravy'))) {
    return RECIPE_IMAGE_MAP['thakkali-ounty'];
  }
  if (raw.includes('losan') || raw.includes('garlic') || raw.includes('kolkar')) {
    return RECIPE_IMAGE_MAP['losan-kolkar'];
  }
  if (raw.includes('koduk')) {
    return RECIPE_IMAGE_MAP['koduk-ounty'];
  }
  if (raw.includes('dheim') || raw.includes('mor kulambu') || raw.includes('curd')) {
    return RECIPE_IMAGE_MAP['dheim-ounty'];
  }
  if (raw.includes('mithi') || raw.includes('vendhaya')) {
    return RECIPE_IMAGE_MAP['mithi-kolkar'];
  }
  if (raw.includes('bela ounty') || raw.includes('paruppu kulambu')) {
    return RECIPE_IMAGE_MAP['bela-ounty'];
  }

  // 9. Ambat & Pitla
  if (raw.includes('beans') || raw.includes('batata')) {
    return RECIPE_IMAGE_MAP['beans-batata-ambat'];
  }
  if (raw.includes('kachchana') || raw.includes('chana')) {
    return RECIPE_IMAGE_MAP['kachchana-ambat'];
  }
  if (raw.includes('pavakkai') || raw.includes('pitla')) {
    return RECIPE_IMAGE_MAP['pavakkai-vangi-pitla'];
  }
  if (raw.includes('kajali') || raw.includes('eeral')) {
    return RECIPE_IMAGE_MAP['kajali-ambat'];
  }
  if (raw.includes('meal maker') || raw.includes('soya')) {
    return RECIPE_IMAGE_MAP['meal-maker-ambat'];
  }
  if (raw.includes('cauliflower') || raw.includes('gobi')) {
    return RECIPE_IMAGE_MAP['cauliflower-kulambu'];
  }

  // Fallback to signature Sourashtra feast dish
  return RECIPE_IMAGE_MAP['ambat-bhaath'];
}
