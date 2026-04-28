import { border } from "./border";

describe("border()", () => {
  test("regular border", () => {
    expect(border(true)).toBe("border");
  });

  test("border aspects", () => {
    const aspects = ["top", "end", "bottom", "start"];

    aspects.forEach((aspect) => {
      expect(border(aspect)).toBe("border-" + aspect);
    });
  });

  test("border width", () => {
    const values = [1, 2, 3, 4, 5];

    values.forEach((value) => {
      expect(border(value)).toBe("border border-" + value);
    });
  });

  test("border ignore unsupported width", () => {
    const values = [6, 7, 0];

    values.forEach((value) => {
      expect(border(value)).toBe("");
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
      expect(border({ color: color })).toBe("border border-" + color);
    });
  });

  test("border top", () => {
    expect(border({ top: true })).toBe("border-top");
  });

  test("primary border with other props", () => {
    expect(border({ color: "primary", width: 1, top: 0 })).toBe(
      "border border-primary border-1 border-top-0",
    );
  });

  test("ignore unsupported properties", () => {
    expect(border({ colorr: "primary", w: 1, center: 0 })).toBe("");
  });
});
