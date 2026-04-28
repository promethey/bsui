import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { classnames as cs } from "helpers/classnames";

const BASE_CLASS_NAME = "btn-close";

CloseButton.propTypes = {
  style: PropTypes.shape({}),
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  theme: PropTypes.oneOf(["white"]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

CloseButton.defaultProps = {
  style: null,
  className: null,
  theme: null,
  disabled: false,
  onClick: null,
};

function CloseButton({
  style,
  className,
  theme,
  disabled,
  onClick,
  ...rest
}) {
  const classes = classNames(
    BASE_CLASS_NAME,
    { [cs(BASE_CLASS_NAME, theme)]: theme },
    className,
  );

  return (
    <button
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

export default CloseButton;
