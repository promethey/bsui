import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Placeholder } from "components";

describe("Placeholder", () => {
  it("renders placeholder", () => {
    render(<Placeholder data-testid="placeholder" />);

    expect(screen.getByTestId("placeholder")).toBeInTheDocument();
  });

  it("applies base class", () => {
    render(<Placeholder data-testid="placeholder" />);

    expect(screen.getByTestId("placeholder")).toHaveClass("placeholder");
  });

  it("applies column class", () => {
    render(<Placeholder data-testid="placeholder" col={6} />);

    expect(screen.getByTestId("placeholder")).toHaveClass("col-6");
  });

  it("applies xs size class", () => {
    render(<Placeholder data-testid="placeholder" size="xs" />);

    expect(screen.getByTestId("placeholder")).toHaveClass("placeholder-xs");
  });

  it("applies sm size class", () => {
    render(<Placeholder data-testid="placeholder" size="sm" />);

    expect(screen.getByTestId("placeholder")).toHaveClass("placeholder-sm");
  });

  it("applies lg size class", () => {
    render(<Placeholder data-testid="placeholder" size="lg" />);

    expect(screen.getByTestId("placeholder")).toHaveClass("placeholder-lg");
  });

  it("merges custom className", () => {
    render(<Placeholder data-testid="placeholder" className="custom-class" />);

    expect(screen.getByTestId("placeholder")).toHaveClass(
      "placeholder",
      "custom-class",
    );
  });

  it("applies inline styles", () => {
    render(
      <Placeholder data-testid="placeholder" style={{ width: "100px" }} />,
    );

    expect(screen.getByTestId("placeholder")).toHaveStyle({
      width: "100px",
    });
  });

  it("forwards additional props", () => {
    render(
      <Placeholder data-testid="placeholder" aria-label="Loading content" />,
    );

    expect(screen.getByTestId("placeholder")).toHaveAttribute(
      "aria-label",
      "Loading content",
    );
  });

  it("renders as span element", () => {
    render(<Placeholder as="span" data-testid="placeholder" />);

    expect(screen.getByTestId("placeholder").tagName).toBe("SPAN");
  });
});
