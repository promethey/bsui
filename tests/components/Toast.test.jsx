// @ts-nocheck
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Toast } from "components";

describe("Toast", () => {
  it("renders children", () => {
    render(
      <Toast open>
        <div data-testid="child">Hello</div>
      </Toast>,
    );

    expect(screen.getByTestId("child")).toBeInTheDocument();
  });

  it("applies style to root element", () => {
    render(
      <Toast open style={{ backgroundColor: "red" }}>
        content
      </Toast>,
    );

    const root = screen.getByRole("alert");

    expect(root).toHaveStyle({ backgroundColor: "rgb(255, 0, 0)" });
  });

  it("applies className", () => {
    render(
      <Toast open className="custom-toast">
        content
      </Toast>,
    );

    const root = screen.getByRole("alert");

    expect(root.className).toContain("custom-toast");
    expect(root.className).toContain("toast");
  });

  it("passes Prime API props to root element", () => {
    render(
      <Toast open id="toast-1" data-test="value">
        content
      </Toast>,
    );

    const root = screen.getByRole("alert");

    expect(root).toHaveAttribute("id", "toast-1");
    expect(root).toHaveAttribute("data-test", "value");
  });

  it("renders header and body correctly", () => {
    render(
      <Toast open>
        <Toast.Header>Header</Toast.Header>
        <Toast.Body>Body content</Toast.Body>
      </Toast>,
    );

    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("Body content")).toBeInTheDocument();
  });

  it("has correct base structure (Prime root)", () => {
    render(<Toast open>content</Toast>);

    const root = screen.getByRole("alert");

    expect(root.tagName).toBeDefined();
    expect(root).toHaveClass("toast");
  });
});

describe("Toast.Container", () => {
  it("renders children", () => {
    render(
      <Toast.Container>
        <div data-testid="c">A</div>
      </Toast.Container>,
    );

    expect(screen.getByTestId("c")).toBeInTheDocument();
  });

  it("applies className", () => {
    render(<Toast.Container className="x">content</Toast.Container>);

    const el = screen.getByRole("alert");

    expect(el.className).toContain("toast-container");
    expect(el.className).toContain("x");
  });

  it("applies style", () => {
    render(
      <Toast.Container style={{ marginTop: "10px" }}>content</Toast.Container>,
    );

    const el = screen.getByRole("alert");

    expect(el).toHaveStyle({ marginTop: "10px" });
  });
});

describe("Toast.Body", () => {
  it("renders children", () => {
    render(<Toast.Body>body</Toast.Body>);

    expect(screen.getByText("body")).toBeInTheDocument();
  });

  it("applies className", () => {
    render(<Toast.Body className="x">body</Toast.Body>);

    const el = screen.getByText("body");

    expect(el.className).toContain("toast-body");
    expect(el.className).toContain("x");
  });

  it("applies style", () => {
    render(<Toast.Body style={{ color: "red" }}>body</Toast.Body>);

    const el = screen.getByText("body");

    expect(el).toHaveStyle({ color: "rgb(255, 0, 0)" });
  });
});

describe("Toast.Header", () => {
  it("renders children", () => {
    render(
      <Toast open>
        <Toast.Header>header</Toast.Header>
      </Toast>,
    );

    expect(screen.getByText("header")).toBeInTheDocument();
  });

  it("renders close button when enabled", () => {
    render(
      <Toast open>
        <Toast.Header closeButton>header</Toast.Header>
      </Toast>,
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("calls onClose from context when close button clicked", async () => {
    const user = userEvent.setup();
    let closed = false;

    render(
      <Toast open onClose={() => (closed = true)}>
        <Toast.Header closeButton>header</Toast.Header>
      </Toast>,
    );

    await user.click(screen.getByRole("button"));

    expect(closed).toBe(true);
  });
});
