import { useEffect } from "react";

/**
 * Locks body scroll and applies modal
 * classes while open is true.
 *
 * @param {boolean} open
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @since 1.0.0
 */
export function useBodyScrollLock(open) {
  return useEffect(() => {
    if (!open) return;

    document.body.classList.add("modal-open", "overflow-hidden", "pe-0");

    return () => {
      document.body.classList.remove("modal-open", "overflow-hidden", "pe-0");
    };
  }, [open]);
}
