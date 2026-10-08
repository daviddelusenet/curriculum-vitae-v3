import { numberToWords } from "@/lib/number-to-words";

type PersonalInterestsInput = {
  edenAge: number;
};

export const getPersonalInterests = ({
  edenAge,
}: PersonalInterestsInput): string[] => [
  "In my spare time, I spend a lot of time playing and watching basketball. I can't get enough of it; basketball is just a beautiful game 🏀. I also enjoy skateboarding, doing yoga, and going to the gym.",
  `When I'm not on a basketball court, skateboard or yoga mat, I'm spending most of my time with my girlfriend and our ${numberToWords(edenAge)}-year-old son Eden 👼.`,
  "Besides all of the above, I'm really into fashion and I enjoy playing video games once in a while.",
];
