import Link from "next/link";
import Image from "next/image";

const Locales = () => {
  const flags = ["en", "fa"];

  return (
    <div className="flex gap-2 ">
      {flags.map(flag => (
        <Link key={flag} href="/">
          <Image
            className="rounded-full"
            src={`/flags/${flag}.png`}
            alt={flag}
            width={32}
            height={32}
          />
        </Link>
      ))}
    </div>
  );
};

export default Locales;
