import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Label } from "components";

describe("Label", () => {
  it("renders children", () => {
    render(<Label htmlFor="email">Email address</Label>);

    expect(screen.getByText("Email address")).toBeInTheDocument();
  });

  it("renders as label element", () => {
    render(<Label htmlFor="email">Email address</Label>);

    expect(screen.getByText("Email address").tagName).toBe("LABEL");
  });

  it("applies bootstrap class", () => {
    render(<Label htmlFor="email">Email address</Label>);

    expect(screen.getByText("Email address")).toHaveClass("form-label");
  });

  it("applies custom className", () => {
    render(
      <Label htmlFor="email" className="custom-class">
        Email address
      </Label>,
    );

    expect(screen.getByText("Email address")).toHaveClass("custom-class");
  });

  it("applies htmlFor attribute", () => {
    render(<Label htmlFor="email">Email address</Label>);

    expect(screen.getByText("Email address")).toHaveAttribute("for", "email");
  });

  it("applies inline styles", () => {
    render(
      <Label htmlFor="email" style={{ color: "red" }}>
        Email address
      </Label>,
    );

    expect(screen.getByText("Email address")).toHaveStyle({
      color: "rgb(255, 0, 0)",
    });
  });

  it("forwards Prime props", () => {
    render(
      <Label htmlFor="email" mt={3}>
        Email address
      </Label>,
    );

    expect(screen.getByText("Email address")).toHaveClass("mt-3");
  });
});
