import { classnames as cs } from "helpers/classnames";

const ROUNDED_CLASS_NAME = "rounded";

const ROUNDED_VALUES = [
  true,
  "top",
  "end",
  "bottom",
  "start",
  "circle",
  "pill",
  0,
  1,
  2,
  3,
];

export function rounded(value) {
  if (value !== 0 && !value) return "";

  // String
  if (
    typeof value === "string" &&
    value.trim() &&
    ROUNDED_VALUES.includes(value)
  ) {
    return cs(ROUNDED_CLASS_NAME, value);
  }

  // Number
  if (typeof value === "number" && ROUNDED_VALUES.includes(value)) {
    return cs(ROUNDED_CLASS_NAME, value);
  }

  // Boolean
  if (typeof value === "boolean" && value) {
    return ROUNDED_CLASS_NAME;
  }

  return "";
}
