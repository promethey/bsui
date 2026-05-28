/**
 * Function to translate a string with the first letter capitalized
 * @param {string} [str=""]
 * @return {string} result
 */
export function capitalize(str = "") {
  if (typeof str !== "string") return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}
