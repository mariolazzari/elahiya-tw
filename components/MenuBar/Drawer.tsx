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
      className="absolute top-0 right-0 z-40 w-40 h-screen p-4 bg-violet-400"
      onClick={onClose}
    >
      <Options isDrawer />
    </div>
  );
}

export default Drawer;
