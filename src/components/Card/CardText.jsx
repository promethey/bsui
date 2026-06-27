import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";

const BASE_CLASS_NAME = "card-text";

const propTypes = {
  /**
   * Inline styles applied
   * to the root
   */
  style: PropTypes.shape({}),

  /**
   * Content rendered inside
   * the component
   */
  children: PropTypes.node.isRequired,

  /**
   * Additional classes applied
   * to the root element
   */
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

const defaultProps = {
  style: null,
  className: null,
};

/**
 * Renders the main text content inside
 * the Card component.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/card/#titles-text-and-links}
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} CardTextOwnProps
 *
 * @typedef {CardTextOwnProps & PrimeProps} CardTextProps
 *
 * @param {CardTextProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function CardText(props) {
  const { style, children, className, ...rest } = props;

  const classes = cn(BASE_CLASS_NAME, className);

  return (
    <Prime as="p" className={classes} style={style} {...rest}>
      {children}
    </Prime>
  );
}

CardText.propTypes = propTypes;
CardText.defaultProps = defaultProps;

export default CardText;
