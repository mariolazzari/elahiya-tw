import Image from "next/image";
import ImageBoxProps from "./ImageBoxProps";

const ImageBox = ({ src, alt, width, height }: ImageBoxProps) => {
  const getStyle = () => `relative w-[${width}px] h-[${height}px]`;

  return (
    <div className={getStyle()}>
      <Image
        className="object-cover"
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </div>
  );
};

export default ImageBox;
