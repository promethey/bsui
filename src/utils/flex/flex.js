import { classnames as cs } from "helpers/classnames";

const FLEX_MAP = {
  dir: "flex",
  justify: "justify-content",
  align: "align-items",
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

const FLEX_VALUES_MAP = {
  dir: ["row", "row-reverse", "column", "column-reverse"],
  justify: ["start", "end", "center", "between", "around", "evenly"],
  align: ["start", "end", "center", "baseline", "stretch"],
  alignSelf: ["start", "end", "center", "baseline", "stretch"],
  fill: [true],
  grow: [0, 1],
  shrink: [0, 1],
  wrap: [true],
  nowrap: [true],
  wrapReverse: [true],
  order: [-1, 0, 1, 2, 3, 4, 5, 6, "first", "last"],
  alignContent: ["start", "end", "center", "between", "around", "stretch"],
};

/**
 * For classnames utility
 * if true 'flex-row-md' -> 'flex-md-row'
 */
const FLEX_OPTIONS_MAP = {
  dir: true,
  justify: false,
  align: false,
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

/**
 * Function for flex utility
 *
 * @see {@link https://getbootstrap.com/docs/5.1/utilities/flex/}
 *
 * @example
 * flex("center"); // 'justify-content-center align-items-center'
 * flex("start"); // 'justify-content-start align-items-start'
 * flex({ justify: "center", align: "start" }); // 'justify-content-center align-items-start'
 * flex({ xs: { justify: "center" }, lg: { justify: "start" } }); // 'justify-content-center justify-content-lg-start'
 *
 * @param {string|Object} value
 *
 * @returns {string} flex classnames
 */
export function flex(value) {
  if (!value) return "";

  // String
  if (
    typeof value === "string" &&
    FLEX_VALUES_MAP["justify"].includes(value) &&
    FLEX_VALUES_MAP["align"].includes(value)
  ) {
    if (JUSTIFY_ALIGN_LIST.includes(value)) {
      return `${cs(FLEX_MAP.justify, value)} ${cs(FLEX_MAP.align, value)}`;
    }
  }

  // Object
  if (
    typeof value === "object" &&
    !Array.isArray(value) &&
    Object.keys(value).length > 0
  ) {
    let result = [];

    for (let [breakpoint, val] of Object.entries(value)) {
      if (BREAKPOINTS_LIST.includes(breakpoint)) {
        // String or Boolean
        if (
          (typeof val === "string" || typeof val === "boolean") &&
          JUSTIFY_ALIGN_LIST.includes(val)
        ) {
          let justify = cs(FLEX_MAP.justify, { [breakpoint]: val });
          let align = cs(FLEX_MAP.align, { [breakpoint]: val });

          result.push(`${justify} ${align}`);
        }

        // Object
        if (typeof val === "object") {
          for (let [flexKey, flexVal] of Object.entries(val)) {
            if (
              flexKey in FLEX_MAP &&
              FLEX_VALUES_MAP[flexKey].includes(flexVal)
            ) {
              result.push(
                cs(
                  FLEX_MAP[flexKey],
                  { [breakpoint]: flexVal },
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
