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
   * Minimum progress value
   */
  min: PropTypes.number,

  /**
   * Maximum progress value
   */
  max: PropTypes.number,

  /**
   * Current progress value
   */
  now: PropTypes.number,

  /**
   * Displays progress percentage label
   */
  displayedPercent: PropTypes.bool,

  /**
   * Applies striped visual style
   */
  striped: PropTypes.bool,

  /**
   * Enables animated striped effect
   */
  animated: PropTypes.bool,
};

const defaultProps = {
  style: null,
  children: null,
  className: null,
  now: 0,
  min: 0,
  max: 100,
  displayedPercent: false,
  striped: false,
  animated: false,
};

/**
 * Internal visual segment used to render
 * the filled portion of Progress.
 *
 * @component
 *
 * @see {Prime}
 * @see {@link https://getbootstrap.com/docs/5.1/components/progress/}
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} ProgressBarOwnProps
 *
 * @property {number} [min=0]
 * Minimum progress value.
 *
 * @property {number} [max=100]
 * Maximum progress value.
 *
 * @property {number} [now=0]
 * Current progress value.
 *
 * @property {boolean} [displayedPercent=false]
 * Displays progress percentage label.
 *
 * @property {boolean} [striped=false]
 * Applies striped visual style.
 *
 * @property {boolean} [animated=false]
 * Enables animated striped effect.
 *
 * @typedef {ProgressBarOwnProps & PrimeProps} ProgressBarProps
 * @param {ProgressBarProps} props
 *
 * @return {React.JSX.Element}
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
    max = 100,
    displayedPercent = false,
    striped = false,
    animated = false,
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
