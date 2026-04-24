import { display } from "./display";

describe("display utility", () => {
  test("returns empty string for falsy values", () => {
    expect(display()).toBe("");
    expect(display({})).toBe("");
    expect(display(null)).toBe("");
    expect(display(undefined)).toBe("");
    expect(display(true)).toBe("");
    expect(display(false)).toBe("");
  });

  test("applies display size from number", () => {
    expect(display(3)).toBe("");
    expect(display(1)).toBe("");
  });

  test("ignores invalid values", () => {
    expect(display(0)).toBe("");
    expect(display(7)).toBe("");
    expect(display("flex-block")).toBe("");
    expect(display("flex-grid")).toBe("");
  });

  test("applies size from object", () => {
    expect(display("flex")).toBe("d-flex");
    expect(display("inline")).toBe("d-inline");
    expect(display("inline-flex")).toBe("d-inline-flex");
  });

  test("display breakpoints", () => {
    expect(display({ xs: "inline", md: "flex" })).toBe("d-inline d-md-flex");
    expect(display({ fs: "inline", md: "flex" })).toBe("d-md-flex");
  });

  test("display breakpoints with invalid values", () => {
    expect(display({ xs: "flex-grid", md: "flex" })).toBe("d-md-flex");
    expect(display({ fs: "inline", md: "grid-flex", xl: "flex" })).toBe(
      "d-xl-flex",
    );
  });
});
