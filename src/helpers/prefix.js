/**
 * Generates Bootstrap utility class names by combining
 * a prefix with one or more modifier values.
 *
 * Strings and numbers are appended as class modifiers,
 * while `true` preserves the base prefix. All other
 * values are ignored.
 *
 * @example
 * prefix("m", 0)
 * // "m-0"
 *
 * @example
 * prefix("bg", "opacity", 25)
 * // "bg-opacity-25"
 *
 * @example
 * prefix("border", true)
 * // "border"
 *
 * @example
 * prefix("justify-content", "md", "center")
 * // "justify-content-md-center"
 *
 * @example
 * prefix("text", undefined, "center", null)
 * // "text-center"
 *
 * @param {string} prfx
 * Base Bootstrap utility prefix.
 *
 * @param {...(string|number|boolean|null|undefined)} values
 * Additional modifier values appended to the prefix.
 *
 * @returns {string}
 * Generated Bootstrap utility class name.
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
export function prefix(prfx, ...values) {
  if (typeof prfx !== "string" || !prfx) {
    return "";
  }

  const result = [prfx];

  for (const value of values) {
    if (value === true) {
      continue;
    }

    if (typeof value === "string" || typeof value === "number") {
      const normalized = String(value).trim();

      if (normalized) {
        result.push(`-${normalized}`);
      }
    }
  }

  return result.join("").trim();
}
