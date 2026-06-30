import { useEffect } from "react";

/**
 * Registers Escape key handler to close
 * the component when enabled.
 *
 * @param {boolean} open
 * Whether the component is currently open.
 *
 * @param {boolean} keyboard
 * Enables Escape key interaction.
 *
 * @param {(event?: KeyboardEvent, closeType?: string) => void} [onHide]
 * Close handler invoked on Escape press.
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
export function useEscapePress(open, keyboard, onHide) {
  useEffect(() => {
    if (!open || !keyboard) return;

    /**
     * Handles keydown events and triggers
     * close on Escape key.
     *
     * @param {KeyboardEvent} event
     */
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onHide?.(event, "escape");
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, keyboard, onHide]);
}
