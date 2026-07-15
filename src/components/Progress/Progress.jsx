import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";
import React from "react";
import ProgressBar from "./ProgressBar";

const BASE_CLASS_NAME = "progress";

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
};

const defaultProps = {
  style: null,
  className: null,
};

/**
 * Visual indicator component
 * that displays task completion
 * progress.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/progress/}
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} ProgressOwnProps
 *
 * @typedef {ProgressOwnProps & PrimeProps} ProgressProps
 *
 * @param {ProgressProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @since 1.0.0
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
