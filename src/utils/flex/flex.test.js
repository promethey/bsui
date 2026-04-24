import { flex } from "./flex";

describe("Check utility", () => {
  describe("Basic function", () => {
    /** String */
    test("Check string start value", () => {
      expect(flex("start")).toBe("justify-content-start align-items-start");
    });

    test("Check string start value", () => {
      expect(flex("end")).toBe("justify-content-end align-items-end");
    });

    test("Check string center value", () => {
      expect(flex("center")).toBe("justify-content-center align-items-center");
    });

    test("Check negative case string between value", () => {
      expect(flex("between")).toBe("");
    });

    test("Check string flex xs start", () => {
      expect(flex({ xs: "start" })).toBe(
        "justify-content-start align-items-start",
      );
    });

    test("Check string flex md start", () => {
      expect(flex({ md: "start" })).toBe(
        "justify-content-md-start align-items-md-start",
      );
    });

    test("Check string flex xs end", () => {
      expect(flex({ xs: "end" })).toBe("justify-content-end align-items-end");
    });

    test("Check string flex lg end", () => {
      expect(flex({ lg: "end" })).toBe(
        "justify-content-lg-end align-items-lg-end",
      );
    });

    test("Check string flex xs center", () => {
      expect(flex({ xs: "center" })).toBe(
        "justify-content-center align-items-center",
      );
    });

    test("Check string flex xxl center", () => {
      expect(flex({ xxl: "center" })).toBe(
        "justify-content-xxl-center align-items-xxl-center",
      );
    });

    /** Object */
    test("Check object justify xs center", () => {
      expect(flex({ xs: { justify: "center" } })).toBe(
        "justify-content-center",
      );
    });

    test("Check object justify md start", () => {
      expect(flex({ md: { justify: "start" } })).toBe(
        "justify-content-md-start",
      );
    });

    /** Direction */
    test("Check row direction", () => {
      expect(flex({ xs: { dir: "row" } })).toBe("flex-row");
    });

    test("Check row md direction", () => {
      expect(flex({ md: { dir: "row" } })).toBe("flex-md-row");
    });

    test("Check column direction", () => {
      expect(flex({ xs: { dir: "column" } })).toBe("flex-column");
    });

    test("Check column md direction", () => {
      expect(flex({ md: { dir: "column" } })).toBe("flex-md-column");
    });

    /** Align self */
    test("Check align self center", () => {
      expect(flex({ xs: { alignSelf: "center" } })).toBe("align-self-center");
    });

    test("Check align self md center", () => {
      expect(flex({ md: { alignSelf: "center" } })).toBe(
        "align-self-md-center",
      );
    });

    /** Fill */
    test("Check flex fill", () => {
      expect(flex({ xs: { fill: true } })).toBe("flex-fill");
    });

    test("Check flex md fill", () => {
      expect(flex({ md: { fill: true } })).toBe("flex-md-fill");
    });

    test("Check flex md fill", () => {
      expect(flex({ xs: { fill: true }, md: { fill: true } })).toBe(
        "flex-fill flex-md-fill",
      );
    });

    // Grow
    test("Check flex grow", () => {
      expect(flex({ xs: { grow: 0 } })).toBe("flex-grow-0");
      expect(flex({ xs: { grow: 1 } })).toBe("flex-grow-1");
      expect(flex({ xs: { grow: 2 } })).toBe("");
      expect(flex({ md: { grow: 0 } })).toBe("flex-md-grow-0");
      expect(flex({ lg: { grow: 1 } })).toBe("flex-lg-grow-1");
    });

    // Shrink
    test("Check flex grow", () => {
      expect(flex({ xs: { shrink: 0 } })).toBe("flex-shrink-0");
      expect(flex({ xs: { shrink: 1 } })).toBe("flex-shrink-1");
      expect(flex({ xs: { shrink: 2 } })).toBe("");
      expect(flex({ md: { shrink: 0 } })).toBe("flex-md-shrink-0");
      expect(flex({ xxl: { shrink: 1 } })).toBe("flex-xxl-shrink-1");
    });

    // Wrap
    test("Check flex wrap", () => {
      expect(flex({ xs: { wrap: true } })).toBe("flex-wrap");
      expect(flex({ md: { wrap: true } })).toBe("flex-md-wrap");
      expect(flex({ md: { wrap: 1 } })).toBe("");
      expect(flex({ md: { wrap: false } })).toBe("");
      expect(flex({ xl: { wrap: false } })).toBe("");
    });

    // Nowrap
    test("Check flex nowrap", () => {
      expect(flex({ xs: { nowrap: true } })).toBe("flex-nowrap");
      expect(flex({ md: { nowrap: true } })).toBe("flex-md-nowrap");
      expect(flex({ md: { nowrap: 1 } })).toBe("");
      expect(flex({ md: { nowrap: false } })).toBe("");
      expect(flex({ xl: { nowrap: false } })).toBe("");
    });

    // Wrap reverse
    test("Check flex nowrap", () => {
      expect(flex({ xs: { wrapReverse: true } })).toBe("flex-wrap-reverse");
      expect(flex({ md: { wrapReverse: true } })).toBe("flex-md-wrap-reverse");
      expect(flex({ md: { wrapReverse: 1 } })).toBe("");
      expect(flex({ md: { wrapReverse: false } })).toBe("");
      expect(flex({ xl: { wrapReverse: false } })).toBe("");
    });

    // Wrap reverse
    test("Check flex nowrap", () => {
      expect(flex({ xs: { order: 0 } })).toBe("order-0");
      expect(flex({ xs: { order: "first" } })).toBe("order-first");
      expect(flex({ xs: { order: "last" } })).toBe("order-last");
      expect(flex({ md: { order: "first" } })).toBe("order-md-first");
      expect(flex({ md: { order: "last" } })).toBe("order-md-last");
      expect(flex({ md: { order: 1 } })).toBe("order-md-1");
      expect(flex({ xs: { order: 10 } })).toBe("");
    });

    // Align content
    test("Check flex align content", () => {
      expect(flex({ xs: { alignContent: "start" } })).toBe(
        "align-content-start",
      );
      expect(flex({ xs: { alignContent: "end" } })).toBe("align-content-end");
      expect(flex({ md: { alignContent: "start" } })).toBe(
        "align-content-md-start",
      );
      expect(flex({ xl: { alignContent: "end" } })).toBe(
        "align-content-xl-end",
      );
    });
  });
});
