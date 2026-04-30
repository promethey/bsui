import { is } from "helpers/is";
import { classnames as cs } from "helpers/classnames";

/**
 * Function for generate theme
 *
 * @example
 * themeResolver("btn", "primary", ["primary", "secondary"...]) // "btn-primary"
 * themeResolver("btn", "aqua", ["primary", "secondary"...]) // ""
 *
 * @param {string} prfx - prefix (example "btn" or "alert")
 * @param {string} currentTheme - (example "primary")
 * @param {array} themeList - (example ["primary", "secondary"...])
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
