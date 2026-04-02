import { text } from "./text";

describe("text utility", () => {
  test("returns empty string for falsy values", () => {
    expect(text()).toBe("");
    expect(text({})).toBe("");
    expect(text(null)).toBe("");
    expect(text(undefined)).toBe("");
    expect(text(true)).toBe("");
    expect(text(false)).toBe("");
  });

  test("applies text color from string", () => {
    expect(text("primary")).toBe("text-primary");
    expect(text("danger")).toBe("text-danger");
  });

  test("ignores invalid string values", () => {
    expect(text("invalid")).toBe("");
    expect(text("foo")).toBe("");
  });

  test("applies color from object", () => {
    expect(text({ color: "success" })).toBe("text-success");
  });

  test("applies align from string", () => {
    expect(text({ align: "start" })).toBe("text-start");
    expect(text({ align: "center" })).toBe("text-center");
  });

  test("applies responsive align", () => {
    const result = text({
      align: { xs: "start", md: "center", lg: "end" },
    });

    expect(result).toContain("text-start"); // xs
    expect(result).toContain("text-md-center");
    expect(result).toContain("text-lg-end");
  });

  test("applies break utility", () => {
    expect(text({ break: true })).toBe("text-break");
  });

  test("ignores break when false", () => {
    expect(text({ break: false })).toBe("");
  });

  test("applies text transform", () => {
    expect(text({ transform: "lowercase" })).toBe("text-lowercase");
    expect(text({ transform: "uppercase" })).toBe("text-uppercase");
    expect(text({ transform: "capitalize" })).toBe("text-capitalize");
  });

  test("applies text decoration", () => {
    expect(text({ decoration: "underline" })).toBe("text-decoration-underline");
    expect(text({ decoration: "line-through" })).toBe(
      "text-decoration-line-through",
    );
  });

  test("applies multiple text utilities together", () => {
    const result = text({
      color: "primary",
      align: "start",
      break: true,
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
      text({
        color: "danger",
        foo: "bar",
        brk: true,
      }),
    ).toBe("text-danger");
  });

  test("ignores invalid values inside object", () => {
    expect(
      text({
        color: "invalid",
        align: "wrong",
        transform: "foo",
      }),
    ).toBe("");
  });
});
