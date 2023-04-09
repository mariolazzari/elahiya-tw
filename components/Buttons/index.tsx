import Link from "next/link";

const Buttons = () => {
  const style = "w-32 px-5 py-2 text-xl text-white rounded-xl";
  const buttons = [
    {
      link: "/about",
      label: "About us",
      style: `${style} bg-purple-700 rounded-xl hover:bg-purple-600 active:bg-purple-800`,
    },
    {
      link: "/map",
      label: "Find us",
      style: `${style} bg-indigo-700 active:bg-indigo-800 hover:bg-indigo-600 rounded-xl`,
    },
  ];

  return (
    <div className="flex gap-4 mt-10">
      {buttons.map(button => (
        <Link key={button.link} href={button.link}>
          <button className={button.style}>{button.label}</button>
        </Link>
      ))}
    </div>
  );
};

export default Buttons;
