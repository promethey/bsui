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
  itemKey: "",
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
 * <AccordionItem>
 *  <Accordion.Header>Item #1</Accordion.Header>
 *  <Accordion.Body>
 *    ...
 *  </Accordion.Body>
 * </AccordionItem>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} AccordionItemOwnProps
 * @property {string} [itemKey]
 * Sets item key
 *
 * @typedef {PrimeProps & AccordionItemOwnProps} AccordionItemProps
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

  const { activeKey, setActiveKey, alwaysOpen } = useAccordionContext();

  const normalizedItemKey = /** @type {string} */ (itemKey);

  const expanded = Array.isArray(activeKey)
    ? activeKey.includes(normalizedItemKey)
    : activeKey === normalizedItemKey;

  const toggle = useCallback(() => {
    setActiveKey((previousItemKey) => {
      // String
      if (!alwaysOpen) {
        return previousItemKey === normalizedItemKey ? "" : normalizedItemKey;
      }

      // Array
      if (Array.isArray(previousItemKey)) {
        if (previousItemKey.includes(normalizedItemKey)) {
          return previousItemKey.filter((item) => item !== normalizedItemKey);
        }

        return [...previousItemKey, normalizedItemKey];
      }
    });
  }, [itemKey]);

  const accordionItemValue = useMemo(
    () => ({
      expanded,
      toggle,
    }),
    [activeKey],
  );

  return (
    <AccordionItemContext.Provider value={accordionItemValue}>
      <Prime className={classes} style={style} {...rest}>
        {children}
      </Prime>
    </AccordionItemContext.Provider>
  );
}

AccordionItem.propTypes = propTypes;
AccordionItem.defaultProps = defaultProps;

export default AccordionItem;
