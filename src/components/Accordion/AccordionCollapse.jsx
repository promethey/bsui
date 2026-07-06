import PropTypes from "prop-types";
import cn from "classnames";
import { Collapse } from "components";

const BASE_CLASS_NAME = "accordion-collapse";

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
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),

  /**
   * Sets open state
   */
  open: PropTypes.bool,

  /**
   * Sets animation duration value
   */
  timeout: PropTypes.number,
};

const defaultProps = {
  style: null,
  className: null,
  open: false,
  timeout: 350,
};

/**
 * Shows and hides the accordion
 * content with a collapse animation.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/accordion/}
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} AccordionCollapseOwnProps
 *
 * @property {boolean} [open]
 * Sets open state
 *
 * @property {number} [timeout=350]
 * Sets animation duration value
 *
 * @typedef {PrimeProps & AccordionCollapseOwnProps} AccordionCollapseProps
 *
 * @param {AccordionCollapseProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function AccordionCollapse(props) {
  const {
    style,
    children,
    className,
    open = false,
    timeout = 350,
    ...rest
  } = props;

  const classes = cn(BASE_CLASS_NAME, className);

  return (
    <Collapse
      open={open}
      timeout={timeout}
      className={classes}
      style={style}
      {...rest}>
      {children}
    </Collapse>
  );
}

AccordionCollapse.propTypes = propTypes;
AccordionCollapse.defaultProps = defaultProps;

export default AccordionCollapse;
