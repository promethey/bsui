import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";
import React from "react";

const BASE_CLASS_NAME = "navbar-brand";

const propTypes = {
  /**
   * HTML element used to render
   * the component.
   */
  as: PropTypes.elementType,

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

  to: PropTypes.string,
};

const defaultProps = {
  as: "a",
  style: null,
  className: null,
  to: "#",
};

/**
 * Displays the primary brand, logo,
 * or application name within the navbar.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/navbar/}
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} NavbarBrandOwnProps
 *
 * @property {string} [to="#"]
 *
 * @typedef {NavbarBrandOwnProps & PrimeProps} NavbarBrandProps
 *
 * @param {NavbarBrandProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @since 1.0.0
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

  const propertyList = {
    as: ComponentType,
    style,
    className: classes,
    children,
    ...(ComponentType === "a" && { href: to }),
    ...rest,
  };

  return <Prime {...propertyList}>{children}</Prime>;
}

NavbarBrand.propTypes = propTypes;
NavbarBrand.defaultProps = defaultProps;

export default NavbarBrand;
