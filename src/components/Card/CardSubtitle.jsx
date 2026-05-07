import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";

const BASE_CLASS_NAME = "card-subtitle";

const propTypes = {
  /**
   * HTML element type used for rendering
   */
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),

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
  as: "h6",
  style: null,
  className: null,
};

/**
 * CardTitle is children component of Card
 * @component
 *
 * @see {@link Prime}
 * @see {@link https://getbootstrap.com/docs/5.1/components/card/#titles-text-and-links|Official Documentation}
 *
 * @typedef {object} CardSubtitleOwnProps
 * @property {React.ElementType} [as="h6"] - HTML element type used for rendering.
 *
 * @typedef {CardSubtitleOwnProps & import("../Prime/Prime").PrimeProps} CardSubtitleProps
 *
 * @param {CardSubtitleProps} props
 *
 * @return {React.ReactNode}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
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
