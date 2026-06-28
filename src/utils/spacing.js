import { classnames as cs } from "helpers";

/**
 * @typedef {"m"|"mt"|"me"|"mb"|"ms"|"mx"|"my"|"p"|"pt"|"pe"|"pb"|"ps"|"px"|"py"} SpacingPropertySides
 *
 * @typedef {"xs"|"sm"|"md"|"lg"|"xl"|"xxl"} SpacingBreakpoints
 *
 * @typedef {0|1|2|3|4|5|"auto"} SpacingValues
 *
 * @typedef {[SpacingValues, SpacingValues]|[SpacingValues, SpacingValues, SpacingValues, SpacingValues]} SpacingArray
 *
 * @typedef {Partial<Record<SpacingBreakpoints, SpacingValues>>} SpacingObject
 */

const SPACING_MAP = [
  "m",
  "mt",
  "me",
  "mb",
  "ms",
  "mx",
  "my",
  "p",
  "pt",
  "pe",
  "pb",
  "ps",
  "px",
  "py",
];

const SPACING_VALUES = [0, 1, 2, 3, 4, 5, "auto"];

const BREAKPOINTS = ["xs", "sm", "md", "lg", "xl", "xxl"];

/**
 * Resolves a single Bootstrap spacing utility.
 *
 * Supports:
 * - primitive spacing values;
 * - responsive breakpoint objects;
 * - array shorthand syntax.
 *
 * Unknown prefixes, breakpoints and values are silently ignored.
 *
 * @see {@link https://getbootstrap.com/docs/5.1/utilities/spacing/}
 *
 * @example
 * spacing("m", 3)
 * // "m-3"
 *
 * @example
 * spacing("p", "auto")
 * // "p-auto"
 *
 * @example
 * spacing("m", { xs: 2, lg: 4 })
 * // "m-2 m-lg-4"
 *
 * @example
 * spacing("m", [2, 3])
 * // "mx-2 my-3"
 *
 * @example
 * spacing("p", [1, 2, 3, 4])
 * // "pt-1 pe-2 pb-3 ps-4"
 *
 * @param {SpacingPropertySides} prfx
 * Bootstrap spacing utility prefix.
 *
 * @param {SpacingObject|SpacingValues|SpacingArray} [value]
 * Spacing value, responsive object or shorthand array.
 *
 * @returns {string}
 * Bootstrap-compatible spacing class string.
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
export function spacing(prfx, value) {
  if (!SPACING_MAP.includes(prfx)) {
    return "";
  }

  // Number
  if (typeof value === "number" && SPACING_VALUES.includes(value)) {
    return cs(prfx, value);
  }

  // String
  if (typeof value === "string" && SPACING_VALUES.includes(value)) {
    return cs(prfx, value);
  }

  // Object
  if (
    typeof value === "object" &&
    value &&
    !Array.isArray(value) &&
    Object.keys(value).length > 0
  ) {
    /** @type {SpacingObject} */
    const obj = value;

    let validEntries = Object.entries(obj).filter(
      ([breakpoint, val]) =>
        BREAKPOINTS.includes(/** @type {SpacingBreakpoints} */ (breakpoint)) &&
        SPACING_VALUES.includes(val),
    );

    return cs(prfx, Object.fromEntries(validEntries));
  }

  /**
   * Array
   * no responsive features!
   *
   * Array shorthand syntax.
   * - [x, y] - horizontal / vertical spacing
   * - [top, end, bottom, start] - side-specific spacing
   */
  if (Array.isArray(value) && (value.length === 2 || value.length === 4)) {
    /** @type {SpacingArray} */
    const arr = value;

    let result = [];

    /** @type {{ 2: string[], 4: string[] }} */
    let sides = { 2: ["x", "y"], 4: ["t", "e", "b", "s"] };

    // [1, 2] -> 'mx-1 my-2'
    // [1, 2, 3, 4] -> 'mt-1 me-2 mb-3 ms-4'
    for (let i = 0; i < arr.length; i += 1) {
      let prefix = prfx + sides[arr.length][i]; // mx, my or mt, me etc.

      if (typeof arr[i] === "number") {
        result.push(cs(prefix, arr[i]));
      }
    }

    return result.join(" ").trim();
  }

  return "";
}

/**
 * Resolves multiple Bootstrap spacing utilities
 * from a configuration object.
 *
 * Each object key corresponds to a spacing utility
 * (`m`, `mt`, `mx`, `p`, `py`, etc.) and its value is
 * forwarded to {@link spacing}.
 *
 * Unknown properties are silently ignored.
 *
 * @example
 * spacingResolver({
 *   m: 3,
 *   px: 2,
 * })
 * // "m-3 px-2"
 *
 * @example
 * spacingResolver({
 *   mt: { md: 4 },
 *   py: [2, 3],
 * })
 * // "mt-md-4 py-2 py-3"
 *
 * @example
 * spacingResolver({
 *   m: { xs: 2, lg: 5 },
 *   px: [1, 3],
 * })
 * // "m-2 m-lg-5 px-1 py-3"
 *
 * @param {Object} value
 * Configuration object containing spacing utilities.
 *
 * @returns {string}
 * Bootstrap-compatible spacing class string.
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
export function spacingResolver(value) {
  if (
    typeof value === "object" &&
    value &&
    !Array.isArray(value) &&
    Object.keys(value).length > 0
  ) {
    let result = [];

    for (let [key, val] of Object.entries(value)) {
      if (SPACING_MAP.includes(key)) {
        result.push(spacing(/** @type {SpacingPropertySides} */ (key), val));
      }
    }

    return result.join(" ").trim();
  }

  return "";
}
