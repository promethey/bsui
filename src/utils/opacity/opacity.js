import { classnames as cs } from "helpers/classnames";
import { is } from "helpers/is";

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
 * @param {number|undefined} value
 * @returns {string} classnames
 */
export function opacity(value) {
  if (!value) return "";

  // Number
  if (is("number", value) && OPACITY_VALUES.includes(value)) {
    return cs(OPACITY_CLASS_NAME, value);
  }

  return "";
}
