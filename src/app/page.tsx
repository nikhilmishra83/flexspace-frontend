// src/app/page.tsx
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl text-center space-y-8">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
          Your workspace, <br className="hidden sm:block"/>
          <span className="text-blue-600">wherever you need it.</span>
        </h1>
        
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          FlexSpace connects you with premium coworking desks across the city. Book by the hour or by the day, directly from your phone.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link href="/spaces">
            <Button className="text-lg px-8 py-3 w-full sm:w-auto">
              Explore Spaces
            </Button>
          </Link>
          <Link href="/login">
            <Button variant="outline" className="text-lg px-8 py-3 w-full sm:w-auto bg-white">
              Log In
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}