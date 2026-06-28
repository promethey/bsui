import { classnames as cs } from "helpers";

/**
 * @typedef {"color"|"width"|"top"|"end"|"bottom"|"start"} BorderProperties
 *
 * @typedef {object} BorderObject
 *
 * @property {"primary"|"secondary"|"success"|"danger"|"warning"|"info"|"light"|"dark"|"white"} [color]
 * Sets border color
 *
 * @property {1|2|3|4|5} [width]
 * Sets border width
 *
 * @property {true|0} [top]
 * Sets top border
 *
 * @property {true|0} [end]
 * Sets end border
 *
 * @property {true|0} [bottom]
 * Sets bottom border
 *
 * @property {true|0} [start]
 * Sets start border
 */

const BORDER_CLASS_NAME = "border";

const BORDER_MAP = {
  color: "border",
  width: "border",
  top: "border-top",
  end: "border-end",
  bottom: "border-bottom",
  start: "border-start",
};

const BORDER_VALUES_MAP = {
  color: [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
    "white",
  ],
  width: [1, 2, 3, 4, 5],
  top: [true, 0],
  end: [true, 0],
  bottom: [true, 0],
  start: [true, 0],
};

/**
 * Resolves Bootstrap-like border
 * utility classes.
 *
 * Side-specific border utilities
 * (`top`, `end`, `bottom`, `start`)
 * automatically replace the default
 * `border` class.
 *
 * Unsupported properties and invalid
 * values are silently ignored.
 *
 * If no valid utility can be resolved,
 * an empty string is returned.
 *
 * @see {@link https://getbootstrap.com/docs/5.1/utilities/borders/}
 *
 * @example
 * borderResolver(true)
 * // "border"
 *
 * @example
 * borderResolver(1)
 * // "border border-1"
 *
 * @example
 * borderResolver("primary")
 * // "border border-primary"
 *
 * @example
 * borderResolver({
 *   color: "success",
 * })
 * // "border border-success"
 *
 * @example
 * borderResolver({
 *   top: true,
 *   color: "primary",
 * })
 * // "border-top border-primary"
 *
 * @example
 * borderResolver({
 *   color: "primary",
 *   width: 1,
 *   top: 0,
 * })
 * // "border-primary border-1 border-top-0"
 *
 * @param {BorderObject|boolean|"primary"|"secondary"|"success"|"danger"|"warning"|"info"|"light"|"dark"|"white"|1|2|3|4|5} [value]
 * Border utility configuration.
 *
 * @returns {string}
 * Space-separated Bootstrap-compatible
 * border utility classes.
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
export function borderResolver(value) {
  if (!value) return "";

  // Boolean
  if (typeof value === "boolean" && value) {
    return BORDER_CLASS_NAME;
  }

  // String
  if (typeof value === "string" && value.length > 0) {
    if (BORDER_VALUES_MAP.color.includes(value.trim())) {
      // example: return "border border-primary"
      return `${BORDER_CLASS_NAME} ${cs(BORDER_CLASS_NAME, value.trim())}`;
    }

    return "";
  }

  // Number
  if (typeof value === "number") {
    if (BORDER_VALUES_MAP["width"].includes(value)) {
      // example: return "border border-1"
      return `${BORDER_CLASS_NAME} ${cs(BORDER_MAP["width"], value)}`;
    }

    return "";
  }

  // Object
  if (
    typeof value === "object" &&
    value &&
    !Array.isArray(value) &&
    Object.keys(value).length > 0
  ) {
    /** @type {Array<string>} */
    let result = [BORDER_CLASS_NAME];

    for (let [key, val] of Object.entries(value)) {
      if (
        key in BORDER_MAP &&
        BORDER_VALUES_MAP[/** @type {BorderProperties} */ (key)].includes(
          /** @type {never} */ (val),
        )
      ) {
        // Remove the default border class
        // if top, end, bottom, start is true
        if (
          ["top", "end", "bottom", "start"].includes(key) &&
          (val === true || val === 0)
        ) {
          if (result[0] === BORDER_CLASS_NAME) result.shift();
        }

        result.push(cs(BORDER_MAP[/** @type {BorderProperties} */ (key)], val));
      }
    }

    // Remove the default border class
    // when no valid utilities were resolved.
    if (result.length === 1 && result[0] === BORDER_CLASS_NAME) {
      result.shift();
    }

    return result.join(" ").trim();
  }

  return "";
}
