import { Prime } from "components";
import PropTypes from "prop-types";
import cn from "classnames";

const BASE_CLASS_NAME = "accordion-button";

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
   * Indicates whether the associated
   * accordion item is collapsed
   */
  collapsed: PropTypes.bool,

  /**
   * Disables the button
   */
  disabled: PropTypes.bool,

  /**
   * Called when the button
   * is clicked
   */
  onClick: PropTypes.func.isRequired,
};

const defaultProps = {
  style: null,
  className: null,
  collapsed: true,
  disabled: false,
};

/**
 * Toggles the visibility of the
 * associated accordion content.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/accordion/}
 *
 * @example
 * <Accordion.Button>
 *  Button
 * </Accordion.Button>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} AccordionButtonOwnProps
 *
 * @property {boolean} [collapsed=true]
 * Indicates whether the associated
 * accordion item is collapsed.
 *
 * @property {boolean} [disabled=false]
 * Disables the button.
 *
 * @property {(event: React.MouseEvent<HTMLButtonElement>) => void} onClick
 * Called when the button is clicked.
 *
 * @typedef {PrimeProps & AccordionButtonOwnProps} AccordionButtonProps
 *
 * @param {AccordionButtonProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @since 1.0.0
 */
function AccordionButton(props) {
  const {
    style,
    children,
    className,
    collapsed = true,
    disabled = false,
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
