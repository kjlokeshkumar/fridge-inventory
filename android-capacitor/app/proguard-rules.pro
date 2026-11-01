# Capacitor Plugin rules
-keep public class * extends com.getcapacitor.Plugin {
    public *;
}
-keep public class * extends com.getcapacitor.PluginMethod {
    public *;
}
-keepclassmembers class * {
    @com.getcapacitor.PluginMethod public *;
}
-keep class com.getcapacitor.** { *; }

# Bridge & Webview Javascript interface
-keepclassmembers class * {
    @android.webkit.JavascriptInterface <methods>;
}

# Capacitor Plugins
-keep class com.capawesome.capacitor.googlesignin.** { *; }
-keep class com.capacitorjs.plugins.camera.** { *; }
-keep class com.capacitorjs.plugins.share.** { *; }

# Google Play Services & Auth
-keep class com.google.android.gms.** { *; }
-dontwarn com.google.android.gms.**

# Coroutines & AndroidX
-dontwarn kotlinx.coroutines.**

# Preserve source file and line numbers for Google Play stack traces and deobfuscation
-keepattributes SourceFile,LineNumberTable,*Annotation*
-renamesourcefileattribute SourceFile
