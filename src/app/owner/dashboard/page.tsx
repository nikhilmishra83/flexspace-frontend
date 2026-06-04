// src/app/owner/dashboard/page.tsx
"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
import { Banknote, Ticket, Activity, Filter, Download, MoreHorizontal } from "lucide-react";

// Mock data matching the Figma design
const checkinsData = [
  { id: 1, name: "Alex Rivera", space: "Industrial Lofts NYC", desk: "Desk B-12", time: "09:00 AM - 05:00 PM", status: "Checked-in", avatar: "Alex" },
  { id: 2, name: "Sarah Chen", space: "The Glass House", desk: "Lounge 04", time: "11:30 AM - 04:00 PM", status: "Upcoming", avatar: "Sarah" },
  { id: 3, name: "Jordan Smith", space: "Industrial Lofts NYC", desk: "Desk A-07", time: "08:00 AM - 12:00 PM", status: "Checked-in", avatar: "Jordan" },
  { id: 4, name: "Elena Rodriguez", space: "Summit Heights", desk: "Meeting Rm 02", time: "02:00 PM - 05:00 PM", status: "Upcoming", avatar: "Elena" },
];

export default function OwnerDashboard() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 mt-2">
      {/* Page Header */}
      <div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 leading-none mb-2">
          Dashboard
        </h1>
        <p className="text-zinc-500 font-medium text-lg">
          Welcome back. Here is what is happening at your spaces today.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Revenue */}
        <Card className="p-8 bg-white border-none shadow-sm rounded-3xl hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-zinc-100 rounded-2xl">
              <Banknote className="w-6 h-6 text-zinc-600" />
            </div>
            <div className="bg-green-50 text-green-700 text-[10px] font-black px-3 py-1.5 rounded-full flex items-center gap-1">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m3 16 4-4 4 4 8-8"/><path d="m14 8h5v5"/></svg>
              12%
            </div>
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1">Total Revenue</p>
            <h2 className="text-4xl font-black tracking-tighter text-zinc-900">$24,480.00</h2>
          </div>
        </Card>

        {/* Active Bookings */}
        <Card className="p-8 bg-white border-none shadow-sm rounded-3xl hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-zinc-100 rounded-2xl">
              <Ticket className="w-6 h-6 text-zinc-600" />
            </div>
            <div className="bg-green-50 text-green-700 text-[10px] font-black px-3 py-1.5 rounded-full flex items-center gap-1">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m3 16 4-4 4 4 8-8"/><path d="m14 8h5v5"/></svg>
              5%
            </div>
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1">Active Bookings Today</p>
            <h2 className="text-4xl font-black tracking-tighter text-zinc-900">142</h2>
          </div>
        </Card>

        {/* Occupancy Rate */}
        <Card className="p-8 bg-white border-none shadow-sm rounded-3xl hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-zinc-100 rounded-2xl">
              <Activity className="w-6 h-6 text-zinc-600" />
            </div>
            <div className="bg-red-50 text-red-600 text-[10px] font-black px-3 py-1.5 rounded-full flex items-center gap-1">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m3 8 4 4 4-4 8 8"/><path d="m14 16h5v-5"/></svg>
              2%
            </div>
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1">Overall Occupancy Rate</p>
            <h2 className="text-4xl font-black tracking-tighter text-zinc-900">86.4%</h2>
          </div>
        </Card>
      </div>

      {/* Main Table Area */}
      <Card className="bg-white border-none shadow-sm rounded-[2rem] overflow-hidden">
        {/* Table Header Controls */}
        <div className="p-8 flex justify-between items-center border-b border-zinc-100">
          <h2 className="text-2xl font-black tracking-tight text-zinc-900">Today's Check-ins</h2>
          <div className="flex items-center gap-3">
            <Button variant="secondary" className="bg-zinc-100 text-zinc-700 hover:bg-zinc-200 font-bold rounded-xl h-10 px-4 text-xs flex items-center gap-2">
              <Filter className="w-4 h-4" /> Filter
            </Button>
            <Button variant="secondary" className="bg-zinc-100 text-zinc-700 hover:bg-zinc-200 font-bold rounded-xl h-10 px-4 text-xs flex items-center gap-2">
              <Download className="w-4 h-4" /> Export
            </Button>
          </div>
        </div>

        {/* The Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-zinc-50/50 text-[10px] uppercase font-black tracking-widest text-zinc-500 border-b border-zinc-100">
              <tr>
                <th className="px-8 py-5">User Name</th>
                <th className="px-8 py-5">Space Name</th>
                <th className="px-8 py-5">Desk Number</th>
                <th className="px-8 py-5">Time Slot</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {checkinsData.map((row) => (
                <tr key={row.id} className="hover:bg-zinc-50 transition-colors">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-zinc-200 overflow-hidden shrink-0 border border-zinc-300">
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${row.avatar}`} alt={row.name} />
                      </div>
                      <p className="font-black text-zinc-900 text-sm">{row.name}</p>
                    </div>
                  </td>
                  <td className="px-8 py-5 font-medium text-zinc-600">{row.space}</td>
                  <td className="px-8 py-5 font-medium text-zinc-600">{row.desk}</td>
                  <td className="px-8 py-5 font-medium text-zinc-600">{row.time}</td>
                  <td className="px-8 py-5">
                    {row.status === "Checked-in" ? (
                      <Badge className="bg-green-100 text-green-700 border-none font-bold text-[10px] px-3 py-1 shadow-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 animate-pulse" />
                        Checked-in
                      </Badge>
                    ) : (
                      <Badge className="bg-blue-50 text-blue-600 border-none font-bold text-[10px] px-3 py-1 shadow-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                        Upcoming
                      </Badge>
                    )}
                  </td>
                  <td className="px-8 py-5 text-center">
                    <button className="text-zinc-400 hover:text-zinc-900 transition-colors p-2 rounded-lg hover:bg-zinc-100">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer / Pagination */}
        <div className="p-6 border-t border-zinc-100 flex items-center justify-between">
          <p className="text-xs font-bold text-zinc-500">Showing 4 of 142 bookings</p>
          <div className="flex gap-2">
            <Button variant="outline" className="border-zinc-200 text-zinc-500 font-bold rounded-xl h-10">Previous</Button>
            <Button className="bg-[#18181B] text-white hover:bg-black font-bold rounded-xl h-10 px-6">Next</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}