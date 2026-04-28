import { position } from "./position";

describe("position utility", () => {
  test("returns empty string for falsy values", () => {
    expect(position()).toBe("");
    expect(position({})).toBe("");
    expect(position(null)).toBe("");
    expect(position(undefined)).toBe("");
    expect(position(true)).toBe("");
    expect(position(false)).toBe("");
  });

  test("valid position values", () => {
    ["static", "relative", "absolute", "fixed", "sticky"].forEach((value) => {
      expect(position({ pos: value })).toBe("position-" + value);
    });
  });

  test("valid top, end, bottom, start values", () => {
    [0, 50, 100].forEach((value) => {
      expect(position({ top: value })).toBe("top-" + value);
    });

    [0, 50, 100].forEach((value) => {
      expect(position({ end: value })).toBe("end-" + value);
    });

    [0, 50, 100].forEach((value) => {
      expect(position({ bottom: value })).toBe("bottom-" + value);
    });

    [0, 50, 100].forEach((value) => {
      expect(position({ start: value })).toBe("start-" + value);
    });
  });

  test("invalid values", () => {
    ["absoluted", "fixing"].forEach((value) => {
      expect(position({ pos: value })).toBe("");
    });

    [-1, 55, 99].forEach((value) => {
      expect(position({ top: value })).toBe("");
    });

    [-1, 55, 99].forEach((value) => {
      expect(position({ end: value })).toBe("");
    });

    [-1, 55, 99].forEach((value) => {
      expect(position({ bottom: value })).toBe("");
    });

    [-1, 55, 99].forEach((value) => {
      expect(position({ start: value })).toBe("");
    });
  });
});
