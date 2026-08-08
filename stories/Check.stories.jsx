import { useState } from "react";
import { Form, Prime } from "../src/components";

export default {
  title: "Form/Check",
  component: Form.Check,
  subcomponents: {
    "Check.Label": Form.Check.Label,
    "Check.Input": Form.Check.Input,
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
    <Form.Check
      id="flexDefault"
      label="Default checkbox"
      checked={checked}
      onChange={(event) => setChecked(event.target.checked)}
    />
  );
}

export function Checked() {
  return (
    <Form.Check id="flexCheckChecked" label="Default checkbox" defaultChecked />
  );
}

export function Disabled() {
  return (
    <>
      <Form.Check id="flexCheckDisabled" label="Disabled checkbox" disabled />
      <Form.Check
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
      <Form.Check
        id="flexRadioDefault1"
        type="radio"
        name="ratio_example"
        label="Default radio"
        defaultChecked
      />
      <Form.Check
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
      <Form.Check
        id="flexRadioDisabled"
        type="radio"
        name="ratio_example_disabled"
        label="Default radio"
        defaultChecked
        disabled
      />
      <Form.Check
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
      <Form.Check
        type="switch"
        id="flexSwitchCheckDefault"
        label="Default switch checkbox input"
      />
      <Form.Check
        type="switch"
        id="flexSwitchCheckChecked"
        label="Checked switch checkbox input"
        defaultChecked
      />
      <Form.Check
        type="switch"
        id="flexSwitchCheckDisabled"
        label="Disabled switch checkbox input"
        disabled
      />
      <Form.Check
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
        <Form.Check id="inlineCheckbox1" label="1" value="option1" inline />
        <Form.Check id="inlineCheckbox1" label="2" value="option2" inline />
        <Form.Check
          id="inlineCheckbox1"
          label="3 (disabled)"
          value="option3"
          inline
          disabled
        />
      </Prime>
      <Prime>
        <Form.Check
          type="radio"
          id="inlineCheckbox1"
          label="1"
          value="option1"
          inline
          name="inlineRadioOptions"
        />
        <Form.Check
          type="radio"
          id="inlineCheckbox1"
          label="2"
          value="option2"
          inline
          name="inlineRadioOptions"
        />
        <Form.Check
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
