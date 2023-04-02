import { ImageProps } from "next/image";

interface IImageBoxProps extends ImageProps {}

type ImageBoxProps = Readonly<IImageBoxProps>;

export default ImageBoxProps;
