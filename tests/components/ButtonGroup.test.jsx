import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ButtonGroup } from "components";

describe("ButtonGroup", () => {
  it("renders children", () => {
    render(
      <ButtonGroup>
        <button>Button 1</button>
      </ButtonGroup>,
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("renders group role", () => {
    render(
      <ButtonGroup>
        <button>Button 1</button>
      </ButtonGroup>,
    );

    expect(screen.getByRole("group")).toBeInTheDocument();
  });

  it("applies default class", () => {
    render(
      <ButtonGroup>
        <button>Button 1</button>
      </ButtonGroup>,
    );

    expect(screen.getByRole("group")).toHaveClass("btn-group");
  });

  it("applies custom className", () => {
    render(
      <ButtonGroup className="custom-group">
        <button>Button 1</button>
      </ButtonGroup>,
    );

    expect(screen.getByRole("group")).toHaveClass("custom-group");
  });

  it("supports small size", () => {
    render(
      <ButtonGroup size="sm">
        <button>Button 1</button>
      </ButtonGroup>,
    );

    expect(screen.getByRole("group")).toHaveClass("btn-group-sm");
  });

  it("supports large size", () => {
    render(
      <ButtonGroup size="lg">
        <button>Button 1</button>
      </ButtonGroup>,
    );

    expect(screen.getByRole("group")).toHaveClass("btn-group-lg");
  });

  it("supports vertical mode", () => {
    render(
      <ButtonGroup vertical>
        <button>Button 1</button>
      </ButtonGroup>,
    );

    expect(screen.getByRole("group")).toHaveClass("btn-group-vertical");
  });

  it("passes custom attributes", () => {
    render(
      <ButtonGroup data-testid="group">
        <button>Button 1</button>
      </ButtonGroup>,
    );

    expect(screen.getByTestId("group")).toBeInTheDocument();
  });

  it("supports inline styles", () => {
    render(
      <ButtonGroup style={{ width: "200px" }}>
        <button>Button 1</button>
      </ButtonGroup>,
    );

    expect(screen.getByRole("group")).toHaveStyle({
      width: "200px",
    });
  });

  it("supports multiple buttons", () => {
    render(
      <ButtonGroup>
        <button>Button 1</button>
        <button>Button 2</button>
        <button>Button 3</button>
      </ButtonGroup>,
    );

    expect(screen.getAllByRole("button")).toHaveLength(3);
  });
});
