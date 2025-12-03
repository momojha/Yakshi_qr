// // // 

// // const QRCode = require('qrcode');
// // const path = require('path');

// // // 🔗 Sirf ye URL QR ke andar hoga
// // const url = "https://yakshigroup.com/";

// // // Naya file name use kar rahe hain to confusion khatam:
// // const pngPath = path.join(__dirname, 'yakshi_website_qr.png');

// // (async () => {
// //   try {
// //     await QRCode.toFile(pngPath, url, {
// //       width: 1000,
// //       margin: 2,
// //       errorCorrectionLevel: 'H'
// //     });

// //     console.log("✅ NEW WEBSITE QR GENERATED:");
// //     console.log("   File:", pngPath);
// //     console.log("   URL inside QR:", url);
// //   } catch (err) {
// //     console.error("❌ ERROR:", err);
// //   }
// // })();

// const QRCode = require('qrcode');
// const path = require('path');


// const url = "https://momojha.github.io/Yakshi_qr/social-links.html";

// // QR image yahi banega:
// const pngPath = path.join(__dirname, 'yakshi_social_qr.png');

// (async () => {
//   try {
//     await QRCode.toFile(pngPath, url, {
//       width: 1000,
//       margin: 2,
//       errorCorrectionLevel: 'H'
//     });

//     console.log("✅ QR GENERATED");
//     console.log("   File :", pngPath);
//     console.log("   URL  :", url);
//   } catch (err) {
//     console.error("❌ ERROR:", err);
//   }
// })();
const QRCode = require('qrcode');
const path = require('path');

// 👇 Ye URL QR ke andar hoga:
const url = "https://momojha.github.io/Yakshi_qr/social-links.html";

// Output image scripts folder me:
const outPath = path.join(__dirname, 'yakshi_social_qr.png');

(async () => {
  try {
    await QRCode.toFile(outPath, url, {
      width: 1000,
      margin: 2,
      errorCorrectionLevel: 'H'
    });
    console.log("✅ QR generated at:", outPath);
    console.log("   URL inside QR:", url);
  } catch (err) {
    console.error("❌ ERROR:", err);
  }
})();
