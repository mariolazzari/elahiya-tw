import { ReactNode } from "react";

interface IContainer {
  children: ReactNode;
  locales: Record<string, string>;
}

export default IContainer;
