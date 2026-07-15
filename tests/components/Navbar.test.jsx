import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Navbar } from "components";

describe("Navbar", () => {
  it("renders children", () => {
    render(<Navbar>Content</Navbar>);

    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("renders nav element", () => {
    render(<Navbar>Content</Navbar>);

    expect(screen.getByRole("navigation")).toHaveClass("navbar");
  });

  it("applies light tone", () => {
    render(<Navbar tone="light">Content</Navbar>);

    expect(screen.getByRole("navigation")).toHaveClass("navbar-light");
  });

  it("applies dark tone", () => {
    render(<Navbar tone="dark">Content</Navbar>);

    expect(screen.getByRole("navigation")).toHaveClass("navbar-dark");
  });

  it("applies expand breakpoint", () => {
    render(<Navbar expand="lg">Content</Navbar>);

    expect(screen.getByRole("navigation")).toHaveClass("navbar-expand-lg");
  });

  it("applies placement", () => {
    render(<Navbar placement="fixed-top">Content</Navbar>);

    expect(screen.getByRole("navigation")).toHaveClass("fixed-top");
  });

  it("applies custom className", () => {
    render(<Navbar className="custom">Content</Navbar>);

    expect(screen.getByRole("navigation")).toHaveClass("custom");
  });

  it("applies inline styles", () => {
    render(<Navbar style={{ background: "red" }}>Content</Navbar>);

    expect(screen.getByRole("navigation")).toHaveStyle({
      background: "rgb(255, 0, 0)",
    });
  });
});

describe("Navbar.Brand", () => {
  it("renders link", () => {
    render(<Navbar.Brand>Brand</Navbar.Brand>);

    expect(screen.getByRole("link")).toHaveClass("navbar-brand");
  });

  it("applies href", () => {
    render(<Navbar.Brand to="/home">Brand</Navbar.Brand>);

    expect(screen.getByRole("link")).toHaveAttribute("href", "/home");
  });

  it("supports custom element", () => {
    render(<Navbar.Brand as="span">Brand</Navbar.Brand>);

    expect(screen.getByText("Brand").tagName).toBe("SPAN");
  });

  it("applies className", () => {
    render(<Navbar.Brand className="custom">Brand</Navbar.Brand>);

    expect(screen.getByRole("link")).toHaveClass("custom");
  });
});

describe("Navbar.Nav", () => {
  it("renders nav list", () => {
    const { container } = render(
      <Navbar.Nav>
        <li>Item</li>
      </Navbar.Nav>,
    );

    expect(container.querySelector(".navbar-nav")).toBeInTheDocument();
  });

  it("applies scroll class", () => {
    const { container } = render(
      <Navbar.Nav scroll>
        <li>Item</li>
      </Navbar.Nav>,
    );

    expect(container.querySelector(".navbar-nav")).toHaveClass(
      "navbar-nav-scroll",
    );
  });

  it("applies scroll height", () => {
    const { container } = render(
      <Navbar.Nav scrollHeight="200px">
        <li>Item</li>
      </Navbar.Nav>,
    );

    expect(container.querySelector(".navbar-nav")).toHaveStyle({
      "--bs-scroll-height": "200px",
    });
  });

  it("applies custom className", () => {
    const { container } = render(
      <Navbar.Nav className="custom">
        <li>Item</li>
      </Navbar.Nav>,
    );

    expect(container.querySelector(".navbar-nav")).toHaveClass("custom");
  });
});

describe("Navbar.Text", () => {
  it("renders text", () => {
    const { container } = render(<Navbar.Text>Text</Navbar.Text>);

    expect(container.querySelector(".navbar-text")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <Navbar.Text className="custom">Text</Navbar.Text>,
    );

    expect(container.querySelector(".navbar-text")).toHaveClass("custom");
  });
});

describe("Navbar.Toggler", () => {
  it("renders button", () => {
    render(
      <Navbar>
        <Navbar.Toggler />
      </Navbar>,
    );

    expect(screen.getByRole("button")).toHaveClass("navbar-toggler");
  });

  it("renders toggler icon", () => {
    const { container } = render(
      <Navbar>
        <Navbar.Toggler />
      </Navbar>,
    );

    expect(container.querySelector(".navbar-toggler-icon")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(
      <Navbar>
        <Navbar.Toggler className="custom" />
      </Navbar>,
    );

    expect(screen.getByRole("button")).toHaveClass("custom");
  });
});

describe("Navbar.Collapse", () => {
  it("renders collapse", () => {
    const { container } = render(
      <Navbar>
        <Navbar.Collapse>Content</Navbar.Collapse>
      </Navbar>,
    );

    expect(container.querySelector(".navbar-collapse")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <Navbar>
        <Navbar.Collapse className="custom">Content</Navbar.Collapse>
      </Navbar>,
    );

    expect(container.querySelector(".navbar-collapse")).toHaveClass("custom");
  });

  it("renders children", () => {
    render(
      <Navbar>
        <Navbar.Collapse>Content</Navbar.Collapse>
      </Navbar>,
    );

    expect(screen.getByText("Content")).toBeInTheDocument();
  });
});
