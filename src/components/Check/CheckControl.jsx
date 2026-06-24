import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";

const BASE_CLASS_NAME = "form-check-input";

const propTypes = {
  /**
   * Inline styles applied to the root element
   */
  style: PropTypes.shape({}),

  /**
   * Additional class names applied to the root element
   */
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

  /**
   * Provides a unique identifier for
   * the underlying form control
   */
  id: PropTypes.string,

  /**
   * Specifies the form field name used
   * during form submission
   */
  name: PropTypes.string,

  /**
   * Determines the control behavior and
   * visual presentation
   */
  type: PropTypes.oneOf(["checkbox", "radio", "switch"]),

  /**
   * Sets the initial checked state when
   * used as an uncontrolled component
   */
  defaultChecked: PropTypes.bool,

  /**
   * Controls the checked state when used
   * as a controlled component
   */
  checked: PropTypes.bool,

  /**
   * Indicates whether the control is non-interactive
   */
  disabled: PropTypes.bool,

  /**
   * Specifies the value submitted when
   * the control is selected
   */
  value: PropTypes.string,

  /**
   * Invoked whenever the checked state changes
   */
  onChange: PropTypes.func,
};

const defaultProps = {
  style: null,
  className: null,
  id: null,
  type: "checkbox",
  name: null,
  defaultChecked: false,
  disabled: false,
  value: null,
  onChange: null,
};

/**
 * Provides the underlying selectable form control
 * used by the Check component.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/forms/checks-radios/}
 *
 * @typedef {object} CheckInputOwnProps
 *
 * @property {string} [id]
 * Provides a unique identifier for the underlying form control.
 *
 * @property {string} [name]
 * Specifies the form field name used during form submission.
 *
 * @property {"checkbox"|"radio"|"switch"} [type="checkbox"]
 * Determines the control behavior and visual presentation.
 *
 * @property {boolean} [defaultChecked=false]
 * Sets the initial checked state when used as an uncontrolled component.
 *
 * @property {boolean} [checked]
 * Controls the checked state when used as a controlled component.
 *
 * @property {boolean} [disabled=false]
 * Indicates whether the control is non-interactive.
 *
 * @property {string} [value]
 * Specifies the value submitted when the control is selected.
 *
 * @property {function} [onChange]
 * Invoked whenever the checked state changes.
 *
 * @typedef {import("../Prime/Prime").PrimeProps & CheckInputOwnProps} CheckInputProps
 *
 * @param {CheckInputProps} props
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function CheckControl(props) {
  const {
    style,
    className,
    id,
    type = "checkbox",
    name,
    defaultChecked = false,
    checked,
    disabled = false,
    value,
    onChange,
    ...rest
  } = props;

  const classes = cn(BASE_CLASS_NAME, className);

  return (
    <Prime
      className={classes}
      style={style}
      id={id}
      as="input"
      type={type}
      name={name}
      defaultChecked={defaultChecked}
      checked={checked}
      disabled={disabled}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
}

CheckControl.propTypes = propTypes;
CheckControl.defaultProps = defaultProps;

export default CheckControl;
