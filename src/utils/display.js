import { classnames as cs } from "helpers";

/**
 * @typedef {"none"|"inline"|"inline-block"|"block"|"grid"|"inline-grid"|"table"|"table-cell"|"table-row"|"flex"|"inline-flex"} DisplayValues
 *
 * @typedef {"xs"|"sm"|"md"|"lg"|"xl"|"xxl"} DisplayBreakpoints
 *
 * @typedef {Partial<Record<DisplayBreakpoints, DisplayValues>>} DisplayObject
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
 * Resolves Bootstrap display utility classes.
 *
 * Supports both a single display value and
 * responsive breakpoint-based configuration.
 *
 * Unsupported values and breakpoints are ignored.
 *
 * @see {@link https://getbootstrap.com/docs/5.1/utilities/display/}
 *
 * @example
 * displayResolver("flex")
 * // "d-flex"
 *
 * @example
 * displayResolver("inline")
 * // "d-inline"
 *
 * @example
 * displayResolver({ xs: "inline", md: "flex" })
 * // "d-inline d-md-flex"
 *
 * @example
 * displayResolver({ xs: "flex", foo: "block", lg: "grid" })
 * // "d-flex d-lg-grid"
 *
 * @param {DisplayObject|DisplayValues} [value]
 * Display utility configuration.
 *
 * @param {string} [prfx="d"]
 * Utility class prefix.
 * Intended for internal reuse.
 *
 * @returns {string}
 * Space-separated Bootstrap display utility classes.
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
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
    const validEntries = Object.entries(value).filter(
      ([breakpoint, displayValue]) =>
        BREAKPOINTS.includes(/** @type {DisplayBreakpoints} */ (breakpoint)) &&
        DISPLAY_VALUES.includes(/** @type {DisplayValues} */ (displayValue)),
    );

    return cs(prfx, Object.fromEntries(validEntries));
  }

  return "";
}

/**
 * Resolves Bootstrap print display utility classes.
 *
 * Behaves identically to {@link displayResolver},
 * but generates `d-print-*` classes instead.
 *
 * @see {@link https://getbootstrap.com/docs/5.1/utilities/display/#display-in-print}
 *
 * @example
 * displayPrintResolver("flex")
 * // "d-print-flex"
 *
 * @example
 * displayPrintResolver("inline")
 * // "d-print-inline"
 *
 * @example
 * displayPrintResolver({ xs: "none", lg: "block" })
 * // "d-print-none d-print-lg-block"
 *
 * @param {DisplayObject|DisplayValues} [value]
 * Print display utility configuration.
 *
 * @param {string} [prfx="d-print"]
 * Utility class prefix.
 * Intended for internal reuse.
 *
 * @returns {string}
 * Space-separated Bootstrap print display utility classes.
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
export function displayPrintResolver(value, prfx = DISPLAY_PRINT_CLASS_NAME) {
  return displayResolver(value, prfx);
}
