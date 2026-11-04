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

  const raw = `${recipe.title || ''} ${recipe.name || ''} ${recipe.id || ''} ${recipe.category || ''}`.toLowerCase();

  // 2. Non-Veg Specialties
  if (raw.includes('anda') || raw.includes('egg') || raw.includes('muttai')) return RECIPE_IMAGE_MAP['anda-ounty'];
  if (raw.includes('meen') || raw.includes('fish') || raw.includes('karuvadu')) return RECIPE_IMAGE_MAP['meen-karuvadu-kodhi'];
  if (raw.includes('koli') || raw.includes('chicken')) {
    if (raw.includes('varuval') || raw.includes('roast') || raw.includes('fry') || raw.includes('sukka')) {
      return RECIPE_IMAGE_MAP['sugi-pilchar-bhurko-chicken-varuval'];
    }
    return RECIPE_IMAGE_MAP['jaleela-koli-ounty'];
  }
  if (raw.includes('chaino') || raw.includes('mutton') || raw.includes('kari') || raw.includes('sukka') || raw.includes('boti')) {
    if (raw.includes('kolkar') || raw.includes('curry') || raw.includes('gravy')) {
      return RECIPE_IMAGE_MAP['chaino-kolkar'];
    }
    return RECIPE_IMAGE_MAP['polte-chaino'];
  }

  // 3. Fritters, Tiffin & Traditional Sweets
  if (raw.includes('bhairi') || raw.includes('vada') || raw.includes('pakoda') || raw.includes('pangarapaan') || raw.includes('nalar')) {
    return RECIPE_IMAGE_MAP['pangarapaan-nalar-bhairi'];
  }
  if (raw.includes('appam') || raw.includes('karupatti') || raw.includes('loni')) {
    return RECIPE_IMAGE_MAP['loni-karupatti-appam'];
  }
  if (raw.includes('dhowlo') || raw.includes('kozhukattai') || raw.includes('modak') || raw.includes('pooranam') || raw.includes('sweet') || raw.includes('laddu') || raw.includes('halwa')) {
    return RECIPE_IMAGE_MAP['thengai-pooranam-dhowlo'];
  }
  if (raw.includes('kenni') || raw.includes('kanji') || raw.includes('paes')) {
    return RECIPE_IMAGE_MAP['kenni-paes'];
  }

  // 4. Chutneys, Losto & Greens
  if (raw.includes('alla') || raw.includes('inji') || raw.includes('ginger')) {
    return RECIPE_IMAGE_MAP['alla-chutni'];
  }
  if (raw.includes('kandha') || (raw.includes('onion') && raw.includes('chutney')) || raw.includes('thanni')) {
    return RECIPE_IMAGE_MAP['kandha-chutney'];
  }
  if (raw.includes('nellika') || raw.includes('rubbin') || raw.includes('lubbin') || raw.includes('gooseberry') || raw.includes('amla') || raw.includes('pickle')) {
    return RECIPE_IMAGE_MAP['nellika-rubbin'];
  }
  if (raw.includes('vangi') && (raw.includes('budith') || raw.includes('bhudid') || raw.includes('chutney') || raw.includes('thokku'))) {
    return RECIPE_IMAGE_MAP['vangi-budith'];
  }
  if (raw.includes('pudina') || raw.includes('kothmir') || raw.includes('coriander') || raw.includes('mint')) {
    return RECIPE_IMAGE_MAP['pudina-kothmir-losto'];
  }
  if (raw.includes('polte') || raw.includes('keerai') || raw.includes('greens') || raw.includes('masiyal') || raw.includes('bhajji')) {
    if (raw.includes('charu') || raw.includes('rasam') || raw.includes('pilchar')) {
      return RECIPE_IMAGE_MAP['bhajji-keerai-charu'];
    }
    return RECIPE_IMAGE_MAP['polte-bhajji'];
  }

  // 5. Rasam & Broths
  if (raw.includes('pilchar') || raw.includes('charu') || raw.includes('rasam')) {
    if (raw.includes('keerai') || raw.includes('bhajji')) return RECIPE_IMAGE_MAP['bhajji-keerai-charu'];
    return RECIPE_IMAGE_MAP['joman-pilchar'];
  }

  // 6. Rice Varieties & Pongal
  if (raw.includes('mudha') || raw.includes('ven pongal') || raw.includes('ghee pongal')) {
    return RECIPE_IMAGE_MAP['mudha-pongal'];
  }
  if (raw.includes('serki') || raw.includes('gullu') || raw.includes('sweet pongal') || raw.includes('sakkarai')) {
    return RECIPE_IMAGE_MAP['serki-bhaath-gullu-pongal'];
  }
  if (raw.includes('limbu') || raw.includes('lemon') || raw.includes('mhuri') || raw.includes('thoop')) {
    return RECIPE_IMAGE_MAP['limbu-thoop-mhuri-pongal'];
  }
  if (raw.includes('thakkali pongal') || raw.includes('tomato rice') || raw.includes('thakkali sadam')) {
    return RECIPE_IMAGE_MAP['thakkali-pongal'];
  }
  if (raw.includes('ambat bhaath') || raw.includes('puliyodharai') || raw.includes('puli sadam') || raw.includes('tamarind rice') || raw.includes('temple')) {
    return RECIPE_IMAGE_MAP['ambat-bhaath'];
  }

  // 7. Sambar
  if (raw.includes('sambar') || raw.includes('sengu') || raw.includes('drumstick')) {
    return RECIPE_IMAGE_MAP['sengu-vangi-batata-sambar'];
  }

  // 8. Ambat & Pitla (Rich Curries)
  if (raw.includes('kachchana') || raw.includes('chana') || raw.includes('kondakadalai') || raw.includes('sundal')) {
    return RECIPE_IMAGE_MAP['kachchana-ambat'];
  }
  if (raw.includes('kajali') || raw.includes('eeral')) {
    return RECIPE_IMAGE_MAP['kajali-ambat'];
  }
  if (raw.includes('pavakkai') || raw.includes('bitter gourd') || raw.includes('pitla')) {
    return RECIPE_IMAGE_MAP['pavakkai-vangi-pitla'];
  }
  if (raw.includes('meal maker') || raw.includes('soya')) {
    return RECIPE_IMAGE_MAP['meal-maker-ambat'];
  }
  if (raw.includes('cauliflower') || raw.includes('gobi')) {
    return RECIPE_IMAGE_MAP['cauliflower-kulambu'];
  }
  if (raw.includes('beans') || raw.includes('batata') || raw.includes('potato') || raw.includes('urulaikilangu')) {
    return RECIPE_IMAGE_MAP['beans-batata-ambat'];
  }

  // 9. Ounty & Kolkar Gravies
  if (raw.includes('dheim') || raw.includes('mor kulambu') || raw.includes('more kulambu') || raw.includes('buttermilk') || raw.includes('curd')) {
    return RECIPE_IMAGE_MAP['dheim-ounty'];
  }
  if (raw.includes('bela ounty') || raw.includes('paruppu') || raw.includes('dal curry')) {
    return RECIPE_IMAGE_MAP['bela-ounty'];
  }
  if (raw.includes('mithi') || raw.includes('vendhaya') || raw.includes('fenugreek')) {
    return RECIPE_IMAGE_MAP['mithi-kolkar'];
  }
  if (raw.includes('koduk')) {
    return RECIPE_IMAGE_MAP['koduk-ounty'];
  }
  if (raw.includes('thakkali') || raw.includes('tomato')) {
    return RECIPE_IMAGE_MAP['thakkali-ounty'];
  }
  if (raw.includes('losan') || raw.includes('garlic') || raw.includes('poondu')) {
    return RECIPE_IMAGE_MAP['losan-kolkar'];
  }

  // 10. Broad Category Matchers
  if (raw.includes('chutney') || raw.includes('chutni') || raw.includes('thovaiyal')) return RECIPE_IMAGE_MAP['pudina-kothmir-losto'];
  if (raw.includes('bhaath') || raw.includes('rice') || raw.includes('pongal')) return RECIPE_IMAGE_MAP['ambat-bhaath'];
  if (raw.includes('ounty') || raw.includes('kolkar') || raw.includes('kulambu') || raw.includes('kuzhambu')) return RECIPE_IMAGE_MAP['thakkali-ounty'];
  if (raw.includes('ambat') || raw.includes('pitla')) return RECIPE_IMAGE_MAP['kachchana-ambat'];

  // Fallback to signature Sourashtra feast dish
  return RECIPE_IMAGE_MAP['ambat-bhaath'];
}
