import { Form, FloatingLabel, Control, Prime, Select } from "../src/components";

export default {
  title: "Form/FloatingLabel",
  component: Form.FloatingLabel,
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
      <Form.FloatingLabel label="Email address" mb={3}>
        <Form.Control
          id="input_email"
          type="email"
          placeholder="name@example.com"
        />
      </Form.FloatingLabel>
      <Form.FloatingLabel label="Password">
        <Form.Control
          id="input_password"
          type="password"
          placeholder="Password"
        />
      </Form.FloatingLabel>
    </>
  );
}

export function Value() {
  return (
    <Form.FloatingLabel label="Email address">
      <Form.Control
        id="email"
        type="email"
        value="test@example.com"
        placeholder="name@example.com"
      />
    </Form.FloatingLabel>
  );
}

export function Selects() {
  return (
    <Form.FloatingLabel label="Works with selects">
      <Form.Select defaultValue="">
        <Form.Select.Option value="">Open this select menu</Form.Select.Option>
        <Form.Select.Option value="1">One</Form.Select.Option>
        <Form.Select.Option value="2">Two</Form.Select.Option>
        <Form.Select.Option value="3">Three</Form.Select.Option>
      </Form.Select>
    </Form.FloatingLabel>
  );
}
