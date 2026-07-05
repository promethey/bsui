import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";

const BASE_CLASS_NAME = "toast-body";

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
 * Displays the main content
 * of a toast notification.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/toasts/}
 *
 * @example
 * <Toast.Body>
 *  Hello, world! This is a toast message.
 * </Toast.Body>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} ToastBodyOwnProps
 *
 * @typedef {PrimeProps & ToastBodyOwnProps} ToastBodyProps
 * @param {ToastBodyProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @since 1.0.0
 */
function ToastBody(props) {
  const { style, children, className, ...rest } = props;

  const classes = cn(BASE_CLASS_NAME, className);

  return (
    <Prime className={classes} style={style} {...rest}>
      {children}
    </Prime>
  );
}

ToastBody.propTypes = propTypes;
ToastBody.defaultProps = defaultProps;

export default ToastBody;
