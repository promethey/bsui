import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";
import React from "react";
import { useNavbarContext } from "./NavbarContext";

const BASE_CLASS_NAME = "navbar-toggler";

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

  onClick: PropTypes.func,
};

const defaultProps = {
  style: null,
  className: null,
  onClick: null,
};

/**
 * Provides a button that expands
 * or collapses the responsive
 * navbar content.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/navbar/}
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} NavbarTogglerOwnProps
 *
 * @property {(event: React.MouseEvent<HTMLElement>) => void} [onClick]
 *
 * @typedef {NavbarTogglerOwnProps & PrimeProps} NavbarTogglerProps
 *
 * @param {NavbarTogglerProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @since 1.0.0
 */
function NavbarToggler(props) {
  const { style, children, className, onClick, ...rest } = props;

  const classes = cn(BASE_CLASS_NAME, className);

  const { toggle } = useNavbarContext();

  return (
    <Prime
      as="button"
      type="button"
      className={classes}
      style={style}
      onClick={toggle}
      {...rest}>
      <span className="navbar-toggler-icon" />
    </Prime>
  );
}

NavbarToggler.propTypes = propTypes;
NavbarToggler.defaultProps = defaultProps;

export default NavbarToggler;
