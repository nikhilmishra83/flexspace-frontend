// src/app/user/layout.tsx
import Navbar from "@/components/layout/Navbar";
import { ProtectedRoute } from "@/components/layout/ProtectedRoute";

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute allowedRoles={["USER"]}>
      <div className="min-h-screen bg-[#FAFAFA] text-zinc-900 flex flex-col font-sans">
        <Navbar /> 
        <main className="flex-grow w-full">
          {children}
        </main>
      </div>
    </ProtectedRoute>
  );
}