// @ts-nocheck
import { render, screen } from "@testing-library/react";
import { FloatingLabel } from "components";

describe("FloatingLabel", () => {
  it("renders floating label container", () => {
    const { container } = render(
      <FloatingLabel label="Email">
        <input placeholder="Email" />
      </FloatingLabel>,
    );

    expect(container.firstChild).toHaveClass("form-floating");
  });

  it("renders child control", () => {
    render(
      <FloatingLabel label="Email">
        <input placeholder="Email" />
      </FloatingLabel>,
    );

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("renders label", () => {
    render(
      <FloatingLabel label="Email">
        <input placeholder="Email" />
      </FloatingLabel>,
    );

    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <FloatingLabel label="Email" className="custom-class">
        <input placeholder="Email" />
      </FloatingLabel>,
    );

    expect(container.firstChild).toHaveClass("form-floating", "custom-class");
  });

  it("applies custom styles", () => {
    const { container } = render(
      <FloatingLabel label="Email" style={{ marginTop: "10px" }}>
        <input placeholder="Email" />
      </FloatingLabel>,
    );

    expect(container.firstChild).toHaveStyle({
      marginTop: "10px",
    });
  });

  it("generates id when child does not provide one", () => {
    render(
      <FloatingLabel label="Email">
        <input placeholder="Email" />
      </FloatingLabel>,
    );

    const input = screen.getByRole("textbox");
    const label = screen.getByText("Email");

    expect(input.id).toBeTruthy();
    expect(label).toHaveAttribute("for", input.id);
  });

  it("uses existing child id", () => {
    render(
      <FloatingLabel label="Email">
        <input id="email-input" placeholder="Email" />
      </FloatingLabel>,
    );

    const input = screen.getByRole("textbox");
    const label = screen.getByText("Email");

    expect(input).toHaveAttribute("id", "email-input");
    expect(label).toHaveAttribute("for", "email-input");
  });

  it("links label with control", () => {
    render(
      <FloatingLabel label="Email">
        <input id="email" placeholder="Email" />
      </FloatingLabel>,
    );

    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });

  it("returns null for invalid child", () => {
    const { container } = render(
      <FloatingLabel label="Email">{"invalid child"}</FloatingLabel>,
    );

    expect(container.firstChild).toBeNull();
  });
});
