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
   * Sets href path
   */
  to: PropTypes.bool,

  /**
   * Sets active style
   */
  active: PropTypes.bool,
};

const defaultProps = {
  style: null,
  className: null,
  to: "#",
  active: false,
};

/**
 * Dropdown item component
 * @component
 *
 * @see {@link Prime}
 * @see {@link https://getbootstrap.com/docs/5.1/components/dropdowns/}
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} DropdownItemOwnProps
 * @property {string} to - Sets href path
 * @property {boolean} [active] - Sets active style
 *
 * @typedef {PrimeProps & DropdownItemOwnProps} DropdownItemProps
 *
 * @param {DropdownItemProps} props
 *
 * @returns {React.ReactNode}
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
    ...rest
  } = props;

  const classes = cn(
    BASE_CLASS_NAME,
    {
      active: active,
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
