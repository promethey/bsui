import { useState } from "react";
import {
  InputGroup,
  Control,
  Prime,
  Check,
  Button,
  Dropdown,
  Select,
} from "../src/components";

export default {
  title: "Components/Form/InputGroup",
  component: InputGroup,
  subomponents: {
    "InputGroup.Text": InputGroup.Text,
    Prime,
  },
  parameters: {
    docs: {
      description: {
        component:
          "Groups form controls, buttons, and text addons into a single compact input container.",
      },
    },
  },
};

export function Default() {
  return (
    <InputGroup>
      <InputGroup.Text>@</InputGroup.Text>
      <Control placeholder="Username" />
    </InputGroup>
  );
}

export function Size() {
  const sizeList = ["sm", undefined, "lg"];

  const lables = ["Small", "Default", "Large"];

  return sizeList.map((size, index) => (
    <InputGroup key={lables[index]} size={size} mt={index !== 0 && 3}>
      <InputGroup.Text>{lables[index]}</InputGroup.Text>
      <Control />
    </InputGroup>
  ));
}

export function CheckAndRadios() {
  return (
    <>
      <InputGroup mb={3}>
        <InputGroup.Text>
          <Check m={0} />
        </InputGroup.Text>
        <Control />
      </InputGroup>
      <InputGroup>
        <InputGroup.Text>
          <Check type="radio" />
        </InputGroup.Text>
        <Control />
      </InputGroup>
    </>
  );
}

export function MultipleInputs() {
  return (
    <InputGroup>
      <InputGroup.Text>First and last name</InputGroup.Text>
      <Control />
      <Control />
    </InputGroup>
  );
}
MultipleInputs.storyName = "Multiple inputs";

export function MultipleAddons() {
  return (
    <>
      <InputGroup mb={3}>
        <InputGroup.Text>$</InputGroup.Text>
        <InputGroup.Text>0.00</InputGroup.Text>
        <Control />
      </InputGroup>
      <InputGroup>
        <Control />
        <InputGroup.Text>$</InputGroup.Text>
        <InputGroup.Text>0.00</InputGroup.Text>
      </InputGroup>
    </>
  );
}
MultipleAddons.storyName = "Multiple addons";

export function ButtonAddons() {
  return (
    <InputGroup>
      <Control placeholder="Recipient's username" />
      <Button tone="success" outline>
        Button
      </Button>
    </InputGroup>
  );
}

export function Dropdowns() {
  return (
    <InputGroup>
      <Dropdown>
        <Dropdown.Toggle
          tone="success"
          outline
          rounded="start"
          className="rounded-0">
          Dropdown
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Action</Dropdown.Item>
          <Dropdown.Item>Another action</Dropdown.Item>
          <Dropdown.Item>Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Separated link</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Control />
    </InputGroup>
  );
}

export function SegmentedButtons() {
  return (
    <InputGroup>
      <Button tone="success" outline>
        Action
      </Button>
      <Dropdown>
        <Dropdown.Toggle tone="success" outline split rounded={0} />
        <Dropdown.Menu>
          <Dropdown.Item>Action</Dropdown.Item>
          <Dropdown.Item>Another action</Dropdown.Item>
          <Dropdown.Item>Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Separated link</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Control />
    </InputGroup>
  );
}

export function CustomSelect() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleReset = () => {
    setSelectedValue("");
  };

  return (
    <InputGroup>
      <Button tone="success" outline onClick={handleReset}>
        Reset value
      </Button>
      <Select value={selectedValue} onChange={handleChange}>
        <Select.Option value="">Choose..</Select.Option>
        <Select.Option value={1}>One</Select.Option>
        <Select.Option value={2}>Two</Select.Option>
        <Select.Option value={3}>Three</Select.Option>
      </Select>
    </InputGroup>
  );
}
