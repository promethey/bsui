/**
 * Generates Bootstrap-style class names by combining
 * a prefix with one or more modifier values.
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
 * @param {string} prfx
 * Base Bootstrap class prefix.
 *
 * @param {...(string|number|boolean|null|undefined)} values
 * Optional modifier values appended to the prefix.
 * Boolean true preserves the prefix, while falsy values
 * are ignored.
 *
 * @returns {string}
 * Generated Bootstrap class name.
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
