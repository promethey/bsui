import { classnames as cs } from "helpers/classnames";
import { is } from "helpers/is";

const SHADOW_CLASS_NAME = "shadow";
const SHADOW_VALUES = ["none", "sm", true, "lg"];

/**
 * Shadow function
 *
 * @see {@link https://getbootstrap.com/docs/5.1/utilities/shadows/}
 *
 * @examples
 * shadow(true) // 'shadow' like a regular shadow
 * shadow("none") // 'shadow-none'
 * shadow("sm") // 'shadow-sm'
 *
 * @param {string|boolean} value
 *
 * @returns {string} classnames
 */
export function shadow(value) {
  if (!value) return "";

  // Boolean
  if (typeof value === "boolean" && value) {
    return SHADOW_CLASS_NAME;
  }

  // String
  if (is("string", value, { notEmpty: true })) {
    if (SHADOW_VALUES.includes(value)) {
      return cs(SHADOW_CLASS_NAME, value);
    }
  }

  return "";
}
