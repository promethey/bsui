// @ts-nocheck
import { Form, Prime } from "components";

export default {
  title: "Form/Control",
  component: Form.Control,
  subcomponents: {
    Prime,
  },
  parameters: {
    docs: {
      description: {
        component: "User input components such as input and textarea fields.",
      },
    },
  },
};

export function Default() {
  return (
    <Form.Control placeholder="Form control" placeholder="name@example.com" />
  );
}

export function Textarea() {
  return <Form.Control as="textarea" rows={3} />;
}

export function Sizing() {
  const examples = ["lg", false, "sm"];

  return examples.map((example) => (
    <Form.Control
      size={example}
      placeholder={`.form-control-${example}`}
      mb={3}
    />
  ));
}

export function Disabled() {
  return <Form.Control placeholder="Disabled input" disabled />;
}

export function Readonly() {
  return (
    <Form.Control
      placeholder="Disabled input"
      value="Disabled readonly input"
      disabled
      readOnly
    />
  );
}

export function Plaintext() {
  return <Form.Control plaintext value="email@example.com" readOnly />;
}

export function File() {
  return (
    <>
      <Form.Control type="file" mb={3} />
      <Form.Control type="file" multiple mb={3} />
      <Form.Control type="file" disabled mb={3} />
      <Form.Control type="file" size="sm" mb={3} />
      <Form.Control type="file" size="lg" />
    </>
  );
}

export function Color() {
  return (
    <Form.Control type="color" value="#563d7c" title="Choose your color" />
  );
}
