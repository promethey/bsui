import { Prime } from "components";
import PropTypes from "prop-types";
import cn from "classnames";

const BASE_CLASS_NAME = "nav-item";

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
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
};

const defaultProps = {
  style: null,
  className: null,
};

/**
 * Wraps and groups individual navigation
 * links within the navigation item.
 *
 * @component
 *
 * @see {@link Prime}
 * @see {@link https://getbootstrap.com/docs/5.1/components/navs-tabs/}
 *
 * @example
 * <Nav.Item to="/active" active>
 *  Active
 * </Nav.Item>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} NavItemOwnProps
 *
 * @typedef {NavItemOwnProps & PrimeProps} NavProps
 * @param {NavProps} props
 *
 * @returns {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function NavItem(props) {
  const { style, children, className, ...rest } = props;

  const classes = cn(BASE_CLASS_NAME, className);

  return (
    <Prime as="li" className={classes} style={style} {...rest}>
      {children}
    </Prime>
  );
}

NavItem.propTypes = propTypes;
NavItem.defaultProps = defaultProps;

export default NavItem;
