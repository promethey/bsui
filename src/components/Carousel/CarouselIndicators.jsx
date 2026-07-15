import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";
import { useCarouselContext } from "./CarouselContext";

const BASE_CLASS_NAME = "carousel-indicators";

const propTypes = {
  /**
   * Inline styles applied
   * to the root
   */
  style: PropTypes.shape({}),

  /**
   * Additional classes applied
   * to the root element
   */
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

const defaultProps = {
  style: null,
  className: null,
};

/**
 * Renders slide indicators for direct
 * carousel navigation.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/carousel/}
 *
 * @example
 * <Carousel.Indicators />
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} CarouselIndicatorsOwnProps
 * No public props.
 *
 * @typedef {PrimeProps & CarouselIndicatorsOwnProps} CarouselIndicatorsProps
 *
 * @param {CarouselIndicatorsProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @since 1.0.0
 */
function CarouselIndicators(props) {
  const { style, className, ...rest } = props;

  const { slidesCount, slideActive, handleScrollTo } = useCarouselContext();

  const classes = cn(BASE_CLASS_NAME, className);

  return (
    <Prime className={classes} style={style} {...rest}>
      {[...Array(slidesCount)].map((_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => handleScrollTo?.(index, false)}
          className={cn({ active: index === slideActive })}
          data-bs-target
        />
      ))}
    </Prime>
  );
}

CarouselIndicators.propTypes = propTypes;
CarouselIndicators.defaultProps = defaultProps;

export default CarouselIndicators;
