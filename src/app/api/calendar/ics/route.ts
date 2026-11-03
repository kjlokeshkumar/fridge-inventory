import { NextRequest, NextResponse } from 'next/server';

interface MealSlotPayload {
  mainDishTitle?: string;
  pairedWithTitle?: string;
  pairingTraditionNote?: string;
  youtubeUrl?: string;
}

interface DayPayload {
  isoDate?: string;
  dayName?: string;
  breakfast?: MealSlotPayload;
  lunch?: MealSlotPayload;
  dinner?: MealSlotPayload;
}

function escapeIcsText(str: string): string {
  if (!str) return '';
  return str
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\r?\n/g, '\\n');
}

function formatIcsDate(isoDate: string, timeStr: string): string {
  const clean = (isoDate || '').replace(/-/g, '');
  if (!clean || clean.length < 8) {
    const today = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    return `${today}T${timeStr}`;
  }
  return `${clean}T${timeStr}`;
}

function generateIcs(days: DayPayload[], calendarTitle = 'Sourashtra Chef Meal Planner'): string {
  const now = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  const lines: string[] = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Sourashtra Chef//Meal Planner//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    `X-WR-CALNAME:${calendarTitle}`
  ];

  for (let dIdx = 0; dIdx < days.length; dIdx++) {
    const day = days[dIdx];
    const isoDate = day.isoDate || new Date(Date.now() + dIdx * 86400000).toISOString().slice(0, 10);
    const slots: { label: string; timeStart: string; timeEnd: string; meal?: MealSlotPayload }[] = [
      { label: '🌅 Breakfast', timeStart: '080000', timeEnd: '090000', meal: day.breakfast },
      { label: '☀️ Lunch', timeStart: '130000', timeEnd: '140000', meal: day.lunch },
      { label: '🌙 Dinner', timeStart: '193000', timeEnd: '203000', meal: day.dinner }
    ];

    for (const slot of slots) {
      if (!slot.meal || (!slot.meal.mainDishTitle && !slot.meal.pairedWithTitle)) continue;
      const main = slot.meal.mainDishTitle || 'Sourashtra Meal';
      const side = slot.meal.pairedWithTitle ? ` + ${slot.meal.pairedWithTitle}` : '';
      const summary = `${slot.label}: ${main}${side}`;

      const descParts: string[] = [
        `Main Dish: ${main}`,
        slot.meal.pairedWithTitle ? `Paired With: ${slot.meal.pairedWithTitle}` : '',
        slot.meal.pairingTraditionNote ? `Tradition / Pairing: ${slot.meal.pairingTraditionNote}` : '',
        slot.meal.youtubeUrl ? `YouTube Recipe: ${slot.meal.youtubeUrl}` : ''
      ].filter(Boolean);

      const uid = `sourashtra-chef-${isoDate}-${slot.timeStart}-${dIdx}@sourashtrachef.app`;

      lines.push(
        'BEGIN:VEVENT',
        `UID:${uid}`,
        `DTSTAMP:${now}`,
        `DTSTART:${formatIcsDate(isoDate, slot.timeStart)}`,
        `DTEND:${formatIcsDate(isoDate, slot.timeEnd)}`,
        `SUMMARY:${escapeIcsText(summary)}`,
        `DESCRIPTION:${escapeIcsText(descParts.join('\n'))}`,
        'STATUS:CONFIRMED',
        'END:VEVENT'
      );
    }
  }

  lines.push('END:VCALENDAR');
  return lines.join('\r\n');
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type') || 'day';

  if (type === 'week') {
    let days: DayPayload[] = [];
    const planParam = searchParams.get('plan');
    if (planParam) {
      try {
        const decoded = Buffer.from(planParam, 'base64').toString('utf-8');
        days = JSON.parse(decoded);
      } catch {
        days = [];
      }
    }

    if (!Array.isArray(days) || days.length === 0) {
      // Default 7-day template starting from base date
      const baseDateStr = searchParams.get('date') || new Date().toISOString().slice(0, 10);
      const baseTime = new Date(baseDateStr).getTime() || Date.now();
      const defaultDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      days = defaultDays.map((dName, i) => {
        const dayIso = new Date(baseTime + i * 86400000).toISOString().slice(0, 10);
        return {
          dayName: dName,
          isoDate: dayIso,
          breakfast: {
            mainDishTitle: 'Phalar / Idli & Medhu Vadai',
            pairedWithTitle: 'Sourashtra Tiffin Sambar & Chenna Bhurko'
          },
          lunch: {
            mainDishTitle: 'Steamed Rice + Losan Kolkar (Garlic Sesame Tamarind Gravy)',
            pairedWithTitle: 'Joman Pilchar + Kachana Bela Kutkiri'
          },
          dinner: {
            mainDishTitle: 'Soft Phulka / Chapathi & Sengu Poriyal',
            pairedWithTitle: 'Tomato Thokku & Thanni Chutney'
          }
        };
      });
    }

    const icsString = generateIcs(days, 'Sourashtra Chef 7-Day Meal Plan');
    const filename = 'Madurai_Sourashtra_7Day_Meal_Plan.ics';

    return new NextResponse(icsString, {
      status: 200,
      headers: {
        'Content-Type': 'text/calendar; charset=utf-8',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });
  }

  // Single Day
  const isoDate = searchParams.get('isoDate') || searchParams.get('date') || new Date().toISOString().slice(0, 10);
  const dayName = searchParams.get('dayName') || 'Today';

  const breakfastMain = searchParams.get('breakfast') || '';
  const breakfastSide = searchParams.get('b_side') || '';
  const breakfastNote = searchParams.get('b_note') || '';

  const lunchMain = searchParams.get('lunch') || '';
  const lunchSide = searchParams.get('l_side') || '';
  const lunchNote = searchParams.get('l_note') || '';

  const dinnerMain = searchParams.get('dinner') || '';
  const dinnerSide = searchParams.get('d_side') || '';
  const dinnerNote = searchParams.get('d_note') || '';

  const day: DayPayload = {
    isoDate,
    dayName,
    breakfast: breakfastMain ? { mainDishTitle: breakfastMain, pairedWithTitle: breakfastSide, pairingTraditionNote: breakfastNote } : undefined,
    lunch: lunchMain ? { mainDishTitle: lunchMain, pairedWithTitle: lunchSide, pairingTraditionNote: lunchNote } : undefined,
    dinner: dinnerMain ? { mainDishTitle: dinnerMain, pairedWithTitle: dinnerSide, pairingTraditionNote: dinnerNote } : undefined
  };

  const icsString = generateIcs([day], `Sourashtra Menu (${dayName})`);
  const filename = `Sourashtra_Menu_${isoDate || dayName}.ics`;

  return new NextResponse(icsString, {
    status: 200,
    headers: {
      'Content-Type': 'text/calendar; charset=utf-8',
      'Content-Disposition': `attachment; filename="${filename}"`,
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    }
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const type = body.type || 'day';
    let days: DayPayload[] = [];
    let filename = 'Sourashtra_Meal_Plan.ics';

    if (type === 'week' && Array.isArray(body.days)) {
      days = body.days;
      filename = 'Madurai_Sourashtra_7Day_Meal_Plan.ics';
    } else if (body.day) {
      days = [body.day];
      filename = `Sourashtra_Menu_${body.day.isoDate || 'Day'}.ics`;
    }

    const icsString = generateIcs(days, type === 'week' ? 'Sourashtra Chef 7-Day Meal Plan' : 'Sourashtra Menu');

    return new NextResponse(icsString, {
      status: 200,
      headers: {
        'Content-Type': 'text/calendar; charset=utf-8',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });
  } catch {
    return NextResponse.json({ error: 'Failed to generate ICS' }, { status: 400 });
  }
}
