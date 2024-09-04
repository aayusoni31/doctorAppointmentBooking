//default page
import { Button } from "@/components/ui/button";
import { Divide, Heading1 } from "lucide-react";
import Image from "next/image";
// import Hero from "./_components/hero";
import Hero from "./_components/hero";
import CategorySearch from "./_components/CategorySearch";

export default function Home() {
  return (
    <div>
      {/* hero section  */}
      <Hero />

      {/* Search bar & category */}
      <CategorySearch />
    </div>
  );
}
