import { float } from "./float";

describe("float utility", () => {
  test("returns empty string for falsy values", () => {
    expect(float()).toBe("");
    expect(float({})).toBe("");
    expect(float(null)).toBe("");
    expect(float(undefined)).toBe("");
    expect(float(true)).toBe("");
    expect(float(false)).toBe("");
  });

  test("ignores invalid values", () => {
    expect(float(0)).toBe("");
    expect(float(7)).toBe("");
    expect(float("started")).toBe("");
    expect(float("ends")).toBe("");
  });

  test("applies floating from string", () => {
    expect(float("start")).toBe("float-start");
    expect(float("end")).toBe("float-end");
    expect(float("none")).toBe("float-none");
  });

  test("float breakpoints", () => {
    expect(float({ xs: "start", md: "end" })).toBe("float-start float-md-end");
    expect(float({ fs: "inline", md: "none" })).toBe("float-md-none");
  });
});
