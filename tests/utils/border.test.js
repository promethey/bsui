// @ts-nocheck
import { borderResolver } from "utils";

describe("border()", () => {
  test("regular border", () => {
    expect(borderResolver(true)).toBe("border");
  });

  test("border aspects", () => {
    expect(borderResolver({ top: true })).toBe("border-top");
    expect(borderResolver({ end: true })).toBe("border-end");
    expect(borderResolver({ bottom: true })).toBe("border-bottom");
    expect(borderResolver({ start: true })).toBe("border-start");
  });

  test("border width", () => {
    const values = [1, 2, 3, 4, 5];

    values.forEach((value) => {
      expect(borderResolver(value)).toBe("border border-" + value);
    });
  });

  test("border ignore unsupported width", () => {
    const values = [6, 7, 0];

    values.forEach((value) => {
      expect(borderResolver(value)).toBe("");
    });
  });

  test("border colors", () => {
    const colors = [
      "primary",
      "secondary",
      "success",
      "danger",
      "warning",
      "info",
      "light",
      "dark",
      "white",
    ];

    colors.forEach((color) => {
      expect(borderResolver(color)).toBe("border border-" + color);
    });
  });

  test("border colors (object)", () => {
    const colors = [
      "primary",
      "secondary",
      "success",
      "danger",
      "warning",
      "info",
      "light",
      "dark",
      "white",
    ];

    colors.forEach((color) => {
      expect(borderResolver({ color: color })).toBe("border border-" + color);
    });
  });

  test("border top true", () => {
    expect(borderResolver({ color: "primary", top: true })).toBe(
      "border-primary border-top",
    );
  });

  test("border top true", () => {
    expect(borderResolver({ color: "primary", top: 0 })).toBe(
      "border-primary border-top-0",
    );
  });

  test("primary border with other props", () => {
    expect(borderResolver({ color: "primary", width: 1, top: 0 })).toBe(
      "border-primary border-1 border-top-0",
    );
  });

  test("ignore unsupported properties", () => {
    expect(borderResolver({ colorr: "primary", w: 1, center: 0 })).toBe("");
  });
});
