import { prefix } from "utils/prefix";

const BASE_CLASS_NAME = "bg";
const BG_PROPERTY_LIST = ["color", "gradient", "opacity"];
const BG_COLOR_LIST = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
  "body",
  "white",
  "transparent",
];
const BG_OPACITY_VALUES = [10, 25, 50, 75];

/**
 * Function for background utility
 * 
 * @see {@link https://getbootstrap.com/docs/5.1/utilities/background/}
 *
 * @example
 * bg("primary") // return 'bg-primary'
 * bg({ color: 'primary', gradient: true, opacity: 10 }) // return 'bg-primary bg-gradient bg-opacity-10'
 * bg({ color: 'danger', grdnt: true }) // return 'bg-danger', grdnt was igrnored
 *
 * @param {('primary'|'secondary'|'success'|'danger'|'warning'|'info'|'light'|'dark'|'body'|'white'|'transparent' | { color?: 'primary'|'secondary'|'success'|'danger'|'warning'|'info'|'light'|'dark'|'body'|'white'|'transparent', gradient?: boolean, opacity?: 10|25|50|75 })} value
 *
 * @returns {string}
 */
export function background(value) {
  if (!value) {
    return "";
  }

  // String
  if (typeof value === "string" && BG_COLOR_LIST.includes(value)) {
    return prefix(BASE_CLASS_NAME, value); // return example 'bg-primary'
  }

  // Object
  if (typeof value === "object") {
    let result = [];

    if (valueEntries.length === 0) {
      return "";
    }

    for (let [key, value] of Object.entries(value)) {
      // if key is not 'color', 'gradient', 'opacity' - ignore
      if (BG_PROPERTY_LIST.includes(key)) {
        if (key === "color" && BG_COLOR_LIST.includes(value)) {
          result.push(prefix(BASE_CLASS_NAME, value));
        }

        if (key === "gradient" && value) {
          result.push(prefix(BASE_CLASS_NAME, key));
        }

        if (key === "opacity" && BG_OPACITY_VALUES.includes(value)) {
          result.push(prefix(BASE_CLASS_NAME, key, value));
        }
      }
    }

    return result.join(" ");
  }

  return "";
}
