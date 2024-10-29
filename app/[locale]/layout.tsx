import "./globals.css";
import { Inter } from "next/font/google";
import { LayoutProps } from "@/types/LayoutProps";
import MenuBar from "@/components/MenuBar";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: "600",
});

export const metadata: Metadata = {
  title: "Elahiya Pro Language",
  description:
    "Elahiya Pro Language school has been providing English languages, TOEFL, IELTS and French classes in Rudehen for 20 years.It is located at the 6th Bustan",
};

const RootLayout = async ({ children, params }: LayoutProps) => {
  const lang = (await params).locale;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(lang as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  const gaid = process.env.GA_TRACKING_ID!;

  return (
    <html lang={lang}>
      <body className={`${inter.variable} font-sans`}>
        <NextIntlClientProvider messages={messages}>
          <MenuBar />
          <div className="h-[calc(100vh-100px)] overflow-y-auto">
            {children}
          </div>
          <Footer />
        </NextIntlClientProvider>
      </body>

      <GoogleAnalytics gaId={gaid} />
    </html>
  );
};

export default RootLayout;
