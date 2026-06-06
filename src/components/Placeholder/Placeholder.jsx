import PropTypes from "prop-types";
import { Prime } from "components";
import cn from "classnames";
import { prefix } from "helpers";
import React from "react";
import PlaceholderGlow from "./PlaceholderGlow";
import PlaceholderWave from "./PlaceholderWave";

const BASE_CLASS_NAME = "placeholder";

const propTypes = {
  /**
   * Inline styles applied to the root
   */
  style: PropTypes.shape({}),

  /**
   * Additional classes applied to the root element
   */
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

  /**
   * Width of the placeholder based
   * on the Bootstrap grid scale (1–12)
   */
  col: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

  /**
   * Controls the visual size variant of the placeholder.
   */
  size: PropTypes.oneOf(["xs", "sm", "lg"]),
};

const defaultProps = {
  style: null,
  className: null,
  col: null,
  size: null,
};

/**
 * Displays a skeleton placeholder that represents content
 * before it has been loaded.
 *
 * @component
 *
 * @see {@link Prime}
 * @see {@link https://getbootstrap.com/docs/5.1/components/placeholders/}
 *
 * @example
 * <Placeholder />
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} PlaceholderOwnProps
 *
 * @property {number} [col]
 * Width of the placeholder based on the Bootstrap grid scale (1–12).
 *
 * @property {"xs"|"sm"|"lg"} [size]
 * Controls the visual size variant of the placeholder.
 *
 * @typedef {PrimeProps & PlaceholderOwnProps} PlaceholderProps
 * @param {PlaceholderProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function Placeholder(props) {
  const { style, className, col, size, ...rest } = props;

  const classes = cn(
    BASE_CLASS_NAME,
    {
      // 'col-6'...
      [prefix("col", col)]:
        typeof col === "number" &&
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(col),

      // 'placeholder-lg'...
      [prefix(BASE_CLASS_NAME, size)]:
        typeof size === "string" && ["xs", "sm", "lg"].includes(size),
    },
    className,
  );

  return <Prime role="span" className={classes} style={style} {...rest} />;
}

Placeholder.propTypes = propTypes;
Placeholder.defaultProps = defaultProps;

Placeholder.Glow = PlaceholderGlow;
Placeholder.Wave = PlaceholderWave;

export default Placeholder;
