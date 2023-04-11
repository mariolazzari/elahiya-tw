import { useTranslations } from "next-intl";
import CardBox from "@/components/CardBox";

export const metadata = {
  title: "About - Elahiya",
  description: "About Elahiya School",
};

const About = () => {
  const t = useTranslations("About");

  const renderImages = () =>
    [1, 2, 3].map(id => (
      <CardBox
        key={id}
        title={t(`card${id}Title`)}
        description={t(`card${id}Text`)}
        imagePath={`/images/card${id}.png`}
      />
    ));

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-100px)] p-2 overflow-y-auto bg-gradient-to-br from-violet-300 via-indigo-300 to-purple-300">
      <div className="w-[350px]  p-2 my-4 text-indigo-800 rounded bg-gradient-to-br from-purple-100 via-white to-violet-100">
        <h2 className="mb-2 text-xl font-semibold text-center text-purple-800">
          {t("title")}
        </h2>
        <p className="text-justify text-indigo-800">{t("text")}</p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {renderImages()}
      </div>
    </div>
  );
};

export default About;
