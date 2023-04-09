import { useTranslations } from "next-intl";
import MapBox from "@/components/MapBox";

const Map = () => {
  const t = useTranslations("Map");

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-gradient-to-tr from-violet-200 to-indigo-200">
      <h2 className="mb-4 text-4xl text-indigo-700">{t("title")}</h2>
      <MapBox />
    </div>
  );
};

export default Map;
