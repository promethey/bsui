// @ts-nocheck
import { sizingResolver } from "./sizing";

describe("sizingResolver utility", () => {
  test("returns empty string for falsy values", () => {
    expect(sizingResolver()).toBe("");
    expect(sizingResolver({})).toBe("");
    expect(sizingResolver(null)).toBe("");
    expect(sizingResolver(undefined)).toBe("");
    expect(sizingResolver(true)).toBe("");
    expect(sizingResolver(false)).toBe("");
  });

  test("ignores invalid values", () => {
    expect(sizingResolver(0)).toBe("");
    expect(sizingResolver(7)).toBe("");
    expect(sizingResolver("hide")).toBe("");
    expect(sizingResolver("scrolls")).toBe("");
  });

  test("applies floating from object", () => {
    expect(sizingResolver({ mw: 100 })).toBe("mw-100");
    expect(sizingResolver({ w: 25 })).toBe("w-25");
    expect(sizingResolver({ w: "auto" })).toBe("w-auto");
    expect(sizingResolver({ mh: 75 })).toBe("mh-75");
    expect(sizingResolver({ h: 25 })).toBe("h-25");
    expect(sizingResolver({ h: "auto" })).toBe("h-auto");
  });
});
