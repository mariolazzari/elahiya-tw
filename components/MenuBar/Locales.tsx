"use client";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

const Locales = () => {
  const path = usePathname();
  const router = useRouter();
  const flags = ["en", "fa"];

  const onFlagClick = (flag: string) => {
    const route = path.replace(/\/en|\/fa/, "");
    router.push(`/${flag}${route}`);
  };

  return (
    <div className="flex gap-2">
      {flags.map(flag => (
        <Image
          key={flag}
          className="rounded-full cursor-pointer"
          src={`/flags/${flag}.png`}
          alt={flag}
          width={32}
          height={32}
          onClick={() => onFlagClick(flag)}
        />
      ))}
    </div>
  );
};

export default Locales;
