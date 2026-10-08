export type Job = {
  company: { name: string; url: string };
  roles: { title: string; period: string }[];
  technologies: string[];
  description: string[];
};

export const workingExperience: Job[] = [
  {
    company: { name: "Albert Heijn", url: "https://www.ah.nl/" },
    roles: [
      { title: "senior frontend developer", period: "May 2025 - present" },
    ],
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Java",
      "Kotlin",
    ],
    description: [
      "At Albert Heijn I'm part of the team building Edge, the proprietary retail media platform of Ahold Delhaize. Edge powers on-site display ads, sponsored search and in-store digital screens, and gives brand partners one place to plan, launch and measure their campaigns across both physical and digital channels.",
      "The platform is developed by Ahold Delhaize's in-house tech teams and is also used by Ahold Delhaize USA, where it reaches the more than 26 million customers who shop at its brands each week. Besides building the frontend with React, Next.js and TypeScript, I also write backend code in Java and Kotlin.",
    ],
  },
  {
    company: { name: "Bird", url: "https://www.bird.com/" },
    roles: [
      { title: "frontend engineer", period: "September 2024 - May 2025" },
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "PostgreSQL"],
    description: [
      "At Bird I greatly improved my product thinking and I also got used to working on a huge codebase. Initially I was part of the business infrastructure team, which was responsible for helping out wherever help was needed.",
      "After that I was part of the admin team and later on even the last developer remaining in this team. During this time I worked on our internal sales tool, used by all sales representatives at Bird. I worked closely with the VP of Strategy and Ops to determine which features needed to be built.",
      "The last team I was a part of was the HR team, working on the new HR product Bird was building.",
    ],
  },
  {
    company: { name: "DEPT®", url: "https://www.deptagency.com/" },
    roles: [
      { title: "senior frontend developer", period: "May 2023 - August 2024" },
    ],
    technologies: ["React", "Next.js", "Styled Components", "vanilla-extract"],
    description: [
      "DEPT® is one of the biggest agencies worldwide and it was a joy working there. I worked on multiple exciting projects, all of them built with React and Next.js. Even though my official role was a senior developer, in practice I was the lead developer on most projects I worked on.",
    ],
  },
  {
    company: { name: "Touchtribe", url: "https://touchtribe.nl/" },
    roles: [
      {
        title: "team lead frontend developer",
        period: "December 2022 - May 2023",
      },
      {
        title: "lead frontend developer",
        period: "July 2022 - December 2022",
      },
    ],
    technologies: ["React", "Next.js", "Styled Components"],
    description: [
      "I started at Touchtribe as lead frontend developer and later got promoted to team lead. As a team lead I was guiding a team of five frontend developers. I had biweekly check-ins with these developers and helped them grow professionally.",
    ],
  },
  {
    company: { name: "code d'azur", url: "https://codedazur.com/" },
    roles: [
      { title: "senior frontend developer", period: "July 2020 - July 2022" },
    ],
    technologies: ["React", "Next.js", "Gatsby", "Styled Components"],
    description: [
      "Since I was missing the camaraderie digital agencies had to offer, I decided to join code d'azur. Here I started working fulltime with technologies like Gatsby and Next.js. I also worked for numerous clients, like Philips, Lotus Cars, Knit! Kvadrat and Polestar.",
    ],
  },
  {
    company: { name: "Cygni NL", url: "https://cygnigroup.com/nl/" },
    roles: [
      {
        title: "frontend developer consultant",
        period: "August 2019 - July 2020",
      },
    ],
    technologies: ["React", "Styled Components"],
    description: [
      "When I joined Cygni I actually was the first developer they hired in the Netherlands. After my hiring, we wanted to grow the team, a process which I was very involved in. I was part of a lot of interviews, greatly improving my soft skills.",
      "During my time at Cygni I did one project: I helped Sportlink build the software they sell to sport associations to manage their clubs/teams. We used React and Styled Components for this project.",
    ],
  },
  {
    company: { name: "Random Studio", url: "https://random.studio/" },
    roles: [
      { title: "frontend developer", period: "January 2018 - August 2019" },
    ],
    technologies: ["React", "PixiJS", "CSS Modules", "Styled Components"],
    description: [
      "At Random Studio I really started to get experienced with React. I did a lot of cool projects there, including one of my most favorite ones of all time, a custom webshop for Raf Simons.",
    ],
  },
  {
    company: { name: "Momkai", url: "https://momkai.com" },
    roles: [
      {
        title: "(intern) frontend developer",
        period: "February 2016 - January 2018",
      },
    ],
    technologies: ["Backbone.js", "React", "CSS Modules"],
    description: [
      "I started at Momkai as an intern frontend developer as part of my graduation internship. After successfully finishing this internship and graduating, I continued working there as a frontend developer. I primarily worked on projects with Backbone.js and React.",
    ],
  },
  {
    company: { name: "Atabix Solutions", url: "https://atabix.com" },
    roles: [
      {
        title: "(internship) frontend developer",
        period: "March 2012 - January 2016",
      },
    ],
    technologies: ["Twig", "jQuery"],
    description: [
      "Working at Atabix was my first frontend developer job. During my time at Atabix I worked on websites for a lot of different clients, ranging from Boldking to Daarnhouwer. I primarily used Twig templates and jQuery.",
    ],
  },
];
