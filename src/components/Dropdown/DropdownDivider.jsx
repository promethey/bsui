import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Button, Prime } from "components";

const BASE_CLASS_NAME = "dropdown-divider";

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
 * Dropdown button component
 * @component
 *
 * @see {@link Prime}
 * @see {@link Button}
 * @see {@link https://getbootstrap.com/docs/5.1/components/dropdowns/}
 *
 * @typedef {import("../Button/Button").ButtonProps} ButtonProps
 *
 * @typedef {object} DropdownDividerOwnProps
 *
 * @typedef {ButtonProps & DropdownDividerOwnProps} DropdownDividerProps
 *
 * @param {DropdownDividerProps} props
 *
 * @returns {React.ReactNode}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function DropdownDivider(props) {
  const { style, children, className, ...rest } = props;

  const classes = cn(BASE_CLASS_NAME, className);

  return (
    <li>
      <Prime as="hr" className={classes} style={style} {...rest} />
    </li>
  );
}

DropdownDivider.propTypes = propTypes;
DropdownDivider.defaultProps = defaultProps;

export default DropdownDivider;
