import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";

const BASE_CLASS_NAME = "card-subtitle";

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
  as: "h6",
  style: null,
  className: null,
};

/**
 * Renders a secondary text element
 * inside the Card component.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/card/#titles-text-and-links}
 *
 * @example
 * <Card.Subtitle mb={2} text="muted">
 *  ...
 * </Card.Subtitle>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} CardSubtitleOwnProps
 *
 * @property {"h1"|"h2"|"h3"|"h4"|"h5"|"h6"} [as]
 * HTML element type used for rendering.
 *
 * @typedef {CardSubtitleOwnProps & PrimeProps} CardSubtitleProps
 *
 * @param {CardSubtitleProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @since 1.0.0
 */
function CardSubtitle(props) {
  const {
    as: ComponentType = "h6",
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

CardSubtitle.propTypes = propTypes;
CardSubtitle.defaultProps = defaultProps;

export default CardSubtitle;
