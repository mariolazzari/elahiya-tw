import Image from "next/image";
import { useTranslations } from "next-intl";
import Logo from "@/public/images/logo.png";
import Socials from "@/components/Socials";
import Buttons from "@/components/Buttons";

const Home = () => {
  const t = useTranslations("Home");

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] overflow-y-auto p-2 bg-gradient-to-br from-violet-100 via-indigo-300 to-purple-300">
      <Image src={Logo} alt="Elahiya" priority />
      <h1 className="my-4 text-5xl text-center text-purple-800">
        {t("title")}
      </h1>

      <Socials />
      <Buttons />
    </div>
  );
};

export default Home;
