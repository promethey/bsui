import { classnames as cs } from "helpers/classnames";

const BASE_CLASS_NAME = "text";
const TEXT_ALIGN_BREAKPOINT_LIST = ["xs", "sm", "md", "lg", "xl"];

const TEXT_MAP = {
  color: "text",
  align: "text",
  wordBreak: "text-break",
  transform: "text",
  decoration: "text-decoration",
  wrap: "text-wrap",
  nowrap: "text-nowrap",
  select: "user-select",
};

const TEXT_VALUES_MAP = {
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
    "muted",
    "white",
    "black-50",
    "white-50",
    "reset",
  ],
  align: ["start", "center", "end"],
  wordBreak: [true],
  transform: ["lowercase", "uppercase", "capitalize"],
  decoration: ["underline", "line-through", "none"],
  wrap: [true],
  nowrap: [true],
  select: ["all", "auto", "none"],
};

/**
 * Function for text utility
 *
 * @see {@link https://getbootstrap.com/docs/5.1/utilities/text/}
 *
 * @example
 * text("primary") // 'text-primary'
 * text({ color: 'primary', align: 'start', linebreak: true, transform: 'lowercase', decoration: 'underline'  }) // 'text-primary text-start text-break text-lowercase text-decoration-underline'
 * text({ color: 'danger', brk: true }) // return 'text-danger', 'brk' was igrnored
 *
 * @param {string|Object} value - text utility value
 *
 * @returns {string} classnames
 *
 * @todo
 * - refactor text({ align: { xs: "center" }}) -> text({ xs: { align: "center" }})
 */
export function text(value) {
  if (!value) return "";

  // String
  if (typeof value === "string" && value.trim()) {
    if (TEXT_VALUES_MAP["color"].includes(value)) {
      return cs(BASE_CLASS_NAME, value);
    }
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
      if (key in TEXT_MAP) {
        // String or Boolean
        if (
          (typeof val === "string" || typeof val === "boolean") &&
          TEXT_VALUES_MAP[key].includes(val)
        ) {
          result.push(cs(TEXT_MAP[key], val));
        }

        // Object
        if (
          typeof val === "object" &&
          val &&
          !Array.isArray(val) &&
          Object.keys(val).length > 0
        ) {
          for (let [breakpoint, textVal] of Object.entries(val)) {
            if (
              TEXT_ALIGN_BREAKPOINT_LIST.includes(breakpoint) &&
              TEXT_VALUES_MAP[key].includes(textVal)
            ) {
              result.push(cs(TEXT_MAP[breakpoint], { [breakpoint]: textVal }));
            }
          }
        }
      }
    }

    return result.join(" ").trim();
  }

  return "";
}
