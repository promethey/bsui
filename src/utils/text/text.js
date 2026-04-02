import { prefix } from "utils/prefix";

/**
 * @typedef {(
 *   'primary'|'secondary'|'success'|'danger'|'warning'|'info'|'light'|'dark'
 *   |'body'|'muted'|'white'|'black-50'|'white-50'|'reset'
 *   | {
 *       color?: 'primary'|'secondary'|'success'|'danger'|'warning'|'info'|'light'|'dark'
 *         |'body'|'muted'|'white'|'black-50'|'white-50'|'reset',
 *       align?: 'start'|'center'|'end' | { xs?: 'start'|'center'|'end', sm?: 'start'|'center'|'end', md?: 'start'|'center'|'end', lg?: 'start'|'center'|'end', xl?: 'start'|'center'|'end' },
 *       break?: boolean,
 *       transform?: 'lowercase'|'uppercase'|'capitalize',
 *       decoration?: 'underline'|'line-through'|'none'
 *     }
 * )} TextProp
 */

/**
 * Function for text utility
 *
 * @example
 * text("primary") // return 'text-primary'
 *
 * @example
 * text({ color: 'primary', align: 'start', break: true, transform: 'lowercase', decoration: 'underline'  }) // return 'text-primary text-start text-break text-lowercase text-decoration-underline'
 *
 * @example
 * text({ color: 'danger', brk: true }) // return 'text-danger', brk was igrnored
 *
 * @param {TextProp} value - text utility value
 *
 * @returns {string}
 *
 * @todo
 * - add text select utility
 */
export function text(value) {
  if (!value) {
    return "";
  }

  const BASE_CLASS_NAME = "text";
  const TEXT_PROPERTY_LIST = [
    "color",
    "align",
    "break",
    "transform",
    "decoration",
  ];
  const TEXT_COLOR_LIST = [
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
  ];
  const TEXT_ALIGN_LIST = ["start", "center", "end"];
  const TEXT_ALIGN_BREAKPOINT_LIST = ["xs", "sm", "md", "lg", "xl"];
  const TEXT_TRANSFORM_LIST = ["lowercase", "uppercase", "capitalize"];
  const TEXT_DECORATION_LIST = ["underline", "line-through", "none"];

  if (typeof value === "string" && TEXT_COLOR_LIST.includes(value)) {
    return prefix(BASE_CLASS_NAME, value); // return example 'text-primary'
  }

  if (typeof value === "object") {
    let valueEntries = Object.entries(value);
    let result = [];

    if (valueEntries.length === 0) {
      return "";
    }

    for (let [key, value] of valueEntries) {
      // if key is not 'color', 'align', 'break', 'transform', 'decoration' - ignore
      if (TEXT_PROPERTY_LIST.includes(key)) {
        if (key === "color" && TEXT_COLOR_LIST.includes(value)) {
          result.push(prefix(BASE_CLASS_NAME, value));
        }

        if (key === "align") {
          if (typeof value === "object") {
            const alignEntries = Object.entries(value);
            for (let [breakpoint, alignPos] of alignEntries) {
              if (TEXT_ALIGN_BREAKPOINT_LIST.includes(breakpoint)) {
                result.push(
                  prefix(
                    BASE_CLASS_NAME,
                    breakpoint === "xs" ? "" : breakpoint,
                    alignPos,
                  ),
                );
              }
            }
          }

          if (typeof value === "string" && TEXT_ALIGN_LIST.includes(value)) {
            result.push(prefix(BASE_CLASS_NAME, value));
          }
        }

        if (key === "break" && value) {
          result.push(prefix(BASE_CLASS_NAME, key));
        }

        if (key === "transform" && TEXT_TRANSFORM_LIST.includes(value)) {
          result.push(prefix(BASE_CLASS_NAME, value));
        }

        if (key === "decoration" && TEXT_DECORATION_LIST.includes(value)) {
          result.push(prefix(BASE_CLASS_NAME, "decoration", value));
        }
      }
    }

    return result.join(" ");
  }

  return "";
}
