import { classnames as cs } from "helpers/classnames";

const OPACITY_CLASS_NAME = "opacity";
const OPACITY_VALUES = [100, 75, 50, 25];

export function opacity(value) {
  if (!value) return "";

  // Number
  if (typeof value === "number" && OPACITY_VALUES.includes(value)) {
    return cs(OPACITY_CLASS_NAME, value);
  }

  return "";
}