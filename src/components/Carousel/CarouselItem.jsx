import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";

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
 * Represents an individual slide within a carousel.
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
 *
 * @property {number} index
 *
 * @typedef {import("../Prime/Prime").PrimeProps & CarouselItemOwnProps} CarouselItemProps
 *
 * @param {CarouselItemProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function CarouselItem(props) {
  const { style, children, className, ...rest } = props;

  const classes = cn(className);

  const styles = {
    flex: "0 0 100%",
    minWidth: 0,
    ...style,
  };

  return (
    <Prime d="flex" pos="relative" className={classes} style={styles} {...rest}>
      {children}
    </Prime>
  );
}

CarouselItem.propTypes = propTypes;
CarouselItem.defaultProps = defaultProps;

export default CarouselItem;
