import { Prime } from "components";
import PropTypes from "prop-types";
import cn from "classnames";
import { AccordionItemContext } from "./AccordionItemContext";
import { useCallback, useContext, useMemo, useState } from "react";

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
   * Sets item key
   */
  itemKey: PropTypes.string,

  /**
   * Sets default expanded state
   */
  defaultExpanded: PropTypes.bool,
};

const defaultProps = {
  style: null,
  className: null,
  itemKey: null,
  defaultExpanded: false,
};

const BASE_CLASS_NAME = "accordion-item";

/**
 * AccordionItem component
 * @component
 *
 * @see {@link Prime}
 * @see {@link https://getbootstrap.com/docs/5.1/components/accordion/}
 *
 * @example
 * <AccordionItem>.accordion-item</AccordionItem>
 *
 * @example
 * <Accordion.Item>.accordion-item</Accordion.Item>
 *
 * @example
 * <Accordion>
 *  <Accordion.Item itemKey={1}>
 *  <Accordion.Header>Accordion Item #1</Accordion.Header>
 *    <Accordion.Body>
 *      This is the first item's accordion body
 *    </Accordion.Body>
 *  </Accordion.Item>
 * </Accordion>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} AccordionItemOwnProps
 * @property {string} [itemKey] - Sets item key
 * @property {boolean} [defaultExpanded] - Sets default expanded state
 *
 * @typedef {PrimeProps & AccordionItemOwnProps} AccordionItemProps
 *
 * @param {AccordionItemProps} props
 *
 * @return {React.ReactElement}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function AccordionItem(props) {
  const {
    style,
    children,
    className,
    itemKey,
    defaultExpanded = false,
    ...rest
  } = props;

  const classes = cn(BASE_CLASS_NAME, className);

  const [expanded, setExpanded] = useState(defaultExpanded);

  const onToggle = useCallback(() => setExpanded((prev) => !prev), []);

  const value = useMemo(
    () => ({
      expanded,
      onToggle,
    }),
    [expanded],
  );

  return (
    <AccordionItemContext.Provider value={value}>
      <Prime className={classes} style={style} {...rest}>
        {children}
      </Prime>
    </AccordionItemContext.Provider>
  );
}

AccordionItem.propTypes = propTypes;
AccordionItem.defaultProps = defaultProps;

export default AccordionItem;
