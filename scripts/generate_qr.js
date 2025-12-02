// 
const QRCode = require('qrcode');
const path = require('path');
const fs = require('fs');

// Output folder
const outputDir = path.join(__dirname, '..', 'out');

// Create /out folder if not exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

// Landing page link (yahi scan hone par khulega)
const url = "http://127.0.0.1:8080/social-links.html";

(async () => {
    try {
        // PNG generate
        await QRCode.toFile(
            path.join(outputDir, 'yakshi_qr.png'),
            url,
            {
                color: {
                    dark: '#000000',
                    light: '#FFFFFF'
                },
                width: 500
            }
        );

        // SVG generate
        await QRCode.toFile(
            path.join(outputDir, 'yakshi_qr.svg'),
            url
        );

        console.log("✅ QR Code PNG Generated:", path.join(outputDir, 'yakshi_qr.png'));
        console.log("✅ QR Code SVG Generated:", path.join(outputDir, 'yakshi_qr.svg'));
        console.log("🎉 Your QR is ready inside /out folder");
    } catch (err) {
        console.error("❌ ERROR:", err);
    }
})();