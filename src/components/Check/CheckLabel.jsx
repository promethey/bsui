import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";

const BASE_CLASS_NAME = "form-check-label";

const propTypes = {
  /**
   * Inline styles applied to the root element
   */
  style: PropTypes.shape({}),

  /**
   * Content rendered inside the component
   */
  children: PropTypes.node.isRequired,

  /**
   * Additional class names applied to the root element
   */
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

  /**
   * Associates the label with a form control by its id
   */
  htmlFor: PropTypes.string,
};

const defaultProps = {
  style: null,
  className: null,
  htmlFor: null,
};

/**
 * Displays the label associated
 * with a Check control.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/forms/checks-radios/}
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} CheckLabelOwnProps
 *
 * @property {string} [htmlFor]
 * Associates the label with a form control by its id.
 *
 * @typedef {PrimeProps & CheckLabelOwnProps} CheckLabelProps
 *
 * @param {CheckLabelProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @since 1.0.0
 */
function CheckLabel(props) {
  const { style, children, className, htmlFor, ...rest } = props;

  const classes = cn(BASE_CLASS_NAME, className);

  return (
    <Prime
      as="label"
      className={classes}
      style={style}
      htmlFor={htmlFor}
      {...rest}>
      {children}
    </Prime>
  );
}

CheckLabel.propTypes = propTypes;
CheckLabel.defaultProps = defaultProps;

export default CheckLabel;
