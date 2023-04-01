import "./globals.css";
import { Caveat } from "next/font/google";
import LayoutProps from "@/types/LayoutProps";
import MenuBar from "@/components/MenuBar";
import Footer from "@/components/Footer";

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caveat",
});

export const metadata = {
  title: "Elahiya",
  description: "Elahiya School",
};

function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={`${caveat.variable} font-sans`}>
        <MenuBar />
        <div className="flex justify-center items-center h-[calc(100vh-100px)]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
