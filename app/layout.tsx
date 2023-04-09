import "./globals.css";
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

function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <MenuBar />
        <div className="h-[calc(100vh-100px)] overflow-y-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
