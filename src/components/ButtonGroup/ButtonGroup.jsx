import PropTypes from "prop-types";
import cn from "classnames";
import { classnames as cs, prefix, is } from "helpers";
import { Prime } from "components";

const BASE_CLASS_NAME = "btn-group";

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
   * Change size
   */
  size: PropTypes.oneOf(["sm", "lg"]),

  /**
   * Activate vertical style
   */
  vertical: PropTypes.bool,

  /**
   * Change dropdown directions
   */
  drop: PropTypes.oneOf(["up", "end", "start"]),
};

const defaultProps = {
  style: null,
  className: null,
  size: null,
  vertical: false,
};

/**
 * Button group component
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/button-group/}
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} ButtonGroupOwnProps
 * @property {object} [style] - Inline styles applied to the root.
 * @property {React.ReactNode} [children] - Content rendered inside the component.
 * @property {object|string} [className] - Additional classes applied to the root element.
 *
 * @property {"lg"|"sm"} [size] - Sets button group size
 * @property {boolean} [vertical] - Sets vertical style
 *
 * @typedef {ButtonGroupOwnProps & PrimeProps} ButtonGroupProps
 *
 * @param {ButtonGroupProps} props
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function ButtonGroup({ style, children, className, size, vertical, ...rest }) {
  const classes = cn(
    vertical ? `${BASE_CLASS_NAME}-vertical` : BASE_CLASS_NAME,
    {
      [cs(BASE_CLASS_NAME, size)]: is("string", size, { notEmpty: true }),
    },
    className,
  );

  return (
    <Prime style={style} className={classes} role="group" {...rest}>
      {children}
    </Prime>
  );
}

ButtonGroup.propTypes = propTypes;
ButtonGroup.defaultProps = defaultProps;

export default ButtonGroup;
