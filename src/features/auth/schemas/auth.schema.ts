// src/features/auth/schemas/auth.schema.ts
import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters").max(100),
  roleType: z.enum(["USER", "OWNER"]), // Frontend only, determines which API to call
});

export type LoginData = z.infer<typeof loginSchema>;
export type RegisterData = z.infer<typeof registerSchema>;

export interface AuthUser {
  userId: number;
  email: string;
  role: "USER" | "OWNER" | "ADMIN";
  accountStatus?: "PENDING" | "APPROVED" | "REJECTED" | "SUSPENDED";
}

export interface AuthResponse extends AuthUser {
  token: string;
}