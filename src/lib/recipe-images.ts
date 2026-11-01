/**
 * Authentic recipe picture lookup.
 * Prioritizes high-resolution YouTube video thumbnail if present,
 * and falls back to curated high-quality food photography from Unsplash.
 */
export function getRecipeImageUrl(recipe?: {
  title?: string;
  name?: string;
  youtubeUrl?: string;
  category?: string;
  id?: string;
}): string {
  if (!recipe) {
    return 'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?w=600&auto=format&fit=crop&q=80';
  }

  // 1. YouTube direct video thumbnail
  if (recipe.youtubeUrl) {
    const match = recipe.youtubeUrl.match(/(?:v=|youtu\.be\/|embed\/)([a-zA-Z0-9_-]{11})/);
    if (match && match[1]) {
      return `https://i.ytimg.com/vi/${match[1]}/hqdefault.jpg`;
    }
  }

  // 2. Curated South Indian / Sourashtra authentic food photography (Unsplash)
  const title = (recipe.title || recipe.name || '').toLowerCase();
  const category = (recipe.category || '').toLowerCase();

  if (title.includes('dosa') || title.includes('diido')) {
    return 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&auto=format&fit=crop&q=80';
  }
  if (title.includes('idli') || title.includes('phalar')) {
    return 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=80';
  }
  if (title.includes('biryani') || title.includes('bhaath') || title.includes('pulao') || title.includes('rice')) {
    return 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=80';
  }
  if (title.includes('chicken') || title.includes('koli')) {
    return 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&auto=format&fit=crop&q=80';
  }
  if (title.includes('mutton') || title.includes('sukka') || title.includes('chaino')) {
    return 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80';
  }
  if (title.includes('fish') || title.includes('meen') || title.includes('machhi')) {
    return 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&auto=format&fit=crop&q=80';
  }
  if (title.includes('sambar') || title.includes('dal') || title.includes('paruppu') || category.includes('sambar')) {
    return 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop&q=80';
  }
  if (title.includes('charu') || title.includes('rasam') || title.includes('pilchar')) {
    return 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=80';
  }
  if (title.includes('paneer') || title.includes('curry') || title.includes('gravy') || title.includes('kolkar') || title.includes('ounty') || title.includes('ambat')) {
    return 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&auto=format&fit=crop&q=80';
  }
  if (title.includes('pongal') || title.includes('upma') || title.includes('khichdi')) {
    return 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=80';
  }
  if (title.includes('chutney') || title.includes('losto') || title.includes('polte') || title.includes('budith')) {
    return 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop&q=80';
  }

  // Authentic culinary presentation fallback
  return 'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?w=600&auto=format&fit=crop&q=80';
}
