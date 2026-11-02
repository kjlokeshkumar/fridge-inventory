export type CulinaryCategory =
  | 'powder'
  | 'fresh-produce'
  | 'herb'
  | 'dal-grain'
  | 'liquid'
  | 'spice-seed';

export interface RamekinStyle {
  category: CulinaryCategory;
  icon: string;
  bg: string;
  gradient: string;
  accentColor: string;
  categoryLabelEn: string;
  categoryLabelTa: string;
  image?: string;
}

export interface ProduceStyle {
  icon: string;
  bg: string;
}

export function getIngredientImage(name: string): string | undefined {
  if (!name) return undefined;
  const lower = name.toLowerCase().trim();

  // 1. Onion / Shallots
  if (
    lower.includes('onion') ||
    lower.includes('shallot') ||
    lower.includes('kando') ||
    lower.includes('வெங்காயம்') ||
    lower.includes('சின்ன வெங்காயம்')
  ) {
    return '/images/ingredients/onion.jpg';
  }

  // 2. Capsicum / Bell Pepper
  if (
    lower.includes('capsicum') ||
    lower.includes('bell pepper') ||
    lower.includes('shimla') ||
    lower.includes('குடைமிளகாய்')
  ) {
    return '/images/ingredients/capsicum.jpg';
  }

  // 3. Tomato
  if (
    lower.includes('tomato') ||
    lower.includes('thakkali') ||
    lower.includes('takkali') ||
    lower.includes('தக்காளி')
  ) {
    return '/images/ingredients/tomato.jpg';
  }

  // 4. Potato
  if (
    lower.includes('potato') ||
    lower.includes('batata') ||
    lower.includes('உருளைக்கிழங்கு') ||
    lower.includes('aloo')
  ) {
    return '/images/ingredients/potato.jpg';
  }

  // 5. Carrot
  if (lower.includes('carrot') || lower.includes('கேரட்')) {
    return '/images/ingredients/carrot.jpg';
  }

  // 6. Brinjal / Eggplant
  if (
    lower.includes('brinjal') ||
    lower.includes('eggplant') ||
    lower.includes('vangi') ||
    lower.includes('aubergine') ||
    lower.includes('கத்தரிக்காய்')
  ) {
    return '/images/ingredients/brinjal.jpg';
  }

  // 7. Drumstick / Moringa
  if (
    lower.includes('drumstick') ||
    lower.includes('sengu') ||
    lower.includes('முருங்கை') ||
    lower.includes('moringa')
  ) {
    return '/images/ingredients/drumstick.jpg';
  }

  // 8. Beans / French Beans / Butter Beans
  if (
    lower.includes('bean') ||
    lower.includes('jinnavara') ||
    lower.includes('பீன்ஸ்') ||
    lower.includes('அவரை')
  ) {
    return '/images/ingredients/beans.jpg';
  }

  // 9. Coconut
  if (
    lower.includes('coconut') ||
    lower.includes('nalar') ||
    lower.includes('தேங்காய்')
  ) {
    return '/images/ingredients/coconut.jpg';
  }

  // 10. Garlic
  if (
    lower.includes('garlic') ||
    lower.includes('lasan') ||
    lower.includes('losan') ||
    lower.includes('பூண்டு')
  ) {
    return '/images/ingredients/garlic.jpg';
  }

  // 11. Ginger
  if (
    lower.includes('ginger') ||
    lower.includes('alla') ||
    lower.includes('allam') ||
    lower.includes('இஞ்சி') ||
    lower.includes('adrak')
  ) {
    return '/images/ingredients/ginger.jpg';
  }

  // 12. Green Chilli
  if (
    (lower.includes('green') && (lower.includes('chilli') || lower.includes('chili') || lower.includes('pepper') || lower.includes('mirsang'))) ||
    lower.includes('பச்சை மிளகாய்') ||
    lower.includes('hari mirch')
  ) {
    return '/images/ingredients/green_chilli.jpg';
  }

  // 13. Curry Leaves
  if (
    lower.includes('curry leave') ||
    lower.includes('curry leaf') ||
    lower.includes('kariveppilai') ||
    lower.includes('karuveppilai') ||
    lower.includes('கறிவேப்பிலை') ||
    lower.includes('கருவேப்பிலை')
  ) {
    return '/images/ingredients/curry_leaves.jpg';
  }

  // 14. Coriander / Cilantro / Mint / Greens / Keerai
  if (
    lower.includes('coriander') ||
    lower.includes('kothmir') ||
    lower.includes('dhaniya') ||
    lower.includes('கொத்தமல்லி') ||
    lower.includes('cilantro') ||
    lower.includes('mint') ||
    lower.includes('pudina') ||
    lower.includes('புதினா') ||
    lower.includes('spinach') ||
    lower.includes('keerai') ||
    lower.includes('bhajji') ||
    lower.includes('கீரை') ||
    lower.includes('greens')
  ) {
    return '/images/ingredients/coriander.jpg';
  }

  // 15. Turmeric
  if (
    lower.includes('turmeric') ||
    lower.includes('manjal') ||
    lower.includes('மஞ்சள்') ||
    lower.includes('haldi')
  ) {
    return '/images/ingredients/turmeric.jpg';
  }

  // 16. Chilli Powder / Dry Red Chillies
  if (
    (lower.includes('chilli') || lower.includes('chili') || lower.includes('mirsang') || lower.includes('மிளகாய்')) &&
    (lower.includes('powder') || lower.includes('தூள்') || lower.includes('பொடி') || lower.includes('dry') || lower.includes('red') || lower.includes('bhurko'))
  ) {
    return '/images/ingredients/chilli_powder.jpg';
  }

  // 17. Sambar Powder / Rasam Powder / Masala / Bhurko
  if (
    lower.includes('sambar') ||
    lower.includes('bhurko') ||
    lower.includes('masala') ||
    lower.includes('rasam powder') ||
    lower.includes('பொடி') ||
    lower.includes('தூள்') ||
    lower.includes('curry powder') ||
    lower.includes('kolkar') ||
    lower.includes('ounty')
  ) {
    return '/images/ingredients/sambar_powder.jpg';
  }

  // 18. Black Pepper
  if (
    lower.includes('pepper') ||
    lower.includes('milagu') ||
    lower.includes('மிளகு')
  ) {
    return '/images/ingredients/pepper.jpg';
  }

  // 19. Mustard Seeds & Cumin Seeds
  if (
    lower.includes('mustard') ||
    lower.includes('kadugu') ||
    lower.includes('கடுகு') ||
    lower.includes('sarson') ||
    lower.includes('cumin') ||
    lower.includes('jeera') ||
    lower.includes('seeragam') ||
    lower.includes('சீரகம்')
  ) {
    return '/images/ingredients/mustard_cumin.jpg';
  }

  // 20. Fenugreek Seeds
  if (
    lower.includes('fenugreek') ||
    lower.includes('methi') ||
    lower.includes('vendhayam') ||
    lower.includes('வெந்தயம்') ||
    lower.includes('mithi')
  ) {
    return '/images/ingredients/fenugreek.jpg';
  }

  // 21. Tamarind
  if (
    lower.includes('tamarind') ||
    lower.includes('puli') ||
    lower.includes('புளி') ||
    lower.includes('imlee')
  ) {
    return '/images/ingredients/tamarind.jpg';
  }

  // 22. Chana Dal / Roasted Gram / Besan
  if (
    lower.includes('chana dal') ||
    lower.includes('harbara') ||
    lower.includes('கடலைப்பருப்பு') ||
    lower.includes('roasted gram') ||
    lower.includes('pottukadalai') ||
    lower.includes('chenna') ||
    lower.includes('besan')
  ) {
    return '/images/ingredients/chana_dal.jpg';
  }

  // 23. Toor Dal
  if (
    lower.includes('toor') ||
    lower.includes('tuvaram') ||
    lower.includes('துவரம்') ||
    lower.includes('thoor') ||
    lower.includes('pigeon pea')
  ) {
    return '/images/ingredients/toor_dal.jpg';
  }

  // 24. Urad Dal
  if (
    lower.includes('urad') ||
    lower.includes('udith') ||
    lower.includes('udidu') ||
    lower.includes('உளுந்து') ||
    lower.includes('ulutham')
  ) {
    return '/images/ingredients/urad_dal.jpg';
  }

  // 25. Moong Dal
  if (
    lower.includes('moong') ||
    lower.includes('pasi bela') ||
    lower.includes('பாசிப்பருப்பு')
  ) {
    return '/images/ingredients/moong_dal.jpg';
  }

  // 26. Chickpeas / Kala Chana
  if (
    lower.includes('chickpea') ||
    lower.includes('kachchana') ||
    lower.includes('kala chana') ||
    lower.includes('கொண்டைக்கடலை') ||
    lower.includes('chana')
  ) {
    return '/images/ingredients/chickpeas.jpg';
  }

  // 27. Rice
  if (
    lower.includes('rice') ||
    lower.includes('saadu') ||
    lower.includes('pacharisi') ||
    lower.includes('அரிசி') ||
    lower.includes('bhaath') ||
    lower.includes('pongal')
  ) {
    return '/images/ingredients/rice.jpg';
  }

  // 28. Salt
  if (
    lower.includes('salt') ||
    lower.includes('lenu') ||
    lower.includes('உப்பு') ||
    lower.includes('namak')
  ) {
    return '/images/ingredients/salt.jpg';
  }

  // 29. Jaggery / Sugar
  if (
    lower.includes('jaggery') ||
    lower.includes('gullu') ||
    lower.includes('வெல்லம்') ||
    lower.includes('கருப்பட்டி') ||
    lower.includes('sugar') ||
    lower.includes('சர்க்கரை')
  ) {
    return '/images/ingredients/jaggery.jpg';
  }

  // 30. Oils
  if (
    lower.includes('sesame') ||
    lower.includes('gingelly') ||
    lower.includes('nallennai') ||
    lower.includes('நல்லெண்ணெய்') ||
    lower.includes('oil') ||
    lower.includes('எண்ணெய்')
  ) {
    return '/images/ingredients/sesame_oil.jpg';
  }

  // 31. Ghee
  if (
    lower.includes('ghee') ||
    lower.includes('thoop') ||
    lower.includes('நெய்')
  ) {
    return '/images/ingredients/ghee.jpg';
  }

  // 32. Lemon / Amla
  if (
    lower.includes('lemon') ||
    lower.includes('limbu') ||
    lower.includes('எலுமிச்சை') ||
    lower.includes('lime') ||
    lower.includes('amla') ||
    lower.includes('nellika')
  ) {
    return '/images/ingredients/lemon.jpg';
  }

  // 33. Egg
  if (
    lower.includes('egg') ||
    lower.includes('anda') ||
    lower.includes('முட்டை')
  ) {
    return '/images/ingredients/egg.jpg';
  }

  // 34. Chicken
  if (
    lower.includes('chicken') ||
    lower.includes('koli') ||
    lower.includes('kudi') ||
    lower.includes('கோழி')
  ) {
    return '/images/ingredients/chicken.jpg';
  }

  // 35. Mutton
  if (
    lower.includes('mutton') ||
    lower.includes('chaino') ||
    lower.includes('mansa') ||
    lower.includes('ஆட்டுக்கறி')
  ) {
    return '/images/ingredients/mutton.jpg';
  }

  // 36. Fish
  if (
    lower.includes('fish') ||
    lower.includes('meen') ||
    lower.includes('karuvadu') ||
    lower.includes('மீன்')
  ) {
    return '/images/ingredients/fish.jpg';
  }

  // 37. Cashews (Mundhiri / Kaju)
  if (
    lower.includes('cashew') ||
    lower.includes('mundhiri') ||
    lower.includes('kaju') ||
    lower.includes('முந்திரி')
  ) {
    return '/images/ingredients/cashews.jpg';
  }

  // 38. Raisins / Sultanas (Kismis)
  if (
    lower.includes('raisin') ||
    lower.includes('kismis') ||
    lower.includes('sultana') ||
    lower.includes('உலர் திராட்சை') ||
    lower.includes('திராட்சை')
  ) {
    return '/images/ingredients/raisins.jpg';
  }

  // 39. Cardamom Pods (Yelakkai / Elachi)
  if (
    lower.includes('cardamom') ||
    lower.includes('yelakkai') ||
    lower.includes('elachi') ||
    lower.includes('ஏலக்காய்')
  ) {
    return '/images/ingredients/cardamom.jpg';
  }

  // 40. Cinnamon & Cloves (Lavangam / Pattai)
  if (
    lower.includes('cinnamon') ||
    lower.includes('clove') ||
    lower.includes('lavangam') ||
    lower.includes('பட்டை') ||
    lower.includes('கிராம்பு')
  ) {
    return '/images/ingredients/cinnamon_cloves.jpg';
  }

  // 41. Asafoetida / Hing (Perungayam)
  if (
    lower.includes('asafoetida') ||
    lower.includes('hing') ||
    lower.includes('பெருங்காயம்') ||
    lower.includes('kaya')
  ) {
    return '/images/ingredients/asafoetida.jpg';
  }

  // 42. Poppy Seeds (Kas Kas / Khus Khus)
  if (
    lower.includes('poppy') ||
    lower.includes('kas kas') ||
    lower.includes('kaskas') ||
    lower.includes('khus khus') ||
    lower.includes('கசகசா')
  ) {
    return '/images/ingredients/poppy_seeds.jpg';
  }

  // 43. Bitter Gourd (Pavakkai / Karela)
  if (
    lower.includes('bitter gourd') ||
    lower.includes('pavakkai') ||
    lower.includes('பாகற்காய்') ||
    lower.includes('karela')
  ) {
    return '/images/ingredients/bitter_gourd.jpg';
  }

  // 44. Curd / Yogurt / Milk / Buttermilk
  if (
    lower.includes('curd') ||
    lower.includes('yogurt') ||
    lower.includes('dheim') ||
    lower.includes('thayir') ||
    lower.includes('தயிர்') ||
    lower.includes('taak') ||
    lower.includes('buttermilk') ||
    lower.includes('milk') ||
    lower.includes('பால்') ||
    lower.includes('doodh')
  ) {
    return '/images/ingredients/curd.jpg';
  }

  // 45. Peanuts (Verkadalai)
  if (
    lower.includes('peanut') ||
    lower.includes('groundnut') ||
    lower.includes('verkadalai') ||
    lower.includes('வேர்க்கடலை')
  ) {
    return '/images/ingredients/peanuts.jpg';
  }

  // 46. Goat / Lamb (Mutton)
  if (lower.includes('goat') || lower.includes('lamb')) {
    return '/images/ingredients/mutton.jpg';
  }

  // 47. Butter (Vennai -> Ghee)
  if (lower.includes('butter') || lower.includes('vennai') || lower.includes('வெண்ணெய்')) {
    return '/images/ingredients/ghee.jpg';
  }

  // 48. Gooseberry / Amla (Nellika -> Lemon/Amla)
  if (lower.includes('gooseberry') || lower.includes('amla') || lower.includes('nellika') || lower.includes('நெல்லிக்காய்')) {
    return '/images/ingredients/lemon.jpg';
  }

  return undefined;
}

export function getRamekinStyle(name: string): RamekinStyle {
  const base = getBaseRamekinStyle(name);
  const image = getIngredientImage(name);
  return {
    ...base,
    image,
  };
}

function getBaseRamekinStyle(name: string): Omit<RamekinStyle, 'image'> {
  if (!name) {
    return {
      category: 'fresh-produce',
      icon: '🥗',
      bg: '#e8f5e9',
      gradient: 'radial-gradient(circle at 35% 35%, #dcfce7 0%, #86efac 50%, #22c55e 100%)',
      accentColor: '#22c55e',
      categoryLabelEn: 'Fresh Produce',
      categoryLabelTa: 'புதிய காய்கறி',
    };
  }

  const lower = name.toLowerCase().trim();

  // =========================================================================
  // 1. SPICE POWDERS & MASALAS (category: 'powder')
  // =========================================================================
  // Turmeric (golden turmeric gradient)
  if (
    lower.includes('turmeric') ||
    lower.includes('manjal') ||
    lower.includes('மஞ்சள்') ||
    lower.includes('haldi')
  ) {
    return {
      category: 'powder',
      icon: '🟡',
      bg: '#f59e0b',
      gradient: 'radial-gradient(circle at 35% 35%, #fbbf24 0%, #f59e0b 50%, #b45309 100%)',
      accentColor: '#f59e0b',
      categoryLabelEn: 'Spice Powder',
      categoryLabelTa: 'மசாலா பொடி',
    };
  }

  // Chilli Powder / Mirsang Bhurko (rich red chilli gradient)
  if (
    (lower.includes('chilli') || lower.includes('chili') || lower.includes('mirsang')) &&
    (lower.includes('powder') || lower.includes('தூள்') || lower.includes('பொடி') || lower.includes('bhurko'))
  ) {
    return {
      category: 'powder',
      icon: '🌶️',
      bg: '#dc2626',
      gradient: 'radial-gradient(circle at 35% 35%, #f87171 0%, #dc2626 50%, #991b1b 100%)',
      accentColor: '#dc2626',
      categoryLabelEn: 'Spice Powder',
      categoryLabelTa: 'மசாலா பொடி',
    };
  }

  // Sambar Powder / Ounty Bhurko / Rasam Powder / Garam Masala (deep brown sambar powder gradient)
  if (
    lower.includes('sambar powder') ||
    lower.includes('சாம்பார் பொடி') ||
    lower.includes('bhurko') ||
    lower.includes('பூர்கோ') ||
    lower.includes('rasam powder') ||
    lower.includes('ரசப் பொடி') ||
    lower.includes('garam masala') ||
    lower.includes('masala powder') ||
    lower.includes('curry powder') ||
    lower.includes('மசாலா') ||
    lower.includes('பொடி') ||
    lower.includes('kolkar bhurko') ||
    lower.includes('ounty bhurko')
  ) {
    return {
      category: 'powder',
      icon: '🥣',
      bg: '#92400e',
      gradient: 'radial-gradient(circle at 35% 35%, #b45309 0%, #78350f 50%, #451a03 100%)',
      accentColor: '#92400e',
      categoryLabelEn: 'Spice Powder',
      categoryLabelTa: 'மசாலா பொடி',
    };
  }

  // Coriander Powder
  if (
    (lower.includes('coriander') || lower.includes('dhaniya') || lower.includes('kothmir') || lower.includes('கொத்தமல்லி') || lower.includes('தனியா')) &&
    (lower.includes('powder') || lower.includes('தூள்') || lower.includes('பொடி'))
  ) {
    return {
      category: 'powder',
      icon: '🌿',
      bg: '#857e38',
      gradient: 'radial-gradient(circle at 35% 35%, #a3a25d 0%, #857e38 55%, #4a4519 100%)',
      accentColor: '#857e38',
      categoryLabelEn: 'Spice Powder',
      categoryLabelTa: 'மசாலா பொடி',
    };
  }

  // Cumin Powder
  if (
    (lower.includes('cumin') || lower.includes('jeera') || lower.includes('சீரக')) &&
    (lower.includes('powder') || lower.includes('தூள்') || lower.includes('பொடி'))
  ) {
    return {
      category: 'powder',
      icon: '🤎',
      bg: '#78350f',
      gradient: 'radial-gradient(circle at 35% 35%, #b45309 0%, #78350f 55%, #451a03 100%)',
      accentColor: '#78350f',
      categoryLabelEn: 'Spice Powder',
      categoryLabelTa: 'மசாலா பொடி',
    };
  }

  // Pepper Powder
  if (
    (lower.includes('pepper') || lower.includes('milagu') || lower.includes('மிளகு')) &&
    (lower.includes('powder') || lower.includes('தூள்') || lower.includes('பொடி') || lower.includes('crushed'))
  ) {
    return {
      category: 'powder',
      icon: '⚫',
      bg: '#334155',
      gradient: 'radial-gradient(circle at 35% 35%, #475569 0%, #1e293b 60%, #0f172a 100%)',
      accentColor: '#334155',
      categoryLabelEn: 'Spice Powder',
      categoryLabelTa: 'மசாலா பொடி',
    };
  }

  // Asafoetida / Hing
  if (
    lower.includes('asafoetida') ||
    lower.includes('hing') ||
    lower.includes('பெருங்காயம்') ||
    lower.includes('kaya')
  ) {
    return {
      category: 'powder',
      icon: '🫙',
      bg: '#fde68a',
      gradient: 'radial-gradient(circle at 35% 35%, #fef3c7 0%, #fde68a 50%, #d97706 100%)',
      accentColor: '#d97706',
      categoryLabelEn: 'Spice Powder',
      categoryLabelTa: 'மசாலா பொடி',
    };
  }

  // Salt / Lenu
  if (
    lower.includes('salt') ||
    lower.includes('lenu') ||
    lower.includes('உப்பு') ||
    lower.includes('namak')
  ) {
    return {
      category: 'powder',
      icon: '🧂',
      bg: '#f1f5f9',
      gradient: 'radial-gradient(circle at 35% 35%, #ffffff 0%, #f1f5f9 60%, #cbd5e1 100%)',
      accentColor: '#94a3b8',
      categoryLabelEn: 'Seasoning',
      categoryLabelTa: 'சுவையூட்டி',
    };
  }

  // Sugar / Jaggery / Gullu
  if (
    lower.includes('jaggery') ||
    lower.includes('gullu') ||
    lower.includes('வெல்லம்') ||
    lower.includes('கருப்பட்டி') ||
    lower.includes('palm sugar')
  ) {
    return {
      category: 'powder',
      icon: '🍯',
      bg: '#78350f',
      gradient: 'radial-gradient(circle at 35% 35%, #b45309 0%, #78350f 60%, #451a03 100%)',
      accentColor: '#78350f',
      categoryLabelEn: 'Sweetener',
      categoryLabelTa: 'இனிப்பு',
    };
  }

  if (lower.includes('sugar') || lower.includes('சர்க்கரை')) {
    return {
      category: 'powder',
      icon: '🍬',
      bg: '#f8fafc',
      gradient: 'radial-gradient(circle at 35% 35%, #ffffff 0%, #f8fafc 60%, #e2e8f0 100%)',
      accentColor: '#cbd5e1',
      categoryLabelEn: 'Sweetener',
      categoryLabelTa: 'இனிப்பு',
    };
  }

  // Flours / Besan / Maida / Atta / Rice Flour
  if (
    lower.includes('flour') ||
    lower.includes('besan') ||
    lower.includes('maida') ||
    lower.includes('atta') ||
    lower.includes('மாவு') ||
    lower.includes('கடலை மாவு') ||
    lower.includes('அரிசி மாவு') ||
    lower.includes('கோதுமை மாவு')
  ) {
    return {
      category: 'powder',
      icon: '🌾',
      bg: '#fef3c7',
      gradient: 'radial-gradient(circle at 35% 35%, #fffbeb 0%, #fef3c7 50%, #fde68a 100%)',
      accentColor: '#f59e0b',
      categoryLabelEn: 'Flour & Powder',
      categoryLabelTa: 'மாவு வகை',
    };
  }

  // =========================================================================
  // 2. FRESH HERBS (category: 'herb')
  // =========================================================================
  // Curry Leaves (emerald curry leaf gradient)
  if (
    lower.includes('curry leaves') ||
    lower.includes('curry leaf') ||
    lower.includes('kariveppilai') ||
    lower.includes('karuveppilai') ||
    lower.includes('கறிவேப்பிலை') ||
    lower.includes('கருவேப்பிலை') ||
    lower.includes('mithi neem')
  ) {
    return {
      category: 'herb',
      icon: '🌿',
      bg: '#15803d',
      gradient: 'radial-gradient(circle at 35% 35%, #4ade80 0%, #16a34a 45%, #14532d 100%)',
      accentColor: '#16a34a',
      categoryLabelEn: 'Fresh Herb',
      categoryLabelTa: 'புதிய மூலிகை',
    };
  }

  // Coriander / Cilantro / Kothmir
  if (
    lower.includes('coriander leaves') ||
    lower.includes('coriander') ||
    lower.includes('cilantro') ||
    lower.includes('kothmir') ||
    lower.includes('கொத்தமல்லி')
  ) {
    return {
      category: 'herb',
      icon: '🌿',
      bg: '#22c55e',
      gradient: 'radial-gradient(circle at 35% 35%, #86efac 0%, #22c55e 50%, #15803d 100%)',
      accentColor: '#22c55e',
      categoryLabelEn: 'Fresh Herb',
      categoryLabelTa: 'புதிய மூலிகை',
    };
  }

  // Mint / Pudina
  if (
    lower.includes('mint') ||
    lower.includes('pudina') ||
    lower.includes('புதினா')
  ) {
    return {
      category: 'herb',
      icon: '🌱',
      bg: '#10b981',
      gradient: 'radial-gradient(circle at 35% 35%, #6ee7b7 0%, #10b981 50%, #065f46 100%)',
      accentColor: '#10b981',
      categoryLabelEn: 'Fresh Herb',
      categoryLabelTa: 'புதிய மூலிகை',
    };
  }

  // Spinach / Keerai / Bhajji / Greens
  if (
    lower.includes('spinach') ||
    lower.includes('keerai') ||
    lower.includes('bhajji') ||
    lower.includes('greens') ||
    lower.includes('கீரை')
  ) {
    return {
      category: 'herb',
      icon: '🥬',
      bg: '#059669',
      gradient: 'radial-gradient(circle at 35% 35%, #a7f3d0 0%, #34d399 50%, #047857 100%)',
      accentColor: '#059669',
      categoryLabelEn: 'Fresh Greens',
      categoryLabelTa: 'புதிய கீரை',
    };
  }

  // =========================================================================
  // 3. WHOLE SPICES & SEEDS (category: 'spice-seed')
  // =========================================================================
  // Mustard Seeds
  if (
    lower.includes('mustard') ||
    lower.includes('kadugu') ||
    lower.includes('கடுகு') ||
    lower.includes('sarson') ||
    lower.includes('rai')
  ) {
    return {
      category: 'spice-seed',
      icon: '✨',
      bg: '#1e293b',
      gradient: 'radial-gradient(circle at 35% 35%, #475569 0%, #1e293b 55%, #0f172a 100%)',
      accentColor: '#1e293b',
      categoryLabelEn: 'Whole Spice',
      categoryLabelTa: 'தாளிப்பு விதை',
    };
  }

  // Cumin Seeds / Jeera
  if (
    lower.includes('cumin') ||
    lower.includes('jeera') ||
    lower.includes('சீரகம்')
  ) {
    return {
      category: 'spice-seed',
      icon: '✨',
      bg: '#854d0e',
      gradient: 'radial-gradient(circle at 35% 35%, #b45309 0%, #854d0e 55%, #451a03 100%)',
      accentColor: '#854d0e',
      categoryLabelEn: 'Whole Spice',
      categoryLabelTa: 'தாளிப்பு விதை',
    };
  }

  // Fenugreek Seeds / Methi
  if (
    lower.includes('fenugreek') ||
    lower.includes('methi') ||
    lower.includes('வெந்தயம்')
  ) {
    return {
      category: 'spice-seed',
      icon: '✨',
      bg: '#b45309',
      gradient: 'radial-gradient(circle at 35% 35%, #d97706 0%, #b45309 55%, #78350f 100%)',
      accentColor: '#b45309',
      categoryLabelEn: 'Whole Spice',
      categoryLabelTa: 'தாளிப்பு விதை',
    };
  }

  // Fennel Seeds / Saunf / Sombu
  if (
    lower.includes('fennel') ||
    lower.includes('saunf') ||
    lower.includes('sombu') ||
    lower.includes('சோம்பு')
  ) {
    return {
      category: 'spice-seed',
      icon: '✨',
      bg: '#65a30d',
      gradient: 'radial-gradient(circle at 35% 35%, #a3e635 0%, #65a30d 55%, #365314 100%)',
      accentColor: '#65a30d',
      categoryLabelEn: 'Whole Spice',
      categoryLabelTa: 'தாளிப்பு விதை',
    };
  }

  // Peppercorns / Black Pepper Whole
  if (
    lower.includes('peppercorn') ||
    lower.includes('black pepper') ||
    lower.includes('milagu') ||
    lower.includes('மிளகு')
  ) {
    return {
      category: 'spice-seed',
      icon: '⚫',
      bg: '#0f172a',
      gradient: 'radial-gradient(circle at 35% 35%, #334155 0%, #1e293b 60%, #020617 100%)',
      accentColor: '#0f172a',
      categoryLabelEn: 'Whole Spice',
      categoryLabelTa: 'தாளிப்பு விதை',
    };
  }

  // Cardamom / Elaichi
  if (
    lower.includes('cardamom') ||
    lower.includes('elaichi') ||
    lower.includes('ஏலக்காய்')
  ) {
    return {
      category: 'spice-seed',
      icon: '🌱',
      bg: '#15803d',
      gradient: 'radial-gradient(circle at 35% 35%, #86efac 0%, #22c55e 55%, #15803d 100%)',
      accentColor: '#22c55e',
      categoryLabelEn: 'Aromatic Spice',
      categoryLabelTa: 'நறுமணப் பொருள்',
    };
  }

  // Cloves, Cinnamon, Star Anise
  if (
    lower.includes('clove') ||
    lower.includes('lavang') ||
    lower.includes('கிராம்பு') ||
    lower.includes('cinnamon') ||
    lower.includes('dalchini') ||
    lower.includes('பட்டை') ||
    lower.includes('star anise') ||
    lower.includes('அன்னாசிப்பூ')
  ) {
    return {
      category: 'spice-seed',
      icon: '🪵',
      bg: '#7c2d12',
      gradient: 'radial-gradient(circle at 35% 35%, #9a3412 0%, #7c2d12 55%, #431407 100%)',
      accentColor: '#7c2d12',
      categoryLabelEn: 'Aromatic Spice',
      categoryLabelTa: 'நறுமணப் பொருள்',
    };
  }

  // Sesame Seeds / Til
  if (
    lower.includes('sesame seed') ||
    lower.includes('til') ||
    lower.includes('எள்')
  ) {
    return {
      category: 'spice-seed',
      icon: '✨',
      bg: '#475569',
      gradient: 'radial-gradient(circle at 35% 35%, #f1f5f9 0%, #94a3b8 50%, #334155 100%)',
      accentColor: '#64748b',
      categoryLabelEn: 'Seed',
      categoryLabelTa: 'விதை',
    };
  }

  // =========================================================================
  // 4. OILS & LIQUIDS (category: 'liquid')
  // =========================================================================
  // Oils (golden oil gradient)
  if (
    lower.includes('oil') ||
    lower.includes('sesame oil') ||
    lower.includes('gingelly') ||
    lower.includes('நல்லெண்ணெய்') ||
    lower.includes('எண்ணெய்') ||
    lower.includes('tel')
  ) {
    return {
      category: 'liquid',
      icon: '🫗',
      bg: '#ca8a04',
      gradient: 'radial-gradient(circle at 35% 35%, #fef08a 0%, #facc15 45%, #ca8a04 80%, #854d0e 100%)',
      accentColor: '#ca8a04',
      categoryLabelEn: 'Cooking Oil',
      categoryLabelTa: 'சமையல் எண்ணெய்',
    };
  }

  // Ghee / Neyyu
  if (
    lower.includes('ghee') ||
    lower.includes('neyyu') ||
    lower.includes('நெய்')
  ) {
    return {
      category: 'liquid',
      icon: '🫗',
      bg: '#f59e0b',
      gradient: 'radial-gradient(circle at 35% 35%, #fffbeb 0%, #fef08a 40%, #f59e0b 80%, #b45309 100%)',
      accentColor: '#f59e0b',
      categoryLabelEn: 'Clarified Butter',
      categoryLabelTa: 'தூய நெய்',
    };
  }

  // Tamarind Pulp / Extract
  if (
    lower.includes('tamarind') ||
    lower.includes('புளி') ||
    lower.includes('imli')
  ) {
    return {
      category: 'liquid',
      icon: '🫙',
      bg: '#78350f',
      gradient: 'radial-gradient(circle at 35% 35%, #78350f 0%, #451a03 60%, #1f0b02 100%)',
      accentColor: '#78350f',
      categoryLabelEn: 'Tamarind Extract',
      categoryLabelTa: 'புளிக் கரைசல்',
    };
  }

  // Milk
  if (
    lower.includes('milk') ||
    lower.includes('doodh') ||
    lower.includes('பால்')
  ) {
    return {
      category: 'liquid',
      icon: '🥛',
      bg: '#f8fafc',
      gradient: 'radial-gradient(circle at 35% 35%, #ffffff 0%, #f8fafc 60%, #f1f5f9 100%)',
      accentColor: '#cbd5e1',
      categoryLabelEn: 'Dairy Liquid',
      categoryLabelTa: 'பால் திரவம்',
    };
  }

  // Curd / Yogurt / Dheim
  if (
    lower.includes('curd') ||
    lower.includes('yogurt') ||
    lower.includes('dheim') ||
    lower.includes('தயிர்') ||
    lower.includes('மோர்') ||
    lower.includes('buttermilk')
  ) {
    return {
      category: 'liquid',
      icon: '🥣',
      bg: '#e2e8f0',
      gradient: 'radial-gradient(circle at 35% 35%, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)',
      accentColor: '#cbd5e1',
      categoryLabelEn: 'Dairy',
      categoryLabelTa: 'தயிர் & மோர்',
    };
  }

  // Water
  if (
    lower.includes('water') ||
    lower.includes('தண்ணீர்') ||
    lower.includes('paani')
  ) {
    return {
      category: 'liquid',
      icon: '💧',
      bg: '#0284c7',
      gradient: 'radial-gradient(circle at 35% 35%, #e0f2fe 0%, #bae6fd 50%, #38bdf8 100%)',
      accentColor: '#0284c7',
      categoryLabelEn: 'Liquid',
      categoryLabelTa: 'நீர்',
    };
  }

  // =========================================================================
  // 5. DALS & GRAINS (category: 'dal-grain')
  // =========================================================================
  // Toor Dal / Dal / Lentils (creamy dal gradient)
  if (
    lower.includes('toor dal') ||
    lower.includes('tuvaram') ||
    lower.includes('துவரம் பருப்பு') ||
    lower.includes('துவரை') ||
    lower.includes('arhar') ||
    (lower.includes('dal') && !lower.includes('urad') && !lower.includes('chana') && !lower.includes('moong')) ||
    (lower.includes('பருப்பு') && !lower.includes('உளுந்து') && !lower.includes('கடலை') && !lower.includes('பாசி')) ||
    lower.includes('lentil') ||
    lower.includes('bela')
  ) {
    return {
      category: 'dal-grain',
      icon: '🫘',
      bg: '#eab308',
      gradient: 'radial-gradient(circle at 35% 35%, #fef08a 0%, #fde047 40%, #eab308 75%, #a16207 100%)',
      accentColor: '#ca8a04',
      categoryLabelEn: 'Creamy Dal',
      categoryLabelTa: 'பருப்பு வகை',
    };
  }

  // Urad Dal / Ulunthu
  if (
    lower.includes('urad dal') ||
    lower.includes('urad') ||
    lower.includes('ulunthu') ||
    lower.includes('உளுந்து') ||
    lower.includes('உளுத்தம் பருப்பு')
  ) {
    return {
      category: 'dal-grain',
      icon: '🫘',
      bg: '#f8fafc',
      gradient: 'radial-gradient(circle at 35% 35%, #ffffff 0%, #f8fafc 60%, #cbd5e1 100%)',
      accentColor: '#cbd5e1',
      categoryLabelEn: 'Dal & Grain',
      categoryLabelTa: 'பருப்பு & தானியம்',
    };
  }

  // Chana Dal / Chickpeas / Sundal
  if (
    lower.includes('chana dal') ||
    lower.includes('chana') ||
    lower.includes('chickpea') ||
    lower.includes('கடலைப் பருப்பு') ||
    lower.includes('கொண்டைக்கடலை') ||
    lower.includes('sundal')
  ) {
    return {
      category: 'dal-grain',
      icon: '🫘',
      bg: '#f59e0b',
      gradient: 'radial-gradient(circle at 35% 35%, #fde047 0%, #f59e0b 50%, #b45309 100%)',
      accentColor: '#f59e0b',
      categoryLabelEn: 'Gram & Pulse',
      categoryLabelTa: 'பருப்பு & தானியம்',
    };
  }

  // Moong Dal / Green Gram
  if (
    lower.includes('moong dal') ||
    lower.includes('moong') ||
    lower.includes('பாசிப் பருப்பு') ||
    lower.includes('பாசிப்பயறு')
  ) {
    return {
      category: 'dal-grain',
      icon: '🫘',
      bg: '#84cc16',
      gradient: 'radial-gradient(circle at 35% 35%, #bef264 0%, #84cc16 50%, #4d7c0f 100%)',
      accentColor: '#84cc16',
      categoryLabelEn: 'Dal & Pulse',
      categoryLabelTa: 'பருப்பு & தானியம்',
    };
  }

  // Rice / Raw Rice / Basmati / Bhaath
  if (
    lower.includes('rice') ||
    lower.includes('bhaath') ||
    lower.includes('அரிசி') ||
    lower.includes('பச்சரிசி') ||
    lower.includes('புழுங்கல் அரிசி') ||
    lower.includes('chawal')
  ) {
    return {
      category: 'dal-grain',
      icon: '🌾',
      bg: '#f1f5f9',
      gradient: 'radial-gradient(circle at 35% 35%, #ffffff 0%, #f1f5f9 60%, #cbd5e1 100%)',
      accentColor: '#cbd5e1',
      categoryLabelEn: 'Grain & Cereal',
      categoryLabelTa: 'தானிய வகை',
    };
  }

  // Poha / Aval
  if (
    lower.includes('poha') ||
    lower.includes('aval') ||
    lower.includes('அவல்')
  ) {
    return {
      category: 'dal-grain',
      icon: '🌾',
      bg: '#e2e8f0',
      gradient: 'radial-gradient(circle at 35% 35%, #ffffff 0%, #f8fafc 60%, #e2e8f0 100%)',
      accentColor: '#cbd5e1',
      categoryLabelEn: 'Flattened Rice',
      categoryLabelTa: 'தானிய வகை',
    };
  }

  // Semolina / Rava
  if (
    lower.includes('rava') ||
    lower.includes('semolina') ||
    lower.includes('ரவை') ||
    lower.includes('sooji')
  ) {
    return {
      category: 'dal-grain',
      icon: '🌾',
      bg: '#d97706',
      gradient: 'radial-gradient(circle at 35% 35%, #fef3c7 0%, #fde68a 50%, #d97706 100%)',
      accentColor: '#d97706',
      categoryLabelEn: 'Semolina',
      categoryLabelTa: 'தானிய வகை',
    };
  }

  // =========================================================================
  // 6. FRESH PRODUCE (category: 'fresh-produce')
  // =========================================================================
  // Tomato (fresh tomato red gradient)
  if (
    lower.includes('tomato') ||
    lower.includes('takkali') ||
    lower.includes('தக்காளி') ||
    lower.includes('tamatar')
  ) {
    return {
      category: 'fresh-produce',
      icon: '🍅',
      bg: '#ef4444',
      gradient: 'radial-gradient(circle at 35% 35%, #f87171 0%, #ef4444 50%, #991b1b 100%)',
      accentColor: '#ef4444',
      categoryLabelEn: 'Fresh Produce',
      categoryLabelTa: 'புதிய காய்கறி',
    };
  }

  // Garlic / Losan (pearl garlic gradient)
  if (
    lower.includes('garlic') ||
    lower.includes('losan') ||
    lower.includes('lasan') ||
    lower.includes('பூண்டு') ||
    lower.includes('lehsun')
  ) {
    return {
      category: 'fresh-produce',
      icon: '🧄',
      bg: '#d6d3d1',
      gradient: 'radial-gradient(circle at 35% 35%, #ffffff 0%, #f5f5f4 55%, #d6d3d1 100%)',
      accentColor: '#a8a29e',
      categoryLabelEn: 'Fresh Allium',
      categoryLabelTa: 'புதிய காய்கறி',
    };
  }

  // Onion / Shallot / Kando
  if (
    lower.includes('onion') ||
    lower.includes('shallot') ||
    lower.includes('kando') ||
    lower.includes('வெங்காயம்') ||
    lower.includes('சின்ன வெங்காயம்') ||
    lower.includes('pyaz')
  ) {
    return {
      category: 'fresh-produce',
      icon: '🧅',
      bg: '#db2777',
      gradient: 'radial-gradient(circle at 35% 35%, #f472b6 0%, #db2777 50%, #831843 100%)',
      accentColor: '#db2777',
      categoryLabelEn: 'Fresh Allium',
      categoryLabelTa: 'புதிய காய்கறி',
    };
  }

  // Ginger / Alla
  if (
    lower.includes('ginger') ||
    lower.includes('alla') ||
    lower.includes('இஞ்சி') ||
    lower.includes('adrak')
  ) {
    return {
      category: 'fresh-produce',
      icon: '🫚',
      bg: '#ca8a04',
      gradient: 'radial-gradient(circle at 35% 35%, #fde047 0%, #eab308 50%, #854d0e 100%)',
      accentColor: '#ca8a04',
      categoryLabelEn: 'Fresh Root',
      categoryLabelTa: 'புதிய காய்கறி',
    };
  }

  // Green Chilli / Fresh Chilli
  if (
    lower.includes('green chilli') ||
    lower.includes('chilli') ||
    lower.includes('chili') ||
    lower.includes('mirsang') ||
    lower.includes('மிளகாய்') ||
    lower.includes('பச்சை மிளகாய்')
  ) {
    return {
      category: 'fresh-produce',
      icon: '🌶️',
      bg: '#16a34a',
      gradient: 'radial-gradient(circle at 35% 35%, #4ade80 0%, #16a34a 50%, #14532d 100%)',
      accentColor: '#16a34a',
      categoryLabelEn: 'Fresh Chilli',
      categoryLabelTa: 'புதிய காய்கறி',
    };
  }

  // Potato / Batata
  if (
    lower.includes('potato') ||
    lower.includes('batata') ||
    lower.includes('உருளைக்கிழங்கு') ||
    lower.includes('aloo')
  ) {
    return {
      category: 'fresh-produce',
      icon: '🥔',
      bg: '#ea580c',
      gradient: 'radial-gradient(circle at 35% 35%, #fed7aa 0%, #fb923c 50%, #9a3412 100%)',
      accentColor: '#ea580c',
      categoryLabelEn: 'Fresh Tuber',
      categoryLabelTa: 'புதிய காய்கறி',
    };
  }

  // Brinjal / Eggplant / Vangi
  if (
    lower.includes('brinjal') ||
    lower.includes('eggplant') ||
    lower.includes('aubergine') ||
    lower.includes('vangi') ||
    lower.includes('கத்திரிக்காய்') ||
    lower.includes('baingan')
  ) {
    return {
      category: 'fresh-produce',
      icon: '🍆',
      bg: '#9333ea',
      gradient: 'radial-gradient(circle at 35% 35%, #c084fc 0%, #9333ea 50%, #581c87 100%)',
      accentColor: '#9333ea',
      categoryLabelEn: 'Fresh Produce',
      categoryLabelTa: 'புதிய காய்கறி',
    };
  }

  // Drumstick / Sengu
  if (
    lower.includes('drumstick') ||
    lower.includes('sengu') ||
    lower.includes('முருங்கைக்காய்') ||
    lower.includes('moringa')
  ) {
    return {
      category: 'fresh-produce',
      icon: '🥢',
      bg: '#22c55e',
      gradient: 'radial-gradient(circle at 35% 35%, #86efac 0%, #22c55e 50%, #166534 100%)',
      accentColor: '#22c55e',
      categoryLabelEn: 'Fresh Produce',
      categoryLabelTa: 'புதிய காய்கறி',
    };
  }

  // Carrot
  if (
    lower.includes('carrot') ||
    lower.includes('கேரட்') ||
    lower.includes('gajar')
  ) {
    return {
      category: 'fresh-produce',
      icon: '🥕',
      bg: '#ea580c',
      gradient: 'radial-gradient(circle at 35% 35%, #fdba74 0%, #f97316 50%, #c2410c 100%)',
      accentColor: '#ea580c',
      categoryLabelEn: 'Fresh Root',
      categoryLabelTa: 'புதிய காய்கறி',
    };
  }

  // Okra / Ladyfinger / Bhendi
  if (
    lower.includes('okra') ||
    lower.includes('ladyfinger') ||
    lower.includes('வெண்டைக்காய்') ||
    lower.includes('bhindi')
  ) {
    return {
      category: 'fresh-produce',
      icon: '🥢',
      bg: '#16a34a',
      gradient: 'radial-gradient(circle at 35% 35%, #86efac 0%, #4ade80 50%, #15803d 100%)',
      accentColor: '#16a34a',
      categoryLabelEn: 'Fresh Produce',
      categoryLabelTa: 'புதிய காய்கறி',
    };
  }

  // Coconut / Nalar
  if (
    lower.includes('coconut') ||
    lower.includes('nalar') ||
    lower.includes('தேங்காய்') ||
    lower.includes('nariyal')
  ) {
    return {
      category: 'fresh-produce',
      icon: '🥥',
      bg: '#cbd5e1',
      gradient: 'radial-gradient(circle at 35% 35%, #ffffff 0%, #f8fafc 55%, #cbd5e1 100%)',
      accentColor: '#94a3b8',
      categoryLabelEn: 'Fresh Coconut',
      categoryLabelTa: 'தேங்காய்',
    };
  }

  // Lemon / Lime / Limbu
  if (
    lower.includes('lemon') ||
    lower.includes('lime') ||
    lower.includes('limbu') ||
    lower.includes('எலுமிச்சை') ||
    lower.includes('nimbu')
  ) {
    return {
      category: 'fresh-produce',
      icon: '🍋',
      bg: '#eab308',
      gradient: 'radial-gradient(circle at 35% 35%, #fef08a 0%, #facc15 50%, #ca8a04 100%)',
      accentColor: '#eab308',
      categoryLabelEn: 'Citrus',
      categoryLabelTa: 'எலுமிச்சை',
    };
  }

  // Capsicum / Pepper
  if (
    lower.includes('capsicum') ||
    lower.includes('குடைமிளகாய்') ||
    lower.includes('bell pepper') ||
    lower.includes('shimla mirch')
  ) {
    return {
      category: 'fresh-produce',
      icon: '🫑',
      bg: '#16a34a',
      gradient: 'radial-gradient(circle at 35% 35%, #86efac 0%, #22c55e 50%, #15803d 100%)',
      accentColor: '#16a34a',
      categoryLabelEn: 'Fresh Produce',
      categoryLabelTa: 'புதிய காய்கறி',
    };
  }

  // Cucumber
  if (
    lower.includes('cucumber') ||
    lower.includes('வெள்ளரிக்காய்') ||
    lower.includes('kheera')
  ) {
    return {
      category: 'fresh-produce',
      icon: '🥒',
      bg: '#22c55e',
      gradient: 'radial-gradient(circle at 35% 35%, #bbf7d0 0%, #4ade80 50%, #166534 100%)',
      accentColor: '#22c55e',
      categoryLabelEn: 'Fresh Produce',
      categoryLabelTa: 'புதிய காய்கறி',
    };
  }

  // Cabbage
  if (
    lower.includes('cabbage') ||
    lower.includes('முட்டைக்கோஸ்') ||
    lower.includes('patta gobhi')
  ) {
    return {
      category: 'fresh-produce',
      icon: '🥬',
      bg: '#4ade80',
      gradient: 'radial-gradient(circle at 35% 35%, #dcfce7 0%, #86efac 50%, #22c55e 100%)',
      accentColor: '#4ade80',
      categoryLabelEn: 'Fresh Produce',
      categoryLabelTa: 'புதிய காய்கறி',
    };
  }

  // Cauliflower
  if (
    lower.includes('cauliflower') ||
    lower.includes('காலிஃப்ளவர்') ||
    lower.includes('phool gobhi')
  ) {
    return {
      category: 'fresh-produce',
      icon: '🥦',
      bg: '#cbd5e1',
      gradient: 'radial-gradient(circle at 35% 35%, #ffffff 0%, #f1f5f9 60%, #cbd5e1 100%)',
      accentColor: '#cbd5e1',
      categoryLabelEn: 'Fresh Produce',
      categoryLabelTa: 'புதிய காய்கறி',
    };
  }

  // Mushroom
  if (
    lower.includes('mushroom') ||
    lower.includes('காளான்')
  ) {
    return {
      category: 'fresh-produce',
      icon: '🍄',
      bg: '#64748b',
      gradient: 'radial-gradient(circle at 35% 35%, #e2e8f0 0%, #cbd5e1 50%, #64748b 100%)',
      accentColor: '#64748b',
      categoryLabelEn: 'Fresh Produce',
      categoryLabelTa: 'புதிய காய்கறி',
    };
  }

  // Peas
  if (
    lower.includes('peas') ||
    lower.includes('பட்டாணி') ||
    lower.includes('matar')
  ) {
    return {
      category: 'fresh-produce',
      icon: '🫛',
      bg: '#22c55e',
      gradient: 'radial-gradient(circle at 35% 35%, #86efac 0%, #22c55e 50%, #166534 100%)',
      accentColor: '#22c55e',
      categoryLabelEn: 'Fresh Produce',
      categoryLabelTa: 'புதிய காய்கறி',
    };
  }

  // Beans
  if (
    lower.includes('bean') ||
    lower.includes('பீன்ஸ்')
  ) {
    return {
      category: 'fresh-produce',
      icon: '🫛',
      bg: '#22c55e',
      gradient: 'radial-gradient(circle at 35% 35%, #86efac 0%, #22c55e 50%, #166534 100%)',
      accentColor: '#22c55e',
      categoryLabelEn: 'Fresh Produce',
      categoryLabelTa: 'புதிய காய்கறி',
    };
  }

  // Pumpkin
  if (
    lower.includes('pumpkin') ||
    lower.includes('poosanikai') ||
    lower.includes('பூசணிக்காய்') ||
    lower.includes('பரங்கிக்காய்') ||
    lower.includes('kaddu')
  ) {
    return {
      category: 'fresh-produce',
      icon: '🎃',
      bg: '#ea580c',
      gradient: 'radial-gradient(circle at 35% 35%, #fed7aa 0%, #f97316 50%, #c2410c 100%)',
      accentColor: '#ea580c',
      categoryLabelEn: 'Fresh Produce',
      categoryLabelTa: 'புதிய காய்கறி',
    };
  }

  // Radish
  if (
    lower.includes('radish') ||
    lower.includes('முள்ளங்கி') ||
    lower.includes('mooli')
  ) {
    return {
      category: 'fresh-produce',
      icon: '🥕',
      bg: '#e2e8f0',
      gradient: 'radial-gradient(circle at 35% 35%, #ffffff 0%, #f8fafc 60%, #e2e8f0 100%)',
      accentColor: '#e2e8f0',
      categoryLabelEn: 'Fresh Root',
      categoryLabelTa: 'புதிய காய்கறி',
    };
  }

  // Beetroot
  if (
    lower.includes('beetroot') ||
    lower.includes('பீட்ரூட்') ||
    lower.includes('chukandar')
  ) {
    return {
      category: 'fresh-produce',
      icon: '🥔',
      bg: '#be123c',
      gradient: 'radial-gradient(circle at 35% 35%, #f43f5e 0%, #be123c 50%, #881337 100%)',
      accentColor: '#be123c',
      categoryLabelEn: 'Fresh Root',
      categoryLabelTa: 'புதிய காய்கறி',
    };
  }

  // Fruits (Mango, Apple, Banana, Orange, Grapes, Papaya, Watermelon)
  if (lower.includes('mango') || lower.includes('மாம்பழம்')) {
    return {
      category: 'fresh-produce',
      icon: '🥭',
      bg: '#f59e0b',
      gradient: 'radial-gradient(circle at 35% 35%, #fde047 0%, #f59e0b 50%, #b45309 100%)',
      accentColor: '#f59e0b',
      categoryLabelEn: 'Fresh Fruit',
      categoryLabelTa: 'பழம்',
    };
  }

  if (lower.includes('apple') || lower.includes('ஆப்பிள்')) {
    return {
      category: 'fresh-produce',
      icon: '🍎',
      bg: '#dc2626',
      gradient: 'radial-gradient(circle at 35% 35%, #f87171 0%, #dc2626 50%, #991b1b 100%)',
      accentColor: '#dc2626',
      categoryLabelEn: 'Fresh Fruit',
      categoryLabelTa: 'பழம்',
    };
  }

  if (lower.includes('banana') || lower.includes('வாழைப்பழம்')) {
    return {
      category: 'fresh-produce',
      icon: '🍌',
      bg: '#eab308',
      gradient: 'radial-gradient(circle at 35% 35%, #fef08a 0%, #facc15 50%, #ca8a04 100%)',
      accentColor: '#eab308',
      categoryLabelEn: 'Fresh Fruit',
      categoryLabelTa: 'பழம்',
    };
  }

  // Dairy & Proteins
  if (lower.includes('paneer') || lower.includes('cheese') || lower.includes('பனீர்')) {
    return {
      category: 'fresh-produce',
      icon: '🧀',
      bg: '#0d9488',
      gradient: 'radial-gradient(circle at 35% 35%, #99f6e4 0%, #2dd4bf 50%, #0f766e 100%)',
      accentColor: '#0d9488',
      categoryLabelEn: 'Dairy Protein',
      categoryLabelTa: 'பனீர் & புரதம்',
    };
  }

  if (lower.includes('egg') || lower.includes('anda') || lower.includes('முட்டை')) {
    return {
      category: 'fresh-produce',
      icon: '🥚',
      bg: '#d97706',
      gradient: 'radial-gradient(circle at 35% 35%, #fef08a 0%, #fde047 50%, #d97706 100%)',
      accentColor: '#d97706',
      categoryLabelEn: 'Protein',
      categoryLabelTa: 'முட்டை & புரதம்',
    };
  }

  if (lower.includes('chicken') || lower.includes('koli') || lower.includes('kudi') || lower.includes('கோழி')) {
    return {
      category: 'fresh-produce',
      icon: '🍗',
      bg: '#b45309',
      gradient: 'radial-gradient(circle at 35% 35%, #fed7aa 0%, #fb923c 50%, #9a3412 100%)',
      accentColor: '#ea580c',
      categoryLabelEn: 'Protein',
      categoryLabelTa: 'அசைவப் பொருள்',
    };
  }

  if (lower.includes('mutton') || lower.includes('lamb') || lower.includes('chaino') || lower.includes('mansa') || lower.includes('ஆட்டிறைச்சி')) {
    return {
      category: 'fresh-produce',
      icon: '🥩',
      bg: '#991b1b',
      gradient: 'radial-gradient(circle at 35% 35%, #f87171 0%, #dc2626 50%, #7f1d1d 100%)',
      accentColor: '#dc2626',
      categoryLabelEn: 'Protein',
      categoryLabelTa: 'அசைவப் பொருள்',
    };
  }

  if (lower.includes('fish') || lower.includes('meen') || lower.includes('koddi') || lower.includes('மீன்')) {
    return {
      category: 'fresh-produce',
      icon: '🐟',
      bg: '#0284c7',
      gradient: 'radial-gradient(circle at 35% 35%, #bae6fd 0%, #38bdf8 50%, #0369a1 100%)',
      accentColor: '#0284c7',
      categoryLabelEn: 'Seafood',
      categoryLabelTa: 'மீன் வகை',
    };
  }

  if (lower.includes('prawn') || lower.includes('shrimp') || lower.includes('இறால்')) {
    return {
      category: 'fresh-produce',
      icon: '🦐',
      bg: '#ea580c',
      gradient: 'radial-gradient(circle at 35% 35%, #fed7aa 0%, #f97316 50%, #c2410c 100%)',
      accentColor: '#ea580c',
      categoryLabelEn: 'Seafood',
      categoryLabelTa: 'இறால் வகை',
    };
  }

  // Default Fallback
  return {
    category: 'fresh-produce',
    icon: '🥗',
    bg: '#16a34a',
    gradient: 'radial-gradient(circle at 35% 35%, #dcfce7 0%, #86efac 50%, #22c55e 100%)',
    accentColor: '#22c55e',
    categoryLabelEn: 'Produce',
    categoryLabelTa: 'பொருள்',
  };
}

// Enhanced getProduceStyle with rich mapping and soft pastel card backgrounds
export function getProduceStyle(name: string): ProduceStyle {
  if (!name) return { icon: '🥗', bg: '#e8f5e9' };
  const lower = name.toLowerCase();

  // Fruits
  if (lower.includes('mango') || lower.includes('மாம்பழம்')) return { icon: '🥭', bg: '#fef3c7' };
  if (lower.includes('apple') || lower.includes('ஆப்பிள்')) return { icon: '🍎', bg: '#fee2e2' };
  if (lower.includes('banana') || lower.includes('வாழைப்பழம்')) return { icon: '🍌', bg: '#fef9c3' };
  if (lower.includes('orange') || lower.includes('ஆரஞ்சு')) return { icon: '🍊', bg: '#ffedd5' };
  if (lower.includes('grape') || lower.includes('திராட்சை')) return { icon: '🍇', bg: '#f3e8ff' };
  if (lower.includes('lemon') || lower.includes('lime') || lower.includes('limbu') || lower.includes('எலுமிச்சை')) return { icon: '🍋', bg: '#fef08a' };
  if (lower.includes('watermelon') || lower.includes('melon') || lower.includes('தர்பூசணி')) return { icon: '🍉', bg: '#fecdd3' };
  if (lower.includes('pineapple') || lower.includes('அன்னாசி')) return { icon: '🍍', bg: '#fef08a' };
  if (lower.includes('papaya') || lower.includes('பப்பாளி')) return { icon: '🍈', bg: '#fed7aa' };
  if (lower.includes('strawberry') || lower.includes('berry')) return { icon: '🍓', bg: '#ffe4e6' };
  if (lower.includes('coconut') || lower.includes('nalar') || lower.includes('தேங்காய்')) return { icon: '🥥', bg: '#f5ebe0' };

  // Fresh Vegetables & Alliums
  if (lower.includes('tomato') || lower.includes('takkali') || lower.includes('தக்காளி')) return { icon: '🍅', bg: '#fcd3b6' };
  if (lower.includes('onion') || lower.includes('shallot') || lower.includes('kando') || lower.includes('வெங்காயம்')) return { icon: '🧅', bg: '#f9c5d1' };
  if (lower.includes('potato') || lower.includes('batata') || lower.includes('உருளைக்கிழங்கு')) return { icon: '🥔', bg: '#f5ebe0' };
  if (lower.includes('brinjal') || lower.includes('eggplant') || lower.includes('aubergine') || lower.includes('vangi') || lower.includes('கத்திரிக்காய்')) return { icon: '🍆', bg: '#ede9fe' };
  if (lower.includes('carrot') || lower.includes('கேரட்')) return { icon: '🥕', bg: '#ffedd5' };
  if (lower.includes('drumstick') || lower.includes('sengu') || lower.includes('முருங்கைக்காய்')) return { icon: '🥢', bg: '#dcfce7' };
  if (lower.includes('spinach') || lower.includes('greens') || lower.includes('keerai') || lower.includes('bhajji') || lower.includes('கீரை')) return { icon: '🥬', bg: '#c7e9c0' };
  if (lower.includes('curry leaves') || lower.includes('curry leaf') || lower.includes('கறிவேப்பிலை') || lower.includes('கருவேப்பிலை')) return { icon: '🌿', bg: '#c8e6c9' };
  if (lower.includes('coriander') || lower.includes('kothmir') || lower.includes('mint') || lower.includes('pudina') || lower.includes('கொத்தமல்லி') || lower.includes('புதினா')) return { icon: '🌿', bg: '#dcfce7' };
  if (lower.includes('pepper') || lower.includes('capsicum') || lower.includes('குடைமிளகாய்')) return { icon: '🫑', bg: '#fed99b' };
  if (lower.includes('chilli') || lower.includes('chili') || lower.includes('mirsang') || lower.includes('மிளகாய்')) return { icon: '🌶️', bg: '#fee2e2' };
  if (lower.includes('garlic') || lower.includes('losan') || lower.includes('lasan') || lower.includes('பூண்டு')) return { icon: '🧄', bg: '#e0d2bc' };
  if (lower.includes('ginger') || lower.includes('alla') || lower.includes('இஞ்சி')) return { icon: '🫚', bg: '#fef08a' };
  if (lower.includes('cucumber') || lower.includes('வெள்ளரிக்காய்')) return { icon: '🥒', bg: '#dcfce7' };
  if (lower.includes('corn') || lower.includes('மக்காச்சோளம்')) return { icon: '🌽', bg: '#fef08a' };
  if (lower.includes('cabbage') || lower.includes('முட்டைக்கோஸ்')) return { icon: '🥬', bg: '#dcfce7' };
  if (lower.includes('cauliflower') || lower.includes('காலிஃப்ளவர்')) return { icon: '🥦', bg: '#f1f5f9' };
  if (lower.includes('broccoli')) return { icon: '🥦', bg: '#dcfce7' };
  if (lower.includes('mushroom') || lower.includes('காளான்')) return { icon: '🍄', bg: '#f3e8ff' };
  if (lower.includes('peas') || lower.includes('பட்டாணி')) return { icon: '🫛', bg: '#dcfce7' };
  if (lower.includes('okra') || lower.includes('ladyfinger') || lower.includes('வெண்டைக்காய்')) return { icon: '🥢', bg: '#dcfce7' };
  if (lower.includes('radish') || lower.includes('முள்ளங்கி')) return { icon: '🥕', bg: '#f8fafc' };
  if (lower.includes('beetroot') || lower.includes('பீட்ரூட்')) return { icon: '🥔', bg: '#ffe4e6' };
  if (lower.includes('pumpkin') || lower.includes('பூசணிக்காய்')) return { icon: '🎃', bg: '#ffedd5' };

  // Spices, Powders & Pantry
  if (lower.includes('turmeric') || lower.includes('manjal') || lower.includes('மஞ்சள்')) return { icon: '🟡', bg: '#fef3c7' };
  if (lower.includes('bhurko') || lower.includes('sambar powder') || lower.includes('rasam powder') || lower.includes('சாம்பார் பொடி')) return { icon: '🥣', bg: '#fed7aa' };
  if (lower.includes('hing') || lower.includes('asafoetida') || lower.includes('பெருங்காயம்')) return { icon: '🫙', bg: '#fef3c7' };
  if (lower.includes('mustard') || lower.includes('kadugu') || lower.includes('கடுகு')) return { icon: '✨', bg: '#f1f5f9' };
  if (lower.includes('cumin') || lower.includes('jeera') || lower.includes('சீரகம்')) return { icon: '✨', bg: '#ffedd5' };
  if (lower.includes('fenugreek') || lower.includes('methi') || lower.includes('வெந்தயம்')) return { icon: '✨', bg: '#fef3c7' };
  if (lower.includes('tamarind') || lower.includes('புளி')) return { icon: '🫙', bg: '#fed7aa' };

  // Dairy & Proteins
  if (lower.includes('paneer') || lower.includes('cheese') || lower.includes('பனீர்')) return { icon: '🧀', bg: '#b2dfdb' };
  if (lower.includes('yogurt') || lower.includes('curd') || lower.includes('dheim') || lower.includes('தயிர்')) return { icon: '🥣', bg: '#bbdefb' };
  if (lower.includes('milk') || lower.includes('doodh') || lower.includes('பால்')) return { icon: '🥛', bg: '#f0fdf4' };
  if (lower.includes('butter') || lower.includes('வெண்ணெய்')) return { icon: '🧈', bg: '#fff59d' };
  if (lower.includes('ghee') || lower.includes('நெய்')) return { icon: '🫗', bg: '#fef3c7' };
  if (lower.includes('egg') || lower.includes('anda') || lower.includes('முட்டை')) return { icon: '🥚', bg: '#ffecb3' };
  if (lower.includes('chicken') || lower.includes('koli') || lower.includes('kudi') || lower.includes('கோழி')) return { icon: '🍗', bg: '#fef3c7' };
  if (lower.includes('mutton') || lower.includes('lamb') || lower.includes('chaino') || lower.includes('mansa') || lower.includes('ஆட்டிறைச்சி')) return { icon: '🥩', bg: '#fee2e2' };
  if (lower.includes('fish') || lower.includes('meen') || lower.includes('koddi') || lower.includes('மீன்')) return { icon: '🐟', bg: '#e0f2fe' };
  if (lower.includes('prawn') || lower.includes('shrimp') || lower.includes('இறால்')) return { icon: '🦐', bg: '#ffedd5' };
  if (lower.includes('crab') || lower.includes('நண்டு')) return { icon: '🦀', bg: '#ffe4e6' };

  // Grains, Dals & Pantry
  if (lower.includes('rice') || lower.includes('wheat') || lower.includes('flour') || lower.includes('bhaath') || lower.includes('அரிசி') || lower.includes('மாவு')) return { icon: '🌾', bg: '#d7ccc8' };
  if (lower.includes('bean') || lower.includes('lentil') || lower.includes('dal') || lower.includes('bela') || lower.includes('toor') || lower.includes('chana') || lower.includes('urad') || lower.includes('பருப்பு')) return { icon: '🫘', bg: '#ffe0b2' };
  if (lower.includes('bread') || lower.includes('bun') || lower.includes('ரொட்டி')) return { icon: '🍞', bg: '#fef3c7' };
  if (lower.includes('oil') || lower.includes('எண்ணெய்')) return { icon: '🫗', bg: '#fef9c3' };
  if (lower.includes('salt') || lower.includes('lenu') || lower.includes('sugar') || lower.includes('உப்பு') || lower.includes('சர்க்கரை')) return { icon: '🧂', bg: '#f1f5f9' };

  return { icon: '🥗', bg: '#dcedc8' };
}
