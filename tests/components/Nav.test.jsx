// @ts-nocheck
import { render, screen } from "@testing-library/react";
import { Nav } from "components";

describe("Nav", () => {
  it("renders children", () => {
    render(<Nav>Navigation</Nav>);

    expect(screen.getByText("Navigation")).toBeInTheDocument();
  });

  it("renders as ul by default", () => {
    const { container } = render(<Nav>Navigation</Nav>);

    expect(container.firstChild.tagName).toBe("UL");
  });

  it("renders custom element", () => {
    const { container } = render(<Nav as="nav">Navigation</Nav>);

    expect(container.firstChild.tagName).toBe("NAV");
  });

  it("adds base nav class", () => {
    const { container } = render(<Nav>Navigation</Nav>);

    expect(container.firstChild).toHaveClass("nav");
  });

  it("adds tabs class", () => {
    const { container } = render(<Nav view="tabs">Navigation</Nav>);

    expect(container.firstChild).toHaveClass("nav-tabs");
  });

  it("adds pills class", () => {
    const { container } = render(<Nav view="pills">Navigation</Nav>);

    expect(container.firstChild).toHaveClass("nav-pills");
  });

  it("adds fill class", () => {
    const { container } = render(<Nav fill>Navigation</Nav>);

    expect(container.firstChild).toHaveClass("nav-fill");
  });

  it("adds justified class", () => {
    const { container } = render(<Nav justified>Navigation</Nav>);

    expect(container.firstChild).toHaveClass("nav-justified");
  });

  it("merges custom className", () => {
    const { container } = render(
      <Nav className="custom-class">Navigation</Nav>,
    );

    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("passes style", () => {
    const { container } = render(
      <Nav style={{ color: "red" }}>Navigation</Nav>,
    );

    expect(container.firstChild).toHaveStyle({
      color: "rgb(255, 0, 0)",
    });
  });

  it("passes Prime props", () => {
    const { container } = render(<Nav d="flex">Navigation</Nav>);

    expect(container.firstChild).toHaveClass("d-flex");
  });

  it("renders Nav.Item and Nav.Link", () => {
    render(
      <Nav>
        <Nav.Item>
          <Nav.Link to="/home">Home</Nav.Link>
        </Nav.Item>
      </Nav>,
    );

    expect(screen.getByRole("list")).toHaveClass("nav");

    expect(screen.getByRole("listitem")).toHaveClass("nav-item");

    expect(screen.getByRole("link")).toHaveClass("nav-link");
    expect(screen.getByRole("link")).toHaveAttribute("href", "/home");
  });

  it("renders active and disabled Nav.Link inside Nav.Item", () => {
    render(
      <Nav>
        <Nav.Item>
          <Nav.Link active disabled>
            Home
          </Nav.Link>
        </Nav.Item>
      </Nav>,
    );

    expect(screen.getByRole("link")).toHaveClass(
      "nav-link",
      "active",
      "disabled",
    );
  });

  it("passes Prime props through Nav, Nav.Item and Nav.Link", () => {
    render(
      <Nav d="flex">
        <Nav.Item m={2}>
          <Nav.Link text="primary">Home</Nav.Link>
        </Nav.Item>
      </Nav>,
    );

    expect(screen.getByRole("list")).toHaveClass("d-flex");
    expect(screen.getByRole("listitem")).toHaveClass("m-2");
    expect(screen.getByRole("link")).toHaveClass("text-primary");
  });
});
