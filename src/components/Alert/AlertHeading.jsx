import PropTypes from "prop-types";
import classNames from "classnames";
import { Prime } from "components";

const ALERT_HEADING_CLASS_NAME = "alert-heading";

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
 * AlertHeading is children component of Alert
 *
 * @see {@link Prime}
 * @see {@link https://getbootstrap.com/docs/5.1/components/alerts/#additional-content|Official Documentation}
 *
 * @example
 * <AlertHeading>Title</AlertHeading>
 *
 * @example
 * <AlertHeading as="h1">Title H1</AlertHeading>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {Object} AlertHeadingOwnProps
 * @property {"h1"|"h2"|"h3"|"h4"|"h5"|"h6"} [as] - HTML element type used for rendering
 * @property {Object} [style] - Inline styles applied to the root
 * @property {React.ReactNode} [children] - Content rendered inside the component
 * @property {Object|string} [className] - Additional classes applied to the root element
 *
 * @typedef {AlertHeadingOwnProps & PrimeProps} AlertHeadingProps
 *
 * @param {AlertHeadingProps} props
 *
 * @returns {React.ReactNode}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function AlertHeading(props) {
  const { as: Component = "h4", style, children, className, ...rest } = props;

  const classes = classNames(ALERT_HEADING_CLASS_NAME, className);

  return (
    <Prime as={Component} className={classes} style={style} {...rest}>
      {children}
    </Prime>
  );
}

AlertHeading.propTypes = propTypes;
AlertHeading.defaultProps = defaultProps;

export default AlertHeading;
