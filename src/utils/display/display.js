import { classnames as cs } from "helpers/classnames";

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
 * @param {string|Object} value
 * @param {string} prfx - default 'd'
 *
 * @returns {string} classnames
 */
export function display(value, prfx = DISPLAY_CLASS_NAME) {
  if (!value) return "";

  // String
  if (typeof value === "string" && value.trim()) {
    if (DISPLAY_VALUES.includes(value.trim())) {
      return cs(prfx, value.trim());
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
        BREAKPOINTS.includes(breakpoint) &&
        DISPLAY_VALUES.includes(displayValue),
    );

    return cs(prfx, Object.fromEntries(displayFilterUnsupportedValues));
  }

  return "";
}

export function displayPrint(value, prfx = DISPLAY_PRINT_CLASS_NAME) {
  return display(value, prfx);
}
