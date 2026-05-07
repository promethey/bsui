import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";

const BASE_CLASS_NAME = "card-header";

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
 * @see {@link https://getbootstrap.com/docs/5.1/components/card/#header-and-footer|Official Documentation}
 *
 * @typedef {object} CardHeaderOwnProps
 * @property {React.ElementType} [as="div"] - HTML element type used for rendering.
 *
 * @typedef {CardHeaderOwnProps & import("../Prime/Prime").PrimeProps} CardHeaderProps
 *
 * @param {CardHeaderProps} props
 *
 * @return {React.ReactNode}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function CardHeader(props) {
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

CardHeader.propTypes = propTypes;
CardHeader.defaultProps = defaultProps;

export default CardHeader;
