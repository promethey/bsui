import { classnames as cs } from "helpers";

/**
 * @typedef {"none"|"inline"|"inline-block"|"block"|"grid"|"inline-grid"|"table"|"table-cell"|"table-row"|"flex"|"inline-flex"} DisplayValues
 * @typedef {"xs"|"sm"|"md"|"lg"|"xl"|"xxl"} DisplayBreakpoints
 */

const DISPLAY_CLASS_NAME = "d";
const DISPLAY_PRINT_CLASS_NAME = "d-print";

/** @type {Array<DisplayValues>} */
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

/** @type {Array<DisplayBreakpoints>} */
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
  if (typeof value === "string" && value.length > 0) {
    if (DISPLAY_VALUES.includes(/** @type {DisplayValues} */ (value))) {
      return cs(prfx, value);
    }
  }

  // Object
  if (
    typeof value === "object" &&
    value &&
    !Array.isArray(value) &&
    Object.keys(value).length > 0
  ) {
    const displayFilterUnsupportedValues = Object.entries(value).filter(
      ([breakpoint, displayValue]) =>
        BREAKPOINTS.includes(/** @type {DisplayBreakpoints} */ (breakpoint)) &&
        DISPLAY_VALUES.includes(/** @type {DisplayValues} */ (displayValue)),
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
 * @returns {string}
 */
export function displayPrintResolver(value, prfx = DISPLAY_PRINT_CLASS_NAME) {
  return displayResolver(value, prfx);
}
