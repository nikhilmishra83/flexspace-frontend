// src/components/layout/ProtectedRoute.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuthStore } from "@/features/auth/store/auth.store";
import { Loader2 } from "lucide-react";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: Array<"USER" | "OWNER" | "ADMIN">;
}

export function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const { isAuthenticated, user } = useAuthStore();
  const router = useRouter();
  const pathname = usePathname();
  const [isHydrated, setIsHydrated] = useState(false);

  // Wait for Zustand to load from localStorage
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    // 1. Not logged in? Redirect to appropriate login page
    if (!isAuthenticated) {
      if (pathname.startsWith("/admin")) {
        router.push("/admin-login");
      } else {
        router.push("/login");
      }
      return;
    }

    // 2. Logged in, but wrong role? Redirect to their own dashboard
    if (allowedRoles && user && !allowedRoles.includes(user.role)) {
      if (user.role === "ADMIN") router.push("/admin/approvals");
      else if (user.role === "OWNER") router.push("/owner/dashboard");
      else router.push("/user/dashboard");
    }
  }, [isAuthenticated, isHydrated, router, user, allowedRoles, pathname]);

  // Show a blank/loading screen while hydrating or redirecting
  if (!isHydrated || !isAuthenticated || (allowedRoles && user && !allowedRoles.includes(user.role))) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Loader2 className="w-8 h-8 animate-spin text-zinc-300" />
      </div>
    );
  }

  return <>{children}</>;
}