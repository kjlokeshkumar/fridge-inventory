package com.fridge.ai;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.print.PrintAttributes;
import android.print.PrintDocumentAdapter;
import android.print.PrintManager;
import android.provider.CalendarContract;
import android.webkit.JavascriptInterface;
import android.widget.Toast;
import androidx.activity.EdgeToEdge;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        EdgeToEdge.enable(this);
        super.onCreate(savedInstanceState);

        try {
            if (this.bridge != null && this.bridge.getWebView() != null) {
                // 1. Android Print Bridge (Invokes Android System Print & Save as PDF)
                this.bridge.getWebView().addJavascriptInterface(new Object() {
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

                // 2. Android Calendar Bridge
                this.bridge.getWebView().addJavascriptInterface(new Object() {
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
                                Toast.makeText(MainActivity.this, "Cannot open calendar", Toast.LENGTH_SHORT).show();
                            }
                        });
                        return true;
                    }
                }, "AndroidCalendarBridge");

                // 3. Android Share Bridge
                this.bridge.getWebView().addJavascriptInterface(new Object() {
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
                                Toast.makeText(MainActivity.this, "Cannot share", Toast.LENGTH_SHORT).show();
                            }
                        });
                        return true;
                    }
                }, "AndroidShareBridge");
            }
        } catch (Exception ignored) {}
    }
}
