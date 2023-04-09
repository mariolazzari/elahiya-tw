import Image from "next/image";
import Logo from "@/public/images/logo_small.png";
import Socials from "@/components/Socials";
import Buttons from "@/components/Buttons";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] overflow-y-auto p-2 bg-gradient-to-br from-violet-100 via-indigo-300 to-purple-300">
      <Image src={Logo} alt="Elahiya" />
      <h1 className="my-4 font-semibold text-center text-purple-800 text-7xl">
        Fly your dreams with us
      </h1>

      <Socials />
      <Buttons />
    </div>
  );
};

export default Home;
