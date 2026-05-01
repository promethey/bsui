import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { classnames as cs } from "helpers/classnames";
import Prime from "components/Prime";
import { is } from "helpers/is";

const CLOSE_BUTTON_CLASS_NAME = "btn-close";

const propTypes = {
  style: PropTypes.shape({}),
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  white: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

const defaultProps = {
  style: null,
  className: null,
  white: false,
  disabled: false,
  onClick: null,
};

/**
 * Close button
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/close-button/}
 *
 * @example
 * <CloseButton />
 * <CloseButton white />
 * <CloseButton disabled />
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function CloseButton(props) {
  const { style, className, white, disabled, onClick, ...rest } = props;

  const classes = cn(
    CLOSE_BUTTON_CLASS_NAME,
    {
      [cs(CLOSE_BUTTON_CLASS_NAME, "white")]: is("boolean", white, {
        notFalse: true,
      }),
    },
    className,
  );

  return (
    <Prime
      as="button"
      type="button"
      className={classes}
      style={style}
      aria-label="Close"
      disabled={disabled}
      onClick={onClick}
      {...rest}
    />
  );
}

CloseButton.propTypes = propTypes;
CloseButton.defaultProps = defaultProps;

export default CloseButton;
