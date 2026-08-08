import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Form } from "components";

describe("Label", () => {
  it("renders children", () => {
    render(<Form.Label htmlFor="email">Email address</Form.Label>);

    expect(screen.getByText("Email address")).toBeInTheDocument();
  });

  it("renders as label element", () => {
    render(<Form.Label htmlFor="email">Email address</Form.Label>);

    expect(screen.getByText("Email address").tagName).toBe("LABEL");
  });

  it("applies bootstrap class", () => {
    render(<Form.Label htmlFor="email">Email address</Form.Label>);

    expect(screen.getByText("Email address")).toHaveClass("form-label");
  });

  it("applies custom className", () => {
    render(
      <Form.Label htmlFor="email" className="custom-class">
        Email address
      </Form.Label>,
    );

    expect(screen.getByText("Email address")).toHaveClass("custom-class");
  });

  it("applies htmlFor attribute", () => {
    render(<Form.Label htmlFor="email">Email address</Form.Label>);

    expect(screen.getByText("Email address")).toHaveAttribute("for", "email");
  });

  it("applies inline styles", () => {
    render(
      <Form.Label htmlFor="email" style={{ color: "red" }}>
        Email address
      </Form.Label>,
    );

    expect(screen.getByText("Email address")).toHaveStyle({
      color: "rgb(255, 0, 0)",
    });
  });

  it("forwards Prime props", () => {
    render(
      <Form.Label htmlFor="email" mt={3}>
        Email address
      </Form.Label>,
    );

    expect(screen.getByText("Email address")).toHaveClass("mt-3");
  });
});
