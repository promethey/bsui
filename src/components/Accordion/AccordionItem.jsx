import { Prime } from "components";
import PropTypes from "prop-types";
import cn from "classnames";
import { AccordionItemContext } from "./AccordionItemContext";
import { useCallback, useMemo } from "react";
import { useAccordionContext } from "./AccordionContext";

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
};

const defaultProps = {
  style: null,
  className: null,
  itemKey: null,
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
  const { style, children, className, itemKey, ...rest } = props;

  const classes = cn(BASE_CLASS_NAME, className);

  const { activeKey, setActiveKey } = useAccordionContext();

  const onToggle = useCallback(() => {
    setActiveKey((prevItemKey) => (prevItemKey === itemKey ? "" : itemKey));
  }, [itemKey]);

  const value = useMemo(
    () => ({
      expanded: itemKey === activeKey,
      onToggle,
    }),
    [activeKey],
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
