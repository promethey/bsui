import { Prime } from "components";
import PropTypes from "prop-types";
import cn from "classnames";
import { Collapse } from "components";

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
  duration: PropTypes.number,
};

const defaultProps = {
  style: null,
  className: null,
  open: false,
  duration: 350,
};

const BASE_CLASS_NAME = "accordion-collapse";

/**
 * AccordionCollapse component
 * @component
 *
 * @see {@link Prime}
 * @see {@link https://getbootstrap.com/docs/5.1/components/accordion/}
 *
 * @example
 * <AccordionCollapse>.accordion-collapse</AccordionCollapse>
 *
 * @example
 * <Accordion.Collapse>.accordion-collapse</Accordion.Collapse>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} AccordionCollapseOwnProps
 * @property {boolean} [open] - Sets open state
 * @property {number} [duration] - Sets animation duration value
 *
 * @typedef {PrimeProps & AccordionCollapseOwnProps} AccordionCollapseProps
 *
 * @param {AccordionCollapseProps} props
 *
 * @return {React.ReactElement}
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
    duration = 350,
    ...rest
  } = props;

  const classes = cn(BASE_CLASS_NAME, className);

  return (
    <Collapse
      open={open}
      duration={duration}
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
