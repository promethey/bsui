import { classnames as cs } from "helpers/classnames";

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
 * Background function
 *
 * @see {@link https://getbootstrap.com/docs/5.1/utilities/background/}
 *
 * @example
 * bg("primary") // return 'bg-primary'
 * bg({ color: 'primary', gradient: true, opacity: 10 }) // 'bg-primary bg-gradient bg-opacity-10'
 * bg({ color: 'danger', grdnt: true }) // 'bg-danger', grdnt was igrnored
 *
 * @param {('primary'|'secondary'|'success'|'danger'|'warning'|'info'|'light'|'dark'|'body'|'white'|'transparent' | { color?: 'primary'|'secondary'|'success'|'danger'|'warning'|'info'|'light'|'dark'|'body'|'white'|'transparent', gradient?: boolean, opacity?: 10|25|50|75 })} value
 *
 * @returns {string} bg
 */
export function bg(value) {
  if (!value) return "";

  // String
  if (typeof value === "string" && BG_VALUES_MAP["color"].includes(value)) {
    return cs(BG_MAP["color"], value); // example 'bg-primary'
  }

  // Object
  if (
    typeof value === "object" &&
    !Array.isArray(value) &&
    Object.keys(value).length > 0
  ) {
    let result = [];

    for (let [key, val] of Object.entries(value)) {
      if (key in BG_MAP && BG_VALUES_MAP[key].includes(val)) {
        result.push(cs(BG_MAP[key], val));
      }
    }

    return result.join(" ").trim();
  }

  return "";
}
