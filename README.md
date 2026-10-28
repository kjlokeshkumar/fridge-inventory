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

Google Play distribution requires a release-signed Android App Bundle (`.aab`),
a final unique application ID, and Play Console listing/privacy declarations.
Do not commit upload keystores or signing passwords.
