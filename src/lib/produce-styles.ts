export interface ProduceStyle {
  icon: string;
  bg: string;
}

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

  // Fresh Vegetables
  if (lower.includes('tomato') || lower.includes('takkali') || lower.includes('தக்காளி')) return { icon: '🍅', bg: '#fcd3b6' };
  if (lower.includes('onion') || lower.includes('shallot') || lower.includes('kando') || lower.includes('வெங்காயம்')) return { icon: '🧅', bg: '#f9c5d1' };
  if (lower.includes('potato') || lower.includes('batata') || lower.includes('உருளைக்கிழங்கு')) return { icon: '🥔', bg: '#f5ebe0' };
  if (lower.includes('brinjal') || lower.includes('eggplant') || lower.includes('aubergine') || lower.includes('vangi') || lower.includes('கத்திரிக்காய்')) return { icon: '🍆', bg: '#ede9fe' };
  if (lower.includes('carrot') || lower.includes('கேரட்')) return { icon: '🥕', bg: '#ffedd5' };
  if (lower.includes('drumstick') || lower.includes('sengu') || lower.includes('முருங்கைக்காய்')) return { icon: '🥢', bg: '#dcfce7' };
  if (lower.includes('spinach') || lower.includes('greens') || lower.includes('keerai') || lower.includes('bhajji') || lower.includes('கீரை')) return { icon: '🥬', bg: '#c7e9c0' };
  if (lower.includes('coriander') || lower.includes('kothmir') || lower.includes('mint') || lower.includes('pudina') || lower.includes('curry leaves') || lower.includes('கொத்தமல்லி') || lower.includes('புதினா') || lower.includes('கறிவேப்பிலை')) return { icon: '🌿', bg: '#c8e6c9' };
  if (lower.includes('pepper') || lower.includes('capsicum') || lower.includes('குடைமிளகாய்')) return { icon: '🫑', bg: '#fed99b' };
  if (lower.includes('chilli') || lower.includes('chili') || lower.includes('mirsang') || lower.includes('மிளகாய்')) return { icon: '🌶️', bg: '#fee2e2' };
  if (lower.includes('garlic') || lower.includes('losan') || lower.includes('lasan') || lower.includes('ginger') || lower.includes('alla') || lower.includes('பூண்டு') || lower.includes('இஞ்சி')) return { icon: '🧄', bg: '#e0d2bc' };
  if (lower.includes('cucumber') || lower.includes('வெள்ளரிக்காய்')) return { icon: '🥒', bg: '#dcfce7' };
  if (lower.includes('corn') || lower.includes('மக்காச்சோளம்')) return { icon: '🌽', bg: '#fef08a' };
  if (lower.includes('cabbage') || lower.includes('முட்டைக்கோஸ்')) return { icon: '🥬', bg: '#dcfce7' };
  if (lower.includes('cauliflower') || lower.includes('காலிஃப்ளவர்')) return { icon: '🥦', bg: '#f1f5f9' };
  if (lower.includes('broccoli')) return { icon: '🥦', bg: '#dcfce7' };
  if (lower.includes('mushroom') || lower.includes('காளான்')) return { icon: '🍄', bg: '#f3e8ff' };
  if (lower.includes('peas') || lower.includes('பட்டாணி')) return { icon: '🫛', bg: '#dcfce7' };
  if (lower.includes('okra') || lower.includes('ladyfinger') || lower.includes('வெண்டைக்காய்')) return { icon: '🥢', bg: '#dcfce7' };

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
