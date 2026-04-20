import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "helpers/prefix";

const BASE_CLASS_NAME = "btn-close";

CloseButton.propTypes = {
  style: PropTypes.shape({}),
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  theme: PropTypes.oneOf(["white"]),
  dataDismiss: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
};

CloseButton.defaultProps = {
  style: null,
  className: null,
  theme: null,
  dataDismiss: null,
  isDisabled: false,
  onClick: null,
};

function CloseButton({
  style,
  className,
  theme,
  dataDismiss,
  isDisabled,
  onClick,
  ...rest
}) {
  const classes = classNames(
    BASE_CLASS_NAME,
    { [prefix(BASE_CLASS_NAME, theme)]: theme },
    className,
  );

  return (
    <button
      type="button"
      className={classes}
      style={style}
      aria-label="Close"
      disabled={isDisabled}
      data-bs-dismiss={dataDismiss}
      onClick={onClick}
      {...rest}
    />
  );
}

export default CloseButton;
