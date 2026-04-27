import { classnames as cs } from "helpers/classnames";

const OVERFLOW_CLASS_NAME = "overflow";
const OVERFLOW_VALUES = ["auto", "hidden", "visible", "scroll"];

export function overflow(value) {
  if (!value) return "";

  // String
  if (typeof value === "string" && value.trim()) {
    if (OVERFLOW_VALUES.includes(value.trim())) {
      return cs(OVERFLOW_CLASS_NAME, value.trim());
    }
  }

  return "";
}
