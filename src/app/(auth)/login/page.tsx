// src/app/(auth)/login/page.tsx
import { LoginForm } from "@/features/auth/components/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | FlexSpace",
};

export default function LoginPage() {
  return <LoginForm />;
}