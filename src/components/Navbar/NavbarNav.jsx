import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";
import React from "react";
import { prefix } from "helpers";

const BASE_CLASS_NAME = "navbar-nav";

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
   * Enables scrollable overflow behavior for the Navbar nav
   */
  scroll: PropTypes.bool,

  /**
   * Defines the maximum height of the scrollable
   * Navbar nav area (e.g. "100px", "50vh")
   */
  scrollHeight: PropTypes.string,
};

const defaultProps = {
  style: null,
  className: null,
  scroll: false,
  scrollHeight: null,
};

/**
 * Navbar nav
 *
 * @component
 *
 * @see {Prime}
 * @see {@link https://getbootstrap.com/docs/5.1/components/navbar/}
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} NavbarNavOwnProps
 *
 * @property {boolean} [scroll=false]
 * Enables scrollable overflow behavior for the Navbar nav.
 *
 * @property {string} [scrollHeight]
 * Defines the maximum height of the scrollable Navbar nav area (e.g. "100px", "50vh").
 *
 * @typedef {NavbarNavOwnProps & PrimeProps} NavbarNavProps
 * @param {NavbarNavProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function NavbarNav(props) {
  const {
    style,
    children,
    className,
    scroll = false,
    scrollHeight,
    ...rest
  } = props;

  const classes = cn(
    BASE_CLASS_NAME,
    {
      [prefix(BASE_CLASS_NAME, "scroll")]:
        typeof scroll === "boolean" && scroll,
    },
    className,
  );

  const styles = scrollHeight
    ? {
        "--bs-scroll-height": scrollHeight,
        ...style,
      }
    : style;

  return (
    <Prime as="ul" className={classes} style={styles} {...rest}>
      {children}
    </Prime>
  );
}

NavbarNav.propTypes = propTypes;
NavbarNav.defaultProps = defaultProps;

export default NavbarNav;
