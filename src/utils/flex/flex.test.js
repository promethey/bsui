import { flex } from './flex';

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
      expect(flex({ xs: "start" })).toBe("justify-content-start align-items-start");
    });

    test("Check string flex md start", () => {
      expect(flex({ md: "start" })).toBe("justify-content-md-start align-items-md-start");
    });

    test("Check string flex xs end", () => {
      expect(flex({ xs: "end" })).toBe("justify-content-end align-items-end");
    });

    test("Check string flex lg end", () => {
      expect(flex({ lg: "end" })).toBe("justify-content-lg-end align-items-lg-end");
    });

    test("Check string flex xs center", () => {
      expect(flex({ xs: "center" })).toBe("justify-content-center align-items-center");
    });

    test("Check string flex xxl center", () => {
      expect(flex({ xxl: "center" })).toBe("justify-content-xxl-center align-items-xxl-center");
    });

    /** Object */
    test("Check object justify xs center", () => {
      expect(flex({ xs: { justify: "center" } })).toBe("justify-content-center");
    });

    test("Check object justify md start", () => {
      expect(flex({ md: { justify: "start" } })).toBe("justify-content-md-start");
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
      expect(flex({ md: { alignSelf: "center" } })).toBe("align-self-md-center");
    });

    /** Fill */
    test("Check flex fill", () => {
      expect(flex({ xs: { fill: true } })).toBe("flex-fill");
    });

    test("Check flex md fill", () => {
      expect(flex({ md: { fill: true } })).toBe("flex-md-fill");
    });

    test("Check flex md fill", () => {
      expect(flex({ xs: { fill: true }, md: { fill: true } })).toBe("flex-fill flex-md-fill");
    });
  });
});