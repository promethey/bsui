import PropTypes from "prop-types";
import cn from "classnames";
import { Collapse } from "components";
import React from "react";
import { useNavbarContext } from "./NavbarContext";

const BASE_CLASS_NAME = "navbar-collapse";

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
 * Navbar collapse
 *
 * @component
 *
 * @see {Prime}
 * @see {@link https://getbootstrap.com/docs/5.1/components/navbar/}
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 * @typedef {import("../Collapse/Collapse").CollapseOwnProps} CollapseOwnProps
 *
 * @typedef {object} NavbarCollapseOwnProps
 *
 * @typedef {NavbarCollapseOwnProps & CollapseOwnProps & PrimeProps} NavbarCollapseProps
 * @param {NavbarCollapseProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function NavbarCollapse(props) {
  const { style, children, className, ...rest } = props;

  const classes = cn(BASE_CLASS_NAME, className);

  const { expanded } = useNavbarContext();

  return (
    <Collapse open={expanded} className={classes} style={style} {...rest}>
      {children}
    </Collapse>
  );
}

NavbarCollapse.propTypes = propTypes;
NavbarCollapse.defaultProps = defaultProps;

export default NavbarCollapse;
