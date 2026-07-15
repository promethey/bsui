import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";

const BASE_CLASS_NAME = "form-range";

const propTypes = {
  /**
   * Inline styles applied
   * to the root element
   */
  style: PropTypes.shape({}),

  /**
   * Content rendered inside
   * the component
   */
  children: PropTypes.node.isRequired,

  /**
   * Additional class names applied
   * to the root element
   */
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

  /**
   * Controls the current value when used
   * as a controlled component
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Sets the initial value when used
   * as an uncontrolled component
   */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Invoked whenever the slider
   * value changes
   */
  onChange: PropTypes.func,

  /**
   * Indicates whether the control
   * is non-interactive
   */
  disabled: PropTypes.bool,

  /**
   * Defines the minimum
   * selectable value
   */
  min: PropTypes.number,

  /**
   * Defines the maximum
   * selectable value
   */
  max: PropTypes.number,

  /**
   * Specifies the increment
   * between allowed values
   */
  step: PropTypes.number,
};

const defaultProps = {
  style: null,
  className: null,
  value: null,
  defaultValue: null,
  onChange: null,
  disabled: false,
  min: 0,
  max: 10,
  step: 1,
};

/**
 * Allows users to select a numeric value
 * within a specified range using a slider control.
 *
 * @see {@link https://getbootstrap.com/docs/5.1/forms/range/}
 *
 * @example
 * <Range min={0} max={100} defaultValue={10} />
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} RangeOwnProps
 *
 * @property {number|string} [value]
 * Controls the current value when
 * used as a controlled component.
 *
 * @property {number|string} [defaultValue]
 * Sets the initial value when used
 * as an uncontrolled component.
 *
 * @property {(event: React.ChangeEvent<HTMLInputElement>) => void} [onChange]
 * Invoked whenever the
 * slider value changes.
 *
 * @property {boolean} [disabled=false]
 * Indicates whether the control
 * is non-interactive.
 *
 * @property {number} [min=0]
 * Defines the minimum
 * selectable value.
 *
 * @property {number} [max=100]
 * Defines the maximum
 * selectable value.
 *
 * @property {number} [step=1]
 * Specifies the increment
 * between allowed values.
 *
 * @typedef {PrimeProps & RangeOwnProps} RangeProps
 *
 * @param {RangeProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @since 1.0.0
 */
function Range(props) {
  const {
    style,
    children,
    className,
    value,
    defaultValue,
    onChange,
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
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
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
