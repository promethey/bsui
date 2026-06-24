import { useState } from "react";
import { Select, Prime } from "../src/components";

export default {
  title: "Components/Form/Select",
  component: Select,
  subcomponents: {
    "Select.Option": Select.Option,
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
    <Select>
      <Select.Option selected>Open this select menu</Select.Option>
      <Select.Option value={1}>One</Select.Option>
      <Select.Option value={2}>Two</Select.Option>
      <Select.Option value={3}>Three</Select.Option>
    </Select>
  );
}

export function Small() {
  return (
    <Select size="sm">
      <Select.Option selected>Open this select menu</Select.Option>
      <Select.Option value={1}>One</Select.Option>
      <Select.Option value={2}>Two</Select.Option>
      <Select.Option value={3}>Three</Select.Option>
    </Select>
  );
}

export function Large() {
  return (
    <Select size="lg">
      <Select.Option selected>Open this select menu</Select.Option>
      <Select.Option value={1}>One</Select.Option>
      <Select.Option value={2}>Two</Select.Option>
      <Select.Option value={3}>Three</Select.Option>
    </Select>
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
      <Select
        value={value}
        onChange={handleChange}
        multiple
        visibleOptions={3}
        required>
        <Select.Option value="1">One</Select.Option>
        <Select.Option value="2">Two</Select.Option>
        <Select.Option value="3">Three</Select.Option>
      </Select>
      <Prime mt={2}>Selected values: {value}</Prime>
    </>
  );
}

export function Disabled() {
  return (
    <Select disabled>
      <Select.Option selected>Open this select menu</Select.Option>
      <Select.Option value={1}>One</Select.Option>
      <Select.Option value={2}>Two</Select.Option>
      <Select.Option value={3}>Three</Select.Option>
    </Select>
  );
}
