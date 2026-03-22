import Navbar from "@/components/layout/Navbar";

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-zinc-900 flex flex-col font-sans">
      <Navbar /> 
      <main className="flex-grow w-full">
        {children}
      </main>
    </div>
  );
}