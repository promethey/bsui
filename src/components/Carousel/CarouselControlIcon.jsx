import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";
import { prefix } from "helpers";

const BASE_CLASS_NAME = {
  prev: "carousel-control-prev-icon",
  next: "carousel-control-next-icon",
};

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

  position: PropTypes.oneOf(["prev", "next"]).isRequired,
};

const defaultProps = {
  style: null,
  className: null,
};

/**
 * Displays an icon used by carousel navigation controls.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/carousel/}
 *
 * @typedef {object} CarouselControlIconOwnProps
 * @property {"prev"|"next"} position
 *
 * @typedef {import("../Prime/Prime").PrimeProps & CarouselControlIconOwnProps} CarouselIconControlProps
 * @param {CarouselIconControlProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function CarouselControl(props) {
  const { style, children, className, position, ...rest } = props;

  const classes = cn(BASE_CLASS_NAME[position], className);

  return (
    <Prime
      as="span"
      className={classes}
      style={style}
      {...rest}
      aria-hidden={true}
    />
  );
}

CarouselControl.propTypes = propTypes;
CarouselControl.defaultProps = defaultProps;

export default CarouselControl;
