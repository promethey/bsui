import React, { useRef, useCallback } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";
import ToastHeader from "./ToastHeader";
import ToastBody from "./ToastBody";
import ToastContainer from "./ToastContainer";
import { ToastContext } from "./ToastContext";
import { Transition } from "react-transition-group";
import { useAutohide } from "hooks";

const BASE_CLASS_NAME = "toast";

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
   * Controls the visibility
   * of the toast
   */
  open: PropTypes.bool,

  /**
   * Enables the show and
   * hide animation
   */
  animation: PropTypes.bool,

  /**
   * Automatically hides the toast
   * after the specified delay
   */
  autohide: PropTypes.bool,

  /**
   * Time in milliseconds before the toast
   * is automatically hidden
   */
  delay: PropTypes.number,

  /**
   * Called when the toast requests
   * to be closed. The `closeType`
   * argument indicates what
   * triggered the close request.
   */
  onClose: PropTypes.func,

  /**
   * Custom handler to detect transition
   * end instead of timeout
   */
  addEndListener: PropTypes.func,

  /**
   * Called before enter transition starts
   */
  onEnter: PropTypes.func,

  /**
   * Called when enter transition
   * is starting
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
   * Called when exit
   * transition is running
   */
  onExiting: PropTypes.func,

  /**
   * Called after exit
   * transition finishes
   */
  onExited: PropTypes.func,
};

const defaultProps = {
  style: null,
  className: null,
  open: false,
  animation: true,
  autohide: false,
  delay: 3000,
  onClose: null,
  addEndListener: null,
  onEnter: null,
  onEntering: null,
  onEntered: null,
  onExit: null,
  onExiting: null,
  onExited: null,
};

/**
 * Displays a lightweight notification
 * message to the user.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/toasts/}
 *
 * @example
 * <Toast>
 *  <Toast.Header>
 *    <strong>Bootstrap</strong>
 *  </Toast.Header>
 *  <Toast.Body>
 *    Hello, world! This is a toast message.
 *  </Toast.Body>
 * </Toast>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} ToastOwnProps
 *
 * @property {boolean} [open=false]
 * Controls the visibility of the toast.
 *
 * @property {boolean} [animation=true]
 * Enables the show and hide animation.
 *
 * @property {boolean} [autohide=false]
 * Automatically hides the toast after the specified delay.
 *
 * @property {number} [delay=3000]
 * Time in milliseconds before the toast is automatically hidden.
 *
 * @property {(event?: React.SyntheticEvent|KeyboardEvent, closeType?: string) => void} [onClose]
 * Called when the toast requests to be closed. The `closeType` argument
 * indicates what triggered the close request.
 *
 * @property {(node: HTMLElement, done: () => void) => void} [addEndListener]
 * Custom handler to detect transition
 * end instead of timeout.
 *
 * @property {(node: HTMLElement, isAppearing: boolean) => void} [onEnter]
 * Called before enter
 * transition starts.
 *
 * @property {(node: HTMLElement, isAppearing: boolean) => void} [onEntering]
 * Called when enter
 * transition is starting.
 *
 * @property {(node: HTMLElement, isAppearing: boolean) => void} [onEntered]
 * Called after enter
 * transition finishes.
 *
 * @property {(node: HTMLElement) => void} [onExit]
 * Called before exit
 * transition starts.
 *
 * @property {(node: HTMLElement) => void} [onExiting]
 * Called when exit
 * transition is running.
 *
 * @property {(node: HTMLElement) => void} [onExited]
 * Called after exit
 * transition finishes.
 *
 * @typedef {PrimeProps & ToastOwnProps} ToastProps
 * @param {ToastProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @since 1.0.0
 */
function Toast(props) {
  const {
    style,
    children,
    className,
    open = false,
    animation = true,
    autohide = false,
    delay = 3000,
    onClose,
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

  useAutohide(open, autohide, delay, onClose);

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
      timeout={350}
      appear
      addEndListener={addEndListener}
      onEnter={handleEnter}
      onEntering={handleEntering}
      onEntered={handleEntered}
      onExit={handleExit}
      onExiting={handleExiting}
      onExited={handleExited}>
      {(state) => (
        <ToastContext.Provider value={{ onClose }}>
          <Prime
            ref={nodeRef}
            role="alert"
            className={cn(
              BASE_CLASS_NAME,
              {
                show: state !== "exited",
                showing: animation && state !== "entered" && state !== "exited",
                fade: animation,
              },
              className,
            )}
            style={style}
            {...rest}>
            {children}
          </Prime>
        </ToastContext.Provider>
      )}
    </Transition>
  );
}

Toast.propTypes = propTypes;
Toast.defaultProps = defaultProps;

Toast.Header = ToastHeader;
Toast.Body = ToastBody;
Toast.Container = ToastContainer;

export default Toast;
