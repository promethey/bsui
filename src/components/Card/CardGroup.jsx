import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";

const BASE_CLASS_NAME = "card-group";

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
 * Groups multiple Card components
 * into a unified layout container.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/card/#card-groups}
 *
 * @example
 * <Card.Group>
 *  <Card>...</Card>
 *  <Card>...</Card>
 *  <Card>...</Card>
 * </Card.Group>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} CardGroupOwnProps
 *
 * @typedef {CardGroupOwnProps & PrimeProps} CardGroupProps
 *
 * @param {CardGroupProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @since 1.0.0
 */
function CardGroup(props) {
  const { style, children, className, ...rest } = props;

  const classes = cn(BASE_CLASS_NAME, className);

  return (
    <Prime className={classes} style={style} {...rest}>
      {children}
    </Prime>
  );
}

CardGroup.propTypes = propTypes;
CardGroup.defaultProps = defaultProps;

export default CardGroup;
