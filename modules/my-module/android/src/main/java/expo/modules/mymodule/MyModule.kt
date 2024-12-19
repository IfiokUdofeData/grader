package expo.modules.mymodule

import android.content.Context
import android.content.SharedPreferences
import androidx.core.os.bundleOf
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

import android.graphics.Bitmap
import android.graphics.BitmapFactory
import java.net.URL



class MyModule : Module() {
    override fun definition() = ModuleDefinition {
      
    Name("MyModule")

    Events("onChangeTheme")

    Function("setTheme") { theme: String ->
      getPreferences().edit().putString("theme", theme).commit()
      this@MyModule.sendEvent("onChangeTheme", bundleOf("theme" to theme))
    }

    Function("getTheme") {
      return@Function getPreferences().getString("theme", "system")
    }

    Function("hello") {
      "Hello world! 👋"
    }

    Function("extractPixels") { imageUrl: String ->
        extractPixelsFromUrl(imageUrl)
    }

  }

  private val context
  get() = requireNotNull(appContext.reactContext)

  private fun getPreferences(): SharedPreferences {
    return context.getSharedPreferences(context.packageName + ".settings", Context.MODE_PRIVATE)
  }

  private fun extractPixelsFromUrl(imageUrl: String): List<Int> {
    try {
        // Load the image from the URL
        val inputStream = URL(imageUrl).openStream()
        val bitmap: Bitmap = BitmapFactory.decodeStream(inputStream)

        // Get image dimensions
        val width = bitmap.width
        val height = bitmap.height

        // Retrieve pixel data
        val pixels = IntArray(width * height)
        bitmap.getPixels(pixels, 0, width, 0, 0, width, height)

        // Convert IntArray to List<Int> (JavaScript-compatible)
        return pixels.toList()
    } catch (e: Exception) {
        throw IllegalArgumentException("Failed to process image: ${e.message}")
    }
  }

}






