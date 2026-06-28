/**
 * Capitalizes the first character of a string.
 *
 * Returns an empty string if the provided value
 * is not a string.
 *
 * @example
 * capitalize("hello")
 * // "Hello"
 *
 * @example
 * capitalize("bootstrap")
 * // "Bootstrap"
 *
 * @example
 * capitalize("")
 * // ""
 *
 * @example
 * capitalize(123)
 * // ""
 *
 * @param {string} [text=""]
 * String to capitalize.
 *
 * @returns {string}
 * String with the first character converted to uppercase.
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
export function capitalize(text = "") {
  if (typeof text !== "string") return "";

  return text.charAt(0).toUpperCase() + text.slice(1);
}
