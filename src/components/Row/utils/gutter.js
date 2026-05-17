import { classnames as cs } from "helpers";

/**
 * @typedef {0|1|2|3|4|5} GutterValues
 * @typedef {"g"|"gx"|"gy"} GutterPrefix
 * @typedef {"xs"|"sm"|"md"|"lg"|"xl"|"xxl"} Breakpoints
 *
 * @typedef {Partial<Record<Breakpoints, GutterValues>>} GutterObject
 */

/** @type {Array<GutterValues>} */
const GUTTER_VALUES = [0, 1, 2, 3, 4, 5];

/** @type {Array<GutterPrefix>} */
const GUTTER_PREFIX = ["g", "gx", "gy"];

/** @type {Array<Breakpoints>} */
const BREAKPOINTS = ["xs", "sm", "md", "lg", "xl", "xxl"];

/**
 * Gutter function
 *
 * @see {@link https://getbootstrap.com/docs/5.3/layout/gutters/}
 *
 * @example
 * gutter(5) // 'g-5'
 *
 * @example
 * gutter({ xs: 3, md: 5 }) // 'g-3 g-md-5'
 *
 * @param {GutterPrefix} prfx - gutter prefix
 * @param {GutterValues} [value] - padding between your columns
 *
 * @return {string}
 */
export function gutter(prfx, value) {
  // Number
  if (typeof value === "number" && GUTTER_VALUES.includes(value)) {
    return cs(prfx, value);
  }

  // Object
  if (
    typeof value === "object" &&
    value &&
    !Array.isArray(value) &&
    Object.keys(value).length > 0
  ) {
    let result = [];

    for (let [key, val] of Object.entries(value)) {
      const breakpoint = /** @type {Breakpoints} */ (key);

      if (BREAKPOINTS.includes(breakpoint) && GUTTER_VALUES.includes(val)) {
        result.push(cs(prfx, { [breakpoint]: val }));
      }
    }

    return result.join(" ").trim();
  }

  return "";
}

/**
 * Gutter resolver function
 *
 * @param {object} values
 *
 * @return {string}
 */
export function gutterResolver(values) {
  if (
    typeof values === "object" &&
    values &&
    !Array.isArray(values) &&
    Object.keys(values).length > 0
  ) {
    let result = [];

    for (let [prfx, val] of Object.entries(values)) {
      const prefix = /** @type {GutterPrefix} */ (prfx);

      if (GUTTER_PREFIX.includes(prefix)) {
        result.push(gutter(prefix, val));
      }
    }

    return result.join(" ").trim();
  }

  return "";
}
