// @ts-nocheck
import { render, screen } from "@testing-library/react";
import { Alert } from "components";

describe("Alert", () => {
  test("renders correctly", () => {
    render(<Alert>Alert</Alert>);

    expect(screen.getByText("Alert")).toBeInTheDocument();
  });

  test("renders children", () => {
    render(<Alert>Alert Content</Alert>);

    expect(screen.getByText("Alert Content")).toBeVisible();
  });

  test("applies component classes", () => {
    render(<Alert theme="primary">Alert</Alert>);

    expect(screen.getByText("Alert")).toHaveClass("alert-primary");
  });

  test("renders default element", () => {
    render(<Alert>Alert</Alert>);

    expect(screen.getByText("Alert").tagName).toBe("DIV");
  });

  test("renders custom element", () => {
    render(<Alert as="section">Alert</Alert>);

    expect(screen.getByText("Alert").tagName).toBe("SECTION");
  });

  test("merges custom className", () => {
    render(<Alert className="custom-alert">Alert</Alert>);

    expect(screen.getByText("Alert")).toHaveClass("custom-alert");
  });

  test("passes native attributes", () => {
    render(<Alert title="alert-title">Alert</Alert>);

    expect(screen.getByTitle("alert-title")).toBeInTheDocument();
  });

  test("updates classes on rerender", () => {
    const { rerender } = render(<Alert theme="primary">Alert</Alert>);

    expect(screen.getByText("Alert")).toHaveClass("alert-primary");

    rerender(<Alert theme="danger">Alert</Alert>);

    expect(screen.getByText("Alert")).toHaveClass("alert-danger");
  });
});
