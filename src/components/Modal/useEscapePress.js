import { useEffect } from "react";

/**
 * Handles closing the modal when
 * the Escape key is pressed.
 *
 * @param {boolean} open
 * Determines whether the modal
 * is currently open.
 *
 * @param {function} [onClose]
 * Called when the Escape key requests
 * the modal to close.
 *
 * @param {boolean|"static"} [backdrop=false]
 * Controls whether the modal can be
 * dismissed with the Escape key.
 *
 * @param {React.Dispatch<React.SetStateAction<boolean>>} [setStaticAnimation]
 * Updates the temporary static
 * backdrop animation state.
 *
 * @author Egor Sedelkov [promethey] <sedelkovegor@gmail.com>
 * @since 1.0.0
 */
export function useEscapePress(open, onClose, backdrop, setStaticAnimation) {
  return useEffect(() => {
    if (!open) return;

    /**
     * Handles keyboard interactions for the modal.
     *
     * @param {KeyboardEvent} event
     */
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && backdrop !== "static") {
        onClose?.(event, "escape");
      }

      if (event.key === "Escape" && backdrop === "static") {
        setStaticAnimation?.(true);

        setTimeout(() => {
          setStaticAnimation?.(false);
        }, 300);

        return;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);
}
