// @ts-nocheck
import { Button, ButtonGroup } from "components";

export default {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  subcomponents: { Button },
  parameters: {
    docs: {
      description: {
        component: "Organaizes related buttons into a single group",
      },
    },
  },
};

function Template(args) {
  return <ButtonGroup {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  children: [
    <Button>Left</Button>,
    <Button>Middle</Button>,
    <Button>Right</Button>,
  ],
};

export const Pressed = Template.bind({});
Pressed.args = {
  children: [
    <Button as="a" pressed aria-current="page">
      Active link
    </Button>,
    <Button as="a">Link</Button>,
    <Button as="a">Link</Button>,
  ],
};

export const MixedStyles = Template.bind({});
MixedStyles.args = {
  "aria-label": "Basic mixed styles example",
  children: [
    <Button theme="danger">Left</Button>,
    <Button theme="warning">Middle</Button>,
    <Button theme="success">Right</Button>,
  ],
};
MixedStyles.storyName = "Mixed styles";

export const OutlinedStyles = Template.bind({});
OutlinedStyles.args = {
  "aria-label": "Basic outlined example",
  children: [
    <Button outline>Left</Button>,
    <Button outline>Middle</Button>,
    <Button outline>Right</Button>,
  ],
};
OutlinedStyles.storyName = "Outlines styles";

export function Sizing() {
  return (
    <>
      <ButtonGroup size="lg">
        <Button outline>Left</Button>
        <Button outline>Middle</Button>
        <Button outline>Right</Button>
      </ButtonGroup>
      <div className="my-2" />
      <ButtonGroup>
        <Button outline>Left</Button>
        <Button outline>Middle</Button>
        <Button outline>Right</Button>
      </ButtonGroup>
      <div className="my-2" />
      <ButtonGroup size="sm">
        <Button outline>Left</Button>
        <Button outline>Middle</Button>
        <Button outline>Right</Button>
      </ButtonGroup>
    </>
  );
}

export const Vertical = Template.bind({});
Vertical.args = {
  "aria-label": "Basic vertical buttons example",
  vertical: true,
  children: [
    <Button outline>Button #1</Button>,
    <Button outline>Button #2</Button>,
    <Button outline>Button #3</Button>,
    <Button outline>Button #4</Button>,
    <Button outline>Button #5</Button>,
    <Button outline>Button #6</Button>,
  ],
};
Vertical.storyName = "Vertical";
