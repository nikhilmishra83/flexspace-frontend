// src/app/(auth)/layout.tsx
"use client";

import Link from "next/link";
import { Building2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/features/auth/store/auth.store";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, user } = useAuthStore();
  const router = useRouter();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated && isAuthenticated && user) {
      // Redirect logged-in users to their dashboards
      if (user.role === "ADMIN") router.push("/admin/dashboard");
      else if (user.role === "OWNER") router.push(user.accountStatus === "PENDING" ? "/owner/pending" : "/owner/dashboard");
      else router.push("/user/dashboard");
    }
  }, [isAuthenticated, isHydrated, router, user]);

  // Don't flash the login form while redirecting
  if (!isHydrated || isAuthenticated) return null;

  return (
    <div className="min-h-screen flex w-full bg-white">

      <div className="hidden lg:flex w-1/2 relative bg-zinc-900 flex-col justify-between p-12 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" alt="Workspace" className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay" />
        <div className="relative z-10 flex items-center gap-2 text-white">
          <Building2 className="w-8 h-8" />
          <span className="text-2xl font-black tracking-tighter">FlexSpace</span>
        </div>
        <div className="relative z-10 space-y-4">
          <h1 className="text-5xl font-black text-white tracking-tighter leading-tight">Focus defined by design.</h1>
          <p className="text-lg text-zinc-300 font-medium">Curated workspaces for the architectural mind.</p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 sm:p-12 relative">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}