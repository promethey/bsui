import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Breadcrumb } from "components";

describe("Breadcrumb", () => {
  it("renders navigation landmark", () => {
    render(
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>,
    );

    expect(screen.getByRole("navigation")).toBeInTheDocument();

    expect(screen.getByRole("navigation")).toHaveAttribute(
      "aria-label",
      "breadcrumb",
    );
  });

  it("renders breadcrumb list", () => {
    render(
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>,
    );

    expect(document.querySelector(".breadcrumb")).toBeInTheDocument();
  });

  it("renders breadcrumb items", () => {
    render(
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Library</Breadcrumb.Item>
      </Breadcrumb>,
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Library")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(
      <Breadcrumb className="custom-breadcrumb">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>,
    );

    expect(document.querySelector(".breadcrumb")).toHaveClass(
      "custom-breadcrumb",
    );
  });

  it("applies custom divider", () => {
    render(
      <Breadcrumb divider=">">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>,
    );

    const breadcrumb = document.querySelector(".breadcrumb");

    expect(breadcrumb).toHaveStyle({
      "--bs-breadcrumb-divider": '">"',
    });
  });

  it("renders link item", () => {
    render(
      <Breadcrumb>
        <Breadcrumb.Item to="/home">Home</Breadcrumb.Item>
      </Breadcrumb>,
    );

    expect(
      screen.getByRole("link", {
        name: "Home",
      }),
    ).toHaveAttribute("href", "/home");
  });

  it("renders active item", () => {
    render(
      <Breadcrumb>
        <Breadcrumb.Item active>Current Page</Breadcrumb.Item>
      </Breadcrumb>,
    );

    const item = screen.getByText("Current Page").closest("li");

    expect(item).toHaveClass("active");
  });

  it("does not render link for active item", () => {
    render(
      <Breadcrumb>
        <Breadcrumb.Item active>Current Page</Breadcrumb.Item>
      </Breadcrumb>,
    );

    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("renders mixed active and inactive items", () => {
    render(
      <Breadcrumb>
        <Breadcrumb.Item to="/home">Home</Breadcrumb.Item>

        <Breadcrumb.Item to="/library">Library</Breadcrumb.Item>

        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>,
    );

    expect(
      screen.getByRole("link", {
        name: "Home",
      }),
    ).toHaveAttribute("href", "/home");

    expect(
      screen.getByRole("link", {
        name: "Library",
      }),
    ).toHaveAttribute("href", "/library");

    expect(
      screen.queryByRole("link", {
        name: "Data",
      }),
    ).not.toBeInTheDocument();
  });

  it("uses default href when 'to' is not provided", () => {
    render(
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>,
    );

    expect(screen.getByRole("link")).toHaveAttribute("href", "#");
  });
});
