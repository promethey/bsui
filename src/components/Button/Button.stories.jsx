// @ts-nocheck
import { Button, Prime } from "components";
import { capitalize } from "helpers";

export default {
  title: "Components/Button",
  component: Button,
  subcomponents: { Prime },
  parameters: {
    docs: {
      description: {
        component: `Use Bootstrap custom button styles for actions in forms,
        dialogs, and more with support for multiple sizes, states, and more`,
      },
    },
  },
  args: { onClick: null },
};

function DefaultTemplate(args) {
  return <Button {...args} />;
}

export function All() {
  /** @type {Array<"primary"|"secondary"|"success"|"danger"|"warning"|"info"|"light"|"dark"|"link">} */
  const themes = [
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
    <>
      {themes.map((theme) => (
        <Button key={theme} me={2} theme={theme}>
          {capitalize(theme)}
        </Button>
      ))}
    </>
  );
}

export function Outlines() {
  /** @type {Array<"primary"|"secondary"|"success"|"danger"|"warning"|"info"|"light"|"dark"|"link">} */
  const themes = [
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
    <>
      {themes.map((theme) => (
        <Button key={theme} me={2} theme={theme} outline>
          {capitalize(theme)}
        </Button>
      ))}
    </>
  );
}

export function Width() {
  return (
    <Prime flex={{ xs: { dir: "column" } }} p={2} bg="light" border>
      <Button w={25} mw={100} mb={2}>
        Width 25%
      </Button>
      <Button w={50} mb={2}>
        Width 50%
      </Button>
      <Button w={75} mb={2}>
        Width 75%
      </Button>
      <Button w={100} mb={2}>
        Width 100%
      </Button>
      <Button w="auto" mb={2}>
        Width auto
      </Button>
      <Button w={100}>Block</Button>
    </Prime>
  );
}

export function Opacity() {
  return (
    <>
      <Button opacity={100} me={2}>
        100%
      </Button>
      <Button opacity={75} me={2}>
        75%
      </Button>
      <Button opacity={50} me={2}>
        50%
      </Button>
      <Button opacity={25}>25%</Button>
    </>
  );
}

export function Tags() {
  /** @type {Array<"a"|"button"|"input">} */
  const types = ["a", "button", "input", "input", "input"];

  /** @type {Array<"submit"|"button"|"reset"|undefined>} */
  const buttonTypes = [undefined, "submit", "button", "submit", "reset"];

  const lables = ["Link", "Button", "Input", "Submit", "Reset"];

  return (
    <>
      {types.map((type, index) => (
        <Button
          key={index}
          as={type}
          value={type === "input" ? lables[index] : undefined}
          type={buttonTypes[index]}
          me={2}>
          {type === "input" ? null : lables[index]}
        </Button>
      ))}
    </>
  );
}

export const Primary = DefaultTemplate.bind({});
Primary.args = {
  theme: "primary",
  children: "Primary",
};

export const Secondary = DefaultTemplate.bind({});
Secondary.args = {
  theme: "secondary",
  children: "Secondary",
};

export const Success = DefaultTemplate.bind({});
Success.args = {
  theme: "success",
  children: "Success",
};

export const Danger = DefaultTemplate.bind({});
Danger.args = {
  theme: "danger",
  children: "Danger",
};

export const Warning = DefaultTemplate.bind({});
Warning.args = {
  theme: "warning",
  children: "Warning",
};

export const Info = DefaultTemplate.bind({});
Info.args = {
  theme: "info",
  children: "Info",
};

export const Light = DefaultTemplate.bind({});
Light.args = {
  theme: "light",
  children: "Light",
};

export const Dark = DefaultTemplate.bind({});
Dark.args = {
  theme: "dark",
  children: "Dark",
};

export const Link = DefaultTemplate.bind({});
Link.args = {
  theme: "link",
  children: "Link",
};

export const Outline = DefaultTemplate.bind({});
Outline.args = {
  theme: "primary",
  outline: true,
  children: "Outline",
};

export const Small = DefaultTemplate.bind({});
Small.args = {
  theme: "primary",
  size: "sm",
  children: "Small",
};

export const Large = DefaultTemplate.bind({});
Large.args = {
  theme: "primary",
  size: "lg",
  children: "Large",
};

export const Disabled = DefaultTemplate.bind({});
Disabled.args = {
  theme: "primary",
  disabled: true,
  children: "Disabled",
};

export const DisabledLink = DefaultTemplate.bind({});
DisabledLink.args = {
  as: "a",
  theme: "primary",
  disabled: true,
  children: "Disabled",
};
DisabledLink.storyName = "Disabled link";

export const DisabledInput = DefaultTemplate.bind({});
DisabledInput.args = {
  as: "input",
  theme: "primary",
  disabled: true,
  value: "Disabled",
};
DisabledInput.storyName = "Disabled input";

export const Block = DefaultTemplate.bind({});
Block.args = {
  theme: "primary",
  w: 100,
  children: "Block",
};

export function ToggleStates() {
  const examples = [
    {
      pressed: false,
      disabled: false,
      label: "Toggle button",
    },
    {
      pressed: true,
      disabled: false,
      label: "Active toggle button",
    },
    {
      pressed: false,
      disabled: true,
      label: "Disabled toggle button",
    },
  ];

  return (
    <>
      {examples.map(({ pressed, label, disabled }) => (
        <Button
          key={label}
          data-bs-toggle="button"
          pressed={pressed}
          disabled={disabled}
          me={2}>
          {label}
        </Button>
      ))}
    </>
  );
}
ToggleStates.storyName = "Toggle states";

export function ToggleStatesForLinks() {
  const examples = [
    {
      pressed: false,
      disabled: false,
      label: "Toggle button",
    },
    {
      pressed: true,
      disabled: false,
      label: "Active toggle button",
    },
    {
      pressed: false,
      disabled: true,
      label: "Disabled toggle button",
    },
  ];

  return (
    <>
      {examples.map(({ pressed, label, disabled }) => (
        <Button key={label} as="a" pressed={pressed} disabled={disabled} me={2}>
          {label}
        </Button>
      ))}
    </>
  );
}
ToggleStatesForLinks.storyName = "Toggle states for links";
