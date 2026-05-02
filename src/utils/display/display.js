import { classnames as cs } from "helpers/classnames";
import { is } from "helpers/is";

const DISPLAY_CLASS_NAME = "d";
const DISPLAY_PRINT_CLASS_NAME = "d-print";

const DISPLAY_VALUES = [
  "none",
  "inline",
  "inline-block",
  "block",
  "grid",
  "inline-grid",
  "table",
  "table-cell",
  "table-row",
  "flex",
  "inline-flex",
];

const BREAKPOINTS = ["xs", "sm", "md", "lg", "xl", "xxl"];

/**
 * Display function
 *
 * @see {@link https://getbootstrap.com/docs/5.1/utilities/display/}
 *
 * @example
 * display("flex") // 'd-flex'
 * display("inline") // 'd-inline'
 * display({ xs: "inline", md: "flex" }) // 'd-inline d-md-flex'
 *
 * @param {string|Object|undefined} value
 * @param {string} prfx - default 'd'
 *
 * @returns {string} classnames
 */
export function display(value, prfx = DISPLAY_CLASS_NAME) {
  if (!value) return "";

  // String
  if (is("string", value, { notEmpty: true })) {
    if (DISPLAY_VALUES.includes(value.trim())) {
      return cs(prfx, value.trim());
    }
  }

  // Object
  if (is("object", value, { notEmpty: true })) {
    const displayFilterUnsupportedValues = Object.entries(value).filter(
      ([breakpoint, displayValue]) =>
        BREAKPOINTS.includes(breakpoint) &&
        DISPLAY_VALUES.includes(displayValue),
    );

    return cs(prfx, Object.fromEntries(displayFilterUnsupportedValues));
  }

  return "";
}

/**
 * Display print function
 *
 * @see {@link https://getbootstrap.com/docs/5.1/utilities/display/}
 *
 * @example
 * displayPrint("flex") // 'd-print-flex'
 * displayPrint("inline") // 'd-print-inline'
 *
 * @param {string|Object|undefined} value
 * @param {string} prfx - default 'd-print'
 *
 * @returns {string} classnames
 */
export function displayPrint(value, prfx = DISPLAY_PRINT_CLASS_NAME) {
  return display(value, prfx);
}
