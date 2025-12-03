// FINAL QR GENERATOR
const QRCode = require('qrcode');
const path = require('path');
const fs = require('fs');

// Output folder
const outputDir = path.join(__dirname, '..', 'out');

// Create /out folder if not exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// 👇👇👇 IMPORTANT — YAHI FINAL LIVE URL DAALO
// Scan karne par yehi website open hogi
const url = "https://www.yakshigroup.com";
// Agar baad me tracking chahiye ho to aisa bhi kar sakte ho:
// const url = "https://www.yakshigroup.com/?source=qr";

// RUN FUNCTION
(async () => {
  try {
    // High-quality PNG
    await QRCode.toFile(
      path.join(outputDir, 'yakshi_qr.png'),
      url,
      {
        color: {
          dark: '#000000',   // QR Code color
          light: '#FFFFFF'   // Background
        },
        width: 900,  // High resolution for print/download
        margin: 2
      }
    );

    // SVG (optional vector file for print)
    await QRCode.toFile(
      path.join(outputDir, 'yakshi_qr.svg'),
      url
    );

    console.log("===============================================");
    console.log("✅ QR Code PNG Generated:", path.join(outputDir, 'yakshi_qr.png'));
    console.log("✅ QR Code SVG Generated:", path.join(outputDir, 'yakshi_qr.svg'));
    console.log("🎉 Your QR is ready inside /out folder");
    console.log("===============================================");
  } catch (err) {
    console.error("❌ ERROR:", err);
  }
})();

