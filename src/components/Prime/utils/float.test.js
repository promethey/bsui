// @ts-nocheck
import { floatResolver } from "./float";

describe("float utility", () => {
  test("returns empty string for falsy values", () => {
    expect(floatResolver()).toBe("");
    expect(floatResolver({})).toBe("");
    expect(floatResolver(null)).toBe("");
    expect(floatResolver(undefined)).toBe("");
    expect(floatResolver(true)).toBe("");
    expect(floatResolver(false)).toBe("");
  });

  test("ignores invalid values", () => {
    expect(floatResolver(0)).toBe("");
    expect(floatResolver(7)).toBe("");
    expect(floatResolver("started")).toBe("");
    expect(floatResolver("ends")).toBe("");
  });

  test("applies floating from string", () => {
    expect(floatResolver("start")).toBe("float-start");
    expect(floatResolver("end")).toBe("float-end");
    expect(floatResolver("none")).toBe("float-none");
  });

  test("float breakpoints", () => {
    expect(floatResolver({ xs: "start", md: "end" })).toBe(
      "float-start float-md-end",
    );
    expect(floatResolver({ fs: "inline", md: "none" })).toBe("float-md-none");
  });
});
