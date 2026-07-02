import React from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";

const BASE_CLASS_NAME = "modal-backdrop";

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
   * Current transition state used to
   * control backdrop visibility
   */
  state: PropTypes.string.isRequired,
};

const defaultProps = {
  className: null,
  style: null,
};

/**
 * Renders the modal backdrop behind
 * the modal dialog.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/modal/}
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} ModalBackdropOwnProps
 *
 * @property {string} [state]
 * Current transition state used to
 * control backdrop visibility.
 *
 * @typedef {PrimeProps & ModalBackdropOwnProps} ModalBackdropProps
 * @param {ModalBackdropProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Egor Sedelkov [promethey] <sedelkovegor@gmail.com>
 * @since 1.0.0
 */
function ModalBackdrop(props) {
  const { style, children, className, state, ...rest } = props;

  return createPortal(
    <Prime
      className={cn(BASE_CLASS_NAME, {
        show: state === "entering" || state === "entered",
        fade: true,
      })}
      style={style}
      {...rest}
    />,
    document.body,
  );
}

ModalBackdrop.propTypes = propTypes;
ModalBackdrop.defaultProps = defaultProps;

export default ModalBackdrop;
