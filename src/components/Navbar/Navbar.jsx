import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";
import React, { useState, useCallback } from "react";
import { prefix } from "helpers";
import NavbarBrand from "./NavbarBrand";
import NavbarToggler from "./NavbarToggler";
import NavbarNav from "./NavbarNav";
import NavbarCollapse from "./NavbarCollapse";
import NavbarText from "./NavbarText";
import { NavbarContext } from "./NavbarContext";

const BASE_CLASS_NAME = "navbar";

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
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

  /**
   * Defines the visual appearance
   * variant of the component
   */
  tone: PropTypes.oneOf(["light", "dark"]),

  /**
   * Defines the responsive breakpoint
   * for layout transition behavior
   */
  expand: PropTypes.oneOf(["sm", "md", "lg", "xl", "xxl"]),

  /**
   * Navbar viewport
   * positioning mode
   */
  placement: PropTypes.oneOf(["fixed-top", "fixed-bottom", "sticky-top"]),
};

const defaultProps = {
  style: null,
  className: null,
  tone: null,
  expand: null,
  placement: null,
};

/**
 * Top-level navigation container
 * for routing and actions.
 *
 * @component
 *
 * @see {Prime}
 * @see {@link https://getbootstrap.com/docs/5.1/components/navbar/}
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} NavbarOwnProps
 *
 * @property {"light"|"dark"} [tone]
 * Defines the visual appearance
 * variant of the component.
 *
 * @property {"sm"|"md"|"lg"|"xl"|"xxl"} [expand]
 * Defines the responsive breakpoint
 * for layout transition behavior.
 *
 * @property {"fixed-top"|"fixed-bottom"|"sticky-top"} [placement]
 * Navbar viewport positioning mode.
 *
 * @typedef {NavbarOwnProps & PrimeProps} NavbarProps
 *
 * @param {NavbarProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @since 1.0.0
 */
function Navbar(props) {
  const { style, children, className, tone, expand, placement, ...rest } =
    props;

  const [expanded, setExpanded] = useState(false);

  const toggle = useCallback(() => {
    setExpanded((prev) => !prev);
  }, []);

  const classes = cn(
    BASE_CLASS_NAME,
    {
      // navbar-light, navbar-dark
      [prefix(BASE_CLASS_NAME, tone)]:
        typeof tone === "string" && ["light", "dark"].includes(tone),

      // navbar-expand-sm, navbar-expand-lg...
      [prefix(BASE_CLASS_NAME, "expand", expand)]:
        typeof expand === "string" &&
        ["sm", "md", "lg", "xl", "xxl"].includes(expand),

      // "fixed-top", "fixed-bottom", "sticky-top"
      [`${placement}`]:
        typeof placement === "string" &&
        ["fixed-top", "fixed-bottom", "sticky-top"].includes(placement),
    },
    className,
  );

  return (
    <NavbarContext.Provider value={{ expanded, toggle }}>
      <Prime as="nav" className={classes} style={style} {...rest}>
        {children}
      </Prime>
    </NavbarContext.Provider>
  );
}

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

Navbar.Text = NavbarText;
Navbar.Brand = NavbarBrand;
Navbar.Toggler = NavbarToggler;
Navbar.Nav = NavbarNav;
Navbar.Collapse = NavbarCollapse;

export default Navbar;
