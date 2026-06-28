import { classnames as cs } from "helpers";

const SIZING_MAP = ["w", "mw", "h", "mh"];

const SIZING_VALUES = [25, 50, 75, 100, "auto"];

/**
 * @typedef {Object} SizingObject
 *
 * @property {25|50|75|100|"auto"} [w]
 * Sets the width utility value.
 *
 * @property {25|50|75|100|"auto"} [mw]
 * Sets the max-width utility value.
 *
 * @property {25|50|75|100|"auto"} [h]
 * Sets the height utility value.
 *
 * @property {25|50|75|100|"auto"} [mh]
 * Sets the max-height utility value.
 */

/**
 * Resolves Bootstrap sizing utility classes.
 *
 * Supports width, max-width,
 * height, and max-height utilities.
 *
 * Unsupported properties and values are ignored.
 *
 * @see {@link https://getbootstrap.com/docs/5.1/utilities/sizing/}
 *
 * @example
 * sizingResolver({ w: 25 })
 * // "w-25"
 *
 * @example
 * sizingResolver({ h: 50 })
 * // "h-50"
 *
 * @example
 * sizingResolver({ w: 25, h: 50 })
 * // "w-25 h-50"
 *
 * @example
 * sizingResolver({ mw: 100, mh: 25 })
 * // "mw-100 mh-25"
 *
 * @example
 * sizingResolver({ w: "auto", h: "auto" })
 * // "w-auto h-auto"
 *
 * @example
 * sizingResolver({ w: 25, foo: 100 })
 * // "w-25"
 *
 * @param {SizingObject} [value]
 * Sizing utility configuration.
 *
 * @returns {string}
 * Space-separated Bootstrap sizing utility classes.
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
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
