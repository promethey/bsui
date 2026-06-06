// @ts-nocheck
import { render, screen } from "@testing-library/react";
import { Spinner } from "components";

describe("Spinner", () => {
  it("renders spinner", () => {
    render(<Spinner />);

    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("renders visually hidden loading text", () => {
    render(<Spinner />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders border spinner by default", () => {
    render(<Spinner />);

    expect(screen.getByRole("status")).toHaveClass("spinner-border");
  });

  it("renders grow spinner", () => {
    render(<Spinner view="grow" />);

    expect(screen.getByRole("status")).toHaveClass("spinner-grow");
  });

  it("applies small size class for border spinner", () => {
    render(<Spinner size="sm" />);

    expect(screen.getByRole("status")).toHaveClass("spinner-border-sm");
  });

  it("applies small size class for grow spinner", () => {
    render(<Spinner view="grow" size="sm" />);

    expect(screen.getByRole("status")).toHaveClass("spinner-grow-sm");
  });

  it("merges custom className", () => {
    render(<Spinner className="custom-class" />);

    expect(screen.getByRole("status")).toHaveClass(
      "spinner-border",
      "custom-class",
    );
  });

  it("applies inline styles", () => {
    render(
      <Spinner
        style={{
          width: "2rem",
          height: "2rem",
        }}
      />,
    );

    expect(screen.getByRole("status")).toHaveStyle({
      width: "2rem",
      height: "2rem",
    });
  });

  it("forwards additional props", () => {
    render(<Spinner data-testid="spinner" aria-label="Loading content" />);

    expect(screen.getByTestId("spinner")).toHaveAttribute(
      "aria-label",
      "Loading content",
    );
  });
});
