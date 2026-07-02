import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";
import ModalDialog from "./ModalDialog";
import ModalContent from "./ModalContent";
import ModalHeader from "./ModalHeader";
import ModalTitle from "./ModalTitle";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";
import { prefix } from "helpers";
import { ModalContext } from "./ModalContext";
import { Transition } from "react-transition-group";
import ModalBackdrop from "./ModalBackdrop";
import { useRef } from "react";
import { useBodyScrollLock } from "./useBodyScrollLock";
import { useEscapePress } from "./useEscapePress";

const BASE_CLASS_NAME = "modal";

const propTypes = {
  /**
   * Inline styles applied
   * to the root element
   */
  style: PropTypes.shape({}),

  /**
   * Content rendered inside
   * the component
   */
  children: PropTypes.node.isRequired,

  /**
   * Additional class names applied
   * to the root element
   */
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

  /**
   * Controls whether the modal
   * is visible
   */
  open: PropTypes.bool,

  /**
   * Transition duration
   * in milliseconds
   */
  timeout: PropTypes.number,

  /**
   * Callback fired when the modal
   * requests to be closed
   */
  onClose: PropTypes.func,

  /**
   * Enables vertical scrolling
   * inside the modal body
   */
  scrollable: PropTypes.bool,

  /**
   * Vertically centers the modal
   * in the viewport
   */
  centered: PropTypes.bool,

  /**
   * Sets the modal size variant
   */
  size: PropTypes.oneOf(["sm", "lg", "xl"]),

  /**
   * Enables fullscreen mode or
   * breakpoint-based fullscreen behavior
   */
  fullscreen: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(["sm", "md", "lg", "xl", "xxl"]),
  ]),

  backdrop: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(["static"])]),

  /**
   * Custom handler to detect transition
   * end instead of timeout
   */
  addEndListener: PropTypes.func,

  /**
   * Called before enter
   * transition starts
   */
  onEnter: PropTypes.func,

  /**
   * Called when enter
   * transition is starting
   */
  onEntering: PropTypes.func,

  /**
   * Called after enter
   * transition finishes
   */
  onEntered: PropTypes.func,

  /**
   * Called before exit
   * transition starts
   */
  onExit: PropTypes.func,

  /**
   * Called when exit transition
   * is running
   */
  onExiting: PropTypes.func,

  /**
   * Called after exit transition
   * finishes
   */
  onExited: PropTypes.func,
};

const defaultProps = {
  className: null,
  style: null,
  open: false,
  timeout: 300,
  onHide: null,
  scrollable: false,
  centered: false,
  size: null,
  fullscreen: false,
  backdrop: true,
  addEndListener: null,
  onEnter: null,
  onEntering: null,
  onEntered: null,
  onExit: null,
  onExiting: null,
  onExited: null,
};

/**
 * Displays content in a layered overlay
 * above the main interface.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/modal/}
 *
 * @see {@link https://reactcommunity.org/react-transition-group/transition}
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} ModalOwnProps
 *
 * @property {boolean} [open=false]
 * Controls whether the modal is visible.
 *
 * @property {number} [timeout=300]
 *
 * @property {(event?: React.SyntheticEvent, closeType?: string) => void} [onClose]
 * Callback fired when the modal requests to be closed.
 * closeType: ["backdrop", "escape", "close-button"]
 *
 * @property {boolean} [scrollable=false]
 * Enables vertical scrolling inside the modal body.
 *
 * @property {boolean} [centered=false]
 * Vertically centers the modal in the viewport.
 *
 * @property {"sm"|"lg"|"xl"} [size]
 * Sets the modal size variant.
 *
 * @property {"sm"|"md"|"lg"|"xl"|"xxl"|boolean} [fullscreen=false]
 * Enables fullscreen mode or breakpoint-based fullscreen behavior.
 *
 * @property {boolean|"static"} [backdrop=true]
 *
 * @property {(node: HTMLElement, done: () => void) => void} [addEndListener]
 * Custom handler to detect transition end instead of timeout.
 *
 * @property {(node: HTMLElement, isAppearing: boolean) => void} [onEnter]
 * Called before enter transition starts.
 *
 * @property {(node: HTMLElement, isAppearing: boolean) => void} [onEntering]
 * Called when enter transition is starting.
 *
 * @property {(node: HTMLElement, isAppearing: boolean) => void} [onEntered]
 * Called after enter transition finishes.
 *
 * @property {(node: HTMLElement) => void} [onExit]
 * Called before exit transition starts.
 *
 * @property {(node: HTMLElement) => void} [onExiting]
 * Called when exit transition is running.
 *
 * @property {(node: HTMLElement) => void} [onExited]
 * Called after exit transition finishes.
 *
 * @typedef {PrimeProps & ModalOwnProps} ModalProps
 * @param {ModalProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @since 1.0.0
 */
function Modal(props) {
  const {
    style,
    children,
    className,
    open = false,
    timeout = 300,
    onClose,
    scrollable = false,
    centered = false,
    size,
    fullscreen = false,
    backdrop = true,
    addEndListener,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    ...rest
  } = props;

  const nodeRef = useRef(null);

  const [staticAnimation, setStaticAnimation] = useState(false);

  const dialogClasses = cn({
    // "modal-dialog-srollable"
    [prefix("modal-dialog", "scrollable")]:
      typeof scrollable === "boolean" && scrollable,

    // "modal-dialog-centered"
    [prefix("modal-dialog", "centered")]:
      typeof centered === "boolean" && centered,

    // "modal-{["sm", "lg", "xl"]}"
    [prefix(BASE_CLASS_NAME, size)]:
      typeof size === "string" && ["sm", "lg", "xl"].includes(size),

    // "modal-fullscreen"
    [prefix(BASE_CLASS_NAME, "fullscreen")]:
      typeof fullscreen === "boolean" && fullscreen,

    // "modal-fullscreen-{["sm", "md", "lg", "xl", "xxl"]}-down"
    [prefix(
      BASE_CLASS_NAME,
      "fullscreen",
      /** @type {string} */ (fullscreen),
      "down",
    )]:
      typeof fullscreen === "string" &&
      ["sm", "md", "lg", "xl", "xxl"].includes(fullscreen),
  });

  /**
   * Handles clicks on the modal backdrop and closes
   * the modal when the backdrop itself is clicked.
   *
   * @param {React.MouseEvent<HTMLElement>} event
   */
  const handleBackdropClick = (event) => {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (backdrop === "static") {
      setStaticAnimation(true);

      setTimeout(() => {
        setStaticAnimation(false);
      }, 300);

      return;
    }

    onClose?.(event, "backdrop");
  };

  if (backdrop && !scrollable) {
    useBodyScrollLock(open);
  }

  useBodyScrollLock(open);

  useEscapePress(open, onClose, backdrop, setStaticAnimation);

  /** @type {(node: HTMLElement, isAppearing: boolean) => void} */
  const handleEnter = useCallback(
    (node, isAppearing) => {
      onEnter?.(node, isAppearing);
    },
    [onEnter],
  );

  /** @type {(node: HTMLElement, isAppearing: boolean) => void} */
  const handleEntering = useCallback(
    (node, isAppearing) => {
      onEntering?.(node, isAppearing);
    },
    [onEntering],
  );

  /** @type {(node: HTMLElement, isAppearing: boolean) => void} */
  const handleEntered = useCallback(
    (node, isAppearing) => {
      // @ts-ignore
      nodeRef.current?.focus();
      onEntered?.(node, isAppearing);
    },
    [onEntered],
  );

  /** @type {(node: HTMLElement) => void} */
  const handleExit = useCallback(
    (node) => {
      onExit?.(node);
    },
    [onExit],
  );

  /** @type {(node: HTMLElement) => void} */
  const handleExiting = useCallback(
    (node) => {
      onExiting?.(node);
    },
    [onExiting],
  );

  /** @type {(node: HTMLElement) => void} */
  const handleExited = useCallback(
    (node) => {
      onExited?.(node);
    },
    [onExited],
  );

  return (
    <Transition
      nodeRef={nodeRef}
      in={open}
      timeout={timeout}
      addEndListener={addEndListener}
      onEnter={handleEnter}
      onEntering={handleEntering}
      onEntered={handleEntered}
      onExit={handleExit}
      onExiting={handleExiting}
      onExited={handleExited}
      mountOnEnter
      unmountOnExit>
      {(state) => (
        <ModalContext.Provider value={{ onClose }}>
          <Prime
            ref={nodeRef}
            className={cn(
              BASE_CLASS_NAME,
              "fade",
              {
                show: state === "entering" || state === "entered",
                "modal-static": staticAnimation,
              },
              className,
            )}
            onClick={handleBackdropClick}
            style={{
              display: "block",
              ...style,
            }}
            tabIndex="-1"
            {...rest}>
            <ModalBackdrop state={state} />
            <ModalDialog className={dialogClasses}>{children}</ModalDialog>
          </Prime>
        </ModalContext.Provider>
      )}
    </Transition>
  );
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

Modal.Content = ModalContent;
Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
