import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";
import { prefix } from "helpers";
import CarouselControlIcon from "./CarouselControlIcon";

const BASE_CLASS_NAME = {
  prev: "carousel-control-prev",
  next: "carousel-control-next",
};

const propTypes = {
  /**
   * Inline styles applied to the root
   */
  style: PropTypes.shape({}),

  /**
   * Additional classes applied to the root element
   */
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

  position: PropTypes.oneOf(["prev", "next"]),
};

const defaultProps = {
  style: null,
  className: null,
};

/**
 * Renders a navigation control for moving between slides.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/carousel/}
 *
 * @example
 * <Carousel controls>
 *  ...
 * </Carousel>
 *
 * @typedef {object} CarouselControlOwnProps
 * @property {"prev"|"next"} position
 *
 * @typedef {import("../Prime/Prime").PrimeProps & CarouselControlOwnProps} CarouselControlProps
 * @param {CarouselControlProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function CarouselControl(props) {
  const { style, className, position, ...rest } = props;

  const classes = cn(BASE_CLASS_NAME[position], className);

  return (
    <Prime
      as="button"
      type="button"
      className={classes}
      style={style}
      {...rest}>
      <CarouselControlIcon position={position} />
    </Prime>
  );
}

CarouselControl.propTypes = propTypes;
CarouselControl.defaultProps = defaultProps;

export default CarouselControl;
