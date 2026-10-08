/**
 * Returns the number of full years between `from` and `now`, taking the
 * month and day into account.
 */
export const yearsSince = (from: Date, now: Date): number => {
  const years = now.getFullYear() - from.getFullYear();
  const hadAnniversary =
    now.getMonth() > from.getMonth() ||
    (now.getMonth() === from.getMonth() && now.getDate() >= from.getDate());

  return hadAnniversary ? years : years - 1;
};
