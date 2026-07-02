// @ts-nocheck
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Modal } from "components";

describe("Modal (full API + structure)", () => {
  it("does not render content when closed", () => {
    render(
      <Modal open={false}>
        <Modal.Content>content</Modal.Content>
      </Modal>,
    );

    expect(screen.queryByText("content")).not.toBeInTheDocument();
  });

  it("renders children when open", () => {
    render(
      <Modal open>
        <Modal.Content>content</Modal.Content>
      </Modal>,
    );

    expect(screen.getByText("content")).toBeInTheDocument();
  });

  it("renders correct base modal structure", () => {
    const { container } = render(
      <Modal open>
        <Modal.Content>
          <Modal.Body>body</Modal.Body>
        </Modal.Content>
      </Modal>,
    );

    expect(container.querySelector(".modal")).toBeInTheDocument();
    expect(container.querySelector(".modal-dialog")).toBeInTheDocument();
    expect(container.querySelector(".modal-content")).toBeInTheDocument();
    expect(container.querySelector(".modal-body")).toBeInTheDocument();
  });

  it("applies custom className to root", () => {
    const { container } = render(
      <Modal open className="custom-root">
        <Modal.Content>content</Modal.Content>
      </Modal>,
    );

    expect(container.querySelector(".custom-root")).toBeTruthy();
  });

  it("applies style to root element", () => {
    const { container } = render(
      <Modal open style={{ opacity: "0.5", padding: "10px" }}>
        <Modal.Content>content</Modal.Content>
      </Modal>,
    );

    const root = container.querySelector(".modal");

    expect(root?.style.opacity).toBe("0.5");
    expect(root?.style.padding).toBe("10px");
  });

  it("renders backdrop into document body (portal)", () => {
    render(
      <Modal open>
        <Modal.Content>content</Modal.Content>
      </Modal>,
    );

    const backdrop = document.body.querySelector(".modal-backdrop");

    expect(backdrop).toBeTruthy();
  });

  it("renders header and close button and triggers onClose", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();

    render(
      <Modal open onClose={onClose}>
        <Modal.Content>
          <Modal.Header closeButton>
            <Modal.Title>title</Modal.Title>
          </Modal.Header>
        </Modal.Content>
      </Modal>,
    );

    const btn = screen.getByRole("button");

    await user.click(btn);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("applies size modifiers", () => {
    const { container: sm } = render(
      <Modal open size="sm">
        <Modal.Content />
      </Modal>,
    );

    const { container: lg } = render(
      <Modal open size="lg">
        <Modal.Content />
      </Modal>,
    );

    expect(sm.querySelector(".modal-sm")).toBeTruthy();
    expect(lg.querySelector(".modal-lg")).toBeTruthy();
  });

  it("applies centered class", () => {
    const { container } = render(
      <Modal open centered>
        <Modal.Content />
      </Modal>,
    );

    expect(container.querySelector(".modal-dialog-centered")).toBeTruthy();
  });

  it("applies scrollable class", () => {
    const { container } = render(
      <Modal open scrollable>
        <Modal.Content />
      </Modal>,
    );

    expect(container.querySelector(".modal-dialog-scrollable")).toBeTruthy();
  });

  it("renders footer correctly", () => {
    render(
      <Modal open>
        <Modal.Content>
          <Modal.Footer>
            <button>save</button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>,
    );

    expect(screen.getByText("save")).toBeInTheDocument();
  });
});
