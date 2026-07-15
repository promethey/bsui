import { prefix } from "helpers";

const BREAKPOINTS = ["xs", "sm", "md", "lg", "xl", "xxl"];

/**
 * Generates Bootstrap utility class names from primitive values
 * or responsive breakpoint maps.
 *
 * Supports:
 * - primitive values (string, number, boolean)
 * - responsive breakpoint objects
 * - utilities with breakpoint inserted inside the class name
 *   (for example: `flex-md-wrap`)
 *
 * Invalid prefixes, breakpoints and values are ignored.
 *
 * @example
 * classnames("justify-content", "center")
 * // "justify-content-center"
 *
 * @example
 * classnames("justify-content", {
 *   xs: "center",
 *   md: "start"
 * })
 * // "justify-content-center justify-content-md-start"
 *
 * @example
 * classnames("flex-wrap-reverse", true)
 * // "flex-wrap-reverse"
 *
 * @example
 * classnames(
 *   "flex-wrap-reverse",
 *   {
 *     xs: true,
 *     md: true
 *   },
 *   {
 *     prefixInsertBetween: true
 *   }
 * )
 * // "flex-wrap-reverse flex-md-wrap-reverse"
 *
 * @param {string} prfx
 * Bootstrap utility prefix.
 *
 * @param {string|number|boolean|Object<string, string|number|boolean>} [value]
 * Utility value or responsive breakpoint map.
 *
 * @param {Object} [options]
 * Configuration options.
 *
 * @param {boolean} [options.prefixInsertBetween=false]
 * Inserts responsive breakpoint between the first and remaining
 * parts of the prefix.
 *
 * @returns {string}
 * Bootstrap utility class names.
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
export function classnames(
  prfx,
  value,
  options = { prefixInsertBetween: false },
) {
  if (typeof prfx !== "string" || !prfx) {
    return "";
  }

  // Boolean
  if (typeof value === "boolean") {
    return value ? prfx : "";
  }

  // Split the utility prefix once for responsive insertion.
  const prfxArray = prfx.split("-");

  // ['flex', 'wrap', 'reverse'].shift() -> ['wrap', 'reverse']
  const shiftPrfxArray = [...prfxArray];
  shiftPrfxArray.shift();

  // String or Number
  if (typeof value === "string" || typeof value === "number") {
    if (options.prefixInsertBetween) {
      return prefix(prfxArray[0], value, shiftPrfxArray.join("-"));
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

    for (const [breakpoint, val] of Object.entries(value)) {
      if (typeof val === "boolean" && !val) {
        continue;
      }

      if (BREAKPOINTS.includes(breakpoint)) {
        if (options.prefixInsertBetween) {
          result.push(
            /**
             * prefix('flex', 'md', 'wrap', 'reverse')
             * // 'flex-md-wrap-reverse'
             */
            prefix(
              prfxArray[0],
              breakpoint === "xs" ? "" : breakpoint,
              shiftPrfxArray.join("-"),
              /**
               * Fix if val is boolean
               *
               * classnames('flex-fill', { xs: true, sm: false, md: true }, { prefixInsertBetween: true }))
               * // 'flex-fill flex-md-fill'
               */
              typeof val === "boolean" && val ? "" : val,
            ),
          );

          continue;
        }

        /**
         * @example
         * prefix('justify-content', 'md', 'center')
         * // 'justify-content-md-center'
         */
        result.push(
          prefix(prfx, breakpoint === "xs" ? undefined : breakpoint, val),
        );
      }
    }

    return result.join(" ").trim();
  }

  return "";
}
