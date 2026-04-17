import React, { useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "utils/prefix";
import Prime from "components/Prime";
import CloseButton from "components/CloseButton";
import AlertLink from "./AlertLink";
import AlertHeading from "./AlertHeading";

// @type {string}
const BASE_CLASS_NAME = "alert";

// @type {Array<string>}
const ALERT_THEMES = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
];

// @type {Object}
const propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.shape({}),
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
  theme: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ]),
  dismissible: PropTypes.bool,
  animated: PropTypes.bool,
  onClose: PropTypes.func,
};

// @type {Object}
const defaultProps = {
  style: null,
  className: null,
  theme: "primary",
  dismissible: false,
  animated: false,
  onClose: null,
};

function AlertBase({
  style,
  children,
  className,
  theme,
  dismissible,
  animated,
  onClose,
  ...rest
}) {
  const alertRef = useRef(null);

  // @type {string}
  const classes = classNames(
    BASE_CLASS_NAME,
    prefix(BASE_CLASS_NAME, theme),
    {
      [prefix(BASE_CLASS_NAME, "dismissible")]: dismissible,
      "show fade": animated,
    },
    className,
  );

  return (
    <Prime
      role="alert"
      ref={alertRef}
      className={classes}
      style={style}
      {...rest}
    >
      {children}
      {dismissible && <CloseButton onClick={onClose} />}
    </Prime>
  );
}
AlertBase.propTypes = propTypes;
AlertBase.defaultProps = defaultProps;

/**
 * Alert component
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.3/components/alerts|Bootstrap Documentation}
 *
 * @example
 * <Alert theme="secondary">Message</Alert>
 *
 * @example
 * <Alert.Primary>Primary</Alert.Primary>
 *
 * @typedef {Object} AlertProps
 * @property {React.ReactNode} children - Add children components
 * @property {React.CSSProperties} [style=null] - Add CSS styles
 * @property {Object|Array<string>|string} [className=null] - Add other CSS class names
 * @property {'primary'|'secondary'|'success'|'danger'|'warning'|'info'|'light'|'dark'} [theme="primary"] - Change theme color
 * @property {boolean} [dismissible=false] - Add close button and state
 * @property {boolean} [animated=false] - Add animate CSS styles
 * @property {React.MouseEventHandler<HTMLButtonElement>} [onClose=null] - Add event handler on close
 * @property {import(../Prime/Prime.jsx).BoxProps} ...rest - Prime component API
 *
 * @param {AlertProps} props
 * @return {JSX.Element} Alert
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 * @since 1.0.0
 */
const Alert = (props) => <AlertBase {...props} />;

/**
 * Function for created Alert themed variants
 *
 * @param {string} theme - Alert theme
 *
 * @example
 * const Alert[Primary] = createAlertVariant('primary');
 * Usage in code: <Alert.Primary>Primary</Alert>;
 *
 * @returns {React.ReactElement} Alert variant
 */
const createAlertVariant = (theme) => {
  const AlertVariant = (props) => <AlertBase theme={theme} {...props} />;
  AlertVariant.propTypes = propTypes;
  AlertVariant.defaultProps = { ...defaultProps, theme };

  return AlertVariant;
};

ALERT_THEMES.forEach((theme) => {
  Alert[theme.charAt(0).toUpperCase() + theme.slice(1)] =
    createAlertVariant(theme);
});

Alert.Link = AlertLink;
Alert.Heading = AlertHeading;

export default Alert;
