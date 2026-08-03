// @ts-nocheck
import { useState } from "react";
import { Alert, Button, Prime } from "components";
import { capitalize } from "helpers";

export default {
  title: "Components/Alert",
  component: Alert,
  subcomponents: {
    "Alert.Heading": Alert.Heading,
    "Alert.Link": Alert.Link,
    Prime,
  },
  parameters: {
    docs: {
      description: {
        component: "Displays contextual feedback and status messages",
      },
    },
  },
  args: { onClose: null },
};

function Template(args) {
  return <Alert {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  children: "A simple default alert—check it out!",
};

export function Themes() {
  const tone = [
    "primary",
    "secondary",
    "danger",
    "success",
    "warning",
    "info",
    "light",
    "dark",
  ];

  return (
    <>
      {tone.map((tone) => (
        <Alert tone={tone}>{capitalize(tone)}</Alert>
      ))}
    </>
  );
}
Themes.storyName = "Themes";

export function Headings() {
  return (
    <Alert tone="secondary">
      <Alert.Heading as="h1">H1</Alert.Heading>
      <Alert.Heading as="h2">H2</Alert.Heading>
      <Alert.Heading as="h3">H3</Alert.Heading>
    </Alert>
  );
}
Headings.storyName = "Headings";

export function LiveExample() {
  const [show, setShow] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setShow((prev) => !prev);
  };

  const handleClose = (event) => {
    event.preventDefault();
    setShow(false);
  };

  return (
    <>
      {show ? (
        <Alert tone="success" dismissible mb={0} onClose={handleClose}>
          Nice, you triggered this alert message!
        </Alert>
      ) : (
        <Button tone="primary" onClick={handleClick}>
          Live Alert
        </Button>
      )}
    </>
  );
}
LiveExample.storyName = "Live example";

export const Primary = Template.bind({});
Primary.args = {
  tone: "primary",
  children: "A simple primary alert—check it out!",
};

export const Secondary = Template.bind({});
Secondary.args = {
  tone: "secondary",
  children: "A simple secondary alert—check it out!",
};

export const Success = Template.bind({});
Success.args = {
  tone: "success",
  children: "A simple success alert—check it out!",
};

export const Danger = Template.bind({});
Danger.args = {
  tone: "danger",
  children: "A simple danger alert—check it out!",
};

export const Info = Template.bind({});
Info.args = {
  tone: "info",
  children: "A simple info alert—check it out!",
};

export const Light = Template.bind({});
Light.args = {
  tone: "light",
  children: "A simple light alert—check it out!",
};

export const Dark = Template.bind({});
Dark.args = {
  tone: "dark",
  children: "A simple dark alert—check it out!",
};

export function LinkColor() {
  return (
    <Alert>
      A simple primary alert with{" "}
      <Alert.Link to="https://www.getbootstrap.com">an example link</Alert.Link>{" "}
      Give it a click if you like.
    </Alert>
  );
}
LinkColor.storyName = "Link color";

export function Icons() {
  const icons = [
    "info-circle-fill",
    "check-circle-fill",
    "exclamation-triangle-fill",
    "exclamation-triangle-fill",
  ];

  const tone = ["primary", "success", "warning", "danger"];

  return (
    <>
      {icons.map((icon, index) => (
        <Alert tone={tone[index]} d="flex" flex={{ xs: { align: "center" } }}>
          <Prime d="inline-block" me={2}>
            <i className={"bi bi-" + icon} />
          </Prime>
          An example {tone[index]} alert with an icon
        </Alert>
      ))}
    </>
  );
}

export const Dismissing = Template.bind({});
Dismissing.args = {
  tone: "warning",
  dismissible: true,
  animated: true,
  children: [
    <Prime as="strong">Holy guacamole!</Prime>,
    " ",
    "You should check in on some of those fields below.",
  ],
};

export const AdditionalContent = Template.bind({});
AdditionalContent.args = {
  tone: "success",
  children: [
    <Alert.Heading>Well done!</Alert.Heading>,
    <Prime>
      Aww yeah, you successfully read this important alert message. This example
      text is going to run a bit longer so that you can see how spacing within
      an alert works with this kind of content.
    </Prime>,
    <hr />,
    <Prime mb={0}>
      Whenever you need to, be sure to use margin utilities to keep things nice
      and tidy.
    </Prime>,
  ],
};
AdditionalContent.storyName = "Additional content";
