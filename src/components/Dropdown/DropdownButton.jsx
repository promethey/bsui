import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Button } from "components";
import { useDropdownContext } from "./DropdownContext";
import { prefix } from "helpers";

const BASE_CLASS_NAME = "dropdown-toggle";

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
   * Sets split button dropdowns
   */
  split: PropTypes.bool,
};

const defaultProps = {
  style: null,
  className: null,
  split: false,
};

/**
 * Dropdown button (toggle) component
 * @component
 *
 * @see {@link Prime}
 * @see {@link Button}
 * @see {@link https://getbootstrap.com/docs/5.1/components/dropdowns/}
 *
 * @typedef {import("../Button/Button").ButtonProps} ButtonProps
 *
 * @typedef {object} DropdownButtonOwnProps
 * @property {boolean} [split] - Sets split button dropdowns
 *
 * @typedef {ButtonProps & DropdownButtonOwnProps} DropdownButtonProps
 *
 * @param {DropdownButtonProps} props
 *
 * @returns {React.ReactNode}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function DropdownButton(props) {
  const { style, children, className, split, ...rest } = props;

  const { expanded, dropdownRef, onToggle } = useDropdownContext();

  const classes = cn(
    BASE_CLASS_NAME,
    {
      show: expanded,
      [prefix(BASE_CLASS_NAME, "split")]: typeof split === "boolean" && split,
    },
    className,
  );

  return (
    <Button
      ref={dropdownRef}
      onClick={onToggle}
      className={classes}
      style={style}
      {...rest}>
      {children}
    </Button>
  );
}

DropdownButton.propTypes = propTypes;
DropdownButton.defaultProps = defaultProps;

export default DropdownButton;
