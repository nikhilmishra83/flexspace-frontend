// src/features/admin/components/OwnerApprovalsList.tsx
"use client";

import { usePendingOwners, useUpdateOwnerStatus } from "../api/admin.api";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, XCircle, Loader2, User } from "lucide-react";

export function OwnerApprovalsList() {
  const { data: owners, isLoading, isError } = usePendingOwners();
  const { mutate: updateStatus, isPending: isUpdating } = useUpdateOwnerStatus();

  if (isLoading) {
    return <div className="flex items-center justify-center h-64"><Loader2 className="w-8 h-8 animate-spin text-zinc-400" /></div>;
  }

  if (isError) {
    return <div className="text-red-500 font-bold">Failed to load pending approvals.</div>;
  }

  if (!owners || owners.length === 0) {
    return (
      <div className="bg-white border border-zinc-200 rounded-[2rem] p-12 text-center">
        <h3 className="text-xl font-black text-zinc-900 mb-2">You're all caught up!</h3>
        <p className="text-zinc-500 font-medium text-sm">There are no pending owner requests at this time.</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-zinc-200 rounded-[2rem] overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-zinc-50 text-[10px] uppercase font-black tracking-widest text-zinc-500 border-b border-zinc-200">
            <tr>
              <th className="px-8 py-4">User Details</th>
              <th className="px-8 py-4">Contact</th>
              <th className="px-8 py-4">Role</th>
              <th className="px-8 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {owners.map((owner) => (
              <tr key={owner.id} className="hover:bg-zinc-50/50 transition-colors">
                <td className="px-8 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center shrink-0">
                      <User className="w-5 h-5 text-zinc-400" />
                    </div>
                    <div>
                      <p className="font-black text-zinc-900">{owner.name}</p>
                      <p className="text-xs font-medium text-zinc-500">ID: #{owner.id}</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-5 font-medium text-zinc-600">{owner.email}</td>
                <td className="px-8 py-5">
                  <Badge className="bg-blue-50 text-blue-600 border-none font-bold uppercase tracking-wider text-[9px] px-2 py-1">
                    OWNER
                  </Badge>
                </td>
                <td className="px-8 py-5 text-right space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 font-bold rounded-xl"
                    disabled={isUpdating}
                    onClick={() => updateStatus({ ownerId: owner.id, data: { accountStatus: "REJECTED" } })}
                  >
                    <XCircle className="w-4 h-4 mr-1.5" />
                    Reject
                  </Button>
                  <Button
                    size="sm"
                    className="bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-md shadow-green-200"
                    disabled={isUpdating}
                    onClick={() => updateStatus({ ownerId: owner.id, data: { accountStatus: "APPROVED" } })}
                  >
                    <CheckCircle2 className="w-4 h-4 mr-1.5" />
                    Approve
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}