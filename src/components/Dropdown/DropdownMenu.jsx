import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";
import { useDropdownContext } from "./DropdownContext";
import { prefix } from "helpers";

const BASE_CLASS_NAME = "dropdown-menu";

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
   * Enables dark theme styling for the dropdown menu
   */
  dark: PropTypes.bool,
};

const defaultProps = {
  style: null,
  className: null,
  dark: false,
};

/**
 * Container that holds and positions
 * dropdown items and related content.
 *
 * @component
 *
 * @see {@link Prime}
 * @see {@link https://getbootstrap.com/docs/5.1/components/dropdowns/}
 *
 * @example
 * <Dropdown.Menu>
 *  <Dropdown.Item>Item 1</Dropdown.Item>
 *  <Dropdown.Item>Item 2</Dropdown.Item>
 *  <Dropdown.Item>Item 3</Dropdown.Item>
 * </Dropdown.Menu>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} DropdownMenuOwnProps
 *
 * @property {boolean} [dark=false]
 * Enables dark theme styling for the dropdown menu.
 *
 * @typedef {PrimeProps & DropdownMenuOwnProps} DropdownMenuProps
 * @param {DropdownMenuProps} props
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function DropdownMenu(props) {
  const { style, children, className, dark, ...rest } = props;

  const { expanded, refs, floatingStyles, getFloatingProps } =
    useDropdownContext();

  const classes = cn(
    BASE_CLASS_NAME,
    "show",
    {
      [prefix(BASE_CLASS_NAME, "dark")]: typeof dark === "boolean" && dark,
    },
    className,
  );

  return (
    expanded && (
      <Prime
        ref={refs.setFloating}
        as="ul"
        className={classes}
        style={floatingStyles}
        {...getFloatingProps()}
        {...rest}>
        {children}
      </Prime>
    )
  );
}

DropdownMenu.propTypes = propTypes;
DropdownMenu.defaultProps = defaultProps;

export default DropdownMenu;
