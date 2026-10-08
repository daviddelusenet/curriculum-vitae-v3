import Image from "next/image";
import avatar from "@/assets/avatar.png";
import { DetailsTable } from "@/components/details-table/details-table";
import { SocialLinks } from "@/components/social-links/social-links";
import { Title } from "@/components/title/title";
import { profile } from "@/data/profile";

export const DemographicInformation = () => {
  return (
    <header className="pt-15 pb-10 md:pt-20 md:pb-16">
      <Title as="h1">{profile.name}</Title>
      <p className="mb-6 text-xl md:text-3xl">{profile.occupation}</p>
      <div className="flex flex-col md:flex-row">
        <div className="md:flex-1">
          <DetailsTable items={profile.details} />
          <SocialLinks socials={profile.socials} />
        </div>
        <figure className="order-first mb-4 w-40 shrink-0 bg-neutral-50 md:order-last md:mb-0 md:w-50">
          <Image
            src={avatar}
            alt={`Avatar of ${profile.name}`}
            sizes="(min-width: 768px) 200px, 160px"
            loading="eager"
            className="block h-auto w-full"
          />
        </figure>
      </div>
    </header>
  );
};
