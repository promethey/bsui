import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";
import ModalDialog from "./ModalDialog";
import ModalContent from "./ModalContent";
import ModalHeader from "./ModalHeader";
import ModalTitle from "./ModalTitle";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";
import { prefix } from "helpers";
import { ModalContext } from "./ModalContext";

const BASE_CLASS_NAME = "modal";

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

  open: PropTypes.bool,
  onHide: PropTypes.func,
  scrollable: PropTypes.bool,
  centered: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "lg", "xl"]),
  fullscreen: PropTypes.bool,
};

const defaultProps = {
  className: null,
  style: null,
  open: false,
  onHide: null,
  scrollable: false,
  centered: false,
  size: null,
  fullscreen: false,
};

/**
 * Displays content in a layered overlay
 * above the main interface.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/modal/}
 *
 * @typedef {object} ModalOwnProps
 * @property {boolean} [open=false]
 * @property {() => {}} [onHide]
 * @property {boolean} [scrollable=false]
 * @property {boolean} [centered=false]
 * @property {"sm"|"lg"|"xl"} [size]
 * @property {"sm"|"md"|"lg"|"xl"|"xxl"|boolean} [fullscreen=false]
 *
 * @typedef {import("../Prime/Prime").PrimeProps & ModalOwnProps} ModalProps
 * @param {ModalProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function Modal(props) {
  const {
    style,
    children,
    className,
    open = false,
    onHide,
    scrollable = false,
    centered = false,
    size,
    fullscreen = false,
    ...rest
  } = props;

  const classes = cn(BASE_CLASS_NAME, className);

  const dialogClasses = cn({
    [prefix("modal-dialog", "scrollable")]:
      typeof scrollable === "boolean" && scrollable,
    [prefix("modal-dialog", "centered")]:
      typeof centered === "boolean" && centered,
    [prefix(BASE_CLASS_NAME, size)]:
      typeof size === "string" && ["sm", "lg", "xl"].includes(size),
    [prefix(BASE_CLASS_NAME, "fullscreen")]:
      typeof fullscreen === "boolean" && fullscreen,
    [prefix(
      BASE_CLASS_NAME,
      "fullscreen",
      /** @type {string} */ (fullscreen),
      "down",
    )]:
      typeof fullscreen === "string" &&
      ["sm", "md", "lg", "xl", "xxl"].includes(fullscreen),
  });

  /** @type {React.CSSProperties} */
  const styles = {
    display: open ? "block" : "",
    ...style,
  };

  return (
    <ModalContext.Provider value={{ onHide }}>
      <Prime style={styles} className={classes} {...rest}>
        <ModalDialog className={dialogClasses}>{children}</ModalDialog>
      </Prime>
    </ModalContext.Provider>
  );
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

Modal.Dialog = ModalDialog;
Modal.Content = ModalContent;
Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
