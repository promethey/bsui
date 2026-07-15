import { useRef, useCallback } from "react";
import { Prime } from "components";
import PropTypes from "prop-types";
import { Transition } from "react-transition-group";
import cn from "classnames";

const propTypes = {
  /**
   * Inline styles applied
   * to the root
   */
  style: PropTypes.shape({}),

  /**
   * Content rendered inside
   * the component
   */
  children: PropTypes.node.isRequired,

  /**
   * Additional classes applied
   * to the root element
   */
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

  /**
   * Sets horizontal collapsing
   */
  horizontal: PropTypes.bool,

  /**
   * Sets open state
   */
  open: PropTypes.bool,

  /**
   * Delays mounting the component until
   * the enter transition begins
   */
  mountOnEnter: PropTypes.bool,

  /**
   * Removes the component from the DOM after
   * the exit transition finishes
   */
  unmountOnExit: PropTypes.bool,

  /**
   * Runs the enter transition
   * on the initial component mount
   */
  appear: PropTypes.bool,

  /**
   * Enables the enter transition
   * when the component becomes visible
   */
  enter: PropTypes.bool,

  /**
   * Enables the exit transition
   * when the component becomes hidden
   */
  exit: PropTypes.bool,

  /**
   * Specifies transition duration
   * in milliseconds
   */
  timeout: PropTypes.number,

  /**
   * Custom handler to detect transition
   * end instead of timeout
   */
  addEndListener: PropTypes.func,

  /**
   * Callback fired before the
   * "enter" status is applied
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the
   * "entering" status is applied
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the
   * "entered" status is applied
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired before the
   * "exit" status is applied
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the
   * "exiting" status is applied
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the
   * "exited" status is applied
   */
  onExited: PropTypes.func,
};

const defaultProps = {
  style: null,
  className: null,
  horizontal: false,
  open: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  timeout: 350,
  addEndListener: null,
  onEnter: null,
  onEntering: null,
  onEntered: null,
  onExit: null,
  onExiting: null,
  onExited: null,
};

/**
 * Animates the expansion and
 * collapsing of content visibility.
 *
 * @component
 *
 * @see {@link https://reactcommunity.org/react-transition-group/transition}
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/collapse/}
 *
 * @example
 * const [show, setShow] = useState(false);
 *
 * return (
 *  <>
 *    <Button onClick={() => setShow((prev) => !prev)}>
 *      Button
 *    </Button>
 *
 *    <Collapse open={show}>
 *      Some placeholder content for the collapse component.
 *      This panel is hidden by default but revealed when
 *      the user activates the relevant trigger.
 *    </Collapse>
 *  </>
 * )
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} CollapseOwnProps
 *
 * @property {boolean} [horizontal=false]
 * Enables horizontal collapsing behavior.
 *
 * @property {boolean} [open=false]
 * Enables horizontal collapsing behavior.
 *
 * @property {boolean} [mountOnEnter=false]
 * Delays mounting the component until
 * the enter transition begins.
 *
 * @property {boolean} [unmountOnExit=false]
 * Removes the component from the DOM after
 * the exit transition finishes.
 *
 * @property {boolean} [appear=false]
 * Runs the enter transition
 * on the initial component mount.
 *
 * @property {boolean} [enter=true]
 * Enables the enter transition
 * when the component becomes visible.
 *
 * @property {boolean} [exit=true]
 * Enables the exit transition
 * when the component becomes hidden.
 *
 * @property {number} [timeout=350]
 * Specifies transition duration
 * in milliseconds.
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
 * @typedef {PrimeProps & CollapseOwnProps} CollapseProps
 * @param {CollapseProps} props
 *
 * @return {React.ReactElement}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @since 1.0.0
 */
function Collapse(props) {
  const {
    style,
    children,
    className,
    horizontal = false,
    open = false,
    timeout = 350,
    mountOnEnter = false,
    unmountOnExit = false,
    appear = false,
    enter = true,
    exit = true,
    addEndListener,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    ...rest
  } = props;

  /** @type {React.RefObject<HTMLDivElement | null>} */
  const nodeRef = useRef(null);

  /** @type {Record<string, string>} */
  const transitionStyles = {
    exited: "collapse",
    exiting: "collapsing",
    entering: "collapsing",
    entered: "collapse show",
  };

  const quantity = horizontal ? "width" : "height";

  /** @type {(isAppearing: boolean) => void} */
  const handleEnter = (isAppearing) => {
    const elem = nodeRef.current;

    if (!elem) return;

    elem.style[quantity] = "0";

    onEnter?.(elem, isAppearing);
  };

  /** @type {(isAppearing: boolean) => void} */
  const handleEntering = (isAppearing) => {
    const elem = nodeRef.current;

    if (!elem) return;

    /** @type {"scrollHeight"|"scrollWidth"} */
    const scroll = horizontal ? "scrollWidth" : "scrollHeight";

    elem.style[quantity] = `${elem[scroll]}px`;

    onEntering?.(elem, isAppearing);
  };

  /** @type {(isAppearing: boolean) => void} */
  const handleEntered = (isAppearing) => {
    const elem = nodeRef.current;

    if (!elem) return;

    elem.style[quantity] = "";

    onEntered?.(elem, isAppearing);
  };

  /** @type {() => void} */
  const handleExit = () => {
    const elem = nodeRef.current;

    if (!elem) return;

    /** @type {"offsetWidth"|"offsetHeight"} */
    const offset = horizontal ? "offsetWidth" : "offsetHeight";

    elem.style[quantity] = `${elem[offset]}px`;

    // Force browser reflow
    elem[offset];

    onExit?.(elem);
  };

  /** @type {() => void} */
  const handleExiting = () => {
    const elem = nodeRef.current;

    if (!elem) return;

    elem.style[quantity] = "";

    onExiting?.(elem);
  };

  /** @type {() => void} */
  const handleExited = () => {
    const elem = nodeRef.current;

    if (!elem) return;

    onExited?.(elem);
  };

  return (
    <Transition
      nodeRef={nodeRef}
      in={open}
      timeout={timeout}
      mountOnEnter={mountOnEnter}
      unmountOnExit={unmountOnExit}
      appear={appear}
      enter={enter}
      exit={exit}
      onEnter={handleEnter}
      onEntering={handleEntering}
      onEntered={handleEntered}
      onExit={handleExit}
      onExiting={handleExiting}
      onExited={handleExited}>
      {(state) => (
        <Prime
          ref={nodeRef}
          className={cn(
            transitionStyles[state],
            {
              "collapse-horizontal":
                typeof horizontal === "boolean" && horizontal,
            },
            className,
          )}
          style={style}
          {...rest}>
          {children}
        </Prime>
      )}
    </Transition>
  );
}

Collapse.propTypes = propTypes;
Collapse.defaultProps = defaultProps;

export default Collapse;
