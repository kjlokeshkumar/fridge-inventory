"use client";

import { useEffect, useState } from 'react';
import { calculateWeeklyShopping, WeeklyShoppingAnalysis, WeeklyShoppingDay } from '@/lib/weekly-shopping';
import { formatItemName, formatDishTitle, toTamilDayName, UI_TRANSLATIONS } from '@/lib/translations';

interface DayMealPlan {
  dayName: string;
  dateLabel: string;
  isoDate?: string;
  breakfast?: { mainDishTitle: string; pairedWithTitle?: string };
  lunch?: { mainDishTitle: string; pairedWithTitle?: string };
  dinner?: { mainDishTitle: string; pairedWithTitle?: string };
}

export default function RecipesPrintPage() {
  const [weeklyPlan, setWeeklyPlan] = useState<DayMealPlan[]>([]);
  const [shoppingAnalysis, setShoppingAnalysis] = useState<WeeklyShoppingAnalysis | null>(null);
  const [language, setLanguage] = useState('English');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const lang = localStorage.getItem('appLanguage') || 'English';
    setLanguage(lang);

    const saved = localStorage.getItem('pinnedSourashtraWeeklyCombosV3');
    let plan: DayMealPlan[] = [];
    if (saved) {
      try {
        plan = JSON.parse(saved);
      } catch (_) {}
    }
    if (!plan || plan.length === 0) {
      const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      plan = days.map((d, i) => ({
        dayName: d,
        dateLabel: `Day ${i + 1}`,
        breakfast: { mainDishTitle: 'Phalar / Idli & Medhu Vadai', pairedWithTitle: 'Sourashtra Tiffin Sambar & Chenna Bhurko' },
        lunch: { mainDishTitle: 'Steamed Rice + Losan Kolkar', pairedWithTitle: 'Joman Pilchar + Kachana Bela Kutkiri' },
        dinner: { mainDishTitle: 'Soft Phulka / Chapathi & Sengu Poriyal', pairedWithTitle: 'Tomato Thokku & Thanni Chutney' }
      }));
    }
    setWeeklyPlan(plan);

    if (plan && plan.length > 0) {
      const analysis = calculateWeeklyShopping(plan as unknown as WeeklyShoppingDay[], []);
      setShoppingAnalysis(analysis);
    }
  }, []);

  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.English;

  const handleClose = () => {
    if (typeof window !== 'undefined') {
      if (window.history.length > 1) {
        window.history.back();
      } else {
        window.location.href = '/recipes';
      }
    }
  };

  const handlePrint = () => {
    // 1. Check for native Android print bridge (inside native app wrapper)
    const bridge = typeof window !== 'undefined'
      ? (window as unknown as { AndroidPrintBridge?: { print?: (n: string) => boolean } })?.AndroidPrintBridge
      : undefined;

    if (bridge?.print) {
      try {
        bridge.print('Sourashtra Chef 7-Day Plan');
        return;
      } catch (_) {}
    }

    // 2. Standard browser print (invokes native Android Print Spooler with 'Save as PDF' on Chrome/Samsung Internet, and desktop print dialog)
    try {
      window.print();
    } catch (_) {
      handleShare();
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.search.includes('auto=1') && weeklyPlan.length > 0) {
      const timer = setTimeout(() => {
        try {
          window.print();
        } catch (_) {}
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [weeklyPlan]);

  const handleShare = async () => {
    const lines = [
      `🍲 ${t.printPlanHeader || '7-Day Sourashtra Meal Plan'}`,
      '===================================='
    ];
    for (const d of weeklyPlan) {
      lines.push(`\n🗓️ ${d.dayName} (${d.dateLabel})`);
      if (d.breakfast) lines.push(`  🌅 Breakfast: ${d.breakfast.mainDishTitle} + ${d.breakfast.pairedWithTitle || ''}`);
      if (d.lunch) lines.push(`  ☀️ Lunch: ${d.lunch.mainDishTitle} + ${d.lunch.pairedWithTitle || ''}`);
      if (d.dinner) lines.push(`  🌙 Dinner: ${d.dinner.mainDishTitle} + ${d.dinner.pairedWithTitle || ''}`);
    }
    if (shoppingAnalysis && shoppingAnalysis.toPurchase.length > 0) {
      lines.push('\n🛒 WEEKLY GROCERY CHECKLIST:');
      lines.push('---------------------------');
      for (const item of shoppingAnalysis.toPurchase) {
        lines.push(`  ☐ ${item.item}${item.quantity ? ` (${item.quantity})` : ''}`);
      }
    }
    const fullText = lines.join('\n');

    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: t.printPlanHeader || '7-Day Sourashtra Meal Plan',
          text: fullText
        });
        return;
      } catch (_) {}
    }

    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      await navigator.clipboard.writeText(fullText);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div style={{ maxWidth: '850px', margin: '0 auto', padding: '20px', fontFamily: 'system-ui, -apple-system, sans-serif', color: '#111827', background: '#ffffff' }}>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: #ffffff !important; color: #000000 !important; }
        }
        table { width: 100%; border-collapse: collapse; margin-top: 16px; font-size: 13px; }
        th, td { border: 1px solid #d1d5db; padding: 10px; vertical-align: top; text-align: left; }
        th { background: #f3f4f6; font-weight: 700; color: #1f2937; }
        .grocery-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 8px; margin-top: 12px; }
        .grocery-item { font-size: 13px; display: flex; align-items: baseline; gap: 6px; }
        .btn { padding: 10px 18px; border-radius: 8px; font-weight: 600; cursor: pointer; border: none; font-size: 14px; }
        .btn-primary { background: #0284c7; color: #ffffff; }
        .btn-secondary { background: #f3f4f6; color: #1f2937; border: 1px solid #d1d5db; }
      `}</style>

      {/* Floating Action Header (Hidden in Print) */}
      <div className="no-print" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', background: '#f8fafc', padding: '14px 18px', borderRadius: '12px', marginBottom: '20px', border: '1px solid #e2e8f0' }}>
        <div>
          <h2 style={{ margin: 0, fontSize: '18px', fontWeight: 700, color: '#0f172a' }}>🖨️ {t.printPlanHeader || '7-Day Sourashtra Meal Plan & Shopping List'}</h2>
          <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#64748b' }}>Ink-friendly print layout. Use the buttons below or browser menu to Print / Save as PDF.</p>
        </div>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button type="button" className="btn btn-secondary" onClick={handleClose}>
            ← Back to Meal Planner
          </button>
          <button type="button" className="btn btn-primary" onClick={handlePrint}>
            🖨️ Print / Save as PDF
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              const htmlContent = document.documentElement.outerHTML;
              const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = `Sourashtra_7Day_Meal_Plan_${new Date().toISOString().slice(0, 10)}.html`;
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
              setTimeout(() => URL.revokeObjectURL(url), 10000);
            }}
          >
            📥 Save Offline Plan (.html)
          </button>
          <button type="button" className="btn btn-secondary" onClick={handleShare}>
            {copied ? '✓ Copied!' : '📋 Copy Text Plan'}
          </button>
        </div>
      </div>

      {/* Printable Sheet */}
      <div style={{ borderBottom: '2px solid #0f172a', paddingBottom: '12px', marginBottom: '16px' }}>
        <h1 style={{ margin: 0, fontSize: '22px', fontWeight: 800 }}>🍲 {t.printPlanHeader || '7-Day Sourashtra Meal Plan'}</h1>
        <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#4b5563' }}>Traditional Madurai Sourashtra Breakfast, Lunch & Dinner with Authentic Paired Combinations</p>
      </div>

      <table>
        <thead>
          <tr>
            <th style={{ width: '16%' }}>{t.printDayCol || 'Day'}</th>
            <th style={{ width: '28%' }}>🌅 {t.breakfast}</th>
            <th style={{ width: '28%' }}>☀️ {t.lunch}</th>
            <th style={{ width: '28%' }}>🌙 {t.dinner}</th>
          </tr>
        </thead>
        <tbody>
          {weeklyPlan.map((d) => (
            <tr key={d.dayName}>
              <td style={{ background: '#f9fafb', fontWeight: 600 }}>
                <div>{language === 'Tamil' ? toTamilDayName(d.dayName.split(' ')[0]) : d.dayName.split(' ')[0]}</div>
                <div style={{ fontSize: '11px', color: '#6b7280', fontWeight: 'normal' }}>{d.dateLabel.split(',')[0]}</div>
              </td>
              <td>
                <div style={{ fontWeight: 600 }}>🍽️ {formatDishTitle(d.breakfast?.mainDishTitle || '', language)}</div>
                {d.breakfast?.pairedWithTitle && (
                  <div style={{ fontSize: '12px', color: '#0369a1', marginTop: '2px' }}>+ {formatDishTitle(d.breakfast.pairedWithTitle, language)}</div>
                )}
              </td>
              <td>
                <div style={{ fontWeight: 600 }}>🍽️ {formatDishTitle(d.lunch?.mainDishTitle || '', language)}</div>
                {d.lunch?.pairedWithTitle && (
                  <div style={{ fontSize: '12px', color: '#0369a1', marginTop: '2px' }}>+ {formatDishTitle(d.lunch.pairedWithTitle, language)}</div>
                )}
              </td>
              <td>
                <div style={{ fontWeight: 600 }}>🍽️ {formatDishTitle(d.dinner?.mainDishTitle || '', language)}</div>
                {d.dinner?.pairedWithTitle && (
                  <div style={{ fontSize: '12px', color: '#0369a1', marginTop: '2px' }}>+ {formatDishTitle(d.dinner.pairedWithTitle, language)}</div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {shoppingAnalysis && shoppingAnalysis.toPurchase.length > 0 && (
        <div style={{ marginTop: '24px', borderTop: '2px dashed #d1d5db', paddingTop: '16px' }}>
          <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 700 }}>🛒 {t.printGroceryChecklist || t.weeklyShoppingList} ({shoppingAnalysis.toPurchase.length} items)</h3>
          <div className="grocery-grid">
            {shoppingAnalysis.toPurchase.map((item, idx) => (
              <div key={idx} className="grocery-item">
                <span style={{ color: '#9ca3af' }}>☐</span>
                <span style={{ fontWeight: 500 }}>{formatItemName(item.item, language)}</span>
                {item.quantity && <span style={{ color: '#6b7280', fontSize: '12px' }}>({item.quantity})</span>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
