import React from 'react';
import '../styles/globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Smart Campus Toolkit',
  description: 'A modular Web3 smart campus platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
