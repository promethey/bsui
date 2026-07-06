import PropTypes from "prop-types";
import { Prime } from "components";
import {
  Label,
  Control,
  Check,
  Range,
  Select,
  FloatingLabel,
  InputGroup,
} from "components";

const propTypes = {
  /**
   * Inline styles applied
   * to the root element.
   */
  style: PropTypes.shape({}),

  /**
   * Content rendered inside
   * the component.
   */
  children: PropTypes.node.isRequired,

  /**
   * Additional class names applied
   * to the root element.
   */
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

  /**
   * URL where the form data
   * is submitted.
   */
  action: PropTypes.string,

  /**
   * HTTP method used to
   * submit the form.
   */
  method: PropTypes.oneOf(["get", "post", "dialog"]),

  /**
   * Encoding type used
   * when submitting the form.
   */
  encType: PropTypes.oneOf([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain",
  ]),

  /**
   * Browsing context where
   * the response is displayed.
   */
  target: PropTypes.string,

  /**
   * Character encodings
   * accepted by the server.
   */
  acceptCharset: PropTypes.string,

  /**
   * Enables or disables
   * browser autocomplete.
   */
  autoComplete: PropTypes.string,

  /**
   * Name of the form.
   */
  name: PropTypes.string,

  /**
   * Disables native browser
   * validation.
   */
  noValidate: PropTypes.bool,

  /**
   * Called when the form
   * is submitted.
   */
  onSubmit: PropTypes.func,

  /**
   * Called when the form
   * is reset.
   */
  onReset: PropTypes.func,
};

const defaultProps = {
  style: null,
  className: null,
  action: null,
  method: "get",
  encType: "application/x-www-form-urlencoded",
  target: null,
  acceptCharset: null,
  autoComplete: null,
  name: null,
  noValidate: false,
  onSubmit: null,
  onReset: null,
};

/**
 * Provides a wrapper around the native HTML <form>
 * element and groups related form controls.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/forms/overview/}
 *
 * @example
 * <Form onSubmit={handleSubmit}>
 *   <Form.Label htmlFor="email">
 *     Email
 *   </Form.Label>
 *   <Form.Control
 *     id="email"
 *     placeholder="Enter email"
 *   />
 *   <Button type="submit">
 *     Submit
 *   </Button>
 * </Form>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} FormOwnProps
 *
 * @property {string} [action]
 * URL where the form data
 * is submitted.
 *
 * @property {"get"|"post"|"dialog"} [method]
 * HTTP method used to
 * submit the form.
 *
 * @property {"application/x-www-form-urlencoded"|"multipart/form-data"|"text/plain"} [encType]
 * Encoding type used when
 * submitting the form.
 *
 * @property {string} [target]
 * Browsing context where the
 * response is displayed.
 *
 * @property {string} [acceptCharset]
 * Character encodings accepted
 * by the server.
 *
 * @property {string} [autoComplete]
 * Enables or disables
 * browser autocomplete.
 *
 * @property {string} [name]
 * Name of the form.
 *
 * @property {boolean} [noValidate=false]
 * Disables native browser validation.
 *
 * @property {(event: React.FormEvent<HTMLFormElement>) => void} [onSubmit]
 * Called when the form is submitted.
 *
 * @property {(event: React.FormEvent<HTMLFormElement>) => void} [onReset]
 * Called when the form is reset.
 *
 * @typedef {PrimeProps & FormOwnProps} FormProps
 *
 * @param {FormProps} props
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @since 1.0.0
 */
function Form(props) {
  const {
    style,
    children,
    className,
    action,
    method = "get",
    encType = "application/x-www-form-urlencoded",
    target,
    acceptCharset,
    autoComplete,
    name,
    noValidate,
    onSubmit,
    onReset,
    ...rest
  } = props;

  return (
    <Prime
      as="form"
      className={className}
      style={style}
      action={action}
      method={method}
      encType={encType}
      target={target}
      acceptCharset={acceptCharset}
      autoComplete={autoComplete}
      name={name}
      noValidate={noValidate}
      onSubmit={onSubmit}
      onReset={onReset}
      {...rest}>
      {children}
    </Prime>
  );
}

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

Form.Label = Label;
Form.Control = Control;
Form.Check = Check;
Form.Range = Range;
Form.Select = Select;
Form.FloatingLabel = FloatingLabel;
Form.InputGroup = InputGroup;

export default Form;
