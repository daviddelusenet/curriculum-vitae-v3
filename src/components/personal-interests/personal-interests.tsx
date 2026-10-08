import { Paragraph } from "@/components/paragraph/paragraph";
import { Section } from "@/components/section/section";
import { getPersonalInterests } from "@/data/personal-interests";
import { getCvStats } from "@/lib/cv-stats";

export const PersonalInterests = async () => {
  const { edenAge } = await getCvStats();

  return (
    <Section title="Personal interests">
      {getPersonalInterests({ edenAge }).map((paragraph) => (
        <Paragraph key={paragraph}>{paragraph}</Paragraph>
      ))}
    </Section>
  );
};
