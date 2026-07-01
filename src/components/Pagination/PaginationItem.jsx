import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";
import PaginationLink from "./PaginationLink";

const BASE_CLASS_NAME = "page-item";

const propTypes = {
  /**
   * Inline styles applied
   * to the root element
   */
  style: PropTypes.shape({}),

  /**
   * Content rendered inside
   * the component
   */
  children: PropTypes.node.isRequired,

  /**
   * Additional class names applied
   * to the root element
   */
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

  /**
   * Destination URL
   */
  to: PropTypes.string,

  /**
   * Indicates the current page
   */
  active: PropTypes.bool,

  /**
   * Prevents user interaction
   */
  disabled: PropTypes.bool,
};

const defaultProps = {
  style: null,
  className: null,
  to: "#",
  active: false,
  disabled: false,
};

/**
 * Represents a single page item
 * within a pagination component.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/pagination/}
 *
 * @example
 * <Pagination.Item active>
 *   <Pagination.Link>1</Pagination.Link>
 * </Pagination.Item>
 *
 * @typedef {object} PaginationItemOwnProps
 *
 * @property {string} [to="#"]
 * Destination URL.
 *
 * @property {boolean} [active=false]
 * Indicates the current page.
 *
 * @property {boolean} [disabled=false]
 * Prevents user interaction.
 *
 * @typedef {import("../Prime/Prime").PrimeProps & PaginationItemOwnProps} PaginationItemProps
 *
 * @param {PaginationItemProps} props
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function PaginationItem(props) {
  const {
    style,
    children,
    className,
    to = "#",
    active = false,
    disabled = false,
    ...rest
  } = props;

  const classes = cn(
    BASE_CLASS_NAME,
    {
      active: typeof active === "boolean" && active,
      disabled: typeof disabled === "boolean" && disabled,
    },
    className,
  );

  return (
    <Prime as="li" className={classes} style={style} {...rest}>
      {to ? <PaginationLink to={to}>{children}</PaginationLink> : children}
    </Prime>
  );
}

PaginationItem.propTypes = propTypes;
PaginationItem.defaultProps = defaultProps;

export default PaginationItem;
