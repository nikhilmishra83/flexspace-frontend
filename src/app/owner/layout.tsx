// src/app/owner/layout.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2, LayoutDashboard, Building, CalendarCheck, CircleDollarSign, Users, Settings, Bell, HelpCircle, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/features/auth/store/auth.store";
import { ProtectedRoute } from "@/components/layout/ProtectedRoute";

export default function OwnerLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { user, logout } = useAuthStore();
  const isPending = user?.accountStatus === "PENDING";

  const navLinks = [
    { name: "Dashboard", href: "/owner/dashboard", icon: LayoutDashboard },
    { name: "Properties", href: "/owner/spaces", icon: Building },
    { name: "Bookings", href: "/owner/bookings", icon: CalendarCheck },
    { name: "Revenue", href: "/owner/revenue", icon: CircleDollarSign },
    { name: "Community", href: "/owner/community", icon: Users },
    { name: "Settings", href: "/owner/settings", icon: Settings },
  ];

  return (
    <ProtectedRoute allowedRoles={["OWNER"]}>
      <div className="min-h-screen bg-[#F8F9FA] flex relative">
        {/* Left Sidebar - FIXED TO SCREEN HEIGHT */}
        <aside className="w-64 bg-[#F8F9FA] border-r border-zinc-200 flex-col hidden md:flex sticky top-0 h-screen shrink-0">
          <div className="h-20 flex items-center px-6 border-b border-zinc-200 shrink-0">
            <Link href="/" className="flex items-center gap-2 text-black">
              <Building2 className="w-6 h-6 text-black" />
              <div className="leading-none">
                <span className="text-lg font-black tracking-tighter block">alexSpace</span>
                <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Management Suite</span>
              </div>
            </Link>
          </div>

          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={isPending ? "#" : link.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-bold transition-all",
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100",
                    isPending && "opacity-50 cursor-not-allowed hover:bg-transparent hover:text-zinc-500"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Logout Button Fixed at Bottom */}
          <div className="p-4 border-t border-zinc-200 shrink-0">
            <button 
              onClick={logout}
              className="flex items-center gap-3 px-3 py-2.5 w-full rounded-lg text-sm font-bold text-red-600 hover:bg-red-50 transition-all cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col min-w-0">
          <header className="h-20 bg-white border-b border-zinc-200 flex items-center justify-between px-8 shrink-0">
            <div className="flex-1"></div>
            <div className="flex items-center gap-6">
              <button className="text-zinc-400 hover:text-zinc-900 transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <button className="text-zinc-400 hover:text-zinc-900 transition-colors">
                <HelpCircle className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3 border-l border-zinc-200 pl-6">
                <div className="text-right hidden sm:block">
                  <p className="text-xs font-black text-zinc-900">Owner</p>
                </div>
                <div className="w-9 h-9 rounded-full bg-zinc-200 overflow-hidden shrink-0 border border-zinc-300">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Owner" alt="Profile" />
                </div>
              </div>
            </div>
          </header>

          <div className="flex-1 p-8">
            {children}
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}