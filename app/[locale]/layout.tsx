import "@/app/globals.css";
import { useLocale } from "next-intl";
import { Inter } from "next/font/google";
import LayoutProps from "@/types/LayoutProps";
import MenuBar from "@/components/MenuBar";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Elahiya Pro Language",
  description:
    "Elahiya Pro Language school has been providing English languages, TOEFL, IELTS and French classes in Rudehen for 20 years.It is located at the 6th Bustan",
};

const RootLayout = ({ children }: LayoutProps) => {
  const locale = useLocale();
  const gaid = process.env.GA_TRACKING_ID!;

  return (
    <html lang={locale}>
      <body className={`${inter.variable} font-sans`}>
        <MenuBar />
        <div className="h-[calc(100vh-100px)] overflow-y-auto">{children}</div>
        <Footer />
      </body>

      <GoogleAnalytics gaId={gaid} />
    </html>
  );
};

export default RootLayout;
