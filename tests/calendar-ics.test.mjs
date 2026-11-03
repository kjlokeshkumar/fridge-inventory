import test from 'node:test';
import assert from 'node:assert/strict';

test('Calendar ICS API - single day GET returns valid RFC 5545 calendar', async () => {
  const url = 'http://localhost:3000/api/calendar/ics?type=day&isoDate=2026-11-04&dayName=Wednesday&breakfast=Hot%20Phalar&b_side=Sambar';
  const res = await fetch(url);
  assert.equal(res.status, 200);
  assert.match(res.headers.get('content-type') || '', /text\/calendar/);
  assert.match(res.headers.get('content-disposition') || '', /attachment; filename="Sourashtra_Menu_2026-11-04\.ics"/);

  const text = await res.text();
  assert.match(text, /BEGIN:VCALENDAR/);
  assert.match(text, /VERSION:2\.0/);
  assert.match(text, /METHOD:PUBLISH/);
  assert.match(text, /BEGIN:VEVENT/);
  assert.match(text, /SUMMARY:🌅 Breakfast: Hot Phalar \+ Sambar/);
  assert.match(text, /DTSTART:20261104T080000/);
  assert.match(text, /END:VEVENT/);
  assert.match(text, /END:VCALENDAR/);
});

test('Calendar ICS API - 7-day week GET returns full weekly plan', async () => {
  const url = 'http://localhost:3000/api/calendar/ics?type=week&date=2026-11-04';
  const res = await fetch(url);
  assert.equal(res.status, 200);
  assert.match(res.headers.get('content-type') || '', /text\/calendar/);
  assert.match(res.headers.get('content-disposition') || '', /attachment; filename="Madurai_Sourashtra_7Day_Meal_Plan\.ics"/);

  const text = await res.text();
  assert.match(text, /BEGIN:VCALENDAR/);
  assert.match(text, /VERSION:2\.0/);
  // Count VEVENT occurrences across 7 days
  const eventMatches = text.match(/BEGIN:VEVENT/g);
  assert.ok(eventMatches && eventMatches.length >= 7, 'Should contain at least 7 events');
  assert.match(text, /END:VCALENDAR/);
});

test('Calendar ICS API - POST supports custom weekly payloads', async () => {
  const customPlan = [
    {
      dayName: 'Monday',
      isoDate: '2026-11-09',
      breakfast: { mainDishTitle: 'Loni Appam', pairedWithTitle: 'Kandha Chutney' },
      lunch: { mainDishTitle: 'Saadu + Losan Kolkar', pairedWithTitle: 'Joman Pilchar' },
      dinner: { mainDishTitle: 'Phulka', pairedWithTitle: 'Sengu Poriyal' }
    }
  ];

  const res = await fetch('http://localhost:3000/api/calendar/ics', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type: 'week', days: customPlan })
  });

  assert.equal(res.status, 200);
  const text = await res.text();
  assert.match(text, /Loni Appam/);
  assert.match(text, /Losan Kolkar/);
  assert.match(text, /Phulka/);
});
