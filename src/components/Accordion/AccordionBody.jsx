import { Prime } from "components";
import PropTypes from "prop-types";
import cn from "classnames";
import AccordionCollapse from "./AccordionCollapse";
import { useAccordionItemContext } from "./AccordionItemContext";

const BASE_CLASS_NAME = "accordion-body";

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
};

const defaultProps = {
  style: null,
  className: null,
};

/**
 * AccordionBody component
 * @component
 *
 * @see {@link Prime}
 * @see {@link https://getbootstrap.com/docs/5.1/components/accordion/}
 *
 * @example
 * <AccordionBody>.accordion-body</AccordionBody>
 *
 * @example
 * <Accordion.Body>.accordion-body</Accordion.Body>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} AccordionBodyOwnProps
 *
 * @typedef {PrimeProps & AccordionBodyOwnProps} AccordionBodyProps
 *
 * @param {AccordionBodyProps} props
 *
 * @return {React.ReactElement}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function AccordionBody(props) {
  const { style, children, className, ...rest } = props;

  const classes = cn(BASE_CLASS_NAME, className);

  const { expanded } = useAccordionItemContext();

  return (
    <AccordionCollapse open={expanded}>
      <Prime className={classes} style={style} {...rest}>
        {children}
      </Prime>
    </AccordionCollapse>
  );
}

AccordionBody.propTypes = propTypes;
AccordionBody.defaultProps = defaultProps;

export default AccordionBody;
