// @ts-nocheck
import { render, screen } from "@testing-library/react";
import { Prime } from "components";

describe("Prime", () => {
  it("renders children", () => {
    render(<Prime>Content</Prime>);

    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("renders custom element", () => {
    render(<Prime as="section">Content</Prime>);

    expect(screen.getByText("Content").tagName).toBe("SECTION");
  });

  it("applies inline styles", () => {
    render(<Prime style={{ color: "red" }}>Content</Prime>);

    expect(screen.getByText("Content")).toHaveStyle({
      color: "rgb(255, 0, 0)",
    });
  });

  it("applies custom className", () => {
    render(<Prime className="custom-class">Content</Prime>);

    expect(screen.getByText("Content")).toHaveClass("custom-class");
  });

  it("does not render class attribute when no classes are resolved", () => {
    render(<Prime>Content</Prime>);

    expect(screen.getByText("Content")).not.toHaveAttribute("class");
  });

  it("forwards additional props", () => {
    render(
      <Prime id="prime" title="Prime component" data-testid="prime">
        Content
      </Prime>,
    );

    const element = screen.getByTestId("prime");

    expect(element).toHaveAttribute("id", "prime");
    expect(element).toHaveAttribute("title", "Prime component");
  });

  it("renders sizing utilities", () => {
    render(
      <Prime w={100} h={100}>
        Content
      </Prime>,
    );

    expect(screen.getByText("Content")).toHaveClass("w-100", "h-100");
  });

  it("renders display utility", () => {
    render(<Prime d="flex">Content</Prime>);

    expect(screen.getByText("Content")).toHaveClass("d-flex");
  });

  it("renders display print utility", () => {
    render(<Prime dp="block">Content</Prime>);

    expect(screen.getByText("Content")).toHaveClass("d-print-block");
  });

  it("renders flex utilities", () => {
    render(
      <Prime
        flex={{
          justifyContent: "center",
          alignItems: "center",
        }}>
        Content
      </Prime>,
    );

    expect(screen.getByText("Content")).toHaveClass(
      "justify-content-center",
      "align-items-center",
    );
  });

  it("renders position utilities", () => {
    render(
      <Prime pos="relative" top={0}>
        Content
      </Prime>,
    );

    expect(screen.getByText("Content")).toHaveClass(
      "position-relative",
      "top-0",
    );
  });

  it("renders float utility", () => {
    render(<Prime float="end">Content</Prime>);

    expect(screen.getByText("Content")).toHaveClass("float-end");
  });

  it("renders spacing utilities", () => {
    render(
      <Prime m={3} px={4}>
        Content
      </Prime>,
    );

    expect(screen.getByText("Content")).toHaveClass("m-3", "px-4");
  });

  it("renders background utility", () => {
    render(<Prime bg="primary">Content</Prime>);

    expect(screen.getByText("Content")).toHaveClass("bg-primary");
  });

  it("renders text utility", () => {
    render(<Prime text="danger">Content</Prime>);

    expect(screen.getByText("Content")).toHaveClass("text-danger");
  });

  it("renders font utilities", () => {
    render(
      <Prime fs={2} fw="bold" fst="italic">
        Content
      </Prime>,
    );

    expect(screen.getByText("Content")).toHaveClass(
      "fs-2",
      "fw-bold",
      "fst-italic",
    );
  });

  it("renders opacity utility", () => {
    render(<Prime opacity={75}>Content</Prime>);

    expect(screen.getByText("Content")).toHaveClass("opacity-75");
  });

  it("renders border utility", () => {
    render(<Prime border>Content</Prime>);

    expect(screen.getByText("Content")).toHaveClass("border");
  });

  it("renders rounded utility", () => {
    render(<Prime rounded>Content</Prime>);

    expect(screen.getByText("Content")).toHaveClass("rounded");
  });

  it("renders shadow utility", () => {
    render(<Prime shadow>Content</Prime>);

    expect(screen.getByText("Content")).toHaveClass("shadow");
  });

  it("renders overflow utility", () => {
    render(<Prime overflow="hidden">Content</Prime>);

    expect(screen.getByText("Content")).toHaveClass("overflow-hidden");
  });

  it("combines multiple utilities", () => {
    render(
      <Prime
        d="flex"
        flex="center"
        m={3}
        bg="primary"
        rounded
        shadow
        opacity={75}>
        Content
      </Prime>,
    );

    expect(screen.getByText("Content")).toHaveClass(
      "d-flex",
      "justify-content-center",
      "align-items-center",
      "m-3",
      "bg-primary",
      "rounded",
      "shadow",
      "opacity-75",
    );
  });
});
