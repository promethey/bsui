import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";

const BASE_CLASS_NAME = "dropdown-item";

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

  /**
   * Navigation target for the dropdown item
   */
  to: PropTypes.bool,

  /**
   * Marks the item as active/selected
   */
  active: PropTypes.bool,

  /**
   * Disables interaction and applies disabled styles
   */
  disabled: PropTypes.bool,
};

const defaultProps = {
  style: null,
  className: null,
  to: "#",
  active: false,
  disabled: false,
};

/**
 * Renders an interactive action or navigation item inside the dropdown menu.
 *
 * @component
 *
 * @see {@link Prime}
 * @see {@link https://getbootstrap.com/docs/5.1/components/dropdowns/}
 *
 * @example
 * <Dropdown.Item>Action</Dropdown.Item>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} DropdownItemOwnProps
 *
 * @property {string} to
 * Navigation target for the dropdown item.
 *
 * @property {boolean} [active=false]
 * Marks the item as active/selected.
 *
 * @property {boolean} [disabled=false]
 * Disables interaction and applies disabled styles.
 *
 * @typedef {PrimeProps & DropdownItemOwnProps} DropdownItemProps
 * @param {DropdownItemProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function DropdownItem(props) {
  const {
    style,
    children,
    className,
    to = "#",
    active = false,
    disabled = false,
    ...rest
  } = props;

  const classes = cn(
    BASE_CLASS_NAME,
    {
      active: active,
      disabled: disabled,
    },
    className,
  );

  return (
    <li>
      <Prime as="a" href={to} className={classes} style={style} {...rest}>
        {children}
      </Prime>
    </li>
  );
}

DropdownItem.propTypes = propTypes;
DropdownItem.defaultProps = defaultProps;

export default DropdownItem;
