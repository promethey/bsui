import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";
import React from "react";

const BASE_CLASS_NAME = "navbar-brand";

const propTypes = {
  as: PropTypes.elementType,

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

  to: PropTypes.string,
};

const defaultProps = {
  as: "a",
  style: null,
  className: null,
  to: "#",
};

/**
 * Navbar brand
 *
 * @component
 *
 * @see {Prime}
 * @see {@link https://getbootstrap.com/docs/5.1/components/navbar/}
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} NavbarBrandOwnProps
 * @property {string} [to="#"]
 *
 * @typedef {NavbarBrandOwnProps & PrimeProps} NavbarBrandProps
 * @param {NavbarBrandProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function NavbarBrand(props) {
  const {
    as: ComponentType = "a",
    style,
    children,
    className,
    to = "#",
    ...rest
  } = props;

  const classes = cn(BASE_CLASS_NAME, className);

  const properties = {
    as: ComponentType,
    style,
    className: classes,
    children,
    ...(ComponentType === "a" && { href: to }),
    ...rest,
  };

  return <Prime {...properties}>{children}</Prime>;
}

NavbarBrand.propTypes = propTypes;
NavbarBrand.defaultProps = defaultProps;

export default NavbarBrand;
