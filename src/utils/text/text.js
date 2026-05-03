import { classnames as cs } from "helpers";

/**
 * @typedef {"color"|"align"|"wordBreak"|"transform"|"decoration"|"wrap"|"nowrap"|"select"} TextProperties
 * @typedef {"xs"|"sm"|"md"|"lg"|"xl"} TextBreakpoints
 * @typedef {"start"|"center"|"end"} TextAlignValues
 *
 * @typedef {object} TextAlignObject
 * @property {TextAlignValues} [xs] - X-Small breakpoint
 * @property {TextAlignValues} [sm] - Small breakpoint
 * @property {TextAlignValues} [md] - Medium breakpoint
 * @property {TextAlignValues} [lg] - Large breakpoint
 * @property {TextAlignValues} [xl] - Extra large breakpoint
 *
 * @typedef {object} TextObject
 * @property {"primary"|"secondary"|"success"|"danger"|"warning"|"info"|"light"|"dark"|"body"|"muted"|"white"|"black-50"|"white-50"|"reset"} [color] - Sets text color
 * @property {TextAlignObject|"start"|"center"|"end"} [align] - Sets text align
 * @property {boolean} [wordBreak] - Sets word break
 * @property {"lowercase"|"uppercase"|"capitalize"} [transform] - Sets text transform
 * @property {"underline"|"line-through"|"none"} [decoration] - Sets text decoration
 * @property {boolean} [wrap] - Sets text wrap
 * @property {boolean} [nowrap] - Sets text wrap
 * @property {"all"|"auto"|"none"} [select] - Sets text select
 */

const BASE_CLASS_NAME = "text";
const TEXT_BREAKPOINTS = ["xs", "sm", "md", "lg", "xl"];

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
 * @param {TextObject|string} [value]
 *
 * @returns {string}
 */
export function text(value) {
  if (!value) return "";

  // String
  if (typeof value === "string" && value.length > 0) {
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
          TEXT_VALUES_MAP[/** @type {TextProperties} */ (key)].includes(
            /** @type {never} */ (val),
          )
        ) {
          result.push(cs(TEXT_MAP[/** @type {TextProperties} */ (key)], val));
        }

        // Object (work only for align)
        if (
          typeof val === "object" &&
          val &&
          !Array.isArray(val) &&
          Object.keys(val).length &&
          key === "align"
        ) {
          for (let [breakpoint, alignValue] of Object.entries(val)) {
            if (
              TEXT_BREAKPOINTS.includes(breakpoint) &&
              TEXT_VALUES_MAP[/** @type {TextProperties} */ (key)].includes(
                /** @type {never} */ (alignValue),
              )
            ) {
              result.push(cs(breakpoint, { [breakpoint]: alignValue }));
            }
          }
        }
      }
    }

    return result.join(" ").trim();
  }

  return "";
}
