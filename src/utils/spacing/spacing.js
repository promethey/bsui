import { everyType } from "helpers/everyType";
import { classnames as cs } from "helpers/classnames";

// m, mt, me, mb, ms, mx, my
// p, pt, pe, pb, ps, px, py

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
 * @param {number|Object} spaces - margin or padding values
 *
 * @returns {string} spacing classnames
 */
export function spacing(prfx, spaces) {
  if (typeof prfx !== "string" || prfx.length === 0) {
    return "";
  }

  if (prfx[0] !== "m" && prfx[0] !== "p") {
    return "";
  }

  // Number
  if (typeof spaces === "number") {
    return cs(prfx, spaces);
  }

  // Object
  if (typeof spaces === "object" && !Array.isArray(spaces)) {
    return cs(prfx, spaces);
  }

  /**
   * Array
   *
   * @example
   * spacing("m", [1,2]) // 'mx-1 my-2'
   * spacing("p", [1,2]) // 'px-1 py-2'
   * spacing("m", [1,2,3,4]) // 'mt-1 me-2 mb-3 ms-4'
   */
  if (Array.isArray(spaces)) {
    const length = spaces.length;

    let result = [];

    if (length === 2) {
      let x = spaces[0];
      let y = spaces[1];

      if (everyType("number", x, y)) {
        return `${prfx}x-${x} ${prfx}y-${y}`;
      }

      if (everyType("object", x, y)) {
        x = cs(`${prfx}x`, x);
        y = cs(`${prfx}y`, y);

        result.push(x, y);

        return result.join(" ").trim();
      }
    }

    if (length === 4) {
      const top = spaces[0];
      const end = spaces[1];
      const bottom = spaces[2];
      const start = spaces[3];

      if (everyType("number", top, end, bottom, start)) {
        return `${prfx}t-${top} ${prfx}e-${end} ${prfx}b-${bottom} ${prfx}s-${start}`;
      }

      if (everyType("object", top, end, bottom, start)) {
        result.push(
          cs(`${prfx}t`, top),
          cs(`${prfx}e`, end),
          cs(`${prfx}b`, bottom),
          cs(`${prfx}s`, start),
        );
        return result.join(" ").trim();
      }
    }

    return "";
  }

  return "";
}
