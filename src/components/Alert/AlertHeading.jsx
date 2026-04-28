import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Prime from "components/Prime";

const BASE_CLASS_NAME = "alert-heading";

const propTypes = {
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  children: PropTypes.node.isRequired,
  style: PropTypes.shape({}),
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

const defaultProps = {
  as: "h4",
  style: null,
  className: null,
};

/**
 * AlertHeading is children component of Alert
 * 
 * @see {@link https://getbootstrap.com/docs/5.3/components/alerts|Bootstrap Documentation}
 *
 * @example
 * <AlertHeading>Title</AlertHeading>
 * <AlertHeading as="h1">Title H1</AlertHeading>
 * 
 * @return {JSX.Element} AlertHeading
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function AlertHeading({
  as: Component,
  style,
  children,
  className,
  ...rest
}) {
  const classes = classNames(BASE_CLASS_NAME, className);

  return (
    <Prime as={Component} className={classes} style={style} {...rest}>
      {children}
    </Prime>
  );
}

AlertHeading.propTypes = propTypes;
AlertHeading.defaultProps = defaultProps;

export default AlertHeading;
