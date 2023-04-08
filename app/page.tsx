import Image from "next/image";
import Logo from "@/public/images/logo_small.png";
import Socials from "@/components/Socials";
import Buttons from "@/components/Buttons";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full h-full p-2 bg-gradient-to-br from-violet-100 via-indigo-300 to-purple-300">
      <Image src={Logo} alt="Elahiya" />
      <h1 className="my-8 text-5xl font-bold text-purple-800">
        Fly your dreams with us
      </h1>

      <Socials />
      <Buttons />
    </main>
  );
};

export default Home;
