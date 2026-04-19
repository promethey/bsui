import { prefix } from 'utils/prefix';
import { classnames as cs } from 'utils/classnames';

const FLEX_MAP = {
  dir: 'flex',
  justify: 'justify-content',
  align: 'align-items',
  alignSelf: 'align-self',
  fill: 'flex-fill',
};

const FLEX_VALUES_MAP = {
  dir: ['row', 'row-reverse', 'column', 'column-reverse'],
  justify: ['start', 'end', 'center', 'between', 'around', 'evenly'],
  align: ['start', 'end', 'center', 'baseline', 'stretch'],
  alignSelf: ['start', 'end', 'center', 'baseline', 'stretch'],
  fill: [true, false],
}

/**
 * For classnames utility
 * @example
 * if true 'flex-row-md' -> 'flex-md-row'
 */
const FLEX_OPTIONS_MAP = {
  dir: true,
  justify: false,
  align: false,
  alignSelf: false,
  fill: true,
}

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
    // 'start', 'end', 'center'
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
            if (Object.keys(FLEX_MAP).includes(flexKey) && FLEX_VALUES_MAP[flexKey].includes(flexVal)) {
              result.push(cs(
                FLEX_MAP[flexKey],
                { [breakpoint]: flexVal },
                { prefixInsertBetween: FLEX_OPTIONS_MAP[flexKey] }
              ));
            }
          }
        }
      }
    }

    return result.join(" ").trim();
  }

  return "";
}