import { prefix } from "./prefix";

describe("prefix function", () => {
  describe("Basic functionality", () => {
    test("returns only prefix when no additional classes", () => {
      expect(prefix("btn")).toBe("btn");
    });

    test("handles single and multiple additional classes", () => {
      expect(prefix("btn", "primary")).toBe("btn-primary");
      expect(prefix("alert", "dismissible", "animated")).toBe(
        "alert-dismissible-animated",
      );
    });

    test("handles numeric class names", () => {
      expect(prefix("col", 3)).toBe("col-3");
      expect(prefix("col", "md", 6)).toBe("col-md-6");
    });
  });

  describe("Edge cases", () => {
    test("ignores null, undefined, objects, arrays and booleans", () => {
      expect(prefix("btn", null, "primary")).toBe("btn-primary");
      expect(prefix("btn", undefined, "danger")).toBe("btn-danger");
      expect(prefix("btn", {}, "success")).toBe("btn-success");
      expect(prefix("btn", [], "warning")).toBe("btn-warning");
    });

    test("handles empty strings", () => {
      expect(prefix("btn", "")).toBe("btn");
      expect(prefix("btn", "", "primary")).toBe("btn-primary");
      expect(prefix("btn", "    ", "primary")).toBe("btn-primary");
    });
  });

  describe("Special characters", () => {
    test("preserves special characters and UTF-8", () => {
      expect(prefix("btn", "hover:focus")).toBe("btn-hover:focus");
      expect(prefix("custom", "btn_primary")).toBe("custom-btn_primary");
    });
  });

  describe("Type handling", () => {
    test("handles non-string prefix without throwing", () => {
      expect(prefix(123)).toBe(undefined);
      expect(prefix(null)).toBe(undefined);
      expect(prefix(true)).toBe(undefined);
    });
  });
});
