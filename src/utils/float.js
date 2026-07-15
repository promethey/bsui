import { classnames as cs } from "helpers";

/**
 * @typedef {object} FloatObject
 *
 * @property {"start"|"end"|"none"} [xs]
 * X-Small breakpoint
 *
 * @property {"start"|"end"|"none"} [sm]
 * Small breakpoint
 *
 * @property {"start"|"end"|"none"} [md]
 * Medium brekpoint
 *
 * @property {"start"|"end"|"none"} [lg]
 * Large breakpoint
 *
 * @property {"start"|"end"|"none"} [xl]
 * Extra large breakpoint
 *
 * @property {"start"|"end"|"none"} [xxl]
 * Extra extra large breakpoint
 */

const FLOAT_CLASS_NAME = "float";

const FLOAT_VALUES = ["start", "end", "none"];

const FLOAT_BREAKPOINTS = ["xs", "sm", "md", "lg", "xl", "xxl"];

/**
 * Resolves Bootstrap-like float utility classes.
 *
 * @see {@link https://getbootstrap.com/docs/5.1/utilities/float/}
 *
 * @example
 * float("start")
 * // "float-start"
 *
 * @example
 * float("none")
 * // "float-none"
 *
 * @example
 * float({ xs: "none", md: "start" })
 * // "float-none float-md-start"
 *
 * @param {FloatObject|"start"|"end"|"none"} [value]
 * Float utility configuration or shorthand value.
 *
 * @returns {string}
 * Space-separated Bootstrap-compatible float utility classes.
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
export function floatResolver(value) {
  if (!value) return "";

  // String
  if (typeof value === "string" && value) {
    const floatValue = value.trim();

    if (FLOAT_VALUES.includes(floatValue)) {
      return cs(FLOAT_CLASS_NAME, floatValue);
    }

    return "";
  }

  // Object
  if (
    typeof value === "object" &&
    value &&
    !Array.isArray(value) &&
    Object.keys(value).length > 0
  ) {
    const validEntries = Object.entries(value).filter(
      ([breakpoint, displayValue]) =>
        FLOAT_BREAKPOINTS.includes(breakpoint) &&
        FLOAT_VALUES.includes(displayValue),
    );

    return cs(FLOAT_CLASS_NAME, Object.fromEntries(validEntries));
  }

  return "";
}
