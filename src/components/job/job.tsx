import { ExternalLink } from "@/components/external-link/external-link";
import { Paragraph } from "@/components/paragraph/paragraph";
import type { Job as JobData } from "@/data/working-experience";

type JobProps = {
  job: JobData;
};

export const Job = ({ job }: JobProps) => {
  const { company, roles, technologies, description } = job;

  return (
    <article>
      {roles.map(({ title, period }) => (
        <h3
          key={period}
          className="mb-1 font-light text-sm italic leading-normal md:mb-2 md:text-lg"
        >
          <span className="block font-bold not-italic">{period}</span>
          {title} at{" "}
          <ExternalLink
            href={company.url}
            className="text-accent underline-offset-4 hover:underline"
          >
            {company.name}
          </ExternalLink>
        </h3>
      ))}
      <p className="mb-1 font-light text-sm italic leading-normal md:mb-2 md:text-lg">
        technologies used: {technologies.join(", ")}
      </p>
      {description.map((paragraph) => (
        <Paragraph key={paragraph}>{paragraph}</Paragraph>
      ))}
    </article>
  );
};
