import { classnames as cs, is } from "helpers";

const OVERFLOW_CLASS_NAME = "overflow";
const OVERFLOW_VALUES = ["auto", "hidden", "visible", "scroll"];

/**
 * Overflow function
 *
 * @see {@link https://getbootstrap.com/docs/5.1/utilities/overflow/}
 *
 * @example
 * overflow("auto") // 'overflow-auto'
 * overflow("hidden") // 'overflow-hidden'
 *
 * @param {string} [value]
 * @returns {string}
 */
export function overflowResolver(value) {
  if (!value) return "";

  // String
  if (is("string", value, { notEmpty: true })) {
    if (OVERFLOW_VALUES.includes(value.trim())) {
      return cs(OVERFLOW_CLASS_NAME, value.trim());
    }
  }

  return "";
}
