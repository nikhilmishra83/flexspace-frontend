// src/app/(auth)/register/page.tsx
import { RegisterForm } from "@/features/auth/components/RegisterForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create an Account | FlexSpace",
};

export default function RegisterPage() {
  return <RegisterForm />;
}