import { Prime } from "components";
import PropTypes from "prop-types";
import cn from "classnames";
import AccordionButton from "./AccordionButton";
import { useAccordionItemContext } from "./AccordionItemContext";

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

const BASE_CLASS_NAME = "accordion-header";

/**
 * AccordionHeader component
 * @component
 *
 * @see {@link Prime}
 * @see {@link https://getbootstrap.com/docs/5.1/components/accordion/}
 *
 * @example
 * <AccordionHeader>.accordion-header</AccordionHeader>
 *
 * @example
 * <Accordion.Header>.accordion-header</Accordion.Header>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} AccordionHeaderOwnProps
 * @property {boolean} [disabled] - Sets disabled state
 *
 * @typedef {PrimeProps & AccordionHeaderOwnProps} AccordionHeaderProps
 *
 * @param {AccordionHeaderProps} props
 *
 * @return {React.ReactElement}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function AccordionHeader(props) {
  const { style, children, className, ...rest } = props;

  const classes = cn(BASE_CLASS_NAME, className);

  const { expanded, onToggle } = useAccordionItemContext();

  return (
    <Prime as="h2" className={classes} style={style} {...rest}>
      <AccordionButton collapsed={expanded} onClick={onToggle}>
        {children}
      </AccordionButton>
    </Prime>
  );
}

AccordionHeader.propTypes = propTypes;
AccordionHeader.defaultProps = defaultProps;

export default AccordionHeader;
