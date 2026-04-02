import { bs } from "./bs";

describe("bs constant structure", () => {
  test("has correct structure and values", () => {
    expect(bs).toHaveProperty("d");
    expect(bs).toHaveProperty("dp");
    expect(bs).toHaveProperty("bg");
    expect(bs).toHaveProperty("text");

    expect(bs.d.block).toBe("block");
    expect(bs.d.inlineFlex).toBe("inline-flex");

    expect(Object.keys(bs.d)).toEqual(Object.keys(bs.dp));
    expect(bs.dp.grid).toBe("grid");

    expect(bs.bg.colors.primary).toBe("primary");
    expect(bs.bg.colors.transparent).toBe("transparent");

    expect(bs.bg.opacity[75]).toBe(75);
    expect(bs.bg.opacity[10]).toBe(10);

    expect(bs.text.colors.muted).toBe("muted");
    expect(bs.text.colors.black50).toBe("black-50");

    expect(bs.text.opacity[50]).toBe(50);

    Object.entries(bs.bg.colors).forEach(([key, value]) => {
      expect(value).toBe(key);
    });

    Object.entries(bs.text.colors).forEach(([key, value]) => {
      if (key === "black50") expect(value).toBe("black-50");
      else if (key === "white50") expect(value).toBe("white-50");
      else expect(value).toBe(key);
    });
  });
});
