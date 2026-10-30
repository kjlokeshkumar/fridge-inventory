# Fridge AI

Fridge AI is a Next.js web app for tracking household food inventory, scanning
fridge/pantry photos, and generating recipes. The desktop website and Android
app share the same hosted web UI and API. Android is a Capacitor WebView that
loads the production Vercel app, so API-backed features require an internet
connection.

## Repository and current handoff

- Keep this repository **private**. Do not make it public or publish credentials,
  database exports, `.env` files, signing keys, or signing passwords.
- Remote: `origin` (`https://github.com/kjlokeshkumar/fridge-inventory.git`)
- Branch: `master`
- Latest pushed commit at the last handoff: `64c1dac` (`build: add signed Play
  bundle workflow`)
- The release AAB was built and signature-verified locally on October 29, 2026.
- The user reports backing up both signing files and saving the decrypted
  keystore password in a password manager.
- `Fridge_AI_Friends_Guide.txt` is an unrelated, untracked user file. Leave it
  untouched.
- No Google Play Console listing or release has been created/submitted yet.

## Architecture

- Web app/API: Next.js 15, React 19, TypeScript, App Router.
- Hosting: Vercel; current production URL:
  `https://fridge-inventory-one.vercel.app`
- Database: Neon Postgres, configured with `DATABASE_URL`.
- Image analysis: Google Gemini, configured with `GEMINI_API_KEY`; images are
  sent from the app API to Gemini for analysis.
- Android: Capacitor 8 in `android-capacitor/`. `android/` is the older,
  separate native WebView project and is not the Capacitor build.
- Capacitor config: `capacitor.config.ts`. It points to the production Vercel
  URL and has a small local offline fallback page in `capacitor-web/`.
- Native camera capture uses `@capacitor/camera`; gallery selection uses the
  browser file input.
- Main areas: `/inventory`, `/upload`, `/recipes`, `/shopping-list`, and `/admin`.

### Privacy and release review notes

Use the source of truth in the API routes when preparing a privacy policy and
Play Data safety form. Current app behavior includes:

- Account usernames and passkeys; household profile names, dietary preferences,
  and allergy information; inventory names, quantities, categories, and
  estimated expiration dates.
- Food photos are sent to the app server and Google Gemini for analysis. The
  inventory database stores the extracted food data and a placeholder image
  URL, not the uploaded photo itself.
- Inventory records older than 14 days are purged during inventory API
  requests. There is no equivalent automatic retention limit for user accounts
  or household profiles.
- Language, account/profile IDs, and the saved Sourashtra meal plan are stored
  in browser/WebView local storage.
- The app uses Vercel, Neon, and Google Gemini. No separate analytics SDK was
  identified during the source review.
- Passkeys are stored as salted scrypt hashes; existing plaintext passkeys are
  upgraded after a successful sign-in. Authentication uses a signed,
  HttpOnly/SameSite=Lax session cookie, and profile and inventory APIs scope
  records to the authenticated account.
- The home dashboard, inventory, upload, shopping list, and admin areas require
  an active sign-in. The recipe catalog and privacy policy remain publicly
  accessible; anonymous recipe browsing uses a sample ingredient basket rather
  than anyone's account inventory.
- Admin APIs require an active account with the admin role and a separately
  configured `ADMIN_SECRET_KEY`. There is no self-service admin bootstrap;
  provision the role through a trusted database operation.
- These access controls and the legacy-data migration have not been tested
  against a live database or independently security-audited. Verify both before
  public release.
- Publisher name, contact email, and general-audience intent were provided by
  the user. An in-app policy is available at `/privacy`; review it and publish
  the deployed page at a stable public URL before Play submission.

## Local web development

Requirements: Node.js 22 or newer and npm.

```powershell
npm install
npm run dev
```

Open `http://localhost:3000`. To run the production build locally:

```powershell
npm run build
npm run start
```

The Next.js server needs environment variables from `.env.local` (at minimum
`DATABASE_URL`, `GEMINI_API_KEY`, and `AUTH_SESSION_SECRET` for authenticated
features. `AUTH_SESSION_SECRET` must be at least 32 bytes. `ADMIN_SECRET_KEY`
must also be at least 32 bytes to use admin APIs. Configure production values in
Vercel's environment settings. `.env.local` is gitignored; never print it,
commit it, or copy its secrets into documentation. Stop a local server when
finished if it is no longer needed.

## Android debug build

Set `ANDROID_HOME` to the installed SDK path on this Windows machine before
building (the current SDK is `C:\Users\reksl\AppData\Local\Android\Sdk`):

```powershell
$env:ANDROID_HOME = "$HOME\AppData\Local\Android\Sdk"
$env:ANDROID_SDK_ROOT = $env:ANDROID_HOME
npm run android:sync
Set-Location android-capacitor
.\gradlew.bat assembleDebug
```

Debug APK output:
`android-capacitor/app/build/outputs/apk/debug/app-debug.apk`.
`Fridge_AI.apk` in the repository root is a copy of the tested Capacitor debug
APK, not a Play release. The emulator/device was not available during the last
mobile check, so a real Android installation and camera flow still need device
testing.

## Play upload key and signed release

The app's Android application ID is `com.fridge.ai`; its target SDK is 36.
Confirm the package ID is available before creating the Play app because the
ID cannot be changed after creation.

The signing files are outside the repository:

- `$HOME\.android\fridge-ai-upload.p12` — upload keystore
- `$HOME\.android\fridge-ai-upload-password.sec` — password protected with
  Windows DPAPI for the current Windows user

The user reports both files are backed up and the decrypted password is saved
in a password manager. The `.sec` backup is bound to the Windows account that
created it; keep the actual password in the password manager for recovery on a
different computer. Never commit, upload, or share either file.

If the key is not present on the current machine, restore it locally to the
paths above before building. To create a new key only if no prior upload key
exists, run:

```powershell
pwsh -File .\android-capacitor\scripts\setup-play-signing.ps1
```

For a signed release bundle, set the SDK variables as above and run:

```powershell
pwsh -File .\android-capacitor\scripts\build-play-bundle.ps1
```

The signing script reads the password locally and passes it to Gradle through
process environment variables. The signed AAB is at
`android-capacitor/app/build/outputs/bundle/release/app-release.aab`. The last
verified AAB used package `com.fridge.ai`, version code `1`, version name `1.0`,
and target SDK 36. Increment `versionCode` in
`android-capacitor/app/build.gradle` for each Play upload.

New Play apps use Android App Bundles and Play App Signing. Uploading the AAB
enrolls the app in Play App Signing; it does not publish the app.

## Remaining Play readiness work

1. **Keep the GitHub repository private.** This project is not intended for
   public source release.
2. Configure `AUTH_SESSION_SECRET` in Vercel; configure `ADMIN_SECRET_KEY` and
   provision an admin account only if admin features are needed. Verify the
   legacy-data migration and account isolation against the production database
   before public release.
3. Review the in-app privacy policy, deploy it, and confirm its public URL is
   stable and reachable; link that URL from the Play store listing.
4. Verify `com.fridge.ai` availability and create the Play Console listing.
5. Complete Data safety and other App content declarations based on actual
   data flows, SDK behavior, audience, and access controls.
6. Prepare store listing text, a 512x512 icon, 1024x500 feature graphic, at
   least two screenshots, contact details, and reviewer instructions if needed.
7. Test the internal track on a real Android device, especially camera/gallery,
   authentication, upload, inventory, and navigation.
8. Follow any account-specific testing gate shown by Play Console. Some newer
   personal developer accounts require a closed test with at least 12 testers
   opted in continuously for 14 days before production access.
9. Upload the signed AAB to an internal testing track first; proceed to review
   and production only after the listing, policy, privacy declarations, and
   device tests are complete.

Play policy requirements and deadlines can change; confirm current requirements
in Play Console and Google's official developer documentation before submission.

## Checks last completed

- `npm test` passed all 6 passkey and session-token tests.
- `npx tsc --noEmit` passed.
- `npm run build` succeeded with one React Hook dependency warning in
  `src/app/shopping-list/page.tsx`.
- `git diff --check` passed.
- Web UI was checked locally in a browser at desktop, 390px, and 320px widths;
  no horizontal page/header overflow was measured.
- Capacitor debug APK and release AAB built successfully.
- `jarsigner -verify` accepted the release AAB signature.
- Android output confirmed `com.fridge.ai`, target SDK 36, internet permission,
  and camera permission.
- No physical-device install/camera test, public privacy-policy URL, or Play
  Console submission was completed.

The original checked-in database export and untracked guide may contain user
data/content; keep the repository private and review their handling before
changing repository visibility.
