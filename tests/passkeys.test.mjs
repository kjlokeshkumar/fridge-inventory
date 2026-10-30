import assert from 'node:assert/strict';
import test from 'node:test';
import { hashPasskey, verifyPasskey } from '../src/lib/passkeys.ts';

test('hashes passkeys and verifies the matching value', async () => {
  const hash = await hashPasskey('test-passkey');

  assert.notEqual(hash, 'test-passkey');
  assert.equal((await verifyPasskey('test-passkey', hash)).valid, true);
  assert.equal((await verifyPasskey('different-passkey', hash)).valid, false);
});

test('flags legacy plaintext passkeys for migration after successful login', async () => {
  assert.deepEqual(await verifyPasskey('legacy', 'legacy'), {
    valid: true,
    needsRehash: true,
  });
  assert.deepEqual(await verifyPasskey('incorrect', 'legacy'), {
    valid: false,
    needsRehash: false,
  });
});

test('rejects malformed or unsupported hash records', async () => {
  assert.equal((await verifyPasskey('passkey', 'scrypt$v2$invalid$invalid')).valid, false);
  assert.equal((await verifyPasskey('passkey', 'scrypt$v1$short$invalid')).valid, false);
});
