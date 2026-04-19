import { bg } from "./bg.js";

describe("background utility", () => {
  test("returns empty string for falsy values", () => {
    expect(bg()).toBe("");
    expect(bg({})).toBe("");
    expect(bg(null)).toBe("");
    expect(bg(undefined)).toBe("");
    expect(bg(true)).toBe("");
    expect(bg(false)).toBe("");
  });

  test("returns correct class for string value", () => {
    expect(bg("primary")).toBe("bg-primary");
    expect(bg("secondary")).toBe("bg-secondary");
    expect(bg("success")).toBe("bg-success");
    expect(bg("danger")).toBe("bg-danger");
    expect(bg("warning")).toBe("bg-warning");
    expect(bg("info")).toBe("bg-info");
    expect(bg("light")).toBe("bg-light");
    expect(bg("dark")).toBe("bg-dark");
    expect(bg("body")).toBe("bg-body");
    expect(bg("white")).toBe("bg-white");
    expect(bg("transparent")).toBe("bg-transparent");
  });

  test("ignores invalid string, false, incorrect values", () => {
    expect(bg("invalid")).toBe("");
    expect(bg({ color: "invalid" })).toBe("");
    expect(bg({ gradient: false })).toBe("");
    expect(bg({ opacity: 5 })).toBe("");
  });

  test("handles color object", () => {
    const colors = [
      "primary",
      "secondary",
      "success",
      "danger",
      "warning",
      "info",
      "light",
      "dark",
      "body",
      "white",
      "transparent",
    ];

    colors.map((color) => {
      expect(bg({ color })).toBe(`bg-${color}`);
    })
  });

  test("ignores invalid color value", () => {
    expect(bg({ color: "pink" })).toBe("");
  });

  test("handles gradient flag", () => {
    expect(bg({ gradient: true })).toBe("bg-gradient");
    expect(bg({ gradient: false })).toBe("");
  });

  test("handles opacity value", () => {
    expect(bg({ opacity: 10 })).toBe("bg-opacity-10");
    expect(bg({ opacity: 75 })).toBe("bg-opacity-75");
  });

  test("ignores invalid opacity value", () => {
    expect(bg({ opacity: 30 })).toBe("");
    expect(bg({ opacity: 100 })).toBe("");
  });

  test("handles full background config", () => {
    expect(bg({ color: "primary", gradient: true, opacity: 10 })).toBe(
      "bg-primary bg-gradient bg-opacity-10",
    );
  });

  test("order of properties does not matter", () => {
    expect(bg({ opacity: 25, color: "success", gradient: true })).toBe(
      "bg-opacity-25 bg-success bg-gradient",
    );
  });

  test("ignores unknown properties", () => {
    expect(bg({ color: "primary", grdnt: true, foo: "bar" })).toBe(
      "bg-primary",
    );
  });

  test("returns empty string for unsupported types", () => {
    expect(bg(123)).toBe("");
    expect(bg([])).toBe("");
    expect(bg(() => {})).toBe("");
  });
});
