import { classnames as cs } from "helpers/classnames";

const FLOAT_CLASS_NAME = "float";
const FLOAT_VALUES = ["start", "end", "none"];
const FLOAT_BREAKPOINTS = ["xs", "sm", "md", "lg", "xl", "xxl"];

export function float(value) {
  if (!value) return "";

  // String
  if (typeof value === "string" && value.trim()) {
    if (FLOAT_VALUES.includes(value.trim())) {
      return cs(FLOAT_CLASS_NAME, value.trim());
    }
  }

  // Object
  if (
    typeof value === "object" &&
    value &&
    !Array.isArray(value) &&
    Object.keys(value).length > 0
  ) {
    const floatFilterUnsupportedValues = Object.entries(value).filter(
      ([breakpoint, displayValue]) =>
        FLOAT_BREAKPOINTS.includes(breakpoint) &&
        FLOAT_VALUES.includes(displayValue),
    );

    return cs(
      FLOAT_CLASS_NAME,
      Object.fromEntries(floatFilterUnsupportedValues),
    );
  }

  return "";
}
