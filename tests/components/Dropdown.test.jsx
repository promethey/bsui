// @ts-nocheck
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Dropdown } from "components";

describe("Dropdown", () => {
  it("renders children", () => {
    render(
      <Dropdown>
        <span>Content</span>
      </Dropdown>,
    );

    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("applies base class", () => {
    render(
      <Dropdown data-testid="dropdown">
        <span />
      </Dropdown>,
    );

    expect(screen.getByTestId("dropdown")).toHaveClass("dropdown");
  });

  it("applies custom className", () => {
    render(
      <Dropdown className="custom" data-testid="dropdown">
        <span />
      </Dropdown>,
    );

    expect(screen.getByTestId("dropdown")).toHaveClass("custom");
  });

  it("renders custom element", () => {
    render(
      <Dropdown as="section" data-testid="dropdown">
        <span />
      </Dropdown>,
    );

    expect(screen.getByTestId("dropdown").tagName).toBe("SECTION");
  });

  it("applies inline styles", () => {
    render(
      <Dropdown style={{ backgroundColor: "red" }} data-testid="dropdown">
        <span />
      </Dropdown>,
    );

    expect(screen.getByTestId("dropdown")).toHaveStyle({
      backgroundColor: "rgb(255, 0, 0)",
    });
  });
});

describe("Dropdown.Toggle", () => {
  it("renders toggle", () => {
    render(
      <Dropdown>
        <Dropdown.Toggle>Toggle</Dropdown.Toggle>
      </Dropdown>,
    );

    expect(screen.getByRole("button", { name: "Toggle" })).toBeInTheDocument();
  });

  it("applies base class", () => {
    render(
      <Dropdown>
        <Dropdown.Toggle>Toggle</Dropdown.Toggle>
      </Dropdown>,
    );

    expect(screen.getByRole("button", { name: "Toggle" })).toHaveClass(
      "dropdown-toggle",
    );
  });

  it("applies split class", () => {
    render(
      <Dropdown>
        <Dropdown.Toggle split>Toggle</Dropdown.Toggle>
      </Dropdown>,
    );

    expect(screen.getByRole("button", { name: "Toggle" })).toHaveClass(
      "dropdown-toggle-split",
    );
  });

  it("applies custom className", () => {
    render(
      <Dropdown>
        <Dropdown.Toggle className="custom">Toggle</Dropdown.Toggle>
      </Dropdown>,
    );

    expect(screen.getByRole("button", { name: "Toggle" })).toHaveClass(
      "custom",
    );
  });

  it("applies inline styles", () => {
    render(
      <Dropdown>
        <Dropdown.Toggle style={{ color: "red" }}>Toggle</Dropdown.Toggle>
      </Dropdown>,
    );

    expect(screen.getByRole("button", { name: "Toggle" })).toHaveStyle({
      color: "rgb(255, 0, 0)",
    });
  });

  describe("Dropdown.Item", () => {
    it("renders item", () => {
      render(<Dropdown.Item>Item</Dropdown.Item>);

      expect(screen.getByRole("link")).toBeInTheDocument();
    });

    it("applies base class", () => {
      render(<Dropdown.Item>Item</Dropdown.Item>);

      expect(screen.getByRole("link")).toHaveClass("dropdown-item");
    });

    it("applies active class", () => {
      render(<Dropdown.Item active>Item</Dropdown.Item>);

      expect(screen.getByRole("link")).toHaveClass("active");
    });

    it("applies disabled class", () => {
      render(<Dropdown.Item disabled>Item</Dropdown.Item>);

      expect(screen.getByRole("link")).toHaveClass("disabled");
    });

    it("sets href", () => {
      render(<Dropdown.Item to="/docs">Item</Dropdown.Item>);

      expect(screen.getByRole("link")).toHaveAttribute("href", "/docs");
    });

    it("applies custom className", () => {
      render(<Dropdown.Item className="custom">Item</Dropdown.Item>);

      expect(screen.getByRole("link")).toHaveClass("custom");
    });

    it("applies inline styles", () => {
      render(<Dropdown.Item style={{ color: "red" }}>Item</Dropdown.Item>);

      expect(screen.getByRole("link")).toHaveStyle({
        color: "rgb(255, 0, 0)",
      });
    });
  });

  describe("Dropdown.Divider", () => {
    it("renders divider", () => {
      render(<Dropdown.Divider />);

      expect(document.querySelector("hr")).toBeInTheDocument();
    });

    it("applies base class", () => {
      render(<Dropdown.Divider />);

      expect(document.querySelector("hr")).toHaveClass("dropdown-divider");
    });

    it("applies custom className", () => {
      render(<Dropdown.Divider className="custom" />);

      expect(document.querySelector("hr")).toHaveClass("custom");
    });

    it("applies inline styles", () => {
      render(<Dropdown.Divider style={{ marginTop: "1rem" }} />);

      expect(document.querySelector("hr")).toHaveStyle({
        marginTop: "1rem",
      });
    });
  });
});
