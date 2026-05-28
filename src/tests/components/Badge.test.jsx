// @ts-nocheck
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Badge } from "components";

describe("Badge", () => {
  test("renders correctly", () => {
    render(<Badge>Badge</Badge>);

    expect(screen.getByText("Badge")).toBeInTheDocument();
  });

  test("renders children", () => {
    render(<Badge>Badge Content</Badge>);

    expect(screen.getByText("Badge Content")).toBeVisible();
  });

  test("applies component classes", () => {
    render(<Badge bg="primary">Badge</Badge>);

    expect(screen.getByText("Badge")).toHaveClass("bg-primary");
  });

  test("renders default element", () => {
    render(<Badge>Badge</Badge>);

    expect(screen.getByText("Badge").tagName).toBe("SPAN");
  });

  test("renders custom element", () => {
    render(<Badge as="div">Badge</Badge>);

    expect(screen.getByText("Badge").tagName).toBe("DIV");
  });

  test("merges custom className", () => {
    render(<Badge className="custom-badge">Badge</Badge>);

    expect(screen.getByText("Badge")).toHaveClass("custom-badge");
  });

  test("passes native attributes", () => {
    render(<Badge title="badge-title">Badge</Badge>);

    expect(screen.getByTitle("badge-title")).toBeInTheDocument();
  });

  test("updates classes on rerender", () => {
    const { rerender } = render(<Badge bg="primary">Badge</Badge>);

    expect(screen.getByText("Badge")).toHaveClass("bg-primary");

    rerender(<Badge bg="danger">Badge</Badge>);

    expect(screen.getByText("Badge")).toHaveClass("bg-danger");
  });
});
