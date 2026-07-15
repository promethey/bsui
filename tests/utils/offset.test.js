// @ts-nocheck
import { describe, expect, it } from "vitest";
import { offsetResolver } from "utils";

describe("offsetResolver", () => {
  describe("number", () => {
    it("returns offset class", () => {
      expect(offsetResolver(0)).toBe("offset-0");
      expect(offsetResolver(3)).toBe("offset-3");
      expect(offsetResolver(6)).toBe("offset-6");
    });

    it("returns empty string for invalid value", () => {
      expect(offsetResolver(-1)).toBe("");
      expect(offsetResolver(100)).toBe("");
    });
  });

  describe("responsive object", () => {
    it("returns responsive offset classes", () => {
      expect(
        offsetResolver({
          xs: 0,
          md: 3,
        }),
      ).toBe("offset-0 offset-md-3");
    });

    it("returns multiple responsive classes", () => {
      expect(
        offsetResolver({
          sm: 2,
          lg: 5,
          xxl: 1,
        }),
      ).toBe("offset-sm-2 offset-lg-5 offset-xxl-1");
    });

    it("ignores invalid breakpoints", () => {
      expect(
        offsetResolver({
          abc: 2,
          md: 3,
        }),
      ).toBe("offset-md-3");
    });

    it("ignores invalid values", () => {
      expect(
        offsetResolver({
          xs: 10,
          md: 3,
          lg: -1,
        }),
      ).toBe("offset-10 offset-md-3");
    });

    it("returns empty string for empty object", () => {
      expect(offsetResolver({})).toBe("");
    });
  });

  describe("invalid input", () => {
    it("returns empty string for null", () => {
      expect(offsetResolver(null)).toBe("");
    });

    it("returns empty string for undefined", () => {
      expect(offsetResolver(undefined)).toBe("");
    });

    it("returns empty string for string", () => {
      expect(offsetResolver("3")).toBe("");
    });

    it("returns empty string for boolean", () => {
      expect(offsetResolver(true)).toBe("");
      expect(offsetResolver(false)).toBe("");
    });

    it("returns empty string for array", () => {
      expect(offsetResolver([1, 2])).toBe("");
    });
  });
});
