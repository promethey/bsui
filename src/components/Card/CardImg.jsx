import PropTypes from "prop-types";
import cn from "classnames";
import { classnames as cs } from "helpers";

const BASE_CLASS_NAME = "card-img";

const propTypes = {
  /**
   * Inline styles applied to the root
   */
  style: PropTypes.shape({}),

  /**
   * Additional classes applied to the root element
   */
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

  /**
   * Sets image source URL
   */
  src: PropTypes.string.isRequired,

  /**
   * Sets alternative text
   */
  alt: PropTypes.string.isRequired,

  /**
   * Sets image placement inside card
   */
  placement: PropTypes.oneOf(["top", "bottom"]),
};

const defaultProps = {
  style: null,
  className: null,
  placement: "top",
};

/**
 * CardImage is children component of Card
 * @component
 *
 * @see {@link Prime}
 * @see {@link https://getbootstrap.com/docs/5.1/components/card/#images|Official Documentation}
 *
 * @typedef {object} CardImgOwnProps
 * @property {string} [src] - Sets image source URL.
 * @property {string} [alt] - Sets alternative text.
 * @property {"top"|"bottom"} [placement="top"] - Sets image placement inside card.
 *
 * @typedef {CardImgOwnProps & import("../Prime/Prime").PrimeProps} CardImgProps
 *
 * @param {CardImgProps} props
 *
 * @return {React.ReactNode}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function CardImg(props) {
  const { style, className, src, alt, placement, ...rest } = props;

  const classes = cn(cs(BASE_CLASS_NAME, placement), className);

  return (
    <img src={src} alt={alt} className={classes} style={style} {...rest} />
  );
}

CardImg.propTypes = propTypes;
CardImg.defaultProps = defaultProps;

export default CardImg;
