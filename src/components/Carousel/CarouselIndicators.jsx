import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";
import { useCarouselContext } from "./CarouselContext";

const BASE_CLASS_NAME = "carousel-indicators";

const propTypes = {
  /**
   * Inline styles applied to the root
   */
  style: PropTypes.shape({}),

  /**
   * Additional classes applied to the root element
   */
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

const defaultProps = {
  style: null,
  className: null,
};

/**
 * Renders slide indicators for direct carousel navigation.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/carousel/}
 *
 * @example
 * <Carousel indicators>
 *  ...
 * </Carousel>
 *
 * @typedef {object} CarouselIndicatorsOwnProps
 *
 * @typedef {import("../Prime/Prime").PrimeProps & CarouselIndicatorsOwnProps} CarouselIndicatorsProps
 * @param {CarouselIndicatorsProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function CarouselControl(props) {
  const { style, className, ...rest } = props;

  const classes = cn(BASE_CLASS_NAME, className);

  const { activeIndex, itemsCount, handleControlClick } = useCarouselContext();

  return (
    <Prime className={classes} style={style} {...rest}>
      {[...Array(itemsCount)].map((_, index) => (
        <button
          key={_}
          type="button"
          onClick={() => handleControlClick?.(index)}
          className={cn({ active: activeIndex === index })}
          aria-current={activeIndex === index}
          data-bs-target
        />
      ))}
    </Prime>
  );
}

CarouselControl.propTypes = propTypes;
CarouselControl.defaultProps = defaultProps;

export default CarouselControl;
