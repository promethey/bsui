import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";
import React from "react";
import ProgressBar from "./ProgressBar";

const BASE_CLASS_NAME = "progress";

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
};

const defaultProps = {
  style: null,
  className: null,
};

/**
 * Progress component
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/progress/}
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} ProgressOwnProps
 * @property {Object} [style] - Inline styles applied to the root.
 * @property {React.ReactNode} [children] - Content rendered inside the component.
 * @property {Object|string} [className] - Additional classes applied to the root element.
 *
 * @typedef {ProgressOwnProps & PrimeProps} ProgressProps
 *
 * @param {ProgressProps} props
 *
 * @return {React.ReactNode}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function Progress(props) {
  const { style, children, className, ...rest } = props;

  const classes = cn(BASE_CLASS_NAME, className);

  return (
    <Prime className={classes} style={style} {...rest}>
      {children}
    </Prime>
  );
}

Progress.propTypes = propTypes;
Progress.defaultProps = defaultProps;

Progress.Bar = ProgressBar;

export default Progress;
