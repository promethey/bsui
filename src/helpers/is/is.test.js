import { is } from "./is";

describe("is - string", () => {
  test("valid string", () => {
    expect(is("string", "hello")).toBe(true);
  });

  test("empty string allowed by default", () => {
    expect(is("string", "  ")).toBe(true);
  });

  test("notEmpty trims spaces", () => {
    expect(is("string", "  ", { notEmpty: true })).toBe(false);
  });

  test("not a string", () => {
    expect(is("string", 123)).toBe(false);
  });
});

describe("is - number", () => {
  test("valid number", () => {
    expect(is("number", 123)).toBe(true);
  });

  test("zero is valid", () => {
    expect(is("number", 0)).toBe(true);
  });

  test("NaN is not valid", () => {
    expect(is("number", NaN)).toBe(false);
  });

  test("string is invalid", () => {
    expect(is("number", "123")).toBe(false);
  });
});

describe("is - object", () => {
  test("valid object", () => {
    expect(is("object", { a: 1 })).toBe(true);
  });

  test("empty object allowed by default", () => {
    expect(is("object", {})).toBe(true);
  });

  test("notEmpty rejects empty object", () => {
    expect(is("object", {}, { notEmpty: true })).toBe(false);
  });

  test("array is invalid", () => {
    expect(is("object", [])).toBe(false);
  });
});

describe("is - array", () => {
  test("valid array", () => {
    expect(is("array", [1, 2, 3])).toBe(true);
  });

  test("empty array allowed by default", () => {
    expect(is("array", [])).toBe(true);
  });

  test("notEmpty rejects empty array", () => {
    expect(is("array", [], { notEmpty: true })).toBe(false);
  });

  test("object is invalid", () => {
    expect(is("array", {})).toBe(false);
  });
});

describe("is - edge cases", () => {
  test("unsupported type", () => {
    expect(is("boolean", true)).toBe(false);
  });

  test("undefined value", () => {
    expect(is("string", undefined)).toBe(false);
  });

  test("null string check", () => {
    expect(is("string", null)).toBe(false);
  });
});
