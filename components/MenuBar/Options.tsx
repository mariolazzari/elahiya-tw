import { Link } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import { Option } from "@/types/Option";
import { Home, Info, MapPin } from "lucide-react";

type OptionsProps = {
  isDrawer?: boolean;
};

export const Options = ({ isDrawer = false }: OptionsProps) => {
  const t = useTranslations("Menu");
  const locale = useLocale();

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

  return (
    <div className={isDrawer ? "flex flex-col gap-8" : "flex gap-8"}>
      {options.map(opt => (
        <Link
          className="flex items-center text-white"
          key={opt.url}
          href={opt.url}
          locale={locale}
        >
          {opt.icon}
          <span className="ml-2">{opt.label}</span>
        </Link>
      ))}
    </div>
  );
};
