import { classnames as cs } from "helpers";

const OFFSET_CLASS_NAME = "offset";

const OFFSET_VALUES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const BREAKPOINTS = ["xs", "sm", "md", "lg", "xl", "xxl"];

/**
 * @typedef {object} OffsetObject
 *
 * @property {0|1|2|3|4|5|6|7|8|9|10|11} [xs]
 * X-Small breakpoint.
 *
 * @property {0|1|2|3|4|5|6|7|8|9|10|11} [sm]
 * Small breakpoint.
 *
 * @property {0|1|2|3|4|5|6|7|8|9|10|11} [md]
 * Medium breakpoint.
 *
 * @property {0|1|2|3|4|5|6|7|8|9|10|11} [lg]
 * Large breakpoint.
 *
 * @property {0|1|2|3|4|5|6|7|8|9|10|11} [xl]
 * Extra large breakpoint.
 *
 * @property {0|1|2|3|4|5|6|7|8|9|10|11} [xxl]
 * Extra extra large breakpoint.
 */

/**
 * Resolves Bootstrap offset utility
 * classes from a single value or a
 * responsive breakpoint object.
 *
 * @see {@link https://getbootstrap.com/docs/5.1/layout/columns/#offsetting-columns}
 *
 * @example
 * offsetResolver(0);
 * // "offset-0"
 *
 * @example
 * offsetResolver(3);
 * // "offset-3"
 *
 * @example
 * offsetResolver({ xs: 0, md: 3 });
 * // "offset-0 offset-md-3"
 *
 * @example
 * offsetResolver({ sm: 2, lg: 5 });
 * // "offset-sm-2 offset-lg-5"
 *
 * @param {0|1|2|3|4|5|6|7|8|9|10|11|OffsetObject} [value]
 * Offset value or responsive breakpoint map.
 *
 * @returns {string}
 * Bootstrap offset utility classes.
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
export function offsetResolver(value) {
  // Number
  if (typeof value === "number") {
    if (OFFSET_VALUES.includes(value)) {
      return cs(OFFSET_CLASS_NAME, value);
    }
  }

  // Object
  if (
    typeof value === "object" &&
    value &&
    !Array.isArray(value) &&
    Object.keys(value).length > 0
  ) {
    let result = [];

    for (let [breakpoint, val] of Object.entries(value)) {
      if (BREAKPOINTS.includes(breakpoint) && OFFSET_VALUES.includes(val)) {
        result.push(cs(OFFSET_CLASS_NAME, { [breakpoint]: val }));
      }
    }

    return result.join(" ").trim();
  }

  return "";
}
