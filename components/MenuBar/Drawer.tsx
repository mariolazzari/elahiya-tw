import Image from "next/image";
import Options from "./Options";
import Logo from "@/public/images/elahiya.jpg";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
}

function Drawer({ open, onClose }: DrawerProps) {
  if (!open) {
    return null;
  }

  return (
    <div
      className="absolute top-0 right-0 z-40 w-40 h-screen p-4 bg-gradient-to-br from-violet-400 to-indigo-400"
      onClick={onClose}
      onMouseLeave={onClose}
    >
      <Image className="mb-10 rounded-full" src={Logo} alt="Elahiya" />
      <Options isDrawer />
    </div>
  );
}

export default Drawer;
