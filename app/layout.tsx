import type { Metadata } from "next";
import "./styles/globals.css";
import { Montserrat_Alternates } from "next/font/google";

export const metadata: Metadata = {};

const montserrat = Montserrat_Alternates({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
