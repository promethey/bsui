import { classnames as cs } from "helpers";

/**
 * Valid numeric gutter scale used by Bootstrap 5.
 *
 * Represents spacing multiplier where:
 * - 0 = no gutter
 * - 1–5 = increasing spacing steps
 *
 * @typedef {0|1|2|3|4|5} GutterValues
 */

/**
 * Bootstrap gutter axis prefix.
 *
 * @typedef {"g"|"gx"|"gy"} GutterPrefix
 */

/**
 * Responsive breakpoint keys used for gutter mapping.
 *
 * Matches Bootstrap breakpoints:
 * xs < sm < md < lg < xl < xxl
 *
 * @typedef {"xs"|"sm"|"md"|"lg"|"xl"|"xxl"} Breakpoints
 */

/**
 * Responsive gutter configuration object.
 *
 * Each breakpoint defines a gutter scale value.
 *
 * @typedef {Partial<Record<Breakpoints, GutterValues>>} GutterObject
 */

/**
 * Supported gutter scale values.
 * @type {readonly GutterValues[]}
 */
const GUTTER_VALUES = [0, 1, 2, 3, 4, 5];

/**
 * Supported gutter prefixes.
 * @type {readonly GutterPrefix[]}
 */
const GUTTER_PREFIX = ["g", "gx", "gy"];

/**
 * Valid breakpoint keys for responsive gutter resolution.
 * @type {readonly Breakpoints[]}
 */
const BREAKPOINTS = ["xs", "sm", "md", "lg", "xl", "xxl"];

/**
 * Generates Bootstrap gutter
 * utility class string.
 *
 * @example
 * gutter("g", 5)
 * // "g-5"
 *
 * @example
 * gutter("gx", 2)
 * // "gx-2"
 *
 * @example
 * gutter("g", { xs: 1, md: 3, xl: 5 })
 * // "g-1 g-md-3 g-xl-5"
 *
 * @param {GutterPrefix} prfx
 * Prefix controlling axis of gutter:
 * - `g` → both axes
 * - `gx` → horizontal only
 * - `gy` → vertical only
 *
 * @param {GutterValues|GutterObject} [value]
 * Either:
 * - numeric scale (0–5)
 * - or responsive map of breakpoint → scale
 *
 * @returns {string}
 * Space-separated Bootstrap gutter utility classes.
 * Returns empty string if input is invalid or empty.
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
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
 * Resolves multiple gutter axes
 * into a single class string.
 *
 * Useful when combining `g`, `gx`, `gy`
 * in a single config object.
 *
 * @example
 * gutterResolver({
 *   g: 2,
 *   gx: { md: 3 },
 *   gy: { xs: 1, lg: 4 }
 * })
 * // "g-2 gx-md-3 gy-1 gy-lg-4"
 *
 * @param {Object<string, GutterValues | GutterObject | undefined>} values
 * Object where keys are gutter prefixes (`g`, `gx`, `gy`)
 * and values are either numeric scale or responsive map.
 *
 * @returns {string}
 * Space-separated Bootstrap gutter class string.
 * Returns empty string if input is invalid or empty.
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
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
