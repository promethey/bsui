import { everyType } from "./everyType";

describe("Check utility", () => {
  describe("Basic function", () => {
    test("Check string", () => {
      expect(everyType("string", "str1", "str2", "str3")).toBe(true);
    });
    test("Check number", () => {
      expect(everyType("number", 1, 2, 3)).toBe(true);
    });
    test("Check number", () => {
      expect(!everyType("number", 1, 2, 3)).toBe(false);
    });
    test("Check number and string", () => {
      expect(everyType("number", 1, "2", 3)).toBe(false);
    });
  });
});
