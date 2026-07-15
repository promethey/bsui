import { classnames as cs } from "helpers";

const OPACITY_CLASS_NAME = "opacity";

const OPACITY_VALUES = [25, 50, 75, 100];

/**
 * Resolves Bootstrap opacity utility classes.
 *
 * Supports predefined Bootstrap opacity values.
 *
 * Unsupported values are ignored.
 *
 * @see {@link https://getbootstrap.com/docs/5.1/utilities/opacity/}
 *
 * @example
 * opacityResolver(100)
 * // "opacity-100"
 *
 * @example
 * opacityResolver(50)
 * // "opacity-50"
 *
 * @example
 * opacityResolver(30)
 * // ""
 *
 * @param {25|50|75|100} [value]
 * Opacity utility value.
 *
 * @returns {string}
 * Bootstrap opacity utility class.
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
export function opacityResolver(value) {
  if (!value) return "";

  // Number
  if (typeof value === "number" && OPACITY_VALUES.includes(value)) {
    return cs(OPACITY_CLASS_NAME, value);
  }

  return "";
}
