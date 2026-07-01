import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";
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

  /**
   * Direction of the carousel control
   */
  position: PropTypes.oneOf(["prev", "next"]),

  onClick: PropTypes.func,
};

const defaultProps = {
  style: null,
  className: null,
  onClick: null,
};

/**
 * Renders a previous or next
 * navigation button for the carousel.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/carousel/}
 *
 * @example
 * <Carousel.Control
 *   position="prev"
 *   onClick={handlePrevious}
 * />
 *
 * @typedef {object} CarouselControlOwnProps
 *
 * @property {"prev"|"next"} position
 * Specifies whether the control navigates
 * to the previous or next slide.
 *
 * @property {(event: React.MouseEvent<HTMLElement>) => void} [onClick]
 * Called when the control is clicked.
 *
 * @typedef {import("../Prime/Prime").PrimeProps & CarouselControlOwnProps} CarouselControlProps
 *
 * @param {CarouselControlProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function CarouselControl(props) {
  const { style, className, position, onClick, ...rest } = props;

  const classes = cn(BASE_CLASS_NAME[position], className);

  return (
    <Prime
      as="button"
      type="button"
      className={classes}
      style={style}
      onClick={onClick}
      {...rest}>
      <CarouselControlIcon position={position} />
    </Prime>
  );
}

CarouselControl.propTypes = propTypes;
CarouselControl.defaultProps = defaultProps;

export default CarouselControl;
