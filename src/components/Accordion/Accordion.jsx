import { Prime } from "components";
import PropTypes from "prop-types";
import cn from "classnames";
import AccordionItem from "./AccordionItem";
import AccordionHeader from "./AccordionHeader";
import AccordionButton from "./AccordionButton";
import AccordionBody from "./AccordionBody";
import AccordionCollapse from "./AccordionCollapse";
import { AccordionContext } from "./AccordionContext";
import { useMemo, useState } from "react";
import { prefix } from "helpers";

const BASE_CLASS_NAME = "accordion";

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
   * Removes the default background,
   * borders, and rounded corners
   */
  flush: PropTypes.bool,

  /**
   * Initially expanded accordion
   * item key or keys
   */
  defaultActiveKey: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),

  /**
   * Allows multiple accordion
   * items to remain expanded
   */
  alwaysOpen: PropTypes.bool,
};

const defaultProps = {
  style: null,
  className: null,
  flush: false,
  defaultActiveKey: "",
  alwaysOpen: false,
};

/**
 * Displays vertically stacked
 * collapsible content panels.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/accordion/}
 *
 * @example
 * <Accordion defaultItemKey="1">
 *
 *  <Accordion.Item itemKey="1">
 *    <Accordion.Header>Item #1</Accordion.Header>
 *
 *    <Accordion.Body>
 *      This is the first item's accordion body
 *    </Accordion.Body>
 *  </Accordion.Item>
 *
 * </Accordion>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} AccordionOwnProps
 *
 * @property {boolean} [flush=false]
 * Removes the default background,
 * borders, and rounded corners.
 *
 * @property {string|string[]} [defaultActiveKey=""]
 * Initially expanded accordion
 * item key or keys.
 *
 * @property {boolean} [alwaysOpen=false]
 * Allows multiple accordion
 * items to remain expanded.
 *
 * @typedef {PrimeProps & AccordionOwnProps} AccordionProps
 *
 * @param {AccordionProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @since 1.0.0
 */
function Accordion(props) {
  const {
    style,
    children,
    className,
    flush = false,
    defaultActiveKey = "",
    alwaysOpen = false,
    ...rest
  } = props;

  const classes = cn(
    BASE_CLASS_NAME,
    {
      [prefix(BASE_CLASS_NAME, "flush")]: typeof flush === "boolean" && flush,
    },
    className,
  );

  // list of item key(s) that will be opened
  const [activeKey, setActiveKey] = useState(() => {
    if (!defaultActiveKey) return "";

    // String
    if (typeof defaultActiveKey === "string" && !alwaysOpen) {
      return defaultActiveKey;
    }

    // Array
    if (Array.isArray(defaultActiveKey) && defaultActiveKey.length > 0) {
      return [...defaultActiveKey];
    }
  });

  const accordionValue = useMemo(
    () => ({
      activeKey,
      setActiveKey,
      alwaysOpen,
    }),
    [activeKey, alwaysOpen],
  );

  return (
    <AccordionContext.Provider value={accordionValue}>
      <Prime className={classes} style={style} {...rest}>
        {children}
      </Prime>
    </AccordionContext.Provider>
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
