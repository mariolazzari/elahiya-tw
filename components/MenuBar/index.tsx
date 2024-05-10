import { Options } from "./Options";
import { Locales } from "./Locales";
import { Drawer } from "./Drawer";

const ManuBar = () => {
  return (
    <nav className="h-[50px] bg-gradient-to-br from-violet-400 via-indigo-400 to-purple-400 flex justify-between items-center px-4">
      <Locales />

      <div className="invisible md:visible">
        <Options />
      </div>

      <Drawer>
        <Options isDrawer />
      </Drawer>
    </nav>
  );
};

export default ManuBar;
