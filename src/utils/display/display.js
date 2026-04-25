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

export function display(value, prfx = DISPLAY_CLASS_NAME) {
  if (!value) return "";

  // String
  if (typeof value === "string" && value.trim()) {
    if (DISPLAY_VALUES.includes(value)) {
      return cs(prfx, value);
    }
  }

  // Object
  if (typeof value === "object" && value && Object.keys(value).length > 0) {
    const displayFilterValues = Object.entries(value).filter(
      ([breakpoint, displayValue]) =>
        BREAKPOINTS.includes(breakpoint) &&
        DISPLAY_VALUES.includes(displayValue),
    );

    return cs(prfx, Object.fromEntries(displayFilterValues));
  }

  return "";
}

export function displayPrint(value, prfx = DISPLAY_PRINT_CLASS_NAME) {
  return display(value, prfx);
}
