package com.fridge.ai;

import android.app.DownloadManager;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.os.Environment;
import android.print.PrintAttributes;
import android.print.PrintDocumentAdapter;
import android.print.PrintManager;
import android.provider.CalendarContract;
import android.webkit.DownloadListener;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import android.widget.Toast;
import androidx.activity.EdgeToEdge;
import androidx.activity.OnBackPressedCallback;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        supportRequestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
        EdgeToEdge.enable(this);
        super.onCreate(savedInstanceState);

        if (getActionBar() != null) {
            getActionBar().hide();
        }
        if (getSupportActionBar() != null) {
            getSupportActionBar().hide();
        }

        try {
            if (this.bridge != null && this.bridge.getWebView() != null) {
                WebView webView = this.bridge.getWebView();

                // Prevent aggressive OEM / MIUI Force-Dark algorithms from inverting white text on teal buttons
                if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.Q) {
                    webView.getSettings().setForceDark(android.webkit.WebSettings.FORCE_DARK_OFF);
                }

                // 1. Android Print Bridge (Invokes Android System Print & Save as PDF)
                webView.addJavascriptInterface(new Object() {
                    @JavascriptInterface
                    public boolean print(String jobName) {
                        runOnUiThread(() -> {
                            try {
                                PrintManager printManager = (PrintManager) getSystemService(Context.PRINT_SERVICE);
                                if (printManager != null && bridge != null && bridge.getWebView() != null) {
                                    String name = (jobName != null && !jobName.trim().isEmpty()) ? jobName.trim() : "Sourashtra Chef 7-Day Plan";
                                    PrintDocumentAdapter adapter = bridge.getWebView().createPrintDocumentAdapter(name);
                                    printManager.print(name, adapter, new PrintAttributes.Builder().build());
                                } else {
                                    Toast.makeText(MainActivity.this, "Printing is not supported on this device", Toast.LENGTH_SHORT).show();
                                }
                            } catch (Exception e) {
                                Toast.makeText(MainActivity.this, "Print error: " + e.getMessage(), Toast.LENGTH_SHORT).show();
                            }
                        });
                        return true;
                    }
                }, "AndroidPrintBridge");

                // 2. Android Calendar Bridge (Direct insertion into Samsung / Google Calendar)
                webView.addJavascriptInterface(new Object() {
                    @JavascriptInterface
                    public boolean openCalendarEvent(String title, String description, long startTimeMs, long endTimeMs) {
                        runOnUiThread(() -> {
                            try {
                                Intent intent = new Intent(Intent.ACTION_INSERT)
                                        .setData(CalendarContract.Events.CONTENT_URI)
                                        .putExtra(CalendarContract.Events.TITLE, title)
                                        .putExtra(CalendarContract.Events.DESCRIPTION, description)
                                        .putExtra(CalendarContract.EXTRA_EVENT_BEGIN_TIME, startTimeMs)
                                        .putExtra(CalendarContract.EXTRA_EVENT_END_TIME, endTimeMs)
                                        .addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                                startActivity(Intent.createChooser(intent, "Add to Calendar"));
                            } catch (Exception e) {
                                Toast.makeText(MainActivity.this, "Cannot open calendar: " + e.getMessage(), Toast.LENGTH_SHORT).show();
                            }
                        });
                        return true;
                    }
                }, "AndroidCalendarBridge");

                // 3. Android Share Bridge
                webView.addJavascriptInterface(new Object() {
                    @JavascriptInterface
                    public boolean shareText(String title, String text) {
                        runOnUiThread(() -> {
                            try {
                                Intent intent = new Intent(Intent.ACTION_SEND)
                                        .setType("text/plain")
                                        .putExtra(Intent.EXTRA_SUBJECT, title)
                                        .putExtra(Intent.EXTRA_TEXT, text)
                                        .addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                                startActivity(Intent.createChooser(intent, title));
                            } catch (Exception e) {
                                Toast.makeText(MainActivity.this, "Cannot share: " + e.getMessage(), Toast.LENGTH_SHORT).show();
                            }
                        });
                        return true;
                    }
                }, "AndroidShareBridge");

                // 4. DownloadListener for .ics calendar files and other attachments
                webView.setDownloadListener(new DownloadListener() {
                    @Override
                    public void onDownloadStart(String url, String userAgent, String contentDisposition, String mimetype, long contentLength) {
                        try {
                            DownloadManager dm = (DownloadManager) getSystemService(Context.DOWNLOAD_SERVICE);
                            if (dm != null && url != null) {
                                DownloadManager.Request request = new DownloadManager.Request(Uri.parse(url));
                                String mime = (mimetype != null && !mimetype.isEmpty()) ? mimetype : "text/calendar";
                                request.setMimeType(mime);
                                request.setTitle("Sourashtra Meal Plan Calendar");
                                request.setDescription("Downloading calendar file (.ics)...");
                                request.setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE_NOTIFY_COMPLETED);
                                request.setDestinationInExternalPublicDir(Environment.DIRECTORY_DOWNLOADS, "Sourashtra_Menu_" + System.currentTimeMillis() + ".ics");
                                dm.enqueue(request);
                                Toast.makeText(MainActivity.this, "Downloading calendar to your device...", Toast.LENGTH_SHORT).show();
                            }
                        } catch (Exception e) {
                            try {
                                Intent browserIntent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
                                browserIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                                startActivity(browserIntent);
                            } catch (Exception ignored) {}
                        }
                    }
                });
            }
        } catch (Exception ignored) {}

        // Handle Android Back gesture/button backward-compatibly using modern OnBackPressedDispatcher
        getOnBackPressedDispatcher().addCallback(this, new OnBackPressedCallback(true) {
            @Override
            public void handleOnBackPressed() {
                if (bridge != null && bridge.getWebView() != null && bridge.getWebView().canGoBack()) {
                    bridge.getWebView().goBack();
                } else {
                    setEnabled(false);
                    getOnBackPressedDispatcher().onBackPressed();
                }
            }
        });
    }
}
