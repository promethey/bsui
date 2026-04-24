import { classnames as cs } from "helpers/classnames";

const DISPLAY_CLASS_NAME = "d";

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

export function display(value) {
  if (!value) return "";

  // String
  if (typeof value === "string" && value.trim()) {
    if (DISPLAY_VALUES.includes(value)) {
      return cs(DISPLAY_CLASS_NAME, value);
    }
  }

  // Object
  if (typeof value === "object" && value && Object.keys(value).length > 0) {
    const displayFilterValues = Object.entries(value).filter(
      ([breakpoint, displayValue]) =>
        BREAKPOINTS.includes(breakpoint) &&
        DISPLAY_VALUES.includes(displayValue),
    );

    return cs(DISPLAY_CLASS_NAME, Object.fromEntries(displayFilterValues));
  }

  return "";
}
