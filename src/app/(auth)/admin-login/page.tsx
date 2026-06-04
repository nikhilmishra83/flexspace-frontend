// src/app/(auth)/admin-login/page.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, ShieldCheck } from "lucide-react";
import { loginSchema, LoginData } from "@/features/auth/schemas/auth.schema";
import { useLogin } from "@/features/auth/api/auth.api";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";

export default function AdminLoginPage() {
  const { mutate: login, isPending, isError, error } = useLogin();

  const { register, handleSubmit, formState: { errors } } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    // Ensures fields aren't wiped on re-renders
    shouldUnregister: false, 
  });

  const onSubmit = (data: LoginData) => {
    login(data);
  };

  return (
    <div className="space-y-8">
      <div>
        <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center mb-6">
          <ShieldCheck className="w-6 h-6 text-zinc-900" />
        </div>
        <h2 className="text-4xl font-black tracking-tighter text-zinc-900">Platform Admin</h2>
        <p className="text-zinc-500 font-medium mt-2">Secure access for authorized personnel only.</p>
      </div>

      <form 
        onSubmit={(e) => {
          e.preventDefault(); // Strongly prevent default form submission refresh
          handleSubmit(onSubmit)(e);
        }} 
        className="space-y-6"
      >
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase text-zinc-400 tracking-widest block">Admin Email</label>
          <Input type="email" placeholder="admin@flexspace.com" className="h-14 bg-zinc-50 border-none rounded-xl px-4" {...register("email")} />
          {errors.email && <p className="text-xs text-red-500 font-bold">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase text-zinc-400 tracking-widest block">Password</label>
          <Input type="password" placeholder="••••••••" className="h-14 bg-zinc-50 border-none rounded-xl px-4" {...register("password")} />
          {errors.password && <p className="text-xs text-red-500 font-bold">{errors.password.message}</p>}
        </div>

        {isError && (
          <div className="p-3 bg-red-50 text-red-600 text-xs font-bold rounded-lg">
            {(error as any)?.response?.data?.message || "Invalid credentials."}
          </div>
        )}

        <Button type="submit" disabled={isPending} className="w-full h-14 bg-black text-white hover:bg-zinc-800 rounded-xl font-bold text-sm">
          {isPending ? <Loader2 className="w-5 h-5 animate-spin" /> : "Secure Sign In"}
        </Button>
      </form>
    </div>
  );
}