// @ts-nocheck
import { flexResolver } from "./flex";

describe("Check utility", () => {
  describe("Basic function", () => {
    /** String */
    test("Check string start value", () => {
      expect(flexResolver("start")).toBe(
        "justify-content-start align-items-start",
      );
    });

    test("Check string start value", () => {
      expect(flexResolver("end")).toBe("justify-content-end align-items-end");
    });

    test("Check string center value", () => {
      expect(flexResolver("center")).toBe(
        "justify-content-center align-items-center",
      );
    });

    test("Check negative case string between value", () => {
      expect(flexResolver("between")).toBe("");
    });

    test("Check string flexResolver xs start", () => {
      expect(flexResolver({ xs: "start" })).toBe(
        "justify-content-start align-items-start",
      );
    });

    test("Check string flexResolver md start", () => {
      expect(flexResolver({ md: "start" })).toBe(
        "justify-content-md-start align-items-md-start",
      );
    });

    test("Check string flexResolver xs end", () => {
      expect(flexResolver({ xs: "end" })).toBe(
        "justify-content-end align-items-end",
      );
    });

    test("Check string flexResolver lg end", () => {
      expect(flexResolver({ lg: "end" })).toBe(
        "justify-content-lg-end align-items-lg-end",
      );
    });

    test("Check string flexResolver xs center", () => {
      expect(flexResolver({ xs: "center" })).toBe(
        "justify-content-center align-items-center",
      );
    });

    test("Check string flexResolver xxl center", () => {
      expect(flexResolver({ xxl: "center" })).toBe(
        "justify-content-xxl-center align-items-xxl-center",
      );
    });

    /** Object */
    test("Check object justify xs center", () => {
      expect(flexResolver({ xs: { justify: "center" } })).toBe(
        "justify-content-center",
      );
    });

    test("Check object justify md start", () => {
      expect(flexResolver({ md: { justify: "start" } })).toBe(
        "justify-content-md-start",
      );
    });

    /** Direction */
    test("Check row direction", () => {
      expect(flexResolver({ xs: { dir: "row" } })).toBe("flex-row");
    });

    test("Check row md direction", () => {
      expect(flexResolver({ md: { dir: "row" } })).toBe("flex-md-row");
    });

    test("Check column direction", () => {
      expect(flexResolver({ xs: { dir: "column" } })).toBe("flex-column");
    });

    test("Check column md direction", () => {
      expect(flexResolver({ md: { dir: "column" } })).toBe("flex-md-column");
    });

    /** Align self */
    test("Check align self center", () => {
      expect(flexResolver({ xs: { alignSelf: "center" } })).toBe(
        "align-self-center",
      );
    });

    test("Check align self md center", () => {
      expect(flexResolver({ md: { alignSelf: "center" } })).toBe(
        "align-self-md-center",
      );
    });

    /** Fill */
    test("Check flexResolver fill", () => {
      expect(flexResolver({ xs: { fill: true } })).toBe("flex-fill");
    });

    test("Check flexResolver md fill", () => {
      expect(flexResolver({ md: { fill: true } })).toBe("flex-md-fill");
    });

    test("Check flexResolver md fill", () => {
      expect(flexResolver({ xs: { fill: true }, md: { fill: true } })).toBe(
        "flex-fill flex-md-fill",
      );
    });

    // Grow
    test("Check flexResolver grow", () => {
      expect(flexResolver({ xs: { grow: 0 } })).toBe("flex-grow-0");
      expect(flexResolver({ xs: { grow: 1 } })).toBe("flex-grow-1");
      expect(flexResolver({ xs: { grow: 2 } })).toBe("");
      expect(flexResolver({ md: { grow: 0 } })).toBe("flex-md-grow-0");
      expect(flexResolver({ lg: { grow: 1 } })).toBe("flex-lg-grow-1");
    });

    // Shrink
    test("Check flexResolver grow", () => {
      expect(flexResolver({ xs: { shrink: 0 } })).toBe("flex-shrink-0");
      expect(flexResolver({ xs: { shrink: 1 } })).toBe("flex-shrink-1");
      expect(flexResolver({ xs: { shrink: 2 } })).toBe("");
      expect(flexResolver({ md: { shrink: 0 } })).toBe("flex-md-shrink-0");
      expect(flexResolver({ xxl: { shrink: 1 } })).toBe("flex-xxl-shrink-1");
    });

    // Wrap
    test("Check flexResolver wrap", () => {
      expect(flexResolver({ xs: { wrap: true } })).toBe("flex-wrap");
      expect(flexResolver({ md: { wrap: true } })).toBe("flex-md-wrap");
      expect(flexResolver({ md: { wrap: 1 } })).toBe("");
      expect(flexResolver({ md: { wrap: false } })).toBe("");
      expect(flexResolver({ xl: { wrap: false } })).toBe("");
    });

    // Nowrap
    test("Check flexResolver nowrap", () => {
      expect(flexResolver({ xs: { nowrap: true } })).toBe("flex-nowrap");
      expect(flexResolver({ md: { nowrap: true } })).toBe("flex-md-nowrap");
      expect(flexResolver({ md: { nowrap: 1 } })).toBe("");
      expect(flexResolver({ md: { nowrap: false } })).toBe("");
      expect(flexResolver({ xl: { nowrap: false } })).toBe("");
    });

    // Wrap reverse
    test("Check flexResolver nowrap", () => {
      expect(flexResolver({ xs: { wrapReverse: true } })).toBe(
        "flex-wrap-reverse",
      );
      expect(flexResolver({ md: { wrapReverse: true } })).toBe(
        "flex-md-wrap-reverse",
      );
      expect(flexResolver({ md: { wrapReverse: 1 } })).toBe("");
      expect(flexResolver({ md: { wrapReverse: false } })).toBe("");
      expect(flexResolver({ xl: { wrapReverse: false } })).toBe("");
    });

    // Wrap reverse
    test("Check flexResolver nowrap", () => {
      expect(flexResolver({ xs: { order: 0 } })).toBe("order-0");
      expect(flexResolver({ xs: { order: "first" } })).toBe("order-first");
      expect(flexResolver({ xs: { order: "last" } })).toBe("order-last");
      expect(flexResolver({ md: { order: "first" } })).toBe("order-md-first");
      expect(flexResolver({ md: { order: "last" } })).toBe("order-md-last");
      expect(flexResolver({ md: { order: 1 } })).toBe("order-md-1");
      expect(flexResolver({ xs: { order: 10 } })).toBe("");
    });

    // Align content
    test("Check flexResolver align content", () => {
      expect(flexResolver({ xs: { alignContent: "start" } })).toBe(
        "align-content-start",
      );
      expect(flexResolver({ xs: { alignContent: "end" } })).toBe(
        "align-content-end",
      );
      expect(flexResolver({ md: { alignContent: "start" } })).toBe(
        "align-content-md-start",
      );
      expect(flexResolver({ xl: { alignContent: "end" } })).toBe(
        "align-content-xl-end",
      );
    });
  });
});
