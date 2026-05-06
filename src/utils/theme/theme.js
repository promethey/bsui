import { classnames as cs, is } from "helpers";

/**
 * Function for generate theme
 *
 * @example
 * themeResolver("btn", "primary", ["primary", "secondary"...]) // "btn-primary"
 * themeResolver("btn", "aqua", ["primary", "secondary"...]) // ""
 *
 * @param {string} prfx - prefix (example "btn" or "alert")
 * @param {string} currentTheme - (example "primary")
 * @param {Array<string>} themeList - (example ["primary", "secondary"...])
 */
export function themeResolver(prfx, currentTheme, themeList) {
  if (!is("string", prfx, { notEmpty: true })) {
    return "";
  }

  if (!is("string", currentTheme, { notEmpty: true })) {
    return "";
  }

  if (!is("array", themeList, { notEmpty: true })) {
    return "";
  }

  return themeList.includes(currentTheme) ? cs(prfx, currentTheme) : "";
}
