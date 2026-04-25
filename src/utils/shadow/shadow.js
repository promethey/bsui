import { classnames as cs } from "helpers/classnames";

const SHADOW_CLASS_NAME = "shadow";

const SHADOW_VALUES = ["none", "sm", true, "lg"];

export function shadow(value) {
  if (!value) return "";

  // String
  if (typeof value === "string" && value.trim()) {
    if (SHADOW_VALUES.includes(value)) {
      return cs(SHADOW_CLASS_NAME, value);
    }
  }

  // Boolean
  if (typeof value === "boolean" && value) {
    return SHADOW_CLASS_NAME;
  }

  return "";
}
