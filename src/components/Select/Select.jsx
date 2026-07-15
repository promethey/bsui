import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { prefix } from "helpers";
import { Prime } from "components";
import SelectOption from "./SelectOption";

const BASE_CLASS_NAME = "form-select";

const propTypes = {
  /**
   * Inline styles applied
   * to the root
   */
  style: PropTypes.shape({}),

  /**
   * Content rendered inside
   * the component
   */
  children: PropTypes.node.isRequired,

  /**
   * Additional classes applied
   * to the root element
   */
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),

  /**
   * Controls the visual size
   * of the select element
   */
  size: PropTypes.oneOf(["sm", "lg"]),

  /**
   * Current selected value(s)
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),

  /**
   * Initial selected value(s)
   */
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),

  /**
   * Allows selecting multiple options
   */
  multiple: PropTypes.bool,

  /**
   * Prevents user interaction
   */
  disabled: PropTypes.bool,

  /**
   * Requires a value before
   * form submission
   */
  required: PropTypes.bool,

  /**
   * Automatically focuses the
   * select when mounted
   */
  autoFocus: PropTypes.bool,

  /**
   * Form field name
   */
  name: PropTypes.string,

  /**
   * Number of visible options displayed
   * when rendered as a list box
   */
  visibleOptions: PropTypes.number,

  /**
   * Fired when the selected
   * value changes
   */
  onChange: PropTypes.func,

  /**
   * Fired when the select
   * receives focus
   */
  onFocus: PropTypes.func,

  /**
   * Fired when the select
   * loses focus
   */
  onBlur: PropTypes.func,
};

const defaultProps = {
  className: null,
  style: null,
  size: null,
  value: null,
  defaultValue: null,
  multiple: false,
  disabled: false,
  required: false,
  autoFocus: false,
  name: null,
  visibleOptions: 0,
  onChange: null,
  onFocus: null,
  onBlur: null,
};

/**
 * Provides a dropdown selection control for choosing
 * one or more options from a predefined list.
 *
 * @see {@link https://getbootstrap.com/docs/5.1/forms/select/}
 *
 * @example
 * <Select size="lg">
 *  <Select.Option selected value={1}>
 *    Option 1
 *  </Select.Option>
 *  <Select.Option value={2}>
 *    Option 2
 *  </Select.Option>
 *  <Select.Option value={3}>
 *    Option 3
 *  </Select.Option>
 * </Select>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} SelectOwnProps
 *
 * @property {"sm"|"lg"} [size]
 * Controls the visual size of the select element.
 *
 * @property {string|string[]} [value]
 * Current selected value(s).
 *
 * @property {string|string[]} [defaultValue]
 * Initial selected value(s).
 *
 * @property {boolean} [multiple=false]
 * Allows selecting multiple options.
 *
 * @property {boolean} [disabled=false]
 * Prevents user interaction.
 *
 * @property {boolean} [required=false]
 * Requires a value before form submission.
 *
 * @property {boolean} [autoFocus=false]
 * Automatically focuses the select when mounted.
 *
 * @property {string} [name]
 * Form field name.
 *
 * @property {number} [visibleOptions]
 * Number of visible options displayed when rendered as a list box.
 *
 * @property {React.ChangeEventHandler<HTMLSelectElement>} [onChange]
 * Fired when the selected value changes.
 *
 * @property {React.FocusEventHandler<HTMLSelectElement>} [onFocus]
 * Fired when the select receives focus.
 *
 * @property {React.FocusEventHandler<HTMLSelectElement>} [onBlur]
 * Fired when the select loses focus.
 *
 * @typedef {PrimeProps & SelectOwnProps} SelectProps
 *
 * @param {SelectProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @since 1.0.0
 */
function Select(props) {
  const {
    style,
    children,
    className,
    size,
    value,
    defaultValue,
    multiple = false,
    disabled = false,
    required = false,
    autoFocus = false,
    name,
    onChange,
    onFocus,
    onBlur,
    visibleOptions,
    ...rest
  } = props;

  const classes = cn(
    BASE_CLASS_NAME,
    {
      [prefix(BASE_CLASS_NAME, size)]:
        typeof size === "string" && ["sm", "lg"].includes(size),
    },
    className,
  );

  return (
    <Prime
      as="select"
      value={value}
      defaultValue={defaultValue}
      multiple={multiple}
      disabled={disabled}
      required={required}
      autoFocus={autoFocus}
      name={name}
      size={visibleOptions}
      style={style}
      className={classes}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      {...rest}>
      {children}
    </Prime>
  );
}

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

Select.Option = SelectOption;

export default Select;
