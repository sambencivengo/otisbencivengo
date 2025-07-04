import type { Metadata } from "next";
import "./globals.css";
import { cn } from "~/lib/utils";
import { jules, cormorant, ebGaramond } from "./fonts";

export const metadata: Metadata = {
  title: "Bekah & Sam",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jules.className} ${cormorant.variable} ${ebGaramond.variable}`}>
      <body className={cn("w-full h-screen  mx-auto antialiased")}>{children}</body>
    </html>
  );
}
