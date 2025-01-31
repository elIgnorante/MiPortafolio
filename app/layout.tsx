import type { Metadata } from "next";
import "./globals.css";

import { Urbanist } from "next/font/google";
import { NavBar } from "@/components/NavBar";
import { Header } from "@/components/Header";

const urbanist = Urbanist({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "ZermeñoDev Landing Page",
  description: "Landing page made by ZermeñoDev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={urbanist.className}
      >
        <NavBar />
        <Header />
        {children}
      </body>
    </html>
  );
}
