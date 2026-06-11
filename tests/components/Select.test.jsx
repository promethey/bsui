import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Select } from "components";

describe("Select", () => {
  it("renders select element", () => {
    render(
      <Select>
        <Select.Option value="1">Option 1</Select.Option>
      </Select>,
    );

    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("renders options", () => {
    render(
      <Select>
        <Select.Option value="1">Option 1</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
      </Select>,
    );

    expect(
      screen.getByRole("option", { name: "Option 1" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("option", { name: "Option 2" }),
    ).toBeInTheDocument();
  });

  it("applies bootstrap size class", () => {
    render(
      <Select size="lg">
        <Select.Option value="1">Option 1</Select.Option>
      </Select>,
    );

    expect(screen.getByRole("combobox")).toHaveClass("form-select-lg");
  });

  it("supports disabled state", () => {
    render(
      <Select disabled>
        <Select.Option value="1">Option 1</Select.Option>
      </Select>,
    );

    expect(screen.getByRole("combobox")).toBeDisabled();
  });

  it("supports required state", () => {
    render(
      <Select required>
        <Select.Option value="1">Option 1</Select.Option>
      </Select>,
    );

    expect(screen.getByRole("combobox")).toBeRequired();
  });

  it("supports controlled value", () => {
    render(
      <Select value="2" onChange={() => {}}>
        <Select.Option value="1">Option 1</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
      </Select>,
    );

    expect(screen.getByRole("combobox")).toHaveValue("2");
  });

  it("calls onChange", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(
      <Select onChange={handleChange}>
        <Select.Option value="1">Option 1</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
      </Select>,
    );

    await user.selectOptions(screen.getByRole("combobox"), "2");

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("calls onFocus", async () => {
    const user = userEvent.setup();
    const handleFocus = vi.fn();

    render(
      <Select onFocus={handleFocus}>
        <Select.Option value="1">Option 1</Select.Option>
      </Select>,
    );

    await user.tab();

    expect(handleFocus).toHaveBeenCalledTimes(1);
  });

  it("calls onBlur", async () => {
    const user = userEvent.setup();
    const handleBlur = vi.fn();

    render(
      <>
        <Select onBlur={handleBlur}>
          <Select.Option value="1">Option 1</Select.Option>
        </Select>

        <button>Next</button>
      </>,
    );

    await user.tab();
    await user.tab();

    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  it("supports multiple selection", () => {
    render(
      <Select multiple>
        <Select.Option value="1">Option 1</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
      </Select>,
    );

    expect(screen.getByRole("listbox")).toHaveAttribute("multiple");
  });

  it("supports visibleOptions", () => {
    render(
      <Select visibleOptions={5}>
        <Select.Option value="1">Option 1</Select.Option>
      </Select>,
    );

    expect(screen.getByRole("listbox")).toHaveAttribute("size", "5");
  });
});
