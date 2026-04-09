import {border} from './border';

describe("border()", () => {
  test("regular border", () => {
    expect(border(true)).toBe("border");
  });
  test("border width 1", () => {
    expect(border(1)).toBe("border border-1");
  });
  test("border width 2", () => {
    expect(border(2)).toBe("border border-2");
  });
  test("border width 3", () => {
    expect(border(3)).toBe("border border-3");
  });
  test("border width 4", () => {
    expect(border(4)).toBe("border border-4");
  });
  test("border width 5", () => {
    expect(border(5)).toBe("border border-5");
  });
  test("border width 6 - is not right", () => {
    expect(border(6)).toBe("");
  });
  test("color success", () => {
    expect(border({ color: 'success' })).toBe("border border-success");
  });
  test("primary border with other props", () => {
    expect(border({ color: "primary", width: 1, top: 0 })).toBe("border border-primary border-1 border-top-0")
  });
  test("border aspect top", () => {
    expect(border({ aspect: "top", color: 'primary', width: 1, top: 0 })).toBe("border-top border-primary border-1 border-top-0")
  });
});