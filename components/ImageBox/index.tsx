import Image from "next/image";
import ImageBoxProps from "./ImageBoxProps";

const ImageBox = ({ src, alt, width, height }: ImageBoxProps) => {
  return (
    <div className={`relative w-[${width}px] h-[${height}px]`}>
      <Image className="object-cover" src={src} alt={alt} fill />
    </div>
  );
};

export default ImageBox;
