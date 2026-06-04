// src/features/auth/components/LoginForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Loader2 } from "lucide-react";

import { loginSchema, LoginData } from "../schemas/auth.schema";
import { useLogin } from "../api/auth.api";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";

export function LoginForm() {
  const { mutate: login, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    shouldUnregister: false, // <-- Prevents fields from clearing
  });

  const onSubmit = (data: LoginData) => {
    login(data);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-4xl font-black tracking-tighter text-zinc-900">Welcome back</h2>
        <p className="text-zinc-500 font-medium mt-2">Enter your credentials to access your studio.</p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault(); // <-- Forces form to retain state on fail
          handleSubmit(onSubmit)(e);
        }}
        className="space-y-6"
      >
        {/* ... Rest of your inputs remain identical ... */}
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase text-zinc-400 tracking-widest block">Email Address</label>
          <Input type="email" placeholder="name@studio.com" className="h-14 bg-zinc-50 border-none rounded-xl px-4 font-medium text-sm" {...register("email")} />
          {errors.email && <p className="text-xs text-red-500 font-bold">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-[10px] font-black uppercase text-zinc-400 tracking-widest block">Password</label>
            <Link href="#" className="text-[10px] font-bold text-blue-600 hover:text-black transition-colors">Forgot Password?</Link>
          </div>
          <Input type="password" placeholder="••••••••" className="h-14 bg-zinc-50 border-none rounded-xl px-4 font-medium text-sm" {...register("password")} />
          {errors.password && <p className="text-xs text-red-500 font-bold">{errors.password.message}</p>}
        </div>

        <Button type="submit" disabled={isPending} className="w-full h-14 bg-black text-white hover:bg-zinc-800 rounded-xl font-bold text-sm transition-all">
          {isPending ? <Loader2 className="w-5 h-5 animate-spin" /> : "Sign In"}
        </Button>
      </form>

      <p className="text-center text-sm font-medium text-zinc-500">
        Don't have an account? <Link href="/register" className="text-blue-600 font-bold hover:text-black transition-colors">Register</Link>
      </p>
    </div>
  );
}