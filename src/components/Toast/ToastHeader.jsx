import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";
import { CloseButton } from "components";
import { useToastContext } from "./ToastContext";

const BASE_CLASS_NAME = "toast-header";

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
   * Sets close button
   */
  closeButton: PropTypes.bool,
};

const defaultProps = {
  className: null,
  style: null,
  closeButton: false,
};

/**
 * Displays the header section of
 * a toast notification.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/toasts/}
 *
 * @example
 * <Toast.Header>
 *  <strong>Bootstrap</strong>
 * </Toast.Header>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} ToastHeaderOwnProps
 *
 * @property {boolean} [closeButton=false]
 * Sets close button
 *
 * @typedef {PrimeProps & ToastHeaderOwnProps} ToastHeaderProps
 *
 * @param {ToastHeaderProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @since 1.0.0
 */
function ToastHeader(props) {
  const { style, children, className, closeButton = false, ...rest } = props;

  const classes = cn(BASE_CLASS_NAME, className);

  const { onClose } = useToastContext();

  /**
   * @param {React.MouseEvent<HTMLElement>} event
   */
  const handleClose = (event) => {
    onClose?.(event, "close-button");
  };

  return (
    <Prime style={style} className={classes} {...rest}>
      {children}
      {closeButton && <CloseButton onClick={handleClose} />}
    </Prime>
  );
}

ToastHeader.propTypes = propTypes;
ToastHeader.defaultProps = defaultProps;

export default ToastHeader;
