import { everyType } from 'utils/everyType';

const FONT_PROPS_LIST = [
  "size",
  "weight",
  "style",
  "lineHeight",
  "monospace", //@see {@link https://getbootstrap.com/docs/5.1/utilities/text/#monospace}
]

// @see {@link https://getbootstrap.com/docs/5.1/utilities/text/#font-size}
const FONT_SIZE_LIST = [1, 2, 3, 4, 5, 6];

// @see {@link https://getbootstrap.com/docs/5.1/utilities/text/#font-weight-and-italics}
const FONT_WEIGHT_LIST = ["bold", "bolder", "normal", "light", "lighter"];

// @see {@link https://getbootstrap.com/docs/5.1/utilities/text/#font-weight-and-italics}
const FONT_STYLE_LIST = ["italic", "normal"];

// @see {@link https://getbootstrap.com/docs/5.1/utilities/text/#line-height}
const FONT_LINE_HEIGHT_LIST = [1, "sm", "base", "lg"];

/**
 * Font function
 * 
 * @example
 * font(3) // "fs-1"
 * font({ size: 3, weight: "bold" }) // 'fs-3 fw-bold'
 * 
 * @param {number|Object} value - Default number is size
 */
export function font(value) {
  if (!value) return "";

  // String
  if (everyType("number", value) && FONT_SIZE_LIST.includes(value)) {
    return `fs-${value}`;
  }

  // Object
  if (everyType("object", value)) {
    let classes = [];

    for (let [key, val] of Object.entries(value)) {
      if (FONT_PROPS_LIST.includes(key)) {
        if (key === 'size' && FONT_SIZE_LIST.includes(val)) {
          classes.push(`fs-${val}`);
        }

        if (key === 'weight' && FONT_WEIGHT_LIST.includes(val)) {
          classes.push(`fw-${val}`);
        }

        if (key === 'style' && FONT_STYLE_LIST.includes(val)) {
          classes.push(`fst-${val}`);
        }

        if (key === 'lineHeight' && FONT_LINE_HEIGHT_LIST.includes(val)) {
          classes.push(`lh-${val}`);
        }

        if (key === 'monospace' && everyType('boolean', val) && val) {
          classes.push('monospace');
        }
      }
    }

    return classes.join(" ").trim();
  }

  return "";
}