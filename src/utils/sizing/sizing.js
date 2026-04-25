import { classnames as cs } from "helpers/classnames";

const SIZING_MAP = ["w", "mw", "h", "mh"];
const SIZING_VALUES = [25, 50, 75, 100, "auto"];

export function sizing(value) {
  if (!value) return "";

  // Object
  if (typeof value === "object" && Object.keys(value).length > 0) {
    let result = [];

    for (let [prop, val] of Object.entries(value)) {
      if (SIZING_MAP.includes(prop) && SIZING_VALUES.includes(val)) {
        result.push(cs(prop, val));
      }
    }

    return result.join(" ").trim();
  }

  return "";
}
