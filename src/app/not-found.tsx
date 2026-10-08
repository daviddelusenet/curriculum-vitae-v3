import Link from "next/link";
import { Paragraph } from "@/components/paragraph/paragraph";
import { Title } from "@/components/title/title";

export default function NotFound() {
  return (
    <main className="pt-15 pb-10 md:pt-20 md:pb-16">
      <Title as="h1" className="mb-6 md:mb-10">
        Something went wrong!
      </Title>
      <Paragraph>Sorry, it looks like this page can't be found 😞</Paragraph>
      <Paragraph>
        <Link
          href="/"
          className="text-accent underline-offset-4 hover:underline"
        >
          I'm coming home
        </Link>
      </Paragraph>
    </main>
  );
}
