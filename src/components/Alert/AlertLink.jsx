import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const BASE_CLASS_NAME = "alert-link";

const propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.shape({}),
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  to: PropTypes.string,
};

const defaultProps = {
  style: null,
  className: null,
  to: "#",
};

/**
 * AlertLink is children component of Alert
 *
 * @example
 * <AlertLink to="#">Link</AlertLink>
 *
 * @returns {JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function AlertLink({ style, children, className, to, ...rest }) {
  const classes = classNames(BASE_CLASS_NAME, className);

  return (
    <a href={to} className={classes} style={style} {...rest}>
      {children}
    </a>
  );
}

AlertLink.propTypes = propTypes;
AlertLink.defaultProps = defaultProps;

export default AlertLink;
