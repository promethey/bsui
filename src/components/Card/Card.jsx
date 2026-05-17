import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";
import CardGroup from "./CardGroup";
import CardHeader from "./CardHeader";
import CardImg from "./CardImg";
import CardBody from "./CardBody";
import CardTitle from "./CardTitle";
import CardSubtitle from "./CardSubtitle";
import CardText from "./CardText";
import CardLink from "./CardLink";
import CardFooter from "./CardFooter";

const BASE_CLASS_NAME = "card";

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
};

const defaultProps = {
  style: null,
  className: null,
};

/**
 * Card component
 * @component
 *
 * @see {@link Prime}
 * @see {@link https://getbootstrap.com/docs/5.1/components/card/|Official Documentation}
 *
 * Subcomponents:
 * - Header
 * - Image
 * - Body
 * - Title
 * - Subtitle
 * - Text
 * - Link
 * - Footer
 * - Group
 *
 * @typedef {object} CardOwnProps
 *
 * @typedef {CardOwnProps & import("../Prime/Prime").PrimeProps} CardProps
 *
 * @param {CardProps} props
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function Card(props) {
  const { style, children, className, ...rest } = props;

  const classes = cn(BASE_CLASS_NAME, className);

  return (
    <Prime className={classes} style={style} {...rest}>
      {children}
    </Prime>
  );
}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

Card.Group = CardGroup;
Card.Header = CardHeader;
Card.Img = CardImg;
Card.Body = CardBody;
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
Card.Text = CardText;
Card.Link = CardLink;
Card.Footer = CardFooter;

export default Card;
