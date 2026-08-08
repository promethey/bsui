import { Form, Prime } from "components";

export default {
  title: "Form/Label",
  component: Form.Label,
  subcomponents: {
    Prime,
  },
  parameters: {
    docs: {
      description: {
        component: "Displays a label associated with a form control.",
      },
    },
  },
};

export function Default() {
  return <Form.Label htmlFor="email">Email address</Form.Label>;
}

export function Custom() {
  return (
    <Form.Label htmlFor="email" className="text-primary fw-bold">
      Email address
    </Form.Label>
  );
}

export function WithControl() {
  return (
    <Prime style={{ maxWidth: "320px" }}>
      <Form.Label htmlFor="email">Email address</Form.Label>
      <Form.Control id="email" type="email" placeholder="name@example.com" />
    </Prime>
  );
}
