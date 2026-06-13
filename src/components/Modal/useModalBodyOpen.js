import { useEffect } from "react";

/**
 * @param {boolean} open
 */
export function useModalBodyOpen(open) {
  return useEffect(() => {
    if (!open) return;

    document.body.classList.add("modal-open", "overflow-hidden", "pe-0");

    return () => {
      document.body.classList.remove("modal-open", "overflow-hidden", "pe-0");
    };
  }, [open]);
}
