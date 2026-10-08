import { Paragraph } from "@/components/paragraph/paragraph";
import { Section } from "@/components/section/section";
import { introduction } from "@/data/introduction";

export const Introduction = () => {
  return (
    <Section title="Introduction">
      {introduction.map((paragraph) => (
        <Paragraph key={paragraph}>{paragraph}</Paragraph>
      ))}
    </Section>
  );
};
