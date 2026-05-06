import PropTypes from "prop-types";
import cn from "classnames";
import { classnames as cs } from "helpers";
import { Prime } from "components";

const BASE_CLASS_NAME = "progress-bar";

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
   * Edit value now
   * Alias for HTML attribute *aria-valuenow*
   */
  now: PropTypes.number,

  /**
   * Edit value min
   * Alias for HTML attribute *aria-valuemin*
   */
  min: PropTypes.number,

  /**
   * Edit value max
   * Alias for HTML attribute *aria-valuemax*
   */
  max: PropTypes.number,

  /**
   * Displayed current progress percent
   */
  displayedPercent: PropTypes.bool,

  /**
   * Activate striped design
   */
  striped: PropTypes.bool,

  /**
   * Activate animate striped
   */
  animated: PropTypes.bool,
};

const defaultProps = {
  style: null,
  children: null,
  className: null,
  now: 0,
  min: 0,
  max: 0,
  displayedPercent: false,
  striped: false,
  animated: false,
};

/**
 * Progress bar component
 * @component
 *
 * @see {Prime}
 * @see {@link https://getbootstrap.com/docs/5.1/components/progress/|Official Documentation}
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} ProgressBarOwnProps
 * @property {Object} [style] - Inline styles applied to the root.
 * @property {React.ReactNode} [children] - Content rendered inside the component.
 * @property {Object|string} [className] - Additional classes applied to the root element.
 *
 * @property {number} [min] - Progress min value
 * @property {number} [max] - Progress max value
 * @property {number} [now] - Progress now value
 *
 * @property {boolean} [displayedPercent] - Add label with percantage
 * @property {boolean} [striped] - Sets striped design
 * @property {boolean} [animated] - Sets animated striped design
 *
 * @typedef {ProgressBarOwnProps & PrimeProps} ProgressBarProps
 *
 * @param {ProgressBarProps} props
 *
 * @return {React.ReactNode}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function ProgressBar(props) {
  const {
    style,
    children,
    className,
    now = 0,
    min = 0,
    max = 0,
    displayedPercent,
    striped,
    animated,
    ...rest
  } = props;

  const classes = cn(
    BASE_CLASS_NAME,
    {
      [cs(BASE_CLASS_NAME, "striped")]: striped,
      [cs(BASE_CLASS_NAME, "animated")]: animated,
    },
    className,
  );

  const progressPercent = `${(((max - min) / 100) * now).toString()}%`;

  return (
    <Prime
      className={classes}
      style={{ ...style, width: progressPercent }}
      role="progressbar"
      aria-valuenow={now}
      aria-valuemin={min}
      aria-valuemax={max}
      {...rest}>
      {displayedPercent ? progressPercent : children}
    </Prime>
  );
}

ProgressBar.propTypes = propTypes;
ProgressBar.defaultProps = defaultProps;

export default ProgressBar;
