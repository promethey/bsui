// @ts-nocheck
import { textResolver } from "./text";

describe("textResolver utility", () => {
  test("returns empty string for falsy values", () => {
    expect(textResolver()).toBe("");
    expect(textResolver({})).toBe("");
    expect(textResolver(null)).toBe("");
    expect(textResolver(undefined)).toBe("");
    expect(textResolver(true)).toBe("");
    expect(textResolver(false)).toBe("");
  });

  test("applies textResolver color from string", () => {
    expect(textResolver("primary")).toBe("text-primary");
    expect(textResolver("danger")).toBe("text-danger");
  });

  test("ignores invalid string values", () => {
    expect(textResolver("invalid")).toBe("");
    expect(textResolver("foo")).toBe("");
  });

  test("applies color from object", () => {
    expect(textResolver({ color: "success" })).toBe("text-success");
  });

  test("applies align from string", () => {
    expect(textResolver({ align: "start" })).toBe("text-start");
    expect(textResolver({ align: "center" })).toBe("text-center");
  });

  test("applies responsive align", () => {
    const result = textResolver({
      align: { xs: "start", md: "center", lg: "end" },
    });

    expect(textResolver({ align: "center" })).toBe("text-center");
    expect(result).toContain("text-md-center");
    expect(result).toContain("text-lg-end");
  });

  test("applies word break utility", () => {
    expect(textResolver({ wordBreak: true })).toBe("text-break");
  });

  test("ignores word break when false", () => {
    expect(textResolver({ wordBreak: false })).toBe("");
  });

  test("applies textResolver transform", () => {
    expect(textResolver({ transform: "lowercase" })).toBe("text-lowercase");
    expect(textResolver({ transform: "uppercase" })).toBe("text-uppercase");
    expect(textResolver({ transform: "capitalize" })).toBe("text-capitalize");
  });

  test("applies textResolver decoration", () => {
    expect(textResolver({ decoration: "underline" })).toBe(
      "text-decoration-underline",
    );
    expect(textResolver({ decoration: "line-through" })).toBe(
      "text-decoration-line-through",
    );
  });

  test("applies multiple textResolver utilities together", () => {
    const result = textResolver({
      color: "primary",
      align: "start",
      wordBreak: true,
      transform: "lowercase",
      decoration: "underline",
    });

    expect(result).toContain("text-primary");
    expect(result).toContain("text-start");
    expect(result).toContain("text-break");
    expect(result).toContain("text-lowercase");
    expect(result).toContain("text-decoration-underline");
  });

  test("ignores unknown properties", () => {
    expect(
      textResolver({
        color: "danger",
        foo: "bar",
        brk: true,
      }),
    ).toBe("text-danger");
  });

  test("ignores invalid values inside object", () => {
    expect(
      textResolver({
        color: "invalid",
        align: "wrong",
        transform: "foo",
      }),
    ).toBe("");
  });
});
