import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";
import { useCarouselContext } from "./CarouselContext";

const BASE_CLASS_NAME = "carousel-inner";

const propTypes = {
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
  style: null,
  className: null,
};

/**
 * Wraps and manages the collection of carousel slides.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/carousel/}
 *
 * @example
 * <Carousel.Inner>
 *  <Carousel.Item>
 *    <img ... />
 *  </Carousel.Item>
 * </Carousel.Inner>
 *
 * @typedef {object} CarouselInnerOwnProps
 *
 * @typedef {import("../Prime/Prime").PrimeProps & CarouselInnerOwnProps} CarouselInnerProps
 * @param {CarouselInnerProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function CarouselInner(props) {
  const { style, children, className, ...rest } = props;

  const classes = cn(BASE_CLASS_NAME, className);

  const { emblaRef } = useCarouselContext();

  const styles = {
    overflow: "hidden",
  };

  return (
    <Prime ref={emblaRef} className={classes} style={styles} {...rest}>
      <Prime d="flex" style={{ touchAction: "pan-y pinch-zoom" }}>
        {children}
      </Prime>
    </Prime>
  );
}

CarouselInner.propTypes = propTypes;
CarouselInner.defaultProps = defaultProps;

export default CarouselInner;
