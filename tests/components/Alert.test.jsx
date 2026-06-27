// @ts-nocheck
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Alert } from "components";

describe("Alert integration (API + children + classes)", () => {
  it("renders base alert with role and children", () => {
    render(<Alert>HELLO</Alert>);

    const el = screen.getByRole("alert");

    expect(el).toBeInTheDocument();
    expect(el).toHaveTextContent("HELLO");
    expect(el.className).toContain("alert");
  });

  it("applies tone class", () => {
    render(<Alert tone="danger">x</Alert>);

    const el = screen.getByRole("alert");

    expect(el.className).toContain("alert-danger");
  });

  it("applies invalid tone safely (no crash, no class)", () => {
    render(<Alert tone="invalid">x</Alert>);

    const el = screen.getByRole("alert");

    expect(el.className).not.toContain("alert-invalid");
  });

  it("applies className and style", () => {
    render(
      <Alert className="custom-class" style={{ marginTop: "10px" }}>
        x
      </Alert>,
    );

    const el = screen.getByRole("alert");

    expect(el.className).toContain("custom-class");
    expect(el).toHaveStyle({ marginTop: "10px" });
  });

  it("applies dismissible and renders CloseButton", () => {
    render(<Alert dismissible>x</Alert>);

    const el = screen.getByRole("alert");

    expect(el.className).toContain("dismissible");
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("does NOT render CloseButton when not dismissible", () => {
    render(<Alert>x</Alert>);

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("applies animated classes", () => {
    render(<Alert animated>x</Alert>);

    const el = screen.getByRole("alert");

    expect(el.className).toContain("show");
    expect(el.className).toContain("fade");
  });

  it("renders Alert.Heading correctly inside Alert", () => {
    render(
      <Alert>
        <Alert.Heading as="h2">TITLE</Alert.Heading>
      </Alert>,
    );

    const heading = screen.getByText("TITLE");

    expect(heading).toBeInTheDocument();
    expect(heading.tagName.toLowerCase()).toBe("h2");
    expect(heading.className).toContain("alert-heading");
  });

  it("renders Alert.Link correctly inside Alert", () => {
    render(
      <Alert>
        <Alert.Link to="/home">HOME</Alert.Link>
      </Alert>,
    );

    const link = screen.getByText("HOME");

    expect(link.tagName.toLowerCase()).toBe("a");
    expect(link).toHaveAttribute("href", "/home");
    expect(link.className).toContain("alert-link");
  });

  it("supports full composition (Heading + Link + Alert)", () => {
    render(
      <Alert dismissible tone="success">
        <Alert.Heading>OK</Alert.Heading>
        <Alert.Link to="/docs">Docs</Alert.Link>
        BODY TEXT
      </Alert>,
    );

    const alert = screen.getByRole("alert");

    expect(alert).toHaveTextContent("OK");
    expect(alert).toHaveTextContent("Docs");
    expect(alert).toHaveTextContent("BODY TEXT");

    expect(alert.className).toContain("alert-success");
    expect(alert.className).toContain("dismissible");

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
