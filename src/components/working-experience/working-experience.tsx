import { Job } from "@/components/job/job";
import { Section } from "@/components/section/section";
import { workingExperience } from "@/data/working-experience";

export const WorkingExperience = () => {
  return (
    <Section title="Working experience">
      {workingExperience.map((job) => (
        <Job key={job.company.name} job={job} />
      ))}
    </Section>
  );
};
