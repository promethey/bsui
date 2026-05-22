import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { classnames as cs, is, equal } from "helpers";
import { themeResolver } from "utils";
import { Prime } from "components";

const BUTTON_CLASS_NAME = "btn";

const BUTTON_THEMES = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
  "outline-primary",
  "outline-secondary",
  "outline-success",
  "outline-danger",
  "outline-warning",
  "outline-info",
  "outline-light",
  "outline-dark",
];

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
 * Button never throws.
 * Invalid props are ignored.
 * Always returns valid JSX.
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/buttons/}
 *
 * @example
 * <Button>Button</Button>
 * <Button theme="success">Button</Button>
 * <Button theme="danger">Button</Button>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} ButtonOwnProps
 * @property {"button"|"input"|"a"} [as] - HTML element type used for rendering.
 * @property {Object} [style] - Inline styles applied to the root.
 * @property {React.ReactNode} [children] - Content rendered inside the component.
 * @property {Object|string} [className] - Additional classes applied to the root element.
 *
 * @property {string} [to] - Sets href
 * @property {"button"|"submit"|"reset"} [type] - Sets type
 * @property {"primary"|"secondary"|"success"|"danger"|"warning"|"info"|"light"|"dark"|"link"} [theme] - Sets button theme
 * @property {boolean} [outline] - Sets button outline theme
 * @property {string} [value] - Sets input value string
 * @property {"sm"|"lg"} [size] - Sets button size
 * @property {boolean} [disabled] - Sets button disabled state
 * @property {boolean} [pressed] - Sets button pressed style
 * @property {() => void} [onClick] - Event handler for click
 *
 * @typedef {PrimeProps & ButtonOwnProps} ButtonProps
 *
 * @param {ButtonProps} props
 *
 * @returns {React.ReactNode}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function Button(props) {
  const {
    as: ComponentType = "button",
    style,
    children,
    className,
    to = "#",
    type,
    theme = "primary",
    outline,
    value,
    size,
    disabled,
    pressed,
    onClick,
    ...rest
  } = props;

  const classes = cn(
    BUTTON_CLASS_NAME,
    themeResolver(
      BUTTON_CLASS_NAME,
      outline ? `outline-${theme}` : theme,
      BUTTON_THEMES,
    ),
    {
      disabled:
        is("boolean", disabled, { notFalse: true }) &&
        !equal(ComponentType, "button"),
      [cs(BUTTON_CLASS_NAME, size)]: is("string", size, { notEmpty: true }),
      active: is("boolean", pressed, { notFalse: true }),
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
      as={ComponentType}
      {...propertyList[/** @type {"button"|"input"|"a"} */ (ComponentType)]}>
      {children}
    </Prime>
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
