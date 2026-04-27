import { prefix } from "./prefix";

describe("prefix function", () => {
  describe("Basic functionality", () => {
    test("without classnames", () => {
      expect(prefix("btn")).toBe("btn");
    });

    test("if values is true", () => {
      expect(prefix("btn", true)).toBe("btn");
    });

    test("regular cases", () => {
      expect(prefix("btn", "primary")).toBe("btn-primary");
      expect(prefix("alert", "dismissible", "animated")).toBe(
        "alert-dismissible-animated",
      );
    });

    test("with numbers", () => {
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

    test("ignores empty strings", () => {
      expect(prefix("btn", "")).toBe("btn");
      expect(prefix("btn", "", "primary")).toBe("btn-primary");
      expect(prefix("btn", "    ", "primary")).toBe("btn-primary");
    });
  });

  describe("Special cases", () => {
    test("special characters and UTF-8", () => {
      expect(prefix("btn", "hover:focus")).toBe("btn-hover:focus");
      expect(prefix("custom", "btn_primary")).toBe("custom-btn_primary");
    });
  });

  describe("Type handling", () => {
    test("handles non-string prefix without errors", () => {
      expect(prefix(123)).toBe("");
      expect(prefix(null)).toBe("");
      expect(prefix(true)).toBe("");
      expect(prefix(false)).toBe("");
    });
  });
});
