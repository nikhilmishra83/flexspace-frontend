import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/Button";
import { Calendar } from "lucide-react";

export default function UserDashboard() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 space-y-12">
      <header>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900">Welcome back, Alex</h1>
        <p className="text-zinc-500 font-medium mt-2">Your productivity landscape for today.</p>
      </header>

      {/* Daily Usage Status Card */}
      <Card className="p-8 bg-white border-none shadow-sm rounded-2xl">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Daily Usage Status</p>
            <h2 className="text-3xl font-extrabold tracking-tight">4 of 8 hours used</h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-green-700 uppercase tracking-wider">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            Active Session: Studio B
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="relative w-full h-4 bg-zinc-100 rounded-full overflow-hidden mt-8 mb-3">
          <div className="absolute top-0 left-0 h-full bg-black w-1/2 rounded-full"></div>
        </div>
        
        <div className="flex justify-between text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
          <span>08:00 AM</span>
          <span>04:00 PM (Target)</span>
        </div>
      </Card>

      {/* Upcoming Bookings */}
      <section className="space-y-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold tracking-tight">Upcoming Bookings</h2>
          <button className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-black transition-colors">View History</button>
        </div>
        
        <div className="space-y-3">
          {/* Booking Row 1 */}
          <Card className="p-5 bg-white border-none shadow-sm rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-6 w-full">
              <div className="w-12 h-12 bg-zinc-50 rounded-xl flex items-center justify-center shrink-0 border border-zinc-100">
                <Calendar className="w-5 h-5 text-zinc-400" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                <div>
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Space Name</p>
                  <p className="font-bold text-zinc-900 text-sm">The Greenhouse</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Desk #</p>
                  <p className="font-medium text-zinc-900 text-sm">Desk 42</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Date</p>
                  <p className="font-medium text-zinc-900 text-sm">Oct 24, 2024</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Time</p>
                  <p className="font-medium text-zinc-900 text-sm">09:00 - 17:00</p>
                </div>
              </div>
            </div>
            <button className="text-[10px] font-bold text-red-600 hover:text-red-700 uppercase tracking-widest mt-4 md:mt-0 px-4">Cancel</button>
          </Card>

          {/* Booking Row 2 */}
          <Card className="p-5 bg-white border-none shadow-sm rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-6 w-full">
              <div className="w-12 h-12 bg-zinc-50 rounded-xl flex items-center justify-center shrink-0 border border-zinc-100">
                <Calendar className="w-5 h-5 text-zinc-400" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                <div>
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Space Name</p>
                  <p className="font-bold text-zinc-900 text-sm">Skyline Lounge</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Desk #</p>
                  <p className="font-medium text-zinc-900 text-sm">Desk 108</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Date</p>
                  <p className="font-medium text-zinc-900 text-sm">Oct 26, 2024</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Time</p>
                  <p className="font-medium text-zinc-900 text-sm">13:00 - 18:00</p>
                </div>
              </div>
            </div>
            <button className="text-[10px] font-bold text-red-600 hover:text-red-700 uppercase tracking-widest mt-4 md:mt-0 px-4">Cancel</button>
          </Card>
        </div>
      </section>

      {/* Action Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <Card className="p-8 bg-zinc-100 border-none rounded-2xl">
          <h3 className="text-2xl font-bold tracking-tight text-zinc-900 mb-3">Discover New Horizons</h3>
          <p className="text-zinc-500 text-sm mb-8 max-w-sm">Access our newly opened rooftop workspaces in the downtown district.</p>
          <Button className="bg-black text-white hover:bg-zinc-800 rounded-lg px-6 font-bold text-xs uppercase tracking-widest py-6">Explore Spaces</Button>
        </Card>
        
        <Card className="p-8 bg-zinc-100 border-none rounded-2xl">
          <h3 className="text-2xl font-bold tracking-tight text-zinc-900 mb-3">Refer a Colleague</h3>
          <p className="text-zinc-500 text-sm mb-8 max-w-sm">Earn credit towards your next booking by inviting your professional network.</p>
          <Button className="bg-black text-white hover:bg-zinc-800 rounded-lg px-6 font-bold text-xs uppercase tracking-widest py-6">Get Invite Link</Button>
        </Card>
      </div>
    </div>
  );
}