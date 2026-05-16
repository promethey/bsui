// @ts-nocheck
import { bgResolver } from "./bg";

describe("background utility", () => {
  test("returns empty string for unsupported values", () => {
    expect(bgResolver()).toBe("");
    expect(bgResolver({})).toBe("");
    expect(bgResolver(null)).toBe("");
    expect(bgResolver(undefined)).toBe("");
    expect(bgResolver(true)).toBe("");
    expect(bgResolver(false)).toBe("");
    expect(bgResolver(123)).toBe("");
    expect(bgResolver([])).toBe("");
    expect(bgResolver(() => {})).toBe("");
  });

  test("returns correct class for string value", () => {
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
      expect(bgResolver(color)).toBe(`bg-${color}`);
    });
  });

  test("ignores invalid string, false, incorrect values", () => {
    expect(bgResolver("invalid")).toBe("");
    expect(bgResolver({ color: "invalid" })).toBe("");
    expect(bgResolver({ gradient: false })).toBe("");
    expect(bgResolver({ opacity: 5 })).toBe("");
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
      expect(bgResolver({ color })).toBe(`bg-${color}`);
    });
  });

  test("ignores invalid color value", () => {
    expect(bgResolver({ color: "pink" })).toBe("");
  });

  test("handles gradient flag", () => {
    expect(bgResolver({ gradient: true })).toBe("bg-gradient");
    expect(bgResolver({ gradient: false })).toBe("");
  });

  test("handles opacity value", () => {
    expect(bgResolver({ opacity: 10 })).toBe("bg-opacity-10");
    expect(bgResolver({ opacity: 75 })).toBe("bg-opacity-75");
  });

  test("ignores invalid opacity value", () => {
    expect(bgResolver({ opacity: 30 })).toBe("");
    expect(bgResolver({ opacity: 100 })).toBe("");
  });

  test("handles full background config", () => {
    expect(bgResolver({ color: "primary", gradient: true, opacity: 10 })).toBe(
      "bg-primary bg-gradient bg-opacity-10",
    );
  });

  test("order of properties does not matter", () => {
    expect(bgResolver({ opacity: 25, color: "success", gradient: true })).toBe(
      "bg-opacity-25 bg-success bg-gradient",
    );
  });

  test("ignores unknown properties", () => {
    expect(bgResolver({ color: "primary", grdnt: true, foo: "bar" })).toBe(
      "bg-primary",
    );
  });
});
