// src/features/auth/components/RegisterForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Loader2 } from "lucide-react";

import { registerSchema, RegisterData } from "../schemas/auth.schema";
import { useRegister } from "../api/auth.api";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function RegisterForm() {
  const { mutate: registerUser, isPending, isError, error } = useRegister();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
    defaultValues: { roleType: "USER" }, // Default to User
  });

  const selectedRole = watch("roleType");

  const onSubmit = (data: RegisterData) => {
    registerUser(data);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-4xl font-black tracking-tighter text-zinc-900">Create an account</h2>
        <p className="text-zinc-500 font-medium mt-2">Enter your details to start exploring premium spaces.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Role Toggle */}
        <div className="flex p-1 bg-zinc-100 rounded-2xl">
          <button
            type="button"
            onClick={() => setValue("roleType", "USER")}
            className={cn(
              "flex-1 py-3 text-xs font-bold rounded-xl transition-all",
              selectedRole === "USER" ? "bg-black text-white shadow-sm" : "text-zinc-500 hover:text-black"
            )}
          >
            I want to book desks
          </button>
          <button
            type="button"
            onClick={() => setValue("roleType", "OWNER")}
            className={cn(
              "flex-1 py-3 text-xs font-bold rounded-xl transition-all",
              selectedRole === "OWNER" ? "bg-black text-white shadow-sm" : "text-zinc-500 hover:text-black"
            )}
          >
            I want to list my space
          </button>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase text-zinc-400 tracking-widest block">
            Full Name
          </label>
          <Input
            type="text"
            placeholder="Julian Vercel"
            className="h-14 bg-zinc-50 border-none rounded-xl px-4 font-medium text-sm"
            {...register("name")}
          />
          {errors.name && <p className="text-xs text-red-500 font-bold">{errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase text-zinc-400 tracking-widest block">
            Email Address
          </label>
          <Input
            type="email"
            placeholder="hello@flexspace.com"
            className="h-14 bg-zinc-50 border-none rounded-xl px-4 font-medium text-sm"
            {...register("email")}
          />
          {errors.email && <p className="text-xs text-red-500 font-bold">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase text-zinc-400 tracking-widest block">
            Password
          </label>
          <Input
            type="password"
            placeholder="••••••••"
            className="h-14 bg-zinc-50 border-none rounded-xl px-4 font-medium text-sm"
            {...register("password")}
          />
          {errors.password && <p className="text-xs text-red-500 font-bold">{errors.password.message}</p>}
        </div>

        {isError && (
          <div className="p-3 bg-red-50 text-red-600 text-xs font-bold rounded-lg">
            {(error as any)?.response?.data?.message || "An error occurred during registration."}
          </div>
        )}

        <div className="text-xs text-zinc-500 font-medium leading-relaxed">
          By creating an account, you agree to our <Link href="#" className="font-bold text-black underline">Terms of Service</Link> and <Link href="#" className="font-bold text-black underline">Privacy Policy</Link>.
        </div>

        <Button
          type="submit"
          disabled={isPending}
          className="w-full h-14 bg-black text-white hover:bg-zinc-800 rounded-xl font-bold text-sm transition-all"
        >
          {isPending ? <Loader2 className="w-5 h-5 animate-spin" /> : "Create Account"}
        </Button>
      </form>

      <p className="text-center text-sm font-medium text-zinc-500">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-600 font-bold hover:text-black transition-colors">
          Sign In
        </Link>
      </p>
    </div>
  );
}