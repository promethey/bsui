import { background } from "./bg.js";

describe("background utility", () => {
  test("returns empty string for falsy values", () => {
    expect(background()).toBe("");
    expect(background({})).toBe("");
    expect(background(null)).toBe("");
    expect(background(undefined)).toBe("");
    expect(background(true)).toBe("");
    expect(background(false)).toBe("");
  });

  test("returns correct class for string value", () => {
    expect(background("primary")).toBe("bg-primary");
    expect(background("secondary")).toBe("bg-secondary");
    expect(background("success")).toBe("bg-success");
    expect(background("danger")).toBe("bg-danger");
    expect(background("warning")).toBe("bg-warning");
    expect(background("info")).toBe("bg-info");
    expect(background("light")).toBe("bg-light");
    expect(background("dark")).toBe("bg-dark");
    expect(background("body")).toBe("bg-body");
    expect(background("white")).toBe("bg-white");
    expect(background("transparent")).toBe("bg-transparent");
  });

  test("ignores invalid string, false, incorrect values", () => {
    expect(background("invalid")).toBe("");
    expect(background({ color: "invalid" })).toBe("");
    expect(background({ gradient: false })).toBe("");
    expect(background({ opacity: 5 })).toBe("");
  });

  test("handles color object", () => {
    expect(background({ color: "primary" })).toBe("bg-primary");
    expect(background({ color: "secondary" })).toBe("bg-secondary");
    expect(background({ color: "success" })).toBe("bg-success");
    expect(background({ color: "danger" })).toBe("bg-danger");
    expect(background({ color: "warning" })).toBe("bg-warning");
    expect(background({ color: "info" })).toBe("bg-info");
    expect(background({ color: "light" })).toBe("bg-light");
    expect(background({ color: "dark" })).toBe("bg-dark");
    expect(background({ color: "body" })).toBe("bg-body");
    expect(background({ color: "white" })).toBe("bg-white");
    expect(background({ color: "transparent" })).toBe("bg-transparent");
  });

  test("ignores invalid color value", () => {
    expect(background({ color: "pink" })).toBe("");
  });

  test("handles gradient flag", () => {
    expect(background({ gradient: true })).toBe("bg-gradient");
    expect(background({ gradient: false })).toBe("");
  });

  test("handles opacity value", () => {
    expect(background({ opacity: 10 })).toBe("bg-opacity-10");
    expect(background({ opacity: 75 })).toBe("bg-opacity-75");
  });

  test("ignores invalid opacity value", () => {
    expect(background({ opacity: 30 })).toBe("");
    expect(background({ opacity: 100 })).toBe("");
  });

  test("handles full background config", () => {
    expect(background({ color: "primary", gradient: true, opacity: 10 })).toBe(
      "bg-primary bg-gradient bg-opacity-10",
    );
  });

  test("order of properties does not matter", () => {
    expect(background({ opacity: 25, color: "success", gradient: true })).toBe(
      "bg-opacity-25 bg-success bg-gradient",
    );
  });

  test("ignores unknown properties", () => {
    expect(background({ color: "primary", grdnt: true, foo: "bar" })).toBe(
      "bg-primary",
    );
  });

  test("returns empty string for unsupported types", () => {
    expect(background(123)).toBe("");
    expect(background([])).toBe("");
    expect(background(() => {})).toBe("");
  });
});
