import type { Metadata } from "next";
import { Open_Sans, Source_Serif_4 } from "next/font/google";
import { twJoin } from "tailwind-merge";
import { AppWrapper } from "@/components/app-wrapper/app-wrapper";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
});

const title = "CV of David de Lusenet";
const description = "Curriculum vitae of David de Lusenet";

export const metadata: Metadata = {
  metadataBase: new URL("https://daviddeluse.net"),
  title,
  description,
  authors: [{ name: "David de Lusenet" }],
  openGraph: {
    type: "website",
    url: "/",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
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
      <body className="h-full bg-background font-sans text-foreground">
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
