import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";
import React from "react";

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
};

const defaultProps = {
  style: null,
  className: null,
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
 * @typedef {NavbarNavOwnProps & PrimeProps} NavbarNavProps
 * @param {NavbarNavProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function Navbar(props) {
  const { style, children, className, ...rest } = props;

  const classes = cn(BASE_CLASS_NAME, className);

  return (
    <Prime as="ul" className={classes} style={style} {...rest}>
      {children}
    </Prime>
  );
}

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;
