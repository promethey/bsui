import { useState } from "react";
import { Check, Prime } from "../src/components";

export default {
  title: "Components/Form/Check",
  component: Check,
  subcomponents: {
    "Check.Label": Check.Label,
    "Check.Input": Check.Input,
    Prime,
  },
  parameters: {
    docs: {
      description: {
        component:
          "Renders a checkbox, radio button, or switch control with an associated label and Bootstrap styling.",
      },
    },
  },
};

export function Default() {
  const [checked, setChecked] = useState(false);

  return (
    <Check
      id="flexDefault"
      label="Default checkbox"
      checked={checked}
      onChange={(event) => setChecked(event.target.checked)}
    />
  );
}

export function Checked() {
  return (
    <Check id="flexCheckChecked" label="Default checkbox" defaultChecked />
  );
}

export function Disabled() {
  return (
    <>
      <Check id="flexCheckDisabled" label="Disabled checkbox" disabled />
      <Check
        id="flexCheckCheckedDisabled"
        label="Disabled checked checkbox"
        checked
        disabled
      />
    </>
  );
}

export function Radios() {
  return (
    <>
      <Check
        id="flexRadioDefault1"
        type="radio"
        name="ratio_example"
        label="Default radio"
        defaultChecked
      />
      <Check
        id="flexRadioDefault2"
        type="radio"
        name="ratio_example"
        label="Default checked radio"
      />
    </>
  );
}

export function RadiosDisabled() {
  return (
    <>
      <Check
        id="flexRadioDisabled"
        type="radio"
        name="ratio_example_disabled"
        label="Default radio"
        defaultChecked
        disabled
      />
      <Check
        id="flexRadioCheckedDisabled"
        type="radio"
        name="ratio_example_disabled"
        label="Default checked radio"
        disabled
      />
    </>
  );
}
RadiosDisabled.storyName = "Radios disabled";

export function Switch() {
  return (
    <>
      <Check
        type="switch"
        id="flexSwitchCheckDefault"
        label="Default switch checkbox input"
      />
      <Check
        type="switch"
        id="flexSwitchCheckChecked"
        label="Checked switch checkbox input"
        defaultChecked
      />
      <Check
        type="switch"
        id="flexSwitchCheckDisabled"
        label="Disabled switch checkbox input"
        disabled
      />
      <Check
        type="switch"
        id="flexSwitchCheckCheckedDisabled"
        label="Disabled checked switch checkbox input"
        defaultChecked
        disabled
      />
    </>
  );
}

export function Inline() {
  return (
    <>
      <Prime mb={2}>
        <Check id="inlineCheckbox1" label="1" value="option1" inline />
        <Check id="inlineCheckbox1" label="2" value="option2" inline />
        <Check
          id="inlineCheckbox1"
          label="3 (disabled)"
          value="option3"
          inline
          disabled
        />
      </Prime>
      <Prime>
        <Check
          type="radio"
          id="inlineCheckbox1"
          label="1"
          value="option1"
          inline
          name="inlineRadioOptions"
        />
        <Check
          type="radio"
          id="inlineCheckbox1"
          label="2"
          value="option2"
          inline
          name="inlineRadioOptions"
        />
        <Check
          type="radio"
          id="inlineCheckbox1"
          label="3 (disabled)"
          value="option3"
          inline
          disabled
          name="inlineRadioOptions"
        />
      </Prime>
    </>
  );
}
