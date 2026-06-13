import { useEffect } from "react";

/**
 * @param {boolean} open
 * @param {function} [onHide]
 * @param {boolean|"static"} [backdrop=false]
 * @param {function} [setStaticAnimation]
 */
export function useEscapePress(open, onHide, backdrop, setStaticAnimation) {
  return useEffect(() => {
    if (!open) return;

    /**
     * Handles keyboard interactions for the modal.
     *
     * @param {KeyboardEvent} event
     */
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && backdrop !== "static") {
        onHide?.(event, "escape");
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
  }, [open, onHide]);
}
