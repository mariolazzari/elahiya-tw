import Image from "next/image";
import Options from "./Options";

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
      className="absolute top-0 right-0 z-40 w-40 h-screen p-4 bg-gradient-to-br from-purple-400 via-indigo-400 to-violet-400"
      onClick={onClose}
      onMouseLeave={onClose}
    >
      <Image
        className="mb-10 rounded-full"
        src="/images/elahiya.png"
        alt="Elahiya"
        width={100}
        height={100}
      />
      <Options isDrawer />
    </div>
  );
}

export default Drawer;
