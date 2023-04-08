"use client";
import { useState } from "react";
import Options from "./Options";
import { GiHamburgerMenu } from "react-icons/gi";
import Locales from "./Locales";
import Drawer from "./Drawer";

const Manubar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="h-[50px] bg-gradient-to-bl from-indigo-400 to-violet-400 flex justify-between items-center px-4">
        <Locales />

        <div className="invisible md:visible">
          <Options />
        </div>

        <GiHamburgerMenu
          className="hover:animate-spin"
          color="white"
          size={32}
          onClick={() => setOpen(true)}
        />
      </nav>

      <Drawer open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Manubar;
