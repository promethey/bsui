import { Prime } from "components";
import PropTypes from "prop-types";
import cn from "classnames";
import AccordionButton from "./AccordionButton";
import { useAccordionItemContext } from "./AccordionItemContext";

const BASE_CLASS_NAME = "accordion-header";

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
};

const defaultProps = {
  style: null,
  className: null,
};

/**
 * Wraps the accordion toggle
 * button for a single section.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/accordion/}
 *
 * @example
 * <Accordion.Header>
 *  Item 1
 * </Accordion.Header>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} AccordionHeaderOwnProps
 *
 * @typedef {PrimeProps & AccordionHeaderOwnProps} AccordionHeaderProps
 *
 * @param {AccordionHeaderProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @since 1.0.0
 */
function AccordionHeader(props) {
  const { style, children, className, ...rest } = props;

  const classes = cn(BASE_CLASS_NAME, className);

  const { expanded, toggle, disabled } = useAccordionItemContext();

  return (
    <Prime as="h2" className={classes} style={style} {...rest}>
      <AccordionButton
        collapsed={expanded}
        disabled={disabled}
        onClick={toggle}>
        {children}
      </AccordionButton>
    </Prime>
  );
}

AccordionHeader.propTypes = propTypes;
AccordionHeader.defaultProps = defaultProps;

export default AccordionHeader;
