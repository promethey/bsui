import React from "react";
import PropTypes from "prop-types";
import { Prime } from "components";
import { prefix } from "helpers";
import cn from "classnames";

const BASE_CLASS_NAME = "form-control";

const propTypes = {
  /**
   * Determines the underlying HTML element used for rendering the control
   */
  as: PropTypes.elementType,

  /**
   * Inline styles applied to the root
   */
  style: PropTypes.shape({}),

  /**
   * Additional classes applied to the root element
   */
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

  /**
   * Controlled value of the input or textarea
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Optional title attribute for accessibility and native browser tooltip support
   */
  title: PropTypes.string,

  /**
   * Controls the visual size variant of the control
   */
  size: PropTypes.oneOf(["sm", "lg"]),

  /**
   * Input type (only applicable when `as="input"`)
   */
  type: PropTypes.string,

  /**
   * Placeholder text displayed when the control is empty
   */
  placeholder: PropTypes.string,

  /**
   * Number of visible text rows (only applicable when `as="textarea"`)
   */
  rows: PropTypes.number,

  /**
   * Disables user interaction with the control
   */
  disabled: PropTypes.bool,

  /**
   * Makes the control non-editable while still displaying its value
   */
  readOnly: PropTypes.bool,

  /**
   * Renders the control as plain text instead of an editable field
   */
  plaintext: PropTypes.bool,

  /**
   * Enables multiple value selection
   * (applies to specific input types like file)
   */
  multiple: PropTypes.bool,
};

const defaultProps = {
  as: "input",
  style: null,
  className: null,
  value: null,
  title: null,
  size: null,
  type: "text",
  placeholder: null,
  rows: null,
  disabled: false,
  readOnly: false,
  plaintext: false,
  multiple: false,
};

/**
 * User input components such as input and textarea fields.
 *
 * @component
 *
 * @see {@link Prime}
 * @see {@link https://getbootstrap.com/docs/5.1/forms/form-control/}
 *
 * @example
 * <Control placeholder="name@example.com" />
 *
 * @example
 * <Control as="textarea" rows={3} />
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} ControlOwnProps
 *
 * @property {"input"|"textarea"} [as="input"]
 * Determines the underlying HTML element used for rendering the control.
 *
 * @property {string|number} [value]
 * Controlled value of the input or textarea.
 *
 * @property {string} [title]
 * Optional title attribute for accessibility and native browser tooltip support.
 *
 * @property {"sm"|"lg"} [size]
 * Controls the visual size variant of the control.
 *
 * @property {string} [type="text"]
 * Input type (only applicable when `as="input"`).
 *
 * @property {string} [placeholder]
 * Placeholder text displayed when the control is empty.
 *
 * @property {number} [rows]
 * Number of visible text rows (only applicable when `as="textarea"`).
 *
 * @property {boolean} [disabled=false]
 * Disables user interaction with the control.
 *
 * @property {boolean} [readOnly=false]
 * Makes the control non-editable while still displaying its value.
 *
 * @property {boolean} [plaintext=false]
 * Renders the control as plain text instead of an editable field.
 *
 * @property {boolean} [multiple=false]
 * Enables multiple value selection
 * (applies to specific input types like file).
 *
 * @typedef {PrimeProps & ControlOwnProps} ControlProps
 * @param {ControlProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function Control(props) {
  const {
    as: Component = "input",
    style,
    className,
    value,
    title,
    size,
    type = "text",
    placeholder,
    rows,
    disabled = false,
    readOnly = false,
    plaintext = false,
    multiple = false,
    ...rest
  } = props;

  const classes = cn(
    typeof plaintext === "boolean" && plaintext
      ? prefix(BASE_CLASS_NAME, "plaintext")
      : BASE_CLASS_NAME,
    {
      // "form-control-sm"...
      [prefix(BASE_CLASS_NAME, size)]:
        typeof size === "string" && ["sm", "lg"].includes(size),

      // "form-control-color"
      [prefix(BASE_CLASS_NAME, "color")]: type === "color",
    },
    className,
  );

  const properties = {
    type,
    as: Component,
    className: classes,
    style,
    value,
    title,
    placeholder,
    rows,
    disabled,
    readOnly,
    ...(type === "file" && {
      multiple: multiple,
    }),
    ...rest,
  };

  return <Prime {...properties} />;
}

Control.propTypes = propTypes;
Control.defaultProps = defaultProps;

export default Control;
