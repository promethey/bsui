import PropTypes from "prop-types";
import cn from "classnames";
import { prefix } from "helpers";
import { Prime } from "components";
import React from "react";

const BASE_CLASS_NAME = "btn-group";

/**
 * @typedef {"sm"|"lg"} ButtonGroupSizes
 * @type {Array<ButtonGroupSizes>}
 */
const BUTTON_GROUP_SIZES = ["sm", "lg"];

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
 * Groups multiple buttons into a single
 * connected control container.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/button-group/}
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} ButtonGroupOwnProps
 *
 * @property {ButtonGroupSizes} [size]
 * Sets button group size
 *
 * @property {boolean} [vertical=false]
 * Sets vertical style
 *
 * @typedef {ButtonGroupOwnProps & PrimeProps} ButtonGroupProps
 *
 * @param {ButtonGroupProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @since 1.0.0
 */
function ButtonGroup(props) {
  const { style, children, className, size, vertical = false, ...rest } = props;

  const classes = cn(
    vertical ? prefix(BASE_CLASS_NAME, "vertical") : BASE_CLASS_NAME,
    {
      [prefix(BASE_CLASS_NAME, size)]:
        typeof size === "string" && BUTTON_GROUP_SIZES.includes(size),
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
