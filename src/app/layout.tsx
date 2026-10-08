import type { Metadata } from "next";
import { Open_Sans, Source_Serif_4 } from "next/font/google";
import { twJoin } from "tailwind-merge";
import { AppWrapper } from "@/components/app-wrapper/app-wrapper";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "David de Lusenet – Curriculum Vitae",
  description: "Curriculum vitae of David de Lusenet",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={twJoin(
        "h-full antialiased",
        openSans.variable,
        sourceSerif.variable,
      )}
    >
      <body className="h-full font-sans">
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
