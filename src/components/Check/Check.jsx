import PropTypes from "prop-types";
import cn from "classnames";
import { prefix } from "helpers";
import { Prime } from "components";
import CheckControl from "./CheckControl";
import CheckLabel from "./CheckLabel";
import { useId } from "react";

const BASE_CLASS_NAME = "form-check";

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
   * Defines the text label associated
   * with the control
   */
  label: PropTypes.string.isRequired,

  /**
   * Specifies the form field name used
   * during form submission
   */
  name: PropTypes.string,

  /**
   * Determines the control behavior
   * and visual presentation
   */
  type: PropTypes.oneOf(["checkbox", "radio", "switch"]),

  /**
   * Sets the initial checked state when
   * used as an uncontrolled component
   */
  defaultChecked: PropTypes.bool,

  /**
   * Controls the checked state when
   * used as a controlled component
   */
  checked: PropTypes.bool,

  /**
   * Indicates whether the control
   * is non-interactive.
   */
  disabled: PropTypes.bool,

  /**
   * Specifies the value submitted when
   * the control is selected
   */
  value: PropTypes.string,

  /**
   * Invoked whenever the checked
   * state changes
   */
  onChange: PropTypes.func,

  /**
   * Renders the control inline with
   * adjacent controls
   */
  inline: PropTypes.bool,
};

const defaultProps = {
  id: null,
  style: null,
  className: null,
  name: null,
  type: "checkbox",
  defaultChecked: false,
  disabled: false,
  value: null,
  onChange: null,
  inline: false,
};

/**
 * Renders a checkbox, radio button, or switch control
 * with an associated label and Bootstrap styling.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/forms/checks-radios/}
 *
 * @example
 * <Check label="Default checkbox" />
 *
 * @exampleCheck component
 * <Check label="Default checked checkbox" defaultChecked />
 *
 * @typedef {object} CheckOwnProps
 *
 * @property {string} [id]
 * Provides a unique identifier for the underlying form control.
 *
 * @property {string} label
 * Defines the text label associated with the control.
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
 * @property {boolean} [inline=false]
 * Renders the control inline with adjacent controls.
 *
 * @typedef {import("../Prime/Prime").PrimeProps & CheckOwnProps} CheckProps
 *
 * @param {CheckProps} props
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function Check(props) {
  const {
    style,
    className,
    id,
    label,
    name,
    type = "checkbox",
    defaultChecked,
    checked,
    disabled,
    value,
    onChange,
    inline = false,
    ...rest
  } = props;

  const classes = cn(
    BASE_CLASS_NAME,
    {
      "form-switch": type === "switch",
      [prefix(BASE_CLASS_NAME, "inline")]:
        typeof inline === "boolean" && inline,
    },
    className,
  );

  const generatedId = useId();

  const controlId = id ?? generatedId;

  return (
    <Prime className={classes} style={style} {...rest}>
      <CheckControl
        id={controlId}
        type={type === "switch" ? "checkbox" : type}
        name={name}
        defaultChecked={defaultChecked}
        checked={checked}
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
      <CheckLabel htmlFor={controlId}>{label}</CheckLabel>
    </Prime>
  );
}

Check.propTypes = propTypes;
Check.defaultProps = defaultProps;

export default Check;
