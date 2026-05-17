import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";
import { gutterResolver, columnsResolver } from "./utils";

const ROW_CLASS_NAME = "row";

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
   * Sets row columns
   */
  cols: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, "auto"]),

  /**
   * Sets gaps between columns
   */
  g: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),

  /**
   * Sets gaps between columns axis-X
   */
  gx: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),

  /**
   * Sets gaps between columns axis-Y
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
 * Row component
 *
 * @see {@link Prime}
 * @see {@link https://getbootstrap.com/docs/5.1/layout/grid/}
 *
 * @example
 * <Row>.row</Row>
 *
 * @example
 * <Row flex={{ align: "start" }}>.row .align-items-start</Row>
 *
 * @example
 * <Row cols={3} g={4}>.row .row-cols-3 .g-4</Row>
 *
 * @example
 * <Row cols={{ xs: 3, md: 4 }}>.row .row-cols-3 .row-cols-md-4</Row>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 * @typedef {import("./utils/columns").ColumnsObject} ColumnsObject
 * @typedef {import("./utils/gutter").GutterObject} GutterObject
 *
 * @typedef {object} RowOwnProps
 * @property {1|2|3|4|5|6|7|8|9|10|11|12|"auto"|ColumnsObject} [cols] - Sets row columns
 * @property {0|1|2|3|4|5|GutterObject} [g] - Sets gaps between columns
 * @property {0|1|2|3|4|5|GutterObject} [gx] - Sets gaps between columns axis-X
 * @property {0|1|2|3|4|5|GutterObject} [gy] - Sets gaps between columns axis-Y
 *
 * @typedef {RowOwnProps & PrimeProps} RowProps
 * @param {RowProps} props
 *
 * @author Sedelkov Egor <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function Row(props) {
  const { style, children, className, cols, g, gx, gy, ...rest } = props;

  const classes = cn(
    ROW_CLASS_NAME,
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
