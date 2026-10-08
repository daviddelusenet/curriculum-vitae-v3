import type { Metadata } from "next";
import { cacheLife } from "next/cache";
import { Open_Sans, Source_Serif_4 } from "next/font/google";
import { twJoin } from "tailwind-merge";
import { AppWrapper } from "@/components/app-wrapper/app-wrapper";
import { getCvStats } from "@/lib/cv-stats";
import { numberToWords } from "@/lib/number-to-words";
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

const title = "David de Lusenet – Senior frontend developer";

export const generateMetadata = async (): Promise<Metadata> => {
  "use cache";
  cacheLife("days");

  const { yearsOfExperience } = await getCvStats();
  const description = `Senior frontend developer with over ${numberToWords(yearsOfExperience)} years of experience in React, Next.js and TypeScript.`;

  return {
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
