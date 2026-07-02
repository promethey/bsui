import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";
import { CloseButton } from "components";
import { useOffcanvasContext } from "./OffcanvasContext";

const BASE_CLASS_NAME = "offcanvas-header";

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
  style: null,
  className: null,
  closeButton: null,
};

/**
 * Header section containing title
 * and optional controls.
 *
 * @component
 *
 * @example
 * <Offcanvas.Header closeButton>
 *  <Offcanvas.Title>Title</Offcanvas.Title>
 * </Offcanvas.Header>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} OffcanvasHeaderOwnProps
 *
 * @property {boolean} [closeButton=false]
 * Sets close button
 *
 * @typedef {PrimeProps & OffcanvasHeaderOwnProps} OffcanvasHeaderProps
 * @param {OffcanvasHeaderProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @since 1.0.0
 */
function OffcanvasHeader(props) {
  const { style, children, className, closeButton = false, ...rest } = props;

  const classes = cn(BASE_CLASS_NAME, className);

  const { onClose } = useOffcanvasContext();

  /**
   * @param {React.MouseEvent<HTMLElement>} event
   */
  const handleClose = (event) => {
    onClose?.(event, "close-button");
  };

  return (
    <Prime className={classes} style={style} {...rest}>
      {children}
      {closeButton && <CloseButton onClick={handleClose} />}
    </Prime>
  );
}

OffcanvasHeader.propTypes = propTypes;
OffcanvasHeader.defaultProps = defaultProps;

export default OffcanvasHeader;
