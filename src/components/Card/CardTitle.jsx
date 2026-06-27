import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";

const BASE_CLASS_NAME = "card-title";

const propTypes = {
  /**
   * HTML element type used
   * for rendering
   */
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),

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
};

const defaultProps = {
  as: "h5",
  style: null,
  className: null,
};

/**
 * Renders the primary title inside
 * the Card component.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/card/#titles-text-and-links}
 *
 * @example
 * <Card.Title>
 *  Card title
 * </Card.Title>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} CardTitleOwnProps
 *
 * @property {"h1"|"h2"|"h3"|"h4"|"h5"|"h6"} [as]
 * HTML element type used for rendering.
 *
 * @typedef {CardTitleOwnProps & PrimeProps} CardTitleProps
 *
 * @param {CardTitleProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function CardTitle(props) {
  const {
    as: ComponentType = "h5",
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

CardTitle.propTypes = propTypes;
CardTitle.defaultProps = defaultProps;

export default CardTitle;
