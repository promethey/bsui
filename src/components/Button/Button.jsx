import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { classnames as cs } from "helpers/classnames";
import Prime from "components/Prime";
import { themeResolver } from "utils/theme";
import { is } from "helpers/is";
import { equal } from "helpers/equal";

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
  as: PropTypes.oneOf(["button", "a", "input"]),
  style: PropTypes.shape({}),
  children: PropTypes.node.isRequired,
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
  size: PropTypes.oneOf(["sm", "lg"]),
  disabled: PropTypes.bool,
  pressed: PropTypes.bool,
  stretchedLink: PropTypes.bool,
  onClick: PropTypes.func,
};

const defaultProps = {
  as: "button",
  style: null,
  className: null,
  to: null,
  type: "button",
  theme: "primary",
  outline: false,
  size: null,
  disabled: false,
  pressed: false,
  stretchedLink: false,
  onClick: null,
};

/**
 * Button never throws.
 * Invalid props are ignored.
 * Always returns valid JSX.
 *
 * @example
 * <Button>Button</Button>
 * <Button theme="success">Button</Button>
 * <Button theme="danger">Button</Button>
 * <Button.Primary>Primary</Button>
 * <Button.Outline>Outline</Button>
 *
 * @example
 * import {bs} from 'constants';
 * <Button theme={bs.theme.danger}>Button</Button>
 *
 * @returns {JSX.Element} Button
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
    to,
    type,
    theme = "primary",
    outline,
    size,
    disabled,
    pressed,
    stretchedLink,
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
      disabled: is("boolean", disabled, { notFalse: true }) && !equal(ComponentType, "button"),
      [cs(BUTTON_CLASS_NAME, size)]: is("string", size, { notEmpty: true }),
      active: is("boolean", pressed, { notFalse: true }),
      [cs("stretched", "link")]:
        is("boolean", stretchedLink, { notFalse: true }) && equal(ComponentType, "a"),
    },
    className,
  );

  const baseProperties = {
    style,
    className: classes,
    onClick,
    ...rest,
  };

  const propertyList = {
    button: {
      ...baseProperties,
      type,
      disabled
    },
    a: {
      ...baseProperties,
      href: to || "#",
      role: "button"
    },
    input: {
      ...baseProperties,
      type,
      value: is("string", children, { notEmpty: true }) ? children : undefined,
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
    <Prime as={ComponentType} {...propertyList[ComponentType]}>
      {children}
    </Prime>
  )
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
