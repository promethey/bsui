/**
 * Function for creating classnames like Bootstrap
 *
 * @example
 * prefix("m", 0) // 'm-0'
 * prefix("mt", 3) // 'mt-3'
 * prefix("bg", "opacity", 25) // 'bg-opacity-25'
 * prefix("bg-gradient", true) // 'bg-gradient'
 *
 * @param {string} prfx - prefix
 * @param  {...string} values - classnames
 *
 * @returns {string} classnames
 */
export function prefix(prfx, ...values) {
  if (typeof prfx !== "string" || !prfx) return "";

  // prefix("border", true) -> "border"
  if (typeof values === "boolean" && values) return prfx;

  if (values.length === 0) return prfx;

  const result = [prfx];

  for (let i = 0; i < values.length; i += 1) {
    let className = values[i];

    // String Number
    if (
      (typeof className === "string" && className) ||
      typeof className === "number"
    ) {
      String(className).trim().length > 0 && result.push("-" + className);
    }
  }

  return result.join("").trim();
}
