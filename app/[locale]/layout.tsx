import "../globals.css";
import { useLocale } from "next-intl";
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
  title: "Elahiya Pro Language",
  description:
    "Elahiya Pro Language school has been providing English languages, TOEFL, IELTS and French classes in Rudehen for 20 years.It is located at the 6th Bustan",
  themeColor: "violet",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
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
