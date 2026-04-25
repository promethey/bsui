import { shadow } from "./shadow";

describe("shadow utility", () => {
  test("returns empty string for falsy values", () => {
    expect(shadow()).toBe("");
    expect(shadow({})).toBe("");
    expect(shadow(null)).toBe("");
    expect(shadow(undefined)).toBe("");
    expect(shadow(false)).toBe("");
  });

  test("applies shadow size from number", () => {
    expect(shadow("none")).toBe("shadow-none");
    expect(shadow("sm")).toBe("shadow-sm");
    expect(shadow(true)).toBe("shadow");
    expect(shadow("lg")).toBe("shadow-lg");
  });

  test("ignores invalid values", () => {
    expect(shadow("smm")).toBe("");
    expect(shadow("lgg")).toBe("");
  });
});
