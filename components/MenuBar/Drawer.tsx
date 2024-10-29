"use client";
import { ReactNode } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "@radix-ui/react-separator";

type DrawerProps = {
  children: ReactNode;
};

export function Drawer({ children }: DrawerProps) {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu color="white" />
      </SheetTrigger>

      <SheetContent className="p-4 w-[250px] bg-gradient-to-br from-purple-400 via-indigo-400 to-violet-400">
        <SheetHeader className="hidden">
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>

        <Image
          className="mx-auto my-5 rounded-full"
          src="/images/elahiya.png"
          alt="Elahiya"
          width={100}
          height={100}
          priority
        />

        <Separator className="h-0.5 bg-white my-5" />

        {children}
      </SheetContent>
    </Sheet>
  );
}
