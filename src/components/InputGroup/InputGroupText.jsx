import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";

const BASE_CLASS_NAME = "input-group-text";

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
};

const defaultProps = {
  style: null,
  className: null,
};

/**
 * Renders text or icons as an addon
 * within an input group.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/forms/input-group/}
 *
 * @example
 * <InputGroup.Text>$</InputGroup.Text>
 *
 * @typedef {object} InputGroupTextOwnProps
 *
 * @typedef {import("../Prime/Prime").PrimeProps & InputGroupTextOwnProps} InputGroupTextProps
 *
 * @param {InputGroupTextProps} props
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function InputGroupText(props) {
  const { style, children, className, ...rest } = props;

  const classes = cn(BASE_CLASS_NAME, className);

  return (
    <Prime as="span" className={classes} style={style} {...rest}>
      {children}
    </Prime>
  );
}

InputGroupText.propTypes = propTypes;
InputGroupText.defaultProps = defaultProps;

export default InputGroupText;
