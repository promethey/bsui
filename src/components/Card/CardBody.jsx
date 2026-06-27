import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";

const BASE_CLASS_NAME = "card-body";

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
 * Main content container for card information.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/card/#body}
 *
 * @example
 * <Card.Body>
 *  This is some text within a card body.
 * </Card.Body>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} CardBodyOwnProps
 *
 * @typedef {CardBodyOwnProps & PrimeProps} CardBodyProps
 *
 * @param {CardBodyProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function CardBody(props) {
  const { style, children, className, ...rest } = props;

  const classes = cn(BASE_CLASS_NAME, className);

  return (
    <Prime className={classes} style={style} {...rest}>
      {children}
    </Prime>
  );
}

CardBody.propTypes = propTypes;
CardBody.defaultProps = defaultProps;

export default CardBody;
