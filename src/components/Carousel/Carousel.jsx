import { useState, useEffect, useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";
import CarouselInner from "./CarouselInner";
import CarouselItem from "./CarouselItem";
import CarouselControl from "./CarouselControl";
import { CarouselContext } from "./CarouselContext";
import CarouselCaption from "./CarouselCaption";
import CarouselIndicators from "./CarouselIndicators";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";

const BASE_CLASS_NAME = "carousel";

const propTypes = {
  /**
   * Inline styles applied
   * to the root
   */
  style: PropTypes.shape({}),

  /**
   * Content rendered inside
   * the component
   */
  children: PropTypes.node.isRequired,

  /**
   * Additional classes applied
   * to the root element
   */
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

  /**
   * Initial active slide index when
   * the carousel is first rendered
   */
  defaultIndex: PropTypes.number,

  /**
   * Enables infinite slide looping
   */
  loop: PropTypes.bool,

  /**
   * Displays previous and next
   * navigation controls
   */
  controls: PropTypes.bool,

  /**
   * Displays slide indicators and enables navigation
   * by selecting a specific slide
   */
  indicators: PropTypes.bool,

  /**
   * Enables autoplay animation
   */
  autoplay: PropTypes.bool,

  /**
   * Enables fade slides animation
   */
  fade: PropTypes.bool,
};

const defaultProps = {
  style: null,
  className: null,
  defaultIndex: 0,
  loop: false,
  controls: false,
  inidcators: false,
  slides: false,
};

/**
 * Displays a slideshow of content with support
 * for controls and indicators.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/carousel/}
 *
 * @see {@link https://www.embla-carousel.com/}
 *
 * @example
 * <Carousel defaultIndex={0} controls indicators loop>
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
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} CarouselOwnProps
 *
 * @property {number} [defaultIndex=0]
 * Initial active slide index when the carousel is first rendered.
 *
 * @property {boolean} [loop=false]
 * Enables infinite slide looping.
 *
 * @property {boolean} [controls=false]
 * Displays previous and next navigation controls.
 *
 * @property {boolean} [indicators=false]
 * Displays slide indicators and enables navigation by selecting a specific slide.
 *
 * @property {boolean} [autoplay=false]
 * Enables autoplay animation.
 *
 * @property {boolean} [fade=false]
 * Enables fade slides animation
 *
 * @typedef {PrimeProps & CarouselOwnProps} CarouselProps
 *
 * @param {CarouselProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @since 1.0.0
 */
function Carousel(props) {
  const {
    style,
    children,
    className,
    defaultIndex = 0,
    loop = false,
    controls = false,
    indicators = false,
    autoplay = false,
    fade = false,
    ...rest
  } = props;

  const classes = cn(BASE_CLASS_NAME, className);

  const plugins = [];

  const options = {
    loop: loop,
    startIndex: defaultIndex,
  };

  if (autoplay) {
    plugins.push(
      Autoplay({
        delay: 4000,
        playOnInit: false,
        stopOnInteraction: true,
        stopOnMouseEnter: false,
        stopOnLastSnap: false,
      }),
    );
  }

  if (fade) {
    plugins.push(Fade());
  }

  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);

  const [slidesCount, setSlidesCount] = useState(0);
  const [slideActive, setSlideActive] = useState(0);
  const [canScrollPrev, setCanScrolPrev] = useState(true);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const handleNextIndex = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const handlePrevIndex = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);

  const handleScrollTo = useCallback(
    /** @param {number} index */
    (index) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.plugins().autoplay?.play();

    setSlidesCount(emblaApi.slideNodes().length);

    setSlideActive(emblaApi.selectedScrollSnap());

    const onSelect = () => {
      setSlideActive(emblaApi.selectedScrollSnap());

      setCanScrolPrev(emblaApi?.canScrollPrev() ?? false);
      setCanScrollNext(emblaApi?.canScrollNext() ?? false);
    };

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const carouselValue = useMemo(
    () => ({
      slidesCount,
      slideActive,
      emblaRef,
      handleScrollTo,
    }),
    [slidesCount, slideActive, emblaApi],
  );

  return (
    <CarouselContext.Provider value={carouselValue}>
      <Prime className={classes} style={style} {...rest}>
        {indicators && <CarouselIndicators />}
        {children}
        {canScrollPrev && controls && (
          <CarouselControl position="prev" onClick={handlePrevIndex} />
        )}
        {canScrollNext && controls && (
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
Carousel.Caption = CarouselCaption;

export default Carousel;
