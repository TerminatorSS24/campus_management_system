// copyAbis.js
const fs = require('fs');
const path = require('path');

const contracts = [
  'AttendanceSBT',
  'RoomBookingNFT',
  'CertificateVault',
  'FeeReceiptSBT',
  'LostAndFound',
  'FeedbackCollector',
  'CampusAdmin',
];

const buildDir = path.join(__dirname, 'build', 'contracts');
const targetDir = path.join(__dirname, 'frontend', 'abis');

// Ensure target directory exists
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

contracts.forEach((contractName) => {
  const srcPath = path.join(buildDir, `${contractName}.json`);
  const destPath = path.join(targetDir, `${contractName}.json`);

  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`✅ Copied: ${contractName}.json`);
  } else {
    console.warn(`⚠️  Missing: ${contractName}.json not found in build/contracts`);
  }
});
