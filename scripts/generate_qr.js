// New clean QR generator ONLY for website
const QRCode = require('qrcode');
const path = require('path');

// 👇 Sirf ye URL QR ke andar hoga
const url = "https://yakshigroup.com/";

// Naya file name taaki confusion na ho:
const pngPath = path.join(__dirname, 'yakshi_website_qr.png');

(async () => {
  try {
    await QRCode.toFile(pngPath, url, {
      width: 1000,
      margin: 2,
      errorCorrectionLevel: 'H'
    });

    console.log("✅ NEW WEBSITE QR GENERATED:");
    console.log("   File:", pngPath);
    console.log("   URL inside QR:", url);
  } catch (err) {
    console.error("❌ ERROR:", err);
  }
})();



