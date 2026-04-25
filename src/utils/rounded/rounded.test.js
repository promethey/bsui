import { rounded } from "./rounded";

describe("rounded utility", () => {
  test("returns empty string for falsy values", () => {
    expect(rounded()).toBe("");
    expect(rounded({})).toBe("");
    expect(rounded(null)).toBe("");
    expect(rounded(undefined)).toBe("");
    expect(rounded(false)).toBe("");
  });

  test("applies rounded size from number", () => {
    expect(rounded(0)).toBe("rounded-0");
    expect(rounded(1)).toBe("rounded-1");
    expect(rounded(2)).toBe("rounded-2");
    expect(rounded(3)).toBe("rounded-3");
  });

  test("ignores invalid values", () => {
    expect(rounded(-1)).toBe("");
    expect(rounded(4)).toBe("");
    expect(rounded("pillow")).toBe("");
    expect(rounded("circles")).toBe("");
  });

  test("applies size from object", () => {
    expect(rounded("top")).toBe("rounded-top");
    expect(rounded("end")).toBe("rounded-end");
    expect(rounded("bottom")).toBe("rounded-bottom");
    expect(rounded("start")).toBe("rounded-start");
    expect(rounded("circle")).toBe("rounded-circle");
    expect(rounded("pill")).toBe("rounded-pill");
  });
});
