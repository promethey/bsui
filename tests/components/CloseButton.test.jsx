import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { CloseButton } from "components";

describe("CloseButton", () => {
  it("renders button with base attributes", () => {
    render(<CloseButton />);

    const btn = screen.getByRole("button");

    expect(btn).toBeInTheDocument();
    expect(btn).toHaveAttribute("type", "button");
    expect(btn).toHaveAttribute("aria-label", "Close");
  });

  it("always applies base class", () => {
    const { container } = render(<CloseButton />);

    expect(container.firstChild).toHaveClass("btn-close");
  });

  it("applies custom className", () => {
    const { container } = render(<CloseButton className="custom-class" />);

    expect(container.firstChild).toHaveClass("btn-close");
    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("applies bootstrap-style white variant class", () => {
    const { container } = render(<CloseButton white />);

    expect(container.firstChild).toHaveClass("btn-close-white");
  });

  it("does not apply white variant when false", () => {
    const { container } = render(<CloseButton white={false} />);

    expect(container.firstChild).not.toHaveClass("btn-close-white");
  });

  it("is disabled when disabled=true", () => {
    render(<CloseButton disabled />);

    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("calls onClick when clicked", () => {
    const onClick = vi.fn();

    render(<CloseButton onClick={onClick} />);
    fireEvent.click(screen.getByRole("button"));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", () => {
    const onClick = vi.fn();

    render(<CloseButton disabled onClick={onClick} />);
    fireEvent.click(screen.getByRole("button"));

    expect(onClick).not.toHaveBeenCalled();
  });

  it("forwards arbitrary props", () => {
    render(<CloseButton data-testid="close-btn" />);

    expect(screen.getByTestId("close-btn")).toBeInTheDocument();
  });
});
