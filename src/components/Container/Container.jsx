import PropTypes from "prop-types";
import classNames from "classnames";
import { Prime } from "components";
import { classnames as cs } from "helpers";

const BASE_CLASSNAME = "container";

const CONTAINER_VALUES = ["xs", "sm", "md", "lg", "xl", "xxl"];

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
   * Sets fluid full width
   */
  fluid: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(["sm", "md", "lg", "xl", "xxl"]),
  ]),
};

const defaultProps = {
  style: null,
  className: null,
  fluid: false,
};

/**
 * Container component
 *
 * @see {Prime}
 * @see {@link https://getbootstrap.com/docs/5.1/components/buttons/}
 *
 * @example
 * <Container>Content</Container>
 *
 * @example
 * <Container fluid="xs">Content</Container>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} ContainerOwnProps
 * @property {"xs"|"sm"|"md"|"lg"|"xl"|"xxl"|true} [fluid] - Sets fluid value
 *
 * @typedef {ContainerOwnProps & PrimeProps} ContainerProps
 *
 * @param {ContainerProps} props
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function Container(props) {
  const { style, children, className, fluid, ...rest } = props;

  const classes = classNames(
    {
      [cs(BASE_CLASSNAME, fluid)]:
        typeof fluid === "string" && CONTAINER_VALUES.includes(fluid),
      [cs(BASE_CLASSNAME, "fluid")]: typeof fluid === "boolean" && fluid,
      [BASE_CLASSNAME]: !fluid,
    },
    className,
  );

  return (
    <Prime style={style} className={classes} {...rest}>
      {children}
    </Prime>
  );
}

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;
