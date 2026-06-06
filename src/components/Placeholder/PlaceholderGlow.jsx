import PropTypes from "prop-types";
import { Prime } from "components";
import cn from "classnames";
import React from "react";

const BASE_CLASS_NAME = "placeholder-glow";

const propTypes = {
  /**
   * Inline styles applied to the root
   */
  style: PropTypes.shape({}),

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
 * Adds a glowing animation to nested placeholder elements.
 *
 * @component
 *
 * @see {@link Prime}
 * @see {@link https://getbootstrap.com/docs/5.1/components/placeholders/}
 *
 * @example
 * <Placeholder />
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} PlaceholderGlowOwnProps
 *
 * @typedef {PrimeProps & PlaceholderGlowOwnProps} PlaceholderGlowProps
 * @param {PlaceholderGlowProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function PlaceholderGlow(props) {
  const { style, className, ...rest } = props;

  const classes = cn(BASE_CLASS_NAME, className);

  return <Prime role="span" className={classes} style={style} {...rest} />;
}

PlaceholderGlow.propTypes = propTypes;
PlaceholderGlow.defaultProps = defaultProps;

export default PlaceholderGlow;
