import assert from 'node:assert/strict';
import test from 'node:test';
import {
  isInventoryItemExpired,
  isInventoryItemExpiringSoon,
} from '../src/lib/inventory-dates.ts';

test('date-only expiry remains valid through the local expiration day', () => {
  const now = new Date(2026, 9, 30, 12);

  assert.equal(isInventoryItemExpired('2026-10-30', now), false);
  assert.equal(isInventoryItemExpiringSoon('2026-10-30', now), true);
});

test('date-only expiry is expired starting the following local day', () => {
  const now = new Date(2026, 9, 31, 12);

  assert.equal(isInventoryItemExpired('2026-10-30', now), true);
});

test('handles invalid and missing expiration dates', () => {
  const now = new Date(2026, 9, 30, 12);

  assert.equal(isInventoryItemExpired('2026-02-30', now), false);
  assert.equal(isInventoryItemExpiringSoon('not-a-date', now), false);
  assert.equal(isInventoryItemExpired(null, now), false);
});
