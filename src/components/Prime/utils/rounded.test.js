// @ts-nocheck
import { roundedResolver } from "./rounded";

describe("rounded utility", () => {
  test("returns empty string for falsy values", () => {
    expect(roundedResolver()).toBe("");
    expect(roundedResolver({})).toBe("");
    expect(roundedResolver(null)).toBe("");
    expect(roundedResolver(undefined)).toBe("");
    expect(roundedResolver(false)).toBe("");
  });

  test("applies rounded size from number", () => {
    expect(roundedResolver(0)).toBe("rounded-0");
    expect(roundedResolver(1)).toBe("rounded-1");
    expect(roundedResolver(2)).toBe("rounded-2");
    expect(roundedResolver(3)).toBe("rounded-3");
  });

  test("ignores invalid values", () => {
    expect(roundedResolver(-1)).toBe("");
    expect(roundedResolver(4)).toBe("");
    expect(roundedResolver("pillow")).toBe("");
    expect(roundedResolver("circles")).toBe("");
  });

  test("applies size from object", () => {
    expect(roundedResolver("top")).toBe("rounded-top");
    expect(roundedResolver("end")).toBe("rounded-end");
    expect(roundedResolver("bottom")).toBe("rounded-bottom");
    expect(roundedResolver("start")).toBe("rounded-start");
    expect(roundedResolver("circle")).toBe("rounded-circle");
    expect(roundedResolver("pill")).toBe("rounded-pill");
  });
});
