/**
 * Capitalizes the first character of a string.
 *
 * @param {string} [str=""] - String to transform.
 * @returns {string} Transformed string with an uppercase first character.
 */
export function capitalize(str = "") {
  if (typeof str !== "string") return "";

  return str.charAt(0).toUpperCase() + str.slice(1);
}
