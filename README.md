# Fridge AI

Fridge AI is a Next.js web app for tracking food inventory, scanning groceries,
and generating recipes. The Android app uses Capacitor to open the deployed web
app, so the desktop browser and Android app share the same interface and API.
An internet connection is required in the Android app.

## Run the web app

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
npm run start
```

## Build the Android app

The Capacitor project is kept in `android-capacitor/`. The older native WebView
project remains in `android/` and is not used by Capacitor.

```bash
npm run android:sync
```

Then build a debug APK from PowerShell:

```powershell
Set-Location android-capacitor
.\gradlew.bat assembleDebug
```

The APK is written to
`android-capacitor/app/build/outputs/apk/debug/app-debug.apk`.

The Capacitor server URL is configured in `capacitor.config.ts` and currently
points to the production Vercel app. Update it if the production domain changes.
The bundled page is only an offline fallback; API-backed features require the
hosted Next.js app and its configured environment.

## Prepare a Google Play bundle

The app targets API 36 and uses `com.fridge.ai`. Confirm that package ID is
available before creating the Play listing; a Play app's package ID cannot be
changed later.

Create a local upload key once, then build the signed Android App Bundle:

```powershell
pwsh -File .\android-capacitor\scripts\setup-play-signing.ps1
pwsh -File .\android-capacitor\scripts\build-play-bundle.ps1
```

The upload keystore is saved outside the repository at
`$HOME\.android\fridge-ai-upload.p12`. Its password is generated locally and
protected with Windows DPAPI for the current Windows user. Back up both files
securely; the protected password file cannot be decrypted by another Windows
account. Never commit or share the keystore or password.

The signed bundle is written to
`android-capacitor/app/build/outputs/bundle/release/app-release.aab`. New Play
apps use Android App Bundles and Play App Signing; upload this bundle in Play
Console to enroll. The bundle alone does not publish the app.

Before submitting for review, complete the Play Console listing and app-content
declarations, including the privacy policy and Data safety form. Add a public
app-specific privacy policy to the listing and inside the app, and prepare the
required store icon, feature graphic, screenshots, contact details, and any
reviewer access instructions. Personal developer accounts created after
November 13, 2023 may also need a 12-tester closed test lasting 14 continuous
days before production access.
