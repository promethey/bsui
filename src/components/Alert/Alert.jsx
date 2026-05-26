import React, { useRef } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { classnames as cs } from "helpers";
import { Prime, CloseButton } from "components";
import AlertLink from "./AlertLink";
import AlertHeading from "./AlertHeading";

const BASE_CLASS_NAME = "alert";

/**
 * @typedef {"primary"|"secondary"|"success"|"danger"|"warning"|"info"|"light"|"dark"} AlertThemes
 * @type {Array<AlertThemes>}
 */
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
   * Sets visual style
   */
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

  /**
   * Enable dismiss (close) button
   */
  dismissible: PropTypes.bool,

  /**
   * Enable animations
   */
  animated: PropTypes.bool,

  /**
   * Fired on dismiss action
   */
  onClose: PropTypes.func,
};

const defaultProps = {
  style: null,
  className: null,
  theme: "primary",
  dismissible: false,
  animated: false,
  onClose: null,
};

/**
 * Provide contextual feedback messages for typical user
 * actions with the handful of available and flexible alert messages.
 *
 * @see {@link Prime}
 * @see {@link https://getbootstrap.com/docs/5.3/components/alerts}
 *
 * @example
 * <Alert>.alert .alert-primary</Alert>
 *
 * @example
 * <Alert theme="secondary" mb={3} p={3}>
 *  .alert .alert-secondary .mb-3 .p-3
 * </Alert>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} AlertOwnProps
 * @property {AlertThemes} [theme] - Sets visual style
 * @property {boolean} [dismissible] - Enable dismiss (close) button
 * @property {boolean} [animated] - Enable animations
 * @property {() => void} [onClose] - Fired on dismiss action
 *
 * @typedef {AlertOwnProps & PrimeProps} AlertProps
 * @param {AlertProps} props
 *
 * @return {React.ReactNode}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function Alert(props) {
  const {
    style,
    children,
    className,
    theme = "primary",
    dismissible = false,
    animated,
    onClose,
    ...rest
  } = props;

  const alertRef = useRef(null);

  const classes = cn(
    BASE_CLASS_NAME,
    {
      [`${BASE_CLASS_NAME}-${theme}`]:
        typeof theme === "string" && ALERT_THEMES.includes(theme),
      [cs(BASE_CLASS_NAME, "dismissible")]:
        typeof dismissible === "boolean" && dismissible,
      "show fade": typeof animated === "boolean" && animated,
    },
    className,
  );

  return (
    <Prime
      role="alert"
      ref={alertRef}
      className={classes}
      style={style}
      {...rest}>
      {children}
      {dismissible && <CloseButton onClick={onClose} />}
    </Prime>
  );
}

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

Alert.Link = AlertLink;
Alert.Heading = AlertHeading;

export default Alert;
