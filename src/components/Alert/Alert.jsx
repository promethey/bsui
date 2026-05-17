import React, { useRef } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { classnames as cs, is } from "helpers";
import { Prime, CloseButton } from "components";
import AlertLink from "./AlertLink";
import AlertHeading from "./AlertHeading";
import { themeResolver } from "utils";

const ALERT_CLASS_NAME = "alert";

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
 * @property {object} [style] - Inline styles applied to the root element
 * @property {React.ReactNode} [children] - Content rendred inside the component
 * @property {object|string} [className] - Additional classes applied to the root element
 *
 * @property {"primary"|"secondary"|"success"|"danger"|"warning"|"info"|"light"|"dark"} [theme] - Sets visual style
 * @property {boolean} [dismissible] - Enable dismiss (close) button
 * @property {boolean} [animated] - Enable animations
 * @property {() => void} [onClose] - Fired on dismiss action
 *
 * @typedef {AlertOwnProps & PrimeProps} AlertProps
 *
 * @param {AlertProps} props
 *
 * @returns {React.ReactNode}
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
    dismissible,
    animated,
    onClose,
    ...rest
  } = props;

  const alertRef = useRef(null);

  const classes = cn(
    ALERT_CLASS_NAME,
    themeResolver(ALERT_CLASS_NAME, theme, ALERT_THEMES),
    {
      [cs(ALERT_CLASS_NAME, "dismissible")]: is("boolean", dismissible, {
        notFalse: true,
      }),
      "show fade": is("boolean", animated, { notFalse: true }),
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
