import { Prime } from "components";
import PropTypes from "prop-types";
import cn from "classnames";
import AccordionItem from "./AccordionItem";
import AccordionHeader from "./AccordionHeader";
import AccordionButton from "./AccordionButton";
import AccordionBody from "./AccordionBody";
import AccordionCollapse from "./AccordionCollapse";

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
   * Sets flush style
   */
  flush: PropTypes.bool,
};

const defaultProps = {
  style: null,
  className: null,
  flush: false,
};

const BASE_CLASS_NAME = "accordion";

/**
 * Accordion component
 * @component
 *
 * @see {@link Prime}
 * @see {@link https://getbootstrap.com/docs/5.1/components/accordion/}
 *
 * @example
 * <Accordion>.accordion</Accordion>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} AccordionOwnProps
 * @property {boolean} [flush] - Sets flush style
 *
 * @typedef {PrimeProps & AccordionOwnProps} AccordionProps
 *
 * @param {AccordionProps} props
 *
 * @return {React.ReactElement}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function Accordion(props) {
  const { style, children, className, flush = false, ...rest } = props;

  const classes = cn(
    BASE_CLASS_NAME,
    { "accordion-flush": typeof flush === "boolean" && flush },
    className,
  );

  return (
    <Prime className={classes} style={style} {...rest}>
      {children}
    </Prime>
  );
}

Accordion.propTypes = propTypes;
Accordion.defaultProps = defaultProps;

Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Button = AccordionButton;
Accordion.Body = AccordionBody;
Accordion.Collapse = AccordionCollapse;

export default Accordion;
