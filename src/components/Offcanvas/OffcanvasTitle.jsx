import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";

const BASE_CLASS_NAME = "offcanvas-title";

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
 * Title element for the Offcanvas header.
 *
 * @component
 *
 * @example
 * <Offcanvas.Title>Title</Offcanvas.Title>
 *
 * @typedef {object} OffcanvasTitleOwnProps
 *
 * @typedef {import("../Prime/Prime").PrimeProps & OffcanvasTitleOwnProps} OffcanvasTitleProps
 *
 * @param {OffcanvasTitleProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function OffcanvasTitle(props) {
  const { style, children, className, ...rest } = props;

  const classes = cn(BASE_CLASS_NAME, className);

  return (
    <Prime as="h5" className={classes} style={style} {...rest}>
      {children}
    </Prime>
  );
}

OffcanvasTitle.propTypes = propTypes;
OffcanvasTitle.defaultProps = defaultProps;

export default OffcanvasTitle;
