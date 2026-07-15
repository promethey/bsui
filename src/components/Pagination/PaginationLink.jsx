import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";

const BASE_CLASS_NAME = "page-link";

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
  to: PropTypes.string.isRequired,
};

const defaultProps = {
  style: null,
  className: null,
  to: "#",
};

/**
 * Renders a clickable page link
 * inside a pagination item.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/pagination/}
 *
 * @example
 * <Pagination.Link to="/page/2">
 *   2
 * </Pagination.Link>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} PaginationLinkOwnProps
 *
 * @property {string} [to="#"]
 * Destination URL.
 *
 * @typedef {PrimeProps & PaginationLinkOwnProps} PaginationLinkProps
 *
 * @param {PaginationLinkProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @since 1.0.0
 */
function PaginationLink(props) {
  const { style, children, className, to = "#", ...rest } = props;

  const classes = cn(BASE_CLASS_NAME, className);

  return (
    <Prime as="a" href={to} className={classes} style={style} {...rest}>
      {children}
    </Prime>
  );
}

PaginationLink.propTypes = propTypes;
PaginationLink.defaultProps = defaultProps;

export default PaginationLink;
