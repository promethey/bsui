import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";
import { prefix } from "helpers";

const BASE_CLASS_NAME = "modal-dialog";

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

  scrollable: PropTypes.bool,
};

const defaultProps = {
  className: null,
  style: null,
  scrollable: false,
};

/**
 * Dialog container displayed in a modal overlay.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/modal/}
 *
 * @typedef {object} ModalDialogOwnProps
 *
 * @typedef {import("../Prime/Prime").PrimeProps & ModalDialogOwnProps} ModalDialogProps
 * @param {ModalDialogProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function ModalDialog(props) {
  const { style, children, className, ...rest } = props;

  const classes = cn(BASE_CLASS_NAME, className);

  return (
    <Prime style={style} className={classes} {...rest}>
      {children}
    </Prime>
  );
}

ModalDialog.propTypes = propTypes;
ModalDialog.defaultProps = defaultProps;

export default ModalDialog;
