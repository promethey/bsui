import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { classnames as cs, prefix } from "helpers";
import { Prime } from "components";

const BASE_CLASS_NAME = "btn";

/**
 * @typedef {"primary"|"secondary"|"success"|"danger"|"warning"|"info"|"light"|"dark"|"link"} ButtonThemes
 * @type {Array<ButtonThemes>}
 */
const BUTTON_THEMES = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
];

/**
 * @typedef {"sm"|"lg"} ButtonSizes
 * @type {Array<ButtonSizes>}
 */
const BUTTON_SIZES = ["sm", "lg"];

const propTypes = {
  /**
   * HTML element type used
   * for rendering
   */
  as: PropTypes.elementType,

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
   * Navigation target URL
   */
  to: PropTypes.string,

  /**
   * Native button type attribute
   */
  type: PropTypes.string,

  /**
   * Semantic visual tone
   */
  tone: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
    "link",
  ]),

  /**
   * Applies the outline style
   */
  outline: PropTypes.bool,

  /**
   * Form control value
   */
  value: PropTypes.string,

  /**
   * Controls the component size
   */
  size: PropTypes.oneOf(["sm", "lg"]),

  /**
   * Disables user interaction
   */
  disabled: PropTypes.bool,

  /**
   * Indicates the pressed state
   */
  pressed: PropTypes.bool,

  /**
   * Click event handler
   */
  onClick: PropTypes.func,
};

const defaultProps = {
  as: "button",
  style: null,
  className: null,
  children: null,
  to: "#",
  type: "button",
  tone: "primary",
  outline: false,
  value: null,
  size: null,
  disabled: false,
  pressed: false,
  onClick: null,
};

/**
 * Triggers actions, events, or navigation
 * through contextual interactive controls.
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/buttons/}
 *
 * @example
 * <Button>Button</Button>
 *
 * @example
 * <Button tone="success">Button</Button>
 *
 * @example
 * <Button size="lg">Button</Button>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} ButtonOwnProps
 *
 * @property {string} [to="#"]
 * Navigation target URL.
 *
 * @property {"button"|"submit"|"reset"} [type="button"]
 * Native button type attribute.
 *
 * @property {"primary"|"secondary"|"success"|"danger"|"warning"|"info"|"light"|"dark"|"link"} [tone="primary"]
 * Semantic visual tone.
 *
 * @property {boolean} [outline=false]
 * Applies the outline style.
 *
 * @property {string} [value]
 * Form control value.
 *
 * @property {"sm"|"lg"} [size]
 * Controls the component size.
 *
 * @property {boolean} [disabled=false]
 * Disables user interaction.
 *
 * @property {boolean} [pressed=false]
 * Indicates the pressed state.
 *
 * @property {(event: React.MouseEvent<HTMLButtonElement>) => void} [onClick]
 * Click event handler.
 *
 * @typedef {ButtonOwnProps & PrimeProps} ButtonProps
 *
 * @param {ButtonProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @since 1.0.0
 */
function Button(props) {
  const {
    as: ComponentType = "button",
    style,
    children,
    className,
    to = "#",
    type,
    tone = "primary",
    outline = false,
    value,
    size,
    disabled = false,
    pressed = false,
    onClick,
    ...rest
  } = props;

  const classes = cn(
    BASE_CLASS_NAME,
    {
      [prefix(BASE_CLASS_NAME, outline ? `outline-${tone}` : tone)]:
        typeof tone === "string" && BUTTON_THEMES.includes(tone),

      disabled:
        typeof disabled === "boolean" && disabled && ComponentType === "button",

      [cs(BASE_CLASS_NAME, size)]:
        typeof size === "string" && BUTTON_SIZES.includes(size),

      active: typeof pressed === "boolean" && pressed,
    },
    className,
  );

  const properties = {
    style,
    className: classes,
    onClick,
    ...rest,
  };

  /** @type {Record<string, any>} */
  const propertyList = {
    button: {
      ...properties,
      type,
      disabled,
    },
    a: {
      ...properties,
      href: to || "#",
      role: "button",
    },
    input: {
      ...properties,
      type,
      value: value,
    },
  };

  if (pressed) {
    propertyList["button"]["aria-pressed"] = true;
    propertyList["a"]["aria-pressed"] = true;
  }

  if (disabled) {
    propertyList["a"]["aria-disabled"] = true;
  }

  return (
    <Prime
      as={ComponentType}
      {...propertyList[/** @type {"button"|"input"|"a"} */ (ComponentType)]}>
      {children}
    </Prime>
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
