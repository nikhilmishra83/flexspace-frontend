// src/app/owner/spaces/page.tsx
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Building2, Plus } from "lucide-react";

export default function OwnerSpacesPage() {
  return (
    <div className="max-w-6xl mx-auto py-8">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-4xl font-black tracking-tighter text-zinc-900">Properties</h1>
          <p className="text-zinc-500 font-medium mt-2">Manage your curated workspace portfolio.</p>
        </div>
        <Link href="/owner/spaces/new">
          <Button className="bg-black text-white hover:bg-zinc-800 font-bold rounded-xl h-12 px-6 shadow-lg shadow-zinc-200 flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add New Space
          </Button>
        </Link>
      </div>

      <div className="bg-zinc-50 border border-dashed border-zinc-200 rounded-[2rem] flex flex-col items-center justify-center p-20 text-center">
        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
          <Building2 className="w-8 h-8 text-zinc-400" />
        </div>
        <h3 className="text-xl font-black text-zinc-900 mb-2">No spaces yet</h3>
        <p className="text-zinc-500 font-medium max-w-sm mb-8">
          You haven't listed any workspaces yet. Create your first property to start accepting bookings.
        </p>
        <Link href="/owner/spaces/new">
          <Button className="bg-zinc-900 text-white px-8 rounded-full font-bold uppercase tracking-widest text-[10px] h-12">
            Launch New Space
          </Button>
        </Link>
      </div>
    </div>
  );
}