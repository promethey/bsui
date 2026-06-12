import { render, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { useState } from "react";
import { Collapse } from "components";

/**
 * helper wrapper for controlled Collapse
 * @param {any} props
 */
function TestCollapse(props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen((v) => !v)}>toggle</button>
      <Collapse open={open} {...props}>
        <div data-testid="content">Hello</div>
      </Collapse>
    </>
  );
}

describe("Collapse", () => {
  it("does not render content when closed (unmounted behavior disabled by default)", () => {
    const { queryByTestId } = render(<TestCollapse />);

    expect(queryByTestId("content")).toBeInTheDocument();
  });

  it("toggles collapse open/close state", async () => {
    const { getByText, queryByTestId } = render(<TestCollapse />);

    fireEvent.click(getByText("toggle"));

    await waitFor(() => {
      expect(queryByTestId("content")).toBeInTheDocument();
    });
  });

  it("applies collapsing class during transition", async () => {
    const { getByText, container } = render(<TestCollapse />);

    fireEvent.click(getByText("toggle"));

    await waitFor(() => {
      const el = container.querySelector(".collapsing");
      expect(el).toBeTruthy();
    });
  });

  it("applies collapse show when entered", async () => {
    const { getByText, container } = render(<TestCollapse />);

    fireEvent.click(getByText("toggle"));

    await waitFor(() => {
      const el = container.querySelector(".collapse.show");
      expect(el).toBeTruthy();
    });
  });

  it("applies horizontal class when enabled", () => {
    const { container } = render(
      <Collapse open horizontal>
        <div>content</div>
      </Collapse>,
    );

    const el = container.firstChild;

    expect(el).toHaveClass("collapse-horizontal");
  });

  it("calls lifecycle callbacks", async () => {
    const onEnter = vi.fn();
    const onEntering = vi.fn();
    const onEntered = vi.fn();

    const { getByText } = render(
      <TestCollapse
        onEnter={onEnter}
        onEntering={onEntering}
        onEntered={onEntered}
      />,
    );

    fireEvent.click(getByText("toggle"));

    await waitFor(() => {
      expect(onEnter).toHaveBeenCalled();
      expect(onEntering).toHaveBeenCalled();
      expect(onEntered).toHaveBeenCalled();
    });
  });

  it("renders without console errors", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});

    render(
      <Collapse open duration={500}>
        <div>content</div>
      </Collapse>,
    );

    expect(spy).not.toHaveBeenCalled();

    spy.mockRestore();
  });

  it("passes arbitrary props to Prime", () => {
    const { container } = render(
      <Collapse open data-testid="collapse">
        <div>content</div>
      </Collapse>,
    );

    expect(container.firstChild).toHaveAttribute("data-testid", "collapse");
  });
});
