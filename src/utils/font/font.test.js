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

  test("applies fs from object", () => {
    expect(font({ fs: 1 })).toBe("fs-1");
    expect(font({ fs: 2 })).toBe("fs-2");
    expect(font({ fs: 3 })).toBe("fs-3");
    expect(font({ fs: 4 })).toBe("fs-4");
    expect(font({ fs: 5 })).toBe("fs-5");
    expect(font({ fs: 6 })).toBe("fs-6");
  });

  test("applies fw from object", () => {
    expect(font({ fw: "bold" })).toBe("fw-bold");
    expect(font({ fw: "bolder" })).toBe("fw-bolder");
    expect(font({ fw: "normal" })).toBe("fw-normal");
    expect(font({ fw: "light" })).toBe("fw-light");
    expect(font({ fw: "lighter" })).toBe("fw-lighter");
  });

  test("applies fst from object", () => {
    expect(font({ fst: "italic" })).toBe("fst-italic");
    expect(font({ fst: "normal" })).toBe("fst-normal");
  });

  test("applies line height from object", () => {
    expect(font({ lh: 1 })).toBe("lh-1");
    expect(font({ lh: "sm" })).toBe("lh-sm");
    expect(font({ lh: "base" })).toBe("lh-base");
    expect(font({ lh: "lg" })).toBe("lh-lg");
  });

  test("applies monospace from object", () => {
    expect(font({ monospace: true })).toBe("font-monospace");
    expect(font({ monospace: false })).toBe("");
  });
});
