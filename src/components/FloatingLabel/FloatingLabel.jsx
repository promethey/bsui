import React, { useId, Children } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";

const BASE_CLASS_NAME = "form-floating";

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
   * Text displayed as the
   * floating label
   */
  label: PropTypes.string.isRequired,
};

const defaultProps = {
  style: null,
  className: null,
};

/**
 * Displays a floating label for form controls.
 *
 * Note: The wrapped control must define a `placeholder`
 * prop for Bootstrap floating labels to work correctly.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/forms/floating-labels/}
 *
 * @example
 * <FloatingLabel label="Email address">
 *  <Control type="email" placeholder="name@example.com" />
 * </FloatingLabel>
 *
 * @example
 * <FloatingLabel label="password">
 *  <Control type="password" />
 * </FloatingLabel>
 *
 * @typedef {object} FloatingLabelOwnProps
 *
 * @property {React.ReactElement} children
 * Content rendered inside the component
 *
 * @property {string} label
 * Text displayed as the floating label
 *
 * @typedef {import("../Prime/Prime").PrimeProps & FloatingLabelOwnProps} FloatingLabelProps
 *
 * @param {FloatingLabelProps} props
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @since 1.0.0
 */
function FloatingLabel(props) {
  const { style, children, className, label, ...rest } = props;

  if (!React.isValidElement(children)) {
    return null;
  }

  const classes = cn(BASE_CLASS_NAME, className);

  const generatedId = useId();

  const controlId = children.props.id ?? generatedId;

  const control = React.cloneElement(
    /** @type {React.ReactElement} */
    Children.only(children),
    {
      id: controlId,
    },
  );

  return (
    <Prime className={classes} style={style} {...rest}>
      {control}
      {label && <label htmlFor={controlId}>{label}</label>}
    </Prime>
  );
}

FloatingLabel.propTypes = propTypes;
FloatingLabel.defaultProps = defaultProps;

export default FloatingLabel;
