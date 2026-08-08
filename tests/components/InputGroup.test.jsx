import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Form } from "components";

describe("InputGroup", () => {
  it("renders children", () => {
    render(
      <Form.InputGroup>
        <Form.InputGroup.Text>@</Form.InputGroup.Text>
      </Form.InputGroup>,
    );

    expect(screen.getByText("@")).toBeInTheDocument();
  });

  it("applies base class", () => {
    const { container } = render(
      <Form.InputGroup>
        <Form.InputGroup.Text>@</Form.InputGroup.Text>
      </Form.InputGroup>,
    );

    expect(container.firstChild).toHaveClass("input-group");
  });

  it("applies custom className", () => {
    const { container } = render(
      <Form.InputGroup className="custom-class">
        <Form.InputGroup.Text>@</Form.InputGroup.Text>
      </Form.InputGroup>,
    );

    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("applies small size class", () => {
    const { container } = render(
      <Form.InputGroup size="sm">
        <Form.InputGroup.Text>@</Form.InputGroup.Text>
      </Form.InputGroup>,
    );

    expect(container.firstChild).toHaveClass("input-group-sm");
  });

  it("applies large size class", () => {
    const { container } = render(
      <Form.InputGroup size="lg">
        <Form.InputGroup.Text>@</Form.InputGroup.Text>
      </Form.InputGroup>,
    );

    expect(container.firstChild).toHaveClass("input-group-lg");
  });

  it("forwards additional props", () => {
    render(
      <Form.InputGroup data-testid="group">
        <Form.InputGroup.Text>@</Form.InputGroup.Text>
      </Form.InputGroup>,
    );

    expect(screen.getByTestId("group")).toBeInTheDocument();
  });

  it("exposes Text subcomponent", () => {
    expect(Form.InputGroup.Text).toBeDefined();
  });
});

describe("InputGroup.Text", () => {
  it("renders children", () => {
    render(<Form.InputGroup.Text>$</Form.InputGroup.Text>);

    expect(screen.getByText("$")).toBeInTheDocument();
  });

  it("renders as span", () => {
    render(<Form.InputGroup.Text>$</Form.InputGroup.Text>);

    expect(screen.getByText("$").tagName).toBe("SPAN");
  });

  it("applies base class", () => {
    render(<Form.InputGroup.Text>$</Form.InputGroup.Text>);

    expect(screen.getByText("$")).toHaveClass("input-group-text");
  });

  it("applies custom className", () => {
    render(
      <Form.InputGroup.Text className="custom-class">$</Form.InputGroup.Text>,
    );

    expect(screen.getByText("$")).toHaveClass("custom-class");
  });

  it("forwards additional props", () => {
    render(<Form.InputGroup.Text data-testid="addon">$</Form.InputGroup.Text>);

    expect(screen.getByTestId("addon")).toBeInTheDocument();
  });
});
