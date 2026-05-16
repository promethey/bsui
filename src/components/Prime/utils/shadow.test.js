// @ts-nocheck
import { shadowResolver } from "./shadow";

describe("shadowResolver utility", () => {
  test("returns empty string for falsy values", () => {
    expect(shadowResolver()).toBe("");
    expect(shadowResolver({})).toBe("");
    expect(shadowResolver(null)).toBe("");
    expect(shadowResolver(undefined)).toBe("");
    expect(shadowResolver(false)).toBe("");
  });

  test("applies shadowResolver size from number", () => {
    expect(shadowResolver("none")).toBe("shadow-none");
    expect(shadowResolver("sm")).toBe("shadow-sm");
    expect(shadowResolver(true)).toBe("shadow");
    expect(shadowResolver("lg")).toBe("shadow-lg");
  });

  test("ignores invalid values", () => {
    expect(shadowResolver("smm")).toBe("");
    expect(shadowResolver("lgg")).toBe("");
  });
});
