import { classnames as cs, is } from "helpers";

const DISPLAY_CLASS_NAME = "d";
const DISPLAY_PRINT_CLASS_NAME = "d-print";

/**
 * @typedef {"none"|"inline"|"inline-block"|"block"|"grid"|"inline-grid"|"table"|"table-cell"|"table-row"|"flex"|"inline-flex"} DisplayValues
 */

/**
 * @type {Array<string>}
 */
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

/**
 * @typedef {"xs"|"sm"|"md"|"lg"|"xl"|"xxl"} DisplayBreakpoints
 */

/**
 * @type {Array<string>}
 */
const BREAKPOINTS = ["xs", "sm", "md", "lg", "xl", "xxl"];

/**
 * @typedef {Partial<Record<DisplayBreakpoints, DisplayValues>>} DisplayObject
 */

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
 * @param {DisplayObject|string} [value]
 * @param {string} prfx - default 'd'
 *
 * @returns {string}
 */
export function displayResolver(value, prfx = DISPLAY_CLASS_NAME) {
  if (!value) return "";

  // String
  if (is("string", value, { notEmpty: true })) {
    if (DISPLAY_VALUES.includes(String(value).trim())) {
      return cs(prfx, String(value).trim());
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
 * @param {DisplayObject|string} [value]
 * @param {string} prfx - default 'd-print'
 *
 * @returns {string} classnames
 */
export function displayPrintResolver(value, prfx = DISPLAY_PRINT_CLASS_NAME) {
  return displayResolver(value, prfx);
}
