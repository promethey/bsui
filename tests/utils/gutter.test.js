// @ts-nocheck
import { gutterResolver } from "utils";

describe("gutterResolver utility", () => {
  test("returns empty string for falsy values", () => {
    expect(gutterResolver()).toBe("");
    expect(gutterResolver({})).toBe("");
    expect(gutterResolver(null)).toBe("");
    expect(gutterResolver(undefined)).toBe("");
    expect(gutterResolver(true)).toBe("");
    expect(gutterResolver(false)).toBe("");
  });

  test("valid values", () => {
    expect(gutterResolver({ g: 5, gx: 2, gy: 0 })).toBe("g-5 gx-2 gy-0");
    expect(
      gutterResolver({ g: { xs: 2, md: 3 }, gx: { xl: 3 }, gy: { xxl: 1 } }),
    ).toBe("g-2 g-md-3 gx-xl-3 gy-xxl-1");
  });
});
