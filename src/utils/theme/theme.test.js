import { themeResolver } from "./theme";

describe("themeResolver utility", () => {
  test("returns empty string for falsy values", () => {
    expect(themeResolver()).toBe("");
    expect(themeResolver({})).toBe("");
    expect(themeResolver(null)).toBe("");
    expect(themeResolver(undefined)).toBe("");
    expect(themeResolver(true)).toBe("");
    expect(themeResolver(false)).toBe("");
  });

  test("applies themeResolver color", () => {
    const prefix = "alert";

    const themes = [
      "primary",
      "secondary",
      "success",
      "danger",
      "warning",
      "info",
      "light",
      "dark",
    ];

    themes.forEach((theme) => {
      expect(themeResolver(prefix, theme, themes)).toBe(`${prefix}-${theme}`);
    });
  });

  test("ignores invalid string values", () => {
    expect(themeResolver("invalid")).toBe("");
    expect(themeResolver("foo")).toBe("");
  });
});
