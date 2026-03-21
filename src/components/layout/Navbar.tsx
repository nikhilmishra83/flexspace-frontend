// src/components/layout/Navbar.tsx
import Link from 'next/link';
import { Building2, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-black hover:opacity-80 transition">
            <Building2 className="w-6 h-6" />
            <span className="text-xl font-bold tracking-tight">FlexSpace</span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex gap-6">
            <Link href="/spaces" className="text-sm font-medium text-gray-600 hover:text-black">
              Find a Desk
            </Link>
            <Link href="/dashboard" className="text-sm font-medium text-gray-600 hover:text-black">
              My Bookings
            </Link>
          </nav>

          {/* User Actions */}
          <div className="flex items-center gap-4">
            <Link href="/login" className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black">
              <User className="w-5 h-5" />
              <span>Sign In</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}