import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Check } from "components";

describe("Check", () => {
  it("renders label", () => {
    render(<Check label="Accept terms" />);

    expect(screen.getByText("Accept terms")).toBeInTheDocument();
  });

  it("renders checkbox by default", () => {
    render(<Check label="Checkbox" />);

    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("renders radio input", () => {
    render(<Check label="Radio" type="radio" />);

    expect(screen.getByRole("radio")).toBeInTheDocument();
  });

  it("renders switch as checkbox", () => {
    render(<Check label="Switch" type="switch" />);

    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("applies form-switch class", () => {
    const { container } = render(<Check label="Switch" type="switch" />);

    expect(container.firstChild).toHaveClass("form-switch");
  });

  it("applies inline class", () => {
    const { container } = render(<Check label="Inline" inline />);

    expect(container.firstChild).toHaveClass("form-check-inline");
  });

  it("renders disabled input", () => {
    render(<Check label="Disabled" disabled />);

    expect(screen.getByRole("checkbox")).toBeDisabled();
  });

  it("supports uncontrolled state via defaultChecked", () => {
    render(<Check label="Checked" defaultChecked />);

    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("supports controlled state", () => {
    render(<Check label="Controlled" checked onChange={() => {}} />);

    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("calls onChange when clicked", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(<Check label="Change" onChange={handleChange} />);

    await user.click(screen.getByRole("checkbox"));

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("associates label with input", async () => {
    const user = userEvent.setup();

    render(<Check id="accept" label="Accept" />);

    const input = screen.getByRole("checkbox");

    await user.click(screen.getByText("Accept"));

    expect(input).toBeChecked();
  });

  it("passes name attribute", () => {
    render(<Check label="Option" name="group" />);

    expect(screen.getByRole("checkbox")).toHaveAttribute("name", "group");
  });

  it("passes value attribute", () => {
    render(<Check label="Option" value="test-value" />);

    expect(screen.getByRole("checkbox")).toHaveAttribute("value", "test-value");
  });
});
