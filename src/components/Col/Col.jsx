import PropTypes from "prop-types";
import cn from "classnames";
import { classnames as cs } from "helpers";
import { Prime } from "components";

const BASE_CLASS_NAME = "col";

Col.propTypes = {
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
   * Sets size for xs
   */
  xs: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "auto"]),
  ]),

  /**
   * Sets size for sm
   */
  sm: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "auto"]),
  ]),

  /**
   * Sets size for md
   */
  md: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "auto"]),
  ]),

  /**
   * Sets size for lg
   */
  lg: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "auto"]),
  ]),

  /**
   * Sets size for xl
   */
  xl: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "auto"]),
  ]),

  /**
   * Sets size for xxl
   */
  xxl: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "auto"]),
  ]),

  /**
   * Sets offset
   */
  offset: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
};

Col.defaultProps = {
  style: null,
  className: null,
  xs: null,
  sm: null,
  md: null,
  lg: null,
  xl: null,
  xxl: null,
  offset: null,
};

/**
 * Row component
 *
 * @see {@link Prime}
 * @see {@link https://getbootstrap.com/docs/5.1/layout/columns/}
 *
 * @example
 * <Col></Col>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} ColOwnProps
 * @property {1|2|3|4|5|6|7|8|9|10|11|12|"auto"|true} [xs] - Sets size for xs (default)
 * @property {1|2|3|4|5|6|7|8|9|10|11|12|"auto"|true} [sm] - Sets size for sm
 * @property {1|2|3|4|5|6|7|8|9|10|11|12|"auto"|true} [md] - Sets size for md
 * @property {1|2|3|4|5|6|7|8|9|10|11|12|"auto"|true} [lg] - Sets size for lg
 * @property {1|2|3|4|5|6|7|8|9|10|11|12|"auto"|true} [xl] - Sets size for xl
 * @property {1|2|3|4|5|6|7|8|9|10|11|12|"auto"|true} [xxl] - Sets size for xxl
 * @property {1|2|3|4|5|6|7|8|9|10|11|12|"auto"|true} [offset] - Sets size for xxl
 *
 * @typedef {ColOwnProps & PrimeProps} ColProps
 * @param {ColProps} props
 *
 * @author Sedelkov Egor <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function Col(props) {
  const {
    style,
    children,
    className,
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
    offset,
    ...rest
  } = props;

  const classes = cn(
    { [BASE_CLASS_NAME]: !xs },
    [cs(BASE_CLASS_NAME, xs)],
    [cs("col", "sm", sm)],
    [cs("col", "md", md)],
    [cs("col", "lg", lg)],
    [cs("col", "xl", xl)],
    [cs("col", "xxl", xxl)],
    className,
  );

  return (
    <Prime style={style} className={classes} {...rest}>
      {children}
    </Prime>
  );
}

export default Col;
