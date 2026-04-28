import { classnames as cs } from "helpers/classnames";
import { is } from "helpers/is";

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
  if (is("number", prfx) || !SPACING_MAP.includes(prfx)) {
    return "";
  }

  // Number
  if (is("number", value) && SPACING_VALUES.includes(value)) {
    return cs(prfx, value);
  }

  // Object
  if (is("object", value, { notEmpty: true })) {
    let result = [];

    let filterValues = Object.entries(value).filter(
      ([breakpoint, val]) =>
        BREAKPOINTS.includes(breakpoint) && SPACING_VALUES.includes(val),
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
  if (is("array", value, { notEmpty: true })) {
    let result = [];
    let sides = { 2: ["x", "y"], 4: ["t", "e", "b", "s"] };

    // [1, 2] -> 'mx-1 my-2'
    // [1, 2, 3, 4] -> 'mt-1 me-2 mb-3 ms-4'
    if (value.length === 2 || value.length === 4) {
      for (let i = 0; i <= value.length; i += 1) {
        let prefix = prfx + sides[value.length][i]; // mx, my or mt, me etc.

        if (is("number", value[i])) {
          result.push(cs(prefix, value[i]));
        }
      }
    }

    return result.join(" ").trim();
  }

  return "";
}

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
