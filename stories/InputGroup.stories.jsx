import { useState } from "react";
import {
  Form,
  InputGroup,
  Control,
  Prime,
  Check,
  Button,
  Dropdown,
  Select,
} from "../src/components";

export default {
  title: "Form/InputGroup",
  component: Form.InputGroup,
  subomponents: {
    "InputGroup.Text": Form.InputGroup.Text,
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
    <Form.InputGroup>
      <Form.InputGroup.Text>@</Form.InputGroup.Text>
      <Form.Control placeholder="Username" />
    </Form.InputGroup>
  );
}

export function Size() {
  const sizeList = ["sm", undefined, "lg"];

  const lables = ["Small", "Default", "Large"];

  return sizeList.map((size, index) => (
    <Form.InputGroup key={lables[index]} size={size} mt={index !== 0 && 3}>
      <Form.InputGroup.Text>{lables[index]}</Form.InputGroup.Text>
      <Form.Control />
    </Form.InputGroup>
  ));
}

export function CheckAndRadios() {
  return (
    <>
      <Form.InputGroup mb={3}>
        <Form.InputGroup.Text>
          <Form.Check m={0} />
        </Form.InputGroup.Text>
        <Form.Control />
      </Form.InputGroup>
      <Form.InputGroup>
        <Form.InputGroup.Text>
          <Form.Check type="radio" />
        </Form.InputGroup.Text>
        <Form.Control />
      </Form.InputGroup>
    </>
  );
}

export function MultipleInputs() {
  return (
    <Form.InputGroup>
      <Form.InputGroup.Text>First and last name</Form.InputGroup.Text>
      <Form.Control />
      <Form.Control />
    </Form.InputGroup>
  );
}
MultipleInputs.storyName = "Multiple inputs";

export function MultipleAddons() {
  return (
    <>
      <Form.InputGroup mb={3}>
        <Form.InputGroup.Text>$</Form.InputGroup.Text>
        <Form.InputGroup.Text>0.00</Form.InputGroup.Text>
        <Form.Control />
      </Form.InputGroup>
      <Form.InputGroup>
        <Form.Control />
        <Form.InputGroup.Text>$</Form.InputGroup.Text>
        <Form.InputGroup.Text>0.00</Form.InputGroup.Text>
      </Form.InputGroup>
    </>
  );
}
MultipleAddons.storyName = "Multiple addons";

export function ButtonAddons() {
  return (
    <Form.InputGroup>
      <Form.Control placeholder="Recipient's username" />
      <Button tone="success" outline>
        Button
      </Button>
    </Form.InputGroup>
  );
}

export function Dropdowns() {
  return (
    <Form.InputGroup>
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
      <Form.Control />
    </Form.InputGroup>
  );
}

export function SegmentedButtons() {
  return (
    <Form.InputGroup>
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
      <Form.Control />
    </Form.InputGroup>
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
    <Form.InputGroup>
      <Button tone="success" outline onClick={handleReset}>
        Reset value
      </Button>
      <Form.Select value={selectedValue} onChange={handleChange}>
        <Form.Select.Option value="">Choose..</Form.Select.Option>
        <Form.Select.Option value={1}>One</Form.Select.Option>
        <Form.Select.Option value={2}>Two</Form.Select.Option>
        <Form.Select.Option value={3}>Three</Form.Select.Option>
      </Form.Select>
    </Form.InputGroup>
  );
}
