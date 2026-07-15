import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Accordion } from "components";

describe("Accordion", () => {
  function createAccordion(props = {}) {
    return render(
      <Accordion {...props}>
        <Accordion.Item itemKey="1">
          <Accordion.Header>First</Accordion.Header>
          <Accordion.Body>First body</Accordion.Body>
        </Accordion.Item>

        <Accordion.Item itemKey="2">
          <Accordion.Header>Second</Accordion.Header>
          <Accordion.Body>Second body</Accordion.Body>
        </Accordion.Item>
      </Accordion>,
    );
  }

  it("renders accordion", () => {
    const { container } = createAccordion();

    expect(container.firstChild).toHaveClass("accordion");
  });

  it("supports custom className", () => {
    const { container } = createAccordion({
      className: "custom",
    });

    expect(container.firstChild).toHaveClass("custom");
  });

  it("supports inline styles", () => {
    const { container } = createAccordion({
      style: { marginTop: "10px" },
    });

    expect(container.firstChild).toHaveStyle({
      marginTop: "10px",
    });
  });

  it("supports flush", () => {
    const { container } = createAccordion({
      flush: true,
    });

    expect(container.firstChild).toHaveClass("accordion-flush");
  });

  it("opens default item", () => {
    createAccordion({
      defaultActiveKey: "1",
    });

    expect(screen.getByText("First body")).toBeVisible();
  });

  it("supports alwaysOpen", async () => {
    const user = userEvent.setup();

    createAccordion({
      alwaysOpen: true,
    });

    await user.click(screen.getByRole("button", { name: "First" }));
    await user.click(screen.getByRole("button", { name: "Second" }));

    expect(screen.getByText("First body")).toBeVisible();
    expect(screen.getByText("Second body")).toBeVisible();
  });

  it("renders accordion headers as buttons", () => {
    createAccordion();

    expect(screen.getByRole("button", { name: "First" })).toHaveClass(
      "accordion-button",
    );

    expect(screen.getByRole("button", { name: "Second" })).toHaveClass(
      "accordion-button",
    );
  });

  it("renders accordion items", () => {
    const { container } = createAccordion();

    expect(container.querySelectorAll(".accordion-item")).toHaveLength(2);
  });

  it("renders accordion headers", () => {
    const { container } = createAccordion();

    expect(container.querySelectorAll(".accordion-header")).toHaveLength(2);
  });

  it("renders accordion bodies", () => {
    const { container } = createAccordion();

    expect(container.querySelectorAll(".accordion-body")).toHaveLength(2);
  });

  it("renders accordion collapse", () => {
    const { container } = createAccordion();

    expect(container.querySelectorAll(".accordion-collapse")).toHaveLength(2);
  });
});
