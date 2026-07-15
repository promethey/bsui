import { classnames as cs } from "helpers";

const ROUNDED_CLASS_NAME = "rounded";

/** @type {Array<true|"top"|"end"|"bottom"|"start"|"circle"|"pill"|0|1|2|3>} */
const ROUNDED_VALUES = [
  true,
  "top",
  "end",
  "bottom",
  "start",
  "circle",
  "pill",
  0,
  1,
  2,
  3,
];

/**
 * Resolves Bootstrap rounded utility classes.
 *
 * Supports border radius utilities including
 * directional, circular, pill, and size variants.
 *
 * Unsupported values are ignored.
 *
 * @see {@link https://getbootstrap.com/docs/5.1/utilities/borders/#border-radius}
 *
 * @example
 * roundedResolver(true)
 * // "rounded"
 *
 * @example
 * roundedResolver("top")
 * // "rounded-top"
 *
 * @example
 * roundedResolver("circle")
 * // "rounded-circle"
 *
 * @example
 * roundedResolver(2)
 * // "rounded-2"
 *
 * @example
 * roundedResolver("foo")
 * // ""
 * // ignore
 *
 * @param {boolean|"top"|"end"|"bottom"|"start"|"circle"|"pill"|0|1|2|3} [value]
 * Rounded utility value.
 *
 * @returns {string}
 * Bootstrap rounded utility class.
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
export function roundedResolver(value) {
  if (value !== 0 && !value) return "";

  // Boolean
  if (typeof value === "boolean" && value) {
    return ROUNDED_CLASS_NAME;
  }

  // String
  if (typeof value === "string" && value.length > 0) {
    if (ROUNDED_VALUES.includes(value)) {
      return cs(ROUNDED_CLASS_NAME, value);
    }
  }

  // Number
  if (typeof value === "number" && ROUNDED_VALUES.includes(value)) {
    return cs(ROUNDED_CLASS_NAME, value);
  }

  return "";
}
