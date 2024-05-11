import { useTranslations } from "next-intl";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import { Map } from "@/components/Map";

type MapPageProps = {
  params: {
    locale: string;
  };
};

const MapPage = ({ params: { locale } }: MapPageProps) => {
  const t = useTranslations("Map");
  const title = t("title");
  const apiKey = process.env.MAPS_API || "";

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-gradient-to-tr from-violet-200 to-indigo-200">
      <h2 className="mb-4 text-4xl text-center text-indigo-700">{title}</h2>
      <div className="w-[90vw]">
        {/* <GoogleMapsEmbed
          apiKey={apiKey}
          height={450}
          width="100%"
          mode="place"
          q={title}
          language={locale}
        /> */}

        <Map />
      </div>
    </div>
  );
};

export default MapPage;
