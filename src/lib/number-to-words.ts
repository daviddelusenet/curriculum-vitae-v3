const ones = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

const tens = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

/**
 * Converts a whole number between 0 and 99 to English words, e.g. 14 →
 * "fourteen" and 21 → "twenty-one". Other numbers are returned as digits.
 */
export const numberToWords = (value: number): string => {
  if (!Number.isInteger(value) || value < 0 || value > 99) {
    return String(value);
  }

  if (value < 20) {
    return ones[value];
  }

  const remainder = value % 10;

  return remainder === 0
    ? tens[Math.floor(value / 10)]
    : `${tens[Math.floor(value / 10)]}-${ones[remainder]}`;
};
