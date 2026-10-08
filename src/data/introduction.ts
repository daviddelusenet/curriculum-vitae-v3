import { numberToWords } from "@/lib/number-to-words";

type IntroductionInput = {
  yearsOfExperience: number;
};

export const getIntroduction = ({
  yearsOfExperience,
}: IntroductionInput): string[] => [
  `I'm a senior frontend developer with over ${numberToWords(yearsOfExperience)} years of hands-on experience. I've worked in international, multidisciplinary teams, and I'm just as comfortable working on my own.`,
  "Years of working at digital agencies gave me a strong eye for detail and design, and working at product companies like Bird and Albert Heijn sharpened my product thinking. I work quickly and precisely, and my code is clean and to the point. My expertise is React/Next.js with TypeScript, I'm comfortable writing backend code in Java and Kotlin too, and I'm always open to exploring new technologies.",
  "Besides TypeScript, I'm experienced with a wide range of styling solutions, including CSS, Sass, Styled Components, vanilla-extract, Stitches and Tailwind CSS. I also work with testing libraries like Vitest, Jest and Cypress.",
  "I'm a native Dutch speaker but I also have a strong command of the English language.",
];
