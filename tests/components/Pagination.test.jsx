import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Pagination } from "components";

describe("Pagination API", () => {
  it("renders pagination", () => {
    render(
      <Pagination>
        <Pagination.Item>1</Pagination.Item>
      </Pagination>,
    );

    expect(screen.getByRole("list")).toHaveClass("pagination");
  });

  it("renders children", () => {
    render(
      <Pagination>
        <Pagination.Item>1</Pagination.Item>
      </Pagination>,
    );

    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(
      <Pagination className="custom">
        <Pagination.Item>1</Pagination.Item>
      </Pagination>,
    );

    expect(screen.getByRole("list")).toHaveClass("pagination", "custom");
  });

  it("applies inline styles", () => {
    render(
      <Pagination style={{ marginTop: 10 }}>
        <Pagination.Item>1</Pagination.Item>
      </Pagination>,
    );

    expect(screen.getByRole("list")).toHaveStyle({
      marginTop: "10px",
    });
  });

  it("applies size class", () => {
    render(
      <Pagination size="lg">
        <Pagination.Item>1</Pagination.Item>
      </Pagination>,
    );

    expect(screen.getByRole("list")).toHaveClass("pagination-lg");
  });

  it("does not apply size class when omitted", () => {
    render(
      <Pagination>
        <Pagination.Item>1</Pagination.Item>
      </Pagination>,
    );

    expect(screen.getByRole("list")).not.toHaveClass("pagination-sm");
    expect(screen.getByRole("list")).not.toHaveClass("pagination-lg");
  });
});

describe("Pagination.Item API", () => {
  it("renders page item", () => {
    render(<Pagination.Item>1</Pagination.Item>);

    expect(screen.getByRole("listitem")).toHaveClass("page-item");
  });

  it("renders page link automatically", () => {
    render(<Pagination.Item>1</Pagination.Item>);

    expect(screen.getByRole("link")).toHaveClass("page-link");
    expect(screen.getByRole("link")).toHaveAttribute("href", "#");
  });

  it("applies active class", () => {
    render(<Pagination.Item active>1</Pagination.Item>);

    expect(screen.getByRole("listitem")).toHaveClass("active");
  });

  it("applies disabled class", () => {
    render(<Pagination.Item disabled>1</Pagination.Item>);

    expect(screen.getByRole("listitem")).toHaveClass("disabled");
  });

  it("applies custom className", () => {
    render(<Pagination.Item className="custom">1</Pagination.Item>);

    expect(screen.getByRole("listitem")).toHaveClass("page-item", "custom");
  });

  it("applies inline styles", () => {
    render(<Pagination.Item style={{ marginTop: 10 }}>1</Pagination.Item>);

    expect(screen.getByRole("listitem")).toHaveStyle({
      marginTop: "10px",
    });
  });

  it("uses custom destination", () => {
    render(<Pagination.Item to="/page/2">2</Pagination.Item>);

    expect(screen.getByRole("link")).toHaveAttribute("href", "/page/2");
  });
});

describe("Pagination.Link API", () => {
  it("renders page link", () => {
    render(<Pagination.Link>1</Pagination.Link>);

    expect(screen.getByRole("link")).toHaveClass("page-link");
  });

  it("uses default destination", () => {
    render(<Pagination.Link>1</Pagination.Link>);

    expect(screen.getByRole("link")).toHaveAttribute("href", "#");
  });

  it("uses custom destination", () => {
    render(<Pagination.Link to="/page/3">3</Pagination.Link>);

    expect(screen.getByRole("link")).toHaveAttribute("href", "/page/3");
  });

  it("applies custom className", () => {
    render(<Pagination.Link className="custom">1</Pagination.Link>);

    expect(screen.getByRole("link")).toHaveClass("page-link", "custom");
  });

  it("applies inline styles", () => {
    render(<Pagination.Link style={{ color: "red" }}>1</Pagination.Link>);

    expect(screen.getByRole("link")).toHaveStyle({
      color: "rgb(255, 0, 0)",
    });
  });
});
