import { cacheLife } from "next/cache";
import { yearsSince } from "@/lib/years-since";

const FIRST_JOB_START = new Date(2012, 2, 1); // March 2012, Atabix Solutions
const EDEN_BIRTH_DATE = new Date(2018, 10, 21); // 21 November 2018

export type CvStats = {
  yearsOfExperience: number;
  edenAge: number;
};

/**
 * Values that depend on the current date. Cached for a day so the page stays
 * static and is regenerated in the background once the cache is stale.
 */
export const getCvStats = async (): Promise<CvStats> => {
  "use cache";
  cacheLife("days");

  const now = new Date();

  return {
    yearsOfExperience: yearsSince(FIRST_JOB_START, now),
    edenAge: yearsSince(EDEN_BIRTH_DATE, now),
  };
};
