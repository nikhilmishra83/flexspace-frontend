import { Card } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="max-w-4xl mx-auto py-10 space-y-10">
      <header>
        <h1 className="text-3xl font-bold">Welcome back, Alex</h1>
        <p className="text-zinc-400 text-sm">You have 3 active bookings</p>
      </header>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-zinc-500 uppercase tracking-widest text-xs">Upcoming</h2>
        {[1, 2, 3].map((i) => (
          <Card key={i} className="p-5 bg-zinc-950 border-zinc-900 flex justify-between items-center hover:bg-zinc-900/50 cursor-pointer">
            <div>
              <p className="font-bold">The Atrium Loft</p>
              <p className="text-sm text-zinc-500">Desk 402 • Floor 4</p>
            </div>
            <div className="text-right">
              <p className="font-medium">Tomorrow</p>
              <p className="text-sm text-zinc-500">09:00 — 17:00</p>
            </div>
          </Card>
        ))}
      </section>
    </div>
  );
}