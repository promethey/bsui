import { useEffect } from "react";

/**
 * Registers Escape key handler
 * for dismissible components.
 *
 * @param {boolean} open
 * Whether the component is currently open.
 *
 * @param {boolean} keyboard
 * Enables Escape key interaction.
 *
 * @param {(event?: React.SyntheticEvent | KeyboardEvent, closeType?: string) => void} [onClose]
 * Called when Escape requests the component to close.
 *
 * @param {{
 *   backdrop?: boolean | "static",
 *   onStaticEscape?: () => void,
 * }} [options]
 * Additional Escape key behavior.
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @since 1.0.0
 */
export function useEscapePress(open, keyboard, onClose, options = {}) {
  const { backdrop = true, onStaticEscape } = options;

  useEffect(() => {
    if (!open || !keyboard) return;

    /**
     * @param {KeyboardEvent} event
     */
    const handleKeyDown = (event) => {
      if (event.key !== "Escape") return;

      if (backdrop === "static") {
        onStaticEscape?.();
        return;
      }

      onClose?.(event, "escape");
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, keyboard, onClose, backdrop, onStaticEscape]);
}
