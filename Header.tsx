
'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-800" style={{ fontFamily: "Pacifico, serif" }}>
            WebDev Pro
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
              Home
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
              About
            </Link>
            <Link href="#services" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
              Services
            </Link>
            <Link href="#portfolio" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
              Portfolio
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
