import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";
import React from "react";
import BreadcrumbItem from "./BreadcrumbItem";

const BASE_CLASS_NAME = "breadcrumb";

const propTypes = {
  /**
   * Inline styles applied
   * to the root
   */
  style: PropTypes.shape({}),

  /**
   * Content rendered inside
   * the component
   */
  children: PropTypes.node.isRequired,

  /**
   * Additional classes applied
   * to the root element
   */
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

  /**
   * Custom separator between
   * breadcrumb items
   */
  divider: PropTypes.string,
};

const defaultProps = {
  style: null,
  className: null,
  divider: "/",
};

/**
 * Displays hierarchical navigation links.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/breadcrumb/}
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} BreadcrumbOwnProps
 *
 * @property {string} [divider="/"]
 * Custom separator between breadcrumb items.
 *
 * @typedef {BreadcrumbOwnProps & PrimeProps} BreadcrumbProps
 *
 * @param {BreadcrumbProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function Breadcrumb(props) {
  const { style, children, className, divider = "/", ...rest } = props;

  const classes = cn(BASE_CLASS_NAME, className);

  const styles = {
    "--bs-breadcrumb-divider": `"${divider}"`,
    ...style,
  };

  return (
    <nav aria-label="breadcrumb">
      <Prime as="ol" className={classes} style={styles} {...rest}>
        {children}
      </Prime>
    </nav>
  );
}

Breadcrumb.propTypes = propTypes;
Breadcrumb.defaultProps = defaultProps;

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
