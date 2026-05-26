// @ts-nocheck
import { Button, ButtonGroup, Prime } from "components";

export default {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  subcomponents: { Button, Prime },
  parameters: {
    docs: {
      description: {
        component:
          "Groups multiple buttons into a single connected control container.",
      },
    },
  },
};

function Template(args) {
  return <ButtonGroup {...args} />;
}

export function Default() {
  return (
    <ButtonGroup>
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>
  );
}

export function Pressed() {
  return (
    <ButtonGroup>
      <Button as="a" pressed aria-current="page">
        Active link
      </Button>
      <Button as="a">Link</Button>
      <Button as="a">Link</Button>
    </ButtonGroup>
  );
}

export function MixedStyles() {
  return (
    <ButtonGroup>
      <Button theme="danger">Left</Button>
      <Button theme="warning">Middle</Button>
      <Button theme="success">Right</Button>
    </ButtonGroup>
  );
}

export function OutlinedStyles() {
  return (
    <ButtonGroup>
      <Button outline>Left</Button>
      <Button outline>Middle</Button>
      <Button outline>Right</Button>
    </ButtonGroup>
  );
}

export function Sizing() {
  return (
    <>
      <ButtonGroup size="lg">
        <Button outline>Left</Button>
        <Button outline>Middle</Button>
        <Button outline>Right</Button>
      </ButtonGroup>
      <Prime my={2} />
      <ButtonGroup>
        <Button outline>Left</Button>
        <Button outline>Middle</Button>
        <Button outline>Right</Button>
      </ButtonGroup>
      <Prime my={2} />
      <ButtonGroup size="sm">
        <Button outline>Left</Button>
        <Button outline>Middle</Button>
        <Button outline>Right</Button>
      </ButtonGroup>
    </>
  );
}

export function Vertical() {
  return (
    <ButtonGroup vertical>
      <Button outline>Button #1</Button>
      <Button outline>Button #2</Button>
      <Button outline>Button #3</Button>
      <Button outline>Button #4</Button>
      <Button outline>Button #5</Button>
      <Button outline>Button #6</Button>
    </ButtonGroup>
  );
}
