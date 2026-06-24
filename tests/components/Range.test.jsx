import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Range } from "components";

describe("Range", () => {
  it("renders bootstrap range class", () => {
    render(<Range />);

    expect(screen.getByRole("slider")).toHaveClass("form-range");
  });

  it("renders range input", () => {
    render(<Range />);

    expect(screen.getByRole("slider")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<Range className="custom-range" />);

    expect(screen.getByRole("slider")).toHaveClass(
      "form-range",
      "custom-range",
    );
  });

  it("applies disabled state", () => {
    render(<Range disabled />);

    expect(screen.getByRole("slider")).toBeDisabled();
  });

  it("applies min, max and step attributes", () => {
    render(<Range min={10} max={100} step={5} />);

    const range = screen.getByRole("slider");

    expect(range).toHaveAttribute("min", "10");
    expect(range).toHaveAttribute("max", "100");
    expect(range).toHaveAttribute("step", "5");
  });

  it("calls onChange when value changes", () => {
    const handleChange = vi.fn();

    render(<Range defaultValue={0} onChange={handleChange} />);

    fireEvent.change(screen.getByRole("slider"), {
      target: { value: "20" },
    });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("forwards additional props", () => {
    render(<Range data-testid="range" />);

    expect(screen.getByTestId("range")).toBeInTheDocument();
  });

  it("applies inline styles", () => {
    render(<Range style={{ width: "200px" }} />);

    expect(screen.getByRole("slider")).toHaveStyle({
      width: "200px",
    });
  });
});
