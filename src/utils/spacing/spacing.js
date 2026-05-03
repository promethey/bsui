import { classnames as cs, is } from "helpers";

// m, mt, me, mb, ms, mx, my
// p, pt, pe, pb, ps, px, py

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

/**
 * @typedef {"m"|"mt"|"me"|"mb"|"ms"|"mx"|"my"|"p"|"pt"|"pe"|"pb"|"ps"|"px"|"py"} SpacingPropertySides
 * @typedef {"xs"|"sm"|"md"|"lg"|"xl"|"xxl"} SpacingBreakpoints
 * @typedef {1|2|3|4|5|"auto"} SpacingValues
 * @typedef {[SpacingValues, SpacingValues]|[SpacingValues, SpacingValues, SpacingValues, SpacingValues]} SpacingArray
 * @typedef {Partial<Record<SpacingBreakpoints, SpacingValues>>} SpacingObject
 */

/**
 * @type {Array<SpacingValues>}
 */
const SPACING_VALUES = [1, 2, 3, 4, 5, "auto"];

/**
 * @type {Array<SpacingBreakpoints>}
 */
const BREAKPOINTS = ["xs", "sm", "md", "lg", "xl", "xxl"];

/**
 * Spacing (Margin and Padding) function
 *
 * @see {@link https://getbootstrap.com/docs/5.1/utilities/spacing/}
 *
 * @example
 * spacing("m", 3) // "m-3"
 * spacing("m", { xs: 2, lg: 3 }) // "m-2 m-lg-2"
 * spacing("m", [2, 3]) // "mx-2 my-3"
 * spacing("m", [2, 3, 4, 2]) // "mt-2 me-3 mb-3 ms-2"
 * spacing("m", [{ xs: 2, lg: 3 }, { xs: 3, lg: 3 }]) // "mx-2 mx-lg-3 my-3 my-lg-3"
 *
 * @param {string} prfx - prefix for margin "m" or padding "p"
 * @param {SpacingObject|SpacingValues|SpacingArray} [value] - margin or padding values
 *
 * @returns {string}
 */
export function spacing(prfx, value) {
  if (!SPACING_MAP.includes(prfx)) {
    return "";
  }

  // Number or String
  if ((typeof value === "number" || typeof value === "string") && SPACING_VALUES.includes(value)) {
    return cs(prfx, value);
  }

  // Object
  if (typeof value === "object" && value && !Array.isArray(value) && Object.keys(value).length > 0) {
    /** @type {SpacingObject} */
    const obj = value;

    let filterValues = Object.entries(obj).filter(
      ([breakpoint, val]) =>
        BREAKPOINTS.includes(/** @type {SpacingBreakpoints} */ (breakpoint)) && SPACING_VALUES.includes(val),
    );

    return cs(prfx, Object.fromEntries(filterValues));
  }

  /**
   * Array
   * no responsive features!
   *
   * @example
   * spacing("m", [1,2]) // 'mx-1 my-2'
   * spacing("m", [1,2,3,4]) // 'mt-1 me-2 mb-3 ms-4'
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

      if (is("number", arr[i])) {
        result.push(cs(prefix, arr[i]));
      }
    }

    return result.join(" ").trim();
  }

  return "";
}

/**
 * @param {Object} props
 * @returns {string}
 */
export function spacingResolver(props) {
  if (!is("object", props, { notEmpty: true })) {
    return "";
  }

  let result = [];

  for (let [key, value] of Object.entries(props)) {
    if (SPACING_MAP.includes(key)) {
      result.push(spacing(key, value));
    }
  }

  return result.join(" ").trim();
}
