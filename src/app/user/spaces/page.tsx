"use client";
import { useState } from "react";
import Link from "next/link";
import Select from 'react-select';
import { Search, MapPin, Calendar, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import spacesData from "@/mocks/spaces.json";
import cities from "@/mocks/cities.json";

export default function DiscoveryPage() {
  const [selectedCities, setSelectedCities] = useState([]);
  const [includeUnavailable, setIncludeUnavailable] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      <div className="space-y-3">
        <h1 className="text-6xl font-black tracking-tighter text-zinc-900 leading-none">Find your perfect workspace</h1>
        <p className="text-zinc-400 text-lg font-medium max-w-xl">High-performance environments designed for deep focus and seamless collaboration.</p>
      </div>

      {/* Modern Search Pill */}
      <div className="bg-white border border-zinc-200 rounded-[2.5rem] p-3 shadow-2xl shadow-zinc-200/50 flex flex-wrap lg:flex-nowrap items-center gap-4">
        
        <div className="flex-1 min-w-[250px] px-4">
          <label className="text-[10px] font-black uppercase text-blue-600 tracking-widest mb-1 block">Locations</label>
          <Select
            isMulti
            options={cities}
            value={selectedCities}
            onChange={(val: any) => setSelectedCities(val)}
            placeholder="Select cities..."
            className="react-select-container"
            classNamePrefix="react-select"
          />
        </div>

        <div className="h-10 w-px bg-zinc-100 hidden lg:block" />

        <div className="flex-1 min-w-[150px] px-4">
          <label className="text-[10px] font-black uppercase text-zinc-400 tracking-widest mb-1 block">Date</label>
          <input type="date" className="w-full text-sm font-bold bg-transparent outline-none cursor-pointer" defaultValue="2024-10-24" />
        </div>

        <div className="h-10 w-px bg-zinc-100 hidden lg:block" />

        <div className="flex-1 min-w-[150px] px-4">
          <label className="text-[10px] font-black uppercase text-zinc-400 tracking-widest mb-1 block">Desk Type</label>
          <select className="w-full text-sm font-bold bg-transparent outline-none appearance-none cursor-pointer">
            <option>All Types</option>
            <option>Hotdesk</option>
            <option>Private Cabin</option>
          </select>
        </div>

        <div className="flex items-center gap-6 px-4 shrink-0">
          <div className="flex flex-col items-end gap-1">
            <span className="text-[9px] font-black uppercase text-zinc-400 tracking-tighter">Include Unavailable</span>
            <Switch checked={includeUnavailable} onCheckedChange={setIncludeUnavailable} />
          </div>
          <button className="h-14 w-14 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-black transition-all shadow-lg hover:scale-105 active:scale-95">
            <Search className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Grid with Bordered Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {spacesData.map((space) => (
          <Link key={space.id} href={`/user/spaces/${space.id}`} className="group">
            <div className="bg-white border border-zinc-200 rounded-[2rem] p-4 transition-all duration-300 group-hover:border-blue-500 group-hover:shadow-2xl group-hover:shadow-blue-100 group-hover:-translate-y-1">
              <div className="aspect-[16/10] rounded-[1.5rem] overflow-hidden relative mb-6">
                <img src={space.imageUrl} className="object-cover w-full h-full" alt={space.name} />
                <Badge className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[10px] text-black font-black border-none px-3 py-1.5 shadow-sm">
                  {space.availableDesksCount} DESKS AVAILABLE
                </Badge>
              </div>

              <div className="px-2 pb-2">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-2xl font-black tracking-tighter text-zinc-900 leading-tight">{space.name}</h3>
                </div>
                <p className="text-zinc-400 font-bold text-sm mb-6 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-blue-500" /> {space.city}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-zinc-50">
                   <span className="text-[10px] font-black uppercase tracking-widest text-zinc-300">View Configuration</span>
                   <div className="h-10 w-10 bg-zinc-50 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <Search className="w-4 h-4 text-zinc-400 group-hover:text-white" />
                   </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}