'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-red-700 text-white p-4 flex justify-between">
      <h1 className="font-bold text-lg">🎓 Smart Campus Toolkit</h1>
      <div className="space-x-4">
        <Link href="/">Home   </Link>
        <Link href="/attendance">Attendance   </Link>
        <Link href="/booking">Booking   </Link>
        <Link href="/certificates">Certificates   </Link>
        <Link href="/fees">Fees   </Link>
        <Link href="/lostfound">Lost & Found    </Link>
        <Link href="/feedback">Feedback   </Link>
        <Link href="/admin">Admin   </Link>
      </div>
    </nav>
  );
}
