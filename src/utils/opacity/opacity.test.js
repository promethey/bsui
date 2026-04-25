import { opacity } from "./opacity";

describe("opacity utility", () => {
  test("returns empty string for falsy values", () => {
    expect(opacity()).toBe("");
    expect(opacity({})).toBe("");
    expect(opacity(null)).toBe("");
    expect(opacity(undefined)).toBe("");
    expect(opacity(true)).toBe("");
    expect(opacity(false)).toBe("");
  });

  test("ignores invalid values", () => {
    expect(opacity(5)).toBe("");
    expect(opacity(77)).toBe("");
  });

  test("applies floating from number", () => {
    expect(opacity(100)).toBe("opacity-100");
    expect(opacity(75)).toBe("opacity-75");
    expect(opacity(50)).toBe("opacity-50");
    expect(opacity(25)).toBe("opacity-25");
  });
});
