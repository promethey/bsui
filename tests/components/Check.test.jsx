import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Form } from "components";

describe("Check", () => {
  it("renders label", () => {
    render(<Form.Check label="Accept terms" />);

    expect(screen.getByText("Accept terms")).toBeInTheDocument();
  });

  it("renders checkbox by default", () => {
    render(<Form.Check label="Checkbox" />);

    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("renders radio input", () => {
    render(<Form.Check label="Radio" type="radio" />);

    expect(screen.getByRole("radio")).toBeInTheDocument();
  });

  it("renders switch as checkbox", () => {
    render(<Form.Check label="Switch" type="switch" />);

    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("applies form-switch class", () => {
    const { container } = render(<Form.Check label="Switch" type="switch" />);

    expect(container.firstChild).toHaveClass("form-switch");
  });

  it("applies inline class", () => {
    const { container } = render(<Form.Check label="Inline" inline />);

    expect(container.firstChild).toHaveClass("form-check-inline");
  });

  it("renders disabled input", () => {
    render(<Form.Check label="Disabled" disabled />);

    expect(screen.getByRole("checkbox")).toBeDisabled();
  });

  it("supports uncontrolled state via defaultChecked", () => {
    render(<Form.Check label="Checked" defaultChecked />);

    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("supports controlled state", () => {
    render(<Form.Check label="Controlled" checked onChange={() => {}} />);

    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("calls onChange when clicked", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(<Form.Check label="Change" onChange={handleChange} />);

    await user.click(screen.getByRole("checkbox"));

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("associates label with input", async () => {
    const user = userEvent.setup();

    render(<Form.Check id="accept" label="Accept" />);

    const input = screen.getByRole("checkbox");

    await user.click(screen.getByText("Accept"));

    expect(input).toBeChecked();
  });

  it("passes name attribute", () => {
    render(<Form.Check label="Option" name="group" />);

    expect(screen.getByRole("checkbox")).toHaveAttribute("name", "group");
  });

  it("passes value attribute", () => {
    render(<Form.Check label="Option" value="test-value" />);

    expect(screen.getByRole("checkbox")).toHaveAttribute("value", "test-value");
  });
});
