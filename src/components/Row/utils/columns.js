import { classnames as cs } from "helpers";

/**
 * @typedef {"xs"|"sm"|"md"|"lg"|"xl"|"xxl"} Breakpoints
 * @typedef {0|1|2|3|4|5|6|7|8|9|10|11|12} ColumnsValues
 *
 * @typedef {Partial<Record<Breakpoints, ColumnsValues>>} ColumnsObject
 */

/** @type {string} */
const ROW_COLUMN_CLASS_NAME = "row-cols";

/** @type {Array<ColumnsValues>} */
const ROW_COLUMN_VALUES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const BREAKPOINTS = ["xs", "sm", "md", "lg", "xl", "xxl"];

/**
 * Row column function
 *
 * @see {@link https://getbootstrap.com/docs/5.3/layout/grid/#row-columns}
 *
 * @example
 * rowColumnResolver({ xs: 5 }) // 'row-cols-5'
 *
 * @param {ColumnsObject|ColumnsValues|string} [value] - padding between your columns
 *
 * @return {string}
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
