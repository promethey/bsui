// @ts-nocheck
import { ListGroup, Prime, Badge } from "components";

export default {
  title: "Components/ListGroup",
  component: ListGroup,
  subcomponents: {
    "ListGroup.Item": ListGroup.Item,
    Prime,
  },
  parameters: {
    docs: {
      description: {
        component: "Displays a grouped collection of related items.",
      },
    },
  },
};

export function Default() {
  const items = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];

  return (
    <ListGroup style={{ maxWidth: "400px" }}>
      {items.map((item) => (
        <ListGroup.Item>{item}</ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export function Tones() {
  const examples = [
    undefined,
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ];

  return (
    <ListGroup style={{ maxWidth: "400px" }}>
      {examples.map((example) => (
        <ListGroup.Item tone={example}>
          A simple {example} list group item
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export function ActiveItems() {
  const items = [
    "An active item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];

  const activeItems = [0];

  return (
    <ListGroup style={{ maxWidth: "400px" }}>
      {items.map((item, index) => (
        <ListGroup.Item active={activeItems.includes(index)}>
          {item}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
ActiveItems.storyName = "Active items";

export function DisabledItems() {
  const items = [
    "A disabled item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];

  const disabledItems = [0];

  return (
    <ListGroup style={{ maxWidth: "400px" }}>
      {items.map((item, index) => (
        <ListGroup.Item disabled={disabledItems.includes(index)}>
          {item}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
DisabledItems.storyName = "Disabled items";

export function Links() {
  const items = [
    "The current link item",
    "A second link item",
    "A third link item",
    "A fourth link item",
    "A disabled link item",
  ];

  const activeItems = [0];

  const disabledItems = [4];

  return (
    <ListGroup as="div" style={{ maxWidth: "400px" }}>
      {items.map((item, index) => (
        <ListGroup.Item
          as="a"
          to="#"
          active={activeItems.includes(index)}
          disabled={disabledItems.includes(index)}>
          {item}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export function Buttons() {
  const items = [
    "The current link item",
    "A second link item",
    "A third link item",
    "A fourth link item",
    "A disabled link item",
  ];

  const activeItems = [0];

  const disabledItems = [4];

  return (
    <ListGroup as="div" style={{ maxWidth: "400px" }}>
      {items.map((item, index) => (
        <ListGroup.Item
          as="button"
          to="#"
          active={activeItems.includes(index)}
          disabled={disabledItems.includes(index)}>
          {item}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export function Flush() {
  const items = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];

  return (
    <ListGroup flush style={{ maxWidth: "400px" }}>
      {items.map((item) => (
        <ListGroup.Item>{item}</ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export function Numbered() {
  const items = ["A list item", "A list item", "A list item"];

  return (
    <ListGroup numbered style={{ maxWidth: "400px" }}>
      {items.map((item) => (
        <ListGroup.Item>{item}</ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export function NumberedCustom() {
  const items = [
    "Content for list item",
    "Content for list item",
    "Content for list item",
  ];

  return (
    <ListGroup numbered style={{ maxWidth: "400px" }}>
      {items.map((item) => (
        <ListGroup.Item
          d="flex"
          flex={{
            xs: {
              justify: "between",
              align: "start",
            },
          }}>
          <Prime ms={2} me="auto">
            <Prime fw="bold">Subheading</Prime>
            {item}
          </Prime>
          <Badge bg="primary" rounded="pill">
            14
          </Badge>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
NumberedCustom.storyName = "Numbered custom";

export function Horizontal() {
  const examples = [true, "sm", "md", "lg", "xl", "xxl"];

  const items = ["An item", "A second item", "A third item"];

  return examples.map((example) => (
    <ListGroup horizontal={example}>
      {items.map((item) => (
        <ListGroup.Item>{item}</ListGroup.Item>
      ))}
    </ListGroup>
  ));
}
