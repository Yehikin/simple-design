import type { Metadata } from "next";
import "./styles/globals.css";
import { Montserrat_Alternates } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {};

const montAlt = Montserrat_Alternates({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montAlt.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
