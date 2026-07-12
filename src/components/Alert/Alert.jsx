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
   * Controls the visual appearance
   * of the alert
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
  ]),

  /**
   * Displays a close button
   */
  dismissible: PropTypes.bool,

  /**
   * Invoked when the alert
   * is dismissed
   */
  onClose: PropTypes.func,
};

const defaultProps = {
  style: null,
  className: null,
  tone: "primary",
  dismissible: false,
  onClose: null,
};

/**
 * Displays contextual feedback
 * and status messages.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.3/components/alerts}
 *
 * @example
 * <Alert>
 *  A simple primary alert—check it out!
 * </Alert>
 *
 * @example
 * <Alert tone="secondary" mb={3} p={3}>
 *  A simple secondary alert—check it out!
 * </Alert>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} AlertOwnProps
 *
 * @property {"primary"|"secondary"|"success"|"danger"|"warning"|"info"|"light"|"dark"} [tone="primary"]
 * Controls the visual appearance
 * of the alert.
 *
 * @property {boolean} [dismissible]
 * Displays a close button.
 *
 * @property {(event: React.MouseEvent<HTMLButtonElement>) => void} [onClose]
 * Invoked when the alert is dismissed.
 *
 * @typedef {AlertOwnProps & PrimeProps} AlertProps
 *
 * @param {AlertProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @since 1.0.0
 */
function Alert(props) {
  const {
    style,
    children,
    className,
    tone = "primary",
    dismissible = false,
    onClose,
    ...rest
  } = props;

  const classes = cn(
    BASE_CLASS_NAME,
    {
      // "alert-{"primary"|"secondary"|"success"|"danger"|"warning"|"info"|"light"|"dark"}"
      [`${BASE_CLASS_NAME}-${tone}`]:
        typeof tone === "string" && ALERT_THEMES.includes(tone),

      // "alert-dismissible"
      [cs(BASE_CLASS_NAME, "dismissible")]:
        typeof dismissible === "boolean" && dismissible,
    },
    className,
  );

  return (
    <Prime role="alert" className={classes} style={style} {...rest}>
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
