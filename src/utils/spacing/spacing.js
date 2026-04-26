import { everyType } from "helpers/everyType";
import { classnames as cs } from "helpers/classnames";

// m, mt, me, mb, ms, mx, my
// p, pt, pe, pb, ps, px, py

const SPACING_MAP = ["m", "p"];
const SPACING_SIDES_MAP = ["t", "e", "b", "s", "x", "y"];
const SPACING_VALUES = [1, 2, 3, 4, 5, "auto"];

/**
 * Function for generate margin and padding classnames
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
 * @returns {string} spacing classnames
 */
export function spacing(prfx, value) {
  if (typeof prfx !== "string" && !prfx.trim()) {
    return "";
  }

  if (!SPACING_MAP.includes(prfx)) {
    return "";
  }

  // Number
  if (typeof value === "number" && SPACING_VALUES.includes(value)) {
    return cs(prfx, value);
  }

  // Object
  if (
    typeof value === "object" &&
    !Array.isArray(value) &&
    Object.keys(value).length > 0
  ) {
    return cs(prfx, value);
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

    if (value.length === 2) {
      let x = value[0];
      let y = value[1];

      if (everyType("number", x, y)) {
        return `${prfx}x-${x} ${prfx}y-${y}`;
      }
    }

    if (value.length === 4) {
      for (let i = 0; i <= value.length; i += 1) {
        if (typeof value[i] === "number") {
          result.push(cs(`${prfx}${SPACING_SIDES_MAP[i]}`, value[i]));
        }
      }
    }

    return result.join(" ").trim();
  }

  return "";
}
