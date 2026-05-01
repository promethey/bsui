import { equal } from "./equal";

describe("equal", () => {
  test("strings - true", () => {
    expect(equal("value", "value")).toBe(true);
  });

  test("strings - false", () => {
    expect(equal("value1", "value2")).toBe(false);
  });

  test("numbers - true", () => {
    expect(equal(123, 123)).toBe(true);
  });

  test("numbers - false", () => {
    expect(equal(123, 1234)).toBe(false);
  });

  test("boolean - true", () => {
    expect(equal(true, true)).toBe(true);
  });

  test("boolean - false", () => {
    expect(equal(true, false)).toBe(false);
  });

  test("null and undefined - false", () => {
    expect(equal(null, undefined)).toBe(false);
  });
});
