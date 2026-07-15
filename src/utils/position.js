import { classnames as cs } from "helpers";

/**
 * @typedef {"pos"|"top"|"end"|"bottom"|"start"|"translate"} PositionKey
 *
 * @typedef {Object} PositionObject
 *
 * @property {"static"|"relative"|"absolute"|"fixed"|"sticky"} [pos]
 * Sets the CSS position utility.
 *
 * @property {0|50|100} [top]
 * Sets the top offset utility.
 *
 * @property {0|50|100} [end]
 * Sets the end (right) offset utility.
 *
 * @property {0|50|100} [bottom]
 * Sets the bottom offset utility.
 *
 * @property {0|50|100} [start]
 * Sets the start (left) offset utility.
 *
 * @property {"middle"|"middle-x"|"middle-y"} [translate]
 * Applies translate utility classes for centering.
 */

/** @type {Object<PositionKey, string>} */
const POSITION_MAP = {
  pos: "position",
  top: "top",
  end: "end",
  bottom: "bottom",
  start: "start",
  translate: "translate",
};

/** @type {Object<PositionKey, any[]>} */
const POSITION_VALUES = {
  pos: ["static", "relative", "absolute", "fixed", "sticky"],
  top: [0, 50, 100],
  end: [0, 50, 100],
  bottom: [0, 50, 100],
  start: [0, 50, 100],
  translate: ["middle", "middle-x", "middle-y"],
};

/**
 * Resolves Bootstrap position utility classes.
 *
 * Supports CSS position, inset offsets,
 * and translate utilities.
 *
 * Unsupported properties and values are ignored.
 *
 * @see {@link https://getbootstrap.com/docs/5.1/utilities/position/}
 *
 * @example
 * positionResolver({ pos: "absolute" })
 * // "position-absolute"
 *
 * @example
 * positionResolver({
 *   pos: "absolute",
 *   top: 0,
 *   end: 0,
 * })
 * // "position-absolute top-0 end-0"
 *
 * @example
 * positionResolver({
 *   top: 50,
 *   start: 50,
 *   translate: "middle",
 * })
 * // "top-50 start-50 translate-middle"
 *
 * @example
 * positionResolver({ foo: "bar", top: 0 })
 * // "top-0"
 *
 * @param {PositionObject} [value]
 * Position utility configuration.
 *
 * @returns {string}
 * Space-separated Bootstrap position utility classes.
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
