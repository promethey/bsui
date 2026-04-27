import { prefix } from "helpers/prefix";

const BREAKPOINTS = ["xs", "sm", "md", "lg", "xl", "xxl"];

/**
 * Function for convert object or string to
 * responsive classes
 *
 * @example
 * classnames('justify-content', 'md', 'center') // 'justify-content-md-center'
 * classnames('justify-content', 'md', 'center') // 'justify-content-md-center'
 * classnames('align-items', { xs: 'center', md: 'start' }) // 'align-items-center align-items-md-start'
 *
 * @param {string} prfx - bootstrap prefix (for example 'btn')
 * @param {number|string|boolean|Object} value - values for prefix (for example 'primary')
 * @param {Object} options - insert breakpoint in between
 *
 * @returns {string} classnames
 */
export function classnames(
  prfx,
  value,
  options = { prefixInsertBetween: false },
) {
  if (typeof prfx !== "string" && !prfx) return "";

  // Boolean
  if (typeof value === "boolean") {
    return value ? prfx : "";
  }

  /**
   * Convert prefix to array.
   * @example
   * 'justify-content'.split('-') // ['justify', 'content']
   */
  const prfxInArray = String(prfx).split("-");

  /**
   * Copy prefix array and drop first elem in prefix array.
   * for prefixInsertBetween = true
   * @example
   * ['flex', 'wrap', 'reverse'].shift() // ['wrap', 'reverse']
   */
  const shiftPrfxInArray = [...prfxInArray];
  shiftPrfxInArray.shift();

  // String Number
  if (typeof value === "string" || typeof value === "number") {
    if (options.prefixInsertBetween) {
      return prefix(prfxInArray[0], value, shiftPrfxInArray.join("-"));
    }

    return prefix(prfx, value);
  }

  // Object
  if (
    typeof value === "object" &&
    !Array.isArray(value) &&
    value &&
    Object.keys(value).length > 0
  ) {
    const result = [];

    for (const [breakpoint, className] of Object.entries(value)) {
      // ignore { sm: false }
      if (typeof className === "boolean" && !className) {
        continue;
      }

      if (BREAKPOINTS.includes(breakpoint)) {
        if (options.prefixInsertBetween) {
          result.push(
            /**
             * @example
             * prefix('flex', 'md', 'wrap', 'reverse') // 'flex-md-wrap-reverse'
             */
            prefix(
              prfxInArray[0],
              breakpoint === "xs" ? "" : breakpoint, // ignore xs
              shiftPrfxInArray.join("-"),
              /**
               * Fix if className value is boolean
               * @example
               * classnames('flex-fill', { xs: true, sm: false, md: true }, { prefixInsertBetween: true })) // 'flex-fill flex-md-fill'
               */
              typeof className === "boolean" && className ? "" : className,
            ),
          );

          continue;
        }

        /**
         * @example
         * prefix('justify-content', 'md', 'center') // 'justify-content-md-center'
         */
        result.push(
          prefix(prfx, breakpoint === "xs" ? null : breakpoint, className),
        );
      }
    }

    return result.join(" ").trim();
  }

  return "";
}
