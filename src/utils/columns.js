import { classnames as cs } from "helpers";

/**
 * @typedef {"xs"|"sm"|"md"|"lg"|"xl"|"xxl"} Breakpoints
 * Responsive breakpoint identifiers used by Bootstrap grid system.
 *
 * @typedef {0|1|2|3|4|5|6|7|8|9|10|11|12} ColumnsValues
 * Valid column counts for Bootstrap `row-cols-*` utilities.
 *
 * @typedef {Partial<Record<Breakpoints, ColumnsValues>>} ColumnsObject
 * Responsive configuration object mapping breakpoints to column counts.
 */

/** Base class prefix used for row column utilities */
const ROW_COLUMN_CLASS_NAME = "row-cols";

/** Valid numeric column values supported by Bootstrap grid system */
const ROW_COLUMN_VALUES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

/** Supported responsive breakpoints */
const BREAKPOINTS = ["xs", "sm", "md", "lg", "xl", "xxl"];

/**
 * Resolves Bootstrap `row-cols-*` utility
 * classes from a value or responsive map.
 *
 * Supports:
 * - numeric shorthand (e.g. `3` → `row-cols-3`)
 * - responsive object (e.g. `{ sm: 2, md: 4 }`)
 *
 * @see {@link https://getbootstrap.com/docs/5.3/layout/grid/#row-columns}
 *
 * @example
 * columnsResolver(3)
 * // "row-cols-3"
 *
 * @example
 * columnsResolver({ xs: 2, md: 4 })
 * // "row-cols-2 row-cols-md-4"
 *
 * @example
 * columnsResolver({ sm: 1, lg: 6 })
 * // "row-cols-sm-1 row-cols-lg-6"
 *
 * @param {ColumnsValues|ColumnsObject|undefined} value
 * Number of columns or responsive configuration object.
 *
 * @returns {string}
 * Space-separated Bootstrap utility class names.
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
export function columnsResolver(value) {
  // Number
  if (
    typeof value === "number" &&
    ROW_COLUMN_VALUES.includes(/** @type {ColumnsValues} */ (value))
  ) {
    return cs(ROW_COLUMN_CLASS_NAME, value);
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
      if (BREAKPOINTS.includes(key) && ROW_COLUMN_VALUES.includes(val)) {
        result.push(cs(ROW_COLUMN_CLASS_NAME, { [key]: val }));
      }
    }

    return result.join(" ").trim();
  }

  return "";
}
