import { flex } from './flex';

describe("Check utility", () => {
  describe("Basic function", () => {
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

    test("Check object justify xs center", () => {
      expect(flex({ xs: { justify: "center" } })).toBe("justify-content-center");
    });

    test("Check object justify md start", () => {
      expect(flex({ md: { justify: "start" } })).toBe("justify-content-md-start");
    });
  });
});