import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";

const BASE_CLASS_NAME = "alert-link";

const propTypes = {
  /**
   * Content rendered inside
   * the component
   */
  children: PropTypes.node.isRequired,

  /**
   * Inline styles applied
   * to the root
   */
  style: PropTypes.shape({}),

  /**
   * Additional classes applied
   * to the root element
   */
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

  /**
   * Sets navigation target
   * (alias for href)
   */
  to: PropTypes.string,
};

const defaultProps = {
  style: null,
  className: null,
  to: "#",
};

/**
 * Renders a contextual link with
 * alert-aware styling.
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/alerts/#link-color}
 *
 * @example
 * <Alert.Link to="/home">
 *  Home
 * </Alert.Link>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} AlertLinkOwnProps
 *
 * @property {string} [to]
 * Sets navigation target (alias for href)
 *
 * @typedef {AlertLinkOwnProps & PrimeProps} AlertLinkProps
 *
 * @param {AlertLinkProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function AlertLink(props) {
  const { style, children, className, to, ...rest } = props;

  const classes = cn(BASE_CLASS_NAME, className);

  return (
    <Prime as="a" href={to} className={classes} style={style} {...rest}>
      {children}
    </Prime>
  );
}

AlertLink.propTypes = propTypes;
AlertLink.defaultProps = defaultProps;

export default AlertLink;
