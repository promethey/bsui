// @ts-nocheck
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Container } from "components";

describe("Container", () => {
  it("renders children", () => {
    const { getByText } = render(<Container>Content</Container>);
    expect(getByText("Content")).toBeInTheDocument();
  });

  it("applies base container class when fluid is not provided", () => {
    const { container } = render(<Container>Content</Container>);

    expect(container.firstChild).toHaveClass("container");
  });

  it("applies container-fluid when fluid=true", () => {
    const { container } = render(<Container fluid>Content</Container>);

    expect(container.firstChild).toHaveClass("container-fluid");
  });

  it("applies breakpoint fluid class", () => {
    const { container } = render(<Container fluid="sm">Content</Container>);

    expect(container.firstChild).toHaveClass("container-sm");
  });

  it("applies all valid breakpoint values", () => {
    const values = ["sm", "md", "lg", "xl", "xxl"];

    values.forEach((v) => {
      const { container } = render(<Container fluid={v}>X</Container>);
      expect(container.firstChild).toHaveClass(`container-${v}`);
    });
  });

  it("falls back to base container when invalid string is provided", () => {
    const { container } = render(
      <Container fluid="invalid">Content</Container>,
    );

    expect(container.firstChild).toHaveClass("container");
    expect(container.firstChild).not.toHaveClass("container-invalid");
  });

  it("merges custom className", () => {
    const { container } = render(<Container className="custom">X</Container>);

    expect(container.firstChild).toHaveClass("custom");
  });

  it("forwards props to Prime", () => {
    const { getByTestId } = render(
      <Container data-testid="container">X</Container>,
    );

    expect(getByTestId("container")).toBeInTheDocument();
  });
});
