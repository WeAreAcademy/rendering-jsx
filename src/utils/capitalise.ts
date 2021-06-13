/**
 * Capitalises the first letter *only* of a string (and preserves the rest).
 * @param str string to capitalise
 * @returns the capitalised string
 */
export function capitalise(str: string): string {
  const capitalisedFirstLetter = str[0].toUpperCase();
  const remainingLetters = str.slice(1);
  return `${capitalisedFirstLetter}${remainingLetters}`;
}
