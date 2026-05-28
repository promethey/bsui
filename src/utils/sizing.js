import { classnames as cs } from "helpers";

const SIZING_MAP = ["w", "mw", "h", "mh"];
const SIZING_VALUES = [25, 50, 75, 100, "auto"];

/**
 * Sizing (Width and Height) function
 *
 * @see {@link https://getbootstrap.com/docs/5.1/utilities/sizing/}
 *
 * @example
 * sizing({ w: 25 }) // 'w-25'
 * sizing({ h: 50 }) // 'h-50'
 * sizing({ w: 25, h: 50 }) // 'w-25 h-50'
 * sizing({ mw: 100, mh: 25 }) // 'mw-100 mh-25'
 * sizing({ w: "auto", h: "auto" }) // 'w-auto h-auto'
 *
 * @param {Object} value
 * @returns {string} classnames
 */
export function sizingResolver(value) {
  if (!value) return "";

  // Object
  if (
    typeof value === "object" &&
    value &&
    !Array.isArray(value) &&
    Object.keys(value).length > 0
  ) {
    let result = [];

    for (let [key, val] of Object.entries(value)) {
      if (SIZING_MAP.includes(key) && SIZING_VALUES.includes(val)) {
        result.push(cs(key, val));
      }
    }

    return result.join(" ").trim();
  }

  return "";
}
