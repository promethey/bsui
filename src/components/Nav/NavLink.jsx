import { Prime } from "components";
import PropTypes from "prop-types";
import cn from "classnames";

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

  /**
   * Sets href path
   */
  to: PropTypes.bool,

  /**
   * Sets active style
   */
  active: PropTypes.bool,

  /**
   * Sets disabled state
   */
  disabled: PropTypes.bool,
};

const defaultProps = { style: null, className: null };

/**
 * Navigation component
 * @component
 *
 * @see {@link Prime}
 * @see {@link https://getbootstrap.com/docs/5.1/components/navs-tabs/}
 *
 * @example
 * <Nav.Link to="/">.nav-link</Nav.Link>
 *
 * @example
 * <Nav.Link to="/active" active>Active</Nav.Link>
 *
 * @example
 * <Nav.Link to="/active" disabled>Disabled</Nav.Link>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} NavItemOwnProps
 * @property {string} to - Sets href path
 * @property {boolean} [active] - Sets active style
 * @property {boolean} [disabled] - Sets disabled state
 *
 * @typedef {PrimeProps & NavItemOwnProps} NavProps
 *
 * @param {NavProps} props
 *
 * @returns {React.ReactNode}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function NavItem(props) {
  const {
    style,
    children,
    className,
    to = "#",
    active,
    disabled,
    ...rest
  } = props;

  const classes = cn(
    "nav-link",
    {
      active: typeof active === "boolean" && active,
      disabled: typeof disabled === "boolean" && disabled,
    },
    className,
  );

  return (
    <Prime as="a" href={to} className={classes} style={style} {...rest}>
      {children}
    </Prime>
  );
}

NavItem.propTypes = propTypes;
NavItem.defaultProps = defaultProps;

export default NavItem;
