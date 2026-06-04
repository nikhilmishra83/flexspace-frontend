// src/app/admin/dashboard/page.tsx
"use client";

import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip } from "recharts";
import { Users, Building, BadgeCheck, Banknote, CalendarCheck, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/Button";

// Static Data for Chart
const revenueData = [
  { name: "JAN", total: 3200 },
  { name: "FEB", total: 4100 },
  { name: "MAR", total: 3800 },
  { name: "APR", total: 6500, active: true }, // Highlighted bar
  { name: "MAY", total: 5400 },
  { name: "JUN", total: 6100 },
  { name: "JUL", total: 9200, dark: true },  // Darkest bar
  { name: "AUG", total: 7800 },
  { name: "SEP", total: 6300 },
  { name: "OCT", total: 5100 },
];

export default function AdminDashboardPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 mt-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 leading-none">
            Admin Overview
          </h1>
          <p className="text-zinc-500 font-medium mt-2">
            Real-time platform performance and management metrics.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" className="bg-zinc-200 text-zinc-900 hover:bg-zinc-300 font-bold rounded-xl h-12 px-6">
            Download Report
          </Button>
          <Button className="bg-[#18181B] text-white hover:bg-black font-bold rounded-xl h-12 px-6">
            Create New Space
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard title="TOTAL PLATFORM USERS" value="12,450" icon={Users} trend="+12%" />
        <MetricCard title="TOTAL SPACES" value="840" icon={Building} trend="+5%" />
        <MetricCard title="ACTIVE SUBSCRIPTIONS" value="6,200" icon={BadgeCheck} badge="Active" theme="dark" />
        <MetricCard title="MONTHLY MRR" value="$142,000" icon={Banknote} badge="Live" theme="blue" />
      </div>

      {/* Main Grid: Chart & Activity Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Chart Section */}
        <div className="lg:col-span-2 bg-zinc-50 rounded-[2rem] p-8">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="text-xl font-black text-zinc-900 tracking-tight">Revenue over time</h3>
              <p className="text-sm font-medium text-zinc-500">Monthly performance trajectory for the current year</p>
            </div>
            <select className="bg-white border border-zinc-200 text-xs font-bold px-4 py-2 rounded-full outline-none shadow-sm cursor-pointer">
              <option>Last 12 Months</option>
              <option>This Year</option>
            </select>
          </div>
          
          <div className="h-[300px] w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: '#71717A', fontWeight: 'bold' }} 
                  dy={10}
                />
                <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }} />
                <Bar 
                  dataKey="total" 
                  radius={[4, 4, 0, 0]}
                  fill="#E4E4E7"
                  shape={(props: any) => {
                    const { active, dark, x, y, width, height } = props;
                    let fill = "#E4E4E7"; // default light gray
                    if (active) fill = "#0052FF"; // vibrant blue
                    if (dark) fill = "#18181B"; // nearly black
                    return <rect x={x} y={y} width={width} height={height} fill={fill} rx={4} ry={4} />;
                  }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* System Activity Feed */}
        <div className="bg-white border border-zinc-100 rounded-[2rem] p-8 shadow-sm">
          <h3 className="text-xl font-black text-zinc-900 tracking-tight mb-8">System Activity Feed</h3>
          
          <div className="space-y-8">
            <ActivityItem 
              avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Julian"
              text={<><b>Julian Vane</b> registered as a new provider</>}
              time="2 minutes ago"
              icon="plus"
            />
            <ActivityItem 
              iconType="calendar"
              text={<>Booking <b>#8920</b> confirmed at The Loft Space</>}
              time="15 minutes ago"
            />
            <ActivityItem 
              avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
              text={<><b>Sarah Jenkins</b> upgraded to Premium Plan</>}
              time="1 hour ago"
              icon="check"
            />
            <ActivityItem 
              iconType="alert"
              text={<>High traffic alert in London Region</>}
              time="3 hours ago"
            />
          </div>

          <Button variant="ghost" className="w-full mt-8 text-blue-600 font-bold hover:bg-blue-50">
            View All Activity
          </Button>
        </div>

      </div>
    </div>
  );
}

// --- Subcomponents for clean code ---

function MetricCard({ title, value, icon: Icon, trend, badge, theme = "light" }: any) {
  const isDark = theme === "dark";
  const isBlue = theme === "blue";
  
  return (
    <div className={`p-6 rounded-[2rem] border relative overflow-hidden transition-all ${
      isDark ? "bg-[#272A2D] border-transparent text-white" : 
      isBlue ? "bg-[#0052FF] border-transparent text-white" : 
      "bg-white border-zinc-100 text-zinc-900 shadow-sm hover:shadow-md"
    }`}>
      <div className="flex justify-between items-start mb-10">
        <div className={`p-2.5 rounded-xl ${isDark ? "bg-white/10" : isBlue ? "bg-white/20" : "bg-zinc-100"}`}>
          <Icon className="w-5 h-5" />
        </div>
        {trend && (
          <div className="bg-green-100 text-green-700 text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-wider">
            {trend}
          </div>
        )}
        {badge && (
          <div className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest ${
            isDark ? "border border-zinc-600 text-zinc-300" : "bg-white/20 text-white"
          }`}>
            {badge}
          </div>
        )}
      </div>
      <div>
        <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${
          isDark || isBlue ? "text-white/70" : "text-zinc-400"
        }`}>{title}</p>
        <h2 className="text-4xl font-black tracking-tighter leading-none">{value}</h2>
      </div>
    </div>
  );
}

function ActivityItem({ avatar, iconType, text, time, icon }: any) {
  return (
    <div className="flex gap-4 items-start">
      <div className="relative shrink-0 mt-1">
        {avatar ? (
          <img src={avatar} className="w-10 h-10 rounded-full bg-zinc-100 border border-zinc-200" alt="Avatar" />
        ) : (
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
            iconType === 'alert' ? 'bg-red-50 text-red-500' : 'bg-zinc-50 text-zinc-500'
          }`}>
            {iconType === 'alert' ? <AlertTriangle className="w-5 h-5" /> : <CalendarCheck className="w-5 h-5" />}
          </div>
        )}
        
        {/* Status indicator dot */}
        {icon && (
          <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white flex items-center justify-center ${
            icon === 'plus' ? 'bg-blue-500' : 'bg-green-500'
          }`}>
            <span className="text-white text-[8px] leading-none font-bold">
              {icon === 'plus' ? '+' : '✓'}
            </span>
          </div>
        )}
      </div>
      <div>
        <p className="text-sm text-zinc-800 leading-snug">{text}</p>
        <p className="text-xs text-zinc-400 font-medium mt-1">{time}</p>
      </div>
    </div>
  );
}