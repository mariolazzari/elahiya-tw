"use client";
import { ReactNode, useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";

function Drawer({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Menu
        className="cursor-pointer hover:scale-110"
        color="white"
        size={36}
        onClick={() => setOpen(true)}
      />

      {open && (
        <div className="absolute top-0 left-0 z-40 flex h-screen">
          <div
            className="opacity-50 w-[calc(100vw-250px)] bg-indigo-300"
            onClick={() => setOpen(false)}
          />
          <div
            className="p-4 w-[250px] bg-gradient-to-br from-purple-400 via-indigo-400 to-violet-400"
            onClick={() => setOpen(false)}
          >
            <Image
              className="mx-auto mb-10 rounded-full"
              src="/images/elahiya.png"
              alt="Elahiya"
              width={100}
              height={100}
            />

            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default Drawer;
