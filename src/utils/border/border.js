import { classnames as cs } from "helpers";

/**
 * @typedef {"color"|"width"|"top"|"end"|"bottom"|"start"} BorderProperties
 *
 * @typedef {object} BorderObject
 * @property {"primary"|"secondary"|"success"|"danger"|"warning"|"info"|"light"|"dark"|"white"} [color] - Sets border color
 * @property {1|2|3|4|5} [width] - Sets border width
 * @property {true|0} [top] - Sets top border
 * @property {true|0} [end] - Sets top border
 * @property {true|0} [bottom] - Sets top border
 * @property {true|0} [start] - Sets top border
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
 * Border function
 *
 * @see {@link https://getbootstrap.com/docs/5.1/utilities/borders/}
 *
 * @example
 * border={true} // "border"
 * border={1} // "border border-1"
 * border="primary" // "border border-primary"
 * border={{ color: "success" }} // "border border-success"
 * border={{ top: true, color: "primary" }} // "border-top border-primary"
 * border={{ color: "primary", width: 1, top: 0 }} // "border border-primary border-1 border-top-0"
 *
 * @param {BorderObject|boolean|"primary"|"secondary"|"success"|"danger"|"warning"|"info"|"light"|"dark"|"white"|1|2|3|4|5} [value]
 * @returns {string}
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
      return `${BORDER_CLASS_NAME} ${cs(BORDER_CLASS_NAME, value.trim())}`;
    }

    return "";
  }

  // Number
  if (typeof value === "number") {
    if (BORDER_VALUES_MAP["width"].includes(value)) {
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
    /**
     * @type {Array<string>}
     */
    let result = [BORDER_CLASS_NAME];

    for (let [key, val] of Object.entries(value)) {
      if (
        key in BORDER_MAP &&
        BORDER_VALUES_MAP[/** @type {BorderProperties} */ (key)].includes(
          /** @type {never} */ (val),
        )
      ) {
        // drop default 'border' class if top, end, bottom, start is true
        if (
          ["top", "end", "bottom", "start"].includes(key) &&
          (val === true || val === 0)
        ) {
          if (result[0] === BORDER_CLASS_NAME) result.shift();
        }

        result.push(cs(BORDER_MAP[/** @type {BorderProperties} */ (key)], val));
      }
    }

    // if all key or values in object incorrect
    if (result.length === 1 && result[0] === BORDER_CLASS_NAME) {
      result.shift();
    }

    // if result contains only 'border' than return empty string
    return result.join(" ").trim();
  }

  return "";
}
