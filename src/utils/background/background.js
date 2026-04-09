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
 * @example
 * bg("primary") // return 'bg-primary'
 *
 * @example
 * bg({ color: 'primary', gradient: true, opacity: 10 }) // return 'bg-primary bg-gradient bg-opacity-10'
 *
 * @example
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

  if (typeof value === "string" && BG_COLOR_LIST.includes(value)) {
    return prefix(BASE_CLASS_NAME, value); // return example 'bg-primary'
  }

  if (typeof value === "object") {
    let valueEntries = Object.entries(value);
    let result = [];

    if (valueEntries.length === 0) {
      return "";
    }

    for (let [key, value] of valueEntries) {
      // if key is not 'color', 'gradient' or 'opacity' - ignore
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
