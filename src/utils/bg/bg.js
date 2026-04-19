import { prefix } from "utils/prefix";

const BG_MAP = {
  color: "bg",
  gradient: "bg-gradient",
  opacity: "bg-opacity",
};

const BG_VALUES_MAP = {
  color: [
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
  ],
  gradient: [true],
  opacity: [10, 25, 50, 75],
};

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
export function bg(value) {
  if (!value) return "";

  // String
  if (typeof value === "string" && BG_VALUES_MAP["color"].includes(value)) {
    return prefix(BG_MAP["color"], value); // return example 'bg-primary'
  }

  // Object
  if (typeof value === "object") {
    let result = [];

    if (Object.entries(value).length === 0) {
      return "";
    }

    for (let [key, val] of Object.entries(value)) {
      if (Object.keys(BG_MAP).includes(key)) {
        if (BG_VALUES_MAP[key].includes(val)) {
          result.push(prefix(BG_MAP[key], val));
        }
      }
    }

    return result.join(" ").trim();
  }

  return "";
}
