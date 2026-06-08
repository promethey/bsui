import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";
import { useCarouselContext } from "./CarouselContext";

const BASE_CLASS_NAME = "carousel-item";

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

  index: PropTypes.number.isRequired,
};

const defaultProps = {
  style: null,
  className: null,
};

/**
 * CarouselItem component
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/carousel/}
 *
 * @example
 * <Carousel.Item active>
 *  <img src="..." alt="..." />
 * </Carousel.Item>
 *
 * @typedef {object} CarouselItemOwnProps
 * @property {number} index
 *
 * @typedef {import("../Prime/Prime").PrimeProps & CarouselItemOwnProps} CarouselItemProps
 * @param {CarouselItemProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function CarouselItem(props) {
  const { style, children, className, index, ...rest } = props;

  const { activeIndex } = useCarouselContext();

  const classes = cn(
    BASE_CLASS_NAME,
    { active: index === activeIndex },
    className,
  );

  return (
    <Prime className={classes} style={style} {...rest}>
      {children}
    </Prime>
  );
}

CarouselItem.propTypes = propTypes;
CarouselItem.defaultProps = defaultProps;

export default CarouselItem;
