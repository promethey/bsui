import { check } from "./check";

describe("Check utility", () => {
  describe("Basic function", () => {
    test("Check string", () => {
      expect(check("string", "str1", "str2", "str3")).toBe(true);
    });
    test("Check number", () => {
      expect(check("number", 1, 2, 3)).toBe(true);
    });
    test("Check number and string", () => {
      expect(check("number", 1, "2", 3)).toBe(false);
    });
  });
});
