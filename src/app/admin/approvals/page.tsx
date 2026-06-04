// src/app/admin/approvals/page.tsx
import { Metadata } from "next";
import { OwnerApprovalsList } from "@/features/admin/components/OwnerApprovalsList";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Pending Approvals | Admin Console",
};

export default function ApprovalsPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 mt-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">Approvals &gt; Owner Requests</h4>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 leading-none">
            Pending Owner Approvals
          </h1>
          <p className="text-zinc-500 font-medium mt-3 max-w-xl">
            Review and manage workspace ownership applications. Ensure all documentation meets FlexSpace standards.
          </p>
        </div>
        <Badge className="bg-blue-50 text-blue-600 border-none px-4 py-2 font-black text-xs">
          Needs Review
        </Badge>
      </div>

      {/* Reusable Component */}
      <OwnerApprovalsList />
      
      {/* Informational Card matches Figma */}
      <div className="bg-zinc-50 border border-zinc-200 rounded-[2rem] p-8 flex items-start gap-4 mt-8">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 border border-zinc-200 shadow-sm">
          <span className="text-blue-600 font-black">i</span>
        </div>
        <div>
          <h4 className="font-black text-zinc-900 text-sm">Curator Tip: Platform Policy</h4>
          <p className="text-sm font-medium text-zinc-500 mt-1">
            Approving an owner grants them immediate access to list properties on the public FlexSpace marketplace. Verify their details carefully.
          </p>
        </div>
      </div>
    </div>
  );
}