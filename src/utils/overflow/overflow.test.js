import { overflow } from "./overflow";

describe("overflow utility", () => {
  test("returns empty string for falsy values", () => {
    expect(overflow()).toBe("");
    expect(overflow({})).toBe("");
    expect(overflow(null)).toBe("");
    expect(overflow(undefined)).toBe("");
    expect(overflow(true)).toBe("");
    expect(overflow(false)).toBe("");
  });

  test("ignores invalid values", () => {
    expect(overflow(0)).toBe("");
    expect(overflow(7)).toBe("");
    expect(overflow("hide")).toBe("");
    expect(overflow("scrolls")).toBe("");
  });

  test("applies floating from string", () => {
    expect(overflow("auto")).toBe("overflow-auto");
    expect(overflow("hidden")).toBe("overflow-hidden");
    expect(overflow("visible")).toBe("overflow-visible");
    expect(overflow("scroll")).toBe("overflow-scroll");
  });
});
