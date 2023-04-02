import ImageBox from "../ImageBox";

const CardBox = () => {
  const width = 380;
  const height = 300;

  return (
    <div className="flex flex-col justify-center p-2 rounded shadow-md item-center shadow-indigo-400 bg-indigo-50 w-96">
      <ImageBox
        src="/images/about/card1.jpg"
        alt=""
        width={width}
        height={height}
      />
      <h6 className="text-xl">description</h6>
    </div>
  );
};

export default CardBox;
