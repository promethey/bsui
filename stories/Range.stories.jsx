import { useState } from "react";
import { Range, Prime, Control, Button } from "../src/components";

export default {
  title: "Components/Form/Range",
  component: Range,
  subcomponents: {
    Prime,
  },
  parameters: {
    docs: {
      description: {
        component:
          "Allows users to select a numeric value within a specified range using a slider control.",
      },
    },
  },
};

export function Default() {
  return <Range />;
}

export function Contollable() {
  const defaultValue = 10;

  const [value, setValue] = useState(defaultValue);

  const min = 0;
  const max = 100;
  const step = 1;

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleReset = () => {
    setValue(defaultValue);
  };

  return (
    <>
      <Prime d="flex" flex="center">
        <Range
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
        />
        <Control
          text={{ align: "center" }}
          ms={3}
          value={value}
          disabled
          style={{ maxWidth: "56px" }}
        />
      </Prime>
      <Button onClick={handleReset} disabled={value == defaultValue}>
        Reset value
      </Button>
    </>
  );
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
