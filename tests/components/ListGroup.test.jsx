import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ListGroup } from "components";

describe("ListGroup", () => {
  it("renders children", () => {
    render(
      <ListGroup>
        <ListGroup.Item>Item</ListGroup.Item>
      </ListGroup>,
    );

    expect(screen.getByText("Item")).toBeInTheDocument();
  });

  it("renders ul by default", () => {
    render(
      <ListGroup>
        <ListGroup.Item>Item</ListGroup.Item>
      </ListGroup>,
    );

    expect(screen.getByRole("list")).toHaveClass("list-group");
  });

  it("renders ol when numbered", () => {
    render(
      <ListGroup numbered>
        <ListGroup.Item>Item</ListGroup.Item>
      </ListGroup>,
    );

    expect(screen.getByRole("list").tagName).toBe("OL");
    expect(screen.getByRole("list")).toHaveClass(
      "list-group",
      "list-group-numbered",
    );
  });

  it("applies flush class", () => {
    render(
      <ListGroup flush>
        <ListGroup.Item>Item</ListGroup.Item>
      </ListGroup>,
    );

    expect(screen.getByRole("list")).toHaveClass("list-group-flush");
  });

  it("applies horizontal class", () => {
    render(
      <ListGroup horizontal>
        <ListGroup.Item>Item</ListGroup.Item>
      </ListGroup>,
    );

    expect(screen.getByRole("list")).toHaveClass("list-group-horizontal");
  });

  it("applies responsive horizontal class", () => {
    render(
      <ListGroup horizontal="lg">
        <ListGroup.Item>Item</ListGroup.Item>
      </ListGroup>,
    );

    expect(screen.getByRole("list")).toHaveClass("list-group-horizontal-lg");
  });

  it("applies custom className", () => {
    render(
      <ListGroup className="custom">
        <ListGroup.Item>Item</ListGroup.Item>
      </ListGroup>,
    );

    expect(screen.getByRole("list")).toHaveClass("custom");
  });
});

describe("ListGroup.Item", () => {
  it("renders li by default", () => {
    render(
      <ListGroup>
        <ListGroup.Item>Item</ListGroup.Item>
      </ListGroup>,
    );

    expect(screen.getByText("Item").tagName).toBe("LI");
    expect(screen.getByText("Item")).toHaveClass("list-group-item");
  });

  it("renders anchor", () => {
    render(
      <ListGroup>
        <ListGroup.Item as="a" to="/home">
          Link
        </ListGroup.Item>
      </ListGroup>,
    );

    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", "/home");
    expect(link).toHaveClass("list-group-item", "list-group-item-action");
  });

  it("renders button", () => {
    render(
      <ListGroup>
        <ListGroup.Item as="button">Button</ListGroup.Item>
      </ListGroup>,
    );

    const button = screen.getByRole("button");

    expect(button).toHaveAttribute("type", "button");
    expect(button).toHaveClass("list-group-item", "list-group-item-action");
  });

  it("applies tone", () => {
    render(
      <ListGroup>
        <ListGroup.Item tone="success">Item</ListGroup.Item>
      </ListGroup>,
    );

    expect(screen.getByText("Item")).toHaveClass("list-group-item-success");
  });

  it("applies active class", () => {
    render(
      <ListGroup>
        <ListGroup.Item active>Item</ListGroup.Item>
      </ListGroup>,
    );

    expect(screen.getByText("Item")).toHaveClass("active");
  });

  it("applies disabled class for anchor", () => {
    render(
      <ListGroup>
        <ListGroup.Item as="a" disabled>
          Link
        </ListGroup.Item>
      </ListGroup>,
    );

    expect(screen.getByRole("link")).toHaveClass("disabled");
  });

  it("sets disabled attribute for button", () => {
    render(
      <ListGroup>
        <ListGroup.Item as="button" disabled>
          Button
        </ListGroup.Item>
      </ListGroup>,
    );

    expect(screen.getByRole("button")).toBeDisabled();
    expect(screen.getByRole("button")).not.toHaveClass("disabled");
  });

  it("does not apply active or disabled when both props are true", () => {
    render(
      <ListGroup>
        <ListGroup.Item active disabled>
          Item
        </ListGroup.Item>
      </ListGroup>,
    );

    const item = screen.getByText("Item");

    expect(item).not.toHaveClass("active");
    expect(item).not.toHaveClass("disabled");
  });

  it("applies custom className", () => {
    render(
      <ListGroup>
        <ListGroup.Item className="custom">Item</ListGroup.Item>
      </ListGroup>,
    );

    expect(screen.getByText("Item")).toHaveClass("custom");
  });
});
