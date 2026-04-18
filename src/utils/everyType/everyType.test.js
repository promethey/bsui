import { everyType } from "./everyType";

describe("Every type utility", () => {
  describe("Basic function", () => {
    test("Type string", () => {
      expect(everyType("string", "str1", "str2", "str3")).toBe(true);
    });
    test("Type number", () => {
      expect(everyType("number", 1, 2, 3)).toBe(true);
    });
    test("Type number", () => {
      expect(!everyType("number", 1, 2, 3)).toBe(false);
    });
    test("Type number and string", () => {
      expect(everyType("number", 1, "2", 3)).toBe(false);
    });
  });
});
