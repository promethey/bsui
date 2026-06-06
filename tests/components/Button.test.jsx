// @ts-nocheck
import { vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "components";

describe("Button", () => {
  it("renders button by default", () => {
    render(<Button>Button</Button>);

    const element = screen.getByRole("button");

    expect(element.tagName).toBe("BUTTON");
    expect(element).toHaveClass("btn");
    expect(element).toHaveClass("btn-primary");
  });

  it("renders children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("applies tone", () => {
    render(<Button tone="success">Button</Button>);

    expect(screen.getByRole("button")).toHaveClass("btn-success");
  });

  it("applies outline", () => {
    render(
      <Button tone="danger" outline>
        Button
      </Button>,
    );

    expect(screen.getByRole("button")).toHaveClass("btn-outline-danger");
  });

  it("applies small size", () => {
    render(<Button size="sm">Button</Button>);

    expect(screen.getByRole("button")).toHaveClass("btn-sm");
  });

  it("applies large size", () => {
    render(<Button size="lg">Button</Button>);

    expect(screen.getByRole("button")).toHaveClass("btn-lg");
  });

  it("applies active class when pressed", () => {
    render(<Button pressed>Button</Button>);

    const element = screen.getByRole("button");

    expect(element).toHaveClass("active");
    expect(element).toHaveAttribute("aria-pressed", "true");
  });

  it("applies disabled attribute", () => {
    render(<Button disabled>Button</Button>);

    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("renders anchor element", () => {
    render(
      <Button as="a" to="/docs">
        Link
      </Button>,
    );

    const link = screen.getByRole("button");

    expect(link.tagName).toBe("A");
    expect(link).toHaveAttribute("href", "/docs");
  });

  it("applies aria-disabled for anchors", () => {
    render(
      <Button as="a" disabled>
        Link
      </Button>,
    );

    expect(screen.getByRole("button")).toHaveAttribute("aria-disabled", "true");
  });

  it("renders input element", () => {
    const { container } = render(
      <Button as="input" type="submit" value="Submit" />,
    );

    const input = container.querySelector('input[type="submit"]');

    expect(input).toBeInTheDocument();
    expect(input).toHaveClass("btn");
    expect(input).toHaveClass("btn-primary");
    expect(input).toHaveValue("Submit");
  });

  it("calls onClick handler", () => {
    const onClick = vi.fn();

    render(<Button onClick={onClick}>Button</Button>);

    fireEvent.click(screen.getByRole("button"));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("merges custom className", () => {
    render(<Button className="custom-class">Button </Button>);

    expect(screen.getByRole("button")).toHaveClass(
      "btn",
      "btn-primary",
      "custom-class",
    );
  });

  it("applies custom styles", () => {
    render(<Button style={{ width: "100px" }}>Button </Button>);

    expect(screen.getByRole("button")).toHaveStyle({
      width: "100px",
    });
  });
});
