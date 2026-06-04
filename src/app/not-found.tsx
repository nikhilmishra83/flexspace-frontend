// src/app/not-found.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuthStore } from "@/features/auth/store/auth.store";
import { Button } from "@/components/ui/Button";
import { MapPinOff, ArrowLeft } from "lucide-react";

export default function NotFound() {
  const { isAuthenticated, user } = useAuthStore();
  const [homePath, setHomePath] = useState("/");

  // Determine correct home path based on role
  useEffect(() => {
    if (isAuthenticated && user) {
      if (user.role === "ADMIN") setHomePath("/admin/dashboard");
      else if (user.role === "OWNER") {
        setHomePath(user.accountStatus === "PENDING" ? "/owner/pending" : "/owner/spaces");
      } else {
        setHomePath("/user/dashboard");
      }
    } else {
      setHomePath("/");
    }
  }, [isAuthenticated, user]);

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex items-center justify-center p-4 font-sans">
      <div className="bg-white border border-zinc-200 rounded-[2.5rem] p-10 md:p-16 max-w-lg w-full text-center flex flex-col items-center shadow-2xl shadow-zinc-200/40">
        
        {/* Themed Icon */}
        <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-8 border border-blue-100">
          <MapPinOff className="w-10 h-10 text-blue-600" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-4">
          Lost in space?
        </h1>
        
        <p className="text-zinc-500 font-medium text-base mb-10 leading-relaxed">
          We couldn't find the location you're looking for. It might have been moved, or the URL is incorrect.
        </p>
        
        <Link href={homePath} className="w-full">
          <Button className="w-full bg-black text-white hover:bg-zinc-800 rounded-xl h-14 font-bold flex items-center justify-center gap-2 transition-all shadow-md hover:scale-[1.02]">
            <ArrowLeft className="w-4 h-4" />
            Return to Safety
          </Button>
        </Link>

      </div>
    </div>
  );
}