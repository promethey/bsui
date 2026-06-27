import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";
import CardGroup from "./CardGroup";
import CardHeader from "./CardHeader";
import CardImage from "./CardImage";
import CardBody from "./CardBody";
import CardTitle from "./CardTitle";
import CardSubtitle from "./CardSubtitle";
import CardText from "./CardText";
import CardLink from "./CardLink";
import CardFooter from "./CardFooter";

const BASE_CLASS_NAME = "card";

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
 * Flexible container for grouping related
 * content, actions, and media.
 *
 * @component
 *
 * @see {@link https://getbootstrap.com/docs/5.1/components/card/}
 *
 * @example
 * <Card style={{ width: "18rem" }}>
 *  <Card.Body>
 *    <Card.Title>Card title</Card.Title>
 *    <Card.Text>
 *      Some quick example text to build on the card title and make up the
 *      bulk of the card&apos;s content.
 *    </Card.Text>
 *  </Card.Body>
 * </Card>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} CardOwnProps
 *
 * @typedef {CardOwnProps & PrimeProps} CardProps
 *
 * @param {CardProps} props
 *
 * @return {React.JSX.Element}
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
Card.Image = CardImage;
Card.Body = CardBody;
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
Card.Text = CardText;
Card.Link = CardLink;
Card.Footer = CardFooter;

export default Card;
