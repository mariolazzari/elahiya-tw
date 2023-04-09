import CardBoxProps from "./CardBoxProps";
import ImageBox from "../ImageBox";

const CardBox = ({
  title,
  description,
  width = 380,
  height = 300,
  imagePath,
}: CardBoxProps) => {
  return (
    <div className="w-[380px] flex flex-col justify-center rounded shadow-md item-center shadow-violet-400 bg-indigo-50">
      <ImageBox src={imagePath} alt={title} width={width} height={height} />
      <h6 className="m-2 text-2xl text-purple-700">{title}</h6>
      <p className="h-[160px] m-2 text-indigo-600 text-md text-justify">
        {description}
      </p>
    </div>
  );
};

export default CardBox;
