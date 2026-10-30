import { randomBytes, scrypt as scryptCallback, timingSafeEqual } from 'node:crypto';
import { promisify } from 'node:util';

const scrypt = promisify(scryptCallback);
const HASH_PREFIX = 'scrypt$v1$';
const SALT_BYTES = 16;
const HASH_BYTES = 64;

export async function hashPasskey(passkey: string): Promise<string> {
  const salt = randomBytes(SALT_BYTES);
  const derivedKey = await scrypt(passkey, salt, HASH_BYTES) as Buffer;

  return `${HASH_PREFIX}${salt.toString('base64url')}$${derivedKey.toString('base64url')}`;
}

export async function verifyPasskey(
  passkey: string,
  storedPasskey: string,
): Promise<{ valid: boolean; needsRehash: boolean }> {
  if (storedPasskey.startsWith(HASH_PREFIX)) {
    const [algorithm, version, encodedSalt, encodedHash, extra] = storedPasskey.split('$');
    if (algorithm !== 'scrypt' || version !== 'v1' || !encodedSalt || !encodedHash || extra) {
      return { valid: false, needsRehash: false };
    }

    const salt = Buffer.from(encodedSalt, 'base64url');
    const expectedHash = Buffer.from(encodedHash, 'base64url');
    if (salt.length !== SALT_BYTES || expectedHash.length !== HASH_BYTES) {
      return { valid: false, needsRehash: false };
    }

    const actualHash = await scrypt(passkey, salt, HASH_BYTES) as Buffer;
    return {
      valid: timingSafeEqual(actualHash, expectedHash),
      needsRehash: false,
    };
  }

  if (storedPasskey.startsWith('scrypt$')) {
    return { valid: false, needsRehash: false };
  }

  const provided = Buffer.from(passkey);
  const legacy = Buffer.from(storedPasskey);
  const valid = provided.length === legacy.length && timingSafeEqual(provided, legacy);

  return { valid, needsRehash: valid };
}
