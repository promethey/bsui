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
   * Sets dark theme
   */
  dark: PropTypes.bool,
};

const defaultProps = {
  style: null,
  className: null,
  dark: false,
};

/**
 * Dropdown menu component
 * @component
 *
 * @see {@link Prime}
 * @see {@link https://getbootstrap.com/docs/5.1/components/dropdowns/}
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} DropdownMenuOwnProps
 * @property {boolean} [dark] - Sets dark theme
 *
 * @typedef {PrimeProps & DropdownMenuOwnProps} DropdownMenuProps
 *
 * @param {DropdownMenuProps} props
 *
 * @returns {React.ReactNode}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function DropdownMenu(props) {
  const { style, children, className, dark, ...rest } = props;

  const { show } = useDropdownContext();

  const showStyle = {
    position: "absolute",
    inset: "0px auto auto 0px",
    margin: "0px",
    transform: "translate(0px, 40px)",
    ...style,
  };

  const classes = cn(
    BASE_CLASS_NAME,
    {
      [prefix(BASE_CLASS_NAME, "dark")]: typeof dark === "boolean" && dark,
      show: show,
    },
    className,
  );

  /** @type {object|undefined} */
  const styles = show ? showStyle : style;

  return (
    <Prime as="ul" className={classes} style={styles} {...rest}>
      {children}
    </Prime>
  );
}

DropdownMenu.propTypes = propTypes;
DropdownMenu.defaultProps = defaultProps;

export default DropdownMenu;
