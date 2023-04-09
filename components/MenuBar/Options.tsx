import Link from "next/link";
import { useTranslations } from "next-intl";
import Option from "@/types/Option";
import { FcHome, FcAbout, FcSearch } from "react-icons/fc";

type OptionsProps = {
  isDrawer?: boolean;
};

const Options = ({ isDrawer = false }: OptionsProps) => {
  const t = useTranslations("Menu");

  const options: Option[] = [
    {
      label: t("home"),
      url: "/",
      icon: <FcHome size={24} />,
    },
    {
      label: t("about"),
      url: "/about",
      icon: <FcAbout size={24} />,
    },
    {
      label: t("map"),
      url: "/map",
      icon: <FcSearch size={24} />,
    },
  ];

  const className = isDrawer ? "flex flex-col gap-8" : "flex gap-8";

  return (
    <div className={className}>
      {options.map(opt => (
        <Link
          className="flex items-center hover:scale-110"
          key={opt.url}
          href={opt.url}
        >
          {opt.icon}
          <h6 className="ml-1 text-xl text-white hover:scale-110">
            {opt.label}
          </h6>
        </Link>
      ))}
    </div>
  );
};

export default Options;
