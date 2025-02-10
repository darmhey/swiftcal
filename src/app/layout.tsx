import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/_components/Header";

const inter = Inter({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SwiftCal",
  description: "Your Time, Your Schedule, Simplified.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` pr-8 max-w-3xl pb-4 ${inter.className} `}>
        <div className=" relative">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
