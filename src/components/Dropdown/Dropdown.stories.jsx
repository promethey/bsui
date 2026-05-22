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
        component: "Dropdown component",
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

export function DarkDropdowns() {
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
DarkDropdowns.storyName = "Dark dropdowns";
