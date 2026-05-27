import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";
import { gutterResolver, columnsResolver } from "./utils";

const BASE_CLASS_NAME = "row";

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
   * Defines the number of columns in the row layout
   */
  cols: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, "auto"]),

  /**
   * Controls the gap between columns (both axes)
   */
  g: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),

  /**
   * Controls horizontal gap between columns
   */
  gx: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),

  /**
   * Controls vertical gap between columns
   */
  gy: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
};

const defaultProps = {
  style: null,
  children: null,
  className: null,
  cols: null,
  g: null,
  gx: null,
  gy: null,
};

/**
 * Layout component that defines a horizontal
 * flex/grid row used to structure columns
 * in a responsive grid system.
 *
 * @see {@link Prime}
 * @see {@link https://getbootstrap.com/docs/5.1/layout/grid/}
 *
 * @example
 * <Row flex={{ align: "start" }}>
 *  .row .align-items-start
 * </Row>
 *
 * @example
 * <Row cols={3} g={4}>
 *  .row .row-cols-3 .g-4
 * </Row>
 *
 * @example
 * <Row cols={{ xs: 3, md: 4 }}>
 *  .row .row-cols-3 .row-cols-md-4
 * </Row>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 * @typedef {import("./utils/columns").ColumnsObject} ColumnsObject
 * @typedef {import("./utils/gutter").GutterObject} GutterObject
 *
 * @typedef {object} RowOwnProps
 *
 * @property {1|2|3|4|5|6|7|8|9|10|11|12|"auto"|ColumnsObject} [cols]
 * Defines the number of columns in the row layout.
 *
 * @property {0|1|2|3|4|5|GutterObject} [g]
 * Controls the gap between columns (both axes).
 *
 * @property {0|1|2|3|4|5|GutterObject} [gx]
 * Controls horizontal gap between columns.
 *
 * @property {0|1|2|3|4|5|GutterObject} [gy]
 * Controls vertical gap between columns.
 *
 * @typedef {RowOwnProps & PrimeProps} RowProps
 * @param {RowProps} props
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function Row(props) {
  const { style, children, className, cols, g, gx, gy, ...rest } = props;

  const classes = cn(
    BASE_CLASS_NAME,
    columnsResolver(cols),
    gutterResolver({ g, gx, gy }),
    className,
  );

  return (
    <Prime style={style} className={classes} {...rest}>
      {children}
    </Prime>
  );
}

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
