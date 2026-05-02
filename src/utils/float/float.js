import { classnames as cs } from "helpers/classnames";
import { is } from "helpers/is";

const FLOAT_CLASS_NAME = "float";
const FLOAT_VALUES = ["start", "end", "none"];
const FLOAT_BREAKPOINTS = ["xs", "sm", "md", "lg", "xl", "xxl"];

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
 * @param {string|Object|undefined} value
 * @returns {string} classnames
 */
export function float(value) {
  if (!value) return "";

  // String
  if (is("string", value, { notEmpty: true })) {
    if (FLOAT_VALUES.includes(value.trim())) {
      return cs(FLOAT_CLASS_NAME, value.trim());
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
