import { classnames as cs } from "helpers/classnames";
import { is } from "helpers/is";

const ROUNDED_CLASS_NAME = "rounded";
const ROUNDED_VALUES = [
  true,
  "top",
  "end",
  "bottom",
  "start",
  "circle",
  "pill",
  0,
  1,
  2,
  3,
];

/**
 * Rounded function
 *
 * @see {@link https://getbootstrap.com/docs/5.1/utilities/borders/}
 *
 * @example
 * rounded(true) // 'rounded'
 * rounded("top") // 'rounded-top'
 * rounded(0) // 'rounded-0'
 *
 * @param {boolean|string|number} value
 * @returns {string} classnames
 */
export function rounded(value) {
  if (value !== 0 && !value) return "";

  // Boolean
  if (typeof value === "boolean" && value) {
    return ROUNDED_CLASS_NAME;
  }

  // String
  if (is("string", value, { notEmpty: true })) {
    if (ROUNDED_VALUES.includes(value)) {
      return cs(ROUNDED_CLASS_NAME, value);
    }
  }

  // Number
  if (is("number", value) && ROUNDED_VALUES.includes(value)) {
    return cs(ROUNDED_CLASS_NAME, value);
  }

  return "";
}
