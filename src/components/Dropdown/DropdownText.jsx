import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";

const BASE_CLASS_NAME = "dropdown-item-text";

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
};

const defaultProps = {
  style: null,
  className: null,
};

/**
 * Renders non-interactive text content inside the dropdown menu,
 * typically used for descriptions or helper information.
 *
 * @component
 *
 * @see {@link Prime}
 * @see {@link https://getbootstrap.com/docs/5.1/components/dropdowns/}
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} DropdownItemTextOwnProps
 *
 * @typedef {PrimeProps & DropdownItemTextOwnProps} DropdownItemTextProps
 * @param {DropdownItemTextProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function DropdownText(props) {
  const { style, children, className, ...rest } = props;

  const classes = cn(BASE_CLASS_NAME, className);

  return (
    <li>
      <Prime as="span" className={classes} style={style} {...rest}>
        {children}
      </Prime>
    </li>
  );
}

DropdownText.propTypes = propTypes;
DropdownText.defaultProps = defaultProps;

export default DropdownText;
