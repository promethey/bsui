// @ts-nocheck
import { positionResolver } from "./position";

describe("position utility", () => {
  test("returns empty string for falsy values", () => {
    expect(positionResolver()).toBe("");
    expect(positionResolver({})).toBe("");
    expect(positionResolver(undefined)).toBe("");
    expect(positionResolver(true)).toBe("");
    expect(positionResolver(false)).toBe("");
  });

  test("valid position values", () => {
    ["static", "relative", "absolute", "fixed", "sticky"].forEach((value) => {
      expect(positionResolver({ pos: value })).toBe("position-" + value);
    });
  });

  test("valid top, end, bottom, start values", () => {
    [0, 50, 100].forEach((value) => {
      expect(positionResolver({ top: value })).toBe("top-" + value);
    });

    [0, 50, 100].forEach((value) => {
      expect(positionResolver({ end: value })).toBe("end-" + value);
    });

    [0, 50, 100].forEach((value) => {
      expect(positionResolver({ bottom: value })).toBe("bottom-" + value);
    });

    [0, 50, 100].forEach((value) => {
      expect(positionResolver({ start: value })).toBe("start-" + value);
    });
  });

  test("invalid values", () => {
    ["absoluted", "fixing"].forEach((value) => {
      expect(positionResolver({ pos: value })).toBe("");
    });

    [-1, 55, 99].forEach((value) => {
      expect(positionResolver({ top: value })).toBe("");
    });

    [-1, 55, 99].forEach((value) => {
      expect(positionResolver({ end: value })).toBe("");
    });

    [-1, 55, 99].forEach((value) => {
      expect(positionResolver({ bottom: value })).toBe("");
    });

    [-1, 55, 99].forEach((value) => {
      expect(positionResolver({ start: value })).toBe("");
    });
  });

  test("translate middle", () => {
    expect(positionResolver({ translateMiddle: true })).toBe(
      "translate-middle",
    );
    expect(positionResolver({ translateMiddleX: true })).toBe(
      "translate-middle-x",
    );
    expect(positionResolver({ translateMiddleY: true })).toBe(
      "translate-middle-y",
    );
  });

  test("translate middle false", () => {
    expect(positionResolver({ translateMiddle: false })).toBe("");
    expect(positionResolver({ translateMiddleX: false })).toBe("");
    expect(positionResolver({ translateMiddleY: false })).toBe("");
  });
});
