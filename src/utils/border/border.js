import { classnames as cs } from "helpers/classnames";
import { prefix } from "helpers/prefix";
import { is } from "helpers/is";

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
 * border="top" // "border-top"
 * border="end" // "border-end"
 * border="bottom" // "border-bottom"
 * border="start" // "border-start"
 * border={{ color: "success" }} // "border border-success"
 * border={{ top: true, color: "primary" }} // "border-top border-primary"
 * border={{ color: "primary", width: 1, top: 0 }} // "border border-primary border-1 border-top-0"
 *
 * @param {boolean|string|number|Object} value
 * @returns {string} border classnames
 */
export function border(value) {
  if (!value) return "";

  // Boolean
  if (typeof value === "boolean" && value) {
    return BORDER_CLASS_NAME;
  }

  // String
  if (is("string", value, { notEmpty: true })) {
    if (BORDER_VALUES_MAP["color"].includes(value.trim())) {
      return `${BORDER_CLASS_NAME} ${prefix(BORDER_MAP["color"], value.trim())}`;
    }

    return "";
  }

  // Number
  if (is("number", value)) {
    if (BORDER_VALUES_MAP["width"].includes(value)) {
      return `${BORDER_CLASS_NAME} ${prefix(BORDER_MAP["width"], value)}`;
    }

    return "";
  }

  // Object
  if (is("object", value, { notEmpty: true })) {
    let result = [BORDER_CLASS_NAME];

    for (let [key, val] of Object.entries(value)) {
      if (key in BORDER_MAP && BORDER_VALUES_MAP[key].includes(val)) {
        result.push(cs(BORDER_MAP[key], val));
      }
    }

    // if result contains only 'border' than return empty string
    return result.length === 1 ? "" : result.join(" ").trim();
  }

  return "";
}
