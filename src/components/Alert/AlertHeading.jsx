import PropTypes from "prop-types";
import classNames from "classnames";
import { Prime } from "components";

const BASE_CLASS_NAME = "alert-heading";

const propTypes = {
  /**
   * HTML element type used for rendering
   */
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),

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
  as: "h4",
  style: null,
  className: null,
};

/**
 * Displays a styled heading inside
 * the alert component.
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/alerts/#additional-content}
 *
 * @example
 * <Alert.Heading>
 *  Well done!
 * </Alert.Heading>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {Object} AlertHeadingOwnProps
 *
 * @property {"h1"|"h2"|"h3"|"h4"|"h5"|"h6"} [as]
 * HTML element type used for rendering.
 *
 * @typedef {AlertHeadingOwnProps & PrimeProps} AlertHeadingProps
 *
 * @param {AlertHeadingProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function AlertHeading(props) {
  const { as: Component = "h4", style, children, className, ...rest } = props;

  const classes = classNames(BASE_CLASS_NAME, className);

  return (
    <Prime as={Component} className={classes} style={style} {...rest}>
      {children}
    </Prime>
  );
}

AlertHeading.propTypes = propTypes;
AlertHeading.defaultProps = defaultProps;

export default AlertHeading;
