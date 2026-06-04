// src/app/owner/spaces/new/page.tsx
import { CreateSpaceForm } from "@/features/spaces/components/CreateSpaceForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Workspace | Owner Console",
};

export default function NewSpacePage() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      {/* Progress Stepper (Visual Only for now) */}
      <div className="flex items-center justify-center gap-4 mb-12">
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center font-bold text-xs">1</div>
          <span className="text-[10px] font-black uppercase tracking-widest text-zinc-900">Basic Info</span>
        </div>
        <div className="w-16 h-px bg-zinc-200 -mt-6"></div>
        <div className="flex flex-col items-center gap-2 opacity-50">
          <div className="w-8 h-8 rounded-full bg-zinc-100 text-zinc-500 flex items-center justify-center font-bold text-xs">2</div>
          <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Images</span>
        </div>
        <div className="w-16 h-px bg-zinc-200 -mt-6"></div>
        <div className="flex flex-col items-center gap-2 opacity-50">
          <div className="w-8 h-8 rounded-full bg-zinc-100 text-zinc-500 flex items-center justify-center font-bold text-xs">3</div>
          <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Desk Setup</span>
        </div>
      </div>

      <CreateSpaceForm />
    </div>
  );
}