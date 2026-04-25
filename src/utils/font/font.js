import { classnames as cs } from "helpers/classnames";

const FONT_MAP = {
  fs: "fs",
  fw: "fw",
  fst: "fst",
  lh: "lh",
  monospace: "font-monospace",
};

const FONT_VALUES_MAP = {
  fs: [1, 2, 3, 4, 5, 6],
  fw: ["bold", "bolder", "normal", "light", "lighter"],
  fst: ["italic", "normal"],
  lh: [1, "sm", "base", "lg"],
  monospace: [true],
};

/**
 * Font function
 *
 * @see {@link https://getbootstrap.com/docs/5.1/utilities/text/}
 *
 * @example
 * font(3) // "fs-1"
 * font({ size: 3, weight: "bold" }) // 'fs-3 fw-bold'
 *
 * @param {number|Object} value - Default number is size
 *
 * @return {string} font classnames
 */
export function font(value) {
  if (!value) return "";

  // Object
  if (typeof value === "object" && Object.keys(value).length > 0) {
    let result = [];

    for (let [key, val] of Object.entries(value)) {
      if (key in FONT_MAP && FONT_VALUES_MAP[key].includes(val)) {
        result.push(cs(FONT_MAP[key], val));
      }
    }

    return result.join(" ").trim();
  }

  return "";
}
