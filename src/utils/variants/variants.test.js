import React from "react";
import { isValidElementType } from "react-is";
import { render } from "@testing-library/react";
import { capitalize } from "helpers/capitalize";
import {
  createStaticVariant,
  defineThemeVariants,
  attachStaticVariants,
} from "utils/variants";

const BaseComponent = React.forwardRef(({ outline, theme, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-testid="root"
      data-outline={outline}
      data-theme={theme}
      {...props}
    />
  );
});

describe("createStaticVariant", () => {
  it("returns a React component", () => {
    const Variant = createStaticVariant(
      { theme: "primary" },
      "Primary",
      BaseComponent,
    );
    expect(isValidElementType(Variant)).toBe(true);
  });

  it("applies static variant props", () => {
    const Variant = createStaticVariant(
      { theme: "primary" },
      "Primary",
      BaseComponent,
    );
    const { getByTestId } = render(<Variant />);
    const element = getByTestId("root");
    expect(element.dataset.theme).toBe("primary");
  });

  it("allows overriding static variant props", () => {
    const Variant = createStaticVariant(
      { theme: "primary" },
      "Primary",
      BaseComponent,
    );
    const { getByTestId } = render(<Variant theme="danger" />);
    const element = getByTestId("root");
    expect(element.dataset.theme).toBe("danger");
  });

  it("sets correct displayName", () => {
    const Variant = createStaticVariant(
      { theme: "primary" },
      "Primary",
      BaseComponent,
    );
    expect(Variant.displayName).toBe("Primary");
  });

  it("forwards ref to base component", () => {
    const Variant = createStaticVariant(
      { theme: "primary" },
      "Primary",
      BaseComponent,
    );
    const ref = React.createRef();
    render(<Variant ref={ref} />);
    expect(ref.current).not.toBeNull();
    expect(ref.current instanceof HTMLDivElement).toBe(true);
  });
});

describe("defineThemeVariants", () => {
  const themes = ["primary", "danger"];
  it("creates theme variants as static properties", () => {
    const Component = BaseComponent;
    defineThemeVariants(Component, themes, "theme");

    themes.forEach((theme) => {
      const Comp = Component[capitalize(theme)];
      expect(isValidElementType(Comp)).toBe(true);
    });
  });

  it("applies correct theme prop", () => {
    const Component = BaseComponent;
    defineThemeVariants(Component, themes, "theme");

    const Primary = Component.Primary;
    const { getByTestId } = render(<Primary />);
    const element = getByTestId("root");
    expect(element.dataset.theme).toBe("primary");
  });

  it("supports custom prop name", () => {
    const Component = BaseComponent;
    defineThemeVariants(Component, ["outline"], "outline");

    const Outline = Component.Outline;
    const { getByTestId } = render(<Outline />);
    const element = getByTestId("root");
    expect(element.dataset.outline).toBe("outline");
  });
});

describe("attachStaticVariants", () => {
  it("applies preset props", () => {
    const Component = BaseComponent;
    attachStaticVariants(Component, {
      Outline: { outline: true },
    });

    const { getByTestId } = render(<Component.Outline />);
    const element = getByTestId("root");
    expect(element.dataset.outline).toBe("true");
  });

  it("allows overriding preset props", () => {
    const Component = BaseComponent;
    attachStaticVariants(Component, {
      Outline: { outline: true },
    });

    const { getByTestId } = render(<Component.Outline outline={false} />);
    const element = getByTestId("root");
    expect(element.dataset.outline).toBe("false");
  });
});
