// src/app/owner/pending/page.tsx
"use client";

import { Hourglass, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function OwnerPendingPage() {
  return (
    <div className="max-w-3xl mx-auto mt-10">
      <Card className="bg-white border-none shadow-xl shadow-zinc-200/50 rounded-[2rem] p-12 text-center flex flex-col items-center">
        <div className="w-24 h-24 bg-zinc-50 rounded-full flex items-center justify-center mb-8 border border-zinc-100 shadow-sm">
          <Hourglass className="w-10 h-10 text-zinc-400 animate-pulse" />
        </div>
        
        <h1 className="text-5xl font-black tracking-tighter text-zinc-900 mb-6">
          Application Under Review
        </h1>
        
        <p className="text-lg text-zinc-500 font-medium max-w-lg mb-10 leading-relaxed">
          Thank you for registering as a <span className="text-blue-600 font-bold">FlexSpace Partner</span>. 
          Our admin team is currently reviewing your application. You will receive an email once approved to start listing your spaces.
        </p>

        <div className="flex gap-4 mb-12">
          <div className="flex items-center gap-2 bg-zinc-100 px-4 py-2 rounded-lg text-xs font-bold text-zinc-600 uppercase tracking-widest">
            <FileText className="w-4 h-4" />
            Verification Pending
          </div>
          <div className="flex items-center gap-2 bg-zinc-100 px-4 py-2 rounded-lg text-xs font-bold text-zinc-600 uppercase tracking-widest">
            <Hourglass className="w-4 h-4" />
            Est: 24-48 Hours
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-left border-t border-zinc-100 pt-10">
          <div className="bg-zinc-50 p-6 rounded-2xl">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">While you wait</h3>
            <p className="text-sm font-medium text-zinc-700 mb-4">
              Take a look at our <Link href="#" className="text-blue-600 font-bold hover:underline">Partner Guide</Link> to learn how to optimize your workspace photography for maximum conversions.
            </p>
          </div>
          
          <div className="bg-zinc-50 p-6 rounded-2xl">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">Support</h3>
            <p className="text-sm font-medium text-zinc-700 mb-4">
              Questions about your application? Our curator support team is here to assist you throughout the onboarding journey.
            </p>
            <Link href="#" className="text-sm font-bold text-black flex items-center gap-1 hover:text-blue-600 transition-colors">
              Contact Support <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}
