import { useRef } from "react";
import { Prime } from "components";
import PropTypes from "prop-types";
import { Transition } from "react-transition-group";

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

  /**
   * Callback fired after the "exited" status is applied
   */
  onExited: PropTypes.func,
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
  onExited: null,
};

/**
 * Collapse component
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
 * @property {boolean} [horizontal] - Sets horizontal collapsing
 * @property {boolean} [open] - Sets open state
 * @property {number} [duration] - Sets animation duration value
 * @property {boolean} [mountOnEnter] - Sets lazy mount component
 * @property {boolean} [unmountOnExit] - Sets unmount the component after it finishes exiting
 * @property {boolean} [appear] - Sets enter transition when it first mounts
 * @property {boolean} [enter] - Enable or disable enter transitions
 * @property {boolean} [exit] - Enable or disable exit transitions
 * @property {boolean} [addEndListener] - Add a custom transition end trigger
 * @property {() => void} [onEnter] - Callback fired before the "entering" status is applied
 * @property {() => void} [onEntering] - Callback fired after the "entering" status is applied
 * @property {() => void} [onEntered] - Callback fired after the "entered" status is applied
 * @property {() => void} [onExit] - Callback fired before the "exiting" status is applied
 * @property {() => void} [onExiting] - Callback fired after the "exiting" status is applied
 * @property {() => void} [onExited] - Callback fired after the "exited" status is applied
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
 * - add horizontal style
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

  const handleEnter = () => {
    if (nodeRef.current) {
      nodeRef.current.style.height = "0";
    }
  };

  const handleEntering = () => {
    if (nodeRef.current) {
      nodeRef.current.style.height = `${nodeRef.current.scrollHeight}px`;
    }
  };

  const handleEntered = () => {
    if (nodeRef.current) {
      nodeRef.current.style.height = "";
    }
  };

  const handleExit = () => {
    if (nodeRef.current) {
      nodeRef.current.style.height = `${nodeRef.current.offsetHeight}px`;
      nodeRef.current.offsetHeight;
    }
  };

  const handleExiting = () => {
    if (nodeRef.current) {
      nodeRef.current.style.height = "";
    }
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
        <Prime ref={nodeRef} className={transitionStyles[state]} {...rest}>
          {children}
        </Prime>
      )}
    </Transition>
  );
}

Collapse.propTypes = propTypes;
Collapse.defaultProps = defaultProps;

export default Collapse;
