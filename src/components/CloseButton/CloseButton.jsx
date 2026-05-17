import PropTypes from "prop-types";
import cn from "classnames";
import { classnames as cs, is } from "helpers";
import { Prime } from "components";

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
 *
 * @example
 * <CloseButton white />
 *
 * @example
 * <CloseButton disabled />
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} CloseButtonOwnProps
 * @property {boolean} [white] - Sets white variant
 * @property {boolean} [disabled] - Sets disabled state
 * @property {() => void} [onClick] - Click handler callback
 *
 * @typedef {PrimeProps & CloseButtonOwnProps} CloseButtonProps
 * @param {CloseButtonProps} props
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
