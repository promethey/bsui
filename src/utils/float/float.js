import { classnames as cs, is } from "helpers";

const FLOAT_CLASS_NAME = "float";
const FLOAT_VALUES = ["start", "end", "none"];
const FLOAT_BREAKPOINTS = ["xs", "sm", "md", "lg", "xl", "xxl"];

/**
 * @typedef {object} FloatObject
 * @property {"start"|"end"|"none"} [xs] - X-Small breakpoint
 * @property {"start"|"end"|"none"} [sm] - Small breakpoint
 * @property {"start"|"end"|"none"} [md] - Medium brekpoint
 * @property {"start"|"end"|"none"} [lg] - Large breakpoint
 * @property {"start"|"end"|"none"} [xl] - Extra large breakpoint
 * @property {"start"|"end"|"none"} [xxl] - Extra extra large breakpoint
 */

/**
 * Float function
 *
 * @see {@link https://getbootstrap.com/docs/5.1/utilities/float/}
 *
 * @example
 * float("start") // 'float-start'
 * float("none") // 'float-none'
 * float({ xs: "none", md: "start" }) // 'float-none float-md-start'
 *
 * @param {FloatObject|"start"|"end"|"none"} [value]
 * @returns {string}
 */
export function floatResolver(value) {
  if (!value) return "";

  // String
  if (is("string", value, { notEmpty: true })) {
    if (FLOAT_VALUES.includes(String(value).trim())) {
      return cs(FLOAT_CLASS_NAME, String(value).trim());
    }
  }

  // Object
  if (is("object", value, { notEmpty: true })) {
    const floatFilterUnsupportedValues = Object.entries(value).filter(
      ([breakpoint, displayValue]) =>
        FLOAT_BREAKPOINTS.includes(breakpoint) &&
        FLOAT_VALUES.includes(displayValue),
    );

    return cs(
      FLOAT_CLASS_NAME,
      Object.fromEntries(floatFilterUnsupportedValues),
    );
  }

  return "";
}
