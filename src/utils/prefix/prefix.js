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
 * @param  {...string} classNames
 *
 * @returns {string} classnames string
 */
export function prefix(prfx, ...classNames) {
  if (typeof prfx !== "string") return "";

  if (classNames.length === 0) return prfx;

  const result = [];
  result.push(prfx);

  for (let i = 0; i < classNames.length; i += 1) {
    let className = classNames[i];
    let type = typeof className;

    if ((type === "string" && className.length > 0) || type === "number") {
      String(className).trim().length > 0 && result.push("-" + className);
    }
  }

  return result.join("").trim();
}
