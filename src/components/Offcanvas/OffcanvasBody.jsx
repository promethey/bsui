import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";

const BASE_CLASS_NAME = "offcanvas-body";

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
 * Scrollable content area
 * inside the Offcanvas.
 *
 * @component
 *
 * @typedef {object} OffcanvasBodyOwnProps
 *
 * @typedef {import("../Prime/Prime").PrimeProps & OffcanvasBodyOwnProps} OffcanvasBodyProps
 *
 * @param {OffcanvasBodyProps} props
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function OffcanvasBody(props) {
  const { style, children, className, ...rest } = props;

  const classes = cn(BASE_CLASS_NAME, className);

  return (
    <Prime className={classes} style={style} {...rest}>
      {children}
    </Prime>
  );
}

OffcanvasBody.propTypes = propTypes;
OffcanvasBody.defaultProps = defaultProps;

export default OffcanvasBody;
