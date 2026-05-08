// @ts-nocheck
import { Badge, Button, Prime } from "components";

export default {
  title: "Components/Badge",
  component: Badge,
  subcomponents: { Prime },
  parameters: {
    docs: {
      description: {
        component: `Documentation and examples for badges, our small count and labeling component.`,
      },
    },
  },
};

function Template(args) {
  return <Badge {...args} />;
}

export function BackgroundColors() {
  const examples = [
    "Primary",
    "Secondary",
    "Success",
    "Danger",
    "Warning",
    "Info",
    "Light",
    "Dark",
  ];

  return (
    <>
      {examples.map((bg) => {
        let text;

        switch (bg.toLowerCase()) {
          case "warning":
          case "info":
          case "light":
            text = "dark";
            break;

          default:
            text = "white";
            break;
        }

        return (
          <Badge key={bg} bg={bg.toLowerCase()} text={text} me={2}>
            {bg}
          </Badge>
        );
      })}
    </>
  );
}
BackgroundColors.storyName = "Background colors";

export function Headings() {
  const examples = ["h1", "h2", "h3", "h4", "h5", "h6"];

  return (
    <>
      {examples.map((Component) => (
        <Component>
          Example heading <Badge bg="secondary">New</Badge>
        </Component>
      ))}
    </>
  );
}

export function Notifications() {
  return (
    <Button>
      Notifications{" "}
      <Badge ms={2} bg="light" text="dark">
        4
      </Badge>
    </Button>
  );
}

export function Inbox() {
  return (
    <Button pos="relative">
      Inbox
      <Badge
        pos="absolute"
        top={0}
        start={100}
        translateMiddle
        bg="danger"
        rounded="pill">
        99+
      </Badge>
    </Button>
  );
}

export function Profile() {
  return (
    <Button pos="relative">
      Profile
      <Prime
        pos="absolute"
        top={0}
        start={100}
        translateMiddle
        p={2}
        bg="danger"
        border={{ color: "light" }}
        rounded="circle"
      />
    </Button>
  );
}

export const Primary = Template.bind({});
Primary.args = {
  bg: "primary",
  children: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  bg: "secondary",
  children: "Secondary",
};

export const Success = Template.bind({});
Success.args = {
  bg: "success",
  children: "Success",
};

export const Danger = Template.bind({});
Danger.args = {
  bg: "danger",
  children: "Danger",
};

export const Warning = Template.bind({});
Warning.args = {
  bg: "warning",
  text: "dark",
  children: "Warning",
};

export const Info = Template.bind({});
Info.args = {
  bg: "info",
  text: "dark",
  children: "Info",
};

export const Light = Template.bind({});
Light.args = {
  bg: "light",
  text: "dark",
  children: "Light",
};

export const Dark = Template.bind({});
Dark.args = {
  bg: "dark",
  children: "Dark",
};

export function PillBadges() {
  return (
    <>
      {[
        "Primary",
        "Secondary",
        "Success",
        "Danger",
        "Warning",
        "Info",
        "Light",
        "Dark",
      ].map((bg) => {
        let text;

        switch (bg.toLowerCase()) {
          case "warning":
          case "info":
          case "light":
            text = "dark";
            break;

          default:
            text = "white";
            break;
        }

        return (
          <Badge
            key={bg}
            bg={bg.toLowerCase()}
            text={text}
            me={2}
            rounded="pill">
            {bg}
          </Badge>
        );
      })}
    </>
  );
}
PillBadges.storyName = "Pill badges";
