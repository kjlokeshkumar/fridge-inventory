function parseExpirationDate(dateString: string): Date | null {
  const dateOnly = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateString);
  if (!dateOnly) {
    const parsed = new Date(dateString);
    return Number.isNaN(parsed.getTime()) ? null : parsed;
  }

  const year = Number(dateOnly[1]);
  const month = Number(dateOnly[2]);
  const day = Number(dateOnly[3]);
  const parsed = new Date(year, month - 1, day);
  if (
    parsed.getFullYear() !== year ||
    parsed.getMonth() !== month - 1 ||
    parsed.getDate() !== day
  ) {
    return null;
  }
  return parsed;
}

export function isInventoryItemExpired(dateString: string | null, now = new Date()): boolean {
  if (!dateString) return false;
  const expirationDate = parseExpirationDate(dateString);
  if (!expirationDate) return false;

  const today = new Date(now);
  today.setHours(0, 0, 0, 0);
  return expirationDate < today;
}

export function isInventoryItemExpiringSoon(dateString: string | null, now = new Date()): boolean {
  if (!dateString) return false;
  const expirationDate = parseExpirationDate(dateString);
  if (!expirationDate) return false;

  const today = new Date(now);
  today.setHours(0, 0, 0, 0);
  const diffDays = Math.ceil((expirationDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  return diffDays >= 0 && diffDays <= 3;
}
