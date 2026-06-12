import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";
import { classnames as cs } from "helpers";

const BASE_CLASS_NAME = "container";

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
 * Centers and horizontally pads content
 * within a responsive layout wrapper.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/buttons/}
 *
 * @example
 * <Container>
 *  Content
 * </Container>
 *
 * @example
 * <Container fluid>
 *  Content
 * </Container>
 *
 * @example
 * <Container fluid="xs">
 *  Content
 * </Container>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} ContainerOwnProps
 *
 * @property {"xs"|"sm"|"md"|"lg"|"xl"|"xxl"|true} [fluid]
 * Enables fluid container behavior across all or specific breakpoints.
 *
 * @typedef {ContainerOwnProps & PrimeProps} ContainerProps
 * @param {ContainerProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function Container(props) {
  const { style, children, className, fluid, ...rest } = props;

  const isBreakpoint =
    typeof fluid === "string" && CONTAINER_VALUES.includes(fluid);

  const classes = cn(
    {
      [BASE_CLASS_NAME]: fluid === null || (!isBreakpoint && fluid !== true),
      [cs(BASE_CLASS_NAME, fluid)]: isBreakpoint,
      [cs(BASE_CLASS_NAME, "fluid")]: fluid === true,
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
