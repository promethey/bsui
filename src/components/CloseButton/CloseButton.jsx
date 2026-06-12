import PropTypes from "prop-types";
import cn from "classnames";
import { prefix } from "helpers";
import { Prime } from "components";

const CLOSE_BUTTON_CLASS_NAME = "btn-close";

const propTypes = {
  /**
   * Inline styles applied to the root
   */
  style: PropTypes.shape({}),

  /**
   * Additional classes applied to the root element
   */
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

  /**
   * Enables the white close button variant
   */
  white: PropTypes.bool,

  /**
   * Disables user interaction
   */
  disabled: PropTypes.bool,

  /**
   * Callback fired when the button is clicked
   */
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
 * Dismisses or closes related content
 * through a compact action control.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/close-button/}
 *
 * @example
 * <CloseButton onClick={(event) => {...}} />
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
 *
 * @property {boolean} [white=false]
 * Enables the white close button variant.
 *
 * @property {boolean} [disabled=false]
 * Disables user interaction.
 *
 * @property {(event: React.MouseEvent<HTMLButtonElement>) => void} [onClick]
 * Callback fired when the button is clicked.
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
      [prefix(CLOSE_BUTTON_CLASS_NAME, "white")]:
        typeof white === "boolean" && white,
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
