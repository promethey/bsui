import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Form } from "components";

describe("Form.Select", () => {
  it("renders select element", () => {
    render(
      <Form.Select>
        <Form.Select.Option value="1">Option 1</Form.Select.Option>
      </Form.Select>,
    );

    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("renders options", () => {
    render(
      <Form.Select>
        <Form.Select.Option value="1">Option 1</Form.Select.Option>
        <Form.Select.Option value="2">Option 2</Form.Select.Option>
      </Form.Select>,
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
      <Form.Select size="lg">
        <Form.Select.Option value="1">Option 1</Form.Select.Option>
      </Form.Select>,
    );

    expect(screen.getByRole("combobox")).toHaveClass("form-select-lg");
  });

  it("supports disabled state", () => {
    render(
      <Form.Select disabled>
        <Form.Select.Option value="1">Option 1</Form.Select.Option>
      </Form.Select>,
    );

    expect(screen.getByRole("combobox")).toBeDisabled();
  });

  it("supports required state", () => {
    render(
      <Form.Select required>
        <Form.Select.Option value="1">Option 1</Form.Select.Option>
      </Form.Select>,
    );

    expect(screen.getByRole("combobox")).toBeRequired();
  });

  it("supports controlled value", () => {
    render(
      <Form.Select value="2" onChange={() => {}}>
        <Form.Select.Option value="1">Option 1</Form.Select.Option>
        <Form.Select.Option value="2">Option 2</Form.Select.Option>
      </Form.Select>,
    );

    expect(screen.getByRole("combobox")).toHaveValue("2");
  });

  it("calls onChange", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(
      <Form.Select onChange={handleChange}>
        <Form.Select.Option value="1">Option 1</Form.Select.Option>
        <Form.Select.Option value="2">Option 2</Form.Select.Option>
      </Form.Select>,
    );

    await user.selectOptions(screen.getByRole("combobox"), "2");

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("calls onFocus", async () => {
    const user = userEvent.setup();
    const handleFocus = vi.fn();

    render(
      <Form.Select onFocus={handleFocus}>
        <Form.Select.Option value="1">Option 1</Form.Select.Option>
      </Form.Select>,
    );

    await user.tab();

    expect(handleFocus).toHaveBeenCalledTimes(1);
  });

  it("calls onBlur", async () => {
    const user = userEvent.setup();
    const handleBlur = vi.fn();

    render(
      <>
        <Form.Select onBlur={handleBlur}>
          <Form.Select.Option value="1">Option 1</Form.Select.Option>
        </Form.Select>

        <button>Next</button>
      </>,
    );

    await user.tab();
    await user.tab();

    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  it("supports multiple selection", () => {
    render(
      <Form.Select multiple>
        <Form.Select.Option value="1">Option 1</Form.Select.Option>
        <Form.Select.Option value="2">Option 2</Form.Select.Option>
      </Form.Select>,
    );

    expect(screen.getByRole("listbox")).toHaveAttribute("multiple");
  });

  it("supports visibleOptions", () => {
    render(
      <Form.Select visibleOptions={5}>
        <Form.Select.Option value="1">Option 1</Form.Select.Option>
      </Form.Select>,
    );

    expect(screen.getByRole("listbox")).toHaveAttribute("size", "5");
  });

  it("renders option", () => {
    render(
      <select>
        <Form.Select.Option value="1">Option 1</Form.Select.Option>
      </select>,
    );

    expect(screen.getByRole("option")).toBeInTheDocument();
  });

  it("sets value", () => {
    render(
      <select>
        <Form.Select.Option value="1">Option 1</Form.Select.Option>
      </select>,
    );

    expect(screen.getByRole("option")).toHaveValue("1");
  });

  it("passes custom className", () => {
    render(
      <select>
        <Form.Select.Option value="1" className="custom-option">
          Option 1
        </Form.Select.Option>
      </select>,
    );

    expect(screen.getByRole("option")).toHaveClass("custom-option");
  });
});
