import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";

const BASE_CLASS_NAME = "form-label";

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
   * Associates the label with a form
   * control by its id.
   */
  htmlFor: PropTypes.string.isRequired,
};

const defaultProps = {
  style: null,
  className: null,
};

/**
 * Displays a label associated
 * with a form control.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/forms/layout/#labels}
 *
 * @example
 * <Label htmlFor="input_email">
 *  Email:
 * </Label>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} LabelOwnProps
 *
 * @property {string} htmlFor
 * Associates the label with a form control by its id.
 *
 * @typedef {PrimeProps & LabelOwnProps} LabelProps
 *
 * @param {LabelProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function Label(props) {
  const { style, children, className, htmlFor, ...rest } = props;

  const classes = cn(BASE_CLASS_NAME, className);

  return (
    <Prime
      as="label"
      htmlFor={htmlFor}
      className={classes}
      style={style}
      {...rest}>
      {children}
    </Prime>
  );
}

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;

export default Label;
