import { spacing } from "utils/spacing";

describe("Function spacing", () => {
  describe("Basic functionality", () => {
    test("Margin simple", () => {
      expect(spacing("m", 3)).toBe("m-3");
    });
    test("Object prop", () => {
      expect(spacing("m", { xs: 3, lg: 3 })).toBe("m-3 m-lg-3");
    });
    test("Margin X and Y", () => {
      expect(spacing("m", [1, 2])).toBe("mx-1 my-2");
    });
    test("Margin top, end, bottom, start", () => {
      expect(spacing("m", [1, 2, 3, 4])).toBe("mt-1 me-2 mb-3 ms-4");
    });
    test("Padding X and Y", () => {
      expect(spacing("p", [1, 2])).toBe("px-1 py-2");
    });
    test("Padding top, end, bottom, start", () => {
      expect(spacing("p", [1, 2, 3, 4])).toBe("pt-1 pe-2 pb-3 ps-4");
    });
  });
});
