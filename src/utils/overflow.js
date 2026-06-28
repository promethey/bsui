import { classnames as cs } from "helpers";

const OVERFLOW_CLASS_NAME = "overflow";

const OVERFLOW_VALUES = ["auto", "hidden", "visible", "scroll"];

/**
 * Resolves Bootstrap overflow utility classes.
 *
 * Supports predefined Bootstrap overflow values.
 *
 * Unsupported values are ignored.
 *
 * @see {@link https://getbootstrap.com/docs/5.1/utilities/overflow/}
 *
 * @example
 * overflowResolver("auto")
 * // "overflow-auto"
 *
 * @example
 * overflowResolver("hidden")
 * // "overflow-hidden"
 *
 * @example
 * overflowResolver("visible")
 * // "overflow-visible"
 *
 * @example
 * overflowResolver("scroll")
 * // "overflow-scroll"
 *
 * @example
 * overflowResolver("foo")
 * // ""
 * // ignore
 *
 * @param {"auto"|"hidden"|"visible"|"scroll"} [value]
 * Overflow utility value.
 *
 * @returns {string}
 * Bootstrap overflow utility class.
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
export function overflowResolver(value) {
  if (!value) return "";

  // String
  if (typeof value === "string" && value) {
    const overflowValue = value.trim();

    if (OVERFLOW_VALUES.includes(overflowValue)) {
      return cs(OVERFLOW_CLASS_NAME, overflowValue);
    }
  }

  return "";
}
