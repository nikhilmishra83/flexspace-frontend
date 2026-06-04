// src/app/user/dashboard/page.tsx
"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/Button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Calendar, Monitor, CheckCircle2, Download } from "lucide-react";
import Link from "next/link";
import { useAuthStore } from "@/features/auth/store/auth.store";

export default function DashboardPage() {
  const { user } = useAuthStore();
  const displayName = user?.email ? user.email.split('@')[0] : "User";
  const capitalizedName = displayName.charAt(0).toUpperCase() + displayName.slice(1);

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 space-y-12">
      {/* Header */}
      <header>
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900">
          Welcome back, {capitalizedName}
        </h1>
        <p className="text-zinc-500 font-medium mt-2 text-lg">
          Your focus session at The Nordic Atrium starts in 2 hours.
        </p>
      </header>

      {/* Active Plan Card */}
      <Card className="p-8 bg-white border border-zinc-200 shadow-xl shadow-zinc-200/40 rounded-[2rem]">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-green-100 text-green-700 border-none font-black px-3 py-1 uppercase tracking-widest text-[10px]">
                ACTIVE
              </Badge>
              <h2 className="text-3xl font-black tracking-tight text-zinc-900">Pro Plan</h2>
            </div>
            <p className="text-zinc-500 font-medium">
              Unlimited access to all premier locations and dedicated meeting hours.
            </p>
          </div>
          <div className="flex flex-col gap-2 shrink-0">
            <Button className="bg-black text-white hover:bg-zinc-800 rounded-xl px-8 h-12 font-bold text-sm">
              Manage Plan
            </Button>
            <Button variant="ghost" className="text-xs font-bold text-zinc-500 hover:text-black">
              View Billing History
            </Button>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div>
          <div className="flex justify-between text-xs font-bold text-zinc-500 mb-3">
            <span>6 / 8 Daily Hours Used</span>
            <span className="text-blue-600">75% Complete</span>
          </div>
          <Progress value={75} className="h-3 bg-zinc-100 [&>div]:bg-blue-600 rounded-full" />
        </div>
      </Card>

      {/* Split Layout: Bookings & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Left Column: Upcoming Bookings */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-black tracking-tight text-zinc-900">Upcoming Bookings</h2>
            <Link href="#" className="text-xs font-bold text-blue-600 hover:text-black transition-colors">
              View Calendar
            </Link>
          </div>
          
          <div className="space-y-4">
            {/* Booking Card 1 */}
            <Card className="p-6 bg-white border border-zinc-200 shadow-sm rounded-2xl flex items-center justify-between hover:border-blue-200 transition-colors">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex flex-col items-center justify-center border border-zinc-100 shrink-0">
                  <span className="text-[9px] font-black uppercase text-zinc-400">OCT</span>
                  <span className="text-lg font-black text-zinc-900 leading-none">24</span>
                </div>
                <div>
                  <h3 className="font-black text-zinc-900 text-lg">The Nordic Atrium</h3>
                  <div className="flex items-center gap-4 text-xs font-medium text-zinc-500 mt-1">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> 09:00 AM - 01:00 PM</span>
                    <span className="flex items-center gap-1.5"><Monitor className="w-3.5 h-3.5" /> Desk 42</span>
                  </div>
                </div>
              </div>
              <button className="text-xs font-black text-red-500 hover:text-red-700 transition-colors px-4">
                Cancel
              </button>
            </Card>

            {/* Booking Card 2 */}
            <Card className="p-6 bg-white border border-zinc-200 shadow-sm rounded-2xl flex items-center justify-between hover:border-blue-200 transition-colors">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex flex-col items-center justify-center border border-zinc-100 shrink-0">
                  <span className="text-[9px] font-black uppercase text-zinc-400">OCT</span>
                  <span className="text-lg font-black text-zinc-900 leading-none">26</span>
                </div>
                <div>
                  <h3 className="font-black text-zinc-900 text-lg">Glass Tower Suites</h3>
                  <div className="flex items-center gap-4 text-xs font-medium text-zinc-500 mt-1">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> 02:00 PM - 06:00 PM</span>
                    <span className="flex items-center gap-1.5"><Monitor className="w-3.5 h-3.5" /> Desk 18</span>
                  </div>
                </div>
              </div>
              <button className="text-xs font-black text-red-500 hover:text-red-700 transition-colors px-4">
                Cancel
              </button>
            </Card>
          </div>
          
          <div className="pt-4">
             <Link href="/user/spaces">
               <Button className="bg-black text-white hover:bg-zinc-800 rounded-xl px-8 h-12 font-bold text-sm">
                 Book a Desk
               </Button>
             </Link>
          </div>
        </div>

        {/* Right Column: Recent Activity */}
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-black tracking-tight text-zinc-900 mb-6">Recent Activity</h2>
          
          <Card className="p-6 bg-zinc-50 border-none rounded-[2rem]">
            <div className="space-y-6">
              {[
                { title: "The Brickhouse Loft", date: "October 21, 2023", status: "CONFIRMED" },
                { title: "Green Terrace Office", date: "October 18, 2023", status: "CONFIRMED" },
                { title: "Harbor View Desk", date: "October 15, 2023", status: "CONFIRMED" },
                { title: "The Nordic Atrium", date: "October 12, 2023", status: "CONFIRMED" },
              ].map((activity, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <p className="font-bold text-zinc-900 text-sm">{activity.title}</p>
                      <Badge className="bg-green-100 text-green-700 border-none px-2 py-0 font-bold text-[8px] uppercase">
                        {activity.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-zinc-500 font-medium mt-1">{activity.date}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-200 text-center">
              <button className="text-xs font-bold text-zinc-500 hover:text-black flex items-center justify-center gap-2 w-full transition-colors">
                <Download className="w-4 h-4" /> Download All Receipts
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}