import { useState, Children, useCallback, isValidElement } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";
import CarouselInner from "./CarouselInner";
import CarouselItem from "./CarouselItem";
import CarouselControl from "./CarouselControl";
import { CarouselContext } from "./CarouselContext";
import CarouselCaption from "./CarouselCaption";
import CarouselIndicators from "./CarouselIndicators";
import findCarouselInner from "./findCarouselInner";

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

  /**
   * Initial active slide index when the carousel
   * is first rendered
   */
  defaultIndex: PropTypes.number,

  /**
   * Displays previous and next navigation controls
   */
  controls: PropTypes.bool,

  /**
   * Displays slide indicators and enables navigation
   * by selecting a specific slide
   */
  indicators: PropTypes.bool,
};

const defaultProps = {
  style: null,
  className: null,
  defaultIndex: 0,
  controls: false,
  inidcators: false,
};

/**
 * Displays a slideshow of content with support
 * for controls and indicators.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/carousel/}
 *
 * @example
 * <Carousel defaultIndex={0} controls indicators>
 *  <Carousel.Inner>
 *    <Carousel.Item>
 *      <img src="..." alt="..." />
 *    </Carousel.Item>
 *    <Carousel.Item>
 *      <img src="..." alt="..." />
 *    </Carousel.Item>
 *  </Carousel.Inner>
 * </Carousel>
 *
 * @typedef {object} CarouselOwnProps
 *
 * @property {number} [defaultIndex=0]
 * Initial active slide index when the carousel is first rendered.
 *
 * @property {boolean} [controls=false]
 * Displays previous and next navigation controls.
 *
 * @property {boolean} [indicators=false]
 * Displays slide indicators and enables navigation by selecting a specific slide.
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
    defaultIndex = 0,
    controls = false,
    indicators = false,
    ...rest
  } = props;

  const classes = cn(BASE_CLASS_NAME, "slide", className);

  const inner = findCarouselInner(children);

  const itemsCount = Children.count(inner?.props?.children);

  const [activeIndex, setActiveIndex] = useState(() =>
    defaultIndex >= 0 && defaultIndex <= itemsCount - 1 ? defaultIndex : 0,
  );

  const handleNextIndex = () => {
    setActiveIndex?.((prev) => {
      if (itemsCount <= 1) return prev;

      return prev === itemsCount - 1 ? 0 : prev + 1;
    });
  };

  const handlePrevIndex = () => {
    setActiveIndex?.((prev) => {
      if (itemsCount <= 1) return prev;

      return prev === 0 ? itemsCount - 1 : prev - 1;
    });
  };

  /** @param {number} index */
  const handleControlClick = (index) => {
    setActiveIndex?.(index);
  };

  const carouselValue = { activeIndex, itemsCount, handleControlClick };

  return (
    <CarouselContext.Provider value={carouselValue}>
      <Prime className={classes} style={style} {...rest}>
        {indicators && <CarouselIndicators />}
        {children}
        {controls && (
          <CarouselControl position="prev" onClick={() => handlePrevIndex()} />
        )}
        {controls && (
          <CarouselControl position="next" onClick={() => handleNextIndex()} />
        )}
      </Prime>
    </CarouselContext.Provider>
  );
}

Carousel.propTypes = propTypes;
Carousel.defaultProps = defaultProps;

Carousel.Inner = CarouselInner;
Carousel.Item = CarouselItem;
Carousel.Caption = CarouselCaption;

export default Carousel;
