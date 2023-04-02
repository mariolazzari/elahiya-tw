interface ICardBoxProps {
  title: string;
  description: string;
  imagePath: string;
  width?: number;
  height?: number;
}

type CardBoxProps = Readonly<ICardBoxProps>;

export default CardBoxProps;
