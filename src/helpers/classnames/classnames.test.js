// @ts-nocheck
import { classnames } from "./classnames";

describe("classnames function", () => {
  describe("Invalid inputs", () => {
    test("returns null for missing or invalid parameters", () => {
      expect(classnames()).toBe("");
      expect(classnames("")).toBe("");
      expect(classnames(" ")).toBe("");
      expect(classnames(null)).toBe("");
      expect(classnames("btn")).toBe("");
      expect(classnames(123, "primary")).toBe("");
      expect(classnames("btn", {})).toBe("");
      expect(classnames("d", null)).toBe("");
    });
  });

  describe("Boolean classNames", () => {
    test("returns prefix for true, null for false", () => {
      expect(classnames("btn", true)).toBe("btn");
      expect(classnames("flex", true)).toBe("flex");
      expect(classnames("btn", false)).toBe("");
    });
  });

  describe("String or number classNames", () => {
    test("simple concatenation without prefixInsertBetween", () => {
      expect(classnames("btn", "primary")).toBe("btn-primary");
      expect(classnames("col", 3)).toBe("col-3");
      expect(classnames("flex-fill", "sm")).toBe("flex-fill-sm");
    });

    test("inserts between prefix parts with prefixInsertBetween", () => {
      expect(classnames("flex-fill", "sm", { prefixInsertBetween: true })).toBe(
        "flex-sm-fill",
      );
      expect(
        classnames("flex-wrap-reverse", "md", { prefixInsertBetween: true }),
      ).toBe("flex-md-wrap-reverse");
    });
  });

  describe("Object classNames (responsive)", () => {
    test("generates responsive classes without prefixInsertBetween", () => {
      expect(classnames("d", { xs: "none", sm: "block", md: "flex" })).toBe(
        "d-none d-sm-block d-md-flex",
      );
      expect(classnames("text", { sm: "center", lg: "right" })).toBe(
        "text-sm-center text-lg-right",
      );
    });

    test("generates responsive classes with prefixInsertBetween", () => {
      expect(classnames("flex", { xs: "nowrap", md: "wrap" })).toBe(
        "flex-nowrap flex-md-wrap",
      );
    });
  });

  describe("Breakpoint handling", () => {
    test("handles all breakpoints (xs, sm, md, lg, xl, xxl)", () => {
      const result = classnames("d", {
        xs: "none",
        sm: "block",
        md: "flex",
        lg: "inline-flex",
        xl: "grid",
        xxl: "table",
      });
      expect(result).toBe(
        "d-none d-sm-block d-md-flex d-lg-inline-flex d-xl-grid d-xxl-table",
      );
    });

    test("ignores non-breakpoint keys in object", () => {
      expect(
        classnames("d", { xs: "block", custom: "value", another: "test" }),
      ).toBe("d-block");
    });
  });

  describe("Breakpoints with boolean values", () => {
    test("boolean breakpoints", () => {
      expect(
        classnames(
          "flex-fill",
          { xs: true, sm: false, md: true },
          { prefixInsertBetween: true },
        ),
      ).toBe("flex-fill flex-md-fill");
    });
  });
});
