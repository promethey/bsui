import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Select } from "components";

describe("Select.Option", () => {
  it("renders option", () => {
    render(
      <select>
        <Select.Option value="1">Option 1</Select.Option>
      </select>,
    );

    expect(screen.getByRole("option")).toBeInTheDocument();
  });

  it("sets value", () => {
    render(
      <select>
        <Select.Option value="1">Option 1</Select.Option>
      </select>,
    );

    expect(screen.getByRole("option")).toHaveValue("1");
  });

  it("passes custom className", () => {
    render(
      <select>
        <Select.Option value="1" className="custom-option">
          Option 1
        </Select.Option>
      </select>,
    );

    expect(screen.getByRole("option")).toHaveClass("custom-option");
  });
});
