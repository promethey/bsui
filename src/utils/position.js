import { classnames as cs } from "helpers";

/**
 * @typedef {"pos"|"top"|"end"|"bottom"|"start"|"translate"} PositionKey
 */

/**
 * @type {Object<PositionKey, string>}
 */
const POSITION_MAP = {
  pos: "position",
  top: "top",
  end: "end",
  bottom: "bottom",
  start: "start",
  translate: "translate",
};

/**
 * @type {Object<PositionKey, any>}
 */
const POSITION_VALUES = {
  pos: ["static", "relative", "absolute", "fixed", "sticky"],
  top: [0, 50, 100],
  end: [0, 50, 100],
  bottom: [0, 50, 100],
  start: [0, 50, 100],
  translate: ["middle", "middle-x", "middle-y"],
};

/**
 * Resolves Bootstrap-like position utility classes
 * from a structured configuration object.
 *
 * Unknown keys or invalid values are silently ignored.
 *
 * @see {@link https://getbootstrap.com/docs/5.1/utilities/position/}
 *
 * @example
 * position({ pos: "absolute" })
 * // "position-absolute"
 *
 * @example
 * position({ pos: "static", top: 0, end: 0 })
 * // "top-0 end-0"
 *
 * @example
 * positionResolver({ foo: "bar" })
 * // ""
 *
 * @param {Object} value
 * Configuration object describing positional utilities.
 *
 * @param {"static"|"relative"|"absolute"|"fixed"|"sticky"} [value.pos]
 * CSS position utility.
 *
 * @param {0|50|100} [value.top]
 * Top offset utility.
 *
 * @param {0|50|100} [value.end]
 * Right (end) offset utility.
 *
 * @param {0|50|100} [value.bottom]
 * Bottom offset utility.
 *
 * @param {0|50|100} [value.start]
 * Left (start) offset utility.
 *
 * @param {"middle"|"middle-x"|"middle-y"} [value.translate]
 * Translate utility for centering behavior.
 *
 * @returns {string}
 * Generated Bootstrap-compatible class string.
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
export function positionResolver(value) {
  if (!value) return "";

  if (
    typeof value === "object" &&
    value &&
    !Array.isArray(value) &&
    Object.keys(value).length > 0
  ) {
    let result = [];

    for (let [key, val] of Object.entries(value)) {
      if (key in POSITION_MAP && POSITION_VALUES[key].includes(val)) {
        result.push(cs(POSITION_MAP[key], val));
      }
    }

    return result.join(" ").trim();
  }

  return "";
}
