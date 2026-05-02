import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import Prime from "components/Prime";

const BASE_CLASS_NAME = "badge";

const propTypes = {
  style: PropTypes.shape({}),
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

const defaultProps = {
  style: null,
  className: null,
};

/**
 * Badge component
 *
 * @see {@link Prime}
 * @see {@link https://getbootstrap.com/docs/5.1/components/badge/|Official Documentation}
 *
 * @param {Object} props
 * @param {Object} [props.style=null] Inline styles applied to the root element
 * @param {React.ReactNode} props.children Content rendred inside the component
 * @param {Object|string} [props.className=null] Additional classes applied to the root element
 *
 * @returns {JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function Badge(props) {
  const { style, children, className, ...rest } = props;

  const classes = cn(BASE_CLASS_NAME, className);

  return (
    <Prime className={classes} style={style} {...rest}>
      {children}
    </Prime>
  );
}

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;

export default Badge;
