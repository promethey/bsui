import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";

const BASE_CLASS_NAME = "card-footer";

const propTypes = {
  /**
   * HTML element type used for rendering
   */
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "div"]),

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
  as: "div",
  style: null,
  className: null,
};

/**
 * CardHeader is children component of Card
 * @component
 *
 * @see {@link Prime}
 * @see {@link https://getbootstrap.com/docs/5.1/components/card/#header-and-footer}
 *
 * @example
 * <Card.Footer text="muted">
 *  2 days ago
 * </Card.Footer>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} CardHeaderOwnProps
 * @property {"h1"|"h2"|"h3"|"h4"|"h5"|"h6"|"div"} [as="div"]
 * HTML element type used for rendering.
 *
 * @typedef {CardHeaderOwnProps & PrimeProps} CardHeaderProps
 * @param {CardHeaderProps} props
 *
 * @return {React.ReactNode}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function CardFooter(props) {
  const {
    as: ComponentType = "div",
    style,
    children,
    className,
    ...rest
  } = props;

  const classes = cn(BASE_CLASS_NAME, className);

  return (
    <Prime as={ComponentType} className={classes} style={style} {...rest}>
      {children}
    </Prime>
  );
}

CardFooter.propTypes = propTypes;
CardFooter.defaultProps = defaultProps;

export default CardFooter;
