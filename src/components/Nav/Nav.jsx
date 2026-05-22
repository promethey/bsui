import { Prime } from "components";
import PropTypes from "prop-types";
import cn from "classnames";
import NavItem from "./NavItem";
import NavLink from "./NavLink";

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
   * HTML element type used for rendering
   */
  as: PropTypes.oneOf(["nav", "ul"]),

  /**
   * Sets tabbed or pilled interface
   */
  view: PropTypes.oneOf(["tabs", "pills"]),

  /**
   * Sets full available width
   */
  fill: PropTypes.bool,

  /**
   * Sets equal-width elements
   */
  justified: PropTypes.bool,
};

const defaultProps = {
  as: "ul",
  style: null,
  className: null,
  view: null,
  fill: false,
  justified: false,
};

/**
 * Navigation component
 * @component
 *
 * @see {@link Prime}
 * @see {@link https://getbootstrap.com/docs/5.1/components/navs-tabs/}
 *
 * @example
 * <Nav>.nav</Nav>
 *
 * @example
 * <Nav>
 *  <Nav.Item>
 *    <Nav.Link to="/active" active>Active</Nav.Link>
 *  </Nav.Item>
 * <Nav.Item>
 *    <Nav.Link to="/link">Link</Nav.Link>
 *  </Nav.Item>
 *  <Nav.Item>
 *    <Nav.Link to="/disabled" disabled>Disabled</Nav.Link>
 *  </Nav.Item>
 * </Nav>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} NavOwnProps
 * @property {"tabs"|"pills"} [view] - Sets tabbed or pilled interface
 * @property {boolean} [fill] - Sets full available width
 * @property {boolean} [justified] - Sets equal-width elements
 *
 * @typedef {NavOwnProps & PrimeProps} NavProps
 *
 * @param {NavProps} props
 *
 * @returns {React.ReactNode}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 *
 * @todo
 * - add dropdown support (https://getbootstrap.com/docs/5.1/components/navs-tabs/#using-dropdowns)
 */
function Nav(props) {
  const {
    style,
    children,
    className,
    as: ComponentType = "ul",
    view,
    fill = false,
    justified = false,
    ...rest
  } = props;

  const classes = cn(
    "nav",
    {
      "nav-tabs": view === "tabs",
      "nav-pills": view === "pills",
      "nav-fill": typeof fill === "boolean" && fill,
      "nav-justified": typeof justified === "boolean" && justified,
    },
    className,
  );

  return (
    <Prime as={ComponentType} className={classes} style={style} {...rest}>
      {children}
    </Prime>
  );
}

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;

Nav.Item = NavItem;
Nav.Link = NavLink;

export default Nav;
