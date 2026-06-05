// @ts-nocheck
import { render, screen } from "@testing-library/react";
import { Control } from "components";

describe("Control", () => {
  it("renders textarea", () => {
    render(<Control as="textarea" />);

    const control = screen.getByRole("textbox");

    expect(control.tagName).toBe("TEXTAREA");
    expect(control).toHaveClass("form-control");
  });

  it("renders placeholder", () => {
    render(<Control placeholder="Enter email" />);

    expect(screen.getByPlaceholderText("Enter email")).toBeInTheDocument();
  });

  it("renders value", () => {
    render(<Control value="John" />);

    expect(screen.getByDisplayValue("John")).toBeInTheDocument();
  });

  it("applies disabled attribute", () => {
    render(<Control disabled />);

    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("applies readonly attribute", () => {
    render(<Control readOnly />);

    expect(screen.getByRole("textbox")).toHaveAttribute("readonly");
  });

  it("applies small size class", () => {
    render(<Control size="sm" />);

    expect(screen.getByRole("textbox")).toHaveClass("form-control-sm");
  });

  it("applies large size class", () => {
    render(<Control size="lg" />);

    expect(screen.getByRole("textbox")).toHaveClass("form-control-lg");
  });

  it("applies plaintext class", () => {
    render(<Control plaintext />);

    expect(screen.getByRole("textbox")).toHaveClass("form-control-plaintext");
  });

  it("applies color class for color inputs", () => {
    const { container } = render(<Control type="color" />);

    expect(container.querySelector('input[type="color"]')).toHaveClass(
      "form-control-color",
    );
  });

  it("applies multiple attribute for file inputs", () => {
    const { container } = render(<Control type="file" multiple />);

    expect(container.querySelector('input[type="file"]')).toHaveAttribute(
      "multiple",
    );
  });

  it("applies rows attribute", () => {
    render(<Control as="textarea" rows={5} />);

    expect(screen.getByRole("textbox")).toHaveAttribute("rows", "5");
  });

  it("merges custom classes", () => {
    render(<Control className="custom-class" />);

    expect(screen.getByRole("textbox")).toHaveClass(
      "form-control",
      "custom-class",
    );
  });
});
