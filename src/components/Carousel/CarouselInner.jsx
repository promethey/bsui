import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";
import { Children, cloneElement, isValidElement } from "react";

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
 * CarouselInner component
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

  return (
    <Prime className={classes} style={style} {...rest}>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) {
          return child;
        }

        return cloneElement(/** @type {React.ReactElement<any>} */ (child), {
          index,
        });
      })}
    </Prime>
  );
}

CarouselInner.propTypes = propTypes;
CarouselInner.defaultProps = defaultProps;

export default CarouselInner;
