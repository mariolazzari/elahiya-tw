"use client";
import { ReactNode, useState } from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";

function Drawer({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <GiHamburgerMenu
        className="cursor-pointer hover:animate-pulse"
        color="white"
        size={32}
        onClick={() => setOpen(true)}
      />
    );
  }

  return (
    <div
      className="absolute top-0 right-0 z-40 w-40 h-screen p-4 bg-gradient-to-br from-purple-400 via-indigo-400 to-violet-400"
      onClick={() => setOpen(false)}
      onMouseLeave={() => setOpen(false)}
    >
      <Image
        className="mb-10 rounded-full"
        src="/images/elahiya.png"
        alt="Elahiya"
        width={100}
        height={100}
      />

      {children}
    </div>
  );
}

export default Drawer;
