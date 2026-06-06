import PropTypes from "prop-types";
import { Prime } from "components";
import cn from "classnames";
import { prefix } from "helpers";
import React from "react";

const BASE_CLASS_NAME = {
  border: "spinner-border",
  grow: "spinner-grow",
};

const propTypes = {
  /**
   * Inline styles applied to the root
   */
  style: PropTypes.shape({}),

  /**
   * Additional classes applied to the root element
   */
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

  view: PropTypes.oneOf(["border", "grow"]),
  size: PropTypes.oneOf(["sm", "lg"]),
};

const defaultProps = {
  style: null,
  className: null,
  view: "border",
  size: null,
};

/**
 * Indicates loading, processing, or background activity.
 *
 * @component
 *
 * @see {@link Prime}
 * @see {@link https://getbootstrap.com/docs/5.1/components/spinners/}
 *
 * @example
 * <Spinner />
 *
 * @example
 * <Spinner text="primary" />
 *
 * @example
 * <Spinner text="danger" size="sm" />
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} SpinnerOwnProps
 * @property {"border"|"grow"} [view="border"]
 * @property {"sm"|"lg"} [size]
 *
 * @typedef {PrimeProps & SpinnerOwnProps} SpinnerProps
 * @param {SpinnerProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function Spinner(props) {
  const { style, className, view = "border", size, ...rest } = props;

  const classes = cn(
    BASE_CLASS_NAME[view],
    {
      // 'spinner-(border|grow)-sm' or 'spinner-(border|grow)-lg'
      [prefix("spinner", view, size)]:
        typeof size === "string" && ["sm", "lg"].includes(size),
    },
    className,
  );

  return (
    <Prime className={classes} style={style} role="status" {...rest}>
      <span className="visually-hidden">Loading...</span>
    </Prime>
  );
}

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;

export default Spinner;
