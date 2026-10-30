import { createHmac, timingSafeEqual } from 'node:crypto';

export const AUTH_COOKIE_NAME = 'fridge_session';
export const AUTH_SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7;

interface SessionPayload {
  userId: number;
  expiresAt: number;
}

function signature(payload: string, secret: string): Buffer {
  return createHmac('sha256', secret).update(payload).digest();
}

export function createSessionToken(
  userId: number,
  secret: string,
  now = Date.now(),
): string {
  const payload = Buffer.from(JSON.stringify({
    userId,
    expiresAt: now + AUTH_SESSION_MAX_AGE_SECONDS * 1000,
  })).toString('base64url');
  return `${payload}.${signature(payload, secret).toString('base64url')}`;
}

export function verifySessionToken(
  token: string,
  secret: string,
  now = Date.now(),
): SessionPayload | null {
  const [encodedPayload, encodedSignature, extra] = token.split('.');
  if (!encodedPayload || !encodedSignature || extra) return null;

  let actualSignature: Buffer;
  let payload: SessionPayload;
  try {
    actualSignature = Buffer.from(encodedSignature, 'base64url');
    const expectedSignature = signature(encodedPayload, secret);
    if (
      actualSignature.length !== expectedSignature.length ||
      !timingSafeEqual(actualSignature, expectedSignature)
    ) return null;

    const parsed: unknown = JSON.parse(Buffer.from(encodedPayload, 'base64url').toString('utf8'));
    if (
      typeof parsed !== 'object' ||
      parsed === null ||
      !Number.isSafeInteger((parsed as SessionPayload).userId) ||
      (parsed as SessionPayload).userId <= 0 ||
      !Number.isSafeInteger((parsed as SessionPayload).expiresAt)
    ) return null;
    payload = parsed as SessionPayload;
  } catch {
    return null;
  }

  return payload.expiresAt > now ? payload : null;
}
