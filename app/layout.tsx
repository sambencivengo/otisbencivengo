import type {Metadata} from "next";
import "./globals.css";
import {cn} from "~/lib/utils";
import {jules} from "./fonts";

export const metadata: Metadata = {
  title: "Rebekah & Sam",
  description: "Personal website of Otis Bencivengo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jules.className}>
      <body className={cn("w-full h-screen  mx-auto antialiased")}>{children}</body>
    </html>
  );
}
