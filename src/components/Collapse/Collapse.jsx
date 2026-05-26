import { useRef } from "react";
import { Prime } from "components";
import PropTypes from "prop-types";
import { Transition } from "react-transition-group";
import cn from "classnames";

const propTypes = {
  /**
   * Inline styles applied to the root
   */
  style: PropTypes.shape({}),

  /**
   * Content rendered inside the component
   */
  children: PropTypes.node.isRequired,

  /**
   * Additional classes applied to the root element
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
   * Sets animation duration value
   */
  duration: PropTypes.number,

  /**
   * Sets lazy mount component
   */
  mountOnEnter: PropTypes.bool,

  /**
   * Sets unmount the component after it finishes exiting
   */
  unmountOnExit: PropTypes.bool,

  /**
   * Sets enter transition when it first mounts
   */
  appear: PropTypes.bool,

  /**
   * Enable or disable enter transitions
   */
  enter: PropTypes.bool,

  /**
   * Enable or disable exit transitions
   */
  exit: PropTypes.bool,

  /**
   * Add a custom transition end trigger
   */
  addEndListener: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied
   */
  onExiting: PropTypes.func,
};

const defaultProps = {
  style: null,
  className: null,
  horizontal: false,
  open: false,
  duration: 350,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  addEndListener: null,
  onEnter: null,
  onEntering: null,
  onEntered: null,
  onExit: null,
  onExiting: null,
};

/**
 * Animates the expansion and collapsing of content visibility.
 *
 * @component
 *
 * @see {@link Prime}
 * @see {@link https://reactcommunity.org/react-transition-group/transition}
 * @see {@link https://getbootstrap.com/docs/5.1/components/collapse/}
 *
 * @example
 * const [show, setShow] = useState(false);
 * return (
 *  <>
 *  <Button onClick={() => setShow((prev) => !prev)}>{show ? "Close" : "Show"}</Button>
 *  <Collapse open={show} duration={350}>
 *    Hidden content
 *  </Collapse>
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
 * @property {number} [duration=350]
 * Sets the transition animation duration in milliseconds.
 *
 * @property {boolean} [mountOnEnter=false]
 * Lazily mounts the component when entering.
 *
 * @property {boolean} [unmountOnExit=false]
 * Unmounts the component after the exit transition completes.
 *
 * @property {boolean} [appear=false]
 * Enables the enter transition during the initial mount.
 *
 * @property {boolean} [enter=true]
 * Enables enter transitions.
 *
 * @property {boolean} [exit=true]
 * Enables exit transitions.
 *
 * @property {(node: HTMLElement, done: () => void) => void} [addEndListener]
 * Adds a custom transition completion listener.
 *
 * @property {(element: HTMLElement) => void} [onEnter]
 * Fired before the entering transition starts.
 *
 * @property {(element: HTMLElement) => void} [onEntering]
 * Fired while the entering transition is active.
 *
 * @property {(element: HTMLElement) => void} [onEntered]
 * Fired after the entering transition completes.
 *
 * @property {(element: HTMLElement) => void} [onExit]
 * Fired before the exit transition starts.
 *
 * @property {(element: HTMLElement) => void} [onExiting]
 * Fired while the exit transition is active.
 *
 * @property {(element: HTMLElement) => void} [onExited]
 * Fired after the exit transition completes.
 *
 * @typedef {PrimeProps & CollapseOwnProps} CollapseProps
 * @param {CollapseProps} props
 *
 * @return {React.ReactElement}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 *
 * @todo
 * - refactor event handles
 */
function Collapse(props) {
  const {
    style,
    children,
    className,
    horizontal = false,
    open = false,
    duration = 350,
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

  const handleEnter = () => {
    const elem = nodeRef.current;

    if (!elem) return;

    elem.style[quantity] = "0";

    onEnter?.(elem);
  };

  const handleEntering = () => {
    const elem = nodeRef.current;

    if (!elem) return;

    /** @type {"scrollHeight"|"scrollWidth"} */
    let scroll = horizontal ? "scrollWidth" : "scrollHeight";

    elem.style[quantity] = `${elem[scroll]}px`;

    onEntering?.(elem);
  };

  const handleEntered = () => {
    const elem = nodeRef.current;

    if (!elem) return;

    elem.style[quantity] = "";

    onEntered?.(elem);
  };

  const handleExit = () => {
    const elem = nodeRef.current;

    if (!elem) return;

    /** @type {"offsetWidth"|"offsetHeight"} */
    const offset = horizontal ? "offsetWidth" : "offsetHeight";

    elem.style[quantity] = `${elem[offset]}px`;
    elem[offset]; // force update

    onExit?.(elem);
  };

  const handleExiting = () => {
    const elem = nodeRef.current;

    if (!elem) return;

    elem.style[quantity] = "";

    onExiting?.(elem);
  };

  return (
    <Transition
      nodeRef={nodeRef}
      in={open}
      timeout={duration}
      mountOnEnter={mountOnEnter}
      unmountOnExit={unmountOnExit}
      appear={appear}
      enter={enter}
      exit={exit}
      onEnter={handleEnter}
      onEntering={handleEntering}
      onEntered={handleEntered}
      onExit={handleExit}
      onExiting={handleExiting}>
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
