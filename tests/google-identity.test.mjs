import test from 'node:test';
import assert from 'node:assert/strict';
import {
  googleUsernameFromSubject,
  isGoogleAdminEmail,
  matchesGoogleNonce,
} from '../src/lib/google-identity.ts';

test('Google usernames are stable and do not expose the provider subject', () => {
  const first = googleUsernameFromSubject('google-subject-123');
  assert.equal(first, googleUsernameFromSubject('google-subject-123'));
  assert.match(first, /^google_[a-f0-9]{32}$/);
  assert.notEqual(first, googleUsernameFromSubject('different-subject'));
});

test('Google nonces must match exactly', () => {
  assert.equal(matchesGoogleNonce('nonce-value', 'nonce-value'), true);
  assert.equal(matchesGoogleNonce('nonce-value', 'another-value'), false);
  assert.equal(matchesGoogleNonce('nonce-value', undefined), false);
});

test('Google admin email allowlist is case-insensitive', () => {
  assert.equal(isGoogleAdminEmail('Admin@Example.com', 'other@example.com, admin@example.com'), true);
  assert.equal(isGoogleAdminEmail('user@example.com', 'admin@example.com'), false);
  assert.equal(isGoogleAdminEmail('admin@example.com', undefined), false);
});
