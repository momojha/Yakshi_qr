// FINAL QR GENERATOR - Yakshi Group
const QRCode = require('qrcode');
const path = require('path');

// 🔗 URL jo QR scan hone par open hoga
// Agar tum "www" wala use karna chaho to neeche wali line use karo:
// const url = "https://www.yakshigroup.com/";
const url = "https://yakshigroup.com/";

// Output same folder: scripts/yakshi_qr.png & scripts/yakshi_qr.svg
const pngPath = path.join(__dirname, 'yakshi_qr.png');
const svgPath = path.join(__dirname, 'yakshi_qr.svg');

(async () => {
  try {
    // High-quality PNG (print + digital)
    await QRCode.toFile(pngPath, url, {
      width: 1000,              // bada resolution, visiting card ke liye safe
      margin: 2,
      errorCorrectionLevel: 'H' // logo lagana ho future me to bhi safe
    });

    // SVG – best for printing
    await QRCode.toFile(svgPath, url);

    console.log("==========================================");
    console.log("✅ QR GENERATED SUCCESSFULLY");
    console.log(" PNG:", pngPath);
    console.log(" SVG:", svgPath);
    console.log(" URL inside QR:", url);
    console.log("==========================================");
  } catch (err) {
    console.error("❌ ERROR:", err);
  }
})();


