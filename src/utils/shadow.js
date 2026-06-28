import { classnames as cs } from "helpers";

const SHADOW_CLASS_NAME = "shadow";

/** @type {Array<true|"none"|"sm"|"lg">} */
const SHADOW_VALUES = ["none", "sm", true, "lg"];

/**
 * Resolves Bootstrap shadow utility classes.
 *
 * Supports regular, small, large,
 * and disabled shadow utilities.
 *
 * Unsupported values are ignored.
 *
 * @see {@link https://getbootstrap.com/docs/5.1/utilities/shadows/}
 *
 * @example
 * shadowResolver(true)
 * // "shadow"
 *
 * @example
 * shadowResolver("sm")
 * // "shadow-sm"
 *
 * @example
 * shadowResolver("lg")
 * // "shadow-lg"
 *
 * @example
 * shadowResolver("none")
 * // "shadow-none"
 *
 * @example
 * shadowResolver("foo")
 * // ""
 * // ignore
 *
 * @param {boolean|"none"|"sm"|"lg"} [value]
 * Shadow utility value.
 *
 * @returns {string}
 * Bootstrap shadow utility class.
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
export function shadowResolver(value) {
  if (!value) return "";

  // Boolean
  if (typeof value === "boolean" && value) {
    return SHADOW_CLASS_NAME;
  }

  // String
  if (typeof value === "string" && value.length > 0) {
    if (SHADOW_VALUES.includes(value)) {
      return cs(SHADOW_CLASS_NAME, value);
    }
  }

  return "";
}
