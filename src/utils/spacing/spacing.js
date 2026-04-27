import { classnames as cs } from "helpers/classnames";

// m, mt, me, mb, ms, mx, my
// p, pt, pe, pb, ps, px, py

const SPACING_MAP = ["m", "p"];
const SPACING_SIDES_MAP = ["t", "e", "b", "s", "x", "y"];
const SPACING_VALUES = [1, 2, 3, 4, 5, "auto"];

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
 * @param {string} prfx - Prefix for margin "m" or padding "p"
 * @param {number|Object} value - margin or padding values
 *
 * @returns {string} classnames
 */
export function spacing(prfx, value) {
  if (typeof prfx !== "string" && !prfx.trim()) {
    return "";
  }

  // "m", "p"
  if (prfx.length === 1 && !SPACING_MAP.includes(prfx[0])) {
    return "";
  }

  // "t", "e", "b", "s", "x", "y"
  if (prfx.length === 2 && !SPACING_SIDES_MAP.includes(prfx[1])) {
    return "";
  }

  // Number
  if (typeof value === "number" && SPACING_VALUES.includes(value)) {
    return cs(prfx, value);
  }

  // Object
  if (typeof value === "object" && !Array.isArray(value)) {
    if (Object.keys(value).length > 0) {
      let result = [];

      for (let [breakpoint, val] of Object.entries(value)) {
        if (
          !BREAKPOINTS.includes(breakpoint) ||
          !SPACING_VALUES.includes(val)
        ) {
          delete value[breakpoint];
        }
      }

      return cs(prfx, value);
    }
  }

  /**
   * Array
   * no responsive features!
   *
   * @example
   * spacing("m", [1,2]) // 'mx-1 my-2'
   * spacing("p", [1,2]) // 'px-1 py-2'
   * spacing("m", [1,2,3,4]) // 'mt-1 me-2 mb-3 ms-4'
   */
  if (Array.isArray(value) && value.length > 0) {
    let result = [];
    let sides = { 2: ["x", "y"], 4: SPACING_SIDES_MAP };

    if (value.length === 2 || value.length === 4) {
      for (let i = 0; i <= value.length; i += 1) {
        if (typeof value[i] === "number") {
          // [1, 2] -> 'mx-1 my-2'
          // [1, 2, 3, 4] -> 'mt-1 me-2 mb-3 ms-4'
          result.push(cs(`${prfx}${sides[value.length][i]}`, value[i]));
        }
      }
    }

    return result.join(" ").trim();
  }

  return "";
}
