import CardBoxProps from "./CardBoxProps";
import Image from "next/image";

const CardBox = ({
  title,
  description,
  width = 350,
  height = 300,
  imagePath,
}: CardBoxProps) => {
  return (
    <div
      className="rounded-xl w-[350px] flex flex-col justify-center
        shadow-md item-center shadow-violet-400
        bg-gradient-to-br from-purple-200 via-white to-violet-200"
    >
      <Image
        className="rounded-t-xl"
        src={imagePath}
        alt={title}
        width={width}
        height={height}
      />
      <h6 className="mt-2 ml-2 text-2xl font-semibold text-purple-800">
        {title}
      </h6>
      <p className="h-[180px] p-2 text-indigo-800 text-md text-justify">
        {description}
      </p>
    </div>
  );
};

export default CardBox;
