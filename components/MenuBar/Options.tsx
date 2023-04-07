import Link from "next/link";
import Option from "@/types/Option";
import { FcHome, FcAbout, FcSearch } from "react-icons/fc";

const Options = ({ isDrawer = false }) => {
  const options: Option[] = [
    {
      label: "Home",
      url: "/",
      icon: <FcHome size={24} />,
    },
    {
      label: "About us",
      url: "/about",
      icon: <FcAbout size={24} />,
    },
    {
      label: "Find us",
      url: "/map",
      icon: <FcSearch size={24} />,
    },
  ];

  const className = isDrawer ? "flex flex-col gap-8" : "flex gap-8";

  return (
    <div className={className}>
      {options.map(opt => (
        <Link className="flex items-center" key={opt.url} href={opt.url}>
          {opt.icon}
          <h6 className="ml-1 text-xl font-bold text-white hover:animate-bounce">
            {opt.label}
          </h6>
        </Link>
      ))}
    </div>
  );
};

export default Options;
