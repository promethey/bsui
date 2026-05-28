// @ts-nocheck
import { overflowResolver } from "utils";

describe("overflowResolver utility", () => {
  test("returns empty string for falsy values", () => {
    expect(overflowResolver()).toBe("");
    expect(overflowResolver({})).toBe("");
    expect(overflowResolver(null)).toBe("");
    expect(overflowResolver(undefined)).toBe("");
    expect(overflowResolver(true)).toBe("");
    expect(overflowResolver(false)).toBe("");
  });

  test("ignores invalid values", () => {
    expect(overflowResolver(0)).toBe("");
    expect(overflowResolver(7)).toBe("");
    expect(overflowResolver("hide")).toBe("");
    expect(overflowResolver("scrolls")).toBe("");
  });

  test("applies floating from string", () => {
    expect(overflowResolver("auto")).toBe("overflow-auto");
    expect(overflowResolver("hidden")).toBe("overflow-hidden");
    expect(overflowResolver("visible")).toBe("overflow-visible");
    expect(overflowResolver("scroll")).toBe("overflow-scroll");
  });
});
