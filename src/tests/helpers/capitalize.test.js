// @ts-nocheck
import { capitalize } from "helpers";

describe("capitalize()", () => {
  test("handles various input cases correctly", () => {
    const cases = [
      { input: "hello", expected: "Hello" },
      { input: "Hello", expected: "Hello" },
      { input: "a", expected: "A" },
      { input: "", expected: "" },
      { input: "hELLO", expected: "HELLO" },
      { input: "1hello", expected: "1hello" },
      { input: " hello", expected: " hello" },
      { input: undefined, expected: "" },
      { input: null, expected: "" },
    ];

    cases.forEach(({ input, expected }) => {
      expect(capitalize(input)).toBe(expected);
    });
  });
});
