import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { InputGroup } from "components";

describe("InputGroup", () => {
  it("renders children", () => {
    render(
      <InputGroup>
        <InputGroup.Text>@</InputGroup.Text>
      </InputGroup>,
    );

    expect(screen.getByText("@")).toBeInTheDocument();
  });

  it("applies base class", () => {
    const { container } = render(
      <InputGroup>
        <InputGroup.Text>@</InputGroup.Text>
      </InputGroup>,
    );

    expect(container.firstChild).toHaveClass("input-group");
  });

  it("applies custom className", () => {
    const { container } = render(
      <InputGroup className="custom-class">
        <InputGroup.Text>@</InputGroup.Text>
      </InputGroup>,
    );

    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("applies small size class", () => {
    const { container } = render(
      <InputGroup size="sm">
        <InputGroup.Text>@</InputGroup.Text>
      </InputGroup>,
    );

    expect(container.firstChild).toHaveClass("input-group-sm");
  });

  it("applies large size class", () => {
    const { container } = render(
      <InputGroup size="lg">
        <InputGroup.Text>@</InputGroup.Text>
      </InputGroup>,
    );

    expect(container.firstChild).toHaveClass("input-group-lg");
  });

  it("forwards additional props", () => {
    render(
      <InputGroup data-testid="group">
        <InputGroup.Text>@</InputGroup.Text>
      </InputGroup>,
    );

    expect(screen.getByTestId("group")).toBeInTheDocument();
  });

  it("exposes Text subcomponent", () => {
    expect(InputGroup.Text).toBeDefined();
  });
});

describe("InputGroup.Text", () => {
  it("renders children", () => {
    render(<InputGroup.Text>$</InputGroup.Text>);

    expect(screen.getByText("$")).toBeInTheDocument();
  });

  it("renders as span", () => {
    render(<InputGroup.Text>$</InputGroup.Text>);

    expect(screen.getByText("$").tagName).toBe("SPAN");
  });

  it("applies base class", () => {
    render(<InputGroup.Text>$</InputGroup.Text>);

    expect(screen.getByText("$")).toHaveClass("input-group-text");
  });

  it("applies custom className", () => {
    render(<InputGroup.Text className="custom-class">$</InputGroup.Text>);

    expect(screen.getByText("$")).toHaveClass("custom-class");
  });

  it("forwards additional props", () => {
    render(<InputGroup.Text data-testid="addon">$</InputGroup.Text>);

    expect(screen.getByTestId("addon")).toBeInTheDocument();
  });
});
