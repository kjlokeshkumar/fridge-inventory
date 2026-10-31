import { createHash, timingSafeEqual } from 'node:crypto';

export function googleUsernameFromSubject(subject: string): string {
  const identifier = createHash('sha256').update(subject).digest('hex').slice(0, 32);
  return `google_${identifier}`;
}

export function matchesGoogleNonce(expected: string, actual: unknown): boolean {
  if (typeof actual !== 'string') return false;
  const expectedBuffer = Buffer.from(expected);
  const actualBuffer = Buffer.from(actual);
  return expectedBuffer.length === actualBuffer.length &&
    timingSafeEqual(expectedBuffer, actualBuffer);
}

export function isGoogleAdminEmail(email: string, configuredEmails: string | undefined): boolean {
  const allowedEmails = new Set(
    (configuredEmails || '')
      .split(',')
      .map((value) => value.trim().toLowerCase())
      .filter(Boolean),
  );
  return allowedEmails.has(email.toLowerCase());
}
