import { classnames as cs } from "helpers";

/**
 * @typedef {"fs"|"fw"|"fst"|"lh"|"monospace"} FontKey
 *
 * @typedef {Object} FontObject
 *
 * @property {1|2|3|4|5|6} [fs]
 * Sets font size.
 *
 * @property {"bold"|"bolder"|"normal"|"light"|"lighter"} [fw]
 * Sets font weight.
 *
 * @property {"italic"|"normal"} [fst]
 * Sets font style.
 *
 * @property {1|"sm"|"base"|"lg"} [lh]
 * Sets line height.
 *
 * @property {boolean} [monospace]
 * Enables monospace font.
 */

/** @type {Object<FontKey, string>} */
const FONT_MAP = {
  fs: "fs",
  fw: "fw",
  fst: "fst",
  lh: "lh",
  monospace: "font-monospace",
};

/** @type {Object<FontKey, any[]>} */
const FONT_VALUES_MAP = {
  fs: [1, 2, 3, 4, 5, 6],
  fw: ["bold", "bolder", "normal", "light", "lighter"],
  fst: ["italic", "normal"],
  lh: [1, "sm", "base", "lg"],
  monospace: [true],
};

/**
 * Resolves Bootstrap font utility classes.
 *
 * Supports font size, weight, style,
 * line height, and monospace utilities.
 *
 * Unsupported properties and values are ignored.
 *
 * @see {@link https://getbootstrap.com/docs/5.1/utilities/text/}
 *
 * @example
 * fontResolver(3)
 * // "fs-3"
 *
 * @example
 * fontResolver({ fs: 3 })
 * // "fs-3"
 *
 * @example
 * fontResolver({ fw: "bold", fst: "italic" })
 * // "fw-bold fst-italic"
 *
 * @example
 * fontResolver({ fs: 4, fw: "bold", lh: "lg" })
 * // "fs-4 fw-bold lh-lg"
 *
 * @example
 * fontResolver({
 *   fs: 2,
 *   fw: "bolder",
 *   monospace: true,
 * })
 * // "fs-2 fw-bolder font-monospace"
 *
 * @example
 * fontResolver({ fs: 3, foo: "bar" })
 * // "fs-3"
 *
 * @param {FontObject} [value]
 * Font utility configuration.
 *
 * @returns {string}
 * Space-separated Bootstrap font utility classes.
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
export function fontResolver(value) {
  if (!value) return "";

  // Number
  if (typeof value === "number" && value) {
    // example: return "fs-3"
    return cs(FONT_MAP.fs, value);
  }

  // Object
  if (
    typeof value === "object" &&
    value &&
    !Array.isArray(value) &&
    Object.keys(value).length > 0
  ) {
    let result = [];

    for (let [key, val] /** @type {[FontKey, any]} */ of Object.entries(
      value,
    )) {
      if (key in FONT_MAP && FONT_VALUES_MAP[key].includes(val)) {
        result.push(cs(FONT_MAP[key], val));
      }
    }

    return result.join(" ").trim();
  }

  return "";
}
