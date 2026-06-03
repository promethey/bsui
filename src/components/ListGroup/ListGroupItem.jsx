import PropTypes from "prop-types";
import cn from "classnames";
import { Prime } from "components";
import { prefix } from "helpers";

const BASE_CLASS_NAME = "list-group-item";

const propTypes = {
  /**
   * Element type used to render the list group item.
   */
  as: PropTypes.elementType,

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

  /**
   * Navigation target for link-based items
   */
  to: PropTypes.string,

  /**
   * Visual tone applied to the item
   */
  tone: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ]),

  /**
   * Marks the item as active
   */
  active: PropTypes.bool,

  /**
   * Disables user interaction with the item
   */
  disabled: PropTypes.bool,
};

const defaultProps = {
  style: null,
  className: null,
  tone: null,
  active: false,
  disabled: false,
};

/**
 * Displays an individual item within a list group.
 *
 * @component
 *
 * @see {@link Prime}
 * @see {@link https://getbootstrap.com/docs/5.1/components/list-group/}
 *
 * @example
 * <ListGroup.Item>An item</ListGroup.Item>
 *
 * @typedef {import("../Prime/Prime").PrimeProps} PrimeProps
 *
 * @typedef {object} ListGroupOwnProps
 *
 * @property {"li"|"a"|"button"} [as="li"]
 * Element type used to render the list group item.
 *
 * @property {string} [to="#"]
 * Navigation target for link-based items.
 *
 * @property {"primary"|"secondary"|"success"|"danger"|"warning"|"info"|"light"|"dark"} [tone]
 * Visual tone applied to the item.
 *
 * @property {boolean} [active=false]
 * Marks the item as active.
 *
 * @property {boolean} [disabled=false]
 * Disables user interaction with the item.
 *
 * @typedef {PrimeProps & ListGroupOwnProps} ListGroupProps
 * @param {ListGroupProps} props
 *
 * @return {React.JSX.Element}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
function ListGroupItem(props) {
  const {
    as: ComponentType = "li",
    style,
    children,
    className,
    to = "#",
    tone,
    active,
    disabled,
    ...rest
  } = props;

  const classes = cn(
    BASE_CLASS_NAME,
    {
      [prefix(BASE_CLASS_NAME, tone)]:
        typeof tone === "string" &&
        [
          "primary",
          "secondary",
          "success",
          "danger",
          "warning",
          "info",
          "light",
          "dark",
        ].includes(tone),
      active: typeof active === "boolean" && active && !disabled,
      disabled:
        typeof disabled === "boolean" &&
        disabled &&
        !active &&
        ComponentType !== "button",
      "list-group-item-action": ["a", "button"].includes(ComponentType),
    },
    className,
  );

  const properties = {
    as: ComponentType,
    className: classes,
    style: style,
    ...rest,

    ...(ComponentType === "a" && {
      href: to,
    }),

    ...(ComponentType === "button" && {
      type: "button",
      disabled,
    }),
  };

  return <Prime {...properties}>{children}</Prime>;
}

ListGroupItem.propTypes = propTypes;
ListGroupItem.defaultProps = defaultProps;

export default ListGroupItem;
