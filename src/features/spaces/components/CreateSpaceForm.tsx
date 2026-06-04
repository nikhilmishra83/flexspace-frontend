// src/features/spaces/components/CreateSpaceForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import Link from "next/link";

import { createSpaceSchema, CreateSpaceData } from "../schemas/space.schema";
import { useCreateSpace } from "../api/space.api";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";

export function CreateSpaceForm() {
  const { mutate: createSpace, isPending, isError, error } = useCreateSpace();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateSpaceData>({
    resolver: zodResolver(createSpaceSchema),
  });

  const onSubmit = (data: CreateSpaceData) => {
    createSpace(data);
  };

  return (
    <div className="bg-white border border-zinc-200 rounded-[2rem] p-8 md:p-12 shadow-sm">
      <div className="mb-10">
        <h2 className="text-3xl font-black tracking-tighter text-zinc-900 mb-2">Step 1: Basic Info</h2>
        <p className="text-zinc-500 font-medium text-sm max-w-xl">
          Define the core identity and location of your workspace. High-quality details lead to better conversions.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase text-zinc-400 tracking-widest block">
            Space Name
          </label>
          <Input
            type="text"
            placeholder="e.g. The Glass House Coworking"
            className="h-14 bg-zinc-50 border-none rounded-xl px-4 font-medium text-sm"
            {...register("name")}
          />
          {errors.name && <p className="text-xs text-red-500 font-bold">{errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase text-zinc-400 tracking-widest block">
            Street Address
          </label>
          <Input
            type="text"
            placeholder="123 Innovation Way, Suite 400"
            className="h-14 bg-zinc-50 border-none rounded-xl px-4 font-medium text-sm"
            {...register("address")}
          />
          {errors.address && <p className="text-xs text-red-500 font-bold">{errors.address.message}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-zinc-400 tracking-widest block">
              City
            </label>
            <Input
              type="text"
              placeholder="San Francisco"
              className="h-14 bg-zinc-50 border-none rounded-xl px-4 font-medium text-sm"
              {...register("city")}
            />
            {errors.city && <p className="text-xs text-red-500 font-bold">{errors.city.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-zinc-400 tracking-widest block">
              State
            </label>
            <Input
              type="text"
              placeholder="California"
              className="h-14 bg-zinc-50 border-none rounded-xl px-4 font-medium text-sm"
              {...register("state")}
            />
            {errors.state && <p className="text-xs text-red-500 font-bold">{errors.state.message}</p>}
          </div>
        </div>

        {isError && (
          <div className="p-4 bg-red-50 text-red-600 text-sm font-bold rounded-xl">
            {(error as any)?.response?.data?.message || "Failed to create space."}
          </div>
        )}

        <div className="flex items-center justify-end gap-4 pt-6 border-t border-zinc-100">
          <Link href="/owner/spaces">
            <Button type="button" variant="ghost" className="font-bold text-zinc-500 hover:text-black">
              Cancel
            </Button>
          </Link>
          <Button
            type="submit"
            disabled={isPending}
            className="h-12 px-8 bg-zinc-900 text-white hover:bg-black rounded-xl font-bold text-sm transition-all"
          >
            {isPending ? <Loader2 className="w-5 h-5 animate-spin" /> : "Publish Workspace"}
          </Button>
        </div>
      </form>
    </div>
  );
}