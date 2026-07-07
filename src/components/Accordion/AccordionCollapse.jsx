import PropTypes from "prop-types";
import cn from "classnames";
import { Collapse } from "components";

const BASE_CLASS_NAME = "accordion-collapse";

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
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),

  /**
   * Controls whether the collapse
   * content is expanded
   */
  open: PropTypes.bool,

  /**
   * Specifies the collapse transition
   * duration in milliseconds
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
 * content using a collapse transition.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/accordion/}
 *
 * @example
 * <Accordion.Collapse open>
 *
 *   <Accordion.Body>
 *     Accordion content
 *   </Accordion.Body>
 *
 * </Accordion.Collapse>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} AccordionCollapseOwnProps
 *
 * @property {boolean} [open=false]
 * Controls whether the collapse
 * content is expanded.
 *
 * @property {number} [timeout=350]
 * Specifies the collapse transition
 * duration in milliseconds.
 *
 * @typedef {PrimeProps & AccordionCollapseOwnProps} AccordionCollapseProps
 *
 * @param {AccordionCollapseProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @since 1.0.0
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
