import { classnames as cs } from "helpers";

/**
 * @typedef {"color"|"align"|"wordBreak"|"transform"|"decoration"|"wrap"|"nowrap"|"select"} TextProperties
 *
 * @typedef {"xs"|"sm"|"md"|"lg"|"xl"} TextBreakpoints
 *
 * @typedef {"start"|"center"|"end"} TextAlignValues
 *
 * @typedef {object} TextAlignObject
 *
 * @property {TextAlignValues} [xs]
 * X-Small breakpoint
 *
 * @property {TextAlignValues} [sm]
 * Small breakpoint
 *
 * @property {TextAlignValues} [md]
 * Medium breakpoint
 *
 * @property {TextAlignValues} [lg]
 * Large breakpoint
 *
 * @property {TextAlignValues} [xl]
 * Extra large breakpoint
 *
 * @typedef {object} TextObject
 *
 * @property {"primary"|"secondary"|"success"|"danger"|"warning"|"info"|"light"|"dark"|"body"|"muted"|"white"|"black-50"|"white-50"|"reset"} [color]
 * Sets text color
 *
 * @property {TextAlignObject|"start"|"center"|"end"} [align]
 * Sets text align
 *
 * @property {boolean} [wordBreak]
 * Sets word break
 *
 * @property {"lowercase"|"uppercase"|"capitalize"} [transform]
 * Sets text transform
 *
 * @property {"underline"|"line-through"|"none"} [decoration]
 * Sets text decoration
 *
 * @property {boolean} [wrap]
 * Sets text wrap
 *
 * @property {boolean} [nowrap]
 * Sets text wrap
 *
 * @property {"all"|"auto"|"none"} [select]
 * Sets text select
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
 * Resolves Bootstrap text utility classes.
 *
 * Supports:
 * - text colors;
 * - responsive text alignment;
 * - text transformation;
 * - text decoration;
 * - word breaking;
 * - wrapping utilities;
 * - user selection utilities.
 *
 * Unknown properties or invalid values are silently ignored.
 *
 * @see {@link https://getbootstrap.com/docs/5.1/utilities/text/}
 *
 * @example
 * textResolver("primary")
 * // "text-primary"
 *
 * @example
 * textResolver({
 *   color: "primary",
 *   align: "center",
 *   transform: "uppercase",
 * })
 * // "text-primary text-center text-uppercase"
 *
 * @example
 * textResolver({
 *   align: {
 *     xs: "start",
 *     lg: "center",
 *   },
 * })
 * // "text-start text-lg-center"
 *
 * @example
 * textResolver({
 *   color: "danger",
 *   wordBreak: true,
 *   decoration: "underline",
 * })
 * // "text-danger text-break text-decoration-underline"
 *
 * @example
 * textResolver({
 *   color: "primary",
 *   foo: true,
 * })
 * // "text-primary"
 * // foo was ignored
 *
 * @param {TextObject|"primary"|"secondary"|"success"|"danger"|"warning"|"info"|"light"|"dark"|"body"|"muted"|"white"|"black-50"|"white-50"|"reset"} [value]
 * Text utility configuration or text color.
 *
 * @returns {string}
 * Bootstrap-compatible text utility class string.
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
export function textResolver(value) {
  if (!value) return "";

  // String
  if (typeof value === "string" && value.length > 0) {
    if (TEXT_VALUES_MAP["color"].includes(value)) {
      // example: return "text-primary"
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
          key === "align" &&
          typeof val === "object" &&
          val &&
          !Array.isArray(val) &&
          Object.keys(val).length
        ) {
          for (let [breakpoint, alignValue] of Object.entries(val)) {
            if (
              TEXT_BREAKPOINTS.includes(breakpoint) &&
              TEXT_VALUES_MAP[/** @type {TextProperties} */ (key)].includes(
                /** @type {never} */ (alignValue),
              )
            ) {
              result.push(cs(BASE_CLASS_NAME, { [breakpoint]: alignValue }));
            }
          }
        }
      }
    }

    return result.join(" ").trim();
  }

  return "";
}
