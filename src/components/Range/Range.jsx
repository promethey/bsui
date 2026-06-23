import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";

const BASE_CLASS_NAME = "form-range";

const propTypes = {
  /**
   * Inline styles applied to the root element
   */
  style: PropTypes.shape({}),

  /**
   * Content rendered inside the component
   */
  children: PropTypes.node.isRequired,

  /**
   * Additional class names applied to the root element
   */
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

  disabled: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
};

const defaultProps = {
  style: null,
  className: null,
  disabled: false,
  min: 0,
  max: 10,
  step: 1,
};

/**
 * Range component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/forms/range/}
 *
 * @example
 * <Range />
 *
 * @example
 * <Range disabled />
 *
 * @typedef {object} RangeOwnProps
 * @property {boolean} [disabled=false]
 * @property {number} [min=0]
 * @property {number} [max=0]
 * @property {number} [step=1]
 *
 * @typedef {import("../Prime/Prime").PrimeProps & RangeOwnProps} RangeProps
 *
 * @param {RangeProps} props
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function Range(props) {
  const {
    style,
    children,
    className,
    disabled = false,
    min = 0,
    max = 10,
    step = 1,
    ...rest
  } = props;

  const classes = cn(BASE_CLASS_NAME, className);

  return (
    <Prime
      as="input"
      type="range"
      className={classes}
      style={style}
      disabled={disabled}
      min={min}
      max={max}
      step={step}
      {...rest}>
      {children}
    </Prime>
  );
}

Range.propTypes = propTypes;
Range.defaultProps = defaultProps;

export default Range;
