import { Range, Prime } from "../src/components";

export default {
  title: "Components/Forms/Range",
  component: Range,
  subcomponents: {
    Prime,
  },
  parameters: {
    docs: {
      description: {
        component: "Range component",
      },
    },
  },
};

export function Default() {
  return <Range />;
}

export function Disabled() {
  return <Range disabled />;
}

export function MinAndMax() {
  return <Range min={0} max={5} />;
}
MinAndMax.storyName = "Min and max";

export function Steps() {
  return <Range min={0} max={5} step={0.5} />;
}
