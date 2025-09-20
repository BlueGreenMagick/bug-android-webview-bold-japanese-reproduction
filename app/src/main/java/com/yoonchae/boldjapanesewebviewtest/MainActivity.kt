package com.yoonchae.boldjapanesewebviewtest

import android.os.Bundle
import android.view.ViewGroup
import android.webkit.CookieManager
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import com.yoonchae.boldjapanesewebviewtest.ui.theme.BoldJapaneseWebviewTestTheme
import androidx.compose.ui.viewinterop.AndroidView

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            BoldJapaneseWebviewTestTheme {
                WebScreen()
            }
        }
    }
}

@Composable
fun WebScreen(modifier: Modifier = Modifier) {
    Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->
        AndroidView(factory = { context ->
            WebView(context).apply {
                val wv = this

                layoutParams =
                    ViewGroup.LayoutParams(
                        ViewGroup.LayoutParams.MATCH_PARENT,
                        ViewGroup.LayoutParams.MATCH_PARENT,
                    )

                webViewClient = WebViewClient() // Ensures links open inside WebView
                settings.apply {
                    javaScriptEnabled = true
                    domStorageEnabled = true
                    cacheMode = WebSettings.LOAD_DEFAULT
                    supportMultipleWindows()
                    displayZoomControls = false
                    setSupportZoom(true)
                    mediaPlaybackRequiresUserGesture = false
                }

                CookieManager.getInstance().apply {
                    setAcceptCookie(true)
                    setAcceptThirdPartyCookies(wv, true)
                }

                clearCache(true)

                loadUrl("https://bluegreenmagick.github.io/bug-android-webview-bold-japanese-reproduction/")
            }
        }, modifier = modifier.padding(innerPadding))
    }
}

@Preview(showBackground = true)
@Composable
fun WebScreenPreview() {
    BoldJapaneseWebviewTestTheme {
        WebScreen()
    }
}