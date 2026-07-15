import { classnames as cs } from "helpers";

/**
 * @typedef {object} FlexObject
 *
 * @property {"row"|"row-reverse"|"column"|"column-reverse"} [direction]
 * Sets flex direction
 *
 * @property {"start"|"end"|"center"|"between"|"around"|"evenly"} [justifyContent]
 * Sets flex justify-content
 *
 * @property {"start"|"end"|"center"|"baseline"|"stretch"} [alignItems]
 * Sets flex align-items
 *
 * @property {"start"|"end"|"center"|"baseline"|"stretch"} [alignSelf]
 * Sets flex align-self
 *
 * @property {boolean} [fill]
 * Sets flex fill
 *
 * @property {0|1} [grow]
 * Sets flex grow
 *
 * @property {0|1} [shrink]
 * Sets flex grow
 *
 * @property {boolean} [wrap]
 * Sets flex wrap
 *
 * @property {boolean} [nowrap]
 * Sets flex nowrap
 *
 * @property {boolean} [wrapReverse]
 * Sets flex wrapReverse
 *
 * @property {0|1|2|3|4|5|6|"first"|"last"} [order]
 * Sets flex order
 *
 * @property {"start"|"end"|"center"|"between"|"around"|"stretch"} [alignContent]
 * Sets flex align content
 */

/**
 * @typedef {Object} FlexBreakpointsValue
 *
 * @property {FlexObject} [xs]
 * X-Small breakpoint
 *
 * @property {FlexObject} [sm]
 * Small breakpoint
 *
 * @property {FlexObject} [md]
 * Medium breakpoint
 *
 * @property {FlexObject} [lg]
 * Large breakpoint
 *
 * @property {FlexObject} [xl]
 * Extra large breakpoint
 *
 * @property {FlexObject} [xxl]
 * Extra extra breakpoint
 */

/**
 * @typedef {"direction"|"justifyContent"|"alignItems"|"alignSelf"|"fill"|"grow"|"shrink"|"wrap"|"nowrap"|"wrapReverse"|"order"|"alignContent"} FlexKey
 * @typedef {"start"|"end"|"center"} FlexShortValues
 * @typedef {"xs"|"sm"|"md"|"lg"|"xl"|"xxl"} FlexBreakpoints
 * @typedef {Partial<FlexBreakpointsValue>} FlexBreakpointsObject
 * @typedef {Partial<Record<FlexBreakpoints, FlexShortValues>>} FlexBreakpointsShort
 */

/** @type {Object<FlexKey, string>} */
const FLEX_MAP = {
  direction: "flex",
  justifyContent: "justify-content",
  alignItems: "align-items",
  alignSelf: "align-self",
  fill: "flex-fill",
  grow: "flex-grow",
  shrink: "flex-shrink",
  wrap: "flex-wrap",
  nowrap: "flex-nowrap",
  wrapReverse: "flex-wrap-reverse",
  order: "order",
  alignContent: "align-content",
};

/** @type {Object<FlexKey, any[]>} */
const FLEX_VALUES_MAP = {
  direction: ["row", "row-reverse", "column", "column-reverse"],
  justifyContent: ["start", "end", "center", "between", "around", "evenly"],
  alignItems: ["start", "end", "center", "baseline", "stretch"],
  alignSelf: ["start", "end", "center", "baseline", "stretch"],
  fill: [true],
  grow: [0, 1],
  shrink: [0, 1],
  wrap: [true],
  nowrap: [true],
  wrapReverse: [true],
  order: [0, 1, 2, 3, 4, 5, 6, "first", "last"],
  alignContent: ["start", "end", "center", "between", "around", "stretch"],
};

/** @type {Object<FlexKey, boolean>} */
const FLEX_OPTIONS_MAP = {
  direction: true,
  justifyContent: false,
  alignItems: false,
  alignSelf: false,
  fill: true,
  grow: true,
  shrink: true,
  wrap: true,
  nowrap: true,
  wrapReverse: true,
  order: false,
  alignContent: false,
};

const JUSTIFY_ALIGN_LIST = ["start", "end", "center"];

const BREAKPOINTS_LIST = ["xs", "sm", "md", "lg", "xl", "xxl"];

const KEYS_LIST = [
  "direction",
  "justifyContent",
  "alignItems",
  "alignSelf",
  "fill",
  "grow",
  "shrink",
  "wrap",
  "nowrap",
  "wrapReverse",
  "order",
  "alignContent",
];

/**
 * Resolves Bootstrap-like flexbox
 * utility classes.
 *
 * @see {@link https://getbootstrap.com/docs/5.1/utilities/flex/}
 *
 * @example
 * flex("center")
 * // "justify-content-center align-items-center"
 *
 * @example
 * flex("start")
 * // "justify-content-start align-items-start"
 *
 * @example
 * flex({ justifyContent: "center", alignItems: "start" })
 * // "justify-content-center align-items-start"
 *
 * @example
 * flex({ xs: { justifyContent: "center" }, lg: { justifyContent: "start" } })
 * // "justify-content-center justify-content-lg-start"
 *
 * @param {FlexObject|FlexBreakpointsObject|FlexBreakpointsShort|string} [value]
 * Input flex configuration in string,
 * object, or responsive.
 *
 * @returns {string}
 * Space-separated Bootstrap-compatible
 * flex utility classes.
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
export function flexResolver(value) {
  if (!value) return "";

  // String
  if (typeof value === "string" && value.length > 0) {
    if (JUSTIFY_ALIGN_LIST.includes(/** @type {FlexShortValues} */ (value))) {
      return `${cs(FLEX_MAP.justifyContent, value)} ${cs(FLEX_MAP.alignItems, value)}`;
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
      if (KEYS_LIST.includes(key)) {
        if (key in FLEX_MAP && FLEX_VALUES_MAP[key].includes(val)) {
          result.push(
            cs(FLEX_MAP[key], val, {
              prefixInsertBetween: FLEX_OPTIONS_MAP[key],
            }),
          );
        }
      }

      // Responsive object
      if (BREAKPOINTS_LIST.includes(key)) {
        // String
        if (
          typeof val === "string" &&
          JUSTIFY_ALIGN_LIST.includes(/** @type {any} */ (val))
        ) {
          let justifyContent = cs(FLEX_MAP.justifyContent, { [key]: val });
          let alignItems = cs(FLEX_MAP.alignItems, { [key]: val });

          result.push(`${justifyContent} ${alignItems}`);
        }

        // Object
        if (
          typeof val === "object" &&
          val &&
          !Array.isArray(val) &&
          Object.keys(val).length > 0
        ) {
          for (let [
            flexKey,
            flexVal,
          ] /** @type {[FlexKey, any]} */ of Object.entries(val)) {
            if (
              flexKey in FLEX_MAP &&
              FLEX_VALUES_MAP[flexKey].includes(flexVal)
            ) {
              result.push(
                cs(
                  FLEX_MAP[flexKey],
                  { [key]: flexVal },
                  { prefixInsertBetween: FLEX_OPTIONS_MAP[flexKey] },
                ),
              );
            }
          }
        }
      }
    }

    return result.join(" ").trim();
  }

  return "";
}
