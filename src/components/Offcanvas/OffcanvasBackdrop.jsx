import React from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";

const BASE_CLASS_NAME = "offcanvas-backdrop";

const propTypes = {
  /**
   * Inline styles applied
   * to the root element
   */
  style: PropTypes.shape({}),

  /**
   * Additional class names applied
   * to the root element
   */
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

  /**
   * Backdrop visual/animation state
   */
  state: PropTypes.string.isRequired,

  /**
   * Handles backdrop click to trigger
   * outside interaction (e.g. close)
   */
  onClick: PropTypes.func,
};

const defaultProps = {
  className: null,
  style: null,
  onClick: null,
};

/**
 * Background layer that blocks interaction
 * and can dismiss the Offcanvas.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/offcanvas/}
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} OffcanvasBackdropOwnProps
 *
 * @property {string} [state]
 * Backdrop visual/animation state.
 *
 * @property {(event?: React.MouseEvent<HTMLElement>) => void} [onClick]
 * Handles backdrop click to trigger
 * outside interaction (e.g. close).
 *
 * @typedef {PrimeProps & OffcanvasBackdropOwnProps} OffcanvasBackdropProps
 *
 * @param {OffcanvasBackdropProps} props
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @since 1.0.0
 */
function OffcanvasBackdrop(props) {
  const { style, className, state, onClick, ...rest } = props;

  return createPortal(
    <Prime
      className={cn(BASE_CLASS_NAME, {
        show: state === "entering" || state === "entered",
        fade: true,
      })}
      onClick={onClick}
      style={style}
      {...rest}
    />,
    document.body,
  );
}

OffcanvasBackdrop.propTypes = propTypes;
OffcanvasBackdrop.defaultProps = defaultProps;

export default OffcanvasBackdrop;
