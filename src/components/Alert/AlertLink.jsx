import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import Prime from "components/Prime";

const ALERT_LINK_CLASS_NAME = "alert-link";

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
 * @see {@link Prime}
 * @see {@link https://getbootstrap.com/docs/5.1/components/alerts/#link-color|Official Documentation}
 *
 * @example
 * <AlertLink to="/home">Home</AlertLink>
 *
 * @param {Object} props
 * @param {Object} [props.style=null]
 * @param {ReactNode} [props.children]
 * @param {Object|string} [props.className]
 * @param {string} [props.to=#] Alias for link href
 *
 * @returns {JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function AlertLink(props) {
  const { style, children, className, to, ...rest } = props;

  const classes = cn(ALERT_LINK_CLASS_NAME, className);

  return (
    <Prime as="a" href={to} className={classes} style={style} {...rest}>
      {children}
    </Prime>
  );
}

AlertLink.propTypes = propTypes;
AlertLink.defaultProps = defaultProps;

export default AlertLink;
