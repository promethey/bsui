import { FloatingLabel, Control, Prime, Select } from "../src/components";

export default {
  title: "Components/Form/FloatingLabel",
  component: FloatingLabel,
  subcomponents: {
    Prime,
  },
  parameters: {
    docs: {
      description: {
        component: "Displays a floating label for form controls.",
      },
    },
  },
};

export function Default() {
  return (
    <>
      <FloatingLabel label="Email address" mb={3}>
        <Control id="input_email" type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel label="Password">
        <Control id="input_password" type="password" placeholder="Password" />
      </FloatingLabel>
    </>
  );
}

export function Value() {
  return (
    <FloatingLabel label="Email address">
      <Control
        id="email"
        type="email"
        value="test@example.com"
        placeholder="name@example.com"
      />
    </FloatingLabel>
  );
}

export function Selects() {
  return (
    <FloatingLabel label="Works with selects">
      <Select defaultValue="">
        <Select.Option value="">Open this select menu</Select.Option>
        <Select.Option value="1">One</Select.Option>
        <Select.Option value="2">Two</Select.Option>
        <Select.Option value="3">Three</Select.Option>
      </Select>
    </FloatingLabel>
  );
}
