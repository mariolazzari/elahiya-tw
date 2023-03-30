import Link from "next/link";
import Option from "@/types/Option";

const Options = ({ isDrawer = false }) => {
  const options: Option[] = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "About us",
      url: "/about",
    },
    {
      label: "Find us",
      url: "/map",
    },
  ];

  const className = isDrawer ? "flex flex-col gap-8" : "flex gap-8";

  return (
    <div className={className}>
      {options.map(opt => (
        <h6
          key={opt.url}
          className="text-xl font-bold text-white hover:animate-bounce"
        >
          <Link href={opt.url}>{opt.label}</Link>
        </h6>
      ))}
    </div>
  );
};

export default Options;
