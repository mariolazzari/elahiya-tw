import CardBoxProps from "./CardBoxProps";
import ImageBox from "../ImageBox";

const CardBox = ({
  title,
  description,
  width = 350,
  height = 300,
  imagePath,
}: CardBoxProps) => {
  return (
    <div className="w-[350px] flex flex-col justify-center rounded shadow-md item-center shadow-violet-400 bg-gradient-to-br from-purple-100 via-white to-violet-100">
      <ImageBox src={imagePath} alt={title} width={width} height={height} />
      <h6 className="mt-2 ml-2 text-2xl text-purple-800">{title}</h6>
      <p className="h-[180px] p-2 text-indigo-800 text-md text-justify">
        {description}
      </p>
    </div>
  );
};

export default CardBox;
