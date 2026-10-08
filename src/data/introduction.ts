import { numberToWords } from "@/lib/number-to-words";

type IntroductionInput = {
  yearsOfExperience: number;
};

export const getIntroduction = ({
  yearsOfExperience,
}: IntroductionInput): string[] => [
  `I'm a senior frontend developer with over ${numberToWords(yearsOfExperience)} years of hands-on experience. I've successfully worked in multidisciplinary teams containing multiple nationalities. Operating as a one-man army also isn't a problem for me.`,
  "Because of my extensive experience working at digital agencies I've developed a strong eye for detail and design. I work fast and precisely and my code is clean and to the point. Currently my expertise is React/Next.js in combination with TypeScript but I'm open to exploring new technologies.",
  "Besides my TypeScript experience I'm also experienced with a lot of different styling solutions, including: CSS, Sass, Styled Components, vanilla-extract, Stitches and Tailwind CSS. I can also work with testing libraries like Vitest, Jest and Cypress.",
  "I'm a native Dutch speaker but I also have a strong command of the English language.",
];
