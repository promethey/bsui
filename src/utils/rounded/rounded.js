import { classnames as cs } from "helpers/classnames";

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
  if (typeof value === "string" && value.trim()) {
    if (ROUNDED_VALUES.includes(value)) {
      return cs(ROUNDED_CLASS_NAME, value);
    }
  }

  // Number
  if (typeof value === "number" && ROUNDED_VALUES.includes(value)) {
    return cs(ROUNDED_CLASS_NAME, value);
  }

  return "";
}
