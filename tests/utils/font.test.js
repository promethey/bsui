// @ts-nocheck
import { fontResolver } from "utils";

describe("font utility", () => {
  test("returns empty string for falsy values", () => {
    expect(fontResolver()).toBe("");
    expect(fontResolver({})).toBe("");
    expect(fontResolver(null)).toBe("");
    expect(fontResolver(undefined)).toBe("");
    expect(fontResolver(true)).toBe("");
    expect(fontResolver(false)).toBe("");
  });

  test("applies fs from number", () => {
    expect(fontResolver(1)).toBe("fs-1");
    expect(fontResolver(2)).toBe("fs-2");
    expect(fontResolver(3)).toBe("fs-3");
    expect(fontResolver(4)).toBe("fs-4");
    expect(fontResolver(5)).toBe("fs-5");
    expect(fontResolver(6)).toBe("fs-6");
  });

  test("applies fs from object", () => {
    expect(fontResolver({ fs: 1 })).toBe("fs-1");
    expect(fontResolver({ fs: 2 })).toBe("fs-2");
    expect(fontResolver({ fs: 3 })).toBe("fs-3");
    expect(fontResolver({ fs: 4 })).toBe("fs-4");
    expect(fontResolver({ fs: 5 })).toBe("fs-5");
    expect(fontResolver({ fs: 6 })).toBe("fs-6");
  });

  test("applies fw from object", () => {
    expect(fontResolver({ fw: "bold" })).toBe("fw-bold");
    expect(fontResolver({ fw: "bolder" })).toBe("fw-bolder");
    expect(fontResolver({ fw: "normal" })).toBe("fw-normal");
    expect(fontResolver({ fw: "light" })).toBe("fw-light");
    expect(fontResolver({ fw: "lighter" })).toBe("fw-lighter");
  });

  test("applies fst from object", () => {
    expect(fontResolver({ fst: "italic" })).toBe("fst-italic");
    expect(fontResolver({ fst: "normal" })).toBe("fst-normal");
  });

  test("applies line height from object", () => {
    expect(fontResolver({ lh: 1 })).toBe("lh-1");
    expect(fontResolver({ lh: "sm" })).toBe("lh-sm");
    expect(fontResolver({ lh: "base" })).toBe("lh-base");
    expect(fontResolver({ lh: "lg" })).toBe("lh-lg");
  });

  test("applies monospace from object", () => {
    expect(fontResolver({ monospace: true })).toBe("font-monospace");
    expect(fontResolver({ monospace: false })).toBe("");
  });
});
