import Link from "next/link";
import { useTranslations } from "next-intl";
import Option from "@/types/Option";
import { Home, Info, MapPin } from "lucide-react";

type OptionsProps = {
  isDrawer?: boolean;
};

const Options = ({ isDrawer = false }: OptionsProps) => {
  const t = useTranslations("Menu");

  const options: Option[] = [
    {
      label: t("home"),
      url: "/",
      icon: <Home />,
    },
    {
      label: t("about"),
      url: "/about",
      icon: <Info />,
    },
    {
      label: t("map"),
      url: "/map",
      icon: <MapPin />,
    },
  ];

  const className = isDrawer ? "flex flex-col gap-8" : "flex gap-8";

  return (
    <div className={className}>
      {options.map(opt => (
        <Link
          className="flex items-center text-white"
          key={opt.url}
          href={opt.url}
        >
          {opt.icon}
          <h6 className="ml-2 text-xl text-white">{opt.label}</h6>
        </Link>
      ))}
    </div>
  );
};

export default Options;
