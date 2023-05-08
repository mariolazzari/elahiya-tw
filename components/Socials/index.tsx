"use client";
import Social from "@/types/Social";
import { FaPinterest, FaLink, FaInstagram, FaPhone } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const socials: Social[] = [
  {
    id: 1,
    name: "Write us",
    url: "mailto://ELAprolanguageschool@gmail.com",
    icon: <GrMail color="indigo" size={32} />,
  },
  {
    id: 2,
    name: "elalanguage0089",
    url: "https://www.pinterest.it/elalanguage0089/",
    icon: <FaPinterest color="indigo" size={32} />,
  },
  {
    id: 3,
    name: "elaprolanguageschool",
    url: "https://www.instagram.com/elaprolanguageschool/",
    icon: <FaInstagram color="indigo" size={32} />,
  },
  {
    id: 4,
    name: "BlogFA",
    url: "http://www.blogfa.com/members/UsersList.aspx?dir=17",
    icon: <FaLink color="indigo" size={32} />,
  },
  {
    id: 5,
    name: "+98 902 578 8874 - Office",
    url: "tel:+989025788874",
    icon: <FaPhone color="indigo" size={32} />,
  },
  {
    id: 6,
    name: "+98 936 873 9528 - Manager",
    url: "tel:+989368739528",
    icon: <FaPhone color="indigo" size={32} />,
  },
];

const Socials = () => {
  return (
    <div className="my-1">
      {socials.map(social => (
        <a
          key={social.id}
          className="flex p-1 cursor-pointer hover:scale-110"
          href={social.url}
          target="_blank"
        >
          {social.icon}
          <h2 className="ml-2 text-xl font-semibold text-indigo-900">
            {social.name}
          </h2>
        </a>
      ))}
    </div>
  );
};

export default Socials;
