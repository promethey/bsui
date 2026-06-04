import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";
import React, { useState, useCallback } from "react";
import { prefix } from "helpers";
import NavbarBrand from "./NavbarBrand";
import NavbarToggler from "./NavbarToggler";
import NavbarNav from "./NavbarNav";
import NavbarCollapse from "./NavbarCollapse";
import { NavbarContext } from "./NavbarContext";

const BASE_CLASS_NAME = "navbar";

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

  tone: PropTypes.oneOf(["light", "dark"]),
  expand: PropTypes.oneOf(["sm", "md", "lg", "xl", "xxl"]),
};

const defaultProps = {
  style: null,
  className: null,
  tone: null,
  expand: null,
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
 * @property {"light"|"dark"} [tone]
 * @property {"sm"|"md"|"lg"|"xl"|"xxl"} [expand]
 *
 * @typedef {NavbarOwnProps & PrimeProps} NavbarProps
 * @param {NavbarProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function Navbar(props) {
  const { style, children, className, tone, expand, ...rest } = props;

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

Navbar.Brand = NavbarBrand;
Navbar.Toggler = NavbarToggler;
Navbar.Nav = NavbarNav;
Navbar.Collapse = NavbarCollapse;

export default Navbar;
