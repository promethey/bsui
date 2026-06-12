import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Progress } from "components";

describe("Progress.Bar", () => {
  it("renders progress bar", () => {
    render(<Progress.Bar now={50} />);

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("sets accessibility attributes", () => {
    render(<Progress.Bar now={25} min={0} max={100} />);

    const progressbar = screen.getByRole("progressbar");

    expect(progressbar).toHaveAttribute("aria-valuenow", "25");
    expect(progressbar).toHaveAttribute("aria-valuemin", "0");
    expect(progressbar).toHaveAttribute("aria-valuemax", "100");
  });

  it("calculates width from progress value", () => {
    render(<Progress.Bar now={50} min={0} max={100} />);

    expect(screen.getByRole("progressbar")).toHaveStyle({
      width: "50%",
    });
  });

  it("renders custom content", () => {
    render(<Progress.Bar now={50}>Loading...</Progress.Bar>);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders percentage label", () => {
    render(<Progress.Bar now={75} displayedPercent />);

    expect(screen.getByText("75%")).toBeInTheDocument();
  });

  it("applies striped class", () => {
    render(<Progress.Bar now={50} striped />);

    expect(screen.getByRole("progressbar")).toHaveClass("progress-bar-striped");
  });

  it("applies animated class", () => {
    render(<Progress.Bar now={50} animated />);

    expect(screen.getByRole("progressbar")).toHaveClass(
      "progress-bar-animated",
    );
  });

  it("supports striped and animated together", () => {
    render(<Progress.Bar now={50} striped animated />);

    const progressbar = screen.getByRole("progressbar");

    expect(progressbar).toHaveClass("progress-bar-striped");
    expect(progressbar).toHaveClass("progress-bar-animated");
  });

  it("applies custom className", () => {
    render(<Progress.Bar now={50} className="custom-bar" />);

    expect(screen.getByRole("progressbar")).toHaveClass("custom-bar");
  });

  it("calculates width for custom range", () => {
    render(<Progress.Bar min={20} max={120} now={50} />);

    expect(screen.getByRole("progressbar")).toHaveStyle({
      width: "30%",
    });
  });
});
