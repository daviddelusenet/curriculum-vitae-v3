import { DemographicInformation } from "@/components/demographic-information/demographic-information";
import { DevelopmentSkills } from "@/components/development-skills/development-skills";
import { Introduction } from "@/components/introduction/introduction";
import { PersonalInterests } from "@/components/personal-interests/personal-interests";
import { WorkingExperience } from "@/components/working-experience/working-experience";

export default function Home() {
  return (
    <>
      <DemographicInformation />
      <main>
        <Introduction />
        <WorkingExperience />
        <DevelopmentSkills />
        <PersonalInterests />
      </main>
    </>
  );
}
