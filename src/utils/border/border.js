const BORDER_CLASSNAME = 'border';
const BORDER_WIDTH_LIST = [1, 2, 3, 4, 5];
const BORDER_PROPERTY_LIST = ["color", "width", "top", "end", "bottom", "start"];
const BORDER_DIRECTION_LIST = ["top", "end", "bottom", "start"];

/**
 * Function for border utility
 * 
 * @see {@link https://getbootstrap.com/docs/5.1/utilities/borders/}
 * 
 * @example
 * border={true} // "border"
 * border={1} // "border border-1"
 * border="top" // "border-top"
 * border="end" // "border-end"
 * border="bottom" // "border-bottom"
 * border="start" // "border-start"
 * border={{ color="success" }} // "border border-success"
 * border={{ aspect: "top", color: "primary" }} // "border-top border-primary"
 * border={{ color: "primary", width: 1, top: 0 }} // "border border-primary border-1 border-top-0"
 * 
 * @param {boolean|string|number|Object} value 
 * @returns {string} border classnames
 */
export function border(value) {
  // Boolean
  if (typeof value === 'boolean') {
    return BORDER_CLASSNAME;
  }

  // String
  if (typeof value === 'string') {
    if (BORDER_DIRECTION_LIST.includes(value)) {
      return `${BORDER_CLASSNAME}-${value}`;
    }

    return "";
  }

  // Number
  if (typeof value === "number") {
    if (BORDER_WIDTH_LIST.includes(value)) {
      return [BORDER_CLASSNAME, `${BORDER_CLASSNAME}-${value}`].join(" ").trim();
    }

    return "";
  }

  // Object
  if (typeof value === "object") {
    let result = [];

    if (value?.aspect && BORDER_DIRECTION_LIST.includes(value.aspect)) {
      result.push(`${BORDER_CLASSNAME}-${value.aspect}`)
    } else {
      result.push(BORDER_CLASSNAME);
    }

    for (let [key, val] of Object.entries(value)) {
      if (BORDER_PROPERTY_LIST.includes(key)) {
        // for top end bottom start
        if (BORDER_DIRECTION_LIST.includes(key)) {
          result.push(`${BORDER_CLASSNAME}-${key}-${val}`);
        } else {
          result.push(`${BORDER_CLASSNAME}-${val}`);
        }    
      }
    }

    return result.join(" ").trim();
  }
}
