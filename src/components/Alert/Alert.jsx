import React, { useRef } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { classnames as cs } from "helpers/classnames";
import Prime from "components/Prime";
import CloseButton from "components/CloseButton";
import AlertLink from "./AlertLink";
import AlertHeading from "./AlertHeading";
import { themeResolver } from "utils/theme";
import { is } from "helpers/is";

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
 * @see {@link Prime|Base component}
 * @see {@link https://getbootstrap.com/docs/5.3/components/alerts|Official Documentation}
 *
 * @example
 * <Alert>Primary</Alert>
 * 
 * @example
 * <Alert theme="secondary" mb={3} p={3}>
 *  Secondary with Prime API
 * </Alert>
 * 
 * @param {Object} props
 * @param {Object} [props.style=null]
 * @param {ReactNode} [props.children=null]
 * @param {Object|string} [props.className=null]
 * @param {"primary"|"secondary"|"success"|"danger"|"warning"|"info"|"light"|"dark"} [props.theme="primary"] Change color scheme
 * @param {boolean} [props.dismissible=false] Add close button
 * @param {boolean} [props.animated=false] Add animation styles
 * @param {() => void} [props.onClose=null] Add function when close
 * @param {...any} [props.rest] Add somehting else (example aria attributes)
 * 
 * @returns {JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function Alert(props) {
  const {
    style,
    children,
    className,
    theme,
    dismissible,
    animated,
    onClose,
    ...rest
  } = props;
  
  const alertRef = useRef(null);

  const classes = cn(
    ALERT_CLASS_NAME, // default
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
