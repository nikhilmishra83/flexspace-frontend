// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: "FlexSpace | Premium Coworking",
  description: "Book your perfect workspace.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body className="min-h-screen flex flex-col">
        {/* We keep it clean and let globals.css handle the white background */}
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}