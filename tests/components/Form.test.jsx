import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Form } from "components";

describe("Form API", () => {
  it("renders form element", () => {
    const { container } = render(
      <Form>
        <Form.Control />
      </Form>,
    );

    expect(container.querySelector("form")).toBeInTheDocument();
  });

  it("renders children", () => {
    const { getByText } = render(
      <Form>
        <button type="submit">Submit</button>
      </Form>,
    );

    expect(getByText("Submit")).toBeInTheDocument();
  });

  it("applies className", () => {
    const { container } = render(
      <Form className="custom-form">
        <Form.Control />
      </Form>,
    );

    expect(container.firstChild).toHaveClass("custom-form");
  });

  it("applies style", () => {
    const { container } = render(
      <Form style={{ marginTop: "16px" }}>
        <Form.Control />
      </Form>,
    );

    expect(container.firstChild).toHaveStyle({
      marginTop: "16px",
    });
  });

  it("sets action", () => {
    const { container } = render(
      <Form action="/login">
        <Form.Control />
      </Form>,
    );

    expect(container.firstChild).toHaveAttribute("action", "/login");
  });

  it("sets method", () => {
    const { container } = render(
      <Form method="post">
        <Form.Control />
      </Form>,
    );

    expect(container.firstChild).toHaveAttribute("method", "post");
  });

  it("sets encType", () => {
    const { container } = render(
      <Form encType="multipart/form-data">
        <Form.Control />
      </Form>,
    );

    expect(container.firstChild).toHaveAttribute(
      "enctype",
      "multipart/form-data",
    );
  });

  it("sets target", () => {
    const { container } = render(
      <Form target="_blank">
        <Form.Control />
      </Form>,
    );

    expect(container.firstChild).toHaveAttribute("target", "_blank");
  });

  it("sets acceptCharset", () => {
    const { container } = render(
      <Form acceptCharset="UTF-8">
        <Form.Control />
      </Form>,
    );

    expect(container.firstChild).toHaveAttribute("accept-charset", "UTF-8");
  });

  it("sets autoComplete", () => {
    const { container } = render(
      <Form autoComplete="off">
        <Form.Control />
      </Form>,
    );

    expect(container.firstChild).toHaveAttribute("autocomplete", "off");
  });

  it("sets name", () => {
    const { container } = render(
      <Form name="login">
        <Form.Control />
      </Form>,
    );

    expect(container.firstChild).toHaveAttribute("name", "login");
  });

  it("sets noValidate", () => {
    const { container } = render(
      <Form noValidate>
        <Form.Control />
      </Form>,
    );

    expect(container.firstChild).toHaveAttribute("novalidate");
  });

  it("calls onSubmit", () => {
    const handleSubmit = vi.fn();

    render(
      <Form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </Form>,
    );

    fireEvent.submit(screen.getByRole("button"));

    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

  it("calls onReset", () => {
    const handleReset = vi.fn();

    const { getByText } = render(
      <Form onReset={handleReset}>
        <button type="reset">Reset</button>
      </Form>,
    );

    fireEvent.click(getByText("Reset"));

    expect(handleReset).toHaveBeenCalledTimes(1);
  });
});

describe("Form namespaces", () => {
  it("exposes subcomponents", () => {
    expect(Form.Label).toBeDefined();
    expect(Form.Control).toBeDefined();
    expect(Form.Check).toBeDefined();
    expect(Form.Range).toBeDefined();
    expect(Form.Select).toBeDefined();
    expect(Form.FloatingLabel).toBeDefined();
    expect(Form.InputGroup).toBeDefined();
  });
});
