import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "helpers/prefix";
import Prime from "components/Prime";

const BASE_CLASS_NAME = "btn";

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
    as: Component,
    style,
    children,
    className,
    to,
    type,
    theme,
    outline,
    size,
    disabled,
    pressed,
    stretchedLink,
    onClick,
    ...rest
  } = props;

  const classes = classNames(
    BASE_CLASS_NAME,
    {
      [prefix(BASE_CLASS_NAME, outline > 0 ? "outline" : "", theme)]: theme,
      disabled: disabled && Component !== "button",
      [prefix(BASE_CLASS_NAME, size)]: size,
      active: pressed,
      [prefix("stretched", "link")]: stretchedLink && Component === "a",
    },
    className,
  );

  const baseProperties = {
    style,
    className: classes,
    onClick,
    ...rest,
  };

  const properties = {
    button: { ...baseProperties, type, disabled },
    link: { ...baseProperties, href: to || "#", role: "button" },
    input: { ...baseProperties, type, value: typeof children === "string" ? children : undefined }
  };

  if (pressed) {
    properties["button"]["aria-pressed"] = true;
    properties["link"]["aria-pressed"] = true;
  }

  if (disabled) {
    properties["link"]["aria-disabled"] = true;
  }

  // <a />
  if (Component === "a") {
    return (
      <Prime as="a" {...properties["link"]}>
        {children}
      </Prime>
    );
  }

  // <input />
  if (Component === "input") {
    return <Prime as="input" {...properties["input"]} />;
  }

  // default <button />
  return (
    <Prime as="button" {...properties["button"]}>
      {children}
    </Prime>
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
