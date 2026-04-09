import { check } from "utils/check";
import { classnames } from "utils/classnames";

/**
 * spacing - function for generate margin and padding classnames string
 * @function
 *
 * @param {"m"|"p"} prfx - Prefix for margin "m" or padding "p"
 * @param {Object|(0|1|2|3|4|5)|[number, number, number, number]} spaces - margin or padding values
 *
 * @example
 * spacing("m", 3) -> "m-3"
 * spacing("m", {xs: 2, lg: 3}) -> "m-2 m-lg-2"
 * spacing("m", [2,3]) -> "mx-2 my-3"
 * spacing("m", [2,3,4,2]) -> "mt-2 me-3 mb-3 ms-2"
 * spacing("m", [{xs: 2, lg: 3}, {xs: 3, lg: 3}]) -> "mx-2 mx-lg-3 my-3 my-lg-3"
 *
 * @returns {string} classes
 *
 * @todo
 * - craete function for checks spaces types fn(type, ...values) return true or false
 */
export function spacing(prfx, spaces) {
  if (!check("string", prfx) || prfx.length === 0) {
    return null;
  }

  if (prfx !== "m" && prfx !== "p") {
    return "Error: prfx not equal m or p";
  }

  /**
   * number
   * ("m", 0) -> 'm-0'
   */
  if (check("number", spaces)) {
    return `${prfx}-${spaces}`;
  }

  /**
   * object
   *
   * @example
   * spacing("m", {xs: 2, lg: 3}) // 'm-2 m-lg-3'
   */
  if (check("object", spaces) && !Array.isArray(spaces)) {
    return classnames(prfx, spaces);
  }

  /**
   * array
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

      if (check("number", x, y)) {
        return `${prfx}x-${x} ${prfx}y-${y}`;
      }

      if (check("object, x, y")) {
        x = classnames(`${prfx}x`, x);
        y = classnames(`${prfx}y`, y);

        result.push(x, y);
        return result.join(" ");
      }
    }

    if (length === 4) {
      const top = spaces[0];
      const end = spaces[1];
      const bottom = spaces[2];
      const start = spaces[3];

      if (check("number", top, end, bottom, start)) {
        return `${prfx}t-${top} ${prfx}e-${end} ${prfx}b-${bottom} ${prfx}s-${start}`;
      }

      if (check("object", top, end, bottom, start)) {
        result.push(
          classnames(`${prfx}t`, top),
          classnames(`${prfx}e`, end),
          classnames(`${prfx}b`, bottom),
          classnames(`${prfx}s`, start),
        );
        return result.join(" ");
      }
    }

    return "";
  }
}
