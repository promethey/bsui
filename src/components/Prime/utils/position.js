import { classnames as cs } from "helpers";

/**
 * @typedef {"pos"|"top"|"end"|"bottom"|"start"|"translateMiddle"|"translateMiddleX"|"translateMiddleY"} PositionKey
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
  translateMiddle: "translate-middle",
  translateMiddleX: "translate-middle-x",
  translateMiddleY: "translate-middle-y",
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
  translateMiddle: [true],
  translateMiddleX: [true],
  translateMiddleY: [true],
};

/**
 * Position function
 *
 * @see {@link https://getbootstrap.com/docs/5.1/utilities/position/}
 *
 * @example
 * position({ pos: "absolute" }) // 'position-absolute'
 * position({ pos: "static", top: 0, end: 0 }) // 'top-0 end-0'
 *
 * @param {Object} value
 * @returns {string} classnames
 */
export function positionResolver(
  value = { pos: null, top: null, end: null, bottom: null, start: null },
) {
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
