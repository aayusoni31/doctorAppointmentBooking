import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
function Header() {
  const Menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Explore",
      path: "/",
    },
    {
      id: 3,
      name: "Contact Us",
      path: "/",
    },
  ];
  return (
    <div>
      <div className="flex items-center gap-10">
        <Image src="/logo.svg" alt="logo" width={180} height={80} />
        <ul className="gap-8 hidden md:flex">
          {Menu.map((item, index) => (
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>
      </div>
      <Button>Get Started</Button>
    </div>
  );
}

export default Header;
