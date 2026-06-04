// src/app/error.tsx
"use client";

import { Button } from "@/components/ui/Button";
import { Wrench } from "lucide-react";

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col items-center justify-center p-4 font-sans">
      <div className="bg-white border border-zinc-200 rounded-[2.5rem] p-10 md:p-16 max-w-lg w-full text-center flex flex-col items-center shadow-2xl shadow-zinc-200/40">
        
        <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mb-8 border border-red-100">
          <Wrench className="w-10 h-10 text-red-500" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-black text-zinc-900 tracking-tighter mb-4">
          Minor Turbulence
        </h2>
        
        <p className="text-zinc-500 font-medium mb-10 leading-relaxed">
          Something went wrong on our end. Our engineering team has been notified and is looking into it.
        </p>
        
        <Button 
          onClick={() => reset()} 
          className="w-full bg-black text-white hover:bg-zinc-800 rounded-xl h-14 font-bold tracking-widest uppercase text-[10px] transition-all shadow-md hover:scale-[1.02]"
        >
          Try Again
        </Button>
      </div>
    </div>
  );
}