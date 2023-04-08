import { ReactNode } from "react";

interface ISocial {
  id: number;
  name: string;
  url: string;
  icon: ReactNode;
}

type Social = Readonly<ISocial>;

export default Social;
