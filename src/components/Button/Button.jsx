import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "utils/prefix";
import { capitalize } from "utils/capitalize";
import { defineThemeVariants, attachStaticVariants } from "utils/variants";
import Box from "components/Box";

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
 * @component
 *
 * @example
 * // regular button
 * <Button>Button</Button>
 *
 * @example
 * // success button
 * <Button theme="success">Button</Button>
 *
 * @example
 * // danger button
 * <Button theme="danger">Button</Button>
 *
 * @example
 * // primary button
 * <Button.Primary>Primary</Button>
 *
 * @example
 * // outline button
 * <Button.Outline>Outline</Button>
 *
 * @example
 * import {bs} from 'utils/constants';
 * <Button theme={bs.theme.danger}>Button</Button>
 *
 * @typedef {Object} ButtonProps
 * @param {('button'|'a'|'input')} [as='button'] - Render button as
 * @param {object} [style=null] - React CSS object
 * @param {React.ReactNode} children - React children components
 * @param {(string|Array<string>|object)} [className=null] - Classnames utility [(Read npmjs.com)]{@link https://www.npmjs.com/package/classnames}
 * @param {string} [to=null] - Set link for button
 * @param {string} [type="button"] - Change button html tag
 * @param {('primary'|'secondary'|'success'|'danger'|'warning'|'info'|'light'|'dark')} [theme="primary"] - Change theme color
 * @param {boolean} [disabled=false] - Change disabled state
 * @param {boolean} [pressed=false] - Change pressed state
 * @param {boolean} [stretchedLink=false] - Add stretched link style
 * @param {function} [onClick=null] - Add event hanlder for click
 *
 * @returns {JSX.Element} Button
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function ButtonBase(props) {
  const {
    as: ComponentType,
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

  const BASE_CLASS_NAME = "btn";

  const classes = classNames(
    BASE_CLASS_NAME,
    {
      [prefix(BASE_CLASS_NAME, outline > 0 ? "outline" : "", theme)]: theme,
      disabled: disabled && ComponentType !== "button",
      [prefix(BASE_CLASS_NAME, size)]: size,
      active: pressed,
      [prefix("stretched", "link")]: stretchedLink && ComponentType === "a",
    },
    className,
  );

  const baseProperties = {
    style,
    className: classes,
    onClick,
    ...rest,
  };

  // button props
  const buttonProperties = {
    ...baseProperties,
    type,
    disabled,
  };

  // link props
  const linkProperties = {
    ...baseProperties,
    href: to || "#",
    role: "button",
  };

  // input props
  const inputProps = {
    ...baseProperties,
    type,
    value: typeof children === "string" ? children : undefined,
  };

  if (pressed) {
    buttonProperties["aria-pressed"] = true;
    linkProperties["aria-pressed"] = true;
  }

  if (disabled) {
    linkProperties["aria-disabled"] = true;
  }

  // render <a />
  if (ComponentType === "a") {
    return (
      <Box as="a" {...linkProperties}>
        {children}
      </Box>
    );
  }

  // render <input />
  if (ComponentType === "input") {
    return <Box as="input" {...inputProps} />;
  }

  // default render <button />
  return (
    <Box as="button" {...buttonProperties}>
      {children}
    </Box>
  );
}

const Button = (props) => <ButtonBase {...props} />;

defineThemeVariants(Button, BUTTON_THEMES);

attachStaticVariants(Button, {
  Outline: { outline: true },
  Link: { as: "a" },
});

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
