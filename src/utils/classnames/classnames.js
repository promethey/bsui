import { prefix } from "utils/prefix";

/**
 * Function for convert object or string to
 * responsive classes
 *
 * @example
 * classnames('justify-content', 'md', 'center') // 'justify-content-md-center'
 * classnames('justify-content', 'md', 'center') // 'justify-content-md-center'
 * classnames('align-items', {xs: 'center', md: 'start'}) // 'align-items-center align-items-md-start'
 *
 * @param {string} prfx - Bootstrap prefix (for example: 'btn')
 * @param {number|string|boolean|Object} classNames - Other classnames
 * @param {Object} options - Add classNames param in prefix
 *
 * @returns {Array<string>|string} Result classnames
 */
export function classnames(
  prfx, // prefix
  classNames,
  options = { prefixInsertBetween: false },
) {
  /**
   * check: prfs is string
   */
  if (typeof prfx !== "string") {
    return "";
  }

  /**
   * check: classNames not null and not undefined
   */
  if (classNames === null || classNames === undefined) {
    return "";
  }

  const classNamesType = typeof classNames;

  if (
    typeof prfx !== "string" &&
    (classNamesType !== "object" ||
      classNamesType !== "string" ||
      classNamesType !== "number" ||
      classNamesType !== "boolean")
  ) {
    return "";
  }

  if (classNamesType === "boolean") {
    return classNames ? prfx : "";
  }

  /**
   * Convert prefix to array.
   * @example
   * 'justify-content'.split('-') // ['justify', 'content']
   */
  const prfxInArray = prfx.split("-");

  /**
   * Copy prefix array and drop first elem in prefix array.
   * @example
   * ['flex', 'wrap', 'reverse'].shift() // ['wrap', 'reverse']
   */
  const shiftPrfxInArray = [...prfxInArray];
  shiftPrfxInArray.shift();

  if (classNamesType === "string" || classNamesType === "number") {
    /**
     * @example
     * prefix('flex', 'md', 'wrap-reverse') // 'flex-md-wrap-reverse'
     */
    if (options.prefixInsertBetween) {
      return prefix(prfxInArray[0], classNames, shiftPrfxInArray.join("-"));
    }

    /**
     * @example
     * prefix('justify-content', 'center') // return 'justify-content-center'
     */
    return prefix(prfx, classNames);
  }

  if (typeof classNames === "object") {
    const BREAKPOINTS = ["xs", "sm", "md", "lg", "xl", "xxl"];
    const classNamesArray = [];

    if (Object.entries(classNames).length === 0) {
      return "";
    }

    for (const [breakpoint, className] of Object.entries(classNames)) {
      if (BREAKPOINTS.includes(breakpoint)) {
        if (options.prefixInsertBetween) {
          classNamesArray.push(
            /**
             * @example
             * prefix('flex', 'md', 'wrap', 'reverse') // 'flex-md-wrap-reverse'
             */
            prefix(
              prfxInArray[0],
              breakpoint === "xs" ? "" : breakpoint,
              className,
              shiftPrfxInArray.join("-"),
            ),
          );
        } else {
          /**
           * @example
           * prefix('justify-content', 'md', 'center') // 'justify-content-md-center'
           */
          classNamesArray.push(
            prefix(prfx, breakpoint === "xs" ? null : breakpoint, className),
          );
        }
      }
    }

    return classNamesArray.join(" ");
  }

  return "";
}
