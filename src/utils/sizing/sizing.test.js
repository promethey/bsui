import { sizing } from "./sizing";

describe("sizing utility", () => {
  test("returns empty string for falsy values", () => {
    expect(sizing()).toBe("");
    expect(sizing({})).toBe("");
    expect(sizing(null)).toBe("");
    expect(sizing(undefined)).toBe("");
    expect(sizing(true)).toBe("");
    expect(sizing(false)).toBe("");
  });

  test("ignores invalid values", () => {
    expect(sizing(0)).toBe("");
    expect(sizing(7)).toBe("");
    expect(sizing("hide")).toBe("");
    expect(sizing("scrolls")).toBe("");
  });

  test("applies floating from object", () => {
    expect(sizing({ mw: 100 })).toBe("mw-100");
    expect(sizing({ w: 25 })).toBe("w-25");
    expect(sizing({ w: "auto" })).toBe("w-auto");
    expect(sizing({ mh: 75 })).toBe("mh-75");
    expect(sizing({ h: 25 })).toBe("h-25");
    expect(sizing({ h: "auto" })).toBe("h-auto");
  });
});
