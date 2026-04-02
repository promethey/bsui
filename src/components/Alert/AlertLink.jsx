import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// @type {string}
const BASE_CLASS_NAME = "alert-link";

// @type {Object}
const propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.shape({}),
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  to: PropTypes.string,
};

// @type {Object}
const defaultProps = {
  style: null,
  className: null,
  to: "#",
};

/**
 * AlertLink is children component of Alert
 * @component
 *
 * @example
 * <AlertLink to="#">Link</AlertLink>
 *
 * @typedef {Object} AlertLinkProps
 * @property {React.ReactNode} children - Add children components
 * @property {React.CSSProperty} [style=null] - Add other styles
 * @property {Object|Array<string>|string} [className=null] - Add other class names
 * @property {string} [to="#"] - Add link path
 *
 * @param {AlertLinkProps} props
 * @returns {JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 * @since 1.0.0
 */
function AlertLink({ style, children, className, to, ...rest }) {
  // @type {string}
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
