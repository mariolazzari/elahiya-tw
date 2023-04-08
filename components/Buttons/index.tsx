import Link from "next/link";

const Buttons = () => {
  return (
    <div className="flex gap-4 mt-10">
      <Link href="/about">
        <button className="w-32 px-5 py-2 text-2xl text-white bg-purple-700 rounded-xl">
          About us
        </button>
      </Link>

      <Link href="/map">
        <button className="w-32 px-5 py-2 text-2xl text-white bg-indigo-700 rounded-xl">
          Find us
        </button>
      </Link>
    </div>
  );
};

export default Buttons;
