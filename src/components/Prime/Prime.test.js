import React, { createRef } from "react";
import { render, screen } from "@testing-library/react";
import Prime from "components/Prime";

describe("Prime component", () => {
  test("renders children", () => {
    render(<Prime>Content</Prime>);
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  test("renders as div by default", () => {
    render(<Prime data-testid="prime" />);
    expect(screen.getByTestId("prime").tagName).toBe("DIV");
  });

  test('renders with custom "as" prop h1', () => {
    render(<Prime as="h1" data-testid="prime" />);
    expect(screen.getByTestId("prime").tagName).toBe("H1");
  });

  test('renders with custom "as" prop section', () => {
    render(<Prime as="section" data-testid="prime" />);
    expect(screen.getByTestId("prime").tagName).toBe("SECTION");
  });

  test("merges custom className", () => {
    render(<Prime className="custom-class" data-testid="prime" />);
    expect(screen.getByTestId("prime")).toHaveClass("custom-class");
  });

  test("applies display utility class flex", () => {
    render(<Prime d="flex" data-testid="prime" />);
    expect(screen.getByTestId("prime")).toHaveClass("d-flex");
  });

  test("applies display utility class inline", () => {
    render(<Prime d="inline" data-testid="prime" />);
    expect(screen.getByTestId("prime")).toHaveClass("d-inline");
  });

  test("applies spacing utilities", () => {
    render(<Prime m={3} p={2} data-testid="prime" />);
    const el = screen.getByTestId("prime");

    expect(el).toHaveClass("m-3");
    expect(el).toHaveClass("p-2");
  });

  test("applies complex spacing utilities", () => {
    render(
      <Prime
        m={{ xs: 3, md: 2, lg: 4 }}
        p={[2, 3, 4, 4]}
        data-testid="prime"
      />,
    );

    const el = screen.getByTestId("prime");

    expect(el).toHaveClass("m-3 m-md-2 m-lg-4 pt-2 pe-3 pb-4 ps-4");
  });

  test("applies background and text color utilities", () => {
    render(<Prime bg="primary" text="light" data-testid="prime" />);

    const el = screen.getByTestId("prime");
    expect(el).toHaveClass("bg-primary");
    expect(el).toHaveClass("text-light");
  });

  test("applies regular border utility", () => {
    render(<Prime border data-testid="prime" />);

    const el = screen.getByTestId("prime");
    expect(el).toHaveClass("border");
  });

  test("applies primary border utility", () => {
    render(<Prime border={{ color: "primary" }} data-testid="prime" />);

    const el = screen.getByTestId("prime");
    expect(el).toHaveClass("border border-primary");
  });

  test("applies success border utility", () => {
    render(
      <Prime
        border={{ color: "success", width: 3, top: 0, bottom: 0 }}
        data-testid="prime"
      />,
    );

    const el = screen.getByTestId("prime");
    expect(el).toHaveClass(
      "border border-success border-3 border-top-0 border-bottom-0",
    );
  });

  test("visible and invisible logic works", () => {
    const { rerender } = render(<Prime visible data-testid="prime" />);
    expect(screen.getByTestId("prime")).toHaveClass("visible");

    rerender(<Prime invisible data-testid="prime" />);
    expect(screen.getByTestId("prime")).toHaveClass("invisible");
  });

  test("forwards ref to DOM element", () => {
    const ref = createRef();

    render(<Prime ref={ref}>Ref</Prime>);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });

  test("passes style prop", () => {
    render(
      <Prime style={{ color: "red" }} data-testid="prime">
        Styled
      </Prime>,
    );

    expect(screen.getByTestId("prime")).toHaveStyle({
      color: "rgb(255, 0, 0)",
    });
  });

  test("passes rest props to component", () => {
    render(<Prime id="test-id" aria-label="prime" data-testid="prime" />);

    const el = screen.getByTestId("prime");
    expect(el).toHaveAttribute("id", "test-id");
    expect(el).toHaveAttribute("aria-label", "prime");
  });
});
