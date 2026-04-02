import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Text from "components/Text";

// @type {string}
const BASE_CLASS_NAME = "alert-heading";

// @type {Array<string>}
const ALERT_TYPES = ["h1", "h2", "h3", "h4", "h5", "h6"];

// @type {Object}
const propTypes = {
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  children: PropTypes.node.isRequired,
  style: PropTypes.shape({}),
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

// @type {Object}
const defaultProps = {
  as: "h4",
  style: null,
  className: null,
};

function AlertHeadingBase({
  as: ComponentType,
  style,
  children,
  className,
  ...rest
}) {
  // @type {string}
  const classes = classNames(BASE_CLASS_NAME, className);

  return (
    <Text as={ComponentType} className={classes} style={style} {...rest}>
      {children}
    </Text>
  );
}
AlertHeadingBase.propTypes = propTypes;
AlertHeadingBase.defaultProps = defaultProps;

/**
 * AlertHeading is children component of Alert
 * @component
 *
 * @example
 * <AlertHeading>Title</AlertHeading>
 *
 * @example
 * <AlertHeading as="h1">Title H1</AlertHeading>
 *
 * @example
 * <AlertHeading as={AlertHeading.Types.H1}>Title H1</AlertHeading>
 *
 * @example
 * <AlertHeading.H3>Title H3</AlertHeading.H3>
 *
 * @see {@link https://getbootstrap.com/docs/5.3/components/alerts|Bootstrap Documentation}
 *
 * @typedef {Object} AlertHeadingProps
 * @property {'h1'|'h2'|'h3'|'h4'|'h5'|'h6'} as - Change component type
 * @property {React.ReactNode} children - Add children components
 * @property {Object} - Add other CSS styles
 * @property {Object|Array<string>|string} - Add other class names
 * @param {AlertHeadingProps} props
 * @returns {JSX.Element} AlertHeading
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 * @since 1.0.0
 */
const AlertHeading = (props) => <AlertHeadingBase {...props} />;

/**
 * Function for created AlertHeading types
 *
 * @param {string} type - AlertHeading types
 *
 * @example
 * const AlertHeading[h1] = createAlertVariant('h1');
 * Usage in code: <AlertHeading.H1>Title</AlertHeading.H1>;
 *
 * @returns {React.ReactElement} AlertHeading variant
 */
const createAlertHeadingVariant = (type) => {
  const AlertVariant = (props) => <AlertHeadingBase as={type} {...props} />;
  AlertVariant.propTypes = propTypes;
  AlertVariant.defaultProps = { ...defaultProps, as: type };

  return AlertVariant;
};

ALERT_TYPES.forEach((type) => {
  AlertHeading[type.toUpperCase()] = createAlertHeadingVariant(type);
});

AlertHeading.propTypes = propTypes;
AlertHeading.defaultProps = defaultProps;

AlertHeading.Types = ALERT_TYPES.reduce((acc, type) => {
  acc[type.toUpperCase()] = type;
  return acc;
}, {});

export default AlertHeading;
