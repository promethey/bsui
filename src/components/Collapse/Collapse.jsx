import { Prime } from "components";
import PropTypes from "prop-types";
import cn from "classnames";
import { prefix } from "helpers";

const BASE_CLASS_NAME = "collapse";

const propTypes = {
  /**
   * Inline styles applied to the root
   */
  style: PropTypes.shape({}),

  /**
   * Content rendered inside the component
   */
  children: PropTypes.node.isRequired,

  /**
   * Additional classes applied to the root element
   */
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

  /**
   * Sets horizontal collapsing
   */
  horizontal: PropTypes.bool,
};

const defaultProps = {
  style: null,
  className: null,
  horizontal: false,
};

/**
 * Collapse component
 *
 * @see {@link Prime}
 * @see {@link https://getbootstrap.com/docs/5.1/components/collapse/}
 *
 * @example
 * <Collapse>.collapse</Collapse>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} CollapseOwnProps
 * @property {boolean} [horizontal] - Sets horizontal collapsing
 *
 * @typedef {PrimeProps & CollapseOwnProps} CollapseProps
 *
 * @param {CollapseProps} props
 *
 * @return {React.ReactElement}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function Collapse(props) {
  const { style, children, className, horizontal, ...rest } = props;

  const classNames = cn({
    [prefix(BASE_CLASS_NAME, "horizontal")]:
      typeof horizontal === "boolean" && horizontal,
  });

  return (
    <Prime style={style} className={className} {...rest}>
      {children}
    </Prime>
  );
}

Collapse.propTypes = propTypes;
Collapse.defaultProps = defaultProps;

export default Collapse;
