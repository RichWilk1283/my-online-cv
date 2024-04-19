import type { Metadata } from "next";
import "./globals.css";
import TitleBar from "@/components/TitleBar";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Richard Wilkinson CV/Portfolio",
  description: "Online CV and portfolio for Richard Wilkinson",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className="bkgroundcss h-screen">
        <TitleBar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
