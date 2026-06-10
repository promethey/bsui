import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Button } from "components";
import { useDropdownContext } from "./DropdownContext";
import { prefix } from "helpers";
import { Nav } from "components";

const BASE_CLASS_NAME = "dropdown-toggle";

const propTypes = {
  as: PropTypes.elementType,

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
   * Enables split button dropdown behavior
   */
  split: PropTypes.bool,
};

const defaultProps = {
  style: null,
  className: null,
  split: false,
};

/**
 * Toggles the visibility state
 * of the associated dropdown menu.
 *
 * @component
 *
 * @see {@link Prime}
 * @see {@link Button}
 * @see {@link Nav.Link}
 * @see {@link https://getbootstrap.com/docs/5.1/components/dropdowns/}
 *
 * @example
 * <Dropdown.Button>Toggle</Dropdown.Button>
 *
 * @typedef {import("../Button/Button").ButtonProps} ButtonProps
 *
 * @typedef {object} DropdownButtonOwnProps
 *
 * @property {boolean} [split=false]
 * Enables split button dropdown behavior.
 *
 * @typedef {ButtonProps & DropdownButtonOwnProps} DropdownButtonProps
 * @param {DropdownButtonProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function DropdownToggle(props) {
  const {
    as: Component = Button,
    style,
    children,
    className,
    split,
    ...rest
  } = props;

  const { expanded, refs, getReferenceProps } = useDropdownContext();

  const classes = cn(
    BASE_CLASS_NAME,
    {
      show: expanded,
      [prefix(BASE_CLASS_NAME, "split")]: typeof split === "boolean" && split,
    },
    className,
  );

  return (
    <Component
      ref={refs.setReference}
      style={style}
      className={classes}
      {...getReferenceProps({
        /**
         * @param {MouseEvent} event
         */
        onClick(event) {
          event.preventDefault();
        },
      })}
      {...rest}>
      {children}
    </Component>
  );
}

DropdownToggle.propTypes = propTypes;
DropdownToggle.defaultProps = defaultProps;

export default DropdownToggle;
