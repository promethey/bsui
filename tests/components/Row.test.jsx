import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Row } from "components";

describe("Row", () => {
  it("renders children", () => {
    render(<Row>Content</Row>);

    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("renders row class", () => {
    render(<Row>Content</Row>);

    expect(screen.getByText("Content")).toHaveClass("row");
  });

  it("applies cols", () => {
    render(<Row cols={3}>Content</Row>);

    expect(screen.getByText("Content")).toHaveClass("row-cols-3");
  });

  it("applies responsive cols", () => {
    render(<Row cols={{ xs: 2, lg: 4 }}>Content</Row>);

    expect(screen.getByText("Content")).toHaveClass(
      "row-cols-2",
      "row-cols-lg-4",
    );
  });

  it("applies gutter", () => {
    render(<Row g={3}>Content</Row>);

    expect(screen.getByText("Content")).toHaveClass("g-3");
  });

  it("applies horizontal gutter", () => {
    render(<Row gx={2}>Content</Row>);

    expect(screen.getByText("Content")).toHaveClass("gx-2");
  });

  it("applies vertical gutter", () => {
    render(<Row gy={5}>Content</Row>);

    expect(screen.getByText("Content")).toHaveClass("gy-5");
  });

  it("applies responsive gutter", () => {
    render(<Row g={{ xs: 1, md: 4 }}>Content</Row>);

    expect(screen.getByText("Content")).toHaveClass("g-1", "g-md-4");
  });

  it("combines cols and gutters", () => {
    render(
      <Row cols={4} gx={2} gy={3}>
        Content
      </Row>,
    );

    expect(screen.getByText("Content")).toHaveClass(
      "row",
      "row-cols-4",
      "gx-2",
      "gy-3",
    );
  });

  it("applies custom className", () => {
    render(<Row className="custom">Content</Row>);

    expect(screen.getByText("Content")).toHaveClass("custom");
  });

  it("applies inline style", () => {
    render(<Row style={{ color: "red" }}>Content</Row>);

    expect(screen.getByText("Content")).toHaveStyle({
      color: "rgb(255, 0, 0)",
    });
  });
});
