import { Prime } from "components";
import PropTypes from "prop-types";
import cn from "classnames";

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
   * Sets collapsed style
   */
  collapsed: PropTypes.bool,

  /**
   * Sets disabled state
   */
  disabled: PropTypes.bool,

  /**
   * Sets click handle
   */
  onClick: PropTypes.func.isRequired,
};

const defaultProps = {
  style: null,
  className: null,
  collapsed: true,
  disabled: false,
};

const BASE_CLASS_NAME = "accordion-button";

/**
 * AccordionButton component
 * @component
 *
 * @see {@link Prime}
 * @see {@link https://getbootstrap.com/docs/5.1/components/accordion/}
 *
 * @example
 * <AccordionButton>.accordion-button</AccordionButton>
 *
 * @example
 * <Accordion.Button>.accordion-button</Accordion.Button>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} AccordionButtonOwnProps
 * @property {boolean} [collapsed] - Sets collapsed style
 * @property {boolean} [disabled] - Sets disabled style
 * @property {() => void} [onClick] - Sets click handle
 *
 * @typedef {PrimeProps & AccordionButtonOwnProps} AccordionButtonProps
 *
 * @param {AccordionButtonProps} props
 *
 * @return {React.ReactElement}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function AccordionButton(props) {
  const {
    style,
    children,
    className,
    collapsed = false,
    disabled = true,
    onClick,
    ...rest
  } = props;

  const classes = cn(
    BASE_CLASS_NAME,
    {
      collapsed: typeof collapsed === "boolean" && !collapsed,
    },
    className,
  );

  return (
    <Prime
      as="button"
      type="button"
      disabled={disabled}
      className={classes}
      style={style}
      onClick={onClick}
      {...rest}>
      {children}
    </Prime>
  );
}

AccordionButton.propTypes = propTypes;
AccordionButton.defaultProps = defaultProps;

export default AccordionButton;
