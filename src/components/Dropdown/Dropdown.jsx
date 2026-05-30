import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";
import DropdownButton from "./DropdownButton";
import DropdownMenu from "./DropdownMenu";
import DropdownItem from "./DropdownItem";
import DropdownDivider from "./DropdownDivider";
import DropdownText from "./DropdownText";
import DropdownHeader from "./DropdownHeader";
import { DropdownContext } from "./DropdownContext";
import {
  useFloating,
  offset,
  flip,
  shift,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
} from "@floating-ui/react";

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

  /**
   * Sets the dropdown placement direction
   */
  placement: PropTypes.oneOf([
    "top",
    "top-start",
    "top-end",
    "right",
    "right-start",
    "right-end",
    "bottom",
    "bottom-start",
    "bottom-end",
    "left",
    "left-start",
    "left-end",
  ]),

  /**
   * Use CSS transforms to position
   * the floating element
   */
  transform: PropTypes.bool,
};

const defaultProps = {
  style: null,
  className: null,
  placement: "border-start",
  transform: false,
};

/**
 * Toggles and positions contextual
 * overlay menus and interactive actions.
 *
 * @component
 *
 * @see {@link Prime}
 * @see {@link https://getbootstrap.com/docs/5.1/components/dropdowns/}
 * @see {@link https://floating-ui.com/docs/useFloating}
 *
 * @example
 * <Dropdown>
 *  <Dropdown.Button>Toggle</Dropdown.Button>
 *  <Dropdown.Menu>
 *    <Dropdown.Item>Item #1</Dropdown.Item>
 *  </Dropdown.Menu>
 * </Dropdown>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} DropdownOwnProps
 *
 * @property {"top"|"top-start"|"top-end"|"right"|"right-start"|"right-end"|"bottom"|"bottom-start"|"bottom-end"|"left"|"left-start"|"left-end"} [placement]
 * Sets the dropdown placement direction.
 *
 * @property {boolean} [transform=false]
 * Use CSS transforms to position the floating element
 *
 * @typedef {PrimeProps & DropdownOwnProps} DropdownProps
 * @param {DropdownProps} props
 *
 * @returns {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function Dropdown(props) {
  const {
    style,
    children,
    className,
    placement = "bottom-start",
    ...rest
  } = props;

  const classes = cn(BASE_CLASS_NAME, className);

  const [expanded, setExpanded] = useState(false);

  const { refs, context, floatingStyles } = useFloating({
    open: expanded,
    onOpenChange: (nextOpen, event, reason) => {
      setExpanded(nextOpen);
    },

    placement: placement,

    middleware: [offset(4), flip(), shift()],
  });

  const click = useClick(context, {
    enabled: true,
  });

  const dismiss = useDismiss(context, {
    enabled: true,
    escapeKey: true,
    outsidePress: true,
    ancestorScroll: true,
  });

  const role = useRole(context, { role: "menu" });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);

  const dropdownValue = {
    expanded,
    refs,
    floatingStyles,
    getReferenceProps,
    getFloatingProps,
  };

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
Dropdown.Header = DropdownHeader;
Dropdown.Text = DropdownText;

export default Dropdown;
