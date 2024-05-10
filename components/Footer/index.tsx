import Link from "next/link";

const Footer = () => {
  return (
    <footer className="h-[50px] bg-gradient-to-br from-violet-400 via-indigo-400 to-purple-400 flex  justify-center items-center">
      <Link
        className="font-semibold text-white text-md hover:scale-110"
        href="https://mariolazzari.it"
        target="_blank"
      >
        Mario Lazzari ©{new Date().getFullYear()}
      </Link>
    </footer>
  );
};

export default Footer;
