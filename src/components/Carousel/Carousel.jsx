import { Children, useCallback, isValidElement } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";
import CarouselInner from "./CarouselInner";
import CarouselItem from "./CarouselItem";
import CarouselControl from "./CarouselControl";
import { CarouselContext } from "./CarouselContext";
import CarouselCaption from "./CarouselCaption";

const BASE_CLASS_NAME = "carousel";

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

  activeIndex: PropTypes.number,
  onSelect: PropTypes.func,
  controls: PropTypes.bool,
};

const defaultProps = {
  style: null,
  className: null,
  activeIndex: 0,
  onSelect: null,
  controls: false,
};

/**
 * Carousel component
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/carousel/}
 *
 * @example
 * <Carousel activeIndex={0}>
 *  <Carousel.Inner>
 *    <Carousel.Item>
 *      <img ... />
 *    </Carousel.Item>
 *    <Carousel.Item>
 *      <img ... />
 *    </Carousel.Item>
 *  </Carousel.Inner>
 * </Carousel>
 *
 * @typedef {object} CarouselOwnProps
 * @property {number} [activeIndex]
 * @property {React.Dispatch<React.SetStateAction<number>>} [onSelect]
 * @property {boolean} [controls=false]
 *
 * @typedef {import("../Prime/Prime").PrimeProps & CarouselOwnProps} CarouselProps
 * @param {CarouselProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function Carousel(props) {
  const {
    style,
    children,
    className,
    activeIndex = 0,
    onSelect,
    controls = false,
    ...rest
  } = props;

  const classes = cn(BASE_CLASS_NAME, "slide", className);

  /**
   * @param {React.ReactNode} children
   */
  function findCarouselInner(children) {
    return Children.toArray(children).find(
      (child) => isValidElement(child) && child.type === CarouselInner,
    );
  }

  const inner = findCarouselInner(children);

  if (!inner) {
    throw new Error("Carousel requires a Carousel.Inner component.");
  }

  const itemsLength = Children.count(
    /** @type {import("react").ReactElement | undefined} */
    (inner)?.props?.children,
  );

  const handleNextIndex = useCallback(() => {
    onSelect?.((prev) => {
      if (itemsLength <= 1) return prev;
      return prev === itemsLength - 1 ? 0 : prev + 1;
    });
  }, [onSelect]);

  const handlePrevIndex = useCallback(() => {
    onSelect?.((prev) => {
      if (itemsLength <= 1) return prev;
      return prev === 0 ? itemsLength - 1 : prev - 1;
    });
  }, [onSelect]);

  const carouselValue = {
    activeIndex,
  };

  return (
    <CarouselContext.Provider value={carouselValue}>
      <Prime className={classes} style={style} {...rest}>
        {children}
        {controls && (
          <CarouselControl position="prev" onClick={handlePrevIndex} />
        )}
        {controls && (
          <CarouselControl position="next" onClick={handleNextIndex} />
        )}
      </Prime>
    </CarouselContext.Provider>
  );
}

Carousel.propTypes = propTypes;
Carousel.defaultProps = defaultProps;

Carousel.Inner = CarouselInner;
Carousel.Item = CarouselItem;
Carousel.Control = CarouselControl;
Carousel.Caption = CarouselCaption;

export default Carousel;
