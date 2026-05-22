import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";
import DropdownButton from "./DropdownButton";
import DropdownMenu from "./DropdownMenu";
import DropdownItem from "./DropdownItem";
import DropdownDivider from "./DropdownDivider";
import { DropdownContext } from "./DropdownContext";

const BASE_CLASS_NAME = "dropdown";

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
 * Dropdown component
 * @component
 *
 * @see {@link Prime}
 * @see {@link https://getbootstrap.com/docs/5.1/components/dropdowns/}
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} DropdownOwnProps
 *
 * @typedef {PrimeProps & DropdownOwnProps} DropdownProps
 *
 * @param {DropdownProps} props
 *
 * @returns {React.ReactNode}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function Dropdown(props) {
  const { style, children, className, ...rest } = props;

  const classes = cn(BASE_CLASS_NAME, className);

  const [show, setShow] = useState(false);

  const dropdownValue = useMemo(
    () => ({
      show,
      onToggle: () => setShow((prev) => !prev),
    }),
    [show],
  );

  return (
    <DropdownContext.Provider value={dropdownValue}>
      <Prime className={classes} style={style} {...rest}>
        {children}
      </Prime>
    </DropdownContext.Provider>
  );
}

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;

Dropdown.Button = DropdownButton;
Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItem;
Dropdown.Divider = DropdownDivider;

export default Dropdown;
