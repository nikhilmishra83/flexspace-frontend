"use client";

import { useState } from "react";
import { CheckCircle2, Wifi, Coffee, Wind, MapPin, Calendar, Clock, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/Button";
import { Progress } from "@/components/ui/progress";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog";
import subData from "@/mocks/subscription.json";

export default function SpaceDetailPage() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedDesk, setSelectedDesk] = useState("12");

  const handleBooking = () => {
    setShowSuccess(true);
  };

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6">
      
      {/* 1. Header Title */}
      <div className="mb-6">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-zinc-900 leading-none">
          Executive Studio 04
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        
        {/* LEFT COLUMN: Content */}
        <div className="lg:col-span-2 space-y-10">
          
          {/* Hero Image Container */}
          <div className="relative aspect-[16/9] rounded-[2.5rem] overflow-hidden bg-zinc-100 border border-zinc-200 shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c" 
              className="w-full h-full object-cover" 
              alt="Space Area"
            />
            {/* Requirement 9: Top right of image, green bg, simple text, no dot */}
            <div className="absolute top-6 right-6 px-5 py-2.5 bg-green-500 rounded-xl text-white font-black text-[10px] uppercase tracking-widest shadow-lg">
              Available Now
            </div>
          </div>

          {/* Info Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-2">
            <div className="space-y-4 text-left">
              <h3 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Amenities</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm font-bold text-zinc-800"><Wifi className="w-4 h-4 text-blue-500"/> High-Speed Fiber</div>
                <div className="flex items-center gap-3 text-sm font-bold text-zinc-800"><Coffee className="w-4 h-4 text-blue-500"/> Premium Roast</div>
                <div className="flex items-center gap-3 text-sm font-bold text-zinc-800"><Wind className="w-4 h-4 text-blue-500"/> Wireless Printing</div>
              </div>
            </div>

            <div className="space-y-4 text-left">
              <h3 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Location</h3>
              <div className="text-sm font-bold text-zinc-800 space-y-1">
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-500"/> District 7, Floor 12</p>
                <p className="text-zinc-400 font-medium pl-6">Creative Commons Wing</p>
              </div>
            </div>
          </div>

          {/* Requirement 9: Left-Aligned Desk List */}
          <div className="space-y-4 px-2">
            <h3 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-6">Select Workspace</h3>
            <div className="space-y-3">
              <Card 
                onClick={() => setSelectedDesk("12")}
                className={`p-4 cursor-pointer transition-all flex items-center justify-between rounded-2xl ${
                  selectedDesk === "12" ? "border-blue-600 bg-blue-50/30 ring-1 ring-blue-600" : "border-zinc-100 bg-white hover:border-zinc-300 shadow-sm"
                }`}
              >
                <div className="flex items-center gap-5 text-left">
                   <div className="w-20 h-14 bg-zinc-200 rounded-xl overflow-hidden shrink-0">
                     <img src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2" className="w-full h-full object-cover" />
                   </div>
                   <div className="text-left">
                     <p className="font-black text-sm text-zinc-900 flex items-center gap-2 leading-none">
                       Desk #12 - Premium <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                     </p>
                     <p className="text-[11px] font-medium text-zinc-500 mt-1.5">Window facing, ergonomic chair, dual monitor arm.</p>
                   </div>
                </div>
                {selectedDesk === "12" && <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />}
              </Card>

              <Card className="p-4 bg-zinc-50 border-zinc-100 opacity-60 cursor-not-allowed flex items-center justify-between rounded-2xl shadow-none">
                <div className="flex items-center gap-5 text-left">
                   <div className="w-20 h-14 bg-zinc-200 rounded-xl overflow-hidden shrink-0">
                     <img src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2" className="w-full h-full object-cover grayscale" />
                   </div>
                   <div className="text-left">
                     <p className="font-black text-sm text-zinc-400">Desk #15 - Private Cube</p>
                     <p className="text-[11px] font-medium text-zinc-400 mt-1.5">Currently occupied until Monday.</p>
                   </div>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Reserved</span>
              </Card>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Requirement 9: Sticky Reservation Card (Tight below navbar) */}
        <div className="relative lg:h-[calc(100vh-120px)] flex flex-col">
          <Card className="sticky top-24 p-8 bg-white border border-zinc-100 shadow-2xl shadow-zinc-200/50 rounded-[2rem] space-y-8 flex flex-col h-full">
            <h2 className="text-3xl font-black tracking-tighter text-zinc-900">Reservation</h2>
            
            <div className="flex-grow space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Date</label>
                <div className="relative">
                  <input type="text" className="w-full bg-zinc-50 border border-zinc-100 text-zinc-900 rounded-xl px-4 py-4 text-sm font-bold outline-none focus:ring-2 focus:ring-blue-100 transition-all" defaultValue="Oct 24, 2024" />
                  <Calendar className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Start Time</label>
                  <div className="relative">
                    <input type="text" className="w-full bg-zinc-50 border border-zinc-100 text-zinc-900 rounded-xl px-4 py-4 text-sm font-bold outline-none" defaultValue="09:00 AM" />
                    <Clock className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">End Time</label>
                  <div className="relative">
                    <input type="text" className="w-full bg-zinc-50 border border-zinc-100 text-zinc-900 rounded-xl px-4 py-4 text-sm font-bold outline-none" defaultValue="01:00 PM" />
                    <Clock className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400" />
                  </div>
                </div>
              </div>

              {/* Subscription Info */}
              <div className="p-5 bg-blue-50/50 border border-blue-100 rounded-2xl flex gap-4 items-start">
                <div className="bg-blue-600 p-2 rounded-xl shrink-0">
                  <Star className="w-4 h-4 text-white fill-white" />
                </div>
                <div className="w-full space-y-2">
                  <div className="flex justify-between items-center">
                    <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Active Plan: {subData.planName}</p>
                    <span className="text-[10px] font-bold text-zinc-500">{subData.remainingHours}h left</span>
                  </div>
                  <Progress value={(subData.usedHours / subData.totalHours) * 100} className="h-1 bg-blue-100" />
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <Button 
                onClick={handleBooking}
                className="w-full bg-blue-600 text-white hover:bg-black py-8 text-xs font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-blue-200 transition-all hover:scale-[1.02]"
              >
                Book Desk
              </Button>
              <p className="text-[9px] text-zinc-400 text-center font-bold tracking-widest uppercase">Confirmed instantly • Zero booking fees</p>
            </div>
          </Card>
        </div>

        {/* 10. Requirement: Compact Success Modal */}
        <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
          <DialogContent className="bg-white border-none sm:max-w-sm text-center p-8 rounded-[2rem] shadow-2xl">
            <DialogHeader className="items-center space-y-3">
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7 text-green-600" />
              </div>
              <DialogTitle className="text-2xl font-black tracking-tighter text-zinc-900 leading-none">Booking Confirmed!</DialogTitle>
              <DialogDescription className="text-[11px] font-medium text-zinc-400 max-w-[200px]">
                Key sent to your email. Check dashboard for access.
              </DialogDescription>
            </DialogHeader>
            
            <div className="bg-zinc-50 rounded-2xl p-5 my-6 text-left border border-zinc-100 space-y-4">
               <div className="flex justify-between items-center border-b border-zinc-200 pb-3">
                 <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">Booking ID</p>
                 <p className="font-black text-zinc-900 text-[10px]">#FS-9021</p>
               </div>
               <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-1">
                    <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">Desk</p>
                    <p className="font-black text-zinc-900 text-xs">Premium 04</p>
                 </div>
                 <div className="space-y-1">
                    <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">Date</p>
                    <p className="font-bold text-zinc-900 text-xs">Oct 24, 2024</p>
                 </div>
               </div>
            </div>

            <div className="space-y-2">
              <Button onClick={() => { window.location.href='/user'; }} className="w-full bg-zinc-900 text-white font-black text-[10px] uppercase tracking-widest rounded-xl py-6">
                Go to Dashboard
              </Button>
              <Button variant="ghost" onClick={() => setShowSuccess(false)} className="w-full text-zinc-400 font-bold text-[10px] uppercase tracking-widest py-4">
                Close
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}