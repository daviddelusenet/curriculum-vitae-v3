import { Paragraph } from "@/components/paragraph/paragraph";
import { Section } from "@/components/section/section";
import { personalInterests } from "@/data/personal-interests";

export const PersonalInterests = () => {
  return (
    <Section title="Personal interests">
      {personalInterests.map((paragraph) => (
        <Paragraph key={paragraph}>{paragraph}</Paragraph>
      ))}
    </Section>
  );
};
