import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";
import InputGroupText from "./InputGroupText";
import { prefix } from "helpers";

const BASE_CLASS_NAME = "input-group";

const propTypes = {
  /**
   * Inline styles applied
   * to the root element
   */
  style: PropTypes.shape({}),

  /**
   * Content rendered inside
   * the component
   */
  children: PropTypes.node.isRequired,

  /**
   * Additional class names applied
   * to the root element
   */
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

  /**
   * Controls the size of the input group
   * and its child elements.
   */
  size: PropTypes.oneOf(["sm", "lg"]),
};

const defaultProps = {
  style: null,
  className: null,
  size: null,
};

/**
 * Displays text, icons, or other supplementary
 * content within an input group addon.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/forms/input-group/}
 *
 * @example
 * <InputGroup>
 *   <InputGroup.Text>@</InputGroup.Text>
 *   <Control />
 * </InputGroup>
 *
 * @example
 * <InputGroup>
 *  <InputGroup.Text>First and last name</InputGroup.Text>
 *  <Control />
 *  <Control />
 * </InputGroup>
 *
 * @typedef {object} InputGroupOwnProps
 *
 * @property {"sm"|"lg"} [size]
 * Controls the size of the input group
 * and its child elements.
 *
 * @typedef {import("../Prime/Prime").PrimeProps & InputGroupOwnProps} InputGroupProps
 *
 * @param {InputGroupProps} props
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function InputGroup(props) {
  const { style, children, className, size, ...rest } = props;

  const classes = cn(
    BASE_CLASS_NAME,
    {
      [prefix(BASE_CLASS_NAME, size)]:
        typeof size === "string" && ["sm", "lg"].includes(size),
    },
    className,
  );

  return (
    <Prime className={classes} style={style} {...rest}>
      {children}
    </Prime>
  );
}

InputGroup.propTypes = propTypes;
InputGroup.defaultProps = defaultProps;

InputGroup.Text = InputGroupText;

export default InputGroup;
