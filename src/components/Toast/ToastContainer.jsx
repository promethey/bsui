import React, { useRef } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";

const BASE_CLASS_NAME = "toast-container";

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
 * Groups and positions multiple
 * toast notifications.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/toasts/}
 *
 * @example
 * <Toast.Container>
 *  <Toast />
 *  <Toast />
 *  <Toast />
 * </Toast.Container>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} ToastContainerOwnProps
 *
 * @typedef {PrimeProps & ToastContainerOwnProps} ToastContainerProps
 *
 * @param {ToastContainerProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @since 1.0.0
 */
function ToastContainer(props) {
  const { style, children, className, ...rest } = props;

  const classes = cn(BASE_CLASS_NAME, className);

  return (
    <Prime role="alert" className={classes} style={style} {...rest}>
      {children}
    </Prime>
  );
}

ToastContainer.propTypes = propTypes;
ToastContainer.defaultProps = defaultProps;

export default ToastContainer;
