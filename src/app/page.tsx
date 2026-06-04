// src/app/page.tsx
import Link from "next/link";
import { Building2, Search } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* Top Navbar */}
      <header className="h-20 border-b border-zinc-100 flex items-center justify-between px-8 md:px-12">
        <Link href="/" className="flex items-center gap-2 text-black">
          <Building2 className="w-6 h-6 text-blue-600" />
          <span className="text-xl font-black tracking-tighter">FlexSpace</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/login" className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-black transition-colors">
            Sign In
          </Link>
          <Link href="/register">
            <Button className="rounded-full px-6 text-xs font-bold uppercase tracking-widest bg-black text-white hover:scale-105 transition-transform">
              Register
            </Button>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-20">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-zinc-900 text-center leading-[0.95] mb-8">
          Work from anywhere.<br />Scale everywhere.
        </h1>
        
        {/* Search Bar matching Figma */}
        <div className="w-full max-w-2xl bg-zinc-50 border border-zinc-200 rounded-full p-2 flex items-center shadow-lg shadow-zinc-100">
          <div className="flex-1 px-6 flex items-center gap-3">
            <MapPinIcon className="w-5 h-5 text-zinc-400" />
            <input 
              type="text" 
              placeholder="Search by city or location..." 
              className="w-full bg-transparent border-none outline-none text-sm font-bold text-zinc-900 placeholder:text-zinc-400"
            />
          </div>
          <Link href="/login">
            <Button className="h-12 px-8 rounded-full bg-black text-white font-bold hover:bg-zinc-800 transition-colors">
              Search
            </Button>
          </Link>
        </div>

        {/* Featured Spaces Sneak Peek */}
        <div className="w-full max-w-6xl mt-32 space-y-6">
          <div className="flex justify-between items-end px-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-1">Curated Selection</p>
              <h2 className="text-3xl font-black tracking-tighter text-zinc-900">Featured Spaces</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            {/* We link these to /login because unauthenticated users shouldn't access details yet */}
            {[
              { img: "https://images.unsplash.com/photo-1497366216548-37526070297c", title: "The Nordic Atrium", loc: "Stockholm" },
              { img: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2", title: "Concrete Lab", loc: "Berlin" },
              { img: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76", title: "The Glass House", loc: "Tokyo" },
            ].map((s, i) => (
              <Link href="/login" key={i} className="group block">
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-zinc-100 relative mb-4">
                  <img src={s.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={s.title} />
                  <div className="absolute top-4 left-4 bg-green-500 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                    Desks Available
                  </div>
                </div>
                <h3 className="text-lg font-black text-zinc-900 tracking-tight">{s.title}</h3>
                <p className="text-sm font-medium text-zinc-500">{s.loc}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-100 py-8 px-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-bold text-zinc-400">
        <p>© 2024 FlexSpace. Curated environments for focus.</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-zinc-900">Locations</Link>
          <Link href="#" className="hover:text-zinc-900">Pricing</Link>
          <Link href="#" className="hover:text-zinc-900">Privacy</Link>
          <Link href="#" className="hover:text-zinc-900">Terms</Link>
        </div>
      </footer>
    </div>
  );
}

// Quick helper icon for the search bar
function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  )
}