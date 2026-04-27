import { classnames as cs } from "helpers/classnames";

const OPACITY_CLASS_NAME = "opacity";
const OPACITY_VALUES = [100, 75, 50, 25];

/**
 * Opacity function
 *
 * @see {@link https://getbootstrap.com/docs/5.1/utilities/opacity/}
 *
 * @example
 * opacity(100) // 'opacity-100'
 *
 * @param {number} value
 * @returns {string} classnames
 */
export function opacity(value) {
  if (!value) return "";

  // Number
  if (typeof value === "number" && OPACITY_VALUES.includes(value)) {
    return cs(OPACITY_CLASS_NAME, value);
  }

  return "";
}
