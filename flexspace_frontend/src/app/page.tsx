import Link from "next/link";
import { Button} from "@/components/ui/Button";
import { Badge } from "@/components/ui/badge";
import { Zap, Shield, Globe, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6 bg-blue-50 text-blue-600 border-none font-black px-4 py-2 uppercase tracking-widest text-[10px]">
            New: Rooftop Lounges in London
          </Badge>
          <h1 className="text-8xl font-black tracking-tighter text-zinc-900 leading-[0.9] mb-8">
            Work from <span className="text-blue-600 italic">anywhere</span>.<br/>Scale everywhere.
          </h1>
          <p className="text-xl text-zinc-500 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
            FlexSpace is the global infrastructure for modern teams. Access 5,000+ premium coworking spaces with a single subscription.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/user/spaces">
              <Button className="px-10 py-8 text-lg font-black rounded-2xl bg-black hover:scale-105 transition-transform">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Background Decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-blue-50/50 blur-[120px] rounded-full -z-0" />
      </section>

      {/* Features Section */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: Zap, title: "Instant Booking", desc: "No phone calls. No delays. Book your desk in 15 seconds." },
            { icon: Shield, title: "Secure Access", desc: "Digital keys delivered instantly to your registered device." },
            { icon: Globe, title: "Global Network", desc: "One pass, thousands of locations across 120+ cities." }
          ].map((f, i) => (
            <div key={i} className="space-y-4">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-zinc-200">
                <f.icon className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-black tracking-tight">{f.title}</h3>
              <p className="text-zinc-500 font-medium leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}