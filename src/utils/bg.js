import { classnames as cs } from "helpers";

/**
 * @typedef {"color"|"gradient"|"opacity"} BackgroundProperties
 *
 * @typedef {object} BackgroundObject
 *
 * @property {"primary"|"secondary"|"success"|"danger"|"warning"|"info"|"light"|"dark"|"body"|"white"|"transparent"} [color]
 * Sets background color.
 *
 * @property {boolean} [gradient]
 * Enables the Bootstrap background gradient.
 *
 * @property {10|25|50|75} [opacity]
 * Sets background opacity.
 */

const BG_MAP = {
  color: "bg",
  gradient: "bg-gradient",
  opacity: "bg-opacity",
};

const BG_VALUES_MAP = {
  color: [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
    "body",
    "white",
    "transparent",
  ],
  gradient: [true],
  opacity: [10, 25, 50, 75],
};

/**
 * Resolves Bootstrap-like background
 * utility classes.
 *
 * Unsupported properties and invalid
 * values are silently ignored.
 *
 * If no valid utility can be resolved,
 * an empty string is returned.
 *
 * @see {@link https://getbootstrap.com/docs/5.1/utilities/background/}
 *
 * @example
 * bgResolver("primary")
 * // "bg-primary"
 *
 * @example
 * bgResolver({
 *   color: "primary",
 *   gradient: true,
 *   opacity: 10,
 * })
 * // "bg-primary bg-gradient bg-opacity-10"
 *
 * @example
 * bgResolver({
 *   color: "danger",
 *   grdnt: true,
 * })
 * // "bg-danger"
 * // Unknown properties are ignored.
 *
 * @param {BackgroundObject|
 * "primary"|
 * "secondary"|
 * "success"|
 * "danger"|
 * "warning"|
 * "info"|
 * "light"|
 * "dark"|
 * "body"|
 * "white"|
 * "transparent"} [value]
 * Background utility configuration.
 *
 * @returns {string}
 * Space-separated Bootstrap-compatible
 * background utility classes.
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
export function bgResolver(value) {
  if (!value) return "";

  // String
  if (typeof value === "string" && BG_VALUES_MAP["color"].includes(value)) {
    return cs(BG_MAP["color"], value); // example "bg-primary"
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
      if (
        key in BG_MAP &&
        BG_VALUES_MAP[/** @type {BackgroundProperties} */ (key)].includes(
          /** @type {never} */ (val),
        )
      ) {
        result.push(cs(BG_MAP[/** @type {BackgroundProperties} */ (key)], val));
      }
    }

    return result.join(" ").trim();
  }

  return "";
}
