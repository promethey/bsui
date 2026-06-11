import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";

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
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),

  /**
   * Value submitted when the option is selected
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,

  /**
   * Marks the option as selected by default
   */
  selected: PropTypes.bool,
};

const defaultProps = {
  className: null,
  style: null,
  selected: false,
};

/**
 * Select component
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
 * @typedef {object} SelectOptionOwnProps
 *
 * @property {string|string[]} value
 * Value submitted when the option is selected.
 *
 * @property {boolean} [selected=false]
 * Marks the option as selected by default.
 *
 * @typedef {import("../Prime/Prime").PrimeProps & SelectOptionOwnProps} SelectOptionProps
 * @param {SelectOptionProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function SelectOption(props) {
  const {
    style,
    children,
    className,
    value,
    selected = false,
    ...rest
  } = props;

  const classes = cn(className);

  return (
    <Prime
      as="option"
      value={value}
      selected={selected}
      style={style}
      className={classes}
      {...rest}>
      {children}
    </Prime>
  );
}

SelectOption.propTypes = propTypes;
SelectOption.defaultProps = defaultProps;

export default SelectOption;
