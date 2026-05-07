import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";

const BASE_CLASS_NAME = "card-link";

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

  /**
   * Sets navigation target (alias for href)
   */
  to: PropTypes.string,
};

const defaultProps = {
  style: null,
  className: null,
};

/**
 * CardLink is children component of Card
 * @component
 *
 * @see {@link Prime}
 * @see {@link https://getbootstrap.com/docs/5.1/components/card/#titles-text-and-links|Official Documentation}
 *
 * @typedef {object} CardLinkOwnProps
 * @property {string} [to] - Sets navigation target (alias for href)
 *
 * @typedef {CardLinkOwnProps & import("../Prime/Prime").PrimeProps} CardLinkProps
 *
 * @param {CardLinkProps} props
 *
 * @return {React.ReactNode}
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
