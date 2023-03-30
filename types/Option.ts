interface IOption {
  label: string;
  url: string;
}

type Option = Readonly<IOption>;

export default Option;
