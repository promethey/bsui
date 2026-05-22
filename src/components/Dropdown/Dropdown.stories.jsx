// @ts-nocheck
import { Dropdown, Button, ButtonGroup, Prime } from "components";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  subcomponents: {
    "Dropdown.Button": Dropdown.Button,
    "Dropdown.Menu": Dropdown.Menu,
    "Dropdown.Item": Dropdown.Item,
    Button,
    Prime,
  },
  parameters: {
    docs: {
      description: {
        component:
          "A toggleable overlay menu component for displaying contextual actions, navigation, and interactive content.",
      },
    },
  },
};

export function Default() {
  return (
    <Dropdown>
      <Dropdown.Button theme="secondary">Dropdown button</Dropdown.Button>
      <Dropdown.Menu>
        <Dropdown.Item>Action</Dropdown.Item>
        <Dropdown.Item>Another action</Dropdown.Item>
        <Dropdown.Item>Something else here</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export function Themes() {
  const examples = [
    "Primary",
    "Secondary",
    "Success",
    "Info",
    "Warning",
    "Danger",
  ];

  return (
    <Prime d="flex">
      {examples.map((theme) => (
        <Dropdown me={2}>
          <Dropdown.Button theme={theme.toLowerCase()}>{theme}</Dropdown.Button>
          <Dropdown.Menu>
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ))}
    </Prime>
  );
}

export function Split() {
  const examples = [
    "Primary",
    "Secondary",
    "Success",
    "Info",
    "Warning",
    "Danger",
  ];

  return (
    <Prime d="flex">
      {examples.map((theme) => (
        <Dropdown as={ButtonGroup} me={2}>
          <Button theme={theme.toLowerCase()}>{theme}</Button>
          <Dropdown.Button theme={theme.toLowerCase()} split></Dropdown.Button>
          <Dropdown.Menu>
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ))}
    </Prime>
  );
}

export function Large() {
  return (
    <Prime d="flex">
      <Dropdown me={2}>
        <Dropdown.Button theme="secondary" size="lg">
          Large button
        </Dropdown.Button>
        <Dropdown.Menu>
          <Dropdown.Item>Action</Dropdown.Item>
          <Dropdown.Item>Another action</Dropdown.Item>
          <Dropdown.Item>Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Separated link</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown as={ButtonGroup}>
        <Button theme="secondary" size="lg">
          Large split button
        </Button>
        <Dropdown.Button theme="secondary" size="lg" />
        <Dropdown.Menu>
          <Dropdown.Item>Action</Dropdown.Item>
          <Dropdown.Item>Another action</Dropdown.Item>
          <Dropdown.Item>Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Separated link</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Prime>
  );
}

export function Small() {
  return (
    <Prime d="flex">
      <Dropdown me={2}>
        <Dropdown.Button theme="secondary" size="sm">
          Small button
        </Dropdown.Button>
        <Dropdown.Menu>
          <Dropdown.Item>Action</Dropdown.Item>
          <Dropdown.Item>Another action</Dropdown.Item>
          <Dropdown.Item>Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Separated link</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown as={ButtonGroup}>
        <Button theme="secondary" size="sm">
          Small split button
        </Button>
        <Dropdown.Button theme="secondary" size="sm" />
        <Dropdown.Menu>
          <Dropdown.Item>Action</Dropdown.Item>
          <Dropdown.Item>Another action</Dropdown.Item>
          <Dropdown.Item>Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Separated link</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Prime>
  );
}

export function DarkMenu() {
  return (
    <Dropdown>
      <Dropdown.Button theme="secondary">Dropdown button</Dropdown.Button>
      <Dropdown.Menu dark>
        <Dropdown.Item active>Action</Dropdown.Item>
        <Dropdown.Item>Another action</Dropdown.Item>
        <Dropdown.Item>Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Separated link</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
DarkMenu.storyName = "Dark menu";

export function Dropup() {
  return (
    <Dropdown as={ButtonGroup} drop="up">
      <Dropdown.Button>Dropup</Dropdown.Button>
      <Dropdown.Menu>
        <Dropdown.Item active>Action</Dropdown.Item>
        <Dropdown.Item>Another action</Dropdown.Item>
        <Dropdown.Item>Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Separated link</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export function Dropright() {
  return (
    <Dropdown as={ButtonGroup} drop="end">
      <Dropdown.Button>Dropright</Dropdown.Button>
      <Dropdown.Menu>
        <Dropdown.Item active>Action</Dropdown.Item>
        <Dropdown.Item>Another action</Dropdown.Item>
        <Dropdown.Item>Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Separated link</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export function Dropleft() {
  return (
    <Dropdown as={ButtonGroup} drop="start">
      <Dropdown.Button>Dropleft</Dropdown.Button>
      <Dropdown.Menu>
        <Dropdown.Item active>Action</Dropdown.Item>
        <Dropdown.Item>Another action</Dropdown.Item>
        <Dropdown.Item>Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Separated link</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export function Text() {
  return (
    <Prime d="flex">
      <Dropdown me={2}>
        <Dropdown.Button>Text</Dropdown.Button>
        <Dropdown.Menu>
          <Dropdown.Text>Dropdown item text</Dropdown.Text>
          <Dropdown.Item active>Action</Dropdown.Item>
          <Dropdown.Item disabled>Another action</Dropdown.Item>
          <Dropdown.Item>Something else here</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Button>Text</Dropdown.Button>
        <Dropdown.Menu p={4} text="muted" style={{ maxWidth: "200px" }}>
          <Prime as="p">
            Some example text that's free-flowing within the dropdown menu.
          </Prime>
          <Prime as="p" mb={0}>
            And this is more example text.
          </Prime>
        </Dropdown.Menu>
      </Dropdown>
    </Prime>
  );
}

export function Header() {
  return (
    <Dropdown>
      <Dropdown.Button>Dropdown header</Dropdown.Button>
      <Dropdown.Menu>
        <Dropdown.Header>Dropdown header</Dropdown.Header>
        <Dropdown.Item active>Action</Dropdown.Item>
        <Dropdown.Item disabled>Another action</Dropdown.Item>
        <Dropdown.Item>Something else here</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
