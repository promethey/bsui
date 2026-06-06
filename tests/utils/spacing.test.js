// @ts-nocheck
import { spacingResolver } from "utils";

describe("Function spacingResolver", () => {
  describe("Basic functionality", () => {
    test("Margin simple", () => {
      expect(spacingResolver({ m: 3 })).toBe("m-3");
    });

    test("Padding simple", () => {
      expect(spacingResolver({ p: 3 })).toBe("p-3");
    });

    test("Object prop", () => {
      expect(spacingResolver({ m: { xs: 3, lg: 3 } })).toBe("m-3 m-lg-3");
    });

    test("Object unsupported prop", () => {
      expect(spacingResolver({ m: { xss: 3, lg: 3 } })).toBe("m-lg-3");
    });

    test("Margin X and Y", () => {
      expect(spacingResolver({ m: [1, 2] })).toBe("mx-1 my-2");
    });

    test("Margin top, end, bottom, start", () => {
      expect(spacingResolver({ m: [1, 2, 3, 4] })).toBe("mt-1 me-2 mb-3 ms-4");
    });

    test("Padding X and Y", () => {
      expect(spacingResolver({ p: [1, 2] })).toBe("px-1 py-2");
    });

    test("Padding top, end, bottom, start", () => {
      expect(spacingResolver({ p: [1, 2, 3, 4] })).toBe("pt-1 pe-2 pb-3 ps-4");
    });
  });
});
