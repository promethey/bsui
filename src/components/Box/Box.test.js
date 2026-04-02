import React, { createRef } from "react";
import { render, screen } from "@testing-library/react";
import Box from "components/Box";

describe("Box component", () => {
  test("renders children", () => {
    render(<Box>Content</Box>);
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  test("renders as div by default", () => {
    render(<Box data-testid="box" />);
    expect(screen.getByTestId("box").tagName).toBe("DIV");
  });

  test('renders with custom "as" prop h1', () => {
    render(<Box as="h1" data-testid="box" />);
    expect(screen.getByTestId("box").tagName).toBe("H1");
  });

  test('renders with custom "as" prop section', () => {
    render(<Box as="section" data-testid="box" />);
    expect(screen.getByTestId("box").tagName).toBe("SECTION");
  });

  test("merges custom className", () => {
    render(<Box className="custom-class" data-testid="box" />);
    expect(screen.getByTestId("box")).toHaveClass("custom-class");
  });

  test("applies display utility class flex", () => {
    render(<Box d="flex" data-testid="box" />);
    expect(screen.getByTestId("box")).toHaveClass("d-flex");
  });

  test("applies display utility class inline", () => {
    render(<Box d="inline" data-testid="box" />);
    expect(screen.getByTestId("box")).toHaveClass("d-inline");
  });

  test("applies spacing utilities", () => {
    render(<Box m={3} p={2} data-testid="box" />);
    const el = screen.getByTestId("box");

    expect(el).toHaveClass("m-3");
    expect(el).toHaveClass("p-2");
  });

  test("applies complex spacing utilities", () => {
    render(
      <Box m={{ xs: 3, md: 2, lg: 4 }} p={[2, 3, 4, 4]} data-testid="box" />,
    );

    const el = screen.getByTestId("box");

    expect(el).toHaveClass("m-3 m-md-2 m-lg-4 mt-2 me-3 mb-4 ms-4");
  });

  test("applies background and text color utilities", () => {
    render(<Box bg="primary" text="light" data-testid="box" />);

    const el = screen.getByTestId("box");
    expect(el).toHaveClass("bg-primary");
    expect(el).toHaveClass("text-light");
  });

  test("applies border utilities", () => {
    render(<Box border borderWidth={2} data-testid="box" />);

    const el = screen.getByTestId("box");
    expect(el).toHaveClass("border");
    expect(el).toHaveClass("border-2");
  });

  test("visible and invisible logic works", () => {
    const { rerender } = render(<Box visible data-testid="box" />);
    expect(screen.getByTestId("box")).toHaveClass("visible");

    rerender(<Box invisible data-testid="box" />);
    expect(screen.getByTestId("box")).toHaveClass("invisible");
  });

  test("forwards ref to DOM element", () => {
    const ref = createRef();

    render(<Box ref={ref}>Ref</Box>);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });

  test("passes style prop", () => {
    render(
      <Box style={{ color: "red" }} data-testid="box">
        Styled
      </Box>,
    );

    expect(screen.getByTestId("box")).toHaveStyle({
      color: "rgb(255, 0, 0)",
    });
  });

  test("passes rest props to component", () => {
    render(<Box id="test-id" aria-label="box" data-testid="box" />);

    const el = screen.getByTestId("box");
    expect(el).toHaveAttribute("id", "test-id");
    expect(el).toHaveAttribute("aria-label", "box");
  });
});
