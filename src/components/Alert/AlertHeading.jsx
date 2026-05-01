import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Prime from "components/Prime";

const ALERT_HEADING_CLASS_NAME = "alert-heading";

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
 * @see {@link Prime|Base component}
 * @see {@link https://getbootstrap.com/docs/5.1/components/alerts/#additional-content|Official Documentation}
 *
 * @example
 * <AlertHeading>Title</AlertHeading>
 * 
 * @example
 * <AlertHeading as="h1">Title H1</AlertHeading>
 * 
 * @param {Object} props
 * @param {"h1"|"h2"|"h3"|"h4"|"h5"|"h6"} [props.as="h4"]
 * @param {Object} [props.style=null]
 * @param {ReactNode} [props.children=null]
 * @param {Object|string} [props.className]
 *
 * @returns {JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function AlertHeading(props) {
  const { as: Component = "h4", style, children, className, ...rest } = props;

  const classes = classNames(ALERT_HEADING_CLASS_NAME, className);

  return (
    <Prime as={Component} className={classes} style={style} {...rest}>
      {children}
    </Prime>
  );
}

AlertHeading.propTypes = propTypes;
AlertHeading.defaultProps = defaultProps;

export default AlertHeading;
