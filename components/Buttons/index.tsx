import { Link } from "@/i18n/routing";
import { Button } from "../ui/button";
import { Info, MapPin } from "lucide-react";

const Buttons = () => {
  const buttons = [
    {
      link: "/about",
      label: "About us",
      icon: <Info />,
    },
    {
      link: "/map",
      label: "Find us",
      icon: <MapPin />,
    },
  ];

  return (
    <div className="flex gap-4 mt-10">
      {buttons.map(button => (
        <Link key={button.link} href={button.link}>
          <Button className="w-32 gap-2">
            {button.icon} {button.label}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default Buttons;
