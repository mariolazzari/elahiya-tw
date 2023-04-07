import { ReactNode } from "react";

interface IOption {
  label: string;
  url: string;
  icon?: ReactNode;
}

type Option = Readonly<IOption>;

export default Option;
