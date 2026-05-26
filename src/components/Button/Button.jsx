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
   * HTML element type used for rendering
   */
  as: PropTypes.elementType,

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
  to: PropTypes.string,
  type: PropTypes.string,
  theme: PropTypes.oneOf([
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
  outline: PropTypes.bool,
  value: PropTypes.string,
  size: PropTypes.oneOf(["sm", "lg"]),
  disabled: PropTypes.bool,
  pressed: PropTypes.bool,
  onClick: PropTypes.func,
};

const defaultProps = {
  as: "button",
  style: null,
  className: null,
  children: null,
  to: "#",
  type: "button",
  theme: "primary",
  outline: false,
  value: null,
  size: null,
  disabled: false,
  pressed: false,
  onClick: null,
};

/**
 * Triggers actions, events, or navigation through contextual interactive controls.
 *
 * @see {@link Prime}
 * @see {@link https://getbootstrap.com/docs/5.1/components/buttons/}
 *
 * @example
 * <Button>Button</Button>
 *
 * @example
 * <Button theme="success">Button</Button>
 *
 * @example
 * <Button size="lg">Button</Button>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} ButtonOwnProps
 * @property {string} [to]
 * Sets href
 *
 * @property {"button"|"submit"|"reset"} [type]
 * Sets type
 *
 * @property {"primary"|"secondary"|"success"|"danger"|"warning"|"info"|"light"|"dark"|"link"} [theme]
 * Sets button theme
 *
 * @property {boolean} [outline]
 * Sets button outline theme
 *
 * @property {string} [value]
 * Sets input value string
 *
 * @property {"sm"|"lg"} [size]
 * Sets button size
 *
 * @property {boolean} [disabled]
 * Sets button disabled state
 *
 * @property {boolean} [pressed]
 * Sets button pressed style
 *
 * @typedef {ButtonOwnProps & PrimeProps} ButtonProps
 *
 * @param {ButtonProps} props
 *
 * @return {React.ReactNode}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 *
 * @type {React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLElement>>}
 */
const Button = React.forwardRef((props, ref) => {
  const {
    as: ComponentType = "button",
    style,
    children,
    className,
    to = "#",
    type,
    theme = "primary",
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
      [prefix(BASE_CLASS_NAME, outline ? `outline-${theme}` : theme)]:
        typeof theme === "string" && BUTTON_THEMES.includes(theme),
      disabled:
        typeof disabled === "boolean" && disabled && ComponentType === "button",
      [cs(BASE_CLASS_NAME, size)]:
        typeof size === "string" && BUTTON_SIZES.includes(size),
      active: typeof pressed === "boolean" && pressed,
    },
    className,
  );

  const baseProperties = {
    style,
    className: classes,
    onClick,
    ...rest,
  };

  /**
   * @type {{
   *  button: React.ButtonHTMLAttributes<HTMLButtonElement>,
   *  a: React.AnchorHTMLAttributes<HTMLAnchorElement>,
   *  input: React.InputHTMLAttributes<HTMLInputElement>
   * }}
   */
  const propertyList = {
    button: {
      ...baseProperties,
      type,
      disabled,
    },
    a: {
      ...baseProperties,
      href: to || "#",
      role: "button",
    },
    input: {
      ...baseProperties,
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
      ref={ref}
      as={ComponentType}
      {...propertyList[/** @type {"button"|"input"|"a"} */ (ComponentType)]}>
      {children}
    </Prime>
  );
});

Button.propTypes = propTypes;

export default Button;
