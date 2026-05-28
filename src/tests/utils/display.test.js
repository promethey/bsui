// @ts-nocheck
import { displayResolver, displayPrintResolver } from "./display";

describe("display utility", () => {
  test("returns empty string for falsy values (display)", () => {
    expect(displayResolver()).toBe("");
    expect(displayResolver({})).toBe("");
    expect(displayResolver(null)).toBe("");
    expect(displayResolver(undefined)).toBe("");
    expect(displayResolver(true)).toBe("");
    expect(displayResolver(false)).toBe("");
  });

  test("returns empty string for falsy values (display print)", () => {
    expect(displayPrintResolver()).toBe("");
    expect(displayPrintResolver({})).toBe("");
    expect(displayPrintResolver(null)).toBe("");
    expect(displayPrintResolver(undefined)).toBe("");
    expect(displayPrintResolver(true)).toBe("");
    expect(displayPrintResolver(false)).toBe("");
  });

  test("applies display size from number (display)", () => {
    expect(displayResolver(3)).toBe("");
    expect(displayResolver(1)).toBe("");
  });

  test("applies display size from number (display print)", () => {
    expect(displayPrintResolver(3)).toBe("");
    expect(displayPrintResolver(1)).toBe("");
  });

  test("ignores invalid values", () => {
    expect(displayResolver(0)).toBe("");
    expect(displayResolver(7)).toBe("");
    expect(displayResolver("flex-block")).toBe("");
    expect(displayResolver("flex-grid")).toBe("");
  });

  test("applies size from object (display)", () => {
    expect(displayResolver("flex")).toBe("d-flex");
    expect(displayResolver("inline")).toBe("d-inline");
    expect(displayResolver("inline-flex")).toBe("d-inline-flex");
  });

  test("applies size from object (display print)", () => {
    expect(displayPrintResolver("flex")).toBe("d-print-flex");
    expect(displayPrintResolver("inline")).toBe("d-print-inline");
    expect(displayPrintResolver("inline-flex")).toBe("d-print-inline-flex");
  });

  test("display breakpoints (display)", () => {
    expect(displayResolver({ xs: "inline", md: "flex" })).toBe(
      "d-inline d-md-flex",
    );
    expect(displayResolver({ fs: "inline", md: "flex" })).toBe("d-md-flex");
  });

  test("display breakpoints (display print)", () => {
    expect(displayPrintResolver({ xs: "inline", md: "flex" })).toBe(
      "d-print-inline d-print-md-flex",
    );
    expect(displayPrintResolver({ fs: "inline", md: "flex" })).toBe(
      "d-print-md-flex",
    );
  });

  test("display breakpoints with invalid values", () => {
    expect(displayResolver({ xs: "flex-grid", md: "flex" })).toBe("d-md-flex");
    expect(displayResolver({ fs: "inline", md: "grid-flex", xl: "flex" })).toBe(
      "d-xl-flex",
    );
  });
});
