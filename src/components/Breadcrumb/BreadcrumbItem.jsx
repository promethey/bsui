import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";
import React from "react";

const BASE_CLASS_NAME = "breadcrumb-item";

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
   * Navigation target for the breadcrumb item
   */
  to: PropTypes.string,

  /**
   * Marks the item as the current page
   */
  active: PropTypes.bool,
};

const defaultProps = {
  style: null,
  className: null,
  to: "#",
  active: false,
};

/**
 * Represents a single breadcrumb navigation item.
 *
 * @component
 *
 * @see {Prime}
 * @see {@link https://getbootstrap.com/docs/5.1/components/breadcrumb/}
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} BreadcrumbItemOwnProps
 *
 * @property {string} [to="#"]
 * Navigation target for the breadcrumb item.
 *
 * @property {boolean} [active=false]
 * Marks the item as the current page.
 *
 * @typedef {BreadcrumbItemOwnProps & PrimeProps} BreadcrumbItemProps
 * @param {BreadcrumbItemProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function BreadcrumbItem(props) {
  const {
    style,
    children,
    className,
    active = false,
    to = "#",
    ...rest
  } = props;

  const classes = cn(BASE_CLASS_NAME, { active: active }, className);

  return (
    <Prime as="li" className={classes} style={style} {...rest}>
      {active ? children : <a href={to}>{children}</a>}
    </Prime>
  );
}

BreadcrumbItem.propTypes = propTypes;
BreadcrumbItem.defaultProps = defaultProps;

export default BreadcrumbItem;
