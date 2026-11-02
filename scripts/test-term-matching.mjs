// We can test the matching logic
function getIngredientImage(name) {
  if (!name) return undefined;
  const lower = name.toLowerCase().trim();

  if (lower.includes('onion') || lower.includes('shallot') || lower.includes('kando') || lower.includes('வெங்காயம்') || lower.includes('சின்ன வெங்காயம்')) return '/images/ingredients/onion.jpg';
  if (lower.includes('capsicum') || lower.includes('bell pepper') || lower.includes('shimla') || lower.includes('குடைமிளகாய்')) return '/images/ingredients/capsicum.jpg';
  if (lower.includes('tomato') || lower.includes('thakkali') || lower.includes('takkali') || lower.includes('தக்காளி')) return '/images/ingredients/tomato.jpg';
  if (lower.includes('potato') || lower.includes('batata') || lower.includes('உருளைக்கிழங்கு') || lower.includes('aloo')) return '/images/ingredients/potato.jpg';
  if (lower.includes('carrot') || lower.includes('கேரட்')) return '/images/ingredients/carrot.jpg';
  if (lower.includes('brinjal') || lower.includes('eggplant') || lower.includes('vangi') || lower.includes('aubergine') || lower.includes('கத்தரிக்காய்')) return '/images/ingredients/brinjal.jpg';
  if (lower.includes('drumstick') || lower.includes('sengu') || lower.includes('முருங்கை') || lower.includes('moringa')) return '/images/ingredients/drumstick.jpg';
  if (lower.includes('bean') || lower.includes('jinnavara') || lower.includes('பீன்ஸ்') || lower.includes('அவரை')) return '/images/ingredients/beans.jpg';
  if (lower.includes('coconut') || lower.includes('nalar') || lower.includes('தேங்காய்')) return '/images/ingredients/coconut.jpg';
  if (lower.includes('garlic') || lower.includes('lasan') || lower.includes('losan') || lower.includes('பூண்டு')) return '/images/ingredients/garlic.jpg';
  if (lower.includes('ginger') || lower.includes('alla') || lower.includes('allam') || lower.includes('இஞ்சி') || lower.includes('adrak')) return '/images/ingredients/ginger.jpg';
  if ((lower.includes('green') && (lower.includes('chilli') || lower.includes('chili') || lower.includes('pepper') || lower.includes('mirsang'))) || lower.includes('பச்சை மிளகாய்')) return '/images/ingredients/green_chilli.jpg';
  if (lower.includes('curry leave') || lower.includes('curry leaf') || lower.includes('kariveppilai') || lower.includes('karuveppilai') || lower.includes('கறிவேப்பிலை') || lower.includes('கருவேப்பிலை')) return '/images/ingredients/curry_leaves.jpg';
  if (lower.includes('coriander') || lower.includes('kothmir') || lower.includes('dhaniya') || lower.includes('கொத்தமல்லி') || lower.includes('cilantro') || lower.includes('mint') || lower.includes('pudina') || lower.includes('spinach') || lower.includes('keerai') || lower.includes('bhajji') || lower.includes('greens')) return '/images/ingredients/coriander.jpg';
  if (lower.includes('turmeric') || lower.includes('manjal') || lower.includes('மஞ்சள்') || lower.includes('haldi')) return '/images/ingredients/turmeric.jpg';
  if ((lower.includes('chilli') || lower.includes('chili') || lower.includes('mirsang') || lower.includes('மிளகாய்')) && (lower.includes('powder') || lower.includes('தூள்') || lower.includes('பொடி') || lower.includes('dry') || lower.includes('red') || lower.includes('bhurko'))) return '/images/ingredients/chilli_powder.jpg';
  if (lower.includes('sambar') || lower.includes('bhurko') || lower.includes('masala') || lower.includes('rasam powder') || lower.includes('பொடி') || lower.includes('தூள்') || lower.includes('curry powder') || lower.includes('kolkar') || lower.includes('ounty')) return '/images/ingredients/sambar_powder.jpg';
  if (lower.includes('pepper') || lower.includes('milagu') || lower.includes('மிளகு')) return '/images/ingredients/pepper.jpg';
  if (lower.includes('mustard') || lower.includes('kadugu') || lower.includes('கடுகு') || lower.includes('sarson') || lower.includes('cumin') || lower.includes('jeera') || lower.includes('seeragam') || lower.includes('சீரகம்')) return '/images/ingredients/mustard_cumin.jpg';
  if (lower.includes('fenugreek') || lower.includes('methi') || lower.includes('vendhayam') || lower.includes('வெந்தயம்') || lower.includes('mithi')) return '/images/ingredients/fenugreek.jpg';
  if (lower.includes('tamarind') || lower.includes('puli') || lower.includes('புளி') || lower.includes('imlee')) return '/images/ingredients/tamarind.jpg';
  if (lower.includes('chana dal') || lower.includes('harbara') || lower.includes('கடலைப்பருப்பு') || lower.includes('roasted gram') || lower.includes('pottukadalai') || lower.includes('chenna') || lower.includes('besan')) return '/images/ingredients/chana_dal.jpg';
  if (lower.includes('toor') || lower.includes('tuvaram') || lower.includes('துவரம்') || lower.includes('thoor') || lower.includes('pigeon pea')) return '/images/ingredients/toor_dal.jpg';
  if (lower.includes('urad') || lower.includes('udith') || lower.includes('udidu') || lower.includes('உளுந்து') || lower.includes('ulutham')) return '/images/ingredients/urad_dal.jpg';
  if (lower.includes('moong') || lower.includes('pasi bela') || lower.includes('பாசிப்பருப்பு')) return '/images/ingredients/moong_dal.jpg';
  if (lower.includes('chickpea') || lower.includes('kachchana') || lower.includes('kala chana') || lower.includes('கொண்டைக்கடலை') || lower.includes('chana')) return '/images/ingredients/chickpeas.jpg';
  if (lower.includes('rice') || lower.includes('saadu') || lower.includes('pacharisi') || lower.includes('அரிசி') || lower.includes('bhaath') || lower.includes('pongal')) return '/images/ingredients/rice.jpg';
  if (lower.includes('salt') || lower.includes('lenu') || lower.includes('உப்பு') || lower.includes('namak')) return '/images/ingredients/salt.jpg';
  if (lower.includes('jaggery') || lower.includes('gullu') || lower.includes('வெல்லம்') || lower.includes('கருப்பட்டி') || lower.includes('sugar') || lower.includes('சர்க்கரை')) return '/images/ingredients/jaggery.jpg';
  if (lower.includes('sesame') || lower.includes('gingelly') || lower.includes('nallennai') || lower.includes('நல்லெண்ணெய்') || lower.includes('oil') || lower.includes('எண்ணெய்')) return '/images/ingredients/sesame_oil.jpg';
  if (lower.includes('ghee') || lower.includes('thoop') || lower.includes('நெய்')) return '/images/ingredients/ghee.jpg';
  if (lower.includes('lemon') || lower.includes('limbu') || lower.includes('எலுமிச்சை') || lower.includes('lime') || lower.includes('amla') || lower.includes('nellika')) return '/images/ingredients/lemon.jpg';
  if (lower.includes('egg') || lower.includes('anda') || lower.includes('முட்டை')) return '/images/ingredients/egg.jpg';
  if (lower.includes('chicken') || lower.includes('koli') || lower.includes('kudi') || lower.includes('கோழி')) return '/images/ingredients/chicken.jpg';
  if (lower.includes('mutton') || lower.includes('chaino') || lower.includes('mansa') || lower.includes('ஆட்டுக்கறி')) return '/images/ingredients/mutton.jpg';
  if (lower.includes('fish') || lower.includes('meen') || lower.includes('karuvadu') || lower.includes('மீன்')) return '/images/ingredients/fish.jpg';

  return undefined;
}

const terms = [
  'Tomato (Takkali) - 200g',
  'Onion / Shallots (Kando) - 150g',
  'Green Capsicum (Shimla Mirch) - 150g',
  'Brinjal / Eggplant (Vangi) - 250g',
  'Potato (Batata) - 200g',
  'Drumstick (Sengu) - 150g',
  'Beans / Butter Beans (Jinnavara) - 150g',
  'Whole Garlic Cloves (Losan / Lasan) - 50g',
  'Fresh Ginger (Alla / Allam) - 25g',
  'Green Chillies (Mirsang) - 20g',
  'Fresh Curry Leaves (Kariveppilai) - 10g',
  'Fresh Coriander Leaves (Kothmir) - 20g',
  'Fresh Grated Coconut (Nalar) - 100g',
  'Toor Dal (Tuvaram Bela)',
  'Chana Dal (Harbara Bela)',
  'Split Urad Dal',
  'Turmeric powder (Manjal Podi)',
  'Chilli powder',
  'Sambar Bhurko (Sourashtra Sambar Powder)',
  'Mustard seeds',
  'Cumin seeds (Jeera)',
  'Black pepper (Milagu)',
  'Fenugreek seeds (Vendhayam)',
  'Pure Ghee (Thoop)',
  'Sesame Oil (Nallennai)',
  'Tamarind (Ambat / Puli)',
  'Sea salt',
  'Chicken (Koli)',
  'Mutton (Chaino)'
];

let matched = 0;
for (const t of terms) {
  const img = getIngredientImage(t);
  if (img) {
    matched++;
    console.log(`✓ ${t} -> ${img}`);
  } else {
    console.log(`✗ NOT MATCHED: ${t}`);
  }
}
console.log(`Matched ${matched}/${terms.length}`);
