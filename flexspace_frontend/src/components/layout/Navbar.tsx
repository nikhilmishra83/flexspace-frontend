"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Building2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Find a Desk', href: '/user/spaces' },
    { name: 'My Bookings', href: '/user' },
  ];

  return (
    <header className="border-b border-zinc-100 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2 text-black shrink-0">
            <Building2 className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-black tracking-tighter">FlexSpace</span>
          </Link>

          <nav className="hidden md:flex gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={cn(
                  "text-sm font-bold tracking-tight transition-colors px-2 py-1 rounded-md",
                  pathname === link.href ? "text-blue-600 bg-blue-50/50" : "text-zinc-500 hover:text-black"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 border-l pl-6 border-zinc-100">
              <div className="w-10 h-10 rounded-full bg-zinc-200 overflow-hidden shrink-0 border-2 border-white shadow-sm">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Profile" />
              </div>
              <div className="text-left leading-tight hidden sm:block">
                <p className="text-xs font-black uppercase tracking-tighter text-zinc-900">Alex Rivera</p>
                <p className="text-[10px] text-blue-600 font-bold uppercase tracking-widest">Premium Member</p>
              </div>
            </div>
            <Link href="/" className="text-[10px] font-black text-zinc-400 hover:text-red-500 uppercase tracking-widest transition-colors">
              Sign Out
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}