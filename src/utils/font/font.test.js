import { font } from "./font";

describe("font utility", () => {
  test("returns empty string for falsy values", () => {
    expect(font()).toBe("");
    expect(font({})).toBe("");
    expect(font(null)).toBe("");
    expect(font(undefined)).toBe("");
    expect(font(true)).toBe("");
    expect(font(false)).toBe("");
  });

  test("applies font size from number", () => {
    expect(font(3)).toBe("fs-3");
    expect(font(1)).toBe("fs-1");
  });

  test("ignores invalid number values", () => {
    expect(font(0)).toBe("");
    expect(font(7)).toBe("");
  });

  test("applies size from object", () => {
    expect(font({ size: 1 })).toBe("fs-1");
    expect(font({ size: 2 })).toBe("fs-2");
    expect(font({ size: 3 })).toBe("fs-3");
    expect(font({ size: 4 })).toBe("fs-4");
    expect(font({ size: 5 })).toBe("fs-5");
    expect(font({ size: 6 })).toBe("fs-6");
  });

  test("applies weight from object", () => {
    expect(font({ weight: "bold" })).toBe("fw-bold");
    expect(font({ weight: "bolder" })).toBe("fw-bolder");
    expect(font({ weight: "normal" })).toBe("fw-normal");
    expect(font({ weight: "light" })).toBe("fw-light");
    expect(font({ weight: "lighter" })).toBe("fw-lighter");
  });

  test("applies style from object", () => {
    expect(font({ style: "italic" })).toBe("fst-italic");
    expect(font({ style: "normal" })).toBe("fst-normal");
  });

  test("applies line height from object", () => {
    expect(font({ lineHeight: 1 })).toBe("lh-1");
    expect(font({ lineHeight: "sm" })).toBe("lh-sm");
    expect(font({ lineHeight: "base" })).toBe("lh-base");
    expect(font({ lineHeight: "lg" })).toBe("lh-lg");
  });

  test("applies monospace from object", () => {
    expect(font({ monospace: true })).toBe("monospace");
    expect(font({ monospace: false })).toBe("");
  });
});
