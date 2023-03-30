import { Caveat } from "next/font/google";
import "./globals.css";
import LayoutProps from "@/types/LayoutProps";
import MenuBar from "@/components/MenuBar";
import Footer from "@/components/Footer";

const caveat = Caveat({
  subsets: ["latin"],
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
        <div className="p-2 h-[calc(100vh-100px)]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
