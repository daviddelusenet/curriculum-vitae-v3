import type { IconType } from "react-icons";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { ExternalLink } from "@/components/external-link/external-link";
import type { Social } from "@/data/profile";

type SocialLinksProps = {
  socials: Social[];
};

const icons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  mail: FaEnvelope,
} satisfies Record<Social["type"], IconType>;

export const SocialLinks = ({ socials }: SocialLinksProps) => {
  return (
    <ul className="mt-6 flex gap-4">
      {socials.map(({ type, href, title }) => {
        const Icon = icons[type];

        return (
          <li key={type}>
            <ExternalLink
              href={href}
              title={title}
              aria-label={title}
              target={type === "mail" ? "_self" : undefined}
              className="block transition-colors duration-200 ease-out hover:text-accent"
            >
              <Icon aria-hidden className="size-8" />
            </ExternalLink>
          </li>
        );
      })}
    </ul>
  );
};
