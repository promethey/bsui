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

    expect(bs.bg.primary).toBe("primary");
    expect(bs.bg.transparent).toBe("transparent");

    expect(bs.bg.opacity[75]).toBe(75);
    expect(bs.bg.opacity[10]).toBe(10);

    expect(bs.text.muted).toBe("muted");
    expect(bs.text.black50).toBe("black-50");

    expect(bs.text.opacity[50]).toBe(50);
  });
});
