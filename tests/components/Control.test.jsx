// @ts-nocheck
import { render, screen } from "@testing-library/react";
import { Form } from "components";

describe("Form.Control", () => {
  it("renders textarea", () => {
    render(<Form.Control as="textarea" />);

    const control = screen.getByRole("textbox");

    expect(control.tagName).toBe("TEXTAREA");
    expect(control).toHaveClass("form-control");
  });

  it("renders placeholder", () => {
    render(<Form.Control placeholder="Enter email" />);

    expect(screen.getByPlaceholderText("Enter email")).toBeInTheDocument();
  });

  it("renders value", () => {
    render(<Form.Control defaultValue="John" />);

    expect(screen.getByDisplayValue("John")).toBeInTheDocument();
  });

  it("applies disabled attribute", () => {
    render(<Form.Control disabled />);

    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("applies readonly attribute", () => {
    render(<Form.Control readOnly />);

    expect(screen.getByRole("textbox")).toHaveAttribute("readonly");
  });

  it("applies small size class", () => {
    render(<Form.Control size="sm" />);

    expect(screen.getByRole("textbox")).toHaveClass("form-control-sm");
  });

  it("applies large size class", () => {
    render(<Form.Control size="lg" />);

    expect(screen.getByRole("textbox")).toHaveClass("form-control-lg");
  });

  it("applies plaintext class", () => {
    render(<Form.Control plaintext />);

    expect(screen.getByRole("textbox")).toHaveClass("form-control-plaintext");
  });

  it("applies color class for color inputs", () => {
    const { container } = render(<Form.Control type="color" />);

    expect(container.querySelector('input[type="color"]')).toHaveClass(
      "form-control-color",
    );
  });

  it("applies multiple attribute for file inputs", () => {
    const { container } = render(<Form.Control type="file" multiple />);

    expect(container.querySelector('input[type="file"]')).toHaveAttribute(
      "multiple",
    );
  });

  it("applies rows attribute", () => {
    render(<Form.Control as="textarea" rows={5} />);

    expect(screen.getByRole("textbox")).toHaveAttribute("rows", "5");
  });

  it("merges custom classes", () => {
    render(<Form.Control className="custom-class" />);

    expect(screen.getByRole("textbox")).toHaveClass(
      "form-control",
      "custom-class",
    );
  });
});
