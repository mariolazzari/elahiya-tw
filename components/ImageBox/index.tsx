import Image from "next/image";
import ImageBoxProps from "./ImageBoxProps";

const ImageBox = ({ src, alt, width, height }: ImageBoxProps) => {
  const style = `relative w-[${width}px] h-[${height}px]`;

  return (
    <div className={style}>
      <Image className="object-cover" src={src} alt={alt} fill />
    </div>
  );
};

export default ImageBox;
