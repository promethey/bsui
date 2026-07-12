import PropTypes from "prop-types";
import cn from "classnames";
import { classnames as cs } from "helpers";
import { Prime } from "components";
import React from "react";
import { offsetResolver } from "utils";

const BASE_CLASS_NAME = "col";

const propTypes = {
  /**
   * Inline styles applied
   * to the root
   */
  style: PropTypes.shape({}),

  /**
   * Content rendered inside
   * the component
   */
  children: PropTypes.node.isRequired,

  /**
   * Additional classes applied
   * to the root element
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
   * Controls offset
   */
  offset: PropTypes.oneOfType([
    PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
    PropTypes.shape({
      xs: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
      sm: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
      md: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
      lg: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
      xl: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
      xxl: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
    }),
  ]),
};

const defaultProps = {
  style: null,
  className: null,
  xs: null,
  sm: null,
  md: null,
  lg: null,
  xl: null,
  xxl: null,
};

/**
 * Defines responsive grid columns for building
 * flexible layout structures
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/layout/columns/}
 *
 * @example
 * <Col>One of three columns</Col>
 *
 * @example
 * <Col xs={3} md={4}>
 *  One of three columns
 * </Col>
 *
 * @typedef {import("../../utils/offset").OffsetObject} OffsetObject
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} ColOwnProps
 *
 * @property {1|2|3|4|5|6|7|8|9|10|11|12|"auto"|true} [xs]
 * Sets size for xs (default)
 *
 * @property {1|2|3|4|5|6|7|8|9|10|11|12|"auto"|true} [sm]
 * Sets size for sm
 *
 * @property {1|2|3|4|5|6|7|8|9|10|11|12|"auto"|true} [md]
 * Sets size for md
 *
 * @property {1|2|3|4|5|6|7|8|9|10|11|12|"auto"|true} [lg]
 * Sets size for lg
 *
 * @property {1|2|3|4|5|6|7|8|9|10|11|12|"auto"|true} [xl]
 * Sets size for xl
 *
 * @property {1|2|3|4|5|6|7|8|9|10|11|12|"auto"|true} [xxl]
 * Sets size for xxl
 *
 * @property {0|1|2|3|4|5|6|7|8|9|10|11|OffsetObject} [offset]
 * Controls offset
 *
 * @typedef {PrimeProps & ColOwnProps} ColProps
 *
 * @param {ColProps} props
 *
 * @return {React.ReactElement}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @since 1.0.0
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
    {
      [BASE_CLASS_NAME]: !xs && !sm && !md && !lg && !xl && !xxl,
      [cs(BASE_CLASS_NAME, xs)]: xs,
      [cs("col-sm", sm)]: sm,
      [cs("col-md", md)]: md,
      [cs("col-lg", lg)]: lg,
      [cs("col-xl", xl)]: xl,
      [cs("col-xxl", xxl)]: xxl,
    },
    offsetResolver(offset),
    className,
  );

  return (
    <Prime style={style} className={classes} {...rest}>
      {children}
    </Prime>
  );
}

Col.propTypes = propTypes;
Col.defaultProps = defaultProps;

export default Col;
