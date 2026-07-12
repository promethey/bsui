import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";
import ListGroupItem from "./ListGroupItem";
import { prefix, classnames as cs } from "helpers";

const BASE_CLASS_NAME = "list-group";

const propTypes = {
  /**
   * Element type used to
   * render the list group.
   */
  as: PropTypes.elementType,

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

  /**
   * Removes outer borders
   */
  flush: PropTypes.bool,

  /**
   * Displays list group items with numbering
   */
  numbered: PropTypes.bool,

  /**
   * Displays items horizontally at
   * the specified breakpoint
   */
  horizontal: PropTypes.bool,
};

const defaultProps = {
  style: null,
  className: null,
  flush: false,
  numbered: false,
  horizontal: false,
};

/**
 * Displays a grouped collection
 * of related items.
 *
 * @component
 *
 * @see {@link Prime}
 * @see {@link https://getbootstrap.com/docs/5.1/components/list-group/}
 *
 * @example
 * <ListGroup>
 *  <ListGroup.Item>
 *    An item
 *  </ListGroup.Item>
 *  <ListGroup.Item active>
 *    An active item
 *  </ListGroup.Item>
 *  <ListGroup.Item disabled>
 *    A disabled item
 *  </ListGroup.Item>
 * </ListGroup>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} ListGroupOwnProps
 *
 * @property {"ul"|"div"} [as="ul"]
 * Element type used to render the list group.
 *
 * @property {boolean} [flush=false]
 * Removes outer borders.
 *
 * @property {boolean} [numbered=false]
 * Displays list group items with numbering.
 *
 * @property {true|"sm"|"md"|"lg"|"xl"|"xxl"} [horizontal=false]
 * Displays items horizontally at the specified breakpoint.
 *
 * @typedef {PrimeProps & ListGroupOwnProps} ListGroupProps
 *
 * @param {ListGroupProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @since 1.0.0
 */
function ListGroup(props) {
  const {
    as: ComponentType = "ul",
    style,
    children,
    className,
    flush = false,
    numbered = false,
    horizontal = false,
    ...rest
  } = props;

  const classes = cn(
    BASE_CLASS_NAME,
    {
      [prefix(BASE_CLASS_NAME, "flush")]: typeof flush === "boolean" && flush,
      [prefix(BASE_CLASS_NAME, "numbered")]:
        typeof numbered === "boolean" && numbered,
      [cs(`${BASE_CLASS_NAME}-horizontal`, horizontal)]: [
        true,
        "sm",
        "md",
        "lg",
        "xl",
        "xxl",
      ].includes(horizontal),
    },
    className,
  );

  const getComponentType = () => {
    return numbered ? "ol" : ComponentType;
  };

  return (
    <Prime as={getComponentType()} className={classes} style={style} {...rest}>
      {children}
    </Prime>
  );
}

ListGroup.propTypes = propTypes;
ListGroup.defaultProps = defaultProps;

ListGroup.Item = ListGroupItem;

export default ListGroup;
