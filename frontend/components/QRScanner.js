'use client';
import { useEffect } from 'react';

export default function QRScanner({ onScan }) {
  useEffect(() => {
    // Placeholder: attach QR logic
    console.log("🔍 QR scanner activated");
  }, []);

  return (
    <div className="border p-4 bg-white shadow rounded">
      <p className="text-sm text-gray-500">[QR Scanner Placeholder]</p>
    </div>
  );
}
