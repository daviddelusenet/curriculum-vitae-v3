export type Social = {
  type: "github" | "linkedin" | "mail";
  href: string;
  title: string;
};

export type Profile = {
  name: string;
  occupation: string;
  details: { label: string; value: string }[];
  socials: Social[];
};

export const profile: Profile = {
  name: "David de Lusenet",
  occupation: "Senior frontend developer",
  details: [
    { label: "Date of birth", value: "June 24, 1992" },
    { label: "Nationality", value: "Dutch" },
    { label: "Current location", value: "Oostzaan" },
    { label: "Drivers license", value: "B" },
  ],
  socials: [
    {
      type: "github",
      href: "https://github.com/daviddelusenet",
      title: "Check out my code",
    },
    {
      type: "linkedin",
      href: "https://www.linkedin.com/in/david-de-lusenet-31b838111/",
      title: "Connect with me",
    },
    {
      type: "mail",
      href: "mailto:me@daviddeluse.net",
      title: "Send me an email",
    },
  ],
};
