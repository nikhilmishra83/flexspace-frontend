// src/app/admin/layout.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2, LayoutDashboard, CheckSquare, Users, CreditCard, Settings, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/features/auth/store/auth.store";
import { ProtectedRoute } from "@/components/layout/ProtectedRoute";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { logout } = useAuthStore();

  const navLinks = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Approvals", href: "/admin/approvals", icon: CheckSquare },
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "Plans", href: "/admin/plans", icon: CreditCard },
  ];

  return (
    <ProtectedRoute allowedRoles={["ADMIN"]}>
      <div className="min-h-screen bg-[#F8F9FA] flex relative">
        {/* Left Sidebar - FIXED TO SCREEN HEIGHT */}
        <aside className="w-64 bg-[#F8F9FA] border-r border-zinc-200 flex-col hidden md:flex sticky top-0 h-screen shrink-0">
          <div className="h-20 flex items-center px-6 border-b border-zinc-200 shrink-0">
            <Link href="/" className="flex items-center gap-2 text-black">
              <Building2 className="w-6 h-6 text-black" />
              <div className="leading-none">
                <span className="text-lg font-black tracking-tighter block">FlexSpace</span>
                <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Platform Admin</span>
              </div>
            </Link>
          </div>

          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-bold transition-all",
                    isActive
                      ? "bg-black text-white shadow-sm"
                      : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100"
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
          <div className="flex-1 p-8">
            {children}
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}