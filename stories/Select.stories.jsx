import { useState } from "react";
import { Form, Prime } from "../src/components";

export default {
  title: "Form/Select",
  component: Form.Select,
  subcomponents: {
    "Select.Option": Form.Select.Option,
    Prime,
  },
  parameters: {
    docs: {
      description: {
        component:
          "Provides a dropdown selection control for choosing one or more options from a predefined list.",
      },
    },
  },
};

export function Default() {
  return (
    <Form.Select>
      <Form.Select.Option selected>Open this select menu</Form.Select.Option>
      <Form.Select.Option value={1}>One</Form.Select.Option>
      <Form.Select.Option value={2}>Two</Form.Select.Option>
      <Form.Select.Option value={3}>Three</Form.Select.Option>
    </Form.Select>
  );
}

export function Small() {
  return (
    <Form.Select size="sm">
      <Form.Select.Option selected>Open this select menu</Form.Select.Option>
      <Form.Select.Option value={1}>One</Form.Select.Option>
      <Form.Select.Option value={2}>Two</Form.Select.Option>
      <Form.Select.Option value={3}>Three</Form.Select.Option>
    </Form.Select>
  );
}

export function Large() {
  return (
    <Form.Select size="lg">
      <Form.Select.Option selected>Open this select menu</Form.Select.Option>
      <Form.Select.Option value={1}>One</Form.Select.Option>
      <Form.Select.Option value={2}>Two</Form.Select.Option>
      <Form.Select.Option value={3}>Three</Form.Select.Option>
    </Form.Select>
  );
}

export function Multiple() {
  const [value, setValue] = useState([]);

  const handleChange = (event) => {
    const val = event.target.value;
    setValue((prev) =>
      !prev.includes(val) ? [...prev, val] : prev.filter((v) => v !== val),
    );
    console.log(value);
  };

  return (
    <>
      <Form.Select
        value={value}
        onChange={handleChange}
        multiple
        visibleOptions={3}
        required>
        <Form.Select.Option value="1">One</Form.Select.Option>
        <Form.Select.Option value="2">Two</Form.Select.Option>
        <Form.Select.Option value="3">Three</Form.Select.Option>
      </Form.Select>
      <Prime mt={2}>Selected values: {value}</Prime>
    </>
  );
}

export function Disabled() {
  return (
    <Form.Select disabled>
      <Form.Select.Option selected>Open this select menu</Form.Select.Option>
      <Form.Select.Option value={1}>One</Form.Select.Option>
      <Form.Select.Option value={2}>Two</Form.Select.Option>
      <Form.Select.Option value={3}>Three</Form.Select.Option>
    </Form.Select>
  );
}
