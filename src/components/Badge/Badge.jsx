import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";

const BASE_CLASS_NAME = "badge";

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
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

const defaultProps = {
  style: null,
  className: null,
};

/**
 * Badge component
 * @component
 *
 * @see {@link Prime}
 * @see {@link https://getbootstrap.com/docs/5.1/components/badge/|Official Documentation}
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} BadgeOwnProps
 * @property {Object} [style] - Inline styles applied to the root.
 * @property {React.ReactNode} [children] - Content rendered inside the component.
 * @property {Object|string} [className] - Additional classes applied to the root element.
 *
 * @typedef {BadgeOwnProps & PrimeProps} BadgeProps
 *
 * @param {BadgeProps} props
 *
 * @returns {React.ReactNode}
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
