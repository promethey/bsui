import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Col } from "components";

describe("Col", () => {
  it("renders children", () => {
    const { getByText } = render(<Col>Content</Col>);
    expect(getByText("Content")).toBeInTheDocument();
  });

  it("applies base col class when no breakpoints", () => {
    const { container } = render(<Col>Base</Col>);
    expect(container.firstChild).toHaveClass("col");
  });

  it("removes base col when xs is provided", () => {
    const { container } = render(<Col xs={6}>X</Col>);
    expect(container.firstChild).not.toHaveClass("col");
  });

  it("builds xs class correctly", () => {
    const { container } = render(<Col xs={6}>X</Col>);
    expect(container.firstChild).toHaveClass("col-6");
  });

  it("builds xs auto class correctly", () => {
    const { container } = render(<Col xs="auto">X</Col>);
    expect(container.firstChild).toHaveClass("col-auto");
  });

  it("builds sm class correctly", () => {
    const { container } = render(<Col sm={4}>X</Col>);
    expect(container.firstChild).toHaveClass("col-sm-4");
  });

  it("builds md class correctly", () => {
    const { container } = render(<Col md={8}>X</Col>);
    expect(container.firstChild).toHaveClass("col-md-8");
  });

  it("builds lg class correctly", () => {
    const { container } = render(<Col lg={3}>X</Col>);
    expect(container.firstChild).toHaveClass("col-lg-3");
  });

  it("builds xl class correctly", () => {
    const { container } = render(<Col xl={2}>X</Col>);
    expect(container.firstChild).toHaveClass("col-xl-2");
  });

  it("builds xxl class correctly", () => {
    const { container } = render(<Col xxl={1}>X</Col>);
    expect(container.firstChild).toHaveClass("col-xxl-1");
  });

  it("combines multiple breakpoints", () => {
    const { container } = render(
      <Col xs={12} md={6} lg={4}>
        X
      </Col>,
    );

    const el = container.firstChild;

    expect(el).toHaveClass("col-12");
    expect(el).toHaveClass("col-md-6");
    expect(el).toHaveClass("col-lg-4");
  });

  it("merges custom className", () => {
    const { container } = render(<Col className="custom">X</Col>);

    expect(container.firstChild).toHaveClass("custom");
  });

  it("forwards props to Prime", () => {
    const { getByTestId } = render(<Col data-testid="col">X</Col>);

    expect(getByTestId("col")).toBeInTheDocument();
  });
});
