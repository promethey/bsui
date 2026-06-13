import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";
import { CloseButton } from "components";
import { useModalContext } from "./ModalContext";

const BASE_CLASS_NAME = "modal-header";

const propTypes = {
  /**
   * Inline styles applied to the root element
   */
  style: PropTypes.shape({}),

  /**
   * Content rendered inside the component
   */
  children: PropTypes.node.isRequired,

  /**
   * Additional class names applied to the root element
   */
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

  closeButton: PropTypes.bool,
};

const defaultProps = {
  className: null,
  style: null,
  closeButton: false,
};

/**
 * Header section of a modal dialog,
 * typically used for titles and actions.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/modal/}
 *
 * @typedef {object} ModalHeaderOwnProps
 * @property {boolean} [closeButton=false]
 *
 * @typedef {import("../Prime/Prime").PrimeProps & ModalHeaderOwnProps} ModalHeaderProps
 * @param {ModalHeaderProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function ModalHeader(props) {
  const { style, children, className, closeButton = false, ...rest } = props;

  const classes = cn(BASE_CLASS_NAME, className);

  const { onHide } = useModalContext();

  return (
    <Prime style={style} className={classes} {...rest}>
      {children}
      {closeButton && (
        <CloseButton onClick={(event) => onHide?.(event, "close-button")} />
      )}
    </Prime>
  );
}

ModalHeader.propTypes = propTypes;
ModalHeader.defaultProps = defaultProps;

export default ModalHeader;
