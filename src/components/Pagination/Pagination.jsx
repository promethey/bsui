import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";
import { prefix } from "helpers";
import PaginationItem from "./PaginationItem";
import PaginationLink from "./PaginationLink";

const BASE_CLASS_NAME = "pagination";

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
   * Controls the size of the
   * pagination component
   */
  size: PropTypes.oneOf(["sm", "lg"]),
};

const defaultProps = {
  style: null,
  className: null,
  size: null,
};

/**
 * Displays navigation links for
 * paginated content.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/pagination/}
 *
 * @example
 * <Pagination>
 *   <Pagination.Item active>
 *     <Pagination.Link>1</Pagination.Link>
 *   </Pagination.Item>
 *   <Pagination.Item>
 *     <Pagination.Link>2</Pagination.Link>
 *   </Pagination.Item>
 * </Pagination>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} PaginationOwnProps
 *
 * @property {"sm"|"lg"} [size]
 * Controls the size of the pagination component.
 *
 * @typedef {PrimeProps & PaginationOwnProps} PaginationProps
 *
 * @param {PaginationProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @since 1.0.0
 */
function Pagination(props) {
  const { style, children, className, size, ...rest } = props;

  const classes = cn(
    BASE_CLASS_NAME,
    {
      [prefix(BASE_CLASS_NAME, size)]:
        typeof size === "string" && ["sm", "lg"].includes(size),
    },
    className,
  );

  return (
    <Prime as="ul" className={classes} style={style} {...rest}>
      {children}
    </Prime>
  );
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

Pagination.Item = PaginationItem;
Pagination.Link = PaginationLink;

export default Pagination;
