import { useTranslations } from "next-intl";
import { Map } from "@/components/Map";

const MapPage = () => {
  const t = useTranslations("Map");
  const title = t("title");

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-gradient-to-tr from-violet-200 to-indigo-200">
      <h2 className="mb-4 text-4xl text-center text-indigo-700">{title}</h2>
      <div className="w-[90vw]">
        <Map />
      </div>
    </div>
  );
};

export default MapPage;
