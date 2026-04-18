/**
 * Function for creating classnames like Bootstrap
 * 
 * @example
 * prefix("m", 0) // return 'm-0'
 * prefix("mt", 3) // return 'mt-3'
 * prefix("bg", "opacity", 25) // return 'bg-opacity-25'
 *
 * @param {string} prfx
 * @param  {...string} classNames
 *
 * @returns {string} result classNames
 */
export function prefix(prfx, ...classNames) {
  if (typeof prfx !== "string") {
    return undefined;
  }

  if (classNames.length === 0) {
    return prfx;
  }

  const resultClassNames = [];
  resultClassNames.push(prfx);

  for (let i = 0; i < classNames.length; i += 1) {
    const className = classNames[i];
    if (
      (typeof className === "string" && className.length !== 0) ||
      typeof className === "number"
    ) {
      String(className).trim().length > 0 &&
        resultClassNames.push("-" + className);
    }
  }

  return resultClassNames.join("");
}
