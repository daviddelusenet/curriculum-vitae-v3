import { Paragraph } from "@/components/paragraph/paragraph";
import { Section } from "@/components/section/section";
import { getIntroduction } from "@/data/introduction";
import { getCvStats } from "@/lib/cv-stats";

export const Introduction = async () => {
  const { yearsOfExperience } = await getCvStats();

  return (
    <Section title="Introduction">
      {getIntroduction({ yearsOfExperience }).map((paragraph) => (
        <Paragraph key={paragraph}>{paragraph}</Paragraph>
      ))}
    </Section>
  );
};
