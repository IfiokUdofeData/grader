import ExpoModulesCore
import UIKit


public class MyModule: Module {
  public func definition() -> ModuleDefinition {
    
    Name("MyModule")

    Function("setTheme") { (theme: String) -> Void in
      UserDefaults.standard.set(theme, forKey:"theme")
    }

    Events("onChangeTheme")

    Function("setTheme") { (theme: String) -> Void in
      UserDefaults.standard.set(theme, forKey:"theme")
      sendEvent("onChangeTheme", [
        "theme": theme
      ])
    }

    Function("getTheme") { () -> String in
      UserDefaults.standard.string(forKey: "theme") ?? "system"
    }

    Function("hello") {
      return "Hello world! 👋"
    }

    Function("extractPixels") { (imageUrl: String) -> [Int] in
      return try extractPixels(from: imageUrl)
    }

  }


    private func extractPixels(from imageUrl: String) throws -> [Int] {
    guard let url = URL(string: imageUrl) else {
      throw NSError(domain: "InvalidURL", code: 400, userInfo: [NSLocalizedDescriptionKey: "Invalid URL"])
    }

    guard let data = try? Data(contentsOf: url),
          let image = UIImage(data: data) else {
      throw NSError(domain: "ImageProcessing", code: 500, userInfo: [NSLocalizedDescriptionKey: "Failed to load image"])
    }

    guard let cgImage = image.cgImage else {
      throw NSError(domain: "ImageProcessing", code: 500, userInfo: [NSLocalizedDescriptionKey: "Failed to get CGImage"])
    }

    let width = cgImage.width
    let height = cgImage.height

    guard let colorSpace = cgImage.colorSpace else {
      throw NSError(domain: "ImageProcessing", code: 500, userInfo: [NSLocalizedDescriptionKey: "Failed to get color space"])
    }

    let bytesPerPixel = 4
    let bytesPerRow = bytesPerPixel * width
    let bitsPerComponent = 8

    var pixelData = [UInt8](repeating: 0, count: width * height * bytesPerPixel)
    pixelData.withUnsafeMutableBytes { pointer in
      let context = CGContext(data: pointer.baseAddress,
                              width: width,
                              height: height,
                              bitsPerComponent: bitsPerComponent,
                              bytesPerRow: bytesPerRow,
                              space: colorSpace,
                              bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue)

      context?.draw(cgImage, in: CGRect(x: 0, y: 0, width: CGFloat(width), height: CGFloat(height)))
    }

    // Convert pixel data to a list of integers (flatten RGBA values)
    var pixels = [Int]()
    for i in stride(from: 0, to: pixelData.count, by: 4) {
      let r = Int(pixelData[i])
      let g = Int(pixelData[i + 1])
      let b = Int(pixelData[i + 2])
      let a = Int(pixelData[i + 3])
      pixels.append((a << 24) | (r << 16) | (g << 8) | b) // Pack RGBA into a single Int
    }

    return pixels
  }
}

