import { prefix } from 'utils/prefix';
import { classnames as cs } from 'utils/classnames';

const FLEX_MAP = {
  justify: 'justify-content',
  align: 'align-items',
  dir: 'flex',
  self: 'align-self',
  fill: 'flex-fill',
};

const JUSTIFY_VALUES_LIST = ['start', 'end', 'center', 'between', 'around', 'evenly'];
const ALIGN_VALUES_LIST = ['start', 'end', 'center', 'baseline', 'stretch'];
const JUSTIFY_ALIGN_LIST = ['start', 'end', 'center'];

const BREAKPOINTS_LIST = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

/**
 * Function for flex utility
 * @see {@link https://getbootstrap.com/docs/5.1/utilities/flex/}
 * 
 * @example
 * flex("center"); // 'justify-content-center align-items-center'
 * flex("start"); // 'justify-content-start align-items-start'
 * flex({ justify: "center", align: "start" }); // 'justify-content-center align-items-start'
 * flex({ justify: { xs: "center", md: "start" }, align: { xs: "start" } }); // 
 * 
 * flex({ xs: { justify: "center", align: "center" }, lg: { justify: "start", align: "start" } });
 * // 'justify-content-center align-items-center justify-content-lg-start align-items-lg-start'
 * 
 * <Prime flex="center">Center</Prime>
 * <Prime flex={{ xs: { justify: "center" } }}>Center</Prime>
 * 
 * @param {string|Object} value 
 * @returns flex classnames string
 */
export function flex(value) {
  if (!value) return "";

  // String
  if (typeof value === "string" && value) {
    // work for 'start', 'end', 'center'
    if (JUSTIFY_ALIGN_LIST.includes(value)) {
      return [prefix(FLEX_MAP.justify, value), prefix(FLEX_MAP.align, value)].join(" ").trim();
    }
  }

  // Object
  if (typeof value === 'object' && Object.keys(value).length > 0) {
    let result = [];

    for (let [breakpoint, val] of Object.entries(value)) {
      // 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'
      if (BREAKPOINTS_LIST.includes(breakpoint)) {
        // 'start', 'end', 'center'
        if (typeof val === 'string' && JUSTIFY_ALIGN_LIST.includes(val)) {
          let justify = cs(FLEX_MAP.justify, { [breakpoint]: val });
          let align = cs(FLEX_MAP.align, { [breakpoint]: val });
          result.push(`${justify} ${align}`);
        }

        // { xs: { justify: 'center', align: 'center' } }
        if (typeof val === 'object') {
          for (let [flexKey, flexVal] of Object.entries(val)) {
            if (Object.keys(FLEX_MAP).includes(flexKey) && JUSTIFY_ALIGN_LIST.includes(flexVal)) {
              result.push(cs(FLEX_MAP[flexKey], { [breakpoint]: flexVal }));
            }
          }
        }
      }
    }

    return result.join(" ").trim();
  }

  return "";
}