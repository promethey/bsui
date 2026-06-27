import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";

const BASE_CLASS_NAME = "card-link";

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

  /**
   * Sets navigation target
   * (alias for href)
   */
  to: PropTypes.string,
};

const defaultProps = {
  style: null,
  className: null,
};

/**
 * Renders a styled link inside the Card component.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/card/#titles-text-and-links}
 *
 * @example
 * <Card.Link to="/">Card link</Card.Link>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} CardLinkOwnProps
 *
 * @property {string} [to]
 * Sets navigation target (alias for href)
 *
 * @typedef {CardLinkOwnProps & PrimeProps} CardLinkProps
 * @param {CardLinkProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function CardLink(props) {
  const { style, children, className, to = "#", ...rest } = props;

  const classes = cn(BASE_CLASS_NAME, className);

  return (
    <Prime as="a" href={to} className={classes} style={style} {...rest}>
      {children}
    </Prime>
  );
}

CardLink.propTypes = propTypes;
CardLink.defaultProps = defaultProps;

export default CardLink;
