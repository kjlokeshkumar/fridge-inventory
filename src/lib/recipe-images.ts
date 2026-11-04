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
    return RECIPE_IMAGE_MAP['ambat-bhaath'];
  }

  // 1. Direct match by recipe ID
  if (recipe.id && RECIPE_IMAGE_MAP[recipe.id]) {
    return RECIPE_IMAGE_MAP[recipe.id];
  }

  // Separate dish-specific text from broad category string
  const dishText = `${recipe.title || ''} ${recipe.name || ''} ${recipe.id || ''}`.toLowerCase();
  const raw = `${dishText} ${recipe.category || ''}`.toLowerCase();

  // 2. Non-Veg Specialties (Checked against dishText first)
  if (dishText.includes('anda') || dishText.includes('egg') || dishText.includes('muttai')) return RECIPE_IMAGE_MAP['anda-ounty'];
  if (dishText.includes('meen') || dishText.includes('fish') || dishText.includes('karuvadu')) return RECIPE_IMAGE_MAP['meen-karuvadu-kodhi'];
  if (dishText.includes('koli') || dishText.includes('chicken')) {
    if (dishText.includes('varuval') || dishText.includes('roast') || dishText.includes('fry') || dishText.includes('sukka')) {
      return RECIPE_IMAGE_MAP['sugi-pilchar-bhurko-chicken-varuval'];
    }
    return RECIPE_IMAGE_MAP['jaleela-koli-ounty'];
  }
  if (dishText.includes('chaino') || dishText.includes('mutton') || dishText.includes('kari') || dishText.includes('sukka') || dishText.includes('boti')) {
    if (dishText.includes('kolkar') || dishText.includes('curry') || dishText.includes('gravy')) {
      return RECIPE_IMAGE_MAP['chaino-kolkar'];
    }
    return RECIPE_IMAGE_MAP['polte-chaino'];
  }

  // 3. Brinjal / Eggplant Chutneys, Thokku & Budith (High Priority - Prevents greens/polte mismatch)
  const isBrinjalDish = dishText.includes('vangi') || dishText.includes('brinjal') || dishText.includes('eggplant') || dishText.includes('kathirikai') || dishText.includes('baingan');
  if (isBrinjalDish) {
    if (dishText.includes('budith') || dishText.includes('chutney') || dishText.includes('chutni') || dishText.includes('thokku') || dishText.includes('marriage') || dishText.includes('mash') || dishText.includes('smash')) {
      return RECIPE_IMAGE_MAP['vangi-budith'];
    }
    if (dishText.includes('pitla') || dishText.includes('pavakkai')) {
      return RECIPE_IMAGE_MAP['pavakkai-vangi-pitla'];
    }
    if (dishText.includes('sambar') || dishText.includes('sengu')) {
      return RECIPE_IMAGE_MAP['sengu-vangi-batata-sambar'];
    }
    return RECIPE_IMAGE_MAP['vangi-budith'];
  }

  // 4. Fritters, Tiffin & Traditional Sweets
  if (dishText.includes('bhairi') || dishText.includes('vada') || dishText.includes('pakoda') || dishText.includes('pangarapaan') || dishText.includes('nalar')) {
    return RECIPE_IMAGE_MAP['pangarapaan-nalar-bhairi'];
  }
  if (dishText.includes('appam') || dishText.includes('karupatti') || dishText.includes('loni')) {
    return RECIPE_IMAGE_MAP['loni-karupatti-appam'];
  }
  if (dishText.includes('dhowlo') || dishText.includes('kozhukattai') || dishText.includes('modak') || dishText.includes('pooranam') || dishText.includes('sweet') || dishText.includes('laddu') || dishText.includes('halwa')) {
    return RECIPE_IMAGE_MAP['thengai-pooranam-dhowlo'];
  }
  if (dishText.includes('kenni') || dishText.includes('kanji') || dishText.includes('paes')) {
    return RECIPE_IMAGE_MAP['kenni-paes'];
  }

  // 5. Chutneys, Losto & Condiments (Must check dishText, NOT category keywords)
  if (dishText.includes('alla') || dishText.includes('inji') || dishText.includes('ginger')) {
    return RECIPE_IMAGE_MAP['alla-chutni'];
  }
  if (dishText.includes('kandha') || (dishText.includes('onion') && dishText.includes('chutney')) || dishText.includes('thanni')) {
    return RECIPE_IMAGE_MAP['kandha-chutney'];
  }
  if (dishText.includes('nellika') || dishText.includes('rubbin') || dishText.includes('lubbin') || dishText.includes('gooseberry') || dishText.includes('amla') || dishText.includes('pickle')) {
    return RECIPE_IMAGE_MAP['nellika-rubbin'];
  }
  if (dishText.includes('pudina') || dishText.includes('kothmir') || dishText.includes('coriander') || dishText.includes('mint')) {
    return RECIPE_IMAGE_MAP['pudina-kothmir-losto'];
  }
  // Greens / Polte / Masiyal ONLY if dish title itself specifies greens
  if (dishText.includes('polte') || dishText.includes('keerai') || dishText.includes('spinach') || dishText.includes('greens') || (dishText.includes('bhajji') && !dishText.includes('charu'))) {
    if (dishText.includes('charu') || dishText.includes('rasam') || dishText.includes('pilchar')) {
      return RECIPE_IMAGE_MAP['bhajji-keerai-charu'];
    }
    return RECIPE_IMAGE_MAP['polte-bhajji'];
  }

  // 6. Rasam & Broths
  if (dishText.includes('pilchar') || dishText.includes('charu') || dishText.includes('rasam')) {
    if (dishText.includes('keerai') || dishText.includes('bhajji')) return RECIPE_IMAGE_MAP['bhajji-keerai-charu'];
    return RECIPE_IMAGE_MAP['joman-pilchar'];
  }

  // 7. Rice Varieties & Pongal
  if (dishText.includes('mudha') || dishText.includes('ven pongal') || dishText.includes('ghee pongal')) {
    return RECIPE_IMAGE_MAP['mudha-pongal'];
  }
  if (dishText.includes('serki') || dishText.includes('gullu') || dishText.includes('sweet pongal') || dishText.includes('sakkarai')) {
    return RECIPE_IMAGE_MAP['serki-bhaath-gullu-pongal'];
  }
  if (dishText.includes('limbu') || dishText.includes('lemon') || dishText.includes('mhuri') || dishText.includes('thoop')) {
    return RECIPE_IMAGE_MAP['limbu-thoop-mhuri-pongal'];
  }
  if (dishText.includes('thakkali pongal') || dishText.includes('tomato rice') || dishText.includes('thakkali sadam')) {
    return RECIPE_IMAGE_MAP['thakkali-pongal'];
  }
  if (dishText.includes('ambat bhaath') || dishText.includes('puliyodharai') || dishText.includes('puli sadam') || dishText.includes('tamarind rice') || dishText.includes('temple')) {
    return RECIPE_IMAGE_MAP['ambat-bhaath'];
  }

  // 8. Sambar
  if (dishText.includes('sambar') || dishText.includes('sengu') || dishText.includes('drumstick')) {
    return RECIPE_IMAGE_MAP['sengu-vangi-batata-sambar'];
  }

  // 9. Ambat & Pitla (Rich Curries)
  if (dishText.includes('kachchana') || dishText.includes('chana') || dishText.includes('kondakadalai') || dishText.includes('sundal')) {
    return RECIPE_IMAGE_MAP['kachchana-ambat'];
  }
  if (dishText.includes('kajali') || dishText.includes('eeral')) {
    return RECIPE_IMAGE_MAP['kajali-ambat'];
  }
  if (dishText.includes('pavakkai') || dishText.includes('bitter gourd') || dishText.includes('pitla')) {
    return RECIPE_IMAGE_MAP['pavakkai-vangi-pitla'];
  }
  if (dishText.includes('meal maker') || dishText.includes('soya')) {
    return RECIPE_IMAGE_MAP['meal-maker-ambat'];
  }
  if (dishText.includes('cauliflower') || dishText.includes('gobi')) {
    return RECIPE_IMAGE_MAP['cauliflower-kulambu'];
  }
  if (dishText.includes('beans') || dishText.includes('batata') || dishText.includes('potato') || dishText.includes('urulaikilangu')) {
    return RECIPE_IMAGE_MAP['beans-batata-ambat'];
  }

  // 10. Ounty & Kolkar Gravies
  if (dishText.includes('dheim') || dishText.includes('mor kulambu') || dishText.includes('more kulambu') || dishText.includes('buttermilk') || dishText.includes('curd')) {
    return RECIPE_IMAGE_MAP['dheim-ounty'];
  }
  if (dishText.includes('bela ounty') || dishText.includes('paruppu') || dishText.includes('dal curry')) {
    return RECIPE_IMAGE_MAP['bela-ounty'];
  }
  if (dishText.includes('mithi') || dishText.includes('vendhaya') || dishText.includes('fenugreek')) {
    return RECIPE_IMAGE_MAP['mithi-kolkar'];
  }
  if (dishText.includes('koduk')) {
    return RECIPE_IMAGE_MAP['koduk-ounty'];
  }
  if (dishText.includes('thakkali') || dishText.includes('tomato')) {
    return RECIPE_IMAGE_MAP['thakkali-ounty'];
  }
  if (dishText.includes('losan') || dishText.includes('garlic') || dishText.includes('poondu')) {
    return RECIPE_IMAGE_MAP['losan-kolkar'];
  }

  // 11. Broad Fallbacks from raw (dish + category)
  if (raw.includes('chutney') || raw.includes('chutni') || raw.includes('thovaiyal')) return RECIPE_IMAGE_MAP['pudina-kothmir-losto'];
  if (raw.includes('bhaath') || raw.includes('rice') || raw.includes('pongal')) return RECIPE_IMAGE_MAP['ambat-bhaath'];
  if (raw.includes('ounty') || raw.includes('kolkar') || raw.includes('kulambu') || raw.includes('kuzhambu')) return RECIPE_IMAGE_MAP['thakkali-ounty'];
  if (raw.includes('ambat') || raw.includes('pitla')) return RECIPE_IMAGE_MAP['kachchana-ambat'];

  // Fallback to signature Sourashtra feast dish
  return RECIPE_IMAGE_MAP['ambat-bhaath'];
}
