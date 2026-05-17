import { classnames as cs, is } from "helpers";

/**
 * Function for generate theme
 *
 * @example
 * themeResolver("btn", "primary", ["primary", "secondary"]) // "btn-primary"
 *
 * @example
 * themeResolver("btn", "secondary", ["primary", "secondary"]) // "btn-secondary"
 *
 * @param {string} prfx - prefix (example "btn" or "alert")
 * @param {string} currentTheme - (example "primary")
 * @param {Array<string>} themeList - (example ["primary", "secondary"...])
 *
 * @return {string}
 */
export function themeResolver(prfx, currentTheme, themeList) {
  if (typeof prfx !== "string" || prfx.length === 0) {
    return "";
  }

  if (typeof currentTheme !== "string" || currentTheme.length === 0) {
    return "";
  }

  if (!Array.isArray(themeList) || themeList.length === 0) {
    return "";
  }

  return themeList.includes(currentTheme) ? cs(prfx, currentTheme) : "";
}
