import assert from 'node:assert/strict';
import test from 'node:test';
import {
  AUTH_SESSION_MAX_AGE_SECONDS,
  createSessionToken,
  verifySessionToken,
} from '../src/lib/session-token.ts';

const secret = 'a-test-session-secret-with-more-than-32-bytes';

test('validates signed sessions and their expiry', () => {
  const now = 1_800_000_000_000;
  const token = createSessionToken(42, secret, now);

  assert.deepEqual(verifySessionToken(token, secret, now), {
    userId: 42,
    expiresAt: now + AUTH_SESSION_MAX_AGE_SECONDS * 1000,
  });
  assert.equal(verifySessionToken(token, secret, now + AUTH_SESSION_MAX_AGE_SECONDS * 1000), null);
});

test('rejects tampered sessions and sessions signed with another secret', () => {
  const token = createSessionToken(42, secret, 1_800_000_000_000);
  const [payload, signature] = token.split('.');

  assert.equal(verifySessionToken(`${payload}.A${signature.slice(1)}`, secret), null);
  assert.equal(verifySessionToken(token, `${secret}-other`), null);
});

test('rejects invalid account identifiers', () => {
  const token = createSessionToken(0, secret, 1_800_000_000_000);
  assert.equal(verifySessionToken(token, secret, 1_800_000_000_000), null);
});
