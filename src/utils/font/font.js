import { classnames as cs } from "helpers/classnames";

const FONT_MAP = {
  size: "fs",
  weight: "fw",
  style: "fst",
  lineHeight: "lh",
  monospace: "monospace",
};

const FONT_VALUES_MAP = {
  size: [1, 2, 3, 4, 5, 6],
  weight: ["bold", "bolder", "normal", "light", "lighter"],
  style: ["italic", "normal"],
  lineHeight: [1, "sm", "base", "lg"],
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

  // String
  if (typeof value === "number" && FONT_VALUES_MAP["size"].includes(value)) {
    return `${FONT_MAP["size"]}-${value}`;
  }

  // Object
  if (typeof value === "object") {
    if (Object.keys(value).length === 0) {
      return "";
    }

    let result = [];

    for (let [key, val] of Object.entries(value)) {
      if (
        Object.keys(FONT_MAP).includes(key) &&
        FONT_VALUES_MAP[key].includes(val)
      ) {
        result.push(cs(FONT_MAP[key], val));
      }
    }

    return result.join(" ").trim();
  }

  return "";
}
