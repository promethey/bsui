import { classnames as cs } from "helpers/classnames";

export function compose(map, values, options) {
  if (!values) return "";
  
  // String
  if (typeof values === "string") {
    if (!values["justify"].includes(values) && !values["align"].includes(values)) {
      return "";
    }

    if (JUSTIFY_ALIGN_LIST.includes(values)) {
      return `${cs(map.justify, values)} ${cs(map.align, values)}`;
    }
  }

  // Object
  if (typeof values === "object") {
    if (Object.keys(values).length === 0) {
      return "";
    }

    let result = [];

    for (let [breakpoint, val] of Object.entries(values)) {
      if (BREAKPOINTS_LIST.includes(breakpoint)) {
        // String or Boolean
        if ((typeof val === 'string' || typeof val === 'boolean') && JUSTIFY_ALIGN_LIST.includes(val)) {
          let justify = cs(map.justify, { [breakpoint]: val });
          let align = cs(map.align, { [breakpoint]: val });

          result.push(`${justify} ${align}`);
        }

        // Object
        if (typeof val === 'object') {
          for (let [flexKey, flexVal] of Object.entries(val)) {
            if (Object.keys(map).includes(flexKey) && values[flexKey].includes(flexVal)) {
              result.push(cs(
                map[flexKey],
                { [breakpoint]: flexVal },
                { prefixInsertBetween: options[flexKey] }
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