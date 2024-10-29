import { ReactNode } from "react";

export type LayoutProps = Readonly<{
  children: ReactNode;
  params: {
    locale: string;
  };
}>;
