package com.example.fridgeai

import android.Manifest
import android.annotation.SuppressLint
import android.app.DownloadManager
import android.content.ClipData
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.net.Uri
import android.os.Bundle
import android.os.Environment
import android.print.PrintAttributes
import android.print.PrintManager
import android.provider.CalendarContract
import android.provider.MediaStore
import android.webkit.JavascriptInterface
import android.webkit.ValueCallback
import android.webkit.WebChromeClient
import android.webkit.WebResourceRequest
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.FrameLayout
import android.widget.Toast
import androidx.activity.ComponentActivity
import androidx.activity.OnBackPressedCallback
import androidx.activity.compose.setContent
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.viewinterop.AndroidView
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import androidx.core.content.FileProvider
import java.io.File

class MainActivity : ComponentActivity() {

  private var filePathCallback: ValueCallback<Array<Uri>>? = null
  private var cameraImageUri: Uri? = null
  private var activeWebView: WebView? = null

  private val requestPermissionLauncher = registerForActivityResult(
    ActivityResultContracts.RequestPermission()
  ) { isGranted ->
    if (!isGranted) {
      Toast.makeText(this, "Camera permission is needed to take food photos", Toast.LENGTH_SHORT).show()
    }
  }

  private val fileChooserLauncher = registerForActivityResult(
    ActivityResultContracts.StartActivityForResult()
  ) { result ->
    if (filePathCallback != null) {
      var results: Array<Uri>? = null

      if (result.resultCode == RESULT_OK) {
        if (result.data?.data != null) {
          // Single file from Gallery
          results = arrayOf(result.data!!.data!!)
        } else if (result.data?.clipData != null) {
          // Multiple files from Gallery
          val clipData = result.data?.clipData!!
          val uriList = mutableListOf<Uri>()
          for (i in 0 until clipData.itemCount) {
            uriList.add(clipData.getItemAt(i).uri)
          }
          results = uriList.toTypedArray()
        } else if (cameraImageUri != null) {
          // Photo from Camera
          results = arrayOf(cameraImageUri!!)
        }
      }

      filePathCallback?.onReceiveValue(results)
      filePathCallback = null
    }
  }

  @OptIn(ExperimentalMaterial3Api::class)
  @SuppressLint("SetJavaScriptEnabled")
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)

    // Request Camera permission if not granted
    if (ContextCompat.checkSelfPermission(this, Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED) {
      requestPermissionLauncher.launch(Manifest.permission.CAMERA)
    }

    onBackPressedDispatcher.addCallback(this, object : OnBackPressedCallback(true) {
      override fun handleOnBackPressed() {
        if (activeWebView?.canGoBack() == true) {
          activeWebView?.goBack()
        } else {
          isEnabled = false
          onBackPressedDispatcher.onBackPressed()
        }
      }
    })

    val prefs = getSharedPreferences("FridgeAI_Prefs", Context.MODE_PRIVATE)

    setContent {
      val defaultUrl = "https://fridge-inventory-one.vercel.app/"
      var currentUrl by remember { mutableStateOf(prefs.getString("server_url", defaultUrl) ?: defaultUrl) }
      var isConfiguring by remember { mutableStateOf(false) }
      var inputUrl by remember { mutableStateOf(currentUrl) }

      MaterialTheme {
        Surface(modifier = Modifier.fillMaxSize(), color = Color(0xFF0F172A)) {
          if (isConfiguring || currentUrl.isEmpty()) {
            // Setup Screen to enter Vercel URL
            Box(
              modifier = Modifier
                .fillMaxSize()
                .padding(24.dp),
              contentAlignment = Alignment.Center
            ) {
              Card(
                modifier = Modifier.fillMaxWidth(),
                shape = RoundedCornerShape(16.dp),
                colors = CardDefaults.cardColors(containerColor = Color(0xFF1E293B))
              ) {
                Column(
                  modifier = Modifier.padding(24.dp),
                  horizontalAlignment = Alignment.CenterHorizontally,
                  verticalArrangement = Arrangement.spacedBy(16.dp)
                ) {
                  Text(
                  text = "👨‍🍳 Sourashtra Chef",
                    fontSize = 28.sp,
                    fontWeight = FontWeight.Bold,
                    color = Color.White
                  )
                  Text(
                    text = "Enter your Vercel deployment URL or local server address to connect your app:",
                    fontSize = 14.sp,
                    color = Color(0xFF94A3B8),
                    textAlign = TextAlign.Center
                  )

                  OutlinedTextField(
                    value = inputUrl,
                    onValueChange = { inputUrl = it },
                    label = { Text("Server URL", color = Color(0xFF38BDF8)) },
                    placeholder = { Text("https://your-app.vercel.app") },
                    singleLine = true,
                    colors = OutlinedTextFieldDefaults.colors(
                      focusedTextColor = Color.White,
                      unfocusedTextColor = Color.White,
                      focusedBorderColor = Color(0xFF38BDF8),
                      unfocusedBorderColor = Color(0xFF475569)
                    ),
                    modifier = Modifier.fillMaxWidth()
                  )

                  Button(
                    onClick = {
                      var formatted = inputUrl.trim()
                      if (!formatted.startsWith("http://") && !formatted.startsWith("https://")) {
                        formatted = "https://$formatted"
                      }
                      prefs.edit().putString("server_url", formatted).apply()
                      currentUrl = formatted
                      isConfiguring = false
                    },
                    modifier = Modifier.fillMaxWidth(),
                    shape = RoundedCornerShape(12.dp),
                    colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF2563EB))
                  ) {
                    Text("Connect & Launch App", fontSize = 16.sp, fontWeight = FontWeight.Bold)
                  }
                }
              }
            }
          } else {
            // Main App WebView full screen
            AndroidView(
              factory = { context ->
                  WebView(context).apply {
                    activeWebView = this
                    layoutParams = FrameLayout.LayoutParams(
                      FrameLayout.LayoutParams.MATCH_PARENT,
                      FrameLayout.LayoutParams.MATCH_PARENT
                    )

                    settings.javaScriptEnabled = true
                    settings.domStorageEnabled = true
                    settings.allowFileAccess = true
                    settings.allowContentAccess = true
                    settings.useWideViewPort = true
                    settings.loadWithOverviewMode = true
                    settings.mediaPlaybackRequiresUserGesture = false

                    addJavascriptInterface(AndroidCalendarBridge(this@MainActivity), "AndroidCalendarBridge")
                    addJavascriptInterface(AndroidPrintBridge(this@MainActivity, this), "AndroidPrintBridge")
                    addJavascriptInterface(AndroidShareBridge(this@MainActivity), "AndroidShareBridge")

                    val handleCalendarDownload: (String) -> Boolean = { downloadUrl ->
                      try {
                        val dm = this@MainActivity.getSystemService(Context.DOWNLOAD_SERVICE) as DownloadManager
                        val req = DownloadManager.Request(Uri.parse(downloadUrl)).apply {
                          setMimeType("text/calendar")
                          setTitle("Sourashtra Meal Plan (.ics)")
                          setDescription("Downloading Sourashtra meal plan calendar event...")
                          setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE_NOTIFY_COMPLETED)
                          setDestinationInExternalPublicDir(Environment.DIRECTORY_DOWNLOADS, "Sourashtra_Menu_${System.currentTimeMillis()}.ics")
                        }
                        dm.enqueue(req)
                        Toast.makeText(this@MainActivity, "Downloading calendar file to your device...", Toast.LENGTH_SHORT).show()
                        true
                      } catch (_: Exception) {
                        try {
                          val browserIntent = Intent(Intent.ACTION_VIEW, Uri.parse(downloadUrl)).apply {
                            addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
                          }
                          this@MainActivity.startActivity(browserIntent)
                          true
                        } catch (_2: Exception) {
                          false
                        }
                      }
                    }

                    setDownloadListener { url, _, _, mimetype, _ ->
                      if (url.contains("/api/calendar/ics") || url.endsWith(".ics", ignoreCase = true) || mimetype?.contains("calendar", ignoreCase = true) == true) {
                        handleCalendarDownload(url)
                      } else {
                        try {
                          val browserIntent = Intent(Intent.ACTION_VIEW, Uri.parse(url)).apply {
                            addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
                          }
                          this@MainActivity.startActivity(browserIntent)
                        } catch (e2: Exception) {
                          Toast.makeText(this@MainActivity, "Cannot download file", Toast.LENGTH_SHORT).show()
                        }
                      }
                    }

                    webViewClient = object : WebViewClient() {
                      override fun shouldOverrideUrlLoading(
                        view: WebView?,
                        request: WebResourceRequest?
                      ): Boolean {
                        val url = request?.url?.toString() ?: return false
                        val currentHost = try { Uri.parse(currentUrl).host } catch (_: Exception) { null }
                        val targetUri = Uri.parse(url)
                        val targetHost = targetUri.host

                        // 1. Calendar .ics download / API
                        if (url.contains("/api/calendar/ics") || url.endsWith(".ics", ignoreCase = true)) {
                          return handleCalendarDownload(url)
                        }

                        // 2. External destinations: YouTube app, Google Calendar, social apps, external websites
                        if (url.contains("youtube.com", ignoreCase = true) ||
                            url.contains("youtu.be", ignoreCase = true) ||
                            url.contains("calendar.google.com", ignoreCase = true) ||
                            (targetHost != null && currentHost != null && !targetHost.equals(currentHost, ignoreCase = true) && !targetHost.contains("localhost"))) {
                          try {
                            val intent = Intent(Intent.ACTION_VIEW, targetUri).apply {
                              addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
                            }
                            this@MainActivity.startActivity(intent)
                            return true
                          } catch (_: Exception) {
                            return false
                          }
                        }

                        if (url.startsWith("http://") || url.startsWith("https://")) {
                          return false
                        }
                        try {
                          val intent = if (url.startsWith("intent://")) {
                            Intent.parseUri(url, Intent.URI_INTENT_SCHEME).apply {
                              addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
                            }
                          } else {
                            Intent(Intent.ACTION_VIEW, Uri.parse(url)).apply {
                              addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
                            }
                          }
                          if (intent != null) {
                            this@MainActivity.startActivity(intent)
                            return true
                          }
                          return false
                        } catch (e: Exception) {
                          return false
                        }
                      }
                    }

                    webChromeClient = object : WebChromeClient() {
                      override fun onShowFileChooser(
                        webView: WebView?,
                        filePathCallback: ValueCallback<Array<Uri>>?,
                        fileChooserParams: FileChooserParams?
                      ): Boolean {
                        this@MainActivity.filePathCallback?.onReceiveValue(null)
                        this@MainActivity.filePathCallback = filePathCallback

                        // Ensure Camera runtime permission
                        if (ContextCompat.checkSelfPermission(this@MainActivity, Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED) {
                          ActivityCompat.requestPermissions(this@MainActivity, arrayOf(Manifest.permission.CAMERA), 100)
                        }

                        // 1. Camera Intent
                        var takePictureIntent: Intent? = Intent(MediaStore.ACTION_IMAGE_CAPTURE)
                        var photoUri: Uri? = null
                        try {
                          val photoFile = File.createTempFile(
                            "JPEG_${System.currentTimeMillis()}_",
                            ".jpg",
                            getExternalFilesDir(Environment.DIRECTORY_PICTURES)
                          )
                          photoUri = FileProvider.getUriForFile(
                            this@MainActivity,
                            "${applicationContext.packageName}.fileprovider",
                            photoFile
                          )
                          cameraImageUri = photoUri
                          takePictureIntent?.putExtra(MediaStore.EXTRA_OUTPUT, photoUri)
                          takePictureIntent?.clipData = ClipData.newRawUri("", photoUri)
                          takePictureIntent?.addFlags(Intent.FLAG_GRANT_WRITE_URI_PERMISSION or Intent.FLAG_GRANT_READ_URI_PERMISSION)
                        } catch (e: Exception) {
                          takePictureIntent = null
                          cameraImageUri = null
                        }

                        // 2. Gallery Intent
                        val contentSelectionIntent = Intent(Intent.ACTION_GET_CONTENT).apply {
                          addCategory(Intent.CATEGORY_OPENABLE)
                          type = "image/*"
                          putExtra(Intent.EXTRA_ALLOW_MULTIPLE, true)
                        }

                        // 3. Combined Intent Chooser
                        val chooserIntent = Intent(Intent.ACTION_CHOOSER).apply {
                          putExtra(Intent.EXTRA_INTENT, contentSelectionIntent)
                          putExtra(Intent.EXTRA_TITLE, "Capture Photo or Choose File")
                          if (takePictureIntent != null && photoUri != null) {
                            putExtra(Intent.EXTRA_INITIAL_INTENTS, arrayOf(takePictureIntent))
                          }
                        }

                        try {
                          fileChooserLauncher.launch(chooserIntent)
                        } catch (e: Exception) {
                          this@MainActivity.filePathCallback = null
                          Toast.makeText(this@MainActivity, "Cannot open camera or gallery", Toast.LENGTH_LONG).show()
                          return false
                        }
                        return true
                      }
                    }

                    loadUrl(currentUrl)
                  }
                },
                update = { webView ->
                  if (webView.url != currentUrl) {
                    webView.loadUrl(currentUrl)
                  }
                },
                modifier = Modifier.fillMaxSize()
              )
          }
        }
      }
    }
  }
}

class AndroidCalendarBridge(private val activity: ComponentActivity) {
  @JavascriptInterface
  fun openCalendarEvent(title: String, description: String, startTimeMs: Long, endTimeMs: Long): Boolean {
    activity.runOnUiThread {
      try {
        val intent = Intent(Intent.ACTION_INSERT).apply {
          data = CalendarContract.Events.CONTENT_URI
          putExtra(CalendarContract.Events.TITLE, title)
          putExtra(CalendarContract.Events.DESCRIPTION, description)
          putExtra(CalendarContract.EXTRA_EVENT_BEGIN_TIME, startTimeMs)
          putExtra(CalendarContract.EXTRA_EVENT_END_TIME, endTimeMs)
          addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
        }
        val chooser = Intent.createChooser(intent, "Add to Calendar")
        chooser.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
        activity.startActivity(chooser)
      } catch (e: Exception) {
        try {
          val fallback = Intent(Intent.ACTION_EDIT).apply {
            type = "vnd.android.cursor.item/event"
            putExtra(CalendarContract.Events.TITLE, title)
            putExtra(CalendarContract.Events.DESCRIPTION, description)
            putExtra(CalendarContract.EXTRA_EVENT_BEGIN_TIME, startTimeMs)
            putExtra(CalendarContract.EXTRA_EVENT_END_TIME, endTimeMs)
            addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
          }
          val chooser = Intent.createChooser(fallback, "Add to Calendar")
          chooser.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
          activity.startActivity(chooser)
        } catch (e2: Exception) {
          Toast.makeText(activity, "No calendar app found on this device", Toast.LENGTH_SHORT).show()
        }
      }
    }
    return true
  }
}

class AndroidPrintBridge(private val activity: ComponentActivity, private val webView: WebView) {
  @JavascriptInterface
  fun print(jobName: String? = null): Boolean {
    return try {
      activity.runOnUiThread {
        val printManager = activity.getSystemService(Context.PRINT_SERVICE) as? PrintManager
        if (printManager != null) {
          val docName = jobName ?: "Sourashtra Chef 7-Day Plan"
          val adapter = webView.createPrintDocumentAdapter(docName)
          printManager.print(docName, adapter, PrintAttributes.Builder().build())
        } else {
          Toast.makeText(activity, "Printing is not supported on this device", Toast.LENGTH_SHORT).show()
        }
      }
      true
    } catch (e: Exception) {
      false
    }
  }
}

class AndroidShareBridge(private val activity: ComponentActivity) {
  @JavascriptInterface
  fun shareText(title: String, text: String): Boolean {
    activity.runOnUiThread {
      try {
        val intent = Intent(Intent.ACTION_SEND).apply {
          type = "text/plain"
          putExtra(Intent.EXTRA_SUBJECT, title)
          putExtra(Intent.EXTRA_TEXT, text)
        }
        val chooser = Intent.createChooser(intent, title).apply {
          addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
        }
        activity.startActivity(chooser)
      } catch (e: Exception) {
        Toast.makeText(activity, "Cannot share text", Toast.LENGTH_SHORT).show()
      }
    }
    return true
  }
}
