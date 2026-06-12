import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Progress } from "components";

describe("Progress", () => {
  it("renders progress container", () => {
    render(
      <Progress>
        <Progress.Bar now={50} />
      </Progress>,
    );

    expect(document.querySelector(".progress")).toBeInTheDocument();
  });

  it("renders children", () => {
    render(
      <Progress>
        <Progress.Bar now={50} />
      </Progress>,
    );

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(
      <Progress className="custom-progress">
        <Progress.Bar now={50} />
      </Progress>,
    );

    expect(document.querySelector(".progress")).toHaveClass("custom-progress");
  });
});
