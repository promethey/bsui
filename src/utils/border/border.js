import { classnames as cs } from "helpers/classnames";

const BORDER_CLASS_NAME = "border";

const BORDER_MAP = {
  color: "border",
  width: "border",
  top: "border-top", // subtractive
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
 * Function for border utility
 *
 * @see {@link https://getbootstrap.com/docs/5.1/utilities/borders/}
 *
 * @example
 * border={true} // "border"
 * border={1} // "border border-1"
 * border="top" // "border-top"
 * border="end" // "border-end"
 * border="bottom" // "border-bottom"
 * border="start" // "border-start"
 * border={{ color="success" }} // "border border-success"
 * border={{ top: true, color: "primary" }} // "border-top border-primary"
 * border={{ color: "primary", width: 1, top: 0 }} // "border border-primary border-1 border-top-0"
 *
 * @param {boolean|string|number|Object} value
 * @returns {string} border classnames
 */
export function border(value) {
  // Boolean
  if (typeof value === "boolean") {
    return BORDER_CLASS_NAME;
  }

  // String
  if (typeof value === "string") {
    if (BORDER_VALUES_MAP["color"].includes(value)) {
      return `${BORDER_CLASS_NAME} ${BORDER_MAP["color"]}-${value}`;
    }

    return "";
  }

  // Number
  if (typeof value === "number") {
    if (BORDER_VALUES_MAP["width"].includes(value)) {
      return `${BORDER_CLASS_NAME} ${BORDER_MAP["width"]}-${value}`;
    }

    return "";
  }

  // Object
  if (typeof value === "object") {
    if (Object.keys(value).length === 0) {
      return "";
    }

    let result = [BORDER_CLASS_NAME];

    for (let [key, val] of Object.entries(value)) {
      if (
        Object.keys(BORDER_MAP).includes(key) &&
        BORDER_VALUES_MAP[key].includes(val)
      ) {
        result.push(cs(BORDER_MAP[key], val));
      }
    }

    return result.join(" ").trim();
  }

  return "";
}
