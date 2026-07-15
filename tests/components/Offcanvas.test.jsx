// @ts-nocheck
import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { Offcanvas } from "components";
import OffcanvasBackdrop from "components/Offcanvas/OffcanvasBackdrop";
import { OffcanvasContext } from "components/Offcanvas/OffcanvasContext";

describe("Offcanvas API", () => {
  it("renders children when open", () => {
    render(
      <Offcanvas open>
        <div>content</div>
      </Offcanvas>,
    );

    expect(screen.getByText("content")).toBeInTheDocument();
  });

  it("does not render when closed", () => {
    const { queryByText } = render(
      <Offcanvas open={false}>
        <div>content</div>
      </Offcanvas>,
    );

    expect(queryByText("content")).not.toBeInTheDocument();
  });

  it("applies placement class", () => {
    const { container } = render(
      <Offcanvas open placement="end">
        <div />
      </Offcanvas>,
    );

    expect(container.firstChild).toHaveClass("offcanvas");
    expect(container.firstChild).toHaveClass("offcanvas-end");
  });

  it("applies custom className", () => {
    const { container } = render(
      <Offcanvas open className="custom-class">
        <div />
      </Offcanvas>,
    );

    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("passes style prop to root element", () => {
    const { container } = render(
      <Offcanvas open style={{ backgroundColor: "red" }}>
        <div />
      </Offcanvas>,
    );

    expect(container.firstChild).toHaveStyle({
      backgroundColor: "rgb(255, 0, 0)",
    });
  });

  it("renders backdrop when enabled", () => {
    render(
      <Offcanvas open backdrop>
        <div />
      </Offcanvas>,
    );

    expect(document.body.querySelector(".offcanvas-backdrop")).toBeTruthy();
  });

  it("does not render backdrop when disabled", () => {
    render(
      <Offcanvas open backdrop={false}>
        <div />
      </Offcanvas>,
    );

    expect(document.body.querySelector(".offcanvas-backdrop")).toBeFalsy();
  });
});

describe("OffcanvasBody API", () => {
  it("renders children", () => {
    render(
      <Offcanvas.Body>
        <div>body</div>
      </Offcanvas.Body>,
    );

    expect(screen.getByText("body")).toBeInTheDocument();
  });

  it("applies className", () => {
    const { container } = render(
      <Offcanvas.Body className="x">
        <div />
      </Offcanvas.Body>,
    );

    expect(container.firstChild).toHaveClass("offcanvas-body");
    expect(container.firstChild).toHaveClass("x");
  });

  it("passes style", () => {
    const { container } = render(
      <Offcanvas.Body style={{ padding: 10 }}>
        <div />
      </Offcanvas.Body>,
    );

    expect(container.firstChild).toHaveStyle({ padding: "10px" });
  });
});

describe("OffcanvasHeader API", () => {
  it("renders children", () => {
    render(
      <Offcanvas open>
        <Offcanvas.Header>
          <div>header</div>
        </Offcanvas.Header>
      </Offcanvas>,
    );

    expect(screen.getByText("header")).toBeInTheDocument();
  });

  it("applies className", () => {
    render(
      <Offcanvas open>
        <Offcanvas.Header className="x">
          <div>header</div>
        </Offcanvas.Header>
      </Offcanvas>,
    );

    const header = screen.getByText("header").closest(".offcanvas-header");

    expect(header).toBeInTheDocument();
    expect(header).toHaveClass("offcanvas-header");
    expect(header).toHaveClass("x");
  });

  it("renders close button when enabled", () => {
    const onClose = vi.fn();

    const { container } = render(
      <OffcanvasContext.Provider value={{ onClose }}>
        <Offcanvas.Header closeButton>
          <div />
        </Offcanvas.Header>
      </OffcanvasContext.Provider>,
    );

    expect(container.querySelector("button")).not.toBeNull();
  });

  it("calls onClose when close button clicked", () => {
    const onClose = vi.fn();

    const { container } = render(
      <OffcanvasContext.Provider value={{ onClose }}>
        <Offcanvas.Header closeButton>
          <div />
        </Offcanvas.Header>
      </OffcanvasContext.Provider>,
    );

    const button = container.querySelector("button");
    expect(button).not.toBeNull();

    fireEvent.click(button);

    expect(onClose).toHaveBeenCalledWith(expect.any(Object), "close-button");
  });
});

describe("OffcanvasTitle API", () => {
  it("renders children", () => {
    render(<Offcanvas.Title>Title</Offcanvas.Title>);

    expect(screen.getByText("Title")).toBeInTheDocument();
  });

  it("applies className", () => {
    const { container } = render(
      <Offcanvas.Title className="x">Title</Offcanvas.Title>,
    );

    expect(container.firstChild).toHaveClass("offcanvas-title");
    expect(container.firstChild).toHaveClass("x");
  });

  it("renders as h5", () => {
    const { container } = render(<Offcanvas.Title>Title</Offcanvas.Title>);

    expect(container.firstChild.tagName).toBe("H5");
  });
});
