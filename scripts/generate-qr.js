
const QRCode = require('qrcode');
const path = require('path');
const fs = require('fs');

const url = 'https://www.diatomusa.com';
const outputPath = path.join(__dirname, '..', 'public', 'qr-diatomusa.png');

console.log(`Generando QR para: ${url}`);

QRCode.toFile(outputPath, url, {
 color: {
  dark: '#000000',  // Black dots
  light: '#0000' // Transparent background
 },
 width: 1000,
 margin: 1
}, function (err) {
 if (err) throw err;
 console.log(`Código QR guardado en: ${outputPath}`);
});
