// @ts-nocheck
import { columnsResolver } from "utils";

describe("gutterResolver utility", () => {
  test("returns empty string for falsy values", () => {
    expect(columnsResolver()).toBe("");
    expect(columnsResolver({})).toBe("");
    expect(columnsResolver(null)).toBe("");
    expect(columnsResolver(undefined)).toBe("");
    expect(columnsResolver(true)).toBe("");
    expect(columnsResolver(false)).toBe("");
  });

  test("ignores invalid values", () => {
    expect(columnsResolver(-1)).toBe("");
    expect(columnsResolver(13)).toBe("");
    expect(columnsResolver("hide")).toBe("");
    expect(columnsResolver("scrolls")).toBe("");
  });

  test("valid values", () => {
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].forEach((value) => {
      expect(columnsResolver(value)).toBe("row-cols-" + value);
    });

    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].forEach((value) => {
      expect(columnsResolver({ xs: value })).toBe("row-cols-" + value);
    });

    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].forEach((value) => {
      expect(columnsResolver({ md: value })).toBe("row-cols-md-" + value);
    });
  });
});
