import { List } from "@/components/list/list";
import { Paragraph } from "@/components/paragraph/paragraph";
import { Section } from "@/components/section/section";
import { developmentSkills } from "@/data/development-skills";

export const DevelopmentSkills = () => {
  return (
    <Section title="Development skills">
      <Paragraph>{developmentSkills.intro}</Paragraph>
      <List items={developmentSkills.tools} />
    </Section>
  );
};
