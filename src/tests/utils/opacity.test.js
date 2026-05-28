// @ts-nocheck
import { opacityResolver } from "utils";

describe("opacity utility", () => {
  test("returns empty string for falsy values", () => {
    expect(opacityResolver()).toBe("");
    expect(opacityResolver({})).toBe("");
    expect(opacityResolver(null)).toBe("");
    expect(opacityResolver(undefined)).toBe("");
    expect(opacityResolver(true)).toBe("");
    expect(opacityResolver(false)).toBe("");
  });

  test("ignores invalid values", () => {
    expect(opacityResolver(5)).toBe("");
    expect(opacityResolver(77)).toBe("");
  });

  test("applies floating from number", () => {
    expect(opacityResolver(100)).toBe("opacity-100");
    expect(opacityResolver(75)).toBe("opacity-75");
    expect(opacityResolver(50)).toBe("opacity-50");
    expect(opacityResolver(25)).toBe("opacity-25");
  });
});
