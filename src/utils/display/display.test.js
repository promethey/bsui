import { display, displayPrint } from "./display";

describe("display utility", () => {
  test("returns empty string for falsy values (display)", () => {
    expect(display()).toBe("");
    expect(display({})).toBe("");
    expect(display(null)).toBe("");
    expect(display(undefined)).toBe("");
    expect(display(true)).toBe("");
    expect(display(false)).toBe("");
  });

  test("returns empty string for falsy values (display print)", () => {
    expect(displayPrint()).toBe("");
    expect(displayPrint({})).toBe("");
    expect(displayPrint(null)).toBe("");
    expect(displayPrint(undefined)).toBe("");
    expect(displayPrint(true)).toBe("");
    expect(displayPrint(false)).toBe("");
  });

  test("applies display size from number (display)", () => {
    expect(display(3)).toBe("");
    expect(display(1)).toBe("");
  });

  test("applies display size from number (display print)", () => {
    expect(displayPrint(3)).toBe("");
    expect(displayPrint(1)).toBe("");
  });

  test("ignores invalid values", () => {
    expect(display(0)).toBe("");
    expect(display(7)).toBe("");
    expect(display("flex-block")).toBe("");
    expect(display("flex-grid")).toBe("");
  });

  test("applies size from object (display)", () => {
    expect(display("flex")).toBe("d-flex");
    expect(display("inline")).toBe("d-inline");
    expect(display("inline-flex")).toBe("d-inline-flex");
  });

  test("applies size from object (display print)", () => {
    expect(displayPrint("flex")).toBe("d-print-flex");
    expect(displayPrint("inline")).toBe("d-print-inline");
    expect(displayPrint("inline-flex")).toBe("d-print-inline-flex");
  });

  test("display breakpoints (display)", () => {
    expect(display({ xs: "inline", md: "flex" })).toBe("d-inline d-md-flex");
    expect(display({ fs: "inline", md: "flex" })).toBe("d-md-flex");
  });

  test("display breakpoints (display print)", () => {
    expect(displayPrint({ xs: "inline", md: "flex" })).toBe("d-print-inline d-print-md-flex");
    expect(displayPrint({ fs: "inline", md: "flex" })).toBe("d-print-md-flex");
  });

  test("display breakpoints with invalid values", () => {
    expect(display({ xs: "flex-grid", md: "flex" })).toBe("d-md-flex");
    expect(display({ fs: "inline", md: "grid-flex", xl: "flex" })).toBe(
      "d-xl-flex",
    );
  });
});
