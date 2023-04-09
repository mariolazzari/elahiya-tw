import "../globals.css";
import { useLocale, useTranslations } from "next-intl";
import { Inter } from "next/font/google";
import LayoutProps from "@/types/LayoutProps";
import MenuBar from "@/components/MenuBar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Elahiya",
  description: "Elahiya School",
};

const RootLayout = ({ children }: LayoutProps) => {
  const locale = useLocale();

  return (
    <html lang={locale}>
      <body className={`${inter.variable} font-sans`}>
        <MenuBar />
        <div className="h-[calc(100vh-100px)] overflow-y-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
