import { useRef, useCallback } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { classnames as cs } from "helpers";
import { Prime } from "components";
import OffcanvasHeader from "./OffcanvasHeader";
import OffcanvasTitle from "./OffcanvasTitle";
import OffcanvasBody from "./OffcanvasBody";
import OffcanvasBackdrop from "./OffcanvasBackdrop";
import { OffcanvasContext } from "./OffcanvasContext";
import { Transition } from "react-transition-group";
import { useBodyScrollLock } from "./useBodyScrollLock";
import { useEscapePress } from "./useEscapePress";

const BASE_CLASS_NAME = "offcanvas";

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
   * Controls component visibility state
   */
  open: PropTypes.bool,

  /**
   * Defines the placement of the component
   * relative to the viewport
   */
  placement: PropTypes.oneOf(["start", "end", "top", "bottom"]),

  /**
   * Toggles rendering of a backdrop
   * layer behind the component
   */
  backdrop: PropTypes.bool,

  /**
   * Enables scrolling of background content
   * while the component is open
   */
  scrollable: PropTypes.bool,

  /**
   * Enables closing via Escape
   * key interaction
   */
  keyboard: PropTypes.bool,

  /**
   * Transition duration
   * in milliseconds
   */
  timeout: PropTypes.number,

  /**
   * Callback invoked when the component
   * requests to be closed
   */
  onClose: PropTypes.func,

  /**
   * Custom handler to detect transition end instead of timeout
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
  placement: "start",
  backdrop: true,
  scrollable: false,
  keyboard: true,
  timeout: 300,
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
 * Sliding overlay panel anchored to the viewport
 * edge for secondary content and actions.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/offcanvas/}
 *
 * @example
 * <Offcanvas>
 *  <Offcanvas.Header>
 *    <Offcanvas.Title>Title</Offcanvas.Title>
 *  </Offcanvas.Header>
 *  <Offcanvas.Body>
 *    Content for the offcanvas goes here.
 *    You can place just about any Bootstrap
 *    component or custom elements here.
 *  </Offcanvas.Body>
 * </Offcanvas>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} OffcanvasOwnProps
 *
 * @property {boolean} [open=false]
 * Controls component visibility state.
 *
 * @property {"start"|"end"|"top"|"bottom"} [placement="start"]
 * Defines the placement of the component
 * relative to the viewport.
 *
 * @property {boolean} [backdrop=true]
 * Toggles rendering of a backdrop layer
 * behind the component.
 *
 * @property {boolean} [scrollable=false]
 * Enables scrolling of background content
 * while the component is open.
 *
 * @property {boolean} [keyboard=false]
 * Enables closing via Escape
 * key interaction.
 *
 * @property {number} [timeout=300]
 * Transition duration in milliseconds.
 *
 * @property {(event?: React.SyntheticEvent|KeyboardEvent, closeType?: string) => void} [onClose]
 * Callback invoked when the component
 * requests to be closed.
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
 * @typedef {PrimeProps & OffcanvasOwnProps} OffcanvasProps
 * @param {OffcanvasProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @since 1.0.0
 */
function Offcanvas(props) {
  const {
    style,
    children,
    className,
    open = false,
    placement = "start",
    backdrop = true,
    scrollable = false,
    keyboard = true,
    timeout = 300,
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

  if (typeof backdrop === "boolean" && backdrop && !scrollable) {
    useBodyScrollLock(open);
  }

  useEscapePress(open, keyboard, onClose);

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
        <OffcanvasContext.Provider value={{ onClose }}>
          <Prime
            ref={nodeRef}
            tabIndex={-1}
            className={cn(
              BASE_CLASS_NAME,
              {
                [cs(BASE_CLASS_NAME, placement)]:
                  typeof placement === "string" &&
                  ["start", "end", "top", "bottom"].includes(placement),
                show: state === "entering" || state === "entered",
              },
              className,
            )}
            style={{
              visibility: state === "exited" ? "hidden" : "visible",
              ...style,
            }}
            {...rest}>
            {children}
            {backdrop && (
              <OffcanvasBackdrop
                state={state}
                onClick={(event) => {
                  onClose?.(event, "backdrop");
                }}
              />
            )}
          </Prime>
        </OffcanvasContext.Provider>
      )}
    </Transition>
  );
}

Offcanvas.propTypes = propTypes;
Offcanvas.defaultProps = defaultProps;

Offcanvas.Header = OffcanvasHeader;
Offcanvas.Title = OffcanvasTitle;
Offcanvas.Body = OffcanvasBody;

export default Offcanvas;
