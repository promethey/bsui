// @ts-nocheck
import { render, screen } from "@testing-library/react";
import { Col } from "components";

describe("Col", () => {
  test("renders children", () => {
    render(<Col>Content</Col>);
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  test("applies base 'col' class when no breakpoints are provided", () => {
    render(<Col>Content</Col>);

    const el = screen.getByText("Content");
    expect(el.classList.contains("col")).toBe(true);
  });

  test("applies xs size class", () => {
    render(<Col xs={3}>Content</Col>);

    const el = screen.getByText("Content");
    expect(el.classList.contains("col-3")).toBe(true);
  });

  test("applies auto size", () => {
    render(<Col xs="auto">Content</Col>);

    const el = screen.getByText("Content");
    expect(el.classList.contains("col-auto")).toBe(true);
  });

  test("applies multiple breakpoint classes", () => {
    render(
      <Col xs={3} md={6} lg={9}>
        Content
      </Col>,
    );

    const el = screen.getByText("Content");

    expect(el.classList.contains("col-3")).toBe(true);
    expect(el.classList.contains("col-md-6")).toBe(true);
    expect(el.classList.contains("col-lg-9")).toBe(true);
  });

  test("does NOT apply base 'col' when any breakpoint is set", () => {
    render(<Col md={6}>Content</Col>);

    const el = screen.getByText("Content");
    expect(el.classList.contains("col")).toBe(false);
  });

  test("applies offset (numeric)", () => {
    render(<Col offset={3}>Content</Col>);

    const el = screen.getByText("Content");

    expect(el.className).toContain("offset");
    expect(el.className).toContain("3");
  });

  test("applies responsive offset object", () => {
    render(<Col offset={{ md: 3, lg: 5 }}>Content</Col>);

    const el = screen.getByText("Content");

    expect(el.className).toContain("offset-md");
    expect(el.className).toContain("offset-lg");
  });

  test("merges custom className", () => {
    render(<Col className="custom-class">Content</Col>);

    const el = screen.getByText("Content");
    expect(el.classList.contains("custom-class")).toBe(true);
  });

  test("passes additional props to Prime", () => {
    render(<Col data-testid="col">Content</Col>);

    expect(screen.getByTestId("col")).toBeInTheDocument();
  });
});
