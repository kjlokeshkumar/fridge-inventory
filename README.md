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
- A signed release AAB with version name `1.1` and version code `2` was built
  and signature-verified locally on October 30, 2026.
- The user confirmed uploading version `1.1` to Play Console on October 30,
  2026. Check Play Console for its current track and release status; an upload
  is not the same as a published release.
- `Fridge_AI_Feature_List_and_Release_Notes.txt` contains the user-facing
  feature overview and Play Store release-notes draft.

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

- Google account identifiers, verified email addresses, and display names;
  household profile names, dietary preferences, and allergy information;
  inventory names, quantities, categories, and estimated expiration dates.
- Food photos are sent to the app server and Google Gemini for analysis. The
  inventory database stores the extracted food data and a placeholder image
  URL, not the uploaded photo itself.
- Inventory records with expiration dates before today, and records older than
  14 days from when they were added, are purged when the signed-in user accesses
  inventory or the shopping list. This is request-triggered cleanup, not a
  background job. There is no equivalent automatic retention limit for user
  accounts or household profiles.
- Language, account/profile IDs, and the saved Sourashtra meal plan are stored
  in browser/WebView local storage.
- The app uses Vercel, Neon, and Google Gemini. No separate analytics SDK was
  identified during the source review.
- Google ID tokens are verified on the server. Google passwords are never
  received or stored by Fridge AI. Authentication uses a signed,
  HttpOnly/SameSite=Lax session cookie, and profile and inventory APIs scope
  records to the authenticated account. Existing passkey accounts are not
  automatically linked to Google accounts; their inventory remains attached
  to the old account until migrated separately.
- The home dashboard, inventory, upload, shopping list, and admin areas require
  an active sign-in. The recipe catalog and privacy policy remain publicly
  accessible; signed-out recipe browsing is limited to the public recipe
  catalog, while the weekly planner, shopping tools, and fridge matching
  require sign-in. Anonymous recipe browsing uses a sample ingredient basket
  rather than anyone's account inventory.
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
`DATABASE_URL`, `GEMINI_API_KEY`, `AUTH_SESSION_SECRET`, and `GOOGLE_CLIENT_ID`
for authenticated features). Set `NEXT_PUBLIC_GOOGLE_CLIENT_ID` to the same
Google **Web application** client ID for the sign-in button. Configure the web
client's authorized JavaScript origins (`http://localhost:3000` and the
production origin) and redirect URIs (`http://localhost:3000/auth/google/callback`
and `https://fridge-inventory-one.vercel.app/auth/google/callback`) in Google
Cloud Console. `AUTH_SESSION_SECRET` must be at least 32 bytes.
`ADMIN_SECRET_KEY` must also be at least 32 bytes to use admin APIs. Optionally
set `GOOGLE_ADMIN_EMAILS` to a comma-separated list of verified Google account
emails that should receive the admin role when their account is first created.
Configure production values in Vercel's environment settings.
`.env.local` is gitignored; never print it, commit it, or copy its secrets into
documentation.

For Android, create an **Android OAuth client** in the same Google Cloud
project, using application ID `com.fridge.ai` and the signing certificate's
SHA-1 fingerprint. Add both the local debug certificate and the **Play app
signing certificate** from Play Console; the upload certificate alone does not
cover Play-distributed installs. The app continues to render the existing
Fridge AI UI in its Capacitor WebView, while the Google account picker opens
through Android's native sign-in flow. The Android client ID is not a runtime
environment variable; the native plugin uses the Web client ID above.

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

## Build a signed Android App Bundle (AAB)

The app's Android application ID is `com.fridge.ai`; its target SDK is 36.
The existing Play Console app must use this same package ID; it cannot be
changed for an existing app.

The signing files are outside the repository:

- `$HOME\.android\fridge-ai-upload.p12` — upload keystore
- `$HOME\.android\fridge-ai-upload-password.sec` — password protected with
  Windows DPAPI for the Windows user that created it

The user reports the upload keystore is backed up and its password is saved in
a password manager. The `.sec` file only decrypts under the Windows account
that created it. On a different computer/account, securely restore the `.p12`
keystore to `$HOME\.android\fridge-ai-upload.p12`; the build script prompts for
the password from the password manager if the DPAPI file is absent or cannot
be decrypted. Never commit, upload, or share the keystore or password.

**Do not generate a new upload key for an app that already exists in Play
Console.** Restore the original key from its secure backup. The setup command
below is only for a brand-new Play app that has never had an upload key:

```powershell
pwsh -File .\android-capacitor\scripts\setup-play-signing.ps1
```

### One-time machine setup

Install Node.js 22+, JDK 17+, and Android Studio with Android SDK Platform 36
and Android SDK Build-Tools. In Android Studio's SDK Manager, install those
components before disconnecting from the internet. Gradle and Android
dependencies may also need to be downloaded on the first build.

Open PowerShell at the repository root and set the SDK location (change it if
Android Studio installed the SDK elsewhere):

```powershell
$env:ANDROID_HOME = "$HOME\AppData\Local\Android\Sdk"
$env:ANDROID_SDK_ROOT = $env:ANDROID_HOME
Test-Path $env:ANDROID_HOME
java -version
```

`Test-Path` should return `True`. Ensure the original upload keystore is at
`$HOME\.android\fridge-ai-upload.p12`. On a new computer, restore it securely;
do not email it or put it in source control.

### Build online, or fully offline if dependencies are cached

The Android app is a Capacitor WebView that loads the production Vercel URL.
Deploy web-only changes to Vercel separately; they are not copied into the AAB.
Build and upload a new AAB when native Android code, Capacitor plugins, or
Android release metadata changes. Deploy web changes before testing the Android
app.

If dependencies are missing, install them while online:

```powershell
npm ci
npm run android:sync
```

Before each new Play upload, open `android-capacitor/app/build.gradle` and set
`versionCode` to a number higher than every version already uploaded to any
Play track. Keep `versionName` meaningful for users. The current source is
version name `1.2`, version code `3`; verify Play Console has no higher version
code uploaded before building.

From the repository root, synchronize Capacitor and build the signed release
bundle:

```powershell
$env:ANDROID_HOME = "$HOME\AppData\Local\Android\Sdk"
$env:ANDROID_SDK_ROOT = $env:ANDROID_HOME
npm run android:sync
pwsh -File .\android-capacitor\scripts\build-play-bundle.ps1
```

If the JDK, SDK, npm packages, Gradle distribution, and all Android/Gradle
dependencies have already been downloaded on this computer, build without
network access by adding `-Offline`:

```powershell
pwsh -File .\android-capacitor\scripts\build-play-bundle.ps1 -Offline
```

Offline mode cannot fetch missing dependencies. If Gradle reports that a
dependency is unavailable offline, reconnect and run the online build once,
then retry offline. `npm run android:sync` also requires the project's npm
dependencies to already be installed. The AAB can be built offline; uploading
it to Play Console requires internet access.

The build script reads the password locally and passes it to Gradle through
temporary process environment variables; it does not put the password on the
command line. It produces:

`android-capacitor/app/build/outputs/bundle/release/app-release.aab`

Check that the bundle exists and note its size/time:

```powershell
Get-Item .\android-capacitor\app\build\outputs\bundle\release\app-release.aab |
  Select-Object FullName, Length, LastWriteTime
```

Optionally verify the bundle signature with the JDK:

```powershell
jarsigner -verify -verbose -certs .\android-capacitor\app\build\outputs\bundle\release\app-release.aab
```

New Play apps use Android App Bundles and Play App Signing. Uploading the AAB
enrolls the app in Play App Signing; it does not publish the app. Keep the
upload keystore backed up: Play App Signing uses Google's app-signing key for
delivered APKs, while this upload key authenticates future AAB submissions.

## Upload the AAB in Google Play Console

This part must be done online in the browser; build and keep the artifact
locally until you have internet access.

1. Sign in to Google Play Console and select the existing **Fridge AI**
   application (`com.fridge.ai`).
2. Open **Testing > Internal testing** for an initial tester release, or choose
   the intended existing track (closed, open, or production). Do not create a
   second app listing.
3. Choose **Create new release** (or edit the draft release), then upload
   `android-capacitor/app/build/outputs/bundle/release/app-release.aab`.
4. Wait for Play Console to process the bundle. Resolve errors and review
   warnings and required declarations.
5. Add release notes, review the countries/testers and release details, then
   save and roll out to the selected track. Production releases may require
   additional testing or review before they become available to users.
6. Confirm the release status in Play Console. An uploaded or saved draft is
   not the same as a submitted, approved, or published release.

For each later release, upload a newly built AAB with a higher `versionCode`.
Google Play rejects a version code already uploaded to any track. Keep the
original upload key; losing it can block future updates unless the Play
Console upload-key reset process is available and completed.

## Remaining Play readiness work

1. **Keep the GitHub repository private.** This project is not intended for
   public source release.
2. Configure Google OAuth client IDs, `AUTH_SESSION_SECRET`, and
   `GOOGLE_ADMIN_EMAILS` in Vercel; configure `ADMIN_SECRET_KEY` only if admin
   features are needed. Verify the
   legacy-data migration and account isolation against the production database
   before public release.
3. Review the in-app privacy policy, deploy it, and confirm its public URL is
   stable and reachable; link that URL from the Play store listing.
4. Verify the existing `com.fridge.ai` Play Console listing and its current
   release/track status.
5. Complete Data safety and other App content declarations based on actual
   data flows, SDK behavior, audience, and access controls.
6. Prepare store listing text, a 512x512 icon, 1024x500 feature graphic, at
   least two screenshots, contact details, and reviewer instructions if needed.
7. Test the internal track on a real Android device, especially camera/gallery,
   authentication, upload, inventory, and navigation.
8. Follow any account-specific testing gate shown by Play Console. Some newer
   personal developer accounts require a closed test with at least 12 testers
   opted in continuously for 14 days before production access.
9. The user reports that an AAB was uploaded to Play Console on October 29,
   2026. Verify which track it is in and whether the release is draft, in
   review, or published. Complete testing and declarations before production.

Play policy requirements and deadlines can change; confirm current requirements
in Play Console and Google's official developer documentation before submission.

## Checks last completed

- `npm test` passed all 18 tests, including shopping quantities, share text,
  and Tamil translation coverage.
- `npx tsc --noEmit` passed.
- `npm run build` succeeded with one React Hook dependency warning in
  `src/app/shopping-list/page.tsx`.
- `git diff --check` passed.
- Web UI was checked locally in a browser at desktop, 390px, and 320px widths;
  no horizontal page/header overflow was measured.
- Capacitor debug APK and signed release AAB version `1.1` (version code `2`)
  built successfully on October 30, 2026.
- `jarsigner -verify` accepted the release AAB signature.
- Android output confirmed `com.fridge.ai`, target SDK 36, internet permission,
  and camera permission.
- The user confirmed uploading AAB version `1.1` to Play Console and tested the
  native share chooser on an Android device, including sharing to WhatsApp.
  Camera behavior and the Play track/release status have not been independently
  verified.

The original checked-in database export may contain user data; keep the
repository private and review its handling before changing repository
visibility.
