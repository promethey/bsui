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
 * Alert component
 *
 * @see {@link https://getbootstrap.com/docs/5.3/components/alerts}
 *
 * @example
 * <Alert>Basic Alert</Alert>
 * <Alert theme="secondary">Message</Alert>
 *
 * @return {JSX.Element} Alert
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function Alert({
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
