import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="h-[50px] bg-gradient-to-br from-violet-400 via-indigo-400 to-purple-400 flex  justify-center items-center">
      <Link
        className="font-semibold text-white text-md„"
        href="https://mariolazzari.it"
        target="_blank"
      >
        Mario Lazzari ©{year}
      </Link>
    </footer>
  );
};

export default Footer;
