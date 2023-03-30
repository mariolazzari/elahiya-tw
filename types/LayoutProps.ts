import { ReactNode } from "react";

interface ILayoutProps {
  children: ReactNode;
}

type LayoutProps = Readonly<ILayoutProps>;

export default LayoutProps;
