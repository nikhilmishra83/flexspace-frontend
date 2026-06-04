// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Providers from "./providers";
import { Toaster } from "sonner"; // <-- Add this import

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "FlexSpace | Premium Coworking",
  description: "Book your perfect workspace.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body className="min-h-screen flex flex-col bg-white text-zinc-900">
        <Providers>
          <main className="flex-grow">{children}</main>
          {/* Add the Toaster here */}
          <Toaster position="top-center" richColors theme="light" /> 
        </Providers>
      </body>
    </html>
  );
}