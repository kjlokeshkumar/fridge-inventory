---
name: sourashtra-chef-dev
description: >-
  Architecture, UI design system, culinary pairing rules, authentication, weekly
  shopping, and Android Capacitor Play release workflow for Sourashtra Chef
  (Fridge AI) in c:\Users\reksl\.gemini\antigravity\scratch\fridge-inventory.
  Activate whenever working on Sourashtra Chef / Fridge AI UI, recipes, 7-day
  meal planner, inventory, shopping list, auth, or Android builds.
---

# Sourashtra Chef (Fridge AI) — Architecture & Development Skill

Use this skill whenever modifying, debugging, designing UI for, or deploying the **Sourashtra Chef (Fridge AI)** codebase at `c:\Users\reksl\.gemini\antigravity\scratch\fridge-inventory`.

---

## 1. Brand, Refined Typography & WCAG AA Accessibility (VGAR)

- **App Name**: **Sourashtra Chef** (`👨‍🍳 Sourashtra Chef`), Android package ID `com.fridge.ai` (app_name: `Sourashtra Chef` in `strings.xml`), hosted at `https://fridge-inventory-one.vercel.app`.
- **Icon Sizing & Semantics**: User Account (`👤`) and Household Profile (`🏠`) icons are identical in dimensions (`18×18px`, `font-size: 0.95rem`) with distinctive glyphs.
- **7-Day Meal Planner Dish Images**: `.combo-dish-thumb` sized to `70×70px` (`min-width: 70px; min-height: 70px; border-radius: 9px; object-fit: cover`) for instant dish recognition.
- **WCAG AAA Zero Yellow-on-Yellow**: All pantry tags, medium difficulty badges, and Bhurko notes use deep amber-brown (`#78350f` / `#5c4d42`) achieving > 8:1 contrast. Recipe steps and missing item lists use `var(--text-main)` (`#1f1a17`) on white surfaces (> 14:1 contrast).
- **Typography & Font Stack**:
  - Primary font: **Plus Jakarta Sans** (`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap')`) with fallback to `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`.
  - Font smoothing: `-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; text-rendering: optimizeLegibility;`
  - **Refined Typographic Scale (No Bloated/Childish Weights)**:
    - Page Titles: `font-size: 1.25rem`, `font-weight: 600`, `letter-spacing: -0.02em`.
    - Section Banners: `font-size: 0.82rem`, `font-weight: 700`, `letter-spacing: 0.05em`, uppercase (`#5c4d42`).
    - Item Names: `font-size: 0.90rem`, `font-weight: 600`, `letter-spacing: -0.01em`.
    - Food Emoji Badges: Sleek `32px × 32px` squircle containers with `font-size: 1.15rem` (avoid oversized cartoon emojis).
    - Quantity Adjusters: `26px × 26px` rounded teal buttons with centered `+` and `−`, value in `font-weight: 600`.
    - Expiry Tags: `padding: 0 8px`, `height: 24px`, `border-radius: 6px`, `font-size: 0.72rem`, `font-weight: 600`.
    - **No Underlines on Recipe Info**: Recipe titles, combo pairings, and links must never have underlines (`text-decoration: none !important;`).
    - No fake cartoon smartphone frames or fake battery/time status bars inside the DOM.
- **Warm Culinary Color Palette & WCAG AA Contrast**:
  - `--bg-main: #fffdf6` (warm cream surface)
  - `--bg-strip: #fdeed9` (warm peach section headers & strips)
  - `--bg-input: #f6eadb` (soft sand input & secondary surface)
  - `--primary-teal: #245961` (WCAG AA compliant: 6.8:1 contrast on white)
  - `--text-main: #1f1a17` (primary body text)
  - `--text-secondary: #5c4d42` (WCAG AA compliant: >= 5.5:1 on ALL backgrounds)
  - `--badge-warning-bg: #fee2e2`, `--badge-warning-text: #a82b2b` (5.7:1 contrast)
  - `--control-border: #8fa5a7` (meets 3:1 non-text boundary requirement for form controls)
  - **Google Calendar Action (`.gcal-day-link`)**:
    - `color: #1e40af` (Blue-800, 8.01:1 contrast, WCAG AAA)
    - `background: #eff6ff` (soft sky-blue)
    - `border: 1.5px solid #2563eb` (5.17:1 non-text contrast, WCAG AA)

---

## 2. Unified Component Pattern & 3D Tactile Raise

All interactive bubbles, badges, and action buttons adhere to a common sizing, font, border, and 3D elevation pattern:

1. **Header Badges & Bubbles (`.user-auth-badge`, `.profile-badge-btn`, `.lang-selector-container`)**:
   - `height: 32px; padding: 0 10px; border-radius: 8px; font-size: 0.80rem; font-weight: 600;`
   - `border: 1.5px solid rgba(45, 110, 119, 0.28); background: #ffffff;`
   - 3D tactile raise: `box-shadow: 0 2px 0 rgba(31, 26, 23, 0.08), 0 1px 3px rgba(31, 26, 23, 0.06);`
   - Hover: `transform: translateY(-1px); box-shadow: 0 3px 0 rgba(31, 26, 23, 0.12), 0 3px 6px rgba(31, 26, 23, 0.08);`
   - Active press: `transform: translateY(1px); box-shadow: 0 1px 0 rgba(31, 26, 23, 0.08);`

2. **Standard Action Buttons (`.btn-primary`, `.btn-secondary`, `.btn-gold`, `.btn-pin-plan`)**:
   - `height: 34px - 36px; padding: 0 14px - 16px; border-radius: 7px; font-size: 0.84rem; font-weight: 600;`
   - Primary: `background: #245961; color: #fff; box-shadow: 0 2px 0 #183e44, 0 2px 4px rgba(36, 89, 97, 0.2);`
   - Secondary: `background: #fff; color: var(--text-main); border: 1.5px solid rgba(45, 110, 119, 0.28); box-shadow: 0 2px 0 rgba(31, 26, 23, 0.08);`
   - Gold (`.btn-gold`): `background: linear-gradient(135deg, #f59e0b, #d97706); color: #0f172a; border: 1.5px solid #b45309; box-shadow: 0 2px 0 #92400e;`
   - Small (`.btn-sm`): `height: 32px; padding: 0 12px; font-size: 0.78rem;`

3. **Meal Slot Controls (`.slot-mini-btn`, `.view-recipe-pill`)**:
   - `height: 26px - 28px; padding: 0 8px - 10px; border-radius: 6px; font-size: 0.74rem; font-weight: 600;`
   - `border: 1.5px solid rgba(45, 110, 119, 0.28); box-shadow: 0 1.5px 0 rgba(31, 26, 23, 0.08);`
   - Active: `background: var(--primary-teal); color: #fff;`

---

## 3. Structured Tabular Layout & Data Leaking Prevention

- **Inventory Ledger (`src/app/page.tsx` & `src/app/page.module.css`)**:
  - Enclosed inside `.inventoryTableCard` with crisp borders (`1.5px solid rgba(45, 110, 119, 0.22)`), rounded corners (`10px`), and subtle shadow.
  - Distinct `.tableHeaderRow` (`✓`, `ITEM`, `CATEGORY`, `QTY / STATUS`) with uppercase 700 font.
  - Alternating zebra row striping (`:nth-child(even) { background: #fdfbf7; }`), divider lines (`border-bottom: 1px solid rgba(45, 110, 119, 0.12)`), and hover state (`#faf4e8`).
  - Strict column grid (`34px minmax(130px, 1fr) 95px 105px`) so item names, category tags, and quantities/dates line up vertically without leaking or wrapping into text blobs.
- **Weekly Shopping & Alerts**:
  - Tabular list header with alternating zebra rows (`shopping.css`).

---

## 4. Strict Localhost-Only Developer Account Security

- **Enforcement Rules**:
  - The developer bypass (`devLogin`, "Sign in as Local Developer") MUST ONLY be visible and accessible on local development environments running on `localhost` or `127.0.0.1`.
  - **Server-Side (`src/app/api/auth/route.ts`)**:
    ```ts
    const host = (request.headers.get('x-forwarded-host') || request.headers.get('host') || '').toLowerCase();
    const isLocalhostHost = host.startsWith('localhost') || host.startsWith('127.0.0.1') || host.startsWith('[::1]');
    const isDev = process.env.NODE_ENV !== 'production' && isLocalhostHost;
    if (typeof body === 'object' && body !== null && 'devLogin' in body && body.devLogin === true) {
      if (!isDev) {
        return NextResponse.json(
          { success: false, error: 'Developer login is strictly permitted on local development (localhost) only.' },
          { status: 403 },
        );
      }
      // ...
    }
    ```
  - **Client-Side (`src/components/UserAuthModal.tsx`)**:
    ```tsx
    const isLocalhost = typeof window !== 'undefined' && 
      (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.hostname === '[::1]') &&
      process.env.NODE_ENV !== 'production';
    ```
    The developer login button is conditionally rendered (`{isLocalhost && <button>...</button>}`) so it is completely absent from the DOM on Vercel, Android Capacitor builds, and any external deployment.

---

## 5. Google Play Store Visual Listing Specifications

- **Play Console Assets Directory**: `c:\Users\reksl\.gemini\antigravity\scratch\fridge-inventory\play-store-assets\` and mirrored to conversation artifacts.
- **Asset Specifications**:
  - **App Icon**: PNG or JPEG, exactly 512x512 px, up to 1 MB (`app_icon_512x512.png`).
  - **Feature Graphic**: PNG or JPEG, exactly 1024x500 px, up to 15 MB (`feature_graphic_1024x500.png`).
  - **Phone Screenshots**: 9:16 aspect ratio (1080x1920 px), minimum 1080 px on each side (`phone_01_fridge_inventory.png` through `phone_05_weekly_shopping.png`).
  - **7-inch Tablet Screenshots**: 1200x1920 px (`tablet7_01_fridge_inventory.png` through `tablet7_03_weekly_shopping.png`).
  - **10-inch Tablet Screenshots**: 1600x2560 px (`tablet10_01_fridge_inventory.png` through `tablet10_03_weekly_shopping.png`).
  - **Desktop Screenshots**: 1920x1080 px, 16:9 aspect ratio (`desktop_01_fridge_inventory.png` through `desktop_04_recipe_catalog.png`).
- **Automated Capture Script**: `scratch/run-play-store-capture.js` uses `playwright-core` with `{ channel: 'msedge' }` to capture all devices with mocked authentication and inventory data.

---

## 6. Verification & Release Workflow

1. **Automated Tests & Type Checks**:
   ```powershell
   Set-Location "c:\Users\reksl\.gemini\antigravity\scratch\fridge-inventory"
   npm test
   npx tsc --noEmit
   npm run build
   ```
2. **Playwright UI Verification**:
   - Verify desktop, `390px`, and `320px` mobile viewports using `playwright-core` with zero console/page errors and zero horizontal overflow.
3. **Android Capacitor Build (`android-capacitor/`)**:
   - `npm run build && npx cap sync android`
   - Signed release bundle generated via `./gradlew bundleRelease` in `android-capacitor/`
