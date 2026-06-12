import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";

const BASE_CLASS_NAME = "modal-body";

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
};

const defaultProps = {
  className: null,
  style: null,
};

/**
 * Main content area of a modal dialog.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/modal/}
 *
 * @typedef {object} ModalBodyOwnProps
 *
 * @typedef {import("../Prime/Prime").PrimeProps & ModalBodyOwnProps} ModalBodyProps
 * @param {ModalBodyProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function ModalBody(props) {
  const { style, children, className, ...rest } = props;

  const classes = cn(BASE_CLASS_NAME, className);

  return (
    <Prime style={style} className={classes} {...rest}>
      {children}
    </Prime>
  );
}

ModalBody.propTypes = propTypes;
ModalBody.defaultProps = defaultProps;

export default ModalBody;
